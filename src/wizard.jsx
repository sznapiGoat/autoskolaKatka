import React, { useState } from 'react';

// wizard.jsx — 2-step contact form with Formspree submission
// TODO: Replace YOUR_FORM_ID below — sign up at formspree.io, create a new form,
//       set the recipient to info@autoskolakatka.cz, then paste your form ID here.
const FORMSPREE = 'https://formspree.io/f/mojbjqel';

function Wizard() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    course: 'B',
    name: '',
    phone: '',
    email: '',
    consent: false,
  });

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const totalSteps = 2;
  const next = () => setStep((s) => Math.min(totalSteps - 1, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const handleSubmit = async () => {
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
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          kurz: data.course,
          jmeno: data.name,
          telefon: data.phone,
          ...(data.email && { email: data.email }),
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Něco se pokazilo. Zavolejte nám na +420 724 974 771.');
      }
    } catch {
      setError('Chyba připojení. Zkuste to znovu nebo zavolejte.');
    } finally {
      setLoading(false);
    }
  };

  const headings = [
    ['Co se chceš učit?', 'Vyber kurz, který tě zajímá. Můžeš to ještě měnit.'],
    ['Nech nám kontakt', 'Ozveme se do 24 hodin. Žádný spam.'],
  ];

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
            Děkujeme za přihlášku!
          </h2>
          <p className="mt-5 text-[17px] text-ink-500 leading-relaxed max-w-[38ch] mx-auto">
            Ozveme se vám do 24 hodin na váš telefon.
          </p>
          <button
            onClick={() => {
              setSent(false);
              setStep(0);
              setData({ course: 'B', name: '', phone: '', email: '', consent: false });
            }}
            className="mt-10 inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[15px] font-medium border border-ink-900/12 hover:bg-black/5 transition-colors"
          >
            ← Odeslat další přihlášku
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="prihlasit" className="py-20 md:py-32 relative" style={{ background: 'linear-gradient(180deg, var(--bg), #F1ECE3 100%)' }}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left rail */}
          <div className="md:col-span-4">
            <div className="text-[12px] uppercase tracking-[0.18em] text-ink-400 flex items-center gap-2">
              <span className="w-6 h-px bg-ink-300" />
              Průvodce přihláškou
            </div>
            <h2 className="font-display mt-4 text-[36px] md:text-[44px] leading-[1.05]">
              Dva kroky,<br /><span className="accent-italic">žádné papíry.</span>
            </h2>
            <p className="mt-5 text-[15px] text-ink-500 leading-relaxed max-w-[36ch]">
              Vyplníš za 60 sekund. Nezávazné, bez platby předem.
            </p>

            <ol className="mt-10 space-y-3" aria-label="Postup přihlášky">
              {headings.map(([h], i) => {
                const done = i < step, active = i === step;
                return (
                  <li key={i}>
                    <button
                      onClick={() => i <= step && setStep(i)}
                      aria-current={active ? 'step' : undefined}
                      className={`w-full flex items-center gap-3 text-left rounded-2xl p-3 transition-colors ${active ? 'bg-white shadow-soft border border-ink-900/6' : 'border border-transparent hover:bg-white/40'}`}
                    >
                      <span
                        className={`w-8 h-8 rounded-full grid place-items-center text-[12px] font-medium shrink-0 ${active ? 'text-snow' : done ? 'text-snow' : 'bg-ink-100 text-ink-500'}`}
                        style={(active || done) ? { background: 'var(--ink)' } : {}}
                        aria-hidden="true"
                      >
                        {done ? (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                        ) : (i + 1)}
                      </span>
                      <span className={`text-[14px] ${active ? 'text-ink-900' : done ? 'text-ink-700' : 'text-ink-400'}`}>
                        {h}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right card */}
          <div className="md:col-span-8">
            <div className="rounded-4xl bg-white shadow-pop border border-ink-900/5 p-6 md:p-10 relative overflow-hidden">
              {/* progress bar */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-ink-100" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={totalSteps}>
                <div className="h-full transition-all" style={{ width: `${((step + 1) / totalSteps) * 100}%`, background: 'var(--accent)' }} />
              </div>

              <div className="text-[12px] uppercase tracking-[0.16em] text-ink-400">
                Krok {step + 1} z {totalSteps}
              </div>
              <h3 className="font-display mt-2 text-[28px] md:text-[34px] leading-tight">{headings[step][0]}</h3>
              <p className="mt-2 text-[14.5px] text-ink-500 max-w-[44ch]">{headings[step][1]}</p>

              <div className="mt-8 min-h-[260px]">
                {step === 0 && <StepCourse value={data.course} onChange={(v) => set('course', v)} />}
                {step === 1 && <StepContact data={data} set={set} />}
              </div>

              {error && (
                <div role="alert" className="mt-5 px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-[13.5px] text-red-700">
                  {error}
                </div>
              )}

              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  onClick={prev}
                  disabled={step === 0}
                  className="text-[14px] px-5 py-3 rounded-2xl text-ink-600 hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  ← Zpět
                </button>

                {step < totalSteps - 1 ? (
                  <button
                    onClick={next}
                    className="cta-primary rounded-2xl px-6 py-3.5 text-[14.5px] font-medium inline-flex items-center gap-2 shadow-lift"
                  >
                    Pokračovat
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="rounded-2xl px-6 py-3.5 text-[14.5px] font-medium inline-flex items-center gap-2 shadow-lift text-white disabled:opacity-60 transition-opacity"
                    style={{ background: 'var(--accent-ink)' }}
                    aria-busy={loading}
                  >
                    {loading ? 'Odesílám…' : 'Odeslat přihlášku'}
                    {!loading && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    )}
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-[12.5px] text-ink-500">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              GDPR-friendly · uložíme jen co je potřeba · bez marketingových mailů
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Step components ─────────────────────────────────────────────────────────

function ChoiceTile({ active, onClick, badge, title, sub, price, big }) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-5 rounded-3xl border transition-all relative ${
        active
          ? 'border-transparent shadow-lift'
          : 'border-ink-900/8 bg-white hover:border-ink-900/20'
      }`}
      style={active ? { background: 'var(--ink)', color: '#fff' } : {}}
      aria-pressed={active}
    >
      <div className="flex items-baseline gap-3 mt-1">
        {badge && (
          <span className={`font-display text-[20px] ${active ? 'text-white/85' : 'text-ink-400'}`}>{badge}</span>
        )}
        <span className={`font-display ${big ? 'text-[22px]' : 'text-[19px]'} leading-tight`}>{title}</span>
      </div>
      {sub && <div className={`mt-2 text-[13px] leading-relaxed ${active ? 'text-white/65' : 'text-ink-500'}`}>{sub}</div>}
      {price && <div className={`mt-1.5 text-[12px] font-medium ${active ? 'text-white/70' : 'text-ink-400'}`}>{price}</div>}
      {active && (
        <span className="absolute top-4 right-4 w-6 h-6 rounded-full grid place-items-center" style={{ background: 'var(--accent)' }} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
        </span>
      )}
    </button>
  );
}

function StepCourse({ value, onChange }) {
  const opts = [
    { id: 'A',    t: 'Motocykl A / A1 / A2', s: 'od 15 / 16 / 18 let',           price: 'od 23 000 Kč · kondiční 1 500 Kč/h' },
    { id: 'B',    t: 'Osobní auto',           s: 'do 3 500 kg, od 18 let', big: true, price: 'od 20 000 Kč · kondiční 700 Kč/h' },
    { id: 'B+E',  t: 'B s přívěsem',          s: 'soupravy nad 750 kg',              price: 'od 8 000 Kč · kondiční 800 Kč/h' },
    { id: 'C',    t: 'Nákladní auto',          s: 'nad 3 500 kg, od 21 let',          price: 'od 25 000 Kč · kondiční 1 300 Kč/h' },
    { id: 'C+E',  t: 'Tahač / souprava',       s: 'pro držitele C',                   price: 'od 14 000 Kč · kondiční 1 500 Kč/h' },
    { id: 'T',    t: 'Traktor',                s: 'od 17 let',                         price: 'od 22 000 Kč · kondiční 2 000 Kč/h' },
    { id: 'KOND', t: 'Kondiční jízdy',         s: 'pro stávající řidiče',              price: '700 Kč/h (sk. B)' },
    { id: 'PREZ', t: 'Přezkoušení',            s: 'po 12 b. nebo zákazu řízení',       price: '6 000 Kč/skupinu' },
  ];
  return (
    <fieldset className="grid sm:grid-cols-2 gap-3 border-0 p-0 m-0">
      <legend className="sr-only">Vyberte typ kurzu</legend>
      {opts.map((o) => (
        <ChoiceTile
          key={o.id}
          active={value === o.id}
          onClick={() => onChange(o.id)}
          badge={o.id}
          title={o.t}
          sub={o.s}
          price={o.price}
          big={o.big}
        />
      ))}
    </fieldset>
  );
}

function StepContact({ data, set }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
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
      <Field
        id="contact-email"
        label="E-mail (nepovinné)"
        value={data.email}
        onChange={(v) => set('email', v)}
        placeholder="anna@example.com"
        type="email"
        autoComplete="email"
        full
      />
      <div className="sm:col-span-2 flex items-start gap-3 mt-1">
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
          Souhlasím se zpracováním osobních údajů pro účely komunikace o&nbsp;přihlášce.
          Žádné novinky, žádný marketing.{' '}
          <span className="text-ink-400" aria-hidden="true">*</span>
        </label>
      </div>
    </div>
  );
}

function Field({ id, label, value, onChange, placeholder, full, required, type = 'text', autoComplete }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
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
