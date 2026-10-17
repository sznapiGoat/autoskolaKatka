// Hodnocení z katalogu vsechny-autoskoly.cz (stav 10/2026).
// Text je původní, upravené jsou jen mezery za interpunkcí a zjevné překlepy.
// Celý seznam včetně dvou kritických hodnocení je na odkazu site.reviewsHref.

export type Hodnoceni = {
  jmeno: string;
  datum: string; // ISO
  text: string;
};

export const reference: Hodnoceni[] = [
  {
    jmeno: "Aneta",
    datum: "2020-08-06",
    text: "S paní Katkou jsem se cítila velmi dobře od začátku mého výcviku až do konce. Naučila mě a hlavně vysvětlila všechno k tomu, abych úspěšně absolvovala zkoušku. Kdyby bylo možné dát deset hvězdiček, tak dám deset!",
  },
  {
    jmeno: "Eliška",
    datum: "2019-04-14",
    text: "Skvělá autoškola, Katka je velice trpělivá a vše dokáže moc dobře vysvětlit. Výborný přístup i co se časové organizace týče. Mohu jen doporučit.",
  },
  {
    jmeno: "Lenka Cihlářová",
    datum: "2019-01-06",
    text: "Autoškola je výborná, mají dobrý přístup k žákům. Prostě a jednoduše nejlepší volba.",
  },
  {
    jmeno: "Miloš Kružík",
    datum: "2018-06-12",
    text: "Autoškolu Katka mohu všem doporučit, jak přístup k žákům, tak veškerá ostatní konverzace ohledně jízd. Profesionální přístup a ceny vyhovující.",
  },
  {
    jmeno: "Tomáš Šály",
    datum: "2015-04-24",
    text: "Fajn instruktorka, která všechno vysvětlí i tomu začátečníkovi, který sedí za volantem poprvé. Tuto autoškolu můžu jen doporučit, protože své žáky připraví do toho dnešního chaosu na silnicích.",
  },
  {
    jmeno: "Nikola",
    datum: "2014-08-02",
    text: "Určitě doporučuji všem, kdo chtějí řídit auto v pohodě, v klidu a bez stresu. Moc děkuji.",
  },
  {
    jmeno: "Michal Pohl",
    datum: "2014-05-13",
    text: "Za prvé přístup k žákům, jak osobně, tak telefonicky. Za druhé, když řídíte poprvé, nejste nervózní a nestresuje vás nikdo. Vzhledem k ceně určitě doporučuju.",
  },
  {
    jmeno: "Evča",
    datum: "2013-01-26",
    text: "Ráda bych touto cestou poděkovala paní Kateřině za ohromnou trpělivost, vstřícnost, zábavu, podporu a snahu pořádně připravit dotyčného na závěrečné zkoušky. Takže začátečníci, vzhůru ke Kátě!",
  },
  {
    jmeno: "Zdeněk Štěpánek",
    datum: "2012-12-07",
    text: "Kátka je přátelská, usměvavá, trpělivá a všechno, čím si nebudete jisti, vám ukáže, popřípadě poradí. Všem vřele doporučuji!",
  },
  {
    jmeno: "Renáta Trávníčková",
    datum: "2012-09-07",
    text: "Pani Katka je úžasná, komunikatívna, vždy s úsmevom, zbaví vás strachu z jazdy, naozaj naučí a je profesionálne na veľmi vysokej úrovni.",
  },
  {
    jmeno: "Jaroslava Jírová",
    datum: "2012-05-22",
    text: "Velmi profesionální přístup, pohoda, klid a celkové uvolnění. Vše paní učitelka ochotně a ráda vysvětlí, i s humorem. Doporučuji všem, co se bojí. Tady se bát nebudete.",
  },
  {
    jmeno: "Blažej Králik",
    datum: "2012-05-20",
    text: "Celkový přístup k žákům je absolutně pohodový. I ten největší nervák se zbaví stresu.",
  },
  {
    jmeno: "Krista Charvátová a syn Vašek",
    datum: "2011-07-02",
    text: "Já i můj syn máme výborné zkušenosti. Všichni, kteří potřebují trpělivou a hodnou paní učitelku s velkým rozhledem a zkušenostmi, by měli volit tuto autoškolu. Byla nám velkou oporou po celou dobu výuky.",
  },
  {
    jmeno: "Petra",
    datum: "2011-01-15",
    text: "Autoškola Katka je ta nejlepší, kterou jsem si mohla vybrat, a že jsem vybírala dlouho, nejen v Bílině. Paní instruktorka je milá, trpělivá, vše vysvětlí, je s ní zábava, takže na výuku se můžete opravdu těšit.",
  },
  {
    jmeno: "Adéla Wawriczová",
    datum: "2010-09-15",
    text: "Paní učitelka je trpělivá, příjemná, vtipná, moc ráda všechno vysvětlí a skvěle připraví na zkoušky. Doporučuji!",
  },
  {
    jmeno: "Evka z Bíliny",
    datum: "2010-06-25",
    text: "Paní učitelka je vážně super, vše naučí a hlavně má dost trpělivosti na každého žáka. Jezdila jsem u ní a teď jsem řidička i já.",
  },
];

export const rok = (iso: string) => iso.slice(0, 4);
