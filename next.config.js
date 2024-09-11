/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
            },
            {
                protocol: 'https',
                hostname: 'platform-lookaside.fbsbx.com',
            },
            {
                protocol: 'https',
                hostname: 'image-cdn-*.spotifycdn.com',
            },
            {
                protocol: 'https',
                hostname: 'mosaic.scdn.co',
            },
        ],
    },
};

module.exports = nextConfig;
