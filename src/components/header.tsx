"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  // Menu si pamatuje stránku, na které se otevřelo, takže se po navigaci samo zavře.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      {/* Skleněná lišta. Mobilní menu leží mimo ni, aby ho backdrop-filter neuzavřel do lišty. */}
      <div className="glass mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 rounded-3xl pr-2 pl-4 sm:pl-5">
        <Link
          href="/"
          aria-label="Autoškola Katka, úvod"
          className="shrink-0"
          // Na úvodní stránce by odkaz nic neudělal, tak aspoň vyjede nahoru
          onClick={() => pathname === "/" && window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo />
        </Link>

        <nav aria-label="Hlavní" className="hidden xl:block">
          <ul className="flex items-center text-[13.5px]">
            {nav.map((it) => {
              const active = pathname === it.href;
              return (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-3 py-2 transition-colors ${
                      active ? "bg-ink/5 text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={site.phoneHref}
            className="btn tabular rounded-2xl px-4 py-2.5 text-[13.5px] font-medium whitespace-nowrap"
            aria-label={`Zavolat na ${site.phone}`}
          >
            <span className="hidden sm:inline">Zavolat </span>
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpenOn(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="menu"
            className="grid size-10 place-items-center rounded-2xl hover:bg-ink/5 xl:hidden"
          >
            <span className="sr-only">{open ? "Zavřít menu" : "Otevřít menu"}</span>
            {open ? <X size={20} aria-hidden="true" /> : <List size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu"
          aria-label="Hlavní"
          className="fixed inset-x-3 top-[5.25rem] bottom-3 overflow-y-auto rounded-3xl border border-line bg-paper p-2 shadow-pop xl:hidden"
        >
          <ul>
            {[{ href: "/", label: "Úvod" }, ...nav, { href: "/jak-na-ridicak", label: "Jak na řidičák" }, { href: "/reference", label: "Reference" }].map(
              (it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    aria-current={pathname === it.href ? "page" : undefined}
                    className="block rounded-2xl px-4 py-3.5 font-display text-[22px] hover:bg-ink/5 aria-[current=page]:bg-ink/5"
                  >
                    {it.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
