import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './sections';

// privacy.jsx — Zásady zpracování osobních údajů (GDPR)
// Vztahuje se hlavně na kontaktní formulář na hlavní stránce.

function Privacy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Zásady soukromí — Autoškola Katka';
  }, []);

  return (
    <div className="relative">
      {/* Jednoduchá horní lišta */}
      <header className="fixed top-0 inset-x-0 z-40 pt-4">
        <div className="mx-auto max-w-3xl px-4">
          <nav className="glass rounded-3xl h-16 px-4 pl-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <span
                className="w-9 h-9 rounded-2xl grid place-items-center text-snow font-display text-lg italic"
                style={{ background: 'var(--ink)' }}
              >
                k
              </span>
              <span className="font-display text-[17px] tracking-tight">
                Autoškola <span className="italic" style={{ color: 'var(--accent-ink)' }}>Katka</span>
              </span>
            </Link>
            <Link
              to="/"
              className="text-[13.5px] text-ink-700 px-4 py-2.5 rounded-2xl hover:bg-black/5 inline-flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>
              Zpět na web
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 md:pt-40 pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-[12px] uppercase tracking-[0.18em] text-ink-400 flex items-center gap-2">
            <span className="w-6 h-px bg-ink-300" />
            Ochrana soukromí
          </div>
          <h1 className="font-display mt-4 text-[40px] md:text-[56px] leading-[1.02]">
            Zásady zpracování <span className="accent-italic">osobních údajů.</span>
          </h1>
          <p className="mt-5 text-[15px] text-ink-500 leading-relaxed max-w-[60ch]">
            Tyto zásady popisují, jak nakládáme s údaji, které nám pošlete
            přes kontaktní formulář na tomto webu. Zpracováváme jen to,
            co je potřeba k tomu, abychom vám zavolali zpět. Žádný marketing,
            žádné předávání dat třetím stranám k reklamě.
          </p>
          <p className="mt-3 text-[13px] text-ink-400">Účinné od 1.&nbsp;3.&nbsp;2026.</p>

          <div className="mt-12 space-y-10">
            <Section n="1" title="Kdo údaje zpracovává (správce)">
              <p>
                Správcem osobních údajů je <strong className="text-ink-800">Kateřina Krajníková — Autoškola Katka</strong>,
                Smetanova&nbsp;18, 418&nbsp;04 Bílina&nbsp;– Chotějovice.
              </p>
              <p>
                V čemkoli ohledně svých údajů nás můžete kontaktovat na telefonu{' '}
                <a href="tel:+420724974771" className="font-medium" style={{ color: 'var(--accent-ink)' }}>724&nbsp;974&nbsp;771</a>.
              </p>
            </Section>

            <Section n="2" title="Jaké údaje zpracováváme">
              <p>Z kontaktního formuláře od vás zpracováváme pouze:</p>
              <ul className="mt-3 space-y-2">
                <Li>jméno a příjmení,</Li>
                <Li>telefonní číslo,</Li>
                <Li>e-mail (nepovinné, jen pokud jej vyplníte),</Li>
                <Li>skupinu / kurz, o který máte zájem.</Li>
              </ul>
              <p className="mt-3">
                Nesbíráme žádné citlivé údaje a formulář nepoužívá cookies pro reklamní účely.
              </p>
            </Section>

            <Section n="3" title="Proč a na základě čeho">
              <p>
                Vaše údaje použijeme výhradně k tomu, abychom vás <strong className="text-ink-800">kontaktovali
                zpět</strong> a domluvili se na kurzu, termínu nebo zodpověděli váš dotaz.
              </p>
              <p>
                Právním základem je váš souhlas, který udělíte odesláním formuláře
                (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;a&nbsp;GDPR), a jednání směřující k případnému
                uzavření smlouvy o výcviku (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;b&nbsp;GDPR).
              </p>
            </Section>

            <Section n="4" title="Jak dlouho je uchováváme">
              <p>
                Údaje z poptávky uchováváme jen po dobu nezbytnou k jejímu vyřízení,
                nejdéle 12&nbsp;měsíců od poslední komunikace. Pokud se přihlásíte do kurzu,
                řídí se uchování údajů příslušnými zákonnými lhůtami pro vedení autoškoly.
                Poté údaje mažeme.
              </p>
            </Section>

            <Section n="5" title="Komu se údaje dostanou">
              <p>
                Odeslání formuláře technicky zajišťuje služba <strong className="text-ink-800">Formspree</strong>{' '}
                (Formspree, Inc., USA) jako zpracovatel — pouze doručí zprávu do naší schránky.
                Vaše údaje <strong className="text-ink-800">nepředáváme</strong> nikomu dalšímu pro
                marketing ani je neprodáváme.
              </p>
            </Section>

            <Section n="6" title="Vaše práva">
              <p>Ve vztahu ke svým údajům máte právo:</p>
              <ul className="mt-3 space-y-2">
                <Li>na přístup k údajům a jejich kopii,</Li>
                <Li>na opravu nepřesných údajů,</Li>
                <Li>na výmaz („právo být zapomenut“),</Li>
                <Li>na omezení zpracování a vznést námitku,</Li>
                <Li>kdykoli odvolat udělený souhlas,</Li>
                <Li>podat stížnost u Úřadu pro ochranu osobních údajů (uoou.gov.cz).</Li>
              </ul>
              <p className="mt-3">
                Stačí zavolat na{' '}
                <a href="tel:+420724974771" className="font-medium" style={{ color: 'var(--accent-ink)' }}>724&nbsp;974&nbsp;771</a>{' '}
                a vaši žádost vyřídíme.
              </p>
            </Section>
          </div>

          <div className="mt-16 rounded-4xl bg-white border border-ink-900/5 shadow-soft p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-display text-[22px]">Máte dotaz k údajům?</div>
              <p className="text-[14px] text-ink-500 mt-1">Nejjednodušší je zavolat — vše vyřídíme po telefonu.</p>
            </div>
            <a
              href="tel:+420724974771"
              className="shrink-0 inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 text-[14.5px] font-medium text-snow shadow-lift"
              style={{ background: 'var(--ink)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
              724 974 771
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ n, title, children }) {
  return (
    <section>
      <h2 className="font-display text-[24px] md:text-[28px] leading-tight flex items-baseline gap-3">
        <span className="text-[15px] text-ink-300 font-normal">{n}.</span>
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[15px] text-ink-600 leading-relaxed max-w-[65ch]">
        {children}
      </div>
    </section>
  );
}

function Li({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
      <span>{children}</span>
    </li>
  );
}

export { Privacy };
