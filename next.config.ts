import type { NextConfig } from "next";
import { site } from "./src/config/site";

const nextConfig: NextConfig = {
  // Docker uses standalone. Netlify sets NETLIFY=true and needs the default Next output.
  ...(process.env.NETLIFY ? {} : { output: "standalone" as const }),
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
