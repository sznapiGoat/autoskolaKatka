import type { Metadata } from "next";
import Link from "next/link";
import { CallStrip, Container, GroupSign, PageHead, PriceTable } from "@/components/ui";
import { cenik, kc, najdi } from "@/lib/cenik";
import { JsonLd, offers } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Řidičák na motorku v Bílině, skupiny AM, A1, A2, A",
  description:
    "Řidičský průkaz na skútr a motorku v Bílině a Chotějovicích. Skupiny AM, A1, A2 a A za 23 000 Kč, doplňovací zkoušky A1 na A2 a A2 na A za 6 000 Kč, sdružený kurz A + B.",
  alternates: { canonical: "/ridicak-na-motorku" },
};

const moto = cenik.find((o) => o.id === "moto")!.kurzy;

const zebricek = [
  { code: "AM", vek: "15 let", co: "Moped a skútr do 50 cm³ a 45 km/h", id: "am" },
  { code: "A1", vek: "16 let", co: "Lehký motocykl do 125 cm³ a 11 kW", id: "a1" },
  { code: "A2", vek: "18 let", co: "Motocykl do 35 kW", id: "a2" },
  { code: "A", vek: "24 let", co: "Motocykl bez omezení. Ve 20 letech, pokud máte A2 aspoň dva roky.", id: "a" },
];

export default function Motorka() {
  return (
    <>
      <JsonLd data={offers("Řidičský průkaz na motocykl", moto)} />
      <PageHead
        crumb="Motorka"
        path="/ridicak-na-motorku"
        title={<>Řidičák na motorku a skútr</>}
        lead={
          <p>
            Čtyři skupiny podle věku a výkonu stroje. Každá stojí {kc(najdi("a").cena)}. Kdo už průkaz na menší
            motorku má, nemusí znovu do celého kurzu, stačí doplňovací zkouška za {kc(najdi("a2-a").cena)}.
          </p>
        }
      />

      {/* Žebříček skupin: na kterou motorku smíte v jakém věku */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="reveal max-w-2xl text-[30px] font-medium sm:text-[36px]">Na co smíte a od kolika let</h2>
          <ol className="reveal relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
            <div className="lane absolute top-10 right-0 left-0 hidden text-line md:block" aria-hidden="true" />
            {zebricek.map((z) => (
              <li key={z.code} className="relative">
                <GroupSign code={z.code} size="lg" />
                <p className="mt-6 font-display text-[28px] leading-none font-medium">od {z.vek}</p>
                <p className="mt-3 text-ink-soft">{z.co}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-[65ch] text-[15px] text-mute">
            Věkové hranice podle zákona o silničním provozu. Pokud si nejste jistí, na kterou skupinu máte
            nárok, zavolejte, projdeme to spolu.
          </p>
        </Container>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <h2 className="text-[30px] font-medium sm:text-[36px]">Ceník</h2>
            <p className="mt-4 text-ink-soft">
              Řidičák na motorku a na auto najednou vyjde v sdruženém kurzu A + B nebo A2 + B na{" "}
              {kc(najdi("ab").cena)}.
            </p>
            <Link
              href="/ridicak-skupina-b"
              className="mt-6 inline-block font-bold underline decoration-2 underline-offset-4 hover:text-sign"
            >
              Víc o řidičáku B
            </Link>
          </div>
          <div className="reveal md:col-span-8">
            <PriceTable rows={moto} caption="Ceník kurzů na motocykl" />
            <p className="mt-4 text-[14px] text-mute">
              Kondiční jízda na motorce stojí {kc(najdi("a").kondicni!)} za hodinu. Poplatek za zkoušku 700 Kč
              se platí zvlášť.
            </p>
          </div>
        </Container>
      </section>

      <CallStrip title="Chcete jezdit na motorce ještě letos?" />
    </>
  );
}
