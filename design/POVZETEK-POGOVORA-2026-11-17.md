# ReLog — povzetek produktnega in tehničnega pogovora

Datum: 17. november 2026. Povzetek pogovora 16.–17. novembra 2026.

**Status:** raziskovanje in načrtovanje. Spodnji predlogi niso vsi potrjene zahteve in niso implementirani. Ponudniki, cene in pogoji so časovno občutljivi; pred izvedbo jih ponovno preverimo. Stroški so računski scenariji, ne meritve delujoče aplikacije.

## 1. Bistvo produkta

ReLog povezuje beleženje vadbe, prehrane, zdravja, stroškov, hobijev, ciljev in rutin. En vnos naj posodobi relevantne podatke v več področjih in zmanjša podvajanje dela.

Uporabnik opiše, kaj želi spremljati. AI predlaga tracker z ustreznimi polji, widgeti in povezavami. Uporabnik lahko prikaz prilagodi. Sistem uporablja skupni kontekst, shranjena pravila in podatke iz logov za izračune ter pozneje za predloge prilagoditev rutin.

Predlagana vrednost: **»Enkrat opiši, kaj spremljaš. Nato beleži naravno, ReLog pa dosledno posodobi povezane podatke in pokaže, zakaj.«**

### Potrjena usmeritev: hitro beleženje brez AI in iPhone widgeti

2026-11-17 [USER] Velik poudarek bo na interaktivnih widgetih na iPhonu, prek katerih uporabnik aktivnost beleži samo z dotiki, brez uporabe AI. Enakovredna hitra ročna pot mora obstajati tudi v aplikaciji. To so sistemski iPhone widgeti, poleg prilagodljivih widgetov znotraj trackerjev.

2026-11-17 [USER] Do kateregakoli podprtega beleženja mora uporabnik priti v **manj kot 8 klikih oziroma dotikih**. Osem je že veliko; meja ni želeno število korakov. [ASSUMPTION] Priporočen oblikovalski cilj za najpogostejše vnose je 1–3 dotike, kjer je izvedljivo; ta številka še ni potrjena zahteva.

Predvidene poti vključujejo prednastavljene aktivnosti, hitre količine, števce in ponovitev shranjenega vnosa. Konkretne postavitve in omejitve interaktivnosti iOS še preverimo. Ročni vnosi morajo uporabljati iste izračune in povezave kot strukturirani rezultati AI; AI je možnost za prost opis, ne pogoj za shranitev aktivnosti.

Pri preizkusih ločeno štejemo korake do začetka vnosa in do uspešno shranjenega loga, z jasno navedenim izhodiščem (widget ali začetni zaslon aplikacije). Vnašanja besedila in časa izvedbe ne smemo skriti za nizkim številom navigacijskih klikov. Uporabnikova meja se nanaša na dostop do beleženja; natančno merilo za celotno izpolnjevanje še določimo.

## 2. Glavni primer: BJJ

### Nastavitev trackerja

Uporabnik poda cilj, urnik, običajno trajanje treninga, posebne metrike, mesečnino, razdaljo do dvorane in predvideno pogostost obiskov.

Primeri polj posameznega treninga:

- Trajanje, število in po potrebi dolžina rund.
- Submissioni, vadene tehnike, težave in zapiski.
- Lokacija oziroma dejanski obisk dvorane ter način prevoza, kadar vpliva na stroške.

Primeri widgetov: tedenski cilj, skupno trajanje, submission counter, tehnike, zadnji zapiski in graf aktivnosti.

### Vsakodnevni vnos

Uporabnik napiše ali pove: »Danes pet rund sparinga, vadili triangle, guard mi ni šel.«

AI prejme besedilo, konfiguracijo trackerja in relevantni kontekst. Če je običajni sredin trening dolg 90 minut, uporabniku tega ni treba ponoviti. Trajanje ostane označeno kot povzeto iz urnika; izrecna navedba »danes samo eno uro« ima prednost.

Urnik sam ne pomeni opravljenega treninga. Poročilo oziroma potrjen vnos potrdi izvedbo.

### Povezani učinki

- BJJ: napredek, runde, tehnike in težave.
- Exercise: trajanje, pogostost in ocenjena poraba energije.
- Expenses: ustrezno označeni stroški oziroma ocene prevoza; mesečnina po ločenem mesečnem pravilu.
- Calendar/rutine: pozneje predlogi sprememb načrta glede na uporabnikove omejitve.

## 3. Dve ravni uporabe AI

