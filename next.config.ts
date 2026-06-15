import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const suppressedCourses = [
      "parcours-dirigeant-delite",
      "parcours-ia-performance-professionnelle-delite",
      "parcours-manager-commercial-delite",
      "parcours-rh-capital-humain-delite",
      "parcours-clarte-performance-personnelle-delite",
      "parcours-manager-dequipe-4-0-vvip-3-tranches",
      "parcours-manager-dequipe-4-0-vvip",
      "kit-du-manager-augmente-ia",
      "parcours-manager-delite",
    ];
    return [
      {
        source: "/cours/lart-de-se-fixer-les-objectifs-les-atteindre-et-les-atteindre",
        destination: "/cours/lart-de-se-fixer-les-objectifs-et-les-atteindre",
        permanent: true,
      },
      ...suppressedCourses.map((slug) => ({
        source: `/cours/${slug}`,
        destination: "/tous-les-cours",
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
