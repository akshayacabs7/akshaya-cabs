import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable the "Powered by Next.js" header for cleaner HTTP responses
  poweredByHeader: false,

  // Image optimization — allow local images + future remote sources
  images: {
    formats: ["image/avif", "image/webp"],
    // Remote image domains (add as needed when using external CDNs)
    remotePatterns: [],
    // Device sizes for responsive images — covers all SVTT target viewports
    deviceSizes: [320, 360, 375, 390, 414, 430, 768, 820, 1024, 1280, 1366, 1440, 1536, 1920, 2560],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
