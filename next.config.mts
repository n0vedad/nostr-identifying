import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/.well-known/nostr.json",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }
        ],
      },
    ]
  },
};

export default nextConfig;