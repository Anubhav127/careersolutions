/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
                pathname: "/api/portraits/**",
            },
            {
                protocol: "https",
                hostname: "ui-avatars.com",
                pathname: "/api/**",
            }
        ],
        minimumCacheTTL: 60,
    },
};

export default nextConfig;
