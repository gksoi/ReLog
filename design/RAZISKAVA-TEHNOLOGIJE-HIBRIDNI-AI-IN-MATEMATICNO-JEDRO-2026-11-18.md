# ReLog: kako podjetja kombinirajo zmogljive modele, hitre modele in matematično jedro

**Raziskano: 18. november 2026.** Vprašanje: ali drugi uporabljajo naš princip »zmogljivejši AI nastavi, cenejši razume vnos, običajna koda izračuna« in katere tehnične vzorce je smiselno prenesti v ReLog?

## 1. Odgovor

**Da, posamezni deli tega principa so uveljavljeni tudi v dejanskih produktih.** Najbolj jasni javni primeri so:

- **Notion:** usmerjanje enostavnih in zahtevnih nalog na različne modele. [Auto][T01]
- **Cursor:** javno opisana ločitev načrtovanja z zmogljivim modelom in izvajanja s specializiranim modelom. To je opis arhitekture iz 2024, ne zagotovilo današnje identične izvedbe. [Engineering][T03]
- **Intuit:** izrecna kombinacija jezikovnih modelov, klasičnega ML, deterministične kode in človeških strokovnjakov glede na nalogo. [Uradna objava, oktober 2026][T04]
- **Airtable:** AI lahko pripravi formulo, izračun pa potem opravlja formula field; AI polja so ločena zmožnost. [Formule][T06], [AI polja][T07]
- **MacroFactor:** razumevanje opisa hrane je ločeno od podatkov hrane in prilagajajočega algoritma porabe. [Describe][T08], [algoritem][T09]

**Nisem našel dovolj javnih dokazov, da kateri od neposrednih univerzalnih konkurentov uporablja natančno celoten naš tok:** enkratna AI konfiguracija poljubnega trackerja in widgetov → majhen parser dnevnikov → verzioniran matematični graf za zdravje, stroške in rutine. To ostaja neznano; odsotnost dokumentacije ne pomeni, da tega nimajo.

Arhitektura je torej tehnično smiselna in ima precedense. Sama po sebi ni dokaz edinstvenosti ali tržne prednosti. Razlika bo v kakovosti nastavitev, pravilnosti popravkov, hitrosti vnosa in uporabnem rezultatu.

## 2. Kaj pomeni »pametnejši« in »neumnejši« model

Za tehnične odločitve raje uporabljajmo **zmogljiv konfiguracijski model**, **hiter model za ozko nalogo** in **deterministični izračun**. Manjši ali cenejši model ni nujno slabši pri posamezni nalogi; specializiran model lahko na svojem opravilu prehiti splošnega. Cursorjev objavljeni fast-apply model je imel 70 milijard parametrov: »specializiran« tam ni pomenilo »majhen model za telefon«. [Cursor][T03]

Ločiti moramo pet vzorcev:

| Vzorec | Kaj se zgodi | Ujemanje z ReLog |
|---|---|---|
| **Usmerjanje modelov / routing** | Sistem glede na vrsto naloge izbere model. | Nastavitev trackerja na zmogljivejšega; običajen tekstovni log na cenejšega. |
| **Zaporedje / cascade** | Najprej en model, ob določenem razlogu dražji korak. | Možnost za nejasen vnos; ni treba pri vsakem logu. |
| **Konfiguracija + izvajanje** | AI pripravi pravila ali deklarativno nastavitev; koda jih pozneje izvaja. | Jedro naše ideje. |
| **Specializacija modelov** | Različni modeli za iskanje, razvrščanje, govor, odgovor ali ekstrakcijo. | Govor → prepis; besedilo → polja; koda → izračun. |
| **Treniranje / fine-tuning** | Spreminjajo se uteži modela na učnih primerih. | Za prve trackerje ni potrebno. Shranjen JSON s parametri ni treniranje modela. |

Prav tako niso enaki **LLM**, **drug naučen ML model** in **običajna formula**. WHOOP izrecno pove, da izračuni njegovih osnovnih metrik temeljijo na strojnem učenju. Zato ga ne smemo opisati kot aplikacijo, ki ima v ozadju »samo matematiko brez AI«. [WHOOP CTO][T11]

## 3. Dokazi po podjetjih

Viri so uradne tehnične objave, dokumentacija ali lastna produktna pojasnila. S tem preverjamo, kaj podjetje javno razkrije; nimamo vpogleda v produkcijske strežnike, izvorno kodo zaprtih produktov ali njihove dejanske račune.

