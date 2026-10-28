import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stránka nenalezena",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative -mt-[4.75rem] overflow-hidden pt-[4.75rem]">
      <Container className="relative pt-16 pb-24 md:pt-24 md:pb-32">
        <h1 className="text-[42px] sm:text-[58px]">
          Tahle stránka tu není.
        </h1>
        <p className="mt-6 max-w-[50ch] text-[17px] text-ink-soft">
          Možná vedl odkaz na starou verzi webu. Kurzy a ceny najdete v ceníku, nebo rovnou zavolejte.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="btn tabular inline-flex items-center justify-center rounded-2xl px-6 py-4 text-[15px] font-medium shadow-lift"
          >
            Zavolat {site.phone}
          </a>
          <Link
            href="/cenik"
            className="press inline-flex items-center justify-center gap-2 rounded-2xl border border-ink/10 px-6 py-4 text-[15px] font-medium hover:bg-ink/5"
          >
            Ceník a kurzy <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
