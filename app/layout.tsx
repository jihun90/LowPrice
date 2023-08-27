import './globals.css';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Low Price',
    description: 'Low Price',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h1 className='text-4xl inline-block border font-bold'>
                <Link href='/'>Low Price</Link>
            </h1>
            <>{children}</>
            <h5 className='my-8 text-center align-middle text-sm text-gray-400'>
                이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의
                수수료를 제공받을 수 있습니다.
            </h5>
        </>
    );
}
