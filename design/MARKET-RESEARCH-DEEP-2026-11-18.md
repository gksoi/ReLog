# ReLog: poglobljena raziskava trga, potreb in startup smiselnosti

**Datum raziskave: 18. november 2026.** Namen: preveriti konkurenco zunaj prvega pregleda, zgodovinske poskuse, javne uporabniške potrebe in skladnost ideje s klasičnimi startup smernicami. To je analiza javnih virov, ne dokaz product-market fita.

## 1. Najpomembnejši sklep

**Potreba obstaja, konkurenca je širša, kot je kazalo na začetku, poslovna priložnost pa ostaja hipoteza.** Ljudje javno iščejo poljubne povezane trackerje, avtomatske povezave med področji in vnos brez odpiranja aplikacije. Hkrati imajo že veliko rešitev, nekateri zavračajo naročnine in drugim zbiranje podatkov ne prinese uporabnega rezultata.

Najpomembnejši popravek prvotne predstave: **tudi formule med trackerji in zelo prilagodljivo beleženje že obstajajo.** Reflect podpira poljubne meritve in njihove formule; njegov razvijalec že v objavi iz leta 2023 uporablja primer napredka pri submissionih v jiu-jitsuju. Track & Graph ima celo vizualni graf izračunov med trackerji. Zato niti »vse v eni aplikaciji« niti »matematika v ozadju« sama zase nista prepričljiva trditev o edinstvenosti. [Reflect: prvotni opis][C01], [Reflect: formule][C02], [Track & Graph: Functions][C04].

**Moje priporočilo:** širšo vizijo ohraniti, prvo različico pa preveriti pri ljudeh, ki že kombinirajo reden šport ali hobi, urnik in stroške. Obljuba naj bo: *»Enkrat zabeležiš aktivnost; trajanje, napredek in povezani stroški se pravilno posodobijo. Pogost vnos opraviš neposredno iz widgeta.«* AI nastavitev naj odstrani delo uporabniku, vsakodnevna uporaba pa mora prinesti korist tudi brez pogovora z AI.

To je priporočilo raziskave, ne sprememba dogovorjenih zahtev v PRODUCT.md.

## 2. Kaj primerjamo in kako zanesljivi so dokazi

ReLog v tem poročilu pomeni načrtovan produkt: prilagodljivi trackerji za zdravje, prehrano, vadbo, hobije, finance in rutine; močnejši AI pri nastavitvi; manjši model za prevod prostega besedila; deterministični izračuni; en izvorni dogodek s povezanimi posledicami; hitri ročni vnosi in interaktivni iPhone widgeti. Sedanji spletni prototip in matematični laboratorij še nista delujoča produkcijska AI storitev ali izvorna iPhone aplikacija.

Raziskava razločuje štiri različne zmožnosti:

1. **Skupna shramba:** več področij na enem zaslonu.
2. **Analiza povezav:** statistične korelacije ali AI razlaga zgodovine.
3. **Pravila in izračuni:** isti dogodek zanesljivo spremeni več meritev; popravek ali izbris popravi tudi posledice.
4. **Načrtovanje:** predlog razporeda ob omejitvah časa, denarja in drugih ciljev.

Oglaševanje druge zmožnosti ne dokazuje tretje ali četrte. Formula je določeno pravilo; opažena korelacija je statistična povezava; ocena porabe kalorij je ocena. Teh kategorij ne smemo prikazovati kot enako gotovih dejstev.

**Metoda:** pregled uradnih produktnih strani, dokumentacije, App Store opisov, repozitorijev, izjav ustanoviteljev, izbranih javnih razprav in izvirnih startup oziroma raziskovalnih virov. Iskalne teme: »track anything/everything«, quantified self, povezovanje health/finance/habits, formule, widgets, BJJ journals, opuščanje beleženja in MVP/customer discovery.

**Omejitve:** brez nakupa naročnin, ustvarjanja računov ali praktičnega testiranja konkurentov. Funkcije pomenijo javno opisane zmožnosti, ne neodvisno preverjene kakovosti. Javnih uporabniških številk, prihodkov, retencije in celovitega TAM za to specifično kombinacijo ni bilo mogoče potrditi. Izbrani spletni komentarji niso reprezentativna anketa; identiteta in neodvisnost avtorjev nista preverjeni. Datumi objav so navedeni, kjer so zanesljivi; relativnih oznak Reddita ne pretvarjam v izmišljene natančne datume. Vse povezave so bile pregledane ali najdene v tej raziskavi, razen izrecno označenih izhodišč iz prejšnjega pregleda.

## 3. Novi in dodatni konkurenti

### 3.1 Najpomembnejši neposredni in tehnični primerjalniki

| Produkt | Javno opisano prekrivanje | Kaj pomeni za ReLog | Kaj ostaja nepreverjeno |
|---|---|---|---|
| **Reflect — Track Anything**, No Translation Layer | Poljubna števila, besedilo, ocene, enote, izbire, timerji in števci; sestavljeni obrazci; grafi; eksperimenti; formule med meritvami; App Store omenja widgete in Apple Health. [Opis][C01], [formule][C02], [trgovina][C03] | Najpomembnejši nov primerjalnik. BJJ, prilagajanje in izračuni že imajo neposreden precedens. | Samodejna AI nastavitev celotnega BJJ → prevoz → članarina → rutina poteka ter doslednost popravkov vseh posledic. |
| **Track & Graph**, Android, odprta koda | Poljubno beleženje, grafi, funkcije, ki preoblikujejo in združujejo trackerje; vizualni urejevalnik vozlišč; tudi lastne Lua funkcije. [Dokumentacija][C04], [repozitorij][C05] | Zelo blizu matematičnemu jedru ReLoga. Graf odvisnosti ni nova kategorija. Priložnost je narediti ga uporabnega brez ročnega programiranja. | AI nastavitev, izvorni iPhone tok in domensko pripravljen sistem članarin/prevoza/planiranja. |
| **Sink: Habit & Event Tracker** | Dogodki s številskimi vrednostmi in zapiski; Siri/Shortcuts; Apple Watch; CSV/JSON; povezava z Google Sheets; SinkGPT za vpoglede. [App Store][C06] | Enostavni univerzalni vnosi, glas in prenosljivost podatkov že obstajajo skupaj. | Vnaprej sestavljena pravila med področji in načrtovanje z omejitvami. Lokalnost podatkov in AI/Sheets prenose bi bilo treba posebej preveriti; marketinški opis ni tehnična revizija zasebnosti. |
| **Trackables.me** — ID 6739170126 | Poljubni trackerji in grafi, widgeti, avtomatski viri Apple Health/Screen Time/Calendar/Reminders, Mac čas, skupnost za kopiranje nastavitev. [Uradna stran][C07] | Konkurent pri vizualni prilagodljivosti, manj ročnega vnosa in widgetih. Sam widget ne bo trajna prednost. | Splošen motor meddomenskih izračunov in AI sestavljanje pravil. Widget na domačem zaslonu še ne dokazuje vseh želenih interaktivnih vnosov. |
| **Trackly**, trackly.today | Stroški, navade, rutine, naloge, opomniki, nakupi, posojanje in skupinski računi; stran oglašuje offline delovanje ter AI vnos. [Uradna stran][C08] | Tudi povezava finance + rutine + vsakdanje beleženje ni prazna niša. | Zdravstvena/prehranska globina, poljubna pravila in dejanska izkušnja; spletna namestitev ni dokaz izvornih iPhone widgetov. |

