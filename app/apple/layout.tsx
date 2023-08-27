import Link from 'next/link';

export default function Apple({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Link href='/apple'>
                <h3 className='text-2xl inline-block font-semibold mx-1'>
                    Apple
                </h3>
            </Link>
            <>{children}</>
        </>
    );
}