| Raven | Naloga | Predlagana izvedba |
|---|---|---|
| Ustvarjanje ali večja sprememba trackerja | Razume cilj, izbere polja/widgete/modele in predlaga povezave | Močnejši model; raziskovanje virov samo, kadar je potrebno |
| Obdelava posameznega poročila | Izlušči podatke po že določeni strukturi in kontekstu | Manjši, cenejši model; izhod po določeni shemi |

Začetni »en AI klic« pomeni en postopek nastavitve, ne obljube, da bo raziskava vedno izvedena v natanko eni HTTP zahtevi. Uporabnik je pojasnil, da je predviden AI klic tudi ob vsakem prostem poročilu. Strukturirani ročni vnosi in vnosi iz iPhone widgetov AI klica ne potrebujejo.

AI naj vrne strukturirano konfiguracijo; samo besedilni spomin ni dovolj. Izbira preverjene računske modele in koeficiente iz kataloga, namesto da izmišljuje formule ali ustvarja poljubno izvršljivo kodo.

Za izluščanje smo obravnavali Responses API s Structured Outputs. Decisions API je primernejši za omejene izbire, pogoje in ocenjevalne lestvice. Primerljive strukturirane izhode drugih ponudnikov je treba preveriti za izbrani model.

Model in ponudnik še nista izbrana. Kandidati za testiranje vključujejo Luno, Terro ter manjše Mistralove modele. Cena ali starost modela ne dokazujeta pravilnosti. Za slovenščino, sleng, zanikanje in mešanje jezikov potrebujemo primerjalne teste; podpore vsem jezikom ne obljubljamo.

## 4. Predlagana arhitektura

```text
Nastavitev uporabnika + katalog widgetov/polj + preverjeni viri
                           ↓
                 AI predlog konfiguracije
                           ↓
                Preverjanje + uporabnikov pregled
                           ↓
                  Shranjena konfiguracija

Besedilo / prepis govora + konfiguracija + relevantni kontekst
                           ↓
                    AI izluščitev podatkov
                           ↓
              Validacija in razjasnitev nejasnosti
                           ↓
                     Izvorni dogodek
                           ↓
                 Izračuni po shranjenih pravilih
                           ↓
                  Trackerji, widgeti in povzetki
```

Strukturirani vnos iz aplikacije ali iPhone widgeta gre neposredno v validacijo in isti sistem izvornih dogodkov ter izračunov, brez AI izluščitve.

Predlagane lastnosti:

- En izvorni dogodek, povezan z več pogledi; ne trije neodvisni izvodi istega treninga.
- Ponovno shranjevanje ne sme podvojiti prispevkov. Popravek ali izbris mora ustrezno popraviti izračune.
- Shranimo izvirno poročilo, izluščene podatke, izvor posamezne vrednosti in različico konfiguracije/modela izračuna.
- Polja so ločena od widgetov. Skrivanje widgeta ne izbriše podatkov.
- AI predlog novega polja ali spremembe rutine se potrdi; struktura trackerja se ne spreminja nenadzorovano.
- Dostop do modelov izoliramo v zamenljiv modul, da UI in podatki niso vezani na enega ponudnika.

## 5. Pravila za kalorije in stroške

Poraba energije je ocena, razen kadar uporabnik vnese drug jasno opredeljen vir. Športni model mora imeti vir, omejitve in različico.

**Ne prištevamo celotne porabe rund na povprečje, ki runde že vključuje.** Uporabimo osnovo in prilagoditev za odstopanje od običajnega treninga. Dolžina rund, intenzivnost in odmori vplivajo na smiselnost ocene. Konkretni koeficienti še niso izbrani ali potrjeni.

Pri stroških ločimo:

- Predvidene obiske in napoved prevoza.
- Opravljene obiske in oceno stroška dejanske poti.
- Mesečno obveznost oziroma pričakovano mesečnino.
- Potrjeno dejansko plačilo.

Mesečnina ni odvisna od tega, ali je uporabnik tisti mesec že treniral. Predvideni obiski niso dejanska poraba. Razdalja mora jasno pomeniti eno smer ali celotno pot. Obisk dvorane ne dokazuje vožnje z avtom.

## 6. Hrana in podatkovna baza

AI prepozna živila in količine; hranilne vrednosti pridobimo iz baze, kalorije in makrohranila izračuna aplikacija.

Obravnavani viri:

