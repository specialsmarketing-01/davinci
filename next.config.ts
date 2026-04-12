import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** App root (avoids Turbopack picking parent folder when multiple lockfiles exist). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-davinci/", permanent: true },
      { source: "/careers", destination: "/about-davinci/careers/", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions/", permanent: true },
      { source: "/our-properties/buy", destination: "/our-properties/", permanent: true },
      { source: "/our-properties/rent", destination: "/rent/", permanent: true },
      {
        source: "/our-properties/international",
        destination: "/our-properties/international-properties/",
        permanent: true,
      },
      {
        source: "/our-properties/list",
        destination: "/our-properties/list-your-property/",
        permanent: true,
      },
      {
        source: "/services/dubai-residence-visa",
        destination: "/services/get-dubai-residence-visa/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
