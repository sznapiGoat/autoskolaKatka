import type { Metadata } from "next";
import Link from "next/link";
import { CallStrip, Container, Faq, GroupSign, PageHead, PriceTable } from "@/components/ui";
import { cenik, kc, najdi } from "@/lib/cenik";
import { JsonLd, faqPage, offers } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Řidičák skupiny B v Bílině, cena 21 000 Kč",
  description:
    "Řidičský průkaz na osobní auto v Bílině a Chotějovicích. Skupina B za 21 000 Kč, rychlokurz za 6 týdnů, automat B78, přívěs B+E a B96. Splátky bez navýšení.",
  alternates: { canonical: "/ridicak-skupina-b" },
};

const osobni = cenik.find((o) => o.id === "osobni")!.kurzy;

const faq = [
  {
    q: "Od kolika let můžu na řidičák B?",
    a: "Do autoškoly se můžete přihlásit tak, abyste zkoušku skládali nejdřív měsíc před 18. narozeninami. Průkaz vám úřad vydá v den osmnáctin. Od roku 2024 jde řidičák B získat už v 17 letech s jízdou pod dohledem mentora, podrobnosti probereme po telefonu.",
  },
  {
    q: "Lze kurz zaplatit na splátky?",
    a: "Ano, splátky jsou možné přímo přes autoškolu a bez navýšení.",
  },
  {
    q: "Jak dlouho výcvik trvá?",
    a: "Standardní kurz se přizpůsobuje vašim časovým možnostem. Kdo spěchá, může jít do rychlokurzu, který trvá šest týdnů a stojí o 6 000 Kč víc.",
  },
  {
    q: "Přecházím z jiné autoškoly. Jde to?",
    a: "Jde. Převod na zkoušky u skupin B, B+E, B78 a B96 stojí 3 000 Kč.",
  },
  {
    q: "Co když zkoušku nedám napoprvé?",
    a: "Opravná zkouška z testu stojí 100 Kč, z jízdy 400 Kč. Poplatek se platí zkušebnímu komisaři. Pokud bude potřeba víc jízd, platí se podle sazby kondiční jízdy.",
  },
];