Reflect je posebej pomemben, ker njegov primer iz 2023 ni zgolj generično »track anything«: razvijalec med vprašanji izrecno navede spremljanje uspešnosti submissionov pri jiu-jitsuju. Njegova kasnejša objava formul pojasni seštevanje, odštevanje, množenje, deljenje, vsoto in povprečje več meritev. **ReLog se zato ne more ločiti samo z BJJ števcem ali izpeljano metriko.** [Primeri][C01], [objava formul][C02].

Pri Trackables je treba paziti na identiteto: v trgovini obstaja tudi druga aplikacija **Trackables: Health Dashboard**, ID 6745567488. Vrstica zgoraj opisuje trackables.me in njen ID; funkcij obeh izdelkov ne združujem. [Drugi izdelek][C09].

### 3.2 Konkurenti za posamezen pomemben del izkušnje

| Produkt | Prekrivanje in pomen | Meja primerjave |
|---|---|---|
| **Bearable** | Simptomi, razpoloženje, spanje, energija, poljubni dejavniki in meritve; analize povezav ter eksperimenti. Dober primer produkta, ki začne s konkretnim zdravstvenim problemom. [Dejavniki][C10], [korelacije][C11] | Ni potrjen splošen finance/hobi/urnik motor. |
| **Guava** | Ročno beleženje, naprave, zdravstveni zapisi in analize življenjskih dejavnikov. Konkurira pri obljubi razumeti zdravstvene podatke skupaj. [Health Insights][C12] | Zdravstveno usmerjen produkt; ni potrjen poljuben finančni in rutinski sistem. |
| **Lifestack**, lifestack.ai | AI planer, ki uporablja podatke o spanju, regeneraciji in energiji pri oblikovanju urnika. [Uradna stran][C13], [opis pristopa][C14] | Konkurenčen pri health → calendar; ne potrjuje celotnega univerzalnega ReLog grafa. |
| **FlowJitsu** | BJJ treningi s trajanjem in zapiski, runde, partnerji, kaj je uspelo in kaj vaditi, knjižnica tehnik ter načrti. Stran navaja brezplačno in offline delovanje. [Uradna stran][C15] | Specializiran tekmec za naš začetni primer; univerzalnost mora prinesti dodatno korist, da odtehta njegovo globino. |
| **BJJBuddy** | Specializiran BJJ tracker/journal, prisoten v App Store. [Trgovina][C16] | Nadaljnji obvezen praktični primerjalnik; v tej raziskavi ne ocenjujem kakovosti njegovih podrobnih tokov. |
| **Open Habit**, odprta koda | iPhone/iPad beleženje navad z interaktivnimi widgeti za 1, 3 ali 6 navad, Shortcuts, lokalnim shranjevanjem in iCloud možnostjo. [Repozitorij][C17] | Dokazuje, da hitri widget vnos in lokalnost že obstajata; ne dokazuje ReLog povezav med področji. |

Med iskanjem se je pojavil tudi **lifestack.pro**, ki oglašuje združevanje časa, zdravja, energije in denarja; finančne povezave so tudi na roadmapu. **Istovetnost z lifestack.ai ni potrjena.** Obravnavam ga kot ločen konkurenčni signal in roadmap kot načrt, ne že dobavljeno funkcionalnost. [Stran][C18], [roadmap][C19].

**Conjure** se v katalogih pojavlja kot habit/goal/time tracker s pravili in API. Uradna stran je pri preverjanju vrnila 502, zato ga ne uporabljam kot potrjen dokaz aktualnih funkcij ali zaprtja. To ostaja odprta sled za nadaljnji praktični pregled.

### 3.3 Že obravnavanih tekmecev ne smemo odpisati

Prejšnji [pregled iz 17. novembra](MARKET-RESEARCH-2026-11-17.md) obravnava KeeperPal, LifesOS, LifeOS AI, Visualife, Exist, Gyroscope, Reclaim, Moduon in druge. Nova raziskava ga dopolnjuje; ne nadomešča praktičnega testa.

Ponovno pregledani **KeeperPal** javno obljublja več področij, custom trackerje in povezave med podatki. **LifesOS** povezuje denar, obroke, gibanje in načrte ter tekst, fotografije in glas s pregledom pred shranitvijo. To sta še vedno neposredna primerjalnika široke produktne obljube. [KeeperPal][C20], [LifesOS][C21].

Tvoj pregled KeeperPala — približno 22 € mesečno, slab UI in zadnja vidna community objava 5. julija, leto nepotrjeno — je koristno uporabniško opažanje iz pogovora. **Ne dokazuje, da je podjetje zaprto ali da ljudje ne uporabljajo zasebnega beleženja.** Slaba izvedba konkurenta je možna priložnost, ni pa meritev velikosti trga.

### 3.4 Nadomestne rešitve so prav tako konkurenca

**Notion, Coda, Sheets in Shortcuts** lahko sestavijo dele podobnega sistema. Notion omogoča relacije in agregacije povezanih baz. Coda povezuje formule, gumbe in avtomatizacije. Apple Shortcuts omogoča osebne avtomatizacije, sprožene z dogodkom. [Notion][C22], [Coda formule][C23], [Coda avtomatizacije][C24], [Apple][C25].

ReLog mora zato premagati tudi obstoječo preglednico, koledar in nekaj bližnjic, ki jih uporabnik že razume. Njegova prednost bi bila manj nastavljanja in vzdrževanja, dober mobilni vnos ter pravilni pripravljeni izračuni. To je hipoteza o uporabnosti; v tej raziskavi ni bila izmerjena.

## 4. Ali je kaj podobnega obstajalo prej?