| Podjetje / produkt | Potrjeno v javnem viru | Kateri naš princip potrjuje | Kaj vir ne potrjuje |
|---|---|---|---|
| **Notion Auto** | Router uporablja hitre modele za enostavnejše delo in zmogljivejše za zahtevnejše; izbira temelji na evalvacijah in dovoljenih modelih. [vir][T01] | Izbira modela glede na težavnost in strošek. | Točnih velikosti modelov, internih cen, naše enkratne tracker konfiguracije. |
| **Notion Custom Agents** | Dokumentacija priporoča lažje modele za ponavljajoče se naloge, zahtevnejše pa za kompleksnejšo presojo. [vir][T02] | Ozka ponovljiva opravila ne potrebujejo vedno najboljšega modela. | Da njihov agent vsako številko računa deterministično ali da interno vedno menja model. |
| **Cursor, opis iz maja 2024** | Zmogljiv model načrtuje spremembo, specializiran fast-apply model jo vključi v datoteko. [vir][T03] | Loči težko presojo od ponovljivega izvajanja. | Da je izvajalec majhen ali da je isto zaporedje nespremenjeno danes. |
| **Intuit / QuickBooks platforma** | Izbira med LLM, ML, deterministično kodo in človekom; GenRuntime vključuje planner, executor, memory, retrieval, agente in orodja. [vir][T04], [vir][T05] | Hibridna arhitektura pri podatkih, kjer je pravilnost pomembna. | Točnega internega routerja ali tega, da LLM sam varno izmisli katerokoli finančno pravilo. |
| **Airtable** | AI pomaga sestaviti formulo; običajno formula polje izračunava vrednosti zapisov; field agents imajo ločeno AI obdelavo. [vir][T06], [vir][T07] | AI pri nastavitvi, ponovljivi izračuni pozneje brez jezikovne generacije. | Da za AI builder in polja vedno uporablja različno velike modele. |
| **MacroFactor** | Opis obroka poišče živila in količine za pregled; porabo ocenjuje ločen, verzioniran algoritem na podlagi prehranskih in telesnih podatkov. [vir][T08], [vir][T09], [vir][T10] | Jezikovni vnos in numerično prilagajanje sta ločeni odgovornosti. | Imena/velikosti parserja, popolne interne implementacije in našega hobi → finance grafa. |
| **WHOOP Coach** | CTO opisuje razvrščanje vprašanj, notranje modele, zunanjega LLM, pridobivanje podatkov in ponovno oblikovanje odgovora. [vir][T11] | Več specializiranih komponent in orodij namesto enega poziva za vse. | Jedra brez ML ali konfiguracije, ki se pokliče samo ob novem trackerju. |
| **Oura Advisor** | Generativni AI povezuje z algoritmi zaznavanja zdravja in biometrično zgodovino; 2026 opiše lasten model za žensko zdravje na lastni infrastrukturi. [vir][T12] | Domensko znanje, podatki in AI pogovor so različne plasti. | Razdelitve na velik in majhen model po našem scenariju; velikost in stroški niso objavljeni. |
| **Intercom / Fin** | Retrieval → specializiran reranker → generiranje; objavili so lasten reranker in postopke evalvacije. [vir][T13], [vir][T14] | Ozko specializirane komponente, merjenje kakovosti in stroškov. | Determinističnega tracker jedra; to ni life-tracking produkt. |
| **Track & Graph** | Vizualni graf izpeljanih podatkov, združevanje trackerjev in funkcije; dokumentirane tudi Lua razširitve. [vir][T15], [vir][T16] | Matematični graf med meritvami že obstaja brez potrebe po pogovornem modelu za vsak izračun. | Javno potrjene delitve na konfiguracijski AI in parser. |
| **Reflect — Track Anything** | Tipizirane poljubne meritve, obrazci in formule; App Store navaja lokalno shranjevanje in analizo. [vir][T17], [vir][T18], [vir][T19] | Lokalna analiza in formule kot samostojno uporabno jedro. | Njegovega internega LLM sklada, model routinga ali uporabljenega podatkovnega ogrodja. |

### 3.1 Najbližji precedens za »AI nastavi, koda izvaja«: Airtable

Airtable razlikuje med formulo, ki jo AI pomaga napisati, in AI poljem, ki generira rezultat ob obdelavi zapisa. Prvo ustreza naši zamisli shranjene nastavitve; drugo pomeni ponovljene AI stroške. Za ReLog je pomembno, da se polje »strošek poti« ne spremeni v AI generacijo pri vsakem treningu samo zato, ker je AI pomagal nastaviti tracker. [Formule][T06], [AI polja][T07]

