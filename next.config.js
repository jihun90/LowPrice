/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    nextConfig,
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
