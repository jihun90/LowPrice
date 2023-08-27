import Image from 'next/image';

type prop = { name: string; image?: string; price: number; bestPrice?: number };

export default function Product(prop: prop) {
    return (
        <div className='flex flex-row'>
            <Image
                className='inline-flex basis-20 align-middle'
                alt=''
                src={prop.image ?? ''}
                width={100}
                height={100}
            />
            <div className='inline-flex basis-full'>{prop.name}</div>
            <div className='inline-flex basis-60'>{prop.price}</div>
        </div>
    );
}