Izpeljava za nas: AI naj izbere dovoljena pravila in vnese parametre. Program mora preveriti enote, odvisnosti in veljavnost. Ne potrebujemo poljubne AI napisane JavaScript kode, ki bi jo potem izvajali z uporabniškimi podatki.

### 3.2 Najbližji precedens v prehrani: MacroFactor

Uradni Describe opisuje iskanje splošnih živil po besedilu ali glasu ter pregled izbranih količin pred shranitvijo. Ločena dokumentacija opisuje porabo in verzije algoritma. To podpira **ločitev razumevanja vnosa, podatkovne baze in numeričnega modela**. [Describe][T08], [V3][T09], [verzije][T10]

Ne sklepamo, da poznamo njihove pozive, točen model, ceno ali celoten algoritem. Njihova metoda porabe na podlagi trendov tudi ni dokaz, da je naš popravek kalorij po rundah fiziološko potrjen. Deterministična koda lahko povsem dosledno izračunava slabo oceno.

### 3.3 Najbolj podroben primer v wearables: WHOOP

Objava CTO iz septembra 2023 opiše večstopenjski tok: ugotovitev vrste vprašanja, izluščenje tem in datumov, pridobitev relevantnih uporabniških podatkov, dopolnitev konteksta in oblikovanje odgovora. Osnovne metrike so iz drugih ML algoritmov. To je dokumentiran zgodovinski hibrid, ne dokaz trenutnih modelov ali izključnega računanja s formulami. [Razlaga arhitekture][T11]

Za ReLog je uporaben predvsem vzorec **model naj zahteva ustrezne podatke, sistem pa mu jih omejeno pripravi**. Ni smiselno vsakemu parserju pošiljati celotne življenjske zgodovine.

### 3.4 Intercom: specializiraj šele na podlagi meritev

Fin javno opisuje lastno iskanje in razvrščanje rezultatov pred generiranjem odgovora. V objavi o rerankerju navaja 80-odstotno znižanje stroška te komponente; to je njihova lastna meritev, ne prihranek celotnega AI produkta in ne napoved za ReLog. [Reranker][T13], [retrieval][T14]

Za nas: najprej zberi primere napak in stroške posameznega opravila. Lasten fine-tuned model ima smisel šele, ko obseg, kakovost in prihranek upravičijo treniranje ter vzdrževanje.

## 4. Kaj vemo o tehnologiji neposrednih konkurentov

| Produkt | Kaj lahko odgovorno navedemo | Česa ne smemo ugibati |
|---|---|---|
| Track & Graph | Javni repozitorij in dokumentiran graf funkcij/Lua omogočata precej več tehničnega vpogleda kot marketinška stran. [Repo][T16] | Iz tega ne izpeljujemo tehnologije iPhone aplikacije ali njihovega AI, ki ni potrjen. |
| Reflect, No Translation Layer | Razvijalec opisuje obrazce, tipizirane meritve in formule; trgovina navaja lokalno analizo. [vir][T17], [vir][T18], [vir][T19] | Ne zamenjuj z drugimi izdelki »Reflect«, npr. reflect.chat; njihovi pravilniki ne opisujejo te aplikacije. |
| KeeperPal, LifesOS, Visualife | Iz prejšnjega pregleda poznamo javne produktne zmožnosti. | V pregledanih virih ni dovolj podrobnosti za potrjen velik/majhen model, runtime, bazo, verzioniranje pravil ali stroške infrastrukture. |
| Moduon in podobni AI builderji | Iz uporabniškega opisa vemo, da AI ustvarja orodja oziroma trackerje. | UI in beseda »AI« ne razkrijeta, ali generirajo kodo, JSON, SQL ali zgolj vsebino. |

Za lastni sistem ni treba posnemati neznanega tehnološkega sklada konkurenta. Pomembnejše so preverljive meje med odgovornostmi. Širši primerjalni kontekst je v [tržni raziskavi](MARKET-RESEARCH-DEEP-2026-11-18.md).

## 5. Priporočena ReLog arhitektura

To je predlog izvedbe, ne opis že izdelane produkcije. Obstoječi laboratorij simulira dele toka; pravi modeli, trajna hramba in iPhone widgeti še niso vključeni.

### 5.1 Nastavitev novega trackerja

