import React, { useState } from 'react';

// wizard.jsx — jednoduchý kontaktní formulář v sekci Kontakt.
// Hlavní akce je zavolat; formulář je snadná alternativa „nechte číslo, zavolám vám".
const FORMSPREE = 'https://formspree.io/f/xjgzgvod';

const COURSE_OPTIONS = [
  ['', 'Nevím / poradíte mi'],
  ['B', 'Skupina B — osobní auto'],
  ['A', 'Motocykl — A / A1 / A2'],
  ['B+E', 'B s přívěsem'],
  ['C', 'Nákladní — C / C+E'],
  ['T', 'Traktor — T'],
  ['KOND', 'Kondiční jízdy'],
  ['PREZ', 'Přezkoušení (12 bodů / zákaz)'],
];

function Wizard() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    course: '',
    name: '',
    phone: '',
    consent: false,
  });

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!data.name.trim() || !data.phone.trim()) {
      setError('Vyplňte prosím jméno a telefonní číslo.');
      return;
    }
    if (!data.consent) {
      setError('Souhlas se zpracováním osobních údajů je povinný.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const courseLabel = (COURSE_OPTIONS.find(([v]) => v === data.course) || [])[1];
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          jmeno: data.name,
          telefon: data.phone,
          ...(data.course && { kurz: courseLabel }),
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Něco se pokazilo. Zavolejte nám na 724 974 771.');
      }
    } catch {
      setError('Chyba připojení. Zkuste to znovu nebo zavolejte na 724 974 771.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <section id="prihlasit" className="py-20 md:py-32 relative" style={{ background: 'linear-gradient(180deg, var(--bg), #F1ECE3 100%)' }}>
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div
            className="inline-flex w-20 h-20 rounded-full items-center justify-center mb-8 mx-auto"
            style={{ background: 'var(--ink)' }}
            aria-hidden="true"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 5 5L20 7"/>
            </svg>
          </div>
          <h2 className="font-display text-[40px] md:text-[52px] leading-tight">
            Díky, ozvu se vám!
          </h2>
          <p className="mt-5 text-[17px] text-ink-500 leading-relaxed max-w-[38ch] mx-auto">
            Zavolám vám zpět na uvedené číslo, obvykle do 24 hodin.
          </p>
          <a
            href="tel:+420724974771"
            className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-medium"
            style={{ color: 'var(--accent-ink)' }}
          >
            Nechce se vám čekat? Zavolejte 724 974 771
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <div>
            <button
              onClick={() => {
                setSent(false);
                setData({ course: '', name: '', phone: '', consent: false });
              }}
              className="mt-10 inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[15px] font-medium border border-ink-900/12 hover:bg-black/5 transition-colors"
            >
              ← Nová poptávka
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="prihlasit" className="py-20 md:py-32 relative" style={{ background: 'linear-gradient(180deg, var(--bg), #F1ECE3 100%)' }}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left rail — zavolat je nejrychlejší */}
          <div className="md:col-span-5">
            <div className="text-[12px] uppercase tracking-[0.18em] text-ink-400 flex items-center gap-2">
              <span className="w-6 h-px bg-ink-300" />
              Kontakt
            </div>
            <h2 className="font-display mt-4 text-[36px] md:text-[46px] leading-[1.05]">
              Nejraději si<br /><span className="accent-italic">popovídáme.</span>
            </h2>
            <p className="mt-5 text-[15px] text-ink-500 leading-relaxed max-w-[38ch]">
              Zavolejte a se vším vám ráda poradím — vysvětlím, co který kurz
              obnáší, a rovnou domluvíme termín.
            </p>

            {/* Velké tlačítko pro zavolání */}
            <a
              href="tel:+420724974771"
              className="mt-8 flex items-center gap-4 rounded-4xl p-5 shadow-lift text-snow transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--ink)' }}
              aria-label="Zavolat na číslo 724 974 771"
            >
              <span
                className="w-12 h-12 rounded-2xl grid place-items-center shrink-0"
                style={{ background: 'var(--accent)' }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-white/50">Zavolejte</span>
                <span className="block font-display text-[26px] leading-none mt-0.5">724 974 771</span>
              </span>
            </a>

            <p className="mt-5 text-[13.5px] text-ink-400 leading-relaxed max-w-[36ch]">
              Nezvedám, protože zrovna učím? Ozvu se zpět. Nebo mi{' '}
              <span className="text-ink-600">vedle nechte číslo</span> a zavolám vám sama.
            </p>
          </div>

          {/* Right — jednoduchý formulář */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-4xl bg-white shadow-pop border border-ink-900/5 p-6 md:p-8"
              noValidate
            >
              <h3 className="font-display text-[24px] md:text-[28px] leading-tight">
                Nechte mi číslo, zavolám vám
              </h3>
              <p className="mt-1.5 text-[14px] text-ink-500">
                Stačí jméno a telefon. Ozvu se obvykle do 24 hodin.
              </p>

              <div className="mt-6 grid gap-4">
                <Field
                  id="contact-name"
                  label="Jméno a příjmení"
                  value={data.name}
                  onChange={(v) => set('name', v)}
                  placeholder="Anna Nováková"
                  autoComplete="name"
                  required
                />
                <Field
                  id="contact-phone"
                  label="Telefon"
                  value={data.phone}
                  onChange={(v) => set('phone', v)}
                  placeholder="+420 777 ___ ___"
                  type="tel"
                  autoComplete="tel"
                  required
                />

                <div>
                  <label htmlFor="contact-course" className="block">
                    <div className="text-[12px] uppercase tracking-[0.14em] text-ink-400 mb-2">
                      Kurz <span className="text-ink-300 normal-case tracking-normal">(nepovinné)</span>
                    </div>
                    <select
                      id="contact-course"
                      value={data.course}
                      onChange={(e) => set('course', e.target.value)}
                      className="w-full h-12 px-4 rounded-2xl bg-white border border-ink-900/10 focus:border-ink-900/30 outline-none text-[15px] appearance-none cursor-pointer"
                    >
                      {COURSE_OPTIONS.map(([value, label]) => (
                        <option key={value || 'none'} value={value}>{label}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    checked={data.consent}
                    onChange={(e) => set('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 accent-black shrink-0 cursor-pointer"
                    aria-required="true"
                    required
                  />
                  <label htmlFor="contact-consent" className="text-[12.5px] text-ink-500 leading-relaxed cursor-pointer">
                    Souhlasím se{' '}
                    <a href="/zasady-soukromi" className="underline underline-offset-2 hover:text-ink-800">zpracováním osobních údajů</a>{' '}
                    pro účely kontaktu ohledně přihlášky. Žádný marketing.
                    <span className="text-ink-400" aria-hidden="true"> *</span>
                  </label>
                </div>
              </div>

              {error && (
                <div role="alert" className="mt-5 px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-[13.5px] text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full sm:w-auto rounded-2xl px-6 py-3.5 text-[14.5px] font-medium inline-flex items-center justify-center gap-2 shadow-lift text-white disabled:opacity-60 transition-opacity"
                style={{ background: 'var(--accent-ink)' }}
                aria-busy={loading}
              >
                {loading ? 'Odesílám…' : 'Ať mi zavolá'}
                {!loading && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                )}
              </button>

              <div className="mt-5 flex items-center gap-3 text-[12.5px] text-ink-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Uložíme jen jméno a telefon · bez marketingu
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, value, onChange, placeholder, required, type = 'text', autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block">
        <div className="text-[12px] uppercase tracking-[0.14em] text-ink-400 mb-2">
          {label}
          {required && <span className="ml-1 text-ink-400" aria-hidden="true">*</span>}
        </div>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          aria-required={required ? 'true' : undefined}
          autoComplete={autoComplete}
          className="w-full h-12 px-4 rounded-2xl bg-white border border-ink-900/10 focus:border-ink-900/30 outline-none text-[15px]"
        />
      </label>
    </div>
  );
}

export { Wizard };
