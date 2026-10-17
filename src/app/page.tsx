import Image from "next/image";
import Link from "next/link";
import { CallStrip, Container } from "@/components/ui";
import { kc, najdi } from "@/lib/cenik";
import { reference, rok } from "@/lib/reference";
import { site } from "@/lib/site";
import nubira from "../../public/foto/nubira.jpg";
import ucebna1 from "../../public/foto/ucebna-1.jpg";
import ucebna2 from "../../public/foto/ucebna-2.jpg";

export const metadata = {
  alternates: { canonical: "/" },
};

const smery = [
  {
    href: "/ridicak-skupina-b",
    skupiny: ["B"],
    nazev: "Řidičák na auto",
    pozn: "také automat B78, přívěs B+E a B96",
    cena: `od ${kc(najdi("b").cena)}`,
  },
  {
    href: "/ridicak-na-motorku",
    skupiny: ["AM", "A1", "A2", "A"],
    nazev: "Řidičák na motorku",
    pozn: "od skútru po motorku bez omezení",
    cena: kc(najdi("a").cena),
  },
  {
    href: "/nakladni-auto-a-traktor",
    skupiny: ["C", "C+E", "T"],
    nazev: "Nákladní auto a traktor",
    pozn: "traktor i bez řidičáku na auto",
    cena: `od ${kc(najdi("ce").cena)}`,
  },
  {
    href: "/kondicni-jizdy",
    skupiny: ["B"],
    nazev: "Kondiční jízdy",
    pozn: "pro řidiče, kteří dlouho neřídili",
    cena: `${kc(najdi("b").kondicni!)} / h`,
  },
  {
    href: "/prezkouseni-po-zakazu-rizeni",
    skupiny: ["12 b."],
    nazev: "Přezkoušení po zákazu řízení",
    pozn: "i po vynulování bodů",
    cena: "6 000 Kč",
  },
];

const vybrane = ["Eliška", "Michal Pohl", "Jaroslava Jírová"].map(
  (j) => reference.find((r) => r.jmeno === j)!,
);

