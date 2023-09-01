/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ads-partners.coupang.com',
            },
            {
                protocol: 'https',
                hostname: 'localhost',
            },
        ],
    },
};

module.exports = nextConfig;