- Open Food Facts za pakirane izdelke; pred integracijo preverimo pogoje ODbL.
- USDA FoodData Central za hranilne podatke in osnovna živila.
- Uporabnikovi izdelki, recepti in shranjeni obroki.

Priporočena prva pot: tehtana količina, iskanje/črtna koda in ponovitev shranjenega obroka. Hitra ocena porcije naj bo jasno označena. Razlikovati moramo na primer suh in kuhan riž.

Celotne baze ne pošiljamo AI-ju. Dobi vnos in po potrebi nekaj kandidatov. Ob logu shranimo uporabljene hranilne vrednosti, da poznejša sprememba izdelka ne spremeni zgodovine.

Celotnega kataloga ni treba prenesti na telefon. Lokalno lahko hranimo priljubljena in nedavna živila, recepte in neposlane vnose. Zunanji API ali lastna kopija kataloga sta ločeni arhitekturni možnosti; izbira ni potrjena.

## 7. Lokalno delovanje, strežnik in AI računi

Lokalno shranjevanje in računanje sta izvedljiva. Lokalni AI je možnost na podprtih napravah, vendar še ni preizkušen za najine jezike in vnose.

Za oblačni AI z ReLogovim plačljivim ključem smo predlagali majhen strežniški del, ki preveri uporabnika, ščiti ključ in omejuje porabo. Model teče pri ponudniku; lasten GPU strežnik ni potreben. Sinhronizacija, varnostne kopije in uporabniški računi so dodatne odločitve.

Obravnavali smo tudi uporabo uporabnikove AI naročnine:

- ChatGPT ima uradni Sign in with ChatGPT z možnostjo uporabe paketa za upravičene integracije. Komercialni dostop je po preverjeni dokumentaciji omejen; odprtokodna pot ima drugačno razpoložljivost.
- Prijava sama ne prenese ChatGPT pogovorov ali spomina. ReLog še vedno potrebuje svoj profil in kontekst.
- Pri Gemini ni bila potrjena splošna pot uporabe uporabnikove naročnine v ReLogu; API uporablja lasten obračun.
- Anthropic razvijalce zunanjih produktov usmerja na API; dodatni krediti niso isto kot vključena naročnina.

Nobena povezava ali ponudnik še ni izbran. Produkt naj podpira tudi uporabnike brez AI naročnine.

## 8. Okvirne cene iz pogovora

Vse spodaj je v USD, razen kjer je navedeno drugače. Pred uporabo v poslovnem načrtu ponovno preverimo cenike in izmerimo dejansko porabo, vključno z dodatnimi klici in tokeni za razmišljanje.

| Scenarij | Predpostavka | Izračun na uporabnika/mesec |
|---|---|---:|
| 2 loga dnevno z Luno | 60 klicev; vsak 1.500 vhodnih + 250 obračunanih izhodnih tokenov | 0,0165 |
| Enaki logi s Terro | Enake količine tokenov | 0,165 |
| Enaki logi s Solom | Enake količine tokenov | 0,33 |
| 4 vnosi hrane dnevno z Luno | 120 klicev; vsak 1.500 vhodnih + 300 izhodnih tokenov | 0,036 |
| Enaki vnosi hrane s Terro | Enake količine tokenov | 0,36 |
| 2 nova trackerja + 2 posodobitvi s Solom | Nov tracker: 20.000 vhodnih + 4.000 izhodnih tokenov in 3 iskanja; posodobitev: 8.000 + 2.000, brez iskanja | 0,292 |
| Enaka nastavitev z Astro | Enak skupni obseg postopka | 1,22 |
| Skupni primer: Terra logi + Luna hrana + Sol nastavitve | Vsota zgornjih predpostavk | 0,493 |
| Prepis govora | 60 minut po približno 0,003 USD/minuto | 0,18 |

Ocene AI porabe predpostavljajo obdelavo vseh navedenih vnosov z AI. Z uporabo ročnih vnosov in widgetov bo število takih klicev drugačno; delež še ni izmerjen.

»Dve novici« smo v računu razumeli kot dve novi informaciji, ki zahtevata prilagoditev. Točen pomen ostaja nepotrjen. Govor v računu pomeni prepis, ne dvosmernega glasovnega pogovora.

Obravnavani infrastrukturni izhodišči: majhna funkcija od približno 5 USD/mesec; upravljana baza/računi/funkcije od približno 25 USD/mesec. To niso zagotovljeni celotni stroški za poljubno število uporabnikov.

### Primer 10.000 naročnikov po 4,99 USD

