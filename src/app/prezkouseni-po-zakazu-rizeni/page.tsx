import type { Metadata } from "next";
import { CallStrip, Container, PageHead } from "@/components/ui";
import { JsonLd, faqPage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Přezkoušení po zákazu řízení a po 12 bodech, Bílina",
  description:
    "Přezkoušení z odborné způsobilosti po zákazu řízení nebo po dosažení 12 bodů. Co přinést, kolik to stojí (6 000 Kč za skupinu) a jak to probíhá. Autoškola Katka u Bíliny.",
  alternates: { canonical: "/prezkouseni-po-zakazu-rizeni" },
};

const drahy = [
  {
    id: "body",
    nazev: "Po dosažení 12 bodů",
    uvod: "Stačí samotné přezkoušení z odborné způsobilosti. Cvičné jízdy nejsou povinné, ale kdo dlouho neřídil, může si je přidat.",
    prinest: ["dopravně psychologické vyšetření", "výpis z karty řidiče"],
    pozor: "Doklad o přezkoušení nesmí být při podání žádosti na úřadě starší než 30 dní. Termín proto plánujeme podle toho, kdy vám končí lhůta.",
  },
  {
    id: "zakaz",
    nazev: "Po zákazu řízení",
    uvod: "Přezkoušení absolvujete po skončení zákazu činnosti. Domluvíme termín tak, aby navazoval na konec zákazu.",
    prinest: [
      "rozsudek soudu nebo rozhodnutí správního orgánu",
      "výpis z karty řidiče",
      "žádost do autoškoly",
      "posudek o zdravotní způsobilosti",
    ],
    pozor: "Pokud nemáte některý z dokladů, zavolejte ještě před tím, než ho začnete shánět. Poradím, kde a jak.",
  },
];

const faq = [
  {
    q: "Kolik přezkoušení stojí?",
    a: "Přezkoušení po zákazu řízení stojí 6 000 Kč za každou skupinu. K tomu se platí poplatek 700 Kč za zkoušku přímo zkušebnímu komisaři.",
  },
  {
    q: "Jdu po dosažení 12 bodů. Musím jezdit?",
    a: "Ne, stačí samotné přezkoušení odborné způsobilosti, cvičné jízdy nejsou povinné. Přineste psychologické vyšetření a výpis z karty řidiče.",
  },
  {
    q: "Jdu po zákazu řízení. Co mám přinést?",
    a: "Rozsudek soudu nebo rozhodnutí správního orgánu, výpis z karty řidiče, žádost do autoškoly a posudek o zdravotní způsobilosti.",
  },
];

export default function Prezkouseni() {
  return (
    <>
      <JsonLd data={faqPage(faq)} />
      <PageHead
        crumb="Přezkoušení"
        path="/prezkouseni-po-zakazu-rizeni"
        title={<>Přezkoušení <span className="accent">po zákazu řízení</span> a po 12 bodech</>}
        lead={
          <p>
            Chcete zpátky řidičák? Bez přezkoušení z odborné způsobilosti vám ho úřad nevrátí. Autoškola Katka
            se na přezkoušení specializuje a se vším papírováním vám poradím.
          </p>
        }
        aside={
          <div className="glass rounded-3xl px-5 py-4">
            <p className="tabular font-display text-[48px] leading-none font-medium">6&nbsp;000&nbsp;Kč</p>
            <p className="mt-2 text-ink-soft">po zákazu řízení, za skupinu. Plus 700 Kč poplatek za zkoušku.</p>
          </div>
        }
      />

      {/* Dvě dráhy vedle sebe, každá se svými doklady */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="reveal max-w-2xl text-[30px] font-medium sm:text-[36px]">Jaký je váš případ?</h2>
          <div className="reveal mt-12 grid gap-px overflow-hidden rounded-[var(--radius-plate)] border border-line bg-line md:grid-cols-2">
            {drahy.map((d) => (
              <section key={d.id} id={d.id} className="bg-sheet p-6 sm:p-10">
                <h3 className="text-[28px] font-medium sm:text-[32px]">{d.nazev}</h3>
                <p className="mt-4 text-ink-soft">{d.uvod}</p>
                <p className="mt-8 label">Co přinést</p>
                <ul className="mt-3 border-t border-line">
                  {d.prinest.map((p) => (
                    <li key={p} className="flex gap-3 border-b border-line py-3">
                      <span aria-hidden="true" className="mt-[0.55em] size-2 shrink-0 bg-ink" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-[15px] text-mute">{d.pozor}</p>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <h2 className="reveal text-[30px] font-medium sm:text-[36px] md:col-span-4">Jak to probíhá</h2>
          <ol className="reveal border-t border-line md:col-span-8">
            {[
              ["Zavoláte", "Řeknete, jestli jdete po bodech, nebo po zákazu, a kdy vám lhůta končí."],
              ["Doneste doklady", "Seznam najdete výše. Žádost do autoškoly vyplníme spolu."],
              ["Příprava", "Podle potřeby zopakujeme pravidla a případně si zajezdíte, aby u zkoušky nebylo překvapení."],
              ["Zkouška", "Test a jízda u zkušebního komisaře. Doklad o přezkoušení pak nesete na úřad."],
            ].map(([t, d]) => (
              <li key={t} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <p className="font-display text-[20px] font-medium">{t}</p>
                <p className="text-ink-soft">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CallStrip title="Kdy vám končí zákaz? Zavolejte, naplánujeme to." />
    </>
  );
}