**Zahteva uporabnika → zmogljivejši model + omejena raziskava → predlog konfiguracije → programsko preverjanje → razumljiv pregled → shranjena verzija.**

Shrani se:

- polja, podatkovne vrste, enote in dovoljena območja;
- predlagani widgeti iz našega kataloga in zemljevid njihovih polj;
- urnik in privzete vrednosti z jasno oznako izvora;
- identifikatorji dovoljenih formul in njihove povezave;
- parametri ter vir, datum, področje veljavnosti in negotovost;
- politika časovnih pasov, zaokroževanja in obdobij;
- verzija konfiguracije ter kaj se zgodi s preteklimi dogodki ob spremembi.

AI ne sme sam razglasiti, da je modelova domneva preverjen podatek. Članarino, razdaljo in načrt obiskov naj potrdi uporabnik; raziskana splošna cena je lahko predlog, ne avtomatsko dejanski izdatek.

**»Enkrat« naj pomeni en nastavitveni postopek**, ne nujno eno HTTP zahtevo ponudniku modela. Iskanje virov, orodja, preverjanje in ponovitev lahko pomenijo več klicev. Po uspešni nastavitvi običajni log ne potrebuje ponovne raziskave. Sprememba športa ali pravil pa je nova verzija nastavitev.

### 5.2 Dnevni vnos

**Widget / ročni obrazec → preverjeni strukturirani podatki.** Model ni potreben.

**Besedilo → hiter parser + veljavna konfiguracija + relevanten urnik → predlog strukturiranih dejstev → preverjanje.** Parser ne določa novih koeficientov ali finančnih pravil in ne izračunava končnega kcal seštevka.

Primer: »Danes pet rund, trening je bil krajši, eno uro.« Rezultat vsebuje 60 minut in 5 rund; izrecno trajanje preglasi običajnih 90 minut. Če uporabnik omeni samo 5 rund, lahko sistem ponudi trajanje iz znanega termina, vendar ohrani oznako, da je prevzeto iz urnika. »Nisem šel« ne postane opravljen trening; »pet rund včeraj, danes pavza« ne ustvari današnjega loga.

Iz pravilno oblikovanega JSON ne sledi pravilna interpretacija. Ločeno preverimo pomen, čas, enote, neznane vrednosti in konflikt z obstoječim dogodkom. Samoocena zaupanja modela ni kalibrirana verjetnost pravilnosti. Ob nejasnosti pokažemo vprašanje ali popravljiv predlog; ničesar ne zapolnimo potiho.

### 5.3 Matematično jedro

**Potrjena dejstva → izvorni dogodek s stabilnim ID → dovoljene formule → izpeljani rezultati → prikaz.**

Jedro potrebuje tipizirane operacije, odvisnosti brez ciklov, dosledne enote in transakcijski zapis. Isti vhod z isto verzijo pravil, istimi referenčnimi podatki in časovno politiko mora dati isti rezultat. Živih spletnih cen ne uporabljamo med vsakim preračunom preteklosti; vir in verzijo cene shranimo.

| Podatek | Pravilo / izvor | Kaj se sme avtomatizirati |
|---|---|---|
| Trajanje treninga | Izrecen log; sicer vidno prevzeto iz potrjenega termina. | Evidenca časa; ne dokaz fiziološke intenzivnosti. |
| Ocenjena poraba | Preverjena funkcija in parametri z označeno negotovostjo. | Izračun ocene, ne izmišljanje točne meritve. |
| Strošek prevoza | Razdalja × potrjen način stroška; samo če se je pot zgodila. | Ocena poti; ne potrjena bančna transakcija. |
| Članarina | Enkrat na obračunsko obdobje, ločeno od dogodkov treninga. | Predvidena obveznost; »plačano« samo iz potrjenega podatka. |
| Napredek | Uporabnikovi izidi, runde, tehnike in refleksija. | Seštevki in trendi; submission count ni samostojna objektivna ocena sposobnosti. |

Za BJJ se osnovna poraba in dodatek rund ne smeta podvajati: če povprečje že vključuje običajen sparing, je morebiten popravek vezan na **odmik od tega povprečja**, z usklajenim trajanjem. Tu ne določamo kcal koeficientov; potrebovali bi veljavno metodologijo in preverjanje.

Popravek ali izbris dogodka mora zamenjati njegove izpeljane prispevke, ne ponovno prišteti celotne nove vrednosti. Če dogodek prispe iz widgeta in sinhronizacije, identifikator in pravila izvora preprečijo dvojno beleženje. Načrtovan trening ni opravljen trening.