| Primer | Preverljivo dejstvo | Praktičen nauk za ReLog |
|---|---|---|
| **Nomie** | Uradna stran napove zaprtje gostovanih Nomie 4/5/6 s 1. februarjem 2023. Ustanovitelj januarja 2023 po osmih letih dela navede, da produkta ni uspel monetizirati oziroma spremeniti v pravi posel; objavljena je koda Nomie 6. [Izjava][H01] | Prilagodljiv tracker in skupnost lahko obstajata brez vzdržnega posla. Izvoz in nadaljnji dostop do podatkov morata biti del zaupanja. Zaprtje gostovanja ni enako izginotju odprte kode. |
| **Metriport, potrošniški začetek 2022** | Ustanoviteljske objave iz januarja 2022 predstavljajo personal analytics in »track anything« aplikacijo. Današnji uradni repozitorij predstavlja healthcare data infrastructure. [Takratna objava][H02], [današnji repo][H03] | Združevanje podatkov je star problem; ista ekipa lahko najde drugo poslovno uporabo. Iz teh dveh virov ne sklepam, zakaj ali točno kdaj je spremenila smer, niti da je potrošniški koncept nujno propadel zaradi retencije. |
| **Moves** | Facebook je 2. julija 2018 napovedal zaprtje treh aplikacij zaradi nizke uporabe; Moves in njegov API sta bila predvidena za ukinitev 31. julija. [Uradna izjava][H04] | Tudi avtomatsko zbiranje podatkov ne zagotovi trajne uporabe. Odvisna aplikacija lahko izgubi API. Moves je zgodovinski sosed, ne celovit enakovreden ReLog. |
| **Fluxtream / BodyTrack** | Uradni repo opisuje uvoze naprav in storitev, med njimi Fitbit, Google Calendar in Last.fm, skupne podatkovne module in spletno aplikacijo; projekt nosi zgodovino BodyTrack ekipe. [Repozitorij][H05] | Že pred generativnim AI so obstajali večvirni osebni podatkovni sistemi. Trenutnega gostovanja, podpore in poslovnega stanja iz repozitorija ne moremo potrditi; ne označujem ga za zaprtega. |

Pri Nomie obstajajo tudi odzivi uporabnikov na zaprtje, vprašanja migracije in nadaljevanje odprtokodne različice. To pokaže navezanost dela skupnosti in pomen kontinuitete podatkov. Ne pokaže, koliko teh ljudi bi plačevalo dovolj za vzdrževanje produkta. [Razprava o zaprtju][U09], [odprta različica][U10].

Metriportova začetna objava vsebuje še uporaben ustanoviteljski nauk: ekipa je navedla, da so bili zgodnji neposredni stiki s skupnostmi učinkovitejši od njihovega začetnega plačanega oglaševanja. To je njihova izkušnja iz začetne faze, ne splošna primerjava donosnosti oglasov. Za ReLog podpira poceni test skozi dostopen klub in neposredno pomoč prvim uporabnikom. [Izkušnja ustanoviteljev][H02].

**Skupni nauk:** nova priložnost ni odkritje, da življenje sestavlja več povezanih področij. Morebitna nova vrednost je cenejša in lažja nastavitev, uporabniški vnos z manj trenja ter zanesljivo izvajanje povezav. Zgodovinski primeri so opozorila, ne statistična napoved ReLogovega uspeha.

## 5. Ali ljudje to dejansko zahtevajo?

Spodaj so konkretni javni primeri. Oznaka »uporabniško vprašanje« pomeni vsebino objave, ne preverjene identitete ali dokazane kupne namere. V več razpravah so odgovori razvijalcev; teh ne štejem kot dodatne neodvisne uporabnike.

| Razprava / obdobje | Kaj je avtor dejansko opisal | Signal za ReLog | Česa ne dokazuje |
|---|---|---|---|
| **One app for tracking everything?**, 2025, r/QuantifiedSelf. [Objava][U01] | Clue + LoseIt + Google Form/preglednica; želi sam določiti meritve, grafe in izračune. Ob predlogu Exist omeni ceno. | Neposredna potreba po prilagodljivosti in manj orodjih; hkrati cenovna občutljivost. | Da potrebuje AI, planer ali da bo plačal našo ceno. |
| **App that automatically ties together all health metrics…**, konec 2024, r/QuantifiedSelf. [Objava][U02] | Sprašuje po avtomatskem združevanju in korelacijah prehrane, vadbe, razpoloženja in drugih meritev. | Potreba po povezavah obstaja izven ReLog ideje. | Večina razvijalskih odgovorov ni dokaz uporabe; ne zahteva finančnega modula. |
| **The health tracking ecosystem is so fragmented**, 2026, r/QuantifiedSelf. [Objava][U03] | Apple Health, Strong, Cronometer, Guava; enosmerni sync, popravki se ne prenesejo, viri se prekrivajo. | Zelo konkreten problem pravilnosti in popravkov, ki podpira en izvorni dogodek ter jasen izvor podatka. | Da mora ena aplikacija nadomestiti vsa specialistična orodja. |
| **Does anyone actually get long-term behavioral insight…**, 2026, r/QuantifiedSelf. [Objava][U04] | Podatki ostajajo neuporabljeni; preglednica in ponavljajoče pojasnjevanje konteksta chatbotu ne prineseta nove vrednosti. | Trajen kontekst in uporaben rezultat sta pomembnejša od števila grafov. | Trditve avtorja o chatbotu niso splošna tehnična ocena vseh današnjih modelov; njegovo nezadovoljstvo ni dokaz, da ga ReLog reši. |
| **Habit/fitness tracker widget for iPhone**, 2026, r/productivity. [Objava][U05] | Želi klikljiv widget z dnevnim urnikom vaj in zgodovino; vidnost mu pomaga pri pozabljanju. V odgovoru zavrne drag nakup oziroma naročnino. | Zelo blizu tvoji prioriteti: videti, tapniti, končati. Cenovni upor obstaja tudi pri jasno izraženi potrebi. | Navedba lastne ADHD izkušnje ni klinični dokaz in ne potrjuje celotnega segmenta. |
| **Looking for an iOS habit tracker with a widget for counting up**, 2024, r/productivity. [Objava][U06] | Želi več števcov »dni od zadnjič« in reset z dotikom; obstoječi trackerji mu niso ustrezali. | Ljudje želijo različne vrste metrik, ne samo streakov ali dnevnih kljukic. | »Kupil bi« ni opravljena transakcija. |
| **How do you track progress?**, 2025, r/bjj. [Objava][U07] | Razprava o konsistentnosti, številu rund, vzdržljivosti in kvalitativnih izboljšavah. | BJJ log naj vključuje tehnike in refleksijo; samo submission count ne opiše napredka. | To ni neposredna zahteva po novi aplikaciji ali njeni naročnini. |
| **Introducing Reflect…**, 2024, r/SwiftUI — promocijska objava z uporabniškim odzivom. [Razprava][U08] | Eden komentatorjev opisuje preobremenjenost UI in težavo najti enostaven števec. | Zmogljiv univerzalni tracker lahko izgubi uporabnika pri osnovnem opravilu. | En komentar ne meri splošne kakovosti Reflecta. |

### Kaj se ponavlja

- **Prilagodljivost:** moja metrika, moja enota, moj način vnosa.
- **Povezovanje:** pokaži podatke skupaj; ne zahtevaj dvojnega beleženja.
- **Pravilnost:** prenesi popravke, ne podvoji dogodka, povej, kateri vir velja.
- **Hitrost in vidnost:** beleženje naj bo dostopno tam, kjer je uporabnik, tudi iz widgeta.
- **Korist:** po podatkih mora slediti odgovor ali odločitev, ki jo uporabnik potrebuje.
- **Cena:** potreba in pripravljenost plačati sta ločeni stvari.

To je kvalitativna sinteza zgornjih primerov, ne frekvenčna analiza celotnega Reddita.

