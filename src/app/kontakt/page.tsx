import type { Metadata } from "next";
import { CallbackForm } from "@/components/callback-form";
import { Container, PageHead } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt, učebna Chotějovice u Bíliny",
  description:
    "Autoškola Katka, Smetanova 18, Chotějovice, 418 04 Světec. Telefon 724 974 771, e-mail info@autoskolakatka.cz. Zavolejte, nebo nechte číslo a ozvu se.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      <PageHead
        crumb="Kontakt"
        path="/kontakt"
        title={<>Kontakt a <span className="accent">učebna</span></>}
        lead={
          <p>
            Nejrychlejší je zavolat. Pevné úřední hodiny nemám, schůzku domluvíme po telefonu podle vás. Když
            zrovna učím a nezvednu to, ozvu se zpátky.
          </p>
        }
      />

      <Container className="grid gap-16 py-16 md:grid-cols-12 md:py-24">
        <div className="space-y-12 md:col-span-6">
          <div>
            <h2 className="text-[13px] font-medium text-mute">Telefon</h2>
            <a
              href={site.phoneHref}
              className="tabular mt-2 block font-display text-[44px] leading-none font-medium hover:text-sign sm:text-[56px]"
            >
              {site.phone}
            </a>
            <p className="mt-3 text-ink-soft">
              nebo napište na{" "}
              <a href={site.whatsapp} className="font-bold underline underline-offset-4 hover:text-sign">
                WhatsApp
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-[13px] font-medium text-mute">E-mail</h2>
            <a href={`mailto:${site.email}`} className="mt-2 block text-[22px] font-bold hover:text-sign hover:underline">
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="text-[13px] font-medium text-mute">Učebna</h2>
            <address className="mt-2 text-[22px] leading-snug font-bold not-italic">
              {site.address.street}
              <br />
              {site.address.part}
              <br />
              {site.address.zip} {site.address.city}
            </address>
            <p className="mt-3 text-ink-soft">Chotějovice patří k obci Světec a jsou kousek od Bíliny.</p>
            <a href={site.mapsHref} className="mt-3 inline-block font-bold underline underline-offset-4 hover:text-sign">
              Otevřít v Google mapách
            </a>
          </div>

          <div className="border-t border-line pt-6 text-[15px] text-mute">
            <p>
              Provozovatel: {site.owner}, IČO {site.ico}
            </p>
          </div>
        </div>

        <div id="formular" className="scroll-mt-24 md:col-span-5 md:col-start-8">
          <h2 className="text-[30px] font-medium sm:text-[36px]">Nechte číslo, zavolám vám</h2>
          <p className="mt-3 mb-8 text-ink-soft">Stačí jméno a telefon. Nic dalšího vyplňovat nemusíte.</p>
          <CallbackForm />
        </div>
      </Container>
    </>
  );
}
