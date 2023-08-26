import Product from './compents/product';

export default function Apple() {
    return (
        <div>
            <Product name={'product1'} price={1000} />
            <Product name={'product2'} price={1000} />
        </div>
    );
}
