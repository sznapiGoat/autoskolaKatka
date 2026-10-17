import type { Metadata } from "next";
import { CallStrip, Container, GroupSign, PageHead } from "@/components/ui";
import { cenik, kc, najdi } from "@/lib/cenik";
import { JsonLd, offers } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Řidičák na nákladní auto C, C+E a traktor T v Bílině",
  description:
    "Řidičský průkaz skupiny C za 25 000 Kč, C+E za 14 000 Kč a traktor T od 22 000 Kč. Autoškola Katka, Chotějovice u Bíliny.",
  alternates: { canonical: "/nakladni-auto-a-traktor" },
};

const kurzy = cenik.find((o) => o.id === "nakladni")!.kurzy;

const bloky = [
  {
    code: "C",
    nazev: "Nákladní automobil",
    text: "Nákladní auto nad 3,5 t. Pro práci řidiče z povolání je potřeba ještě profesní způsobilost, ta je samostatný kurz.",
    rows: [["Kurz C", najdi("c")]] as const,
  },
  {
    code: "C+E",
    nazev: "Souprava s přívěsem",
    text: "Navazuje na skupinu C. Tahač s návěsem nebo nákladní auto s těžkým přívěsem.",
    rows: [["Kurz C+E", najdi("ce")]] as const,
  },
  {
    code: "T",
    nazev: "Traktor",
    text: "Traktor se dá udělat jako rozšíření k řidičáku B, nebo samostatně, pokud řidičák na auto nemáte.",
    rows: [
      ["Rozšíření ze skupiny B", najdi("t-b")],
      ["Bez skupiny B", najdi("t")],
    ] as const,
  },
];

export default function Nakladni() {
  return (
    <>
      <JsonLd data={offers("Řidičský průkaz na nákladní automobil a traktor", kurzy)} />
      <PageHead
        crumb="C, C+E, T"
        path="/nakladni-auto-a-traktor"
        title={<>Nákladní auto <span className="accent">a traktor</span></>}
        lead={
          <p>
            Skupiny pro práci: nákladní auto, souprava a traktor. Výcvik i zkoušky domluvíme individuálně podle
            toho, jaký řidičák už máte.
          </p>
        }
      />

      <Container className="py-16 md:py-24">
        <div className="divide-y divide-line border-y border-line">
          {bloky.map((b) => (
            <section key={b.code} className="reveal grid gap-6 py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-2">
                <GroupSign code={b.code} size="lg" />
              </div>
              <div className="md:col-span-5">
                <h2 className="text-[28px] font-medium sm:text-[34px]">{b.nazev}</h2>
                <p className="mt-3 text-ink-soft">{b.text}</p>
              </div>
              <dl className="md:col-span-5">
                {b.rows.map(([label, k]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 border-b border-line-soft py-3 last:border-0">
                    <dt>{label}</dt>
                    <dd className="tabular text-right">
                      <span className="block font-display text-[24px] font-medium">{kc(k.cena)}</span>
                      {k.kondicni && (
                        <span className="block text-[14px] text-mute">kondiční jízda {kc(k.kondicni)} / h</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
        <p className="mt-6 text-[14px] text-mute">
          Převod z jiné autoškoly u těchto skupin stojí 5 000 Kč za skupinu. Opravná zkouška z údržby vozidla
          (C, C+E) stojí 200 Kč.
        </p>
      </Container>

      <CallStrip title="Potřebujete řidičák kvůli práci?" />
    </>
  );
}