### 5.4 Pregled in načrtovanje

Seštevke izračuna koda. Če uporabnik želi besedilni report, model razloži že izračunane rezultate skupaj z virom in omejitvami. Za urnik začne preprost preverljiv planer z omejitvami časa in proračuna; AI lahko pomaga razumeti cilj ali razložiti možnosti. Ob neizvedljivih zahtevah mora sistem pokazati konflikt, ne izumiti »optimalnega« dneva. Predlog spremembe cilja ali urnika ostane predlog do potrditve.

Anthropic podoben razmislek opisuje kot razliko med vnaprej določenimi workflows in agenti, ki sami usmerjajo korake. Za vsakodnevno beleženje je predvidljiv workflow praviloma primernejši začetni predlog. [Arhitekturni vodič][T20]

## 6. Lokalna obdelava in tehnologija za iPhone

Apple Foundation Models omogoča dostop do modela na napravi; dokumentacija opisuje strukturirano generiranje in orodja. Podpora je odvisna od naprave, modela, jezikov in nastavitev; preveriti je treba dejansko razpoložljivost. **Ne moremo obljubiti vseh jezikov ali slovenščine samo zato, ker je API na voljo.** [Ogrodje][T21], [jeziki][T22], [strukturirani podatki][T23].

Ramp je objavil primer lokalnega zaznavanja/povezovanja računov z Apple Intelligence. Pri preverjanju je bila celotna stran omejeno berljiva, iskalni indeks pa je vrnil naslov in opis. Zato ga uporabljam kot **omejen primarni dokaz obstoja funkcije**, ne kot dokaz njenega celotnega podatkovnega toka, modela ali stroškov. [Objava][T24].

Predlagane meje za ReLog:

| Plast | Preprosta začetna rešitev | Zakaj |
|---|---|---|
| iPhone UI + widget | Izvorna aplikacija z WidgetKit/App Intents; skupen dostop do potrjenih podatkov. | Pogost vnos mora delovati brez čakanja na model. To je predlog, ne potrjen izbor ogrodja za celoten produkt. |
| Lokalna hramba | Transakcijska shramba za dogodke, konfiguracije in vrste čakajočih sprememb. | Offline ročni vnos in dosledni popravki. Konkretno knjižnico izberemo ob implementaciji. |
| Matematični modul | Ločen, verzioniran paket pravil z referenčnimi testnimi primeri. | UI in ponudnika modela lahko zamenjamo brez spremembe pomena podatkov. |
| Majhen backend | Overjanje, omejitev porabe, klici modelov in po potrebi sinhronizacija. | Skrivni API ključi ne sodijo v aplikacijo; lasten GPU ni potreben. |
| AI adapterji | Stabilen dogovor za `TrackerConfigProposal` in `LogProposal`; dobaviteljski adapter zunaj jedra. | Kasneje zamenjamo cloud ali lokalni parser na podlagi meritev. |

Ne priporočam lastnega treniranja velikega modela, lastnega GPU gostovanja ali zapletenega agentnega ogrodja za prvo različico. To je ekonomična izvedbena presoja, ne trditev, da je katera konkretna knjižnica nujna. Pred dodajanjem odvisnosti bi izbrali in ocenili konkretno odprtokodno rešitev.

## 7. Koliko prihrani delitev modelov?

Prihranek je treba izmeriti na celotnem opravilu, ne na ceni enega tokena. Uporaben model stroška je:

`mesečni AI strošek = nastavitve × povprečen strošek postopka + tekstovni logi × strošek parserja + eksplicitne eskalacije + govor + reporti`

Ročni in widget vnosi imajo nič modelskih klicev, še vedno pa imajo strošek razvoja, shrambe in morebitne sinhronizacije. Nastavitveni postopek lahko vključuje spletno raziskavo in več odgovorov. Dolg prompt, preveč konteksta in ponavljajoči napačni izhodi lahko izničijo prihranek majhnega modela.

Merimo: strošek **sprejetega pravilnega loga**, delež uporabniških popravkov, zakasnitev in strošek eskalacij. Na začetku bi naredil 200 anonimiziranih oziroma sintetičnih primerov različnih zapisov; posebej slovenščino, angleščino, pogovorni jezik in izpuščene podatke. Ta velikost je predlog testnega kompleta, ne merilo statističnega uspeha.

