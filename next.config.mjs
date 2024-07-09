// @ts-check
import withPlaiceholder from "@plaiceholder/next";

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Your Next.js config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sabbir2609.pythonanywhere.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "openweathermap.org",
      },
      {
        protocol: "https",
        hostname: "sorsauth.sirv.com",
      },
      {
        protocol: "https",
        hostname: "pagedone.io",
      },
    ],
  },
};

export default withPlaiceholder(withPWA(nextConfig));