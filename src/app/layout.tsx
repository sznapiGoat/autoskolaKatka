import type { Metadata, Viewport } from "next";
import { Figtree, Literata } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { JsonLd, localBusiness } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// Nadpisy: Literata (variabilní, s optickou velikostí). Text: Figtree.
const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Autoškola Bílina, Katka | řidičák B, motorka, kondiční jízdy",
    template: "%s | Autoškola Katka",
  },
  description:
    "Autoškola v Bílině a Chotějovicích. Řidičák na auto, motorku, nákladní auto i traktor, kondiční jízdy a přezkoušení po zákazu řízení. Učí Kateřina Krajníková od roku 2010.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: site.name,
    images: [{ url: "/foto/nubira.jpg", width: 1200, height: 900, alt: "Výcvikové auto Autoškoly Katka" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      className={`${literata.variable} ${figtree.variable} antialiased`}
    >
      <head>
        <script
          // Zapne reveal animace jen když běží JS, bez něj zůstane obsah vidět.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={localBusiness} />
        <a
          href="#obsah"
          className="btn sr-only z-50 px-4 py-2 focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Přeskočit na obsah
        </a>
        <Header />
        <main id="obsah" className="flex-1">
          {children}
        </main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
