import Link from "next/link";
import { Plate } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <div className="lane text-white/20" aria-hidden="true" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-12 pb-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Plate className="size-11" />
            <p className="font-display text-2xl font-extrabold text-white">Autoškola Katka</p>
          </div>
          <a
            href={site.phoneHref}
            className="tabular mt-8 block font-display text-4xl font-extrabold text-white hover:underline sm:text-5xl"
          >
            {site.phone}
          </a>
          <p className="mt-3 max-w-sm text-[15px]">
            Volejte kdykoli. Když zrovna učím a nezvednu to, zavolám zpátky.
          </p>
          <p className="mt-6 text-[15px]">
            <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-white">
              {site.email}
            </a>
            <span className="mx-2 text-white/40">/</span>
            <a href={site.whatsapp} className="underline underline-offset-4 hover:text-white">
              WhatsApp
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-display text-sm font-extrabold tracking-wide text-white">Učebna</p>
          <address className="mt-3 text-[15px] not-italic">
            {site.address.street}
            <br />
            {site.address.part}
            <br />
            {site.address.zip} {site.address.city}
          </address>
          <a href={site.mapsHref} className="mt-3 inline-block text-[15px] underline underline-offset-4 hover:text-white">
            Otevřít v mapě
          </a>
        </div>

        <nav aria-label="Patička" className="md:col-span-4">
          <p className="font-display text-sm font-extrabold tracking-wide text-white">Stránky</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-[15px]">
            {[...nav, { href: "/jak-na-ridicak", label: "Jak na řidičák" }, { href: "/reference", label: "Reference" }].map(
              (it) => (
                <li key={it.href}>
                  <Link href={it.href} className="hover:text-white hover:underline">
                    {it.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-4 py-6 text-[13px] text-white/55 sm:px-6">
          <p>
            {site.owner}, IČO {site.ico}. Autoškola od roku {site.since}.
          </p>
          <Link href="/zasady-soukromi" className="hover:text-white">
            Zásady zpracování osobních údajů
          </Link>
        </div>
      </div>
    </footer>
  );
}
