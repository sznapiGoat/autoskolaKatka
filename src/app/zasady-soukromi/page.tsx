import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container, PageHead } from "@/components/ui";
import { addressLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zásady zpracování osobních údajů",
  description: "Jak Autoškola Katka nakládá s údaji z kontaktního formuláře.",
  alternates: { canonical: "/zasady-soukromi" },
};

function Clanek({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-8">
      <h2 className="text-[22px] font-medium md:col-span-4">{title}</h2>
      <div className="space-y-3 text-ink-soft md:col-span-8">{children}</div>
    </section>
  );
}

export default function Zasady() {
  return (
    <>
      <PageHead
        crumb="Zásady zpracování osobních údajů"
        path="/zasady-soukromi"
        title={<>Zásady zpracování <span className="accent">osobních údajů</span></>}
        lead={
          <p>
            Jak nakládám s údaji, které pošlete přes formulář na tomto webu. Zpracovávám jen to, co je potřeba,
            abych vám zavolala zpět. Žádný marketing a žádné předávání dat k reklamě. Účinné od 1. 3. 2026.
          </p>
        }
      />
      <Container className="max-w-5xl py-12 md:py-20">
        <Clanek title="Kdo údaje zpracovává">
          <p>
            Správcem je {site.owner} (Autoškola Katka), IČO {site.ico}, {addressLine}.
          </p>
          <p>
            Ohledně svých údajů se můžete ozvat na telefon{" "}
            <a href={site.phoneHref} className="text-sign underline underline-offset-4">
              {site.phone}
            </a>{" "}
            nebo e-mail{" "}
            <a href={`mailto:${site.email}`} className="text-sign underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </Clanek>
        <Clanek title="Jaké údaje">
          <p>Z kontaktního formuláře zpracovávám pouze jméno, telefonní číslo a kurz, o který máte zájem.</p>
          <p>Nesbírám žádné citlivé údaje a web nepoužívá reklamní ani analytické cookies.</p>
        </Clanek>
        <Clanek title="Proč a na základě čeho">
          <p>
            Údaje použiji jen k tomu, abych vám zavolala zpět a domluvili jsme se na kurzu, termínu nebo
            odpověděla na dotaz.
          </p>
          <p>
            Právním základem je váš souhlas udělený odesláním formuláře (čl. 6 odst. 1 písm. a GDPR) a jednání
            o uzavření smlouvy o výcviku (čl. 6 odst. 1 písm. b GDPR).
          </p>
        </Clanek>
        <Clanek title="Jak dlouho">
          <p>
            Údaje z poptávky uchovávám jen po dobu nutnou k jejímu vyřízení, nejdéle 12 měsíců od poslední
            komunikace. Pokud se přihlásíte do kurzu, řídí se uchování zákonnými lhůtami pro vedení autoškoly.
            Potom údaje mažu.
          </p>
        </Clanek>
        <Clanek title="Komu se údaje dostanou">
          <p>
            Odeslání formuláře technicky zajišťuje služba Formspree (Formspree, Inc., USA) jako zpracovatel,
            který jen doručí zprávu do mé schránky. Nikomu dalšímu údaje nepředávám a neprodávám.
          </p>
          <p>Písma webu jsou uložená přímo na tomto serveru, při načtení stránky se nic neposílá Googlu.</p>
        </Clanek>
        <Clanek title="Vaše práva">
          <p>
            Máte právo na přístup ke svým údajům a jejich kopii, na opravu, na výmaz, na omezení zpracování a
            vznesení námitky a můžete kdykoli odvolat souhlas. Stížnost můžete podat u Úřadu pro ochranu
            osobních údajů (uoou.gov.cz).
          </p>
          <p>Stačí zavolat a žádost vyřídím.</p>
        </Clanek>
      </Container>
    </>
  );
}
