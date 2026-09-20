import type { NextConfig } from "next";
import { site } from "./src/config/site";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/menu",
        destination: site.menuUrl,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
