import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { JsonLd, localBusiness } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
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
      className={`${playfair.variable} ${inter.variable} antialiased`}
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
          className="sr-only z-50 bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
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
