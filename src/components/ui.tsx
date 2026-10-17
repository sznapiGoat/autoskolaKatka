import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { kc, type Kurz } from "@/lib/cenik";
import { JsonLd, breadcrumbs } from "@/lib/seo";
import { site } from "@/lib/site";
import nubira from "../../public/foto/nubira.jpg";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

// Štítek skupiny řidičského oprávnění, jako dlaždice v hero původního webu.
export function GroupSign({ code, size = "md" }: { code: string; size?: "sm" | "md" | "lg" }) {
  const dim = {
    sm: "h-9 min-w-9 rounded-xl px-2 text-[15px]",
    md: "h-12 min-w-12 rounded-2xl px-3 text-xl",
    lg: "h-20 min-w-20 rounded-3xl px-4 text-4xl shadow-lift sm:h-24 sm:min-w-24 sm:text-5xl",
  }[size];
  return (
    <span className={`inline-grid place-items-center bg-ink font-display leading-none whitespace-nowrap text-white ${dim}`}>
      {code}
    </span>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-ink/5 bg-sheet shadow-soft ${className}`}>{children}</div>;
}

export function PageHead({
  crumb,
  path,
  title,
  lead,
  aside,
}: {
  crumb: string;
  path: string;
  title: ReactNode;
  lead: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative -mt-[4.75rem] overflow-hidden pt-[4.75rem]">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <JsonLd data={breadcrumbs([{ name: crumb, path }])} />
      <Container className="relative grid gap-10 pt-12 pb-14 md:grid-cols-12 md:pt-20 md:pb-20">
        <div className="rise md:col-span-8">
          <nav aria-label="Drobečková navigace" className="label">
            <Link href="/" className="hover:text-ink">
              Úvod
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink-soft">
              {crumb}
            </span>
          </nav>
          <h1 className="mt-5 text-[42px] sm:text-[58px] lg:text-[72px]">{title}</h1>
          <div className="mt-6 max-w-[56ch] text-[17px] text-ink-soft sm:text-[18px]">{lead}</div>
        </div>
        {aside && <div className="rise md:col-span-4 md:self-end">{aside}</div>}
      </Container>
    </section>
  );
}

export function PriceTable({ rows, caption }: { rows: Kurz[]; caption?: string }) {
  return (
    <Card className="p-2 sm:p-4">
      {/* Mobil: řádky pod sebou, aby se cena nikdy neořízla */}
      <ul className="divide-y divide-line-soft sm:hidden" aria-label={caption}>
        {rows.map((k) => (
          <li key={k.id} className="flex items-start gap-3 px-2 py-4">
            <GroupSign code={k.skupina} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="font-medium">{k.nazev}</p>
              {k.pozn && <p className="text-[13px] text-mute">{k.pozn}</p>}
              <p className="mt-1 text-[13px] text-ink-soft">
                {k.kondicni ? `kondiční jízda ${kc(k.kondicni)} / h` : "bez kondičních jízd"}
              </p>
            </div>
            <p className="tabular shrink-0 font-display text-[20px] whitespace-nowrap">{kc(k.cena)}</p>
          </li>
        ))}
      </ul>

      <table className="hidden w-full border-collapse text-left sm:table">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-line text-[11px] tracking-[0.14em] text-mute uppercase">
            <th scope="col" className="px-3 py-3 font-medium">
              Skupina
            </th>
            <th scope="col" className="px-3 py-3 font-medium">
              Kurz
            </th>
            <th scope="col" className="px-3 py-3 text-right font-medium">
              Cena kurzu
            </th>
            <th scope="col" className="px-3 py-3 text-right font-medium">
              Kondiční jízda
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((k) => (
            <tr key={k.id} className="border-b border-line-soft align-middle last:border-0">
              <th scope="row" className="px-3 py-4">
                <GroupSign code={k.skupina} size="sm" />
              </th>
              <td className="px-3 py-4">
                <span className="font-medium">{k.nazev}</span>
                {k.pozn && <span className="block text-[13px] text-mute">{k.pozn}</span>}
              </td>
              <td className="tabular px-3 py-4 text-right font-display text-[22px] whitespace-nowrap">
                {kc(k.cena)}
              </td>
              <td className="tabular px-3 py-4 text-right text-[14px] whitespace-nowrap text-ink-soft">
                {k.kondicni ? `${kc(k.kondicni)} / h` : "není"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.q}>
          <details className="group rounded-3xl border border-ink/5 bg-sheet/60 transition-colors open:bg-sheet open:shadow-soft">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-[19px] md:p-6 md:text-[20px] [&::-webkit-details-marker]:hidden">
              {it.q}
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-sheet font-sans text-lg leading-none transition-transform group-open:rotate-45 group-open:bg-ink group-open:text-white"
              >
                +
              </span>
            </summary>
            <p className="max-w-[60ch] px-5 pb-6 text-ink-soft md:px-6">{it.a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

// Závěr stránky ve stylu původního „CallBand“: tmavá karta s fotkou auta.
export function CallStrip({ title }: { title?: ReactNode }) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="reveal grid overflow-hidden rounded-5xl bg-ink shadow-pop md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center p-8 text-white md:order-1 md:p-12">
            <p className="label text-white/45">Nevíte, co vybrat?</p>
            <h2 className="mt-4 text-[32px] md:text-[44px]">
              {title ?? (
                <>
                  Zavolejte a <span className="italic text-signal">poradíme si.</span>
                </>
              )}
            </h2>
            <p className="mt-4 max-w-[42ch] text-[15px] text-white/65">
              Řekněte, co potřebujete. Vybereme správnou skupinu, řekneme cenu i nejbližší termín. Nezávazně a v
              klidu, po telefonu.
            </p>
            <a
              href={site.phoneHref}
              className="tabular mt-8 self-start rounded-2xl bg-paper px-6 py-4 text-[16px] font-medium text-ink shadow-lift transition-colors hover:bg-white"
            >
              Zavolat {site.phone}
            </a>
            <p className="mt-4 text-[13px] text-white/50">
              Nezvednu, protože zrovna učím? Zavolám zpět. Nebo{" "}
              <a href={site.whatsapp} className="text-white/80 underline underline-offset-2 hover:text-white">
                napište na WhatsApp
              </a>{" "}
              či{" "}
              <Link href="/kontakt#formular" className="text-white/80 underline underline-offset-2 hover:text-white">
                nechte číslo
              </Link>
              .
            </p>
          </div>
          <div className="relative order-1 min-h-[240px] md:order-2 md:min-h-[380px]">
            <Image
              src={nubira}
              alt="Výcvikové auto Autoškoly Katka s telefonním číslem na dveřích"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SectionHead({ label, title, intro }: { label: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="reveal max-w-3xl">
      <p className="label">{label}</p>
      <h2 className="mt-4 text-[34px] md:text-[50px]">{title}</h2>
      {intro && <div className="mt-4 text-ink-soft">{intro}</div>}
    </div>
  );
}
