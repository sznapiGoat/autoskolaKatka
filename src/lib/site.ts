// Fakta o autoškole. Adresa a IČO podle ARES (stav 10/2026),
// telefon a e-mail z původního webu a z katalogu vsechny-autoskoly.cz.

export const site = {
  name: "Autoškola Katka",
  url: "https://www.autoskolakatka.cz",
  owner: "Kateřina Krajníková",
  ico: "62748921",
  since: 2010,
  phone: "724 974 771",
  phoneHref: "tel:+420724974771",
  phoneIntl: "+420724974771",
  email: "info@autoskolakatka.cz",
  whatsapp: "https://wa.me/420724974771",
  address: {
    street: "Smetanova 18",
    part: "Chotějovice",
    zip: "418 04",
    city: "Světec",
  },
  // Chotějovice leží hned u Bíliny, lidé je hledají jako „Bílina“.
  area: ["Bílina", "Chotějovice", "Světec", "Teplicko"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Smetanova+18%2C+Chot%C4%9Bjovice%2C+418+04+Sv%C4%9Btec",
  reviewsHref: "https://www.vsechny-autoskoly.cz/autoskola_katka/hodnoceni/",
  formspree: "https://formspree.io/f/xjgzgvod",
  priceListValidFrom: "1. 3. 2026",
} as const;

export const addressLine = `${site.address.street}, ${site.address.part}, ${site.address.zip} ${site.address.city}`;

export const nav = [
  { href: "/ridicak-skupina-b", label: "Řidičák B" },
  { href: "/ridicak-na-motorku", label: "Motorka" },
  { href: "/nakladni-auto-a-traktor", label: "C, C+E, T" },
  { href: "/kondicni-jizdy", label: "Kondiční jízdy" },
  { href: "/prezkouseni-po-zakazu-rizeni", label: "Přezkoušení" },
  { href: "/cenik", label: "Ceník" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
