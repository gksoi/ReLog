import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const design = resolve(root, 'design');
const read = name => readFileSync(resolve(design, name), 'utf8');
const summary = read('POVZETEK-POGOVORA-2026-11-17.md');
const market = read('MARKET-RESEARCH-DEEP-2026-11-18.md');
const technology = read('RAZISKAVA-TEHNOLOGIJE-HIBRIDNI-AI-IN-MATEMATICNO-JEDRO-2026-11-18.md');
const acquisition = read('NACRT-PRIDOBIVANJA-STRANK-90-DNI-IN-MARKETINSKI-PRORACUN-2026-11-18.md');
const notes = [
  'PRODUKT IN KONTEKST\n\nStatus: spletni prototip in simulacijski laboratorij, ne produkcijska aplikacija. Uredniška fotografija je ustvarjena ilustracija, ne posnetek dejanskega dogodka ali stranke.\n\n' + summary,
  'UPORABNIŠKE POTREBE IN HITRO BELEŽENJE\n\n' + market.slice(market.indexOf('## 5.'), market.indexOf('## 7.')) + '\n\nViri z neposrednimi povezavami so v opombi na četrtem slajdu in v vidnih povezavah tega slajda. Cilj 1-3 dotikov je predlog za pogoste vnose, ne potrjena meritev. Manj kot 8 dotikov je uporabnikova zahteva za dostop do podprtih načinov beleženja. Widgeti še niso implementirani.',
  'TEHNIČNI VZORCI IN CILJNA ARHITEKTURA\n\n' + technology,
  'KONKURENCA, ZGODOVINA IN STARTUP PRESOJA\n\n' + market,
  'POSLOVNI MODEL IN PREDPOSTAVKE\n\nCenovni hipotezi 4,99 EUR in 7,99 EUR sta namenjeni prihodnjemu primerjalnemu testu. Nista potrjen cenik. Starejši pogovor uporablja USD; na slajdu so EUR scenariji in ne pretvorba po tečaju.\n\n10.000 × 4,99 EUR = 49.900 EUR bruto mesečnih plačil. To ni napoved ali dobiček. Prispevek 3 EUR/mesec je ilustrativen. 6 plačanih mesecev × 3 EUR = 18 EUR; odhodi in neplačila znižajo dovoljeni CAC. Srednji medijski CAC = 1 / (0,40 × 0,03) = 83,33 EUR. Zelo dober = 0,60 / (0,50 × 0,08) = 15 EUR. Produkcija oglasov ni v teh dveh CAC vrednostih.\n\nRevenueCat: https://www.revenuecat.com/state-of-subscription-apps (razdelek Day 35 download-to-paid conversion by store and category). Vzorec njihovih strank s pragovi prihodkov/namestitev; ciljna podatkovna letnica večinoma 2025. To niso meritve ReLoga.\n\n' + summary.slice(summary.indexOf('## 8.'), summary.indexOf('## 9.')),
  'NAČRT PRIDOBIVANJA STRANK IN MEJE IZVEDBE\n\n' + acquisition + '\n\nSTATUS IN OMEJITVE\nTrenutno delujeta spletni UI prototip in ločen matematični laboratorij. Nista dokaz uporabniške retencije, prihodkov ali produkt-market fita. Modeli, kalorijski koeficienti, domenski viri, jezikovna podpora, offline obseg in produkcijska hramba ostajajo predmet preverjanja. Strava pogoji omejujejo predvideno AI in meddomensko uporabo; integracija ni potrjena. Podatkovne licence, vključno z Open Food Facts, je treba preveriti pred integracijo. Uporabnikov račun pri ponudniku AI ni splošno potrjena pot za komercialno uporabo; izhodišče je ReLogov profil in lasten nadzorovan backend.',
  'POSLOVNI MODEL\n\nDopolnilo 18. novembra 2026. Cenovni hipotezi 4,99 in 7,99 EUR nista potrjen cenik. Predlagana mesečna naročnina, paket in obseg AI niso potrjeni. Prispevek 3 EUR/mesec je ločena ilustrativna predpostavka. Šest dejansko plačanih mesecev pomeni 18 EUR pred upoštevanjem osipa. Stroški vključujejo razvoj, podporo, storitve AI/govora, hrambo, distribucijo in trgovino. Pilotni okvir 1.500 EUR ne vključuje razvoja in lastnega časa.\n\n' + acquisition,
  'LEAN CANVAS\n\nDevet polj je delovni povzetek dosedanjega produkta in raziskav, ne potrjen poslovni model. Zgodnji uporabniki so hipoteza. Ni potrjenih prihodkov, partnerstev ali težko posnemljive prednosti. AI in izvorni iPhone widgeti še niso implementirani.\n\n' + summary + '\n\n' + market

];
if(notes.length!==8||!Array.from(notes).every(note=>typeof note==='string'&&note.length>0))throw Error('Expected eight complete source notes');
writeFileSync(resolve(root, 'work/relog-pitch/notes.json'), JSON.stringify(notes));
console.log('Prepared eight source and assumption notes.');