### Kaj bi bilo napačno šteti kot dokaz povpraševanja

V temi »One app…« je odgovor ekipe Loggr z NLP vnosom in lokalno obdelavo: to je konkurenčna ponudba, ne dodaten neodvisen kupec. Tedenske app teme vsebujejo veliko razvijalskih predstavitev. Tudi objave Metriporta, Trackables in Reflecta v startup skupnostih so primarni dokazi o ponudbi, ne avtomatsko dokazi o uspešnem trgu. [Primer mešane teme][U01], [tedenska tema][U11], [Metriport][H02].

**Najmočnejši signal je obstoječe vedenje:** nekdo že uporablja več orodij, ročno prepisuje ali popravlja podatke in zna pokazati konkreten problem. Šibkejši signal je všeček ali splošno »super ideja«. Še vedno potrebujemo intervjuje, opazovanje in dejansko plačilo.

## 6. Kaj pravi raziskovanje osebnega beleženja

Li, Dey in Forlizzi v delu **A Stage-Based Model of Personal Informatics Systems** (CHI 2010) razlikujejo pripravo, zbiranje, integracijo, refleksijo in ukrepanje. Opozorijo na ovire med fazami ter pomen ravnotežja med avtomatizacijo in uporabniškim nadzorom. To se dobro ujema z ReLog arhitekturo: AI konfiguracija → widget/log → povezani izračuni → pregled → odločitev. **Gre za konceptualno ujemanje, ne dokaz, da bo ReLog uspel.** [Izvirni članek][R01].

Epstein in sodelavci v **Beyond Abandonment to Next Steps** (CHI 2016) obravnavajo 193 nekdanjih uporabnikov beleženja in 12 intervjujev, tudi za finance in lokacijo. Ugotovitve obravnavajo različne razloge in izkušnje po prenehanju beleženja, vključno z možnostjo poznejše vrnitve. [Izvirni članek][R02].

Moja produktna izpeljava: ne zahtevati popolnega dnevnega izpolnjevanja, dovoliti premor, ohraniti zgodovino, jasno razlikovati manjkajoč podatek od ničle in pokazati vrednost pred dolgim obdobjem zbiranja. Widget lahko zmanjša trenje pri zbiranju; sam ne reši vprašanja, zakaj bi se uporabnik vračal.

## 7. Kje ima ReLog še prostor za razlikovanje?

| Predlagana prednost | Kaj kaže trg | Ocena raziskave |
|---|---|---|
| Vse v eni aplikaciji | KeeperPal, LifesOS, Trackly in drugi imajo sorodno obljubo. | Potrebno za vizijo, šibko kot samostojna razlika. |
| Poljubni trackerji in BJJ števec | Reflect, Nomie, Track & Graph; tudi specializirani BJJ dnevniki. | Že obstoječe. |
| Formule in graf med trackerji | Izrecno dokumentirano pri Reflect in Track & Graph. | Že obstoječe; uporabnost nastavitev je odprta priložnost. |
| AI vnos in vpogledi | Prisotni v več izdelkih iz tega in prejšnjega pregleda. | Pričakovana funkcija v delu kategorije. |
| Hitri widgeti | Trackables, Reflect in Open Habit pokrivajo dele tega področja. | Pomembna izkušnja; težko branljiva sama zase. |
| AI sestavi smiselna polja, predloge widgetov in preverjena pravila | Posamezni deli obstajajo; celotni naš tok ni potrjen. | Obetavna hipoteza, zahtevna za zanesljivo izvedbo. |
| En vnos ima razložljive posledice v času, napredku in stroških, tudi po popravku | Javni viri ne dokumentirajo celotnega našega scenarija; uporabniki opisujejo težave s sinhronizacijo. | Najbolj konkretna hipoteza za praktičen primerjalni test. |
| Iz vsega sestavi izvedljiv urnik | Lifestack in Reclaim pokrivata sorodne dele planiranja. | Poznejša možnost; nejasna začetna nujnost in večje tveganje preširokega obsega. |

**Tehnične izbire niso enako produktna prednost.** Kombinacija močnejšega konfiguracijskega modela, manjšega parserja in matematičnega jedra je lahko dobra izvedba. Kupec pa bo presojal, ali mu prihrani čas, popravljanje in razmišljanje. V javnih virih notranje arhitekture večine konkurentov niso dovolj opisane, da bi lahko trdili, da te kombinacije nimajo.

Obetavnejša dolgoročna prednost bi bila preverjena knjižnica domenskih predlog in povezav, manj napak pri spremembah, dobra migracija, zaupanje in dostop do jasnega segmenta. Skupnost ali mrežni učinek ne nastaneta samodejno zato, ker aplikacija vsebuje community zavihek. To so poslovne hipoteze, ne že dosežene prednosti.

## 8. Primerjava s klasičnimi startup vodiči

Vodiči so uporabni miselni modeli, ne certifikati kakovosti ideje. Spodnje ocene so moja uporaba njihovih načel na ReLog.

| Vodič / načelo | Kje ReLog ustreza | Kje trenutno odstopa | Kaj narediti |
|---|---|---|---|
| **Paul Graham: How to Get Startup Ideas** — opazuj dejanske probleme, tudi svoje. [Vir][G01] | Konkretni BJJ primeri in osebno nezadovoljstvo so boljši začetek kot abstraktni AI demo. | Osebni problem ni dokaz dovolj velikega kroga kupcev; »vsi nekaj beležijo« je preširok sklep. | Poišči ljudi z istim že obstoječim postopkom in ponavljajočo se težavo. |
| **YC / Michael Seibel: How to Plan an MVP** — zgodaj preveri osnovno uporabo. [Vir][G02] | Prototip in laboratorij omogočata pokazati konkreten tok. | Univerzalni tracker builder + prehrana + finance + optimizacija + integracije je preveč za prvo validacijo. | Dostavi en celoten tok od nastavitve do popravka in tedenske koristi. |
| **The Mom Test / YC How to Talk to Users** — zmanjšaj pristranskost pogovorov. [Knjiga][G03], [YC predavanje][G04] | Lahko opazuješ resnične loge, aplikacije in izgubljeni čas. | Vprašanje »bi uporabljal aplikacijo, ki poveže vse?« spodbuja prijazne hipotetične odgovore. | Sprašuj po zadnjem konkretnem dogodku, prejšnjih poskusih, stroških in razlogih za opustitev. |
| **Eric Ries: Lean Startup** — build–measure–learn in preverjeno učenje. [Vir][G05] | Matematično jedro dovoljuje hitro preverjanje pravilnosti. | Število modulov in grafov ni dokaz tržne vrednosti. | Pred vsako razširitvijo zapiši hipotezo, merilo in odločitev ob neuspehu. |
| **Paul Graham: Do Things That Don't Scale** — prve uporabnike pridobi in podpri ročno. [Vir][G06] | V BJJ klubu lahko pokažeš aplikacijo in pomagaš z nastavitvijo. | Avtomatiziranje vseh športov pred prvimi rednimi uporabniki bi odložilo učenje. | Ročno sestavi prvih nekaj trackerjev; meri tudi svoj vloženi čas in ga ne prikrivaj. |
| **Jobs to Be Done** — kupujemo napredek v določeni situaciji. [Christensen Institute][G07] | En dogodek brez večkratnega vnosa je jasen opravek. | »Life OS za vse« našteva kategorije, slabo pojasni razlog za menjavo. | Opiši trenutek: po treningu želim zaključiti evidenco in vedeti, kako stojim s časom in stroški. |
| **Sam Altman: Startup Playbook** — najprej nekaj uporabnikov, ki produkt res potrebujejo; osredotočenost in izvedba. [Vir][G08] | Dobra vsakodnevna izkušnja lahko ustvari reden razlog za uporabo. | Število funkcij in nizka cena AI ne rešita pridobivanja uporabnikov. | Izberi dosegljiv segment, opazuj vračanje in priporočila pred širjenjem. |
| **Rahul Vohra / Superhuman: PMF engine** — segmentiraj uporabnike in meri, koliko bi pogrešali produkt. [Vir][G09] | Po redni uporabi lahko ugotoviš, katera skupina dobi največjo korist. | Danes nimamo takšne uporabniške kohorte. Znani 40-odstotni prag ni napoved uspeha iz mnenj o maketi. | Anketiraj izkušene uporabnike, zraven pa meri retencijo, plačila in odhode. |

