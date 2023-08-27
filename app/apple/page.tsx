import { searchProduct } from 'api/api';

import Product from './compents/product';

import type { SearchProductRequest } from '@/api/requestModel';
import type { SearchProduct } from '@/api/responseModel';

export default async function Apple() {
    const request: SearchProductRequest = {
        keyword: 'Apple 정품 아이폰 14 자급제',
        imageSize: '150x150',
    };

    let productList: SearchProduct[] = [];
    productList = await searchProduct(request);

    return (
        <div>
            {productList.map(
                (product) =>
                    product.productName === request.keyword && (
                        <Product
                            key={product.productId}
                            name={product.productName}
                            price={product.productPrice}
                            image={product.productImage}
                            url={product.productUrl}
                        />
                    )
            )}
        </div>
    );
}
