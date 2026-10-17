import { addressLine, site } from "@/lib/site";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "@id": `${site.url}/#autoskola`,
  name: site.name,
  url: site.url,
  image: `${site.url}/foto/nubira.jpg`,
  telephone: site.phoneIntl,
  email: site.email,
  priceRange: "6 000 až 40 000 Kč",
  foundingDate: String(site.since),
  founder: { "@type": "Person", name: site.owner },
  identifier: { "@type": "PropertyValue", name: "IČO", value: site.ico },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: `${site.address.city}, ${site.address.part}`,
    postalCode: site.address.zip,
    addressRegion: "Ústecký kraj",
    addressCountry: "CZ",
  },
  areaServed: site.area.map((name) => ({ "@type": "Place", name })),
  description: `Autoškola v Chotějovicích u Bíliny, ${addressLine}.`,
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Úvod", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function offers(name: string, items: { nazev: string; skupina: string; cena: number }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    provider: { "@id": `${site.url}/#autoskola` },
    areaServed: site.area,
    offers: items.map((k) => ({
      "@type": "Offer",
      name: `Skupina ${k.skupina}: ${k.nazev}`,
      price: k.cena,
      priceCurrency: "CZK",
    })),
  };
}
