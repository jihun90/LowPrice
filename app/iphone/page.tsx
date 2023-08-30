import { searchProduct } from '@/api/api';
import ProductListView from '@/compents/productListview';

import type { SearchProductRequest } from '@/api/requestModel';
import type { SearchProduct } from '@/api/responseModel';

const Iphone14SearchRequest: SearchProductRequest = {
    keyword: 'Apple 정품 아이폰 14 자급제',
    imageSize: '70x70',
};

const Iphone14ProSearchRequest: SearchProductRequest = {
    keyword: 'Apple 정품 아이폰 14 Pro 자급제',
    imageSize: '70x70',
};

const Iphone14ProMaxSearchRequest: SearchProductRequest = {
    keyword: 'Apple 정품 아이폰 14 Pro Max 자급제',
    imageSize: '70x70',
};

const Iphone14PlusSearchRequest: SearchProductRequest = {
    keyword: 'Apple 정품 아이폰 14 Plus 자급제',
    imageSize: '70x70',
};

export default async function Iphone() {
    return (
        <>
            <ProductListView
                title='아이폰14'
                productList={await makeProductList(Iphone14SearchRequest)}
            />
            <ProductListView
                title='아이폰14 Pro'
                productList={await makeProductList(Iphone14ProSearchRequest)}
            />

            <ProductListView
                title='아이폰14 Pro Max'
                productList={await makeProductList(Iphone14ProMaxSearchRequest)}
            />

            <ProductListView
                title='아이폰14 Plus'
                productList={await makeProductList(Iphone14PlusSearchRequest)}
            />
        </>
    );
}

async function makeProductList(request: SearchProductRequest) {
    let productList: SearchProduct[] = [];
    productList = await searchProduct(request);
    productList = productList.filter(
        (product) => product.productName === request.keyword && product
    );

    return productList;
}