export default function Home() {
  return (
    <>
      {/* Úvod: nadpis, telefon a skutečné výcvikové auto */}
      <section>
        <Container className="grid gap-10 pt-10 pb-14 md:grid-cols-12 md:gap-8 md:pt-16 md:pb-20">
          <div className="md:col-span-7 md:pr-6">
            <h1 className="text-[46px] font-black sm:text-[64px] lg:text-[80px]">
              Řidičák v&nbsp;Bílině. V&nbsp;klidu a bez křiku.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[19px] text-ink-soft">
              Autoškola Katka v Chotějovicích u Bíliny. Od roku {site.since} tu učí řídit Kateřina
              Krajníková. Jedna instruktorka, vlastní učebna
              a tempo podle vás. Auto, motorka, náklaďák i traktor, kondiční jízdy a přezkoušení po
              zákazu řízení.
            </p>

            <div className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-4">
              <div>
                <p className="text-[15px] text-mute">Zavolejte, všechno domluvíme po telefonu</p>
                <a
                  href={site.phoneHref}
                  className="tabular mt-1 block font-display text-[44px] leading-none font-black text-sign hover:underline sm:text-[56px]"
                >
                  {site.phone}
                </a>
              </div>
              <Link
                href="/kontakt#formular"
                className="mb-1 text-[17px] font-bold underline decoration-2 underline-offset-4 hover:text-sign"
              >
                Nebo nechte číslo, ozvu se
              </Link>
            </div>
          </div>

          <figure className="md:col-span-5">
            <Image
              src={nubira}
              alt="Modré kombi Chevrolet Nubira s červeným nápisem Autoškola a telefonním číslem na dveřích"
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/3] w-full rounded-[var(--radius-plate)] object-cover"
            />
            <figcaption className="mt-3 text-[14px] text-mute">
              Výcvikové auto s číslem na dveřích. Když ho uvidíte v Bílině, jede s ním někdo, kdo se
              právě učí.
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Rozcestník jako modrá směrová tabule */}
      <section aria-labelledby="rozcestnik">
        <Container className="pb-16 md:pb-24">
          <div className="rounded-[var(--radius-plate)] bg-sign p-1.5 text-white">
            <div className="rounded-[4px] border-2 border-white px-4 py-6 sm:px-8 sm:py-8">
              <h2 id="rozcestnik" className="font-display text-[26px] font-black sm:text-[32px]">
                Kam se chcete dostat?
              </h2>
              <ul className="mt-6">
                {smery.map((s) => (
                  <li key={s.href} className="border-t border-white/35">
                    <Link
                      href={s.href}
                      className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 py-5 sm:grid-cols-[13rem_1fr_auto_auto] sm:gap-x-8"
                    >
                      <span className="col-span-2 flex flex-wrap gap-1.5 sm:col-span-1">
                        {s.skupiny.map((g) => (
                          <span
                            key={g}
                            className="grid h-9 min-w-9 place-items-center rounded-[3px] bg-white px-1.5 font-display text-[15px] font-black text-sign"
                          >
                            <span className="translate-y-[0.06em]">{g}</span>
                          </span>
                        ))}
                      </span>
                      <span>
                        <span className="block font-display text-[22px] leading-tight font-extrabold group-hover:underline sm:text-[26px]">
                          {s.nazev}
                        </span>
                        <span className="block text-[15px] text-white/80">{s.pozn}</span>
                      </span>
                      <span className="tabular text-right font-display text-[18px] font-extrabold whitespace-nowrap sm:text-[20px]">
                        {s.cena}
                      </span>
                      <span
                        aria-hidden="true"
                        className="hidden font-display text-3xl transition-transform group-hover:translate-x-1 sm:block"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-[14px] text-mute">
            Ceny platí od {site.priceListValidFrom}. Poplatek za závěrečnou zkoušku (700 Kč) se platí zvlášť.{" "}
            <Link href="/cenik" className="underline underline-offset-4 hover:text-sign">
              Celý ceník
            </Link>
          </p>
        </Container>
      </section>

      {/* Kdo učí a kde */}
      <section className="border-y border-line bg-sheet">
        <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="reveal md:col-span-5">
            <h2 className="text-[32px] font-black sm:text-[42px]">Učí vás jeden člověk, od první hodiny po zkoušku</h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                Autoškola Katka není síť poboček. Teorii i jízdy vede Kateřina Krajníková, takže víte, s kým
                pojedete, a nemusíte si na nového instruktora zvykat uprostřed výcviku.
              </p>
              <p>
                Teorie se učí ve vlastní učebně v Chotějovicích, Smetanova 18. Termíny jízd se skládají podle
                toho, kdy můžete vy, i při škole nebo směnách.
              </p>
            </div>
            <Link
              href="/jak-na-ridicak"
              className="mt-8 inline-block font-bold underline decoration-2 underline-offset-4 hover:text-sign"
            >
              Jak výcvik probíhá krok za krokem
            </Link>
          </div>
          <div className="reveal grid grid-cols-2 gap-3 md:col-span-7">
            <Image
              src={ucebna1}
              alt="Učebna autoškoly: lavice se židlemi, na stěně tabule dopravních značek a televize"
              sizes="(min-width: 768px) 30vw, 50vw"
              className="aspect-[3/4] h-full w-full rounded-[var(--radius-plate)] object-cover"
            />
            <Image
              src={ucebna2}
              alt="Druhý pohled do učebny s lavicemi, flipchartem a přehledem značek na stěně"
              sizes="(min-width: 768px) 30vw, 50vw"
              className="aspect-[3/4] h-full w-full rounded-[var(--radius-plate)] object-cover"
            />
            <p className="col-span-2 text-[14px] text-mute">Učebna, Smetanova 18, Chotějovice.</p>
          </div>
        </Container>
      </section>

      {/* Reference */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-[32px] font-black sm:text-[42px]">
              Absolventi nejčastěji píšou jedno slovo: trpělivá
            </h2>
            <Link href="/reference" className="font-bold underline decoration-2 underline-offset-4 hover:text-sign">
              Všechna hodnocení
            </Link>
          </div>
          <div className="reveal mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
            {vybrane.map((r) => (
              <figure key={r.jmeno} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <blockquote className="text-[19px] leading-relaxed">„{r.text}“</blockquote>
                <figcaption className="mt-5 text-[15px] text-mute">
                  <span className="font-bold text-ink">{r.jmeno}</span>, {rok(r.datum)}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-12 text-[14px] text-mute">
            Hodnocení pochází z nezávislého katalogu{" "}
            <a href={site.reviewsHref} className="underline underline-offset-4 hover:text-sign">
              vsechny-autoskoly.cz
            </a>
            .
          </p>
        </Container>
      </section>

      {/* Jak začít */}
      <section className="border-t border-line">
        <Container className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <h2 className="reveal text-[32px] font-black sm:text-[42px] md:col-span-4">Jak začít</h2>
          <ol className="reveal md:col-span-8">
            {[
              ["Zavolejte", "Domluvíme skupinu, cenu, platbu a první termín. Zápis je průběžně, nečeká se na začátek kurzu."],
              [
                "Přineste dva papíry",
                "Přihlášku a posudek o zdravotní způsobilosti od praktického lékaře. Formuláře si můžete stáhnout předem.",
              ],
              ["Jezděte", "Teorie v učebně, jízdy v provozu po Bílině a okolí, nakonec zkouška u zkušebního komisaře."],
            ].map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-6 last:border-b">
                <span className="font-display text-[28px] leading-none font-black text-sign">{i + 1}.</span>
                <div>
                  <p className="font-display text-[22px] font-extrabold">{t}</p>
                  <p className="mt-1 text-ink-soft">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CallStrip />
    </>
  );
}
