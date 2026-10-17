import Image from "next/image";
import Link from "next/link";
import { CallStrip, Card, Container, Faq, SectionHead } from "@/components/ui";
import { kc, najdi } from "@/lib/cenik";
import { reference, rok } from "@/lib/reference";
import { JsonLd, faqPage } from "@/lib/seo";
import { site } from "@/lib/site";
import nubira from "../../public/foto/nubira.jpg";
import ucebna1 from "../../public/foto/ucebna-1.jpg";
import ucebna2 from "../../public/foto/ucebna-2.jpg";

export const metadata = {
  alternates: { canonical: "/" },
};

const skupiny = [
  { id: "AM", label: "Moped", href: "/ridicak-na-motorku" },
  { id: "A1", label: "125 cm³", href: "/ridicak-na-motorku" },
  { id: "A2", label: "35 kW", href: "/ridicak-na-motorku" },
  { id: "A", label: "Moto", href: "/ridicak-na-motorku" },
  { id: "B", label: "Osobní", href: "/ridicak-skupina-b", primary: true },
  { id: "B+E", label: "Přívěs", href: "/ridicak-skupina-b" },
  { id: "C", label: "Nákladní", href: "/nakladni-auto-a-traktor" },
  { id: "C+E", label: "Tahač", href: "/nakladni-auto-a-traktor" },
  { id: "T", label: "Traktor", href: "/nakladni-auto-a-traktor" },
];

const kurzy = [
  {
    href: "/ridicak-skupina-b",
    label: "Skupina B",
    nazev: "Řidičák na auto",
    pozn: "také automat B78, přívěs B+E a B96, rychlokurz za 6 týdnů",
    cena: kc(najdi("b").cena),
    od: true,
    featured: true,
  },
  {
    href: "/ridicak-na-motorku",
    label: "Skupiny AM, A1, A2, A",
    nazev: "Řidičák na motorku",
    pozn: "od skútru po motorku bez omezení",
    cena: kc(najdi("a").cena),
  },
  {
    href: "/nakladni-auto-a-traktor",
    label: "Skupiny C, C+E, T",
    nazev: "Nákladní auto a traktor",
    pozn: "traktor i bez řidičáku na auto",
    cena: kc(najdi("ce").cena),
    od: true,
  },
  {
    href: "/kondicni-jizdy",
    label: "Pro řidiče",
    nazev: "Kondiční jízdy",
    pozn: "když jste dlouho neřídili nebo si nevěříte",
    cena: `${kc(najdi("b").kondicni!)} / h`,
  },
  {
    href: "/prezkouseni-po-zakazu-rizeni",
    label: "Přezkoušení",
    nazev: "Po zákazu řízení a po 12 bodech",
    pozn: "se vším papírováním poradíme",
    cena: "6 000 Kč",
    tint: true,
  },
];

const kroky = [
  { t: "Přihláška", d: "Zavoláte, domluvíme kurz. Přihlášku a lékařský posudek si stáhnete, nebo je vyplníme spolu." },
  { t: "Teorie", d: "Pravidla provozu, bezpečná jízda a první pomoc v učebně ve Smetanově ulici." },
  { t: "Jízdy", d: "Nejdřív seznámení s autem, pak běžný provoz. Tempo si určujete vy." },
  { t: "Zkouška", d: "Test a jízda u komisaře. Po složení si vyzvednete řidičák." },
];

const faq = [
  { q: "Kdy můžu začít?", a: "Zápis přijímáme průběžně. Zavolejte nebo napište a domluvíme termín." },
  { q: "Lze platit na splátky?", a: "Ano, splátky jsou možné přímo přes autoškolu bez navýšení." },
  { q: "Mohu absolvovat výcvik v cizím jazyce?", a: "Ano. Cena se domluví individuálně před začátkem kurzu." },
  {
    q: "Jak funguje přechod z jiné autoškoly?",
    a: "Převod na zkoušky stojí 3 000 Kč pro skupiny B, B+E, B78 a B96. Pro ostatní skupiny 5 000 Kč za každou skupinu.",
  },
  {
    q: "Jak funguje dárkový poukaz?",
    a: "Dárkový poukaz platí 365 dní od zakoupení. Po uplynutí doby propadá bez nároku na vrácení ceny.",
  },
];

// Krátké výřezy z původních hodnocení, aby citace nepřesáhla tři řádky. Celé texty jsou na /reference.
const vyrez = (jmeno: string, text: string) => {
  const r = reference.find((x) => x.jmeno === jmeno)!;
  if (!r.text.toLowerCase().includes(text.replace(/\.$/, "").toLowerCase())) throw new Error(`Výřez nesedí na hodnocení ${jmeno}`);
  return { ...r, text };
};

