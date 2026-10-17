import type { NextConfig } from "next";

// Adresy starého Drupal webu (2010 až 2023), které má Google pořád v indexu.
// Diakritika je v URL zakódovaná, proto každá adresa ve dvou podobách.
const stareAdresy: [string, string][] = [
  ["/content/uvítání", "/"],
  ["/node/1", "/"],
  ["/content/ceník", "/cenik"],
  ["/content/ke-stažení", "/jak-na-ridicak#dokumenty"],
  ["/content/kontakt", "/kontakt"],
  ["/content/vozový-park", "/"],
  ["/content/fotogalerie", "/"],
  ["/content/o-nás", "/"],
  ["/gmaplocation", "/kontakt"],
  ["/rss.xml", "/"],
  ["/user/password", "/"],
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return stareAdresy.flatMap(([source, destination]) => {
      const encoded = encodeURI(source);
      const sources = encoded === source ? [source] : [source, encoded];
      return sources.map((s) => ({ source: s, destination, permanent: true }));
    });
  },
};

export default nextConfig;
