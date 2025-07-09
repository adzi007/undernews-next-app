/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // domains: ['https://placehold.co'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'bootdey.com',
                port: '',
                pathname: '/img/Content/avatar/**',
            },
            {
                protocol: 'https',
                hostname: 'media.graphassets.com',
                port: '',
                // pathname: '/img/Content/avatar/**',
            },
            {
                protocol: 'https',
                hostname: 'ap-northeast-1.graphassets.com',
                port: '',
                // pathname: '/img/Content/avatar/**',
            },
        ],
    }
}

module.exports = nextConfig
