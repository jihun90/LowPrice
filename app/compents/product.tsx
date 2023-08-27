import Image from 'next/image';
import Link from 'next/link';

type prop = { name: string; image?: string; price: number; url: string };

export default async function Product(prop: prop) {
    return (
        <Link href={prop.url}>
            <div className='flex flex-row p-2 hover:bg-slate-100'>
                <div className='inline-flex basis-32 align-middle'>
                    <Image
                        alt={prop.name}
                        src={prop.image ?? ''}
                        width={150}
                        height={150}
                    />
                </div>
                <div className='inline-flex basis-full p-2'>{prop.name}</div>
                <div className='basis-48 p-2'>
                    <div className='text-sm text-center'>{getToday()}</div>
                    <div className='text-center underline font-bold'>{`${prop.price.toLocaleString(
                        'ko-KR'
                    )} 원`}</div>
                </div>
            </div>
        </Link>
    );
}

function getToday(): string {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
}
