import type { Metadata } from "next";
import Link from "next/link";
import { CallStrip, Container, PageHead, PriceTable } from "@/components/ui";
import { cenik, poplatkyAutoskole, poplatkyZkousejicimu } from "@/lib/cenik";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ceník autoškoly Bílina 2026",
  description:
    "Kompletní ceník Autoškoly Katka platný od 1. 3. 2026. Řidičák B 21 000 Kč, motorka 23 000 Kč, nákladní auto C 25 000 Kč, kondiční jízdy od 700 Kč za hodinu, poplatky za zkoušky.",
  alternates: { canonical: "/cenik" },
};

export default function Cenik() {
  return (
    <>
      <PageHead
        crumb="Ceník"
        path="/cenik"
        title={<>Ceník kurzů</>}
        lead={
          <p>
            Platí od {site.priceListValidFrom}. Ceny jsou v Kč, autoškola není plátcem DPH. Poplatek za
            závěrečnou zkoušku v ceně kurzu není. Kurz lze platit na splátky bez navýšení.
          </p>
        }
        aside={
          <nav aria-label="Oddíly ceníku" className="glass rounded-3xl px-5 py-4">
            <ul className="space-y-1.5">
              {cenik.map((o) => (
                <li key={o.id}>
                  <a href={`#${o.id}`} className="font-bold hover:text-sign hover:underline">
                    {o.nazev}
                  </a>
                </li>
              ))}
              <li>
                <a href="#poplatky" className="font-bold hover:text-sign hover:underline">
                  Poplatky a ostatní
                </a>
              </li>
            </ul>
          </nav>
        }
      />

      <Container className="space-y-20 py-16 md:py-24">
        {cenik.map((o) => (
          <section key={o.id} id={o.id} className="reveal scroll-mt-24">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-[30px] font-medium sm:text-[36px]">{o.nazev}</h2>
              <Link href={o.stranka} className="font-bold underline decoration-2 underline-offset-4 hover:text-sign">
                Podrobnosti o kurzu
              </Link>
            </div>
            <div className="mt-6">
              <PriceTable rows={o.kurzy} caption={o.nazev} />
            </div>
          </section>
        ))}

        <section id="poplatky" className="reveal grid scroll-mt-24 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[26px] font-medium sm:text-[30px]">Poplatky za zkoušky</h2>
            <p className="mt-2 text-[15px] text-mute">Platí se zkušebnímu komisaři v den zkoušky.</p>
            <dl className="mt-6 space-y-3 rounded-3xl border border-ink/5 bg-sheet p-6 shadow-soft">
              {poplatkyZkousejicimu.map(([l, v]) => (
                <div key={l} className="flex items-baseline justify-between gap-6">
                  <dt>{l}</dt>
                  <dd className="tabular font-bold whitespace-nowrap">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-[26px] font-medium sm:text-[30px]">Ostatní</h2>
            <p className="mt-2 text-[15px] text-mute">Platí se autoškole.</p>
            <dl className="mt-6 space-y-3 rounded-3xl border border-ink/5 bg-sheet p-6 shadow-soft">
              {poplatkyAutoskole.map(([l, v]) => (
                <div key={l} className="flex items-baseline justify-between gap-6">
                  <dt>{l}</dt>
                  <dd className="text-right font-bold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <p className="max-w-[70ch] text-[15px] text-mute">
          Ke každému žadateli přistupujeme individuálně, výsledná cena se proto může lišit, třeba když je
          potřeba víc jízd. Dárkový poukaz propadá po 365 dnech bez nároku na vrácení ceny.
        </p>
      </Container>

      <CallStrip title="Nevíte, který kurz vybrat?" />
    </>
  );
}
