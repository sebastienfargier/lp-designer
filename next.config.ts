import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fichiers lus à l'exécution par l'outil interne (maquettes, statuts de validation, liste des LP) :
  // à inclure explicitement dans les fonctions serverless (Vercel), le traçage automatique ne les voit pas.
  outputFileTracingIncludes: {
    "/": ["./app/**/page.tsx"],
    "/lames": ["./brand/lames-status.json"],
    "/lames/**": ["./brand/lames/**/*", "./brand/lames-status.json"],
  },
  images: {
    // Assets des landing pages Studi hébergées sur info.studi.com
    remotePatterns: [
      new URL("https://d9hhrg4mnvzow.cloudfront.net/info.studi.com/**"),
      // Médias du site studi.com (logos partenaires, visuels de formation)
      new URL("https://www.studi.com/sites/default/files/**"),
      // Miniatures des vidéos YouTube (tuiles vidéo)
      new URL("https://i.ytimg.com/vi/**"),
    ],
  },
};

export default nextConfig;
