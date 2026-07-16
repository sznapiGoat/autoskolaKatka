import React from 'react';
import { Nav, Hero, Ucebna, TrustStrip, Progress, Pricing, CallBand, Instructors, Testimonials, FAQ, Footer } from './sections';
import { Wizard } from './wizard';
import { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle } from './tweaks-panel';

// app.jsx — Autoškola Katka
// Orchestrates the page; owns Tweaks for accent color + display font.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "soft-coral",
  "displayFont": "playfair",
  "darkHero": false,
  "showStickyCta": true
}/*EDITMODE-END*/;

const ACCENTS = {
  'soft-coral':     { base: 'oklch(0.74 0.13 25)',  ink: 'oklch(0.42 0.14 25)',  soft: 'oklch(0.95 0.04 25)'  },
  'electric-violet':{ base: 'oklch(0.62 0.18 295)', ink: 'oklch(0.40 0.18 295)', soft: 'oklch(0.95 0.04 295)' },
  'forest':         { base: 'oklch(0.62 0.13 155)', ink: 'oklch(0.38 0.10 155)', soft: 'oklch(0.95 0.04 155)' },
  'cobalt':         { base: 'oklch(0.58 0.18 245)', ink: 'oklch(0.38 0.16 245)', soft: 'oklch(0.95 0.04 245)' },
};

const FONTS = {
  playfair: '"Playfair Display", serif',
  inter:    '"Inter", system-ui, sans-serif',
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent + font as CSS vars on :root
  React.useEffect(() => {
    const a = ACCENTS[t.accent] || ACCENTS['soft-coral'];
    document.documentElement.style.setProperty('--accent', a.base);
    document.documentElement.style.setProperty('--accent-ink', a.ink);
    document.documentElement.style.setProperty('--accent-soft', a.soft);

    const f = FONTS[t.displayFont] || FONTS.playfair;
    let s = document.getElementById('__display-font-override');
    if (!s) { s = document.createElement('style'); s.id = '__display-font-override'; document.head.appendChild(s); }
    s.textContent = `.font-display{font-family:${f};letter-spacing:${t.displayFont === 'inter' ? '-0.03em' : '-0.015em'};font-weight:${t.displayFont === 'inter' ? '600' : '500'};}`;
  }, [t.accent, t.displayFont]);

  // Jemné odhalování sekcí při scrollu (hero necháváme hned viditelné)
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = Array.from(document.querySelectorAll('main > section')).slice(1);
    targets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Ucebna />
        <TrustStrip />
        <Progress />
        <Pricing />
        <CallBand />
        <Instructors />
        <Testimonials />
        <Wizard />
        <FAQ />
      </main>
      <Footer />

      {/* Sticky mobile CTA */}
      {t.showStickyCta && <StickyMobileCta />}

      <TweaksPanel title="Tweaks · Katka">
        <TweakSection label="Brand" />
        <TweakRadio
          label="Accent"
          value={t.accent}
          options={[
            { value: 'soft-coral',      label: 'Coral' },
            { value: 'electric-violet', label: 'Violet' },
            { value: 'forest',          label: 'Forest' },
            { value: 'cobalt',          label: 'Cobalt' },
          ]}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakRadio
          label="Display font"
          value={t.displayFont}
          options={[
            { value: 'playfair', label: 'Playfair' },
            { value: 'inter',    label: 'Inter' },
          ]}
          onChange={(v) => setTweak('displayFont', v)}
        />

        <TweakSection label="Layout" />
        <TweakToggle
          label="Mobile sticky CTA"
          value={t.showStickyCta}
          onChange={(v) => setTweak('showStickyCta', v)}
        />
      </TweaksPanel>
    </div>
  );
}

function StickyMobileCta() {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-30 glass rounded-3xl p-2 flex items-center justify-between gap-2 shadow-pop">
      <div className="pl-3">
        <div className="text-[11px] uppercase tracking-[0.14em] text-ink-400">Zavolejte a domluvíme se</div>
        <div className="font-display text-[18px] leading-none mt-0.5">Autoškola Katka</div>
      </div>
      <a
        href="tel:+420724974771"
        className="cta-primary rounded-2xl px-4 py-3 text-[13.5px] font-medium inline-flex items-center gap-2 shrink-0"
        aria-label="Zavolat na 724 974 771"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
        724 974 771
      </a>
    </div>
  );
}

export default App;
