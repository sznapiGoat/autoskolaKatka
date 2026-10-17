import Link from "next/link";
import type { ReactNode } from "react";
import { kc, type Kurz } from "@/lib/cenik";
import { JsonLd, breadcrumbs } from "@/lib/seo";
import { site } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

// Čtverec skupiny ve stylu modré informativní značky: bílý rámeček odsazený od okraje.
export function GroupSign({ code, size = "md" }: { code: string; size?: "sm" | "md" | "lg" }) {
  const dim = {
    sm: "h-9 min-w-9 px-1.5 text-[15px]",
    md: "h-12 min-w-12 px-2 text-xl",
    lg: "h-20 min-w-20 px-3 text-4xl sm:h-24 sm:min-w-24 sm:text-5xl",
  }[size];
  return (
    <span
      className={`inline-grid place-items-center rounded-[var(--radius-plate)] bg-sign p-[3px] font-display font-black text-white ${dim}`}
    >
      <span className="grid h-full w-full place-items-center rounded-[3px] border-[1.5px] border-white px-1 leading-none">
        <span className="translate-y-[0.06em] whitespace-nowrap">{code}</span>
      </span>
    </span>
  );
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
    <section className="border-b border-line">
      <JsonLd data={breadcrumbs([{ name: crumb, path }])} />
      <Container className="grid gap-10 pt-10 pb-14 md:grid-cols-12 md:pt-14 md:pb-20">
        <div className="md:col-span-8">
          <nav aria-label="Drobečková navigace" className="text-[14px] text-mute">
            <Link href="/" className="hover:text-sign hover:underline">
              Úvod
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{crumb}</span>
          </nav>
          <h1 className="mt-6 text-[40px] font-black sm:text-[56px] lg:text-[68px]">{title}</h1>
          <div className="mt-6 max-w-[60ch] text-[18px] text-ink-soft sm:text-[19px]">{lead}</div>
        </div>
        {aside && <div className="md:col-span-4 md:self-end">{aside}</div>}
      </Container>
    </section>
  );
}

export function PriceTable({ rows, caption }: { rows: Kurz[]; caption?: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b-2 border-ink font-mono text-[12px] tracking-wide text-mute uppercase">
            <th scope="col" className="py-3 pr-4 font-medium">
              Skupina
            </th>
            <th scope="col" className="py-3 pr-4 font-medium">
              Kurz
            </th>
            <th scope="col" className="py-3 pr-4 text-right font-medium">
              Cena kurzu
            </th>
            <th scope="col" className="py-3 text-right font-medium">
              Kondiční jízda
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((k) => (
            <tr key={k.id} className="border-b border-line align-top">
              <th scope="row" className="py-4 pr-4">
                <GroupSign code={k.skupina} size="sm" />
              </th>
              <td className="py-4 pr-4">
                <span className="font-bold">{k.nazev}</span>
                {k.pozn && <span className="block text-[14px] text-mute">{k.pozn}</span>}
              </td>
              <td className="tabular py-4 pr-4 text-right font-display text-xl font-extrabold whitespace-nowrap">
                {kc(k.cena)}
              </td>
              <td className="tabular py-4 text-right whitespace-nowrap text-ink-soft">
                {k.kondicni ? `${kc(k.kondicni)} / h` : "není"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t-2 border-ink">
      {items.map((it) => (
        <details key={it.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-[21px] font-extrabold [&::-webkit-details-marker]:hidden">
            {it.q}
            <span
              aria-hidden="true"
              className="mt-1 grid size-7 shrink-0 place-items-center border border-ink text-lg leading-none transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-[65ch] pb-6 text-ink-soft">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

// Závěr stránky. Hlavní akce je telefon, formulář je náhradní cesta.
export function CallStrip({ title = "Domluvíme se po telefonu" }: { title?: string }) {
  return (
    <section className="bg-sign text-white">
      <Container className="grid items-end gap-8 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <h2 className="text-[34px] font-black sm:text-[46px]">{title}</h2>
          <p className="mt-4 max-w-[48ch] text-white/85">
            Řeknete, o jaký řidičák stojíte, a domluvíme termín i placení. Kdo nechce volat, nechá číslo
            ve formuláři a ozvu se sama.
          </p>
        </div>
        <div className="md:col-span-5 md:text-right">
          <a
            href={site.phoneHref}
            className="tabular block font-display text-[44px] leading-none font-black hover:underline sm:text-[60px]"
          >
            {site.phone}
          </a>
          <Link
            href="/kontakt#formular"
            className="mt-4 inline-block text-white/85 underline underline-offset-4 hover:text-white"
          >
            Nechat číslo ve formuláři
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function Section({
  title,
  intro,
  children,
  id,
  className = "",
}: {
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        <div className="reveal max-w-3xl">
          <h2 className="text-[32px] font-black sm:text-[42px]">{title}</h2>
          {intro && <div className="mt-4 text-ink-soft">{intro}</div>}
        </div>
        <div className="reveal mt-10">{children}</div>
      </Container>
    </section>
  );
}