const hlavni = vyrez("Jaroslava Jírová", "Doporučuji všem, co se bojí. Tady se bát nebudete.");
const dalsi = [
  vyrez("Eliška", "Katka je velice trpělivá a vše dokáže moc dobře vysvětlit."),
  vyrez("Michal Pohl", "Když řídíte poprvé, nejste nervózní a nestresuje vás nikdo."),
  vyrez("Zdeněk Štěpánek", "Všechno, čím si nebudete jisti, vám ukáže, popřípadě poradí."),
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqPage(faq)} />

      {/* HERO */}
      <section className="relative -mt-[4.75rem] overflow-hidden pt-[4.75rem]">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative pt-12 pb-16 md:pt-20 md:pb-24">
          <h1 className="rise text-[46px] leading-[1.05] sm:text-[66px] md:text-[84px]" style={{ animationDelay: ".08s" }}>
            Řidičák v&nbsp;Bílině,
            <br />
            <span className="accent">v klidu</span> a bez křiku.
          </h1>

          <div className="rise mt-8 md:mt-10" style={{ animationDelay: ".16s" }}>
            <p className="max-w-[50ch] text-[16px] text-ink-soft md:text-[17px]">
              <strong className="font-medium text-ink">Autoškola Katka</strong> v Chotějovicích u Bíliny. Od roku{" "}
              {site.since} učí Kateřina Krajníková, trpělivě a vaším tempem.
            </p>

            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Skupiny řidičského oprávnění">
              {skupiny.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className={`inline-flex min-w-14 flex-col items-center rounded-2xl px-3 py-2 transition-colors ${
                      s.primary
                        ? "btn shadow-lift"
                        : "press border border-ink/10 bg-sheet/70 text-ink hover:bg-sheet"
                    }`}
                  >
                    <span className="font-display text-[16px] leading-none">{s.id}</span>
                    <span className={`mt-1 text-[10px] ${s.primary ? "opacity-70" : "text-mute"}`}>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="btn tabular inline-flex items-center justify-center rounded-2xl px-6 py-4 text-[15px] font-medium shadow-lift"
              >
                Zavolat {site.phone}
              </a>
              <Link
                href="/cenik"
                className="press inline-flex items-center justify-center gap-2 rounded-2xl border border-ink/10 px-6 py-4 text-[15px] font-medium transition-colors hover:bg-ink/5"
              >
                Ceník a kurzy <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="rise relative mt-12 md:mt-16" style={{ animationDelay: ".24s" }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-5xl shadow-lift sm:aspect-[16/9]">
              <Image
                src={nubira}
                alt="Modré výcvikové kombi s červeným nápisem Autoškola a telefonním číslem na dveřích"
                fill
                priority
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
            <div className="glass absolute bottom-4 left-4 max-w-[260px] rounded-2xl px-4 py-3 md:bottom-6 md:left-6">
              <p className="text-[11px] tracking-[0.14em] text-mute uppercase">Skupina B</p>
              <p className="tabular mt-0.5 font-display text-3xl">
                {kc(najdi("b").cena).replace(" Kč", "")}
                <span className="text-lg text-mute"> Kč</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* KURZY: rozcestník na podstránky */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHead
            title={
              <>
                Vyberte si <span className="accent">svůj</span> řidičák.
              </>
            }
          />
          <ul className="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kurzy.map((k) => (
              <li key={k.href} className={k.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
                <Link
                  href={k.href}
                  className={`group flex h-full flex-col gap-3 rounded-3xl p-6 transition-shadow ${
                    k.featured
                      ? "bg-night text-white shadow-pop"
                      : k.tint
                        ? "bg-signal-soft shadow-soft hover:shadow-lift"
                        : "border border-ink/5 bg-sheet shadow-soft hover:shadow-lift"
                  }`}
                >
                  <span className={`text-[11px] tracking-[0.16em] uppercase ${k.featured ? "text-white/50" : "text-mute"}`}>
                    {k.label}
                  </span>
                  <span className={`font-display leading-tight ${k.featured ? "text-[30px]" : "text-[22px]"}`}>{k.nazev}</span>
                  <span className={`text-[14px] ${k.featured ? "text-white/60" : "text-ink-soft"}`}>{k.pozn}</span>
                  <span className="mt-auto pt-4">
                    <span className={`block text-[12px] ${k.featured ? "text-white/50" : "text-mute"}`}>
                      {k.od ? "od" : "cena"}
                    </span>
                    <span className={`tabular block font-display leading-none ${k.featured ? "text-[46px]" : "text-[32px]"}`}>
                      {k.cena}
                    </span>
                  </span>
                  <span
                    className={`mt-2 inline-flex items-center gap-1.5 text-[13.5px] font-medium ${
                      k.featured ? "text-white/80 group-hover:text-white" : "text-ink group-hover:text-sign"
                    }`}
                  >
                    Podrobnosti <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-[70ch] text-[13px] text-mute">
            Ceník platný od {site.priceListValidFrom}. V cenách kurzu není zahrnut poplatek za závěrečnou zkoušku.
            Autoškola není plátcem DPH.{" "}
            <Link href="/cenik" className="text-ink-soft underline underline-offset-2 hover:text-ink">
              Kompletní ceník
            </Link>
          </p>
        </Container>
      </section>

      {/* O NÁS + UČEBNA */}
      <section className="bg-paper-2 py-20 md:py-28">
        <Container>
          <SectionHead
            title={
              <>
                Autoškola s <span className="accent">lidským přístupem.</span>
              </>
            }
          />
          <div className="mt-12 grid items-start gap-8 md:grid-cols-2 md:gap-12">
            <Card className="reveal p-8 md:p-10">
              <div className="flex items-center gap-5">
                <span
                  aria-hidden="true"
                  className="grid size-20 shrink-0 place-items-center rounded-full bg-signal font-display text-[28px] text-[#0e0f12]"
                >
                  KK
                </span>
                <div>
                  <p className="font-display text-[22px] leading-tight">Kateřina Krajníková</p>
                  <p className="mt-1 text-[13px] text-mute">majitelka a instruktorka</p>
                </div>
              </div>
              <p className="mt-6 text-[15px] text-ink-soft">
                Autoškola Katka není síť poboček. Výcvik vede Katka osobně, takže víte, s kým pojedete, a nemusíte si
                zvykat na nového instruktora uprostřed kurzu. Specializuje se i na přezkoušení po zákazu řízení a po
                dosažení 12 bodů.
              </p>
              <p className="mt-4 text-[15px] text-ink-soft">
                Absolventi o ní nejčastěji píšou jedno slovo: <em className="accent">trpělivá</em>.
              </p>
            </Card>
            <div className="reveal">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={ucebna1}
                  alt="Učebna autoškoly: lavice se židlemi, na stěně tabule dopravních značek a televize"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="aspect-[4/5] w-full rounded-4xl object-cover shadow-soft"
                />
                <Image
                  src={ucebna2}
                  alt="Druhý pohled do učebny s lavicemi, flipchartem a přehledem značek na stěně"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="aspect-[4/5] w-full rounded-4xl object-cover shadow-soft"
                />
              </div>
              <p className="mt-4 text-[14px] text-mute">
                Výuka teorie probíhá v učebně na adrese {site.address.street}, {site.address.part}.{" "}
                <a href={site.mapsHref} className="text-ink-soft underline underline-offset-2 hover:text-ink">
                  Zobrazit na mapě
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CESTA ŽÁKA */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHead
            label="Cesta žáka"
            title={
              <>
                Z nuly k řidičáku <span className="accent">ve čtyřech krocích.</span>
              </>
            }
          />
          <ol className="reveal relative mt-12 grid gap-4 md:grid-cols-4 md:gap-6">
            <div className="lane absolute top-7 right-[12%] left-[12%] hidden text-ink/25 md:block" aria-hidden="true" />
            {kroky.map((k, i) => (
              <li key={k.t} className="relative flex gap-4 rounded-3xl border border-ink/5 bg-sheet p-4 shadow-soft md:block md:border-0 md:bg-transparent md:p-0 md:text-center md:shadow-none">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-night font-display text-[17px] text-white shadow-lift md:mx-auto md:size-14">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-[19px] md:mt-5 md:text-[20px]">{k.t}</p>
                  <p className="mt-1 text-[13.5px] text-ink-soft md:mx-auto md:max-w-[26ch]">{k.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href="/jak-na-ridicak"
              className="inline-flex items-center gap-2 rounded-2xl border border-ink/10 px-5 py-3 text-[14px] font-medium hover:bg-ink/5"
            >
              Celý postup a dokumenty ke stažení <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* REFERENCE */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              title={
                <>
                  Co říkají <span className="accent">absolventi.</span>
                </>
              }
            />
            <Link href="/reference" className="reveal text-[14px] font-medium underline underline-offset-4 hover:text-sign">
              Všechna hodnocení
            </Link>
          </div>
          {/* Jedna velká citace a tři krátké vedle, bez karet: jiné rozvržení než karty kurzů výš */}
          <div className="reveal mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
            <figure className="md:col-span-7">
              <blockquote className="font-display text-[30px] leading-[1.2] md:text-[42px]">
                <span className="text-signal">„</span>
                {hlavni.text}
                <span className="text-signal">“</span>
              </blockquote>
              <figcaption className="mt-6 text-[14px] text-ink-soft">
                <span className="font-medium text-ink">{hlavni.jmeno}</span>, {rok(hlavni.datum)}
              </figcaption>
            </figure>
            <ul className="space-y-8 md:col-span-5 md:border-l md:border-line md:pl-10">
              {dalsi.map((r) => (
                <li key={r.jmeno}>
                  <figure>
                    <blockquote className="text-[16px] text-ink">„{r.text}“</blockquote>
                    <figcaption className="mt-2 text-[13px] text-mute">
                      {r.jmeno}, {rok(r.datum)}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-[13px] text-mute">
            Hodnocení z nezávislého katalogu{" "}
            <a href={site.reviewsHref} className="underline underline-offset-2 hover:text-ink">
              vsechny-autoskoly.cz
            </a>
            .
          </p>
        </Container>
      </section>

      <CallStrip />

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="reveal text-center">
            <p className="label justify-center">Časté dotazy</p>
            <h2 className="mt-4 text-[34px] md:text-[50px]">
              Otázky, které <span className="accent">slýcháme.</span>
            </h2>
          </div>
          <div className="reveal mt-12">
            <Faq items={faq} />
          </div>
        </div>
      </section>
    </>
  );
}