**Moja skupna ocena:** ReLog se dobro ujema z nastankom ideje iz resničnega problema in s potrebo po zmanjšanju ročnega dela. Trenutno se slabše ujema z zahtevo po ozkem začetnem kupcu, majhnem MVP in dokazani distribuciji. Največji naslednji napredek bi bili vedenjski podatki uporabnikov, ne še dodatna splošna funkcija.

## 9. Priporočen začetni segment in produktni obseg

**Prvi segment za test:** iPhone uporabniki, ki imajo reden šport ali hobi vsaj nekajkrat tedensko, že spremljajo urnik in stroške ter uporabljajo vsaj dve ločeni rešitvi. BJJ je dober začetni kanal, če imaš neposreden dostop do klubov in uporabnikov. To še ni odločitev, da mora končni produkt ostati BJJ aplikacija.

| Segment | Zakaj je zanimiv | Glavno tveganje | Prednost za začetni test |
|---|---|---|---|
| Aktivni hobi/šport + čas + stroški | Konkreten ponavljajoč se dogodek in jasna povezava. | Uporabniku so lahko dovolj specializiran dnevnik in koledar. | Najlažje pokažemo našo razliko; priporočeni začetek. |
| Quantified-self navdušenci | Že uporabljajo več virov in razumejo meritve. | Zahtevajo veliko integracij; nekateri si rešitev sestavijo sami. | Koristni zgodnji sogovorniki in primerjalci. |
| Ljudje, ki potrebujejo vidne rutine | Widget in manj korakov lahko rešita konkreten trenutek. | Zelo veliko konkurence in cenovna občutljivost; kliničnih obljub nimamo podprtih. | Ločen test hitrega vnosa, ne takoj dodatno tržišče. |
| Kompleksno zdravstveno spremljanje | Močna potreba po povezavah, kar kažejo Guava/Bearable in razprave. | Večja pričakovanja glede točnosti, zasebnosti in povezav z medicinskimi zapisi. | Za prvo splošno različico bi ga odložil. |

**Začetni celoten tok:** nastavi BJJ urnik, članarino in način prevoza → zabeleži opravljen trening prek widgeta ali appa → po želji dodaj runde/tehnike z besedilom → vidi čas, napredek in ocenjene povezane stroške → popravi ali izbriši dogodek → tedenski pregled pove nekaj uporabnega.

Prehranski katalog, bančna povezava, medicinski nasveti, social feed in optimizacija vseh področij niso potrebni za dokaz tega prvega toka. Zasnovo lahko pripravimo modularno, brez implementacije vsega vnaprej.

**Pomembna produktna slabost prvotnega primera:** dodatnih nekaj ocenjenih kalorij zaradi rund morda uporabniku ni dovolj pomembnih. Če kupce dejansko zanima napredek tehnik in konsistentnost, mora biti to v ospredju. Prevoz in stroški naj ostanejo uporabni povezavi, ne obvezno dnevno opravilo za vsakogar. To mora odločiti opazovana uporaba.

## 10. Ponudba, cena in ekonomika

Obstoj brezplačnih odprtokodnih in specializiranih rešitev pomeni, da ne moremo računati, da bo uporabnik plačal že za možnost beleženja. Plačljiva vrednost bi lahko bila prihranjen čas pri nastavitvi, povezani izračuni, boljši pregled in kontinuiteta. Konkurenčna oglaševana cena ni dokaz njihove prodaje ali naše primerne cene. [Open Habit][C17], [FlowJitsu][C15], [Nomie: monetizacija][H01].

Tvoj scenarij **4,99 USD mesečno** je za zdaj cenovna hipoteza. Čista aritmetika pri stalnem številu mesečno plačujočih uporabnikov, brez popustov:

| Plačniki | Bruto obračun naročnin na mesec | Bruto obračun na leto |
|---:|---:|---:|
| 1.000 | 4.990 USD | 59.880 USD |
| 10.000 | 49.900 USD | 598.800 USD |
| 100.000 | 499.000 USD | 5.988.000 USD |

To ni neto prihodek ali dobiček in ni napoved števila kupcev. Manjkajo davki, distribucijske provizije, vračila, AI/glas, strežniki, podpora in pridobivanje uporabnikov. Predhodne ocene stroškov iz pogovora so scenariji, ne meritve produkcijskega sistema.

**Kako preverjati:** prispevek na plačnika = dejansko prejeti znesek − spremenljivi stroški uporabnika. CAC = stroški pridobivanja / novi plačniki istega obdobja in kanala. Čas povračila = CAC / mesečni prispevek. Zgodaj raje spremljamo dejanske kohorte in prejete zneske, kot da iz kratkega vzorca napovedujemo dolgo življenjsko vrednost. Uporabniški čas, ki ga ustanovitelj porabi za ročno pomoč, je prav tako strošek, četudi še ni plača.

10.000 plačnikov bi lahko pomenilo smiseln manjši posel. Samo ta scenarij še ne utemelji tveganega kapitala: za takšno pot bi morali dokazati veliko širitev, rast in vzdržno pridobivanje. **Dobro samofinancirano podjetje in hitro rastoč VC startup nista isti cilj.** To je poslovna presoja, ne univerzalen prag vlagateljev.

Za začetni test priporočam eno razumljivo ponudbo z jasno omejenim glasovnim/AI obsegom in brez neomejenih obljub. Cene in paketov ne bi dokončno zaklenil pred plačilnim testom; znižanje cene ne popravi produkta, ki ga ljudje po enem tednu opustijo.

