import Link from "next/link";
import { Plate } from "@/components/logo";
import { nav, site } from "@/lib/site";

const odkazy = [...nav, { href: "/jak-na-ridicak", label: "Jak na řidičák" }, { href: "/reference", label: "Reference" }];

export function Footer() {
  return (
    <footer className="mt-8 bg-night pt-20 pb-8 text-[#e7e5de]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <Plate tone="coral" />
            <p className="font-display text-[20px]">
              Autoškola <span className="italic">Katka</span>
            </p>
          </div>
          <p className="mt-5 max-w-[40ch] text-[14.5px] leading-relaxed text-white/60">
            Autoškola v Chotějovicích u Bíliny. Učíme řídit od roku {site.since}. Trpělivě, v klidu, bez křiku.
          </p>
          <a
            href={site.phoneHref}
            className="tabular mt-7 inline-block btn-light rounded-2xl px-5 py-3.5 text-[15px] font-medium"
          >
            Zavolat {site.phone}
          </a>
        </div>

        <nav aria-label="Patička" className="md:col-span-4">
          <p className="text-[13px] font-medium text-white/50">Stránky</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[14px]">
            {odkazy.map((it) => (
              <li key={it.href}>
                <Link href={it.href} className="text-white/80 hover:text-white">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="text-[13px] font-medium text-white/50">Kontakt</p>
          <ul className="mt-5 space-y-2.5 text-[14px] text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                +420 {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.mapsHref} className="hover:text-white">
                {site.address.street}, {site.address.part}
                <br />
                {site.address.zip} {site.address.city}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-[12.5px] text-white/50 sm:px-6">
        <div>
          <p>© Autoškola Katka</p>
          <p className="mt-0.5 text-[11px] text-white/35">
            Provozovatel: {site.owner}, IČO {site.ico}
          </p>
        </div>
        <Link href="/zasady-soukromi" className="hover:text-white">
          Zásady soukromí
        </Link>
      </div>
    </footer>
  );
}
