"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  // Menu si pamatuje stránku, na které se otevřelo, takže se po navigaci samo zavře.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (v: boolean | ((prev: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(open) : v;
    setOpenOn(next ? pathname : null);
  };

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
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" aria-label="Autoškola Katka, úvod" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Hlavní" className="hidden xl:block">
          <ul className="flex items-center gap-1 text-[15px]">
            {nav.map((it) => {
              const active = pathname === it.href;
              return (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-2 transition-colors ${
                      active ? "text-sign underline decoration-2 underline-offset-[10px]" : "text-ink-soft hover:text-sign"
                    }`}
                  >
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="tabular bg-sign px-3 py-2 font-display text-[15px] whitespace-nowrap sm:text-[16px] font-extrabold text-white transition-colors hover:bg-sign-deep sm:px-4"
          >
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu"
            className="grid size-10 place-items-center xl:hidden"
          >
            <span className="sr-only">{open ? "Zavřít menu" : "Otevřít menu"}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu"
          aria-label="Hlavní"
          className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-paper xl:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <li>
              <Link href="/" className="block border-b border-line-soft py-4 font-display text-2xl font-extrabold">
                Úvod
              </Link>
            </li>
            {nav.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  aria-current={pathname === it.href ? "page" : undefined}
                  className="block border-b border-line-soft py-4 font-display text-2xl font-extrabold aria-[current=page]:text-sign"
                >
                  {it.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/jak-na-ridicak" className="block border-b border-line-soft py-4 font-display text-2xl font-extrabold">
                Jak na řidičák
              </Link>
            </li>
            <li>
              <Link href="/reference" className="block py-4 font-display text-2xl font-extrabold">
                Reference
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
