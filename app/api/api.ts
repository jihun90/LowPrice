import { createHmac } from 'crypto';

import axios from 'axios';
import moment from 'moment';

import { isBaseResponse, isSearchResult, isShortenURL } from './responseModel';

import type { DeepLinkBody, SearchProductRequest } from './requestModel';
import type { SearchProduct, ShortenURL } from './responseModel';
import type { AxiosRequestConfig } from 'axios';

const DOMAIN = 'https://api-gateway.coupang.com';
const BASE_URL = '/v2/providers/affiliate_open_api/apis/openapi/v1';
const SEARCH_URL = BASE_URL + '/products/search?';
const DEEP_LINK_URL = BASE_URL + '/deeplink';

const SECRET_KEY = process.env.SECRET_KEY ?? '';
const ACCESS_KEY = process.env.ACCESS_KEY ?? '';

function generateHmac(
    method: string,
    url: string,
    secretKey: string,
    accessKey: string
) {
    const parts = url.split(/\?/);
    const [path, query = ''] = parts;

    const datetime = moment.utc().format('YYMMDD[T]HHmmss[Z]');
    const message = datetime + method + path + query;

    const signature = createHmac('sha256', secretKey)
        .update(message)
        .digest('hex');

    return `CEA algorithm=HmacSHA256, access-key=${accessKey}, signed-date=${datetime}, signature=${signature}`;
}

export async function searchProduct(
    request: SearchProductRequest
): Promise<SearchProduct[]> {
    let productList: SearchProduct[] = [];

    const queryString = toQueryString<SearchProductRequest>(request);
    const url: string = SEARCH_URL + queryString;
    const authorization = generateHmac('GET', url, SECRET_KEY, ACCESS_KEY);
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: SEARCH_URL,
        headers: { Authorization: authorization },
        data: url + queryString,
    };

    axios.defaults.baseURL = DOMAIN;
    const result = await axios.get(url, config);
    if (isSearchResult(result.data.data)) {
        productList = result.data.data.productData;
    }
    return productList;
}

export async function generateDeepLink(
    request: DeepLinkBody
): Promise<ShortenURL[]> {
    const deepLinks: ShortenURL[] = [];

    const authorization = generateHmac(
        'POST',
        DEEP_LINK_URL,
        SECRET_KEY,
        ACCESS_KEY
    );

    const config: AxiosRequestConfig = {
        method: 'POST',
        url: DEEP_LINK_URL,
        headers: { Authorization: authorization },
        data: request,
    };

    axios.defaults.baseURL = DOMAIN;
    const reponse = await axios.request(config);

    if (isBaseResponse<ShortenURL>(reponse)) {
        if (reponse.data.rCode !== 0) return deepLinks;

        reponse.data.data.forEach((shortenURL: unknown) => {
            if (isShortenURL(shortenURL)) {
                deepLinks.push(shortenURL);
            }
        });
    }

    return deepLinks;
}

function toQueryString<T>(obj: T): string {
    const params = new URLSearchParams();

    Object.keys(obj as object).forEach((key) => {
        const value = obj[key as keyof T];
        if (value) {
            params.append(key, value.toString());
        }
    });

    return params.toString();
}
