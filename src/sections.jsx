import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PHONE = '724 974 771';
const PHONE_HREF = 'tel:+420724974771';
const WHATSAPP_HREF = 'https://wa.me/420724974771';
const MAPS_HREF = 'https://www.google.com/maps/search/?api=1&query=Auto%C5%A1kola+Katka%2C+Smetanova+18%2C+B%C3%ADlina';

// Malá telefonní ikonka pro CTA tlačítka
const PhoneIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
);

// sections.jsx — Autoškola Katka landing
// Sections: Nav, Hero, TrustStrip, Progress, Pricing, Instructors,
// Testimonials, Stats, FAQ, Footer

// ─────────────────────────────────────────────────────────────────────────────
// NAV  (glassmorphism)
// ─────────────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Kurzy', '#cenik'],
    ['Jak to funguje', '#progress'],
    ['O nás', '#instruktori'],
    ['Reference', '#reference'],
    ['Časté dotazy', '#faq'],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? 'pt-2' : 'pt-4'}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass rounded-3xl flex items-center justify-between transition-all
                     ${scrolled ? 'h-14 px-3 pl-5' : 'h-16 px-4 pl-6'}`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span
              className="w-9 h-9 rounded-2xl grid place-items-center text-snow font-display text-lg italic"
              style={{ background: 'var(--ink)' }}
            >
              k
            </span>
            <span className="font-display text-[17px] tracking-tight">
              Autoškola <span className="italic" style={{ color: 'var(--accent-ink)' }}>Katka</span>
            </span>
            <span className="hidden lg:inline ml-2 text-[11px] uppercase tracking-[0.14em] text-ink-400">Bílina · est. 2010</span>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-[13.5px] text-ink-400">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-2 hover:text-ink-900 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#cenik"
              className="hidden sm:inline-flex items-center text-[13.5px] text-ink-600 px-3 py-2 rounded-xl hover:bg-black/5"
            >
              Ceník
            </a>
            <a
              href={PHONE_HREF}
              className="cta-primary text-[13.5px] font-medium rounded-2xl px-4 py-2.5 inline-flex items-center gap-2"
              aria-label={`Zavolat na ${PHONE}`}
            >
              <PhoneIcon />
              <span className="hidden xs:inline sm:inline">Zavolat</span>
              <span className="tabular-nums">{PHONE}</span>
            </a>

            {/* mobile menu */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-10 h-10 grid place-items-center rounded-2xl hover:bg-black/5"
              aria-label="Menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></> : <><path d="M3 6h18M3 12h18M3 18h18"/></>}
              </svg>
            </button>
          </div>
        </nav>

        {/* mobile sheet */}
        {open && (
          <div className="md:hidden glass mt-2 rounded-3xl p-2">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-2xl hover:bg-black/5 text-ink-700"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4">

        {/* Eyebrow */}
        <div className="hero-in flex justify-center md:justify-start" style={{ animationDelay: '.05s' }}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[12.5px] text-ink-700">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            Nový kurz <span className="text-ink-400">·</span> každý týden nový termín
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-in font-display mt-6 text-[44px] sm:text-[64px] md:text-[88px] leading-[0.98] tracking-tight text-ink-900" style={{ animationDelay: '.12s' }}>
          Řidičák,<br />
          <span className="accent-italic">který sedne</span>
          <br />jako rukavice.
        </h1>

        {/* Sub + Groups + CTAs */}
        <div className="hero-in mt-8 md:mt-10" style={{ animationDelay: '.2s' }}>
          <strong className="font-display text-[26px] md:text-[34px] text-ink-900 block leading-tight mb-3">
            Autoškola Katka
          </strong>
          <p className="text-[16px] md:text-[17px] text-ink-500 max-w-[44ch] leading-relaxed">
            Lidský přístup, individuální tempo, které sedne <em>vám</em>.
          </p>

          {/* Groups grid */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {[
              { id: 'AM',  label: 'Moped' },
              { id: 'A1',  label: '125 cm³' },
              { id: 'A2',  label: '35 kW' },
              { id: 'A',   label: 'Moto' },
              { id: 'B',   label: 'Osobní',  primary: true },
              { id: 'B+E', label: 'Přívěs' },
              { id: 'C',   label: 'Nákladní', primary: true },
              { id: 'C+E', label: 'Tahač' },
              { id: 'T',   label: 'Traktor' },
            ].map(({ id, label, primary }) => (
              <a
                key={id}
                href="#cenik"
                className={`inline-flex flex-col items-center rounded-2xl px-3 py-2 transition-colors no-underline ${
                  primary
                    ? 'text-snow shadow-lift hover:opacity-90'
                    : 'bg-white/70 border border-ink-900/10 text-ink-700 hover:bg-white'
                }`}
                style={primary ? { background: 'var(--ink)' } : {}}
              >
                <span className="font-display text-[16px] leading-none">{id}</span>
                <span className={`text-[10px] mt-0.5 ${primary ? 'text-white/65' : 'text-ink-400'}`}>{label}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_HREF}
              className="cta-primary rounded-3xl px-6 py-4 text-[15px] font-medium inline-flex items-center justify-center gap-2.5 shadow-lift"
              aria-label={`Zavolat na ${PHONE}`}
            >
              <PhoneIcon size={17} />
              Zavolejte {PHONE}
            </a>
            <a
              href="#cenik"
              className="rounded-3xl px-6 py-4 text-[15px] font-medium border border-ink-900/10 hover:bg-black/5 inline-flex items-center justify-center gap-2"
            >
              Ceník a termíny
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
          <p className="mt-3 text-[13.5px] text-ink-400">
            Nejraději si popovídáme po telefonu — nebo{' '}
            <a href="#prihlasit" className="text-ink-600 underline underline-offset-2 hover:text-ink-900">nechte číslo a zavoláme vám</a>.
          </p>

          {/* Trust chip — reference */}
          <a href="#reference" className="mt-6 inline-flex items-center gap-2.5 text-[13px] text-ink-500 hover:text-ink-800 transition-colors">
            <span className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--accent)' }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </span>
            Absolventi nás doporučují — přečtěte si reference
          </a>
        </div>

        {/* Hero visual — jeden silný snímek výcvikového vozu */}
        <div className="hero-in mt-12 md:mt-16" style={{ animationDelay: '.3s' }}>
          <div className="rounded-5xl overflow-hidden relative shadow-lift" style={{ aspectRatio: '16 / 9' }}>
            <img
              src="/image-autoskolakatka.jpg"
              alt="Výcvikový vůz Autoškoly Katka"
              className="absolute inset-0 w-full h-full object-cover"
              fetchpriority="high"
            />
            {/* floating glass card — cena */}
            <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 glass rounded-2xl px-4 py-3 max-w-[260px]">
              <div className="text-[11px] uppercase tracking-[0.14em] text-ink-400">Skupina B od</div>
              <div className="font-display text-3xl mt-0.5">21 000<span className="text-ink-300 text-lg"> Kč</span></div>
            </div>
          </div>
        </div>

        {/* scroll nudge */}
        <div className="mt-10 hidden md:flex items-center gap-3 text-ink-400 text-[12.5px] nudge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          posun níže
        </div>
      </div>
    </section>
  );
}

function StatCard({ k, v }) {
  return (
    <div className="rounded-3xl bg-white/70 border border-ink-900/5 p-5 md:p-6 shadow-soft">
      <div className="font-display text-[34px] md:text-[40px] leading-none">{k}</div>
      <div className="text-[13px] text-ink-500 mt-2 leading-snug">{v}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// UČEBNA — classroom gallery
// ─────────────────────────────────────────────────────────────────────────────
function Ucebna() {
  return (
    <section id="ucebna" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel eyebrow="Naše zázemí" title={<>Naše <span className="accent-italic">učebna.</span></>} />
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="rounded-4xl overflow-hidden shadow-soft" style={{ aspectRatio: '4/3' }}>
            <img
              src="/04102011381.jpg"
              alt="Učebna autoškoly Katka"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1200" height="900"
            />
          </div>
          <div className="rounded-4xl overflow-hidden shadow-soft" style={{ aspectRatio: '4/3' }}>
            <img
              src="/04102011382.jpg"
              alt="Učebna autoškoly Katka"
              className="w-full h-full object-cover"
              loading="lazy"
              width="1200" height="900"
            />
          </div>
        </div>
        <p className="mt-5 text-[14px] text-ink-400">
          Výuka teorie probíhá v&nbsp;učebně na adrese Smetanova&nbsp;18, Bílina.{' '}
          <a href={MAPS_HREF} target="_blank" rel="noopener" className="text-ink-600 underline underline-offset-2 hover:text-ink-900">
            Zobrazit na mapě
          </a>
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TRUST STRIP — marquee
// ─────────────────────────────────────────────────────────────────────────────
function TrustStrip() {
  const items = [
    'Skupina B · osobní auta',
    'Výcvik v cizím jazyce',
    'Kondiční jízdy pro řidiče',
    'Přezkoušení po 12 bodech',
    'Přezkoušení po zákazu řízení',
    'Dárkový poukaz 365 dní',
    'Chevrolet Nubira · výcvikové vozidlo',
    'Bílina · Chotějovice',
  ];
  const row = [...items, ...items];
  return (
    <section className="py-6 border-y border-ink-900/5 bg-white/40">
      <div className="overflow-hidden">
        <ul className="marquee-track flex gap-10 whitespace-nowrap text-[13px] text-ink-500">
          {row.map((t, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-ink-300" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROGRESS TRACKER
// ─────────────────────────────────────────────────────────────────────────────
function Progress() {
  const steps = [
    { n: '01', t: 'Přihláška', d: 'Vyplníte žádost o ŘO. Zdravotní posudek doneseme společně.' },
    { n: '02', t: 'Teorie', d: 'Pravidla provozu, údržba vozidla, první pomoc — v učebně Smetanova 18, Bílina.' },
    { n: '03', t: 'Auto­cvičiště', d: 'První kontakt s vozem v bezpečném prostředí cvičiště.' },
    { n: '04', t: 'Jízdy v provozu', d: 'Předepsaný počet hodin v reálném provozu. Tempo si nastavíte.' },
    { n: '05', t: 'Zkouška', d: 'Test, jízda, technika — a po složení odjíždíte s řidičákem.' },
  ];

  const [active, setActive] = useState(2);

  return (
    <section id="progress" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel eyebrow="Cesta žáka" title={<>Z nuly k řidičáku<br/><span className="accent-italic">v pěti krocích.</span></>} />

        {/* Atmosférický obrázek cesty */}
        <div className="mt-10 relative rounded-5xl overflow-hidden shadow-lift" style={{ height: 'clamp(180px, 26vw, 300px)' }}>
          <img
            src="/road-autumn.jpg"
            alt="Otevřená silnice — vaše cesta za řidičákem"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(14,15,18,.55), rgba(14,15,18,.05) 60%)' }} />
          <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 max-w-[30ch]">
            <div className="text-snow font-display text-[22px] md:text-[28px] leading-tight">
              Vedeme vás celou cestou —<br />krok za krokem, vaším tempem.
            </div>
          </div>
        </div>

        {/* Desktop track */}
        <div className="mt-14 hidden md:block">
          <div className="relative">
            {/* dotted line */}
            <div className="absolute left-[8%] right-[8%] top-7 progress-line" />
            <ol className="grid grid-cols-5 gap-4">
              {steps.map((s, i) => (
                <li key={s.n} className="text-center">
                  <button
                    onClick={() => setActive(i)}
                    className={`mx-auto w-14 h-14 rounded-2xl grid place-items-center font-display text-[17px] transition-all ${
                      i <= active
                        ? 'text-snow shadow-lift'
                        : 'bg-white text-ink-500 border border-ink-900/8'
                    }`}
                    style={i <= active ? { background: 'var(--ink)' } : {}}
                  >
                    {i < active ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                    ) : (
                      s.n
                    )}
                  </button>
                  <div className="mt-5 font-display text-[20px]">{s.t}</div>
                  <div className="mt-1.5 text-[13.5px] text-ink-500 leading-relaxed max-w-[24ch] mx-auto">{s.d}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-[13px] text-ink-500">
            <span>Klikněte na krok pro zvýraznění</span>
          </div>
        </div>

        {/* Mobile vertical */}
        <ol className="md:hidden mt-10 space-y-4">
          {steps.map((s, i) => (
            <li key={s.n} className="flex gap-4 rounded-3xl bg-white border border-ink-900/5 p-4 shadow-soft">
              <div
                className="w-12 h-12 rounded-2xl grid place-items-center font-display text-snow shrink-0"
                style={{ background: 'var(--ink)' }}
              >
                {s.n}
              </div>
              <div>
                <div className="font-display text-[18px]">{s.t}</div>
                <div className="text-[13.5px] text-ink-500 mt-0.5 leading-relaxed">{s.d}</div>
              </div>
            </li>
          ))}
        </ol>

        {/* Dokumenty ke stažení */}
        <div className="mt-12 rounded-3xl bg-white border border-ink-900/5 p-5 md:p-6 shadow-soft">
          <div className="text-[12px] uppercase tracking-[0.18em] text-ink-400 flex items-center gap-2">
            <span className="w-6 h-px bg-ink-300" />
            Dokumenty ke stažení
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-3">
            {[
              ['Přihláška do autoškoly (žádost o přijetí k výuce a výcviku)', '/prihlaska-do-autoskoly.pdf'],
              ['Lékařský posudek o zdravotní způsobilosti', '/lekarsky-posudek.pdf'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 rounded-2xl border border-ink-900/8 bg-white px-4 py-3 text-[14px] text-ink-700 hover:text-ink-900 hover:border-ink-900/20 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                {label}
              </a>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-ink-500">
            Oba formuláře si můžete vytisknout, vyplnit a přinést s sebou — nebo je vyplníme společně na místě.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ eyebrow, title, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <div className="text-[12px] uppercase tracking-[0.18em] text-ink-400 flex items-center gap-2">
        <span className="w-6 h-px bg-ink-300" />
        {eyebrow}
      </div>
      <h2 className="font-display mt-4 text-[36px] md:text-[56px] leading-[1.02]">
        {title}
      </h2>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRICING — grid
// ─────────────────────────────────────────────────────────────────────────────
function Pricing() {
  const [tab, setTab] = useState('automobily');

  const motoCourses = [
    { eyebrow: 'Skupina AM',         title: 'Moped / skútr',        price: '23 000', kond: '1 500' },
    { eyebrow: 'Skupina A1',         title: 'Motocykl do 125 cm³',  price: '23 000', kond: '1 500' },
    { eyebrow: 'Skupina A2',         title: 'Motocykl do 35 kW',    price: '23 000', kond: '1 500' },
    { eyebrow: 'Skupina A',          title: 'Motocykl bez omezení', price: '23 000', kond: '1 500' },
    { eyebrow: 'Doplňovací zkouška', title: 'A1 → A2',              price: '6 000',  kond: '1 500' },
    { eyebrow: 'Doplňovací zkouška', title: 'A2 → A',               price: '6 000',  kond: '1 500' },
  ];

  const autoGroups = [
    {
      label: 'Osobní automobily', icon: 'car',
      courses: [
        { eyebrow: 'Skupina B',          title: 'Osobní automobil', price: '21 000', kond: '700', featured: true },
        { eyebrow: 'Rychlokurz · 6 týdnů', title: 'Skupina B — intenzivní', price: '27 000', kond: '700', note: '+ 6 000 Kč k ceně standardního kurzu B', key: 'B-rychlo' },
        { eyebrow: 'Skupina B78',        title: 'Automat',          price: '23 000', kond: '800' },
        { eyebrow: 'Doplňovací zkouška', title: 'B78 → B',          price: '6 000',  kond: '600' },
        { eyebrow: 'Sdružený kurz',      title: 'A2 + B',           price: '40 000' },
        { eyebrow: 'Sdružený kurz',      title: 'A + B',            price: '40 000', key: 'AB' },
        { eyebrow: 'Skupina B+E',        title: 'Auto s přívěsem',  price: '8 000',  kond: '800' },
        { eyebrow: 'Doplňovací zkouška', title: 'B96',              price: '6 000',  kond: '800', key: 'B96' },
      ],
    },
    {
      label: 'Nákladní automobily', icon: 'truck',
      courses: [
        { eyebrow: 'Skupina C',   title: 'Nákladní auto',    price: '25 000', kond: '1 300' },
        { eyebrow: 'Skupina C+E', title: 'Tahač / souprava', price: '14 000', kond: '1 500' },
      ],
    },
    {
      label: 'Traktory', icon: 'tractor',
      courses: [
        { eyebrow: 'Skupina T', title: 'Rozšíření ze sk. B', price: '22 000', kond: '2 000' },
        { eyebrow: 'Skupina T', title: 'Bez sk. B',           price: '38 000', kond: '2 000', key: 'T-solo' },
      ],
    },
  ];

  const kondRates = [
    { group: 'B',   rate: '700'   },
    { group: 'A',   rate: '1 500' },
    { group: 'C',   rate: '1 300' },
    { group: 'C+E', rate: '1 500' },
  ];

  const tabDefs = [
    { id: 'motocykly',  label: 'Motocykly' },
    { id: 'automobily', label: 'Automobily' },
    { id: 'kondicni',   label: 'Kondiční & Ostatní' },
  ];

  return (
    <section id="cenik" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel
          eyebrow="Ceník & kurzy"
          title={<>Vyberte si <span className="accent-italic">svůj</span><br/>řidičák.</>}
        />

        {/* Tab switcher */}
        <div className="mt-10 inline-flex gap-1 p-1.5 rounded-2xl bg-ink-50 border border-ink-900/5">
          {tabDefs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-xl text-[13.5px] font-medium transition-all ${
                tab === t.id
                  ? 'bg-white shadow-soft text-ink-900'
                  : 'text-ink-500 hover:text-ink-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Motocykly */}
        {tab === 'motocykly' && (
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {motoCourses.map((c) => (
              <PricingCard key={c.key || c.eyebrow + c.title} c={c} icon="moto" />
            ))}
          </div>
        )}

        {/* Automobily */}
        {tab === 'automobily' && (
          <div className="mt-8 space-y-10">
            {autoGroups.map((g) => (
              <div key={g.label}>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-4 flex items-center gap-3">
                  <span className="w-6 h-px bg-ink-300" />
                  {g.label}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {g.courses.map((c) => (
                    <PricingCard key={c.key || c.eyebrow + c.title} c={c} icon={g.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Kondiční & Ostatní */}
        {tab === 'kondicni' && (
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl bg-white border border-ink-900/5 shadow-soft p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-5">Kondiční jízdy</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {kondRates.map(({ group, rate }) => (
                  <div key={group} className="text-center rounded-2xl p-4 bg-ink-50">
                    <div className="text-[11px] uppercase tracking-[0.14em] text-ink-400 mb-1">Sk. {group}</div>
                    <div className="font-display text-[28px] leading-none">{rate} <span className="text-[12px] text-ink-400">Kč/h</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-ink-900/5 shadow-soft p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-1">Poplatky za zkoušky</div>
              <div className="text-[12px] text-ink-400 mb-4">hradí se zkoušejícímu v den zkoušky</div>
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-[13.5px] mb-8">
                {[
                  ['Zkouška z odborné způsobilosti', '700 Kč'],
                  ['Opravná zkouška PPV', '100 Kč'],
                  ['Opravná zkouška OUV (C, CE)', '200 Kč'],
                  ['Opravná zkouška PJ', '400 Kč'],
                  ['Opravná závěrečná zkouška (souhrnná)', '600 Kč'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between gap-4 py-1.5 border-b border-ink-900/5">
                    <dt className="text-ink-600">{label}</dt>
                    <dd className="font-medium text-ink-900 whitespace-nowrap">{val}</dd>
                  </div>
                ))}
              </dl>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-1">Ostatní poplatky</div>
              <div className="text-[12px] text-ink-400 mb-4">hradí se autoškole</div>
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-[13.5px]">
                {[
                  ['Převod z jiné AŠ — sk. B, B+E, B78, B96', '3 000 Kč'],
                  ['Převod z jiné AŠ — ostatní skupiny', '5 000 Kč / skupinu'],
                  ['Zkouška po zákazu řízení', '6 000 Kč / skupinu'],
                  ['Storno kurzu nebo převod k jiné AŠ', '3 000 Kč'],
                  ['Neomluvená hodina (< 1 h před lekcí)', '500 Kč'],
                  ['Výuka/výcvik v cizím jazyce', 'dle náročnosti, domluvou'],
                  ['Dárkový poukaz', 'platnost 365 dní od zakoupení'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between gap-4 py-1.5 border-b border-ink-900/5">
                    <dt className="text-ink-600">{label}</dt>
                    <dd className="font-medium text-ink-900 whitespace-nowrap">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}

        <p className="mt-5 text-[13px] text-ink-400 max-w-[70ch]">
          Ceník platný od 1.&nbsp;3.&nbsp;2026. V&nbsp;cenách kurzu není zahrnut poplatek za závěrečnou zkoušku.
          Ceny jsou v&nbsp;Kč včetně DPH&nbsp;— nejsme plátci DPH. Ke každému žadateli přistupujeme individuálně,
          cena nemusí být konečná. Dárkový poukaz propadá po 365 dnech bez nároku na vrácení ceny.
        </p>
      </div>
    </section>
  );
}

const CARD_ICONS = {
  moto: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/>
      <path d="M5.5 17h13M9 8h4l3 5M13 8l2-4h3"/>
    </svg>
  ),
  car: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3v-5l3-5h12l3 5v5h-2M5 9h14"/>
      <circle cx="7.5" cy="17" r="2.5"/><circle cx="16.5" cy="17" r="2.5"/>
    </svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h13v13H1zM14 8h4l3 4v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  tractor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="17" r="4"/><circle cx="18" cy="19" r="2"/>
      <path d="M11 17V9l-2-5H7v9M11 9h5l2 5h-7"/>
    </svg>
  ),
};

function PricingCard({ c, icon }) {
  const featured = !!c.featured;
  return (
    <article
      className={`rounded-3xl p-6 flex flex-col gap-3 relative ${
        featured ? 'shadow-pop text-snow' : 'bg-white border border-ink-900/6 shadow-soft'
      }`}
      style={featured ? { background: 'var(--ink)' } : {}}
    >
      {featured && (
        <div
          className="absolute -top-3 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.12em]"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
          Nejoblíbenější
        </div>
      )}

      {icon && CARD_ICONS[icon] && (
        <div
          className={`absolute top-4 right-4 ${featured ? 'text-white' : 'text-ink-900'}`}
          style={{ opacity: 0.12 }}
        >
          {CARD_ICONS[icon]}
        </div>
      )}

      <div className={`text-[11px] uppercase tracking-[0.16em] font-medium ${featured ? 'text-white/50' : 'text-ink-400'}`}>
        {c.eyebrow}
      </div>
      <div className="font-display text-[20px] leading-tight">{c.title}</div>

      <div className="mt-2">
        <div className="font-display text-[36px] leading-none">
          {c.price} <span className={`text-[15px] ${featured ? 'text-white/60' : 'text-ink-400'}`}>Kč</span>
        </div>
        {c.kond && (
          <div className={`text-[13px] mt-1.5 ${featured ? 'text-white/55' : 'text-ink-400'}`}>
            kondiční {c.kond} Kč / h
          </div>
        )}
        {c.note && (
          <div className={`text-[12px] mt-1 ${featured ? 'text-white/45' : 'text-ink-400'}`}>
            {c.note}
          </div>
        )}
      </div>

      <a
        href={PHONE_HREF}
        className={`mt-auto pt-2 inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors ${
          featured ? 'text-white/80 hover:text-white' : 'text-ink-900 hover:text-ink-600'
        }`}
        aria-label={`Zavolat kvůli kurzu ${c.title} na ${PHONE}`}
      >
        <PhoneIcon size={13} />
        Zeptat se — {PHONE}
      </a>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CALL BAND — výzva k zavolání s reálnou fotkou vozidla
// ─────────────────────────────────────────────────────────────────────────────
function CallBand() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative rounded-5xl overflow-hidden shadow-pop" style={{ background: 'var(--ink)' }}>
          <div className="grid md:grid-cols-2">
            {/* Text + telefon */}
            <div className="order-2 md:order-1 p-8 md:p-12 text-snow flex flex-col justify-center">
              <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 flex items-center gap-2">
                <span className="w-6 h-px bg-white/30" />
                Nevíte, co vybrat?
              </div>
              <h2 className="font-display mt-4 text-[32px] md:text-[46px] leading-[1.04]">
                Zavolejte a{' '}
                <span className="italic" style={{ color: 'var(--accent)' }}>poradíme si.</span>
              </h2>
              <p className="mt-4 text-[15px] text-white/60 leading-relaxed max-w-[42ch]">
                Řekněte nám, co potřebujete — vybereme správnou skupinu, řekneme cenu
                i nejbližší termín. Nezávazně, v klidu, po telefonu.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center gap-3 self-start rounded-2xl px-6 py-4 text-[16px] font-medium bg-snow text-ink-900 hover:bg-white transition-colors shadow-lift"
                aria-label={`Zavolat na ${PHONE}`}
              >
                <PhoneIcon size={18} />
                {PHONE}
              </a>
              <div className="mt-4 text-[13px] text-white/40">
                Po–Ne · nezvedneme? Zavoláme zpět. Nebo{' '}
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener" className="text-white/70 underline underline-offset-2 hover:text-white">
                  napište na WhatsApp
                </a>.
              </div>
            </div>

            {/* Reálná fotka vozu (na dveřích je telefonní číslo) */}
            <div className="order-1 md:order-2 relative min-h-[240px] md:min-h-[380px]">
              <img
                src="/02112011402.jpg"
                alt="Výcvikové vozidlo Autoškoly Katka s telefonním číslem na dveřích"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width="1200" height="900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — jen Kateřina
// ─────────────────────────────────────────────────────────────────────────────
function Instructors() {
  return (
    <section id="instruktori" className="py-20 md:py-28 bg-paper relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel
          eyebrow="O nás"
          title={<>Autoškola s <span className="accent-italic">lidským přístupem.</span></>}
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Karta */}
          <article className="rounded-4xl bg-white p-8 md:p-10 shadow-soft border border-ink-900/5">
            <div className="flex items-center gap-5">
              <div
                className="w-20 h-20 rounded-full grid place-items-center font-display text-[28px] shrink-0"
                style={{ background: 'oklch(0.78 0.10 25)', color: '#1a1c20' }}
              >
                KK
              </div>
              <div>
                <div className="font-display text-[22px] leading-tight">Katka</div>
                <div className="text-[13px] text-ink-500 mt-1">Majitelka · Skupina B · Kondiční jízdy</div>
              </div>
            </div>
            <p className="mt-6 text-[15px] text-ink-600 leading-relaxed">
              Výcvik skupiny B a kondiční jízdy pro stávající řidiče. Specialistka na přezkoušení odborné
              způsobilosti po zákazu řízení nebo po dosažení 12 bodů. Individuální přístup ke každému žadateli.
            </p>
            <div className="mt-6 pt-5 border-t border-ink-900/5 flex items-center gap-6 text-[13px] text-ink-500">
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                15+ let praxe
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                Skupina B, B78, kondiční
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                Přezkoušení po zákazu
              </span>
            </div>
          </article>

          {/* Text */}
          <div className="space-y-5 text-[16px] text-ink-600 leading-relaxed">
            <div className="rounded-4xl overflow-hidden shadow-soft" style={{ aspectRatio: '16/10' }}>
              <img
                src="/driving-hands.jpg"
                alt="Za volantem — klidná, jistá jízda"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p>
              Nabízíme výcvik skupiny B, kondiční jízdy a školení referenčních řidičů.
              Specializujeme se na přezkoušení odborné způsobilosti po zákazu řízení nebo
              po dosažení 12 bodů.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 text-[14.5px] font-medium cta-primary rounded-2xl px-5 py-3 shadow-lift"
                aria-label={`Zavolat na ${PHONE}`}
              >
                <PhoneIcon />
                Zavolejte {PHONE}
              </a>
              <a
                href="#prihlasit"
                className="inline-flex items-center justify-center gap-2 text-[14.5px] font-medium rounded-2xl px-5 py-3 border border-ink-900/12 hover:bg-black/5"
              >
                Nechat číslo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS — carousel grid
// ─────────────────────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      name: 'Aneta',
      role: 'Absolventka',
      text: 'S paní Katkou jsem se cítila velmi dobře od začátku až do konce. Naučila mě vše k úspěšnému absolvování zkoušky. Kdyby bylo možné dát 10 hvězdiček, dám je!',
    },
    {
      name: 'Krista & Vašek',
      role: 'Absolventi',
      text: 'Já i můj syn máme výborné zkušenosti. Všem, kteří potřebují trpělivou a hodnou paní učitelku s velkým rozhledem, doporučujeme volit tuto autoškolu.',
    },
    {
      name: 'Zdeněk Štěpánek',
      role: 'Absolvent',
      text: 'Autoškola Katka je výborná. Kátka je přátelská, usměvavá, trpělivá a všechno, čím si nebudete jisti, vám ukáže a poradí.',
    },
    {
      name: 'Michal Pohl',
      role: 'Absolvent',
      text: 'Přístup k žákům jak osobně, tak telefonicky je nejlepší. Při řízení nejste nervózní a nikdo vás nestresuje. Vzhledem k ceně určitě doporučuji.',
    },
  ];

  return (
    <section id="reference" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel
          eyebrow="Reference"
          title={<>Co říkají <span className="accent-italic">absolventi.</span></>}
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r) => (
            <TestimonialCard key={r.name} r={r} />
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-ink-900/6 bg-white shadow-soft p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[14px] text-ink-700 font-medium">
              Více hodnocení najdete na nezávislém portálu
            </p>
            <p className="text-[12.5px] text-ink-400 mt-0.5 italic">
              Výběr z více než 15 let spokojených absolventů v&nbsp;Bílině.
            </p>
          </div>
          <a
            href="https://www.vsechny-autoskoly.cz/autoskola_katka/hodnoceni/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-[13.5px] font-medium text-white shadow-lift transition-opacity hover:opacity-90"
            style={{ background: 'var(--accent-ink)' }}
          >
            vsechny-autoskoly.cz
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ r }) {
  return (
    <article className="rounded-3xl bg-white border border-ink-900/5 shadow-soft p-6 flex flex-col gap-4">
      {/* 5-star rating */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--accent)' }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[14px] text-ink-600 leading-relaxed flex-1">
        &ldquo;{r.text}&rdquo;
      </p>

      {/* Author */}
      <div className="pt-3 border-t border-ink-900/5">
        <div className="text-[13px] font-medium text-ink-800">{r.name}</div>
        <div className="text-[11.5px] text-ink-400 mt-0.5">{r.role} · Autoškola Katka</div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────
function FAQ() {
  const items = [
    { q: 'Kdy můžu začít?', a: 'Zápis přijímáme průběžně. Zavolejte nebo napište a domluvíme termín.' },
    { q: 'Lze platit na splátky?', a: 'Ano, splátky jsou možné přímo přes autoškolu bez navýšení.' },
    { q: 'Mohu absolvovat výcvik v cizím jazyce?', a: 'Ano. Cena se domluví individuálně před začátkem kurzu.' },
    { q: 'Co když u zkoušky neuspěji?', a: 'Opravné zkoušky: PPV 100 Kč, OUV (C, CE) 200 Kč, praktická jízda 400 Kč. Doplňující jízdy účtujeme dle sazby kondiční jízdy příslušné skupiny.' },
    { q: 'Jdu po dosažení 12 bodů?', a: 'Stačí samotné přezkoušení odborné způsobilosti — cvičné jízdy nejsou povinné. Přineste psychologické vyšetření a výpis z karty řidiče. Doklad o přezkoušení nesmí být starší 30 dní.' },
    { q: 'Jdu po zákazu řízení?', a: 'Přezkoušení absolvujete po skončení zákazu činnosti. Přineste rozsudek soudu nebo rozhodnutí správního orgánu, výpis z karty řidiče, žádost do autoškoly a posudek o zdravotní způsobilosti.' },
    { q: 'Přecházím z jiné autoškoly — jak to funguje?', a: 'Převod na zkoušky: 3 000 Kč pro sk. B, B+E, B78, B96. Pro ostatní skupiny 5 000 Kč za každou skupinu.' },
    { q: 'Platí se za dárkový poukaz?', a: 'Dárkový poukaz má platnost 365 dní od zakoupení. Po uplynutí doby poukaz propadá bez nároku na vrácení ceny.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionLabel
          eyebrow="Časté dotazy"
          title={<>Otázky, které <span className="accent-italic">slýcháme.</span></>}
          align="center"
        />
        <ul className="mt-12 space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <li key={i} className={`rounded-3xl border transition-all ${active ? 'bg-white border-ink-900/10 shadow-soft' : 'bg-white/50 border-ink-900/6'}`}>
                <button
                  onClick={() => setOpen(active ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-display text-[19px] md:text-[20px]">{it.q}</span>
                  <span className={`w-9 h-9 rounded-full grid place-items-center transition-transform shrink-0 ${active ? 'rotate-45' : ''}`}
                    style={{ background: active ? 'var(--ink)' : '#fff', color: active ? '#fff' : '#1a1c20', border: '1px solid rgba(14,15,18,.08)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-6 text-[15px] text-ink-600 leading-relaxed max-w-[60ch]">{it.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="pt-20 pb-8" style={{ background: 'var(--ink)', color: '#E7E5DE' }}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-2xl grid place-items-center font-display text-lg italic" style={{ background: 'var(--accent)', color: '#fff' }}>k</span>
              <span className="font-display text-[20px]">Autoškola <span className="italic">Katka</span></span>
            </div>
            <p className="mt-5 text-[14.5px] text-white/60 max-w-[40ch] leading-relaxed">
              Autoškola v Bílině - Chotějovicích. Učíme řídit od roku 2010. Trpělivě, moderně, bez křiku.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-7 inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-[15px] font-medium text-ink-900 bg-snow hover:bg-white transition-colors"
              aria-label={`Zavolat na ${PHONE}`}
            >
              <PhoneIcon size={16} />
              Zavolejte {PHONE}
            </a>
          </div>

          <FooterCol title="Kurzy" links={['Skupina B · B78', 'Skupiny A / A1 / A2', 'B+E · soupravy', 'Skupiny C · C+E', 'Skupina T (traktory)', 'Kondiční jízdy']} />
          <FooterCol title="Služby" links={['Přezkoušení po 12 b.', 'Po zákazu řízení', 'Školení referenčních řidičů', 'Převod z jiné AŠ', 'Cizojazyčný výcvik']} />
          <FooterCol title="Kontakt" links={[['+420 724 974 771', PHONE_HREF], ['WhatsApp', WHATSAPP_HREF], ['Smetanova 18, Bílina', MAPS_HREF], 'Bílina - Chotějovice', '418 04']} />
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-white/50">
          <div>
            <div>© 2026 Autoškola Katka</div>
            <div className="mt-0.5 text-[11px] text-white/30">Provozovatel: Kateřina Krajníková</div>
          </div>
          <div className="flex gap-5">
            <Link to="/zasady-soukromi" className="hover:text-white">Zásady soukromí</Link>
            <a href={PHONE_HREF} className="hover:text-white">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="md:col-span-2">
      <div className="text-[11.5px] uppercase tracking-[0.16em] text-white/40">{title}</div>
      <ul className="mt-5 space-y-2.5 text-[14px]">
        {links.map((l) => {
          const [label, href] = Array.isArray(l) ? l : [l, null];
          return (
            <li key={label}>
              {href ? (
                <a href={href} className="text-white/80 hover:text-white">{label}</a>
              ) : (
                <span className="text-white/70">{label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Nav, Hero, Ucebna, TrustStrip, Progress, Pricing, CallBand, Instructors, Testimonials, FAQ, Footer, SectionLabel };