| Preverjanje | Zakaj je pomembno |
|---|---|
| Pravilen datum, zanikanje, trajanje in število rund | Veljaven JSON je lahko pomensko napačen. |
| Izrecen podatek preglasi privzetega | Krajši trening mora ostati krajši. |
| Ročni in AI vnos istih dejstev dasta isti rezultat | Model ne sme postati drugi računski sistem. |
| Urejanje, izbris, ponovitev iste zahteve | Preprečevanje podvajanja in zastarelih posledic. |
| Manjkajoče ≠ nič; ocenjeno ≠ izmerjeno | Kakovost podatkov in razumljiv prikaz. |
| Sprememba konfiguracije in izračun preteklosti | Tihe spremembe zgodovine niso sprejemljive. |
| Lokalni parser na resničnih ciljnih telefonih in jezikih | Namizni test ne potrdi izkušnje na napravi. |

## 8. Končna presoja

**Naša kombinacija ni nenavadna ali tehnično naivna.** Dokazi podpirajo routing, specializirane modele, AI pomoč pri nastavitvah in ločene računske sisteme. Najbolj neposredni precedensi za različne dele so Notion, Cursor, Intuit, Airtable in MacroFactor.

Najpomembnejša izboljšava zamisli: zmogljivejši AI naj ne bo avtor neomejene »resnice«, temveč predlagatelj **preverljive konfiguracije iz dovoljenih gradnikov**. Majhen model prevaja jezik v dejstva, koda pa zagotavlja doslednost. To zniža količino AI dela in omogoča pojasniti ter popraviti posledice.

To poročilo ne potrjuje produkcijske pripravljenosti, kalorijske veljavnosti ali konkretnega ponudnika modelov. Določa primerjalne dokaze in priporočene meje odgovornosti za naslednji izvedbeni korak.

## Viri in omejitve dostopa

Vse povezave so primarni viri podjetij ali razvijalcev. Stare objave so označene kot zgodovinske; živa pomoč se lahko spreminja. Ramp T24 je bil dostopen predvsem prek indeksiranega povzetka. Pri neposrednih konkurentih brez tehničnih objav je notranja arhitektura označena kot neznana. Trditve o relativni zmogljivosti ali prihrankih so meritve avtorjev, ne naš benchmark.

[T01]: https://www.notion.com/help/auto
[T02]: https://www.notion.com/help/guides/best-practices-for-improving-your-custom-agent
[T03]: https://cursor.com/blog/instant-apply
[T04]: https://investors.intuit.com/news-events/press-releases/detail/1329/intuit-expands-intelligence-platform-to-power-the-next-era-of-accounting-firm-and-business-growth
[T05]: https://www.intuit.com/blog/innovative-thinking/accelerating-development-velocity-with-major-enhancements-to-genos/
[T06]: https://support.airtable.com/articles/8772429326-Getting-started-with-the-Airtable-formula-field
[T07]: https://support.airtable.com/articles/8052242094-using-airtable-ai-in-fields
[T08]: https://help.macrofactorapp.com/en/articles/216-log-foods-with-describe
[T09]: https://macrofactor.com/expenditure-v3/
[T10]: https://help.macrofactorapp.com/en/articles/74-expenditure-version
[T11]: https://www.whoop.com/us/en/thelocker/behind-the-development-of-whoop-coach/
[T12]: https://ouraring.com/blog/womens-health-ai-model/
[T13]: https://fin.ai/research/how-we-built-a-world-class-reranker-for-fin
[T14]: https://fin.ai/research/finetuning-retrieval-for-fin
[T15]: https://samamco.github.io/track-and-graph/tutorial/functions/
[T16]: https://github.com/SamAmco/track-and-graph
[T17]: https://ntl.ai/2023/10/12/track-anything-with-reflect/
[T18]: https://www.reddit.com/r/QuantifiedSelf/comments/1icc5lu/custom_metric_formulas_in_reflect_track_anything/
[T19]: https://apps.apple.com/us/app/reflect-track-anything/id6463800032
[T20]: https://www.anthropic.com/research/building-effective-agents
[T21]: https://developer.apple.com/foundation-models-framework
[T22]: https://developer.apple.com/documentation/foundationmodels/supporting-languages-and-locales-with-foundation-models
[T23]: https://developer.apple.com/documentation/foundationmodels/generating-swift-data-structures-with-guided-generation
[T24]: https://engineering.ramp.com/post/apple-intelligence-receipt-matching
