"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const kurzy = [
  "Nevím, poraďte mi",
  "Řidičák B (osobní auto)",
  "Motorka (AM, A1, A2, A)",
  "B+E nebo B96 (přívěs)",
  "Nákladní auto (C, C+E)",
  "Traktor (T)",
  "Kondiční jízdy",
  "Přezkoušení (12 bodů nebo zákaz)",
];

type Stav = "ceka" | "odesila" | "odeslano" | "chyba";

export function CallbackForm() {
  const [stav, setStav] = useState<Stav>("ceka");
  const [chyba, setChyba] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStav("odesila");
    setChyba("");
    try {
      const res = await fetch(site.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          jmeno: fd.get("jmeno"),
          telefon: fd.get("telefon"),
          kurz: fd.get("kurz"),
        }),
      });
      if (!res.ok) throw new Error();
      setStav("odeslano");
    } catch {
      setStav("chyba");
      setChyba(`Odeslání se nepovedlo. Zkuste to prosím znovu, nebo zavolejte na ${site.phone}.`);
    }
  }

  if (stav === "odeslano") {
    return (
      <div role="status" className="border-t border-line pt-8">
        <p className="font-display text-[30px] font-medium">Díky, ozvu se.</p>
        <p className="mt-3 text-ink-soft">
          Zavolám zpátky na číslo, které jste nechali, obvykle do druhého dne. Nechce se vám čekat?{" "}
          <a href={site.phoneHref} className="font-bold text-sign underline underline-offset-4">
            {site.phone}
          </a>
        </p>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-2xl border border-line bg-sheet px-4 py-3 text-[17px] outline-none transition-colors focus:border-sign";

  return (
    <form onSubmit={onSubmit} className="space-y-6 border-t border-line pt-8" noValidate={false}>
      <div>
        <label htmlFor="jmeno" className="font-bold">
          Jméno
        </label>
        <input id="jmeno" name="jmeno" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="telefon" className="font-bold">
          Telefon
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+ ]{9,}"
          className={`${field} tabular`}
        />
      </div>
      <div>
        <label htmlFor="kurz" className="font-bold">
          O co máte zájem
        </label>
        <select id="kurz" name="kurz" className={field} defaultValue={kurzy[0]}>
          {kurzy.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </div>
      <div className="flex gap-3">
        <input id="souhlas" name="souhlas" type="checkbox" required className="mt-1.5 size-5 shrink-0 accent-sign" />
        <label htmlFor="souhlas" className="text-[15px] text-ink-soft">
          Souhlasím se zpracováním jména a telefonu, abyste mi mohli zavolat zpět.{" "}
          <Link href="/zasady-soukromi" className="underline underline-offset-4">
            Zásady zpracování
          </Link>
        </label>
      </div>
      {chyba && (
        <p role="alert" className="font-bold text-sign">
          {chyba}
        </p>
      )}
      <button
        type="submit"
        disabled={stav === "odesila"}
        className="btn rounded-2xl px-6 py-3.5 text-[15px] font-medium shadow-lift disabled:opacity-60"
      >
        {stav === "odesila" ? "Odesílám" : "Zavolejte mi"}
      </button>
    </form>
  );
}
