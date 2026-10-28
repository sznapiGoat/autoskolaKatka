import type { Metadata } from "next";
import { CallStrip, Container, PageHead } from "@/components/ui";
import { reference, rok } from "@/lib/reference";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reference a hodnocení absolventů autoškoly v Bílině",
  description:
    "Co o Autoškole Katka v Bílině píšou absolventi. Hodnocení z nezávislého katalogu vsechny-autoskoly.cz od roku 2010.",
  alternates: { canonical: "/reference" },
};

export default function Reference() {
  const roky = [...new Set(reference.map((r) => rok(r.datum)))];

  return (
    <>
      <PageHead
        crumb="Reference"
        path="/reference"
        title={<>Co píšou absolventi</>}
        lead={
          <p>
            Hodnocení z nezávislého katalogu vsechny-autoskoly.cz, od nejnovějších. Text je původní, jen
            s opravenými překlepy. Všechna hodnocení včetně kritických najdete{" "}
            <a href={site.reviewsHref} className="text-sign underline underline-offset-4">
              přímo v katalogu
            </a>
            .
          </p>
        }
      />

      {/* Seřazeno podle let, rok jako marginálie vlevo */}
      <Container className="py-16 md:py-24">
        {roky.map((y) => (
          <section key={y} className="reveal grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8">
            <h2 className="tabular font-display text-[40px] leading-none font-medium text-sign md:col-span-2">{y}</h2>
            <div className="space-y-10 md:col-span-10 md:columns-2 md:gap-12 md:space-y-0">
              {reference
                .filter((r) => rok(r.datum) === y)
                .map((r) => (
                  <figure key={r.jmeno + r.datum} className="break-inside-avoid md:mb-10">
                    <blockquote className="text-[18px] leading-relaxed">„{r.text}“</blockquote>
                    <figcaption className="mt-3 text-[15px] font-bold">{r.jmeno}</figcaption>
                  </figure>
                ))}
            </div>
          </section>
        ))}
      </Container>

      <CallStrip title="Budete další?" />
    </>
  );
}
