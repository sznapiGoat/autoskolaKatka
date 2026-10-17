// Ceník platný od 1. 3. 2026, převzatý beze změny z dosavadního webu.
// Ceny v Kč, autoškola není plátcem DPH. Poplatek za závěrečnou zkoušku není v ceně kurzu.

export type Kurz = {
  id: string;
  skupina: string;
  nazev: string;
  cena: number;
  kondicni?: number;
  pozn?: string;
};

export type Oddil = {
  id: string;
  nazev: string;
  stranka: string;
  kurzy: Kurz[];
};

export const cenik: Oddil[] = [
  {
    id: "osobni",
    nazev: "Osobní automobil",
    stranka: "/ridicak-skupina-b",
    kurzy: [
      { id: "b", skupina: "B", nazev: "Osobní automobil", cena: 21000, kondicni: 700 },
      {
        id: "b-rychlo",
        skupina: "B",
        nazev: "Rychlokurz za 6 týdnů",
        cena: 27000,
        kondicni: 700,
        pozn: "o 6 000 Kč víc než standardní kurz B",
      },
      { id: "b78", skupina: "B78", nazev: "Automatická převodovka", cena: 23000, kondicni: 800 },
      { id: "b78-b", skupina: "B78 → B", nazev: "Doplňovací zkouška", cena: 6000, kondicni: 600 },
      { id: "be", skupina: "B+E", nazev: "Osobní auto s přívěsem", cena: 8000, kondicni: 800 },
      { id: "b96", skupina: "B96", nazev: "Doplňovací zkouška", cena: 6000, kondicni: 800 },
      { id: "a2b", skupina: "A2 + B", nazev: "Sdružený kurz", cena: 40000 },
      { id: "ab", skupina: "A + B", nazev: "Sdružený kurz", cena: 40000 },
    ],
  },
  {
    id: "moto",
    nazev: "Motocykl",
    stranka: "/ridicak-na-motorku",
    kurzy: [
      { id: "am", skupina: "AM", nazev: "Moped a skútr", cena: 23000, kondicni: 1500 },
      { id: "a1", skupina: "A1", nazev: "Motocykl do 125 cm³", cena: 23000, kondicni: 1500 },
      { id: "a2", skupina: "A2", nazev: "Motocykl do 35 kW", cena: 23000, kondicni: 1500 },
      { id: "a", skupina: "A", nazev: "Motocykl bez omezení", cena: 23000, kondicni: 1500 },
      { id: "a1-a2", skupina: "A1 → A2", nazev: "Doplňovací zkouška", cena: 6000, kondicni: 1500 },
      { id: "a2-a", skupina: "A2 → A", nazev: "Doplňovací zkouška", cena: 6000, kondicni: 1500 },
    ],
  },
  {
    id: "nakladni",
    nazev: "Nákladní automobil a traktor",
    stranka: "/nakladni-auto-a-traktor",
    kurzy: [
      { id: "c", skupina: "C", nazev: "Nákladní automobil", cena: 25000, kondicni: 1300 },
      { id: "ce", skupina: "C+E", nazev: "Nákladní auto s přívěsem", cena: 14000, kondicni: 1500 },
      { id: "t-b", skupina: "T", nazev: "Traktor, rozšíření ze skupiny B", cena: 22000, kondicni: 2000 },
      { id: "t", skupina: "T", nazev: "Traktor bez skupiny B", cena: 38000, kondicni: 2000 },
    ],
  },
];

export const poplatkyZkousejicimu: [string, string][] = [
  ["Zkouška z odborné způsobilosti", "700 Kč"],
  ["Opravná zkouška z pravidel (test)", "100 Kč"],
  ["Opravná zkouška z údržby vozidla (C, C+E)", "200 Kč"],
  ["Opravná zkouška z praktické jízdy", "400 Kč"],
  ["Opravná souhrnná závěrečná zkouška", "600 Kč"],
];

export const poplatkyAutoskole: [string, string][] = [
  ["Převod z jiné autoškoly, skupiny B, B+E, B78, B96", "3 000 Kč"],
  ["Převod z jiné autoškoly, ostatní skupiny", "5 000 Kč za skupinu"],
  ["Přezkoušení po zákazu řízení", "6 000 Kč za skupinu"],
  ["Storno kurzu nebo převod do jiné autoškoly", "3 000 Kč"],
  ["Neomluvená hodina (omluva méně než 1 h předem)", "500 Kč"],
  ["Výuka a výcvik v cizím jazyce", "podle náročnosti, domluvou"],
  ["Dárkový poukaz", "platí 365 dní od zakoupení"],
];

export const kc = (n: number) => `${n.toLocaleString("cs-CZ").replace(/\s/g, " ")} Kč`;

export const najdi = (id: string) => {
  for (const o of cenik) {
    const k = o.kurzy.find((k) => k.id === id);
    if (k) return k;
  }
  throw new Error(`Kurz ${id} v ceníku není`);
};