## 11. Predlagan načrt validacije pred široko gradnjo

Naslednji pragovi so **vnaprej predlagana interna merila za odločanje**, ne industrijski benchmarki ali statistično dokazani pragovi uspeha. Pri majhnem vzorcu vedno poročamo števce in imenovalce ter razlog odhoda.

### Korak A: 15 pogovorov o obstoječem vedenju

Poišči 10 ljudi iz začetnega šport/hobi segmenta in 5 zahtevnejših uporabnikov več trackerjev; vsaj del naj bodo ljudje, ki te ne poznajo osebno. Najprej brez prodajnega prikaza. Vprašanja po vzoru nevodilnih pogovorov [Mom Test][G03] in [YC][G04]:

- Pokaži mi, kako si zabeležil zadnji trening in kje je njegov termin.
- Kdaj si zadnjič isto informacijo vpisal dvakrat ali popravljal več mest?
- Katere aplikacije si preizkusil, kaj zdaj plačuješ in zakaj si druge opustil?
- Katera informacija ti je nazadnje dejansko spremenila naslednji korak?
- Kaj se zgodi, če en teden ničesar ne beležiš?

**Nadaljuj z izbranim problemom**, če ga vsaj 8 od 15 zna pokazati na konkretnem nedavnem primeru, ne samo potrditi po predstavitvi. To še ni tržna ocena. Če ga ne, zoži opravek ali segment; ne dodajaj avtomatično novih modulov.

### Korak B: primerjalni test, preden trdimo, da smo boljši

Na istem scenariju preveri Reflect, Track & Graph, KeeperPal/LifesOS in eno specializirano BJJ aplikacijo. Platforme niso enake, zato rezultate loči po napravi. V tem poročilu ta test še ni opravljen.

1. Ustvari BJJ tracker: urnik 90 minut, runde, submissioni, tehnike, zapiski.
2. Dodaj članarino in prevoz; jasno loči obveznost od opravljenega plačila.
3. Zabeleži 60-minutno izjemo in spremenjeno število rund.
4. Preveri čas, porabo in stroške; pokaži uporabljeno pravilo in njegove predpostavke.
5. Spremeni trajanje in nato izbriši dogodek; preveri vse povezane rezultate.
6. Opravi najpogostejši ročni/widget vnos ter izvozi zgodovino.

Meri čas nastavitve, čas običajnega vnosa, korake, napake, potrebo po ponovnem vpisu in uspešnost popravkov. »Ni v dokumentaciji« ne pomeni »ne obstaja«.

### Korak C: 10–15 uporabnikov, štiritedenski delujoč pilot

Prve nastavitve lahko pripraviš ročno. Uporabnik mora vedeti, ali je nekaj pripravil človek ali AI. Potrebujemo shranjevanje, resnične vnose in popravke; maketa sama ne meri retencije. Za widget hipotezo potrebujemo dejanski iPhone widget, spletna imitacija ni enakovredna.

| Hipoteza | Predlagan začetni kriterij | Kako meriti |
|---|---|---|
| Nastavitev ni pretežka | Vsaj 8 od prvih 10 dokonča prvi celoten tok v eni vodeni seji. | Začetek → nastavitev → prvi log → razumljen rezultat; čas pomoči posebej. |
| Hitri vnos je boljši | Običajen strukturiran vnos ima mediano ≤10 sekund in največ 3 dotike po dogovorjenem začetnem zaslonu. | Ločeno widget in app; merimo tudi popravke, ne samo odpiranja obrazca. |
| Povezave imajo vrednost | Vsaj polovica pilotnih uporabnikov brez namiga pokaže korist dveh povezanih rezultatov. | Kateri dvojni vnos je odpadel ali katera odločitev se je izboljšala; nič kreditiranja za samo pogledan graf. |
| Ljudje vztrajajo | Vsaj polovica vseh vključenih uporablja osnovni tok tudi v 4. tednu brez osebnega priganjanja. | Aktivnost glede na dejanske priložnosti: tedenski BJJ uporabnik ne potrebuje dnevnega loga. Opuščene uporabnike obdržimo v imenovalcu. |
| Nekateri bodo plačali | Predlagan prvi signal: vsaj 3 dejanska plačila iz kohorte 10–15 po preizkusu. | Jasna ponudba, cena in možnost preklica; plačila znancev posebej. To ni dokaz skalabilnosti. |
| Izračuni so zanesljivi | Ni nerešenih napak pri podvajanju, izbrisu in povratnem preračunu. | Avtomatizirani testi in pregled vzorca realnih dogodkov; natančnost fiziološke ocene ocenjujemo posebej. |

Če ljudje uporabljajo samo BJJ zapiske, je to razlog raziskati ožji produkt, ne razglasiti uspeha povezane platforme. Če uporabljajo widget, ne uporabljajo pa povezav, smo za zdaj preverili hitri tracker. Če cenijo povezave, a ne plačajo, preverimo plačnika, segment in paket. Če niti s pomočjo ne vztrajajo, ustavimo širjenje funkcij in raziščimo razlog.

### Korak D: po zgodnji uporabi preveri tržno primernost

Šele pri ljudeh, ki so izkusili jedro, vprašaj, kako bi se počutili brez produkta, in odgovore segmentiraj. Superhumanov opis uporablja znano merilo 40 % zelo razočaranih uporabnikov. Uporabimo ga kot orientacijo ob zadostnem vzorcu, ne kot samodejni dokaz PMF; 4 zadovoljni prijatelji od 10 niso potrditev trga. [Opis metodologije][G09].

## 12. Največja tveganja in praktični odgovori

| Tveganje | Kako bi ga opazili | Praktičen odgovor |
|---|---|---|
| Preširok produkt | Uporabniki ne znajo povedati, zakaj bi ga odprli danes. | En opravek in en dosegljiv segment na začetku. |
| Preveč nastavljanja | Dolga konfiguracija pred prvo koristjo. | Predloge, postopno dodajanje polj in ročna pomoč v pilotu. |
| Grafi brez vrednosti | Veliko logov, nobene odločitve ali prihranka. | Meriti koristen rezultat in zmanjšan ponovni vnos. |
| Navidezna natančnost | Kalorije, »energy score« ali denar delujejo kot meritev, čeprav so ocena. | Izvor, predpostavke, popravljivi parametri in vidna oznaka ocene. |
| Napačna avtomatika | Podvojeni treningi, članarina pri vsakem treningu, prevoz tudi pri online aktivnosti. | En izvorni dogodek, preverjena pravila in ločene vrste obveznosti/plačil/ocen. |
| Nezaupanje | Uporabnik ne želi vseh področij v istem računu. | Zbiraj samo potrebne podatke, jasen izvoz/izbris in razumljiva izbira AI obdelave. |
| Integracijska odvisnost | Dostop omejen, popravki se ne prenesejo, partner zapre API. | Ne pogojuj začetne koristi z vsemi integracijami; vsako preveri tehnično in pogodbeno. Moves je konkreten zgodovinski primer izgube API. |
| Nizka retencija in odpor do cene | Ljudje aplikacijo pohvalijo, nato nehajo beležiti ali plačati. | Majhen plačljiv pilot in pregled odhodov pred večjim oglaševanjem. |

