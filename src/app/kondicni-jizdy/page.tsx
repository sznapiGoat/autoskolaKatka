import type { Metadata } from "next";
import { CallStrip, Container, PageHead } from "@/components/ui";
import { kc, najdi } from "@/lib/cenik";
import { JsonLd, faqPage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kondiční jízdy v Bílině pro řidiče s řidičákem",
  description:
    "Kondiční jízdy pro řidiče, kteří dlouho neřídili nebo si za volantem nevěří. Skupina B 700 Kč za hodinu, automat 800 Kč. Autoškola Katka, Bílina a Chotějovice.",
  alternates: { canonical: "/kondicni-jizdy" },
};

const sazby = [
  ["Osobní auto B", najdi("b").kondicni!],
  ["Automat B78", najdi("b78").kondicni!],
  ["Přívěs B+E", najdi("be").kondicni!],
  ["Nákladní auto C", najdi("c").kondicni!],
  ["Souprava C+E", najdi("ce").kondicni!],
  ["Motocykl A, A1, A2, AM", najdi("a").kondicni!],
  ["Traktor T", najdi("t").kondicni!],
] as const;

const situace = [
  ["Řidičák máte roky v šuplíku", "Po dlouhé pauze se vrací jistota nejrychleji s někým, kdo má pod nohou druhou brzdu."],
  ["Bojíte se jezdit sama nebo sám", "Projedeme trasy, které potřebujete: do práce, do školky, na nákup do Teplic."],
  ["Nejde vám parkování", "Couvání, podélné stání, parkování na plném parkovišti. Klidně celou hodinu jen tohle."],
  ["Přesedáte na jiné auto", "Větší auto, automat nebo přívěs. Než vyrazíte na dovolenou, zkusíte si ho s dohledem."],
  ["Dlouho jste řídili v zahraničí", "Česká pravidla, značení a zvyklosti. Hodí se i před přezkoušením."],
  ["Neprošli jste zkouškou", "Doplňující jízdy před opravnou zkouškou se účtují podle sazby kondiční jízdy."],
];

const faq = [
  {
    q: "Musím mít řidičák, abych mohl na kondiční jízdu?",
    a: "Ano, kondiční jízdy jsou pro držitele řidičského oprávnění. Pokud řidičák nemáte, potřebujete normální kurz.",
  },
  {
    q: "Jezdí se na mém autě, nebo na výcvikovém?",
    a: "Na výcvikovém autě autoškoly, které má zdvojené pedály. Pokud byste chtěli jezdit na svém, zeptejte se po telefonu.",
  },
  {
    q: "Kolik hodin budu potřebovat?",
    a: "Podle toho, jak dlouho jste neřídili a čeho se bojíte. Někomu stačí jedna dvě hodiny, jiný si rád zajezdí víckrát.",
  },
];

export default function Kondicni() {
  return (
    <>
      <JsonLd data={faqPage(faq)} />
      <PageHead
        crumb="Kondiční jízdy"
        path="/kondicni-jizdy"
        title={<>Kondiční jízdy pro řidiče, kteří chtějí zase jezdit</>}
        lead={
          <p>
            Máte řidičák, ale za volantem se necítíte dobře? Jedna hodina s instruktorkou vedle vás často
            udělá víc než měsíc odkládání.
          </p>
        }
        aside={
          <div className="glass rounded-3xl px-5 py-4">
            <p className="tabular font-display text-[56px] leading-none font-medium text-sign">
              {kc(najdi("b").kondicni!).replace(" Kč", "")}
            </p>
            <p className="mt-2 text-ink-soft">Kč za hodinu na osobním autě</p>
          </div>
        }
      />

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="reveal max-w-2xl text-[30px] font-medium sm:text-[36px]">Kdy se kondiční jízda hodí</h2>
          <ul className="reveal mt-12 grid gap-x-16 md:grid-cols-2">
            {situace.map(([t, d]) => (
              <li key={t} className="border-t border-line py-6">
                <p className="font-display text-[22px] font-medium">{t}</p>
                <p className="mt-2 text-ink-soft">{d}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-12">
          <h2 className="reveal text-[30px] font-medium sm:text-[36px] md:col-span-4">Sazby za hodinu</h2>
          <dl className="reveal grid grid-cols-2 gap-3 md:col-span-8 lg:grid-cols-3">
            {sazby.map(([label, cena], i) => (
              <div
                key={label}
                className={`flex flex-col justify-between gap-4 rounded-3xl p-5 ${
                  i === 0 ? "bg-night text-white shadow-lift" : "border border-ink/5 bg-sheet shadow-soft"
                }`}
              >
                <dt className={`text-[14px] ${i === 0 ? "text-white/70" : "text-ink-soft"}`}>{label}</dt>
                <dd className="tabular font-display text-[26px] leading-none whitespace-nowrap">
                  {kc(cena)}
                  <span className={`text-[14px] ${i === 0 ? "text-white/60" : "text-mute"}`}> / h</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <h2 className="reveal text-[30px] font-medium sm:text-[36px] md:col-span-4">Časté otázky</h2>
          <div className="reveal space-y-8 md:col-span-8">
            {faq.map((f) => (
              <div key={f.q}>
                <h3 className="text-[22px] font-medium">{f.q}</h3>
                <p className="mt-2 max-w-[65ch] text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CallStrip title="Objednejte si první hodinu" />
    </>
  );
}
