import { createHmac } from 'crypto';

import axios from 'axios';
import moment from 'moment';

import { isSearchResult } from './responseModel';

import type { SearchProductRequest } from './requestModel';
import type { SearchProduct } from './responseModel';
import type { AxiosRequestConfig } from 'axios';

const DOMAIN = 'https://api-gateway.coupang.com';
const BASE_URL = '/v2/providers/affiliate_open_api/apis/openapi/v1';
const SEARCH_URL = BASE_URL + '/products/search?';

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
    info: SearchProductRequest
): Promise<SearchProduct[]> {
    let productList: SearchProduct[] = [];

    const SECRET_KEY = process.env.SECRET_KEY ?? '';
    const ACCESS_KEY = process.env.ACCESS_KEY ?? '';

    axios.defaults.baseURL = DOMAIN;

    const queryString = toQueryString<SearchProductRequest>(info);
    const authorization = generateHmac(
        'GET',
        SEARCH_URL + queryString,
        SECRET_KEY,
        ACCESS_KEY
    );
    const searchURL: string = DOMAIN + SEARCH_URL + queryString;
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: SEARCH_URL,
        headers: { Authorization: authorization },
        data: searchURL,
    };

    const result = await axios.get(searchURL, config);
    if (isSearchResult(result.data.data)) {
        productList = result.data.data.productData;
    }
    return productList;
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