Pri AI predlaganih parametrih mora biti ločeno, kaj je raziskana privzeta vrednost, kaj podatek uporabnika in kaj modelova domneva. »Močnejši AI je našel povprečje« samo po sebi še ne potrdi veljavnosti formule za posameznika. To je zahteva po kakovosti produkta, ne priporočilo konkretnih zdravstvenih parametrov.

## 13. Končna ocena in naslednja odločitev

**Ideja ima dovolj konkretnih signalov za majhen pilot. Raziskava ne podpira trditve, da takšnega pristopa še nihče nima, niti da je trg že potrjen.** Novi najpomembnejši primerjalniki so Reflect, Track & Graph, Sink, Trackables.me, Trackly ter specializirani BJJ dnevniki.

Največja priložnost je sestaviti dele v izkušnjo, ki jo uporabnik hitro razume in redno uporablja: malo nastavitev, malo dotikov, en vnos, pravilne posledice in preprost popravek. Največja nevarnost je graditi zelo široko platformo, preden izvemo, katero povezavo ljudje sploh potrebujejo dovolj pogosto, da jo uporabljajo in plačajo.

**Priporočen naslednji korak:** primerjalni test Reflecta in enega BJJ dnevnika, nato pogovori in štiritedenski pilot enega povezanega toka. Šele rezultati odločijo, ali širimo v prehrano, dodatne hobije in optimizacijo rutin.

## 14. Register virov

Povezave v besedilu vodijo neposredno na uporabljene strani. Produktni viri so pretežno samoopisi ponudnikov, uporabniški viri so anekdote, vodiči pa svetovalni modeli. Poročilo ne uporablja ocen prenosov ali oglaševalskih market-size številk kot dokaza trga.

### Produkti in nadomestne rešitve

