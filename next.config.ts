import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cours/lart-de-se-fixer-les-objectifs-les-atteindre-et-les-atteindre",
        destination: "/cours/lart-de-se-fixer-les-objectifs-et-les-atteindre",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
