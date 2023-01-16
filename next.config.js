/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

// const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;

const nextConfig = {
  reactStrictMode: true,
  
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
}

module.exports = nextConfig