- C01 — No Translation Layer, **Track Anything with Reflect**, 12. 10. 2023: [vir](https://ntl.ai/2023/10/12/track-anything-with-reflect/)
- C02 — Ekipa Reflect, **Custom Metric Formulas**, razvijalska objava: [vir](https://www.reddit.com/r/QuantifiedSelf/comments/1icc5lu/custom_metric_formulas_in_reflect_track_anything/)
- C03 — Reflect, opis in zgodovina različic App Store: [vir](https://apps.apple.com/us/app/reflect-track-anything/id6463800032)
- C04 — Track & Graph, **Functions**: [vir](https://samamco.github.io/track-and-graph/tutorial/functions/)
- C05 — Track & Graph, uradni repozitorij: [vir](https://github.com/SamAmco/track-and-graph)
- C06 — Sink, App Store: [vir](https://apps.apple.com/us/app/sink-habit-event-tracker/id6448770654)
- C07 — Trackables.me, uradna stran: [vir](https://trackables.me/)
- C08 — Trackly, uradna stran: [vir](https://trackly.today/)
- C09 — Drugi izdelek s podobnim imenom, Trackables: Health Dashboard: [vir](https://apps.apple.com/us/app/trackables-health-dashboard/id6745567488)
- C10 — Bearable, **What are Factors?**: [vir](https://bearable.app/support/tips/what-are-factors/)
- C11 — Bearable, **How to find correlations**: [vir](https://bearable.app/support/howto/how-to-find-correlations/)
- C12 — Guava, **Health Insights**: [vir](https://guavahealth.com/health-insights)
- C13 — Lifestack.ai: [vir](https://lifestack.ai/)
- C14 — Lifestack.ai, **Introducing Lifestack**: [vir](https://lifestack.ai/blog/introducing-lifestack)
- C15 — FlowJitsu: [vir](https://flowjitsu.app/)
- C16 — BJJBuddy, App Store: [vir](https://apps.apple.com/us/app/bjjbuddy-bjj-tracker-journal/id1063025257)
- C17 — Open Habit, uradni repozitorij: [vir](https://github.com/zamai/open-habit)
- C18 — Lifestack.pro, istovetnost z .ai nepotrjena: [vir](https://lifestack.pro/)
- C19 — Lifestack.pro, roadmap: [vir](https://lifestack.pro/roadmap)
- C20 — KeeperPal: [vir](https://www.keeperpal.com/)
- C21 — LifesOS: [vir](https://lifesosapp.com/)
- C22 — Notion, **Relations & rollups**: [vir](https://www.notion.com/help/relations-and-rollups)
- C23 — Coda, **Basics of Coda formulas**: [vir](https://help.coda.io/hc/en-us/articles/39555858394637-Basics-of-Coda-formulas)
- C24 — Coda, **Automations**: [vir](https://help.coda.io/hc/en-us/articles/39555778179853-Automations-in-Coda)
- C25 — Apple, **Create a new personal automation**: [vir](https://support.apple.com/en-mide/guide/shortcuts/apdfbdbd7123/ios)

### Zgodovina in javne razprave

- H01 — Nomie, izjava ustanovitelja in obvestilo o zaprtju, januar 2023: [vir](https://www.nomie.app/)
- H02 — Metriport, ustanoviteljska objava o začetnem produktu, januar 2022: [vir](https://www.reddit.com/r/Entrepreneur/comments/s47q45/what_we_learned_from_quitting_our_jobs_and/)
- H03 — Metriport, današnji uradni repozitorij: [vir](https://github.com/metriport/metriport)
- H04 — Facebook, **Hello. tbh, We're Moving On**, 2. 7. 2018: [vir](https://about.fb.com/news/2018/07/hello-tbh-moving-on/)
- H05 — Fluxtream, uradni repozitorij: [vir](https://github.com/fluxtream/fluxtream-app)
- U01 — r/QuantifiedSelf, **One app for tracking everything?**: [vir](https://www.reddit.com/r/QuantifiedSelf/comments/1lgpbf2/one_app_for_tracking_everything_not_just/)
- U02 — r/QuantifiedSelf, **App that automatically ties together all health metrics…**: [vir](https://www.reddit.com/r/QuantifiedSelf/comments/1hoaawm/app_that_automatically_ties_together_all_health/)
- U03 — r/QuantifiedSelf, **The health tracking ecosystem is so fragmented**: [vir](https://www.reddit.com/r/QuantifiedSelf/comments/1qstjdk/the_health_tracking_ecosystem_is_so_fragmented/)
- U04 — r/QuantifiedSelf, **Does anyone actually get long-term behavioral insight…**: [vir](https://www.reddit.com/r/QuantifiedSelf/comments/1tw24q7/does_anyone_actually_get_longterm_behavioral/)
- U05 — r/productivity, **Habit/fitness tracker widget for iPhone**: [vir](https://www.reddit.com/r/productivity/comments/1wva0pc/habitfitness_tracker_widget_for_iphone/)
- U06 — r/productivity, **Looking for an iOS habit tracker with a widget for counting up**: [vir](https://www.reddit.com/r/productivity/comments/1fbm5gv/looking_for_an_ios_habit_tracker_with_a_widget/)
- U07 — r/bjj, **How do you track progress?**: [vir](https://www.reddit.com/r/bjj/comments/1j40xeb/how_do_you_track_progress/)
- U08 — r/SwiftUI, razvijalska predstavitev Reflecta in odzivi: [vir](https://www.reddit.com/r/SwiftUI/comments/1fbkrfk/)
- U09 — r/nomie, obvestilo o zaprtju in migraciji: [vir](https://www.reddit.com/r/nomie/comments/zz36o1/nomie_is_shutting_down_feb_1st_2023/)
- U10 — r/nomie, javno gostovanje odprte različice, januar 2023: [vir](https://www.reddit.com/r/nomie/comments/108o9l1/)
- U11 — r/QuantifiedSelf, tedenska predstavitvena tema aplikacij: [vir](https://www.reddit.com/r/QuantifiedSelf/comments/1xmk0z1/weekly_lifestyle_data_and_analytics_app_thread/)

### Raziskave in startup vodiči

- R01 — Li, Dey, Forlizzi, **A Stage-Based Model of Personal Informatics Systems**, CHI 2010: [vir](https://www.ianli.com/publications/2010-ianli-chi-stage-based-model.pdf)
- R02 — Epstein et al., **Beyond Abandonment to Next Steps**, CHI 2016: [vir](https://homes.cs.washington.edu/~jfogarty/publications/chi2016-abandonment.pdf)
- G01 — Paul Graham, **How to Get Startup Ideas**, november 2012: [vir](https://paulgraham.com/startupideas.html)
- G02 — YC / Michael Seibel, **How to Plan an MVP**: [vir](https://www.ycombinator.com/library/6f-how-to-plan-an-mvp)
- G03 — Rob Fitzpatrick, **The Mom Test**, uradna stran: [vir](https://www.momtestbook.com/)
- G04 — YC / Eric Migicovsky, **How to Talk to Users**, uradno predavanje: [vir](https://www.youtube.com/watch?v=MT4Ig2uqjTc)
- G05 — Eric Ries, **The Lean Startup: Methodology**: [vir](https://theleanstartup.com/principles)
- G06 — Paul Graham, **Do Things That Don't Scale**, julij 2013: [vir](https://www.paulgraham.com/ds.html)
- G07 — Christensen Institute, **Jobs to Be Done Theory**: [vir](https://www.christenseninstitute.org/theory/jobs-to-be-done/)
- G08 — Sam Altman, **Startup Playbook**: [vir](https://playbook.samaltman.com/)
- G09 — Rahul Vohra, **How Superhuman Built an Engine to Find Product Market Fit**, 12. 11. 2018: [vir](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/)

[C01]: https://ntl.ai/2023/10/12/track-anything-with-reflect/
[C02]: https://www.reddit.com/r/QuantifiedSelf/comments/1icc5lu/custom_metric_formulas_in_reflect_track_anything/
[C03]: https://apps.apple.com/us/app/reflect-track-anything/id6463800032
[C04]: https://samamco.github.io/track-and-graph/tutorial/functions/
[C05]: https://github.com/SamAmco/track-and-graph
[C06]: https://apps.apple.com/us/app/sink-habit-event-tracker/id6448770654
[C07]: https://trackables.me/
[C08]: https://trackly.today/
[C09]: https://apps.apple.com/us/app/trackables-health-dashboard/id6745567488
[C10]: https://bearable.app/support/tips/what-are-factors/
[C11]: https://bearable.app/support/howto/how-to-find-correlations/
[C12]: https://guavahealth.com/health-insights
[C13]: https://lifestack.ai/
[C14]: https://lifestack.ai/blog/introducing-lifestack
[C15]: https://flowjitsu.app/
[C16]: https://apps.apple.com/us/app/bjjbuddy-bjj-tracker-journal/id1063025257
[C17]: https://github.com/zamai/open-habit
[C18]: https://lifestack.pro/
[C19]: https://lifestack.pro/roadmap
[C20]: https://www.keeperpal.com/
[C21]: https://lifesosapp.com/
[C22]: https://www.notion.com/help/relations-and-rollups
[C23]: https://help.coda.io/hc/en-us/articles/39555858394637-Basics-of-Coda-formulas
[C24]: https://help.coda.io/hc/en-us/articles/39555778179853-Automations-in-Coda
[C25]: https://support.apple.com/en-mide/guide/shortcuts/apdfbdbd7123/ios
[H01]: https://www.nomie.app/
[H02]: https://www.reddit.com/r/Entrepreneur/comments/s47q45/what_we_learned_from_quitting_our_jobs_and/
[H03]: https://github.com/metriport/metriport
[H04]: https://about.fb.com/news/2018/07/hello-tbh-moving-on/
[H05]: https://github.com/fluxtream/fluxtream-app
[U01]: https://www.reddit.com/r/QuantifiedSelf/comments/1lgpbf2/one_app_for_tracking_everything_not_just/
[U02]: https://www.reddit.com/r/QuantifiedSelf/comments/1hoaawm/app_that_automatically_ties_together_all_health/
[U03]: https://www.reddit.com/r/QuantifiedSelf/comments/1qstjdk/the_health_tracking_ecosystem_is_so_fragmented/
[U04]: https://www.reddit.com/r/QuantifiedSelf/comments/1tw24q7/does_anyone_actually_get_longterm_behavioral/
[U05]: https://www.reddit.com/r/productivity/comments/1wva0pc/habitfitness_tracker_widget_for_iphone/
[U06]: https://www.reddit.com/r/productivity/comments/1fbm5gv/looking_for_an_ios_habit_tracker_with_a_widget/
[U07]: https://www.reddit.com/r/bjj/comments/1j40xeb/how_do_you_track_progress/
[U08]: https://www.reddit.com/r/SwiftUI/comments/1fbkrfk/
[U09]: https://www.reddit.com/r/nomie/comments/zz36o1/nomie_is_shutting_down_feb_1st_2023/
[U10]: https://www.reddit.com/r/nomie/comments/108o9l1/
[U11]: https://www.reddit.com/r/QuantifiedSelf/comments/1xmk0z1/weekly_lifestyle_data_and_analytics_app_thread/
[R01]: https://www.ianli.com/publications/2010-ianli-chi-stage-based-model.pdf
[R02]: https://homes.cs.washington.edu/~jfogarty/publications/chi2016-abandonment.pdf
[G01]: https://paulgraham.com/startupideas.html
[G02]: https://www.ycombinator.com/library/6f-how-to-plan-an-mvp
[G03]: https://www.momtestbook.com/
[G04]: https://www.youtube.com/watch?v=MT4Ig2uqjTc
[G05]: https://theleanstartup.com/principles
[G06]: https://www.paulgraham.com/ds.html
[G07]: https://www.christenseninstitute.org/theory/jobs-to-be-done/
[G08]: https://playbook.samaltman.com/
[G09]: https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/
