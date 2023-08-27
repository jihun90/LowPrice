import Image from 'next/image';
import Link from 'next/link';

type prop = { name: string; image?: string; price: number; url: string };

export default async function Product(prop: prop) {
    return (
        <Link href={prop.url}>
            <div className='flex flex-row my-1 p-2'>
                <div className='inline-flex basis-20 border-2 border-solid border-indigo-300'>
                    <Image
                        alt={prop.name}
                        src={prop.image ?? ''}
                        width={150}
                        height={150}
                    />
                </div>
                <div className='inline-flex basis-full p-2'>{prop.name}</div>
                <div className='inline-flex basis-60 p-2'>{prop.price}</div>
            </div>
        </Link>
    );
}
