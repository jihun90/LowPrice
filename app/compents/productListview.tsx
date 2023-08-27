import Product from '@/compents/product';

import type { SearchProduct } from '@/api/responseModel';

type props = { title: string; productList: SearchProduct[] };

export default function ProductListView(props: props) {
    return (
        <div className='my-3 p-3'>
            <h2 className='text-xl font-semibold'> {props.title}</h2>
            <div>
                <ul role='list'>
                    {props.productList.map((product) => (
                        <li key={product.productId} className='py-2'>
                            <Product
                                key={product.productId}
                                name={product.productName}
                                price={product.productPrice}
                                image={product.productImage}
                                url={product.productUrl}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
