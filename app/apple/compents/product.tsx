type prop = { name: string; image?: string; price: number; bestPrice?: number };

export default function Product(prop: prop) {
    return (
        <div className='flex flex-row'>
            <div className='inline-flex basis-20'>사진</div>
            <div className='inline-flex basis-full'>{prop.name}</div>
            <div className='inline-flex basis-60'>{prop.price}</div>
        </div>
    );
}
