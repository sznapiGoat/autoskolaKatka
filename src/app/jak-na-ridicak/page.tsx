import type { Metadata } from "next";
import { CallStrip, Container, PageHead } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jak na řidičák krok za krokem, přihláška a posudek ke stažení",
  description:
    "Jak probíhá výcvik v Autoškole Katka: přihláška, lékařský posudek, teorie, jízdy a zkouška. Přihláška do autoškoly a posudek o zdravotní způsobilosti ke stažení v PDF.",
  alternates: { canonical: "/jak-na-ridicak" },
};

const kroky = [
  {
    t: "Přihláška",
    d: "Zavoláte, domluvíme skupinu a termín. Vyplníte přihlášku, tedy žádost o přijetí k výuce a výcviku. Formulář si můžete stáhnout níž, nebo ho vyplníme spolu.",
  },
  {
    t: "Lékařský posudek",
    d: "Posudek o zdravotní způsobilosti vám vystaví praktický lékař. Formulář je ke stažení níž.",
  },
  {
    t: "Teorie",
    d: `Pravidla provozu, zásady bezpečné jízdy a první pomoc. Učí se v učebně na adrese ${site.address.street}, ${site.address.part}.`,
  },
  {
    t: "Jízdy",
    d: "Nejdřív se seznámíte s autem, potom jezdíte v běžném provozu. Termíny se skládají podle vás.",
  },
  {
    t: "Zkouška",
    d: "Test z pravidel a praktická jízda se zkušebním komisařem. Po úspěšné zkoušce si řidičák vyzvednete na úřadě.",
  },
];

const dokumenty = [
  {
    href: "/prihlaska-do-autoskoly.pdf",
    nazev: "Přihláška do autoškoly",
    popis: "Žádost o přijetí k výuce a výcviku",
    velikost: "PDF, 2,4 MB",
  },
  {
    href: "/lekarsky-posudek.pdf",
    nazev: "Lékařský posudek",
    popis: "Posudek o zdravotní způsobilosti k řízení",
    velikost: "PDF, 220 kB",
  },
];

export default function JakNaRidicak() {
  return (
    <>
      <PageHead
        crumb="Jak na řidičák"
        path="/jak-na-ridicak"
        title={<>Jak na řidičák, <span className="accent">krok za krokem</span></>}
        lead={<p>Pět zastávek od prvního telefonátu po řidičák v peněžence. Zápis je průběžně, začít můžete kdykoli.</p>}
      />

      {/* Postup jako silnice: svislá přerušovaná čára, zastávky po stranách */}
      <section className="py-16 md:py-24">
        <Container>
          <ol className="relative mx-auto max-w-3xl">
            <div className="lane-y absolute top-2 bottom-2 left-[22px] text-line" aria-hidden="true" />
            {kroky.map((k, i) => (
              <li key={k.t} className="reveal relative grid grid-cols-[48px_1fr] gap-6 pb-12 last:pb-0">
                <span className="relative z-10 grid size-12 place-items-center rounded-2xl bg-night font-display text-xl font-medium text-white">
                  <span className="translate-y-[0.06em]">{i + 1}</span>
                </span>
                <div className="pt-1.5">
                  <h2 className="text-[26px] font-medium sm:text-[30px]">{k.t}</h2>
                  <p className="mt-2 text-ink-soft">{k.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="dokumenty" className="scroll-mt-24 bg-paper-2 py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <h2 className="text-[30px] font-medium sm:text-[36px]">Ke stažení</h2>
            <p className="mt-4 text-ink-soft">Vytiskněte, vyplňte a přineste s sebou. Nebo je vyplníme na místě.</p>
          </div>
          <ul className="reveal border-t border-line md:col-span-8">
            {dokumenty.map((d) => (
              <li key={d.href} className="border-b border-line">
                <a href={d.href} className="group flex items-center justify-between gap-6 py-5" download>
                  <span>
                    <span className="block font-display text-[22px] font-medium group-hover:text-sign group-hover:underline">
                      {d.nazev}
                    </span>
                    <span className="block text-ink-soft">{d.popis}</span>
                  </span>
                  <span className="shrink-0 font-mono text-[13px] text-mute">{d.velikost}</span>
                </a>
              </li>
            ))}
            <li className="border-b border-line">
              <a href="https://etesty2.mdcr.cz/" className="group flex items-center justify-between gap-6 py-5">
                <span>
                  <span className="block font-display text-[22px] font-medium group-hover:text-sign group-hover:underline">
                    Testy online
                  </span>
                  <span className="block text-ink-soft">Oficiální zkušební testy ministerstva dopravy</span>
                </span>
                <span className="shrink-0 font-mono text-[13px] text-mute">etesty2.mdcr.cz</span>
              </a>
            </li>
          </ul>
        </Container>
      </section>

      <CallStrip />
    </>
  );
}