Predpostavke: cena vključuje 22 % DDV, trgovina vzame 15 % prihodka brez DDV, vsak uporabnik dosega zgornjo uporabo, vsi imajo 60 minut prepisa mesečno. DDV je poenostavljen slovenski primer; pri mednarodni prodaji se razlikuje. Provizija je odvisna od kanala in upravičenosti.

| Postavka | USD/mesec, zaokroženo |
|---|---:|
| Plačila naročnikov | 49.900 |
| Vsebovani DDV | −8.998 |
| Provizija trgovine | −6.135 |
| Besedilni AI in nastavitve | −4.930 |
| Prepis govora | −1.800 |
| Infrastruktura — proračunska predpostavka | −500 |
| Ostane pred drugimi stroški in davkom od dobička | 27.536 |
| Hipotetični stroški ekipe, marketinga, podpore, računovodstva | −10.000 |
| Ponazorjen dobiček pred DDPO | 17.536 |
| Ponazorjen DDPO 22 % | −3.858 |
| Ostane v podjetju | 13.678 |

To ni osebni neto prejemek ali napoved uspeha. Dejanska davčna osnova lahko odstopa. Niso posebej ovrednoteni vračila, neuspešna plačila, brezplačni uporabniki, fotografije, plačljive baze in stroški pridobivanja naročnikov. Predlagana začetna omejitev govora 60 minut/mesec je ideja, ne dogovorjen paket.

## 9. Konkurenca in razlikovanje

Podrobnosti: [raziskava konkurence](MARKET-RESEARCH-2026-11-17.md).

Podobni deli že obstajajo pri KeeperPal, LifesOS, LifeOS AI, Visualife, Exist, Gyroscope, Reclaim in Nomie. Ni dokazano, da celotne kombinacije ReLoga nima nihče. V raziskavi nismo našli javno potrjene izvedbe celotnega BJJ scenarija.

Uporabnik je KeeperPal osebno pregledal: navaja približno 22 EUR mesečno, slab UI in zadnjo vidno community objavo 5. julija (leto ni potrjeno). To je uporabnikovo opažanje; iz community aktivnosti ne moremo sklepati o celotni zasebni uporabi ali poslovnem stanju.

Hipoteze za razlikovanje ReLoga: manj podvajanja, hitro naravno beleženje, prilagodljivi widgeti, razložljiva pravila, dosledni popravki povezanih izračunov in izvedljivi predlogi rutin. Cena in lepši UI sama ne dokazujeta povpraševanja. Ključno je preveriti redno uporabo in pripravljenost plačati.

Za orientacijo smo preverili tudi MyFitnessPal: slovenski App Store je navajal več mesečnih Premium ponudb 9,99/21,99 EUR in letnih 49,99/87,99 EUR ter Premium+ 99,99 EUR letno. Ponudba za konkretni račun ni bila potrjena.

## 10. Strava

Osnovna povezava uporablja OAuth; obvestila o aktivnostih prihajajo prek webhookov. Potrebujemo obnovo dovoljenj, obravnavo preklica, izbrisov, napak, omejitev klicev in podvajanja.

Izvedbena ocena ob že obstoječem backendu: 1–3 razvojni dnevi za osnovni lastni preizkus, 1–3 tedne za zanesljivo enosmerno integracijo. To ni rok za trenutni statični prototip. Širitev nad 10 povezanih športnikov zahteva pregled, katerega trajanje ni zagotovljeno.

Pomembnejša omejitev: preverjena Strava API Policy iz 2026 izrecno omejuje AI uporabo, pošiljanje podatkov v kontekst modela, združevanje za analize ter trajne indekse. Osebna MCP izjema ni komercialno dovoljenje. Za želeni ReLog tok potrebujemo razjasnitev oziroma izrecno dovoljeno uporabo; integracija ni potrjena.

## 11. Predlagani naslednji korak

Najprej potrdimo ciljnega uporabnika in preizkusimo eno celotno pot **BJJ → Exercise → Expenses**, z jasnimi mejami koledarja in predlogov rutin.

Merila preizkusa:

1. Ustvari tracker iz opisa ter pregleda in popravi konfiguracijo.
2. Zabeleži trening z uporabo znanega konteksta.
3. Vidi pravilno označene učinke v povezanih trackerjih.
4. Popravi ali izbriše trening; vsi izračuni se ustrezno popravijo.
5. Razume vir vsake ocene in razliko med načrtom, oceno ter dejanskim podatkom.
6. Aktivnost zabeleži tudi brez AI, prek hitre ročne poti; preverimo dostop do vsake vrste beleženja v manj kot osmih dotikih.
7. Za iPhone widgete posebej preverimo hitro beleženje in skupno pravilnost povezanih rezultatov.

