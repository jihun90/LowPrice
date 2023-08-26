import { searchProduct } from 'api/api';

import Product from './compents/product';

import type { SearchProductRequest } from '@/api/requestModel';
import type { SearchProduct } from '@/api/responseModel';

export default async function Apple() {
    const request: SearchProductRequest = {
        keyword: '가전디지털 아이폰14 자급제',
    };

    let productList: SearchProduct[] = [];
    productList = await searchProduct(request);

    return (
        <div>
            {productList.map((product) => (
                <Product
                    key={product.productId}
                    name={product.productName}
                    price={product.productPrice}
                />
            ))}
        </div>
    );
}