export default function SkupinaB() {
  return (
    <>
      <JsonLd data={offers("Řidičský průkaz na osobní automobil", osobni)} />
      <JsonLd data={faqPage(faq)} />
      <PageHead
        crumb="Řidičák B"
        path="/ridicak-skupina-b"
        title={<>Řidičák na auto, skupina&nbsp;B</>}
        lead={
          <p>
            Nejčastější kurz autoškoly. Teorie v učebně v Chotějovicích, jízdy v běžném provozu po Bílině a
            okolí, závěrečná zkouška u komisaře. Cena kurzu je{" "}
            <strong className="text-ink">{kc(najdi("b").cena)}</strong>.
          </p>
        }
        aside={
          <div className="flex items-end gap-4">
            <GroupSign code="B" size="lg" />
            <p className="pb-1 text-[15px] text-mute">
              osobní auto do 3,5 t,
              <br />
              nejvýš 8 cestujících
            </p>
          </div>
        }
      />

      {/* Text s poznámkami na okraji */}
      <Container className="grid gap-x-16 gap-y-12 py-16 md:grid-cols-12 md:py-24">
        <article className="space-y-12 md:col-span-7">
          <section className="reveal">
            <h2 className="text-[30px] font-black sm:text-[36px]">Co vás čeká</h2>
            <div className="mt-5 max-w-[68ch] space-y-4 text-ink-soft">
              <p>
                Výcvik má dvě části. V teorii projdete pravidla provozu, zásady bezpečné jízdy a první pomoc. V
                jízdách se nejdřív seznámíte s autem a pak jezdíte v normálním provozu: ve městě, na okresních
                silnicích, s parkováním a couváním.
              </p>
              <p>
                Tempo si určujete vy. Kdo za volantem sedí poprvé, nemusí se bát, že ho někdo bude honit. Kdo
                už trochu jezdí, dostane se k náročnějším situacím dřív.
              </p>
            </div>
          </section>

          <section className="reveal">
            <h2 className="text-[30px] font-black sm:text-[36px]">Zkouška</h2>
            <div className="mt-5 max-w-[68ch] space-y-4 text-ink-soft">
              <p>
                Nejdřív test z pravidel na počítači, potom praktická jízda se zkušebním komisařem. Na test se
                můžete chystat doma přes{" "}
                <a href="https://etesty2.mdcr.cz/" className="text-sign underline underline-offset-4">
                  oficiální e-testy ministerstva dopravy
                </a>
                , otázky jsou stejné jako u zkoušky.
              </p>
              <p>Za zkoušku se platí 700 Kč přímo komisaři v den zkoušky, v ceně kurzu tento poplatek není.</p>
            </div>
          </section>

          <section className="reveal">
            <h2 className="text-[30px] font-black sm:text-[36px]">Rychlokurz, automat a přívěs</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {[
                ["Rychlokurz", "Celý kurz B za šest týdnů. Hodí se před nástupem do práce nebo na léto."],
                [
                  "Automat B78",
                  "Výcvik na autě s automatickou převodovkou. S průkazem B78 smíte řídit jen automat, na manuál se dá doplnit zkouškou za 6 000 Kč.",
                ],
                ["B+E", "Osobní auto s těžším přívěsem, třeba s karavanem nebo vozíkem na auto."],
                [
                  "B96",
                  "Rozšíření pro soupravy do 4 250 kg celkem. Jen doplňovací zkouška, bez celého kurzu.",
                ],
              ].map(([t, d]) => (
                <div key={t} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="font-display text-[19px] font-extrabold">{t}</dt>
                  <dd className="text-ink-soft">{d}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        <aside className="md:col-span-4 md:col-start-9">
          <div className="space-y-8 md:sticky md:top-24">
            <div className="border-l-4 border-sign pl-5">
              <p className="font-display text-[15px] font-extrabold text-sign">Splátky</p>
              <p className="mt-1 text-ink-soft">Kurz můžete platit po částech, bez navýšení.</p>
            </div>
            <div className="border-l-4 border-sign pl-5">
              <p className="font-display text-[15px] font-extrabold text-sign">Výuka v cizím jazyce</p>
              <p className="mt-1 text-ink-soft">Jde to, cenu domluvíme podle náročnosti předem.</p>
            </div>
            <div className="border-l-4 border-sign pl-5">
              <p className="font-display text-[15px] font-extrabold text-sign">Dárkový poukaz</p>
              <p className="mt-1 text-ink-soft">Řidičák jako dárek k osmnáctinám. Poukaz platí 365 dní.</p>
            </div>
            <div className="border-l-4 border-sign pl-5">
              <p className="font-display text-[15px] font-extrabold text-sign">Papíry k přihlášce</p>
              <p className="mt-1 text-ink-soft">
                Přihláška a posudek od lékaře.{" "}
                <Link href="/jak-na-ridicak#dokumenty" className="text-sign underline underline-offset-4">
                  Stáhnout formuláře
                </Link>
              </p>
            </div>
          </div>
        </aside>
      </Container>

      <section className="border-t border-line bg-sheet py-16 md:py-24">
        <Container>
          <h2 className="reveal text-[30px] font-black sm:text-[36px]">Ceny kurzů na osobní auto</h2>
          <div className="reveal mt-8">
            <PriceTable rows={osobni} caption="Ceník kurzů skupiny B a souvisejících" />
          </div>
          <p className="mt-4 text-[14px] text-mute">
            Ceny v Kč, autoškola není plátcem DPH. Kondiční jízda je hodina navíc nad rámec kurzu.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <h2 className="reveal text-[30px] font-black sm:text-[36px] md:col-span-4">Na co se lidé ptají</h2>
          <div className="reveal md:col-span-8">
            <Faq items={faq} />
          </div>
        </Container>
      </section>

      <CallStrip title="Chcete začít s řidičákem B?" />
    </>
  );
}