Pred izvedbo ostanejo odprti: model in ponudnik, podprti jeziki, preverjene formule/vire, mobilna ali spletna arhitektura, offline obseg, backup/sinhronizacija, paket/limiti in dovoljenja integracij.

## 12. Trenutno implementirano

Obstoječi UI prototip je ločen od zgornje prihodnje arhitekture. Ima domene, tracker strani, ročne vnose, skupni kontekst in demo koledar. Podatki so samo v pomnilniku in se ob osvežitvi ponastavijo. AI, trajna baza, govor, sistemski iPhone widgeti, povezani stroškovni modeli in Strava še niso implementirani. V trenutnem prototipu kalorije vadbe ostajajo ročno vnesene.

## 13. Dodatek: interaktivni laboratorij — 17. november 2026

Na uporabnikovo zahtevo je bil ločeno od glavnega UI prototipa izdelan in zasebno objavljen [ReLog Algorithm Lab](https://relog-algorithm-lab.silverglove8.chatgpt.site). Izvorna koda in navodila: `sites/relog-algorithm/README.md`.

Vsebuje interaktivni zemljevid devetih korakov, BJJ in prehranske primere, ročno pot s konceptom iPhone widgeta, pregled vsake formule, popravljanje in brisanje dogodkov brez podvojitev, verzije pravil in izrecen preračun, ločene mesečne obveznosti/plačila, izbiro widgetov, preiskovanje izvedljivih rutin ter JSON izvoz.

Matematika in uporabniške interakcije dejansko delujejo v brskalniku. Močnejši AI in prevajalnik logov sta predstavljena kot jasno označeni simulaciji. Koeficienti porabe in vzorčna živilska baza niso raziskovalno potrjeni. Podatki se ob osvežitvi ponastavijo. To dopolnjuje oddelek 12: v glavnem prototipu te prihodnje funkcije še niso implementirane; laboratorij je ločen demonstracijski model.

Preverjeno: 22 modelnih testov; po 44 brskalniških preverjanj pri 1440, 390 in 320 px (zadnji z zmanjšanim gibanjem); build in preverjanje razlik. Vizualno pregledani zasloni. Noben kodni modul ne presega 300 vrstic.

## Viri iz raziskave

- [OpenAI cenik](https://developers.openai.com/api/docs/pricing)
- [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs) in [Decisions](https://developers.openai.com/api/docs/guides/decisions)
- [Mistral cenik](https://docs.mistral.ai/inference/pricing)
- [Open Food Facts API](https://github.com/openfoodfacts/openfoodfacts-server/blob/main/docs/api/index.md) in [pogoji](https://support.openfoodfacts.org/help/en-gb/12-api-data-reuse/94-are-there-conditions-to-use-the-api)
- [USDA FoodData Central](https://fdc.nal.usda.gov/api-guide/)
- [Apple Foundation Models](https://developer.apple.com/foundation-models-framework) in [Gemini Nano Prompt API](https://developers.google.com/ml-kit/genai/prompt/android)
- [Sign in with ChatGPT](https://developers.openai.com/siwc/quickstart), [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing), [Claude prijava in zunanja orodja](https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account)
- [Cloudflare Workers cenik](https://developers.cloudflare.com/workers/platform/pricing/) in [Supabase cenik](https://supabase.com/pricing)
- [Slovenske davčne stopnje](https://spot.gov.si/sl/teme/splosno-o-davkih), [DDPO](https://spot.gov.si/sl/teme/davek-od-dohodkov-pravnih-oseb), [EU OSS](https://europa.eu/youreurope/business/finance-and-tax/vat/one-stop-shop/index_en.htm)
- [Apple Small Business](https://developer.apple.com/app-store/small-business-program/) in [Google provizije](https://support.google.com/paymentscenter/answer/112622?hl=en)
- [MyFitnessPal slovenski App Store](https://apps.apple.com/si/app/myfitnesspal-calorie-counter/id341232718)
- [Strava začetek](https://developers.strava.com/docs/getting-started/), [webhooks](https://developers.strava.com/docs/webhooks/), [omejitve](https://developers.strava.com/docs/rate-limits/) in [API Policy](https://www.strava.com/legal/api_policy)
