# ReLog pitch - 18. november 2026

Končni dokument: [ReLog-Pitch-2026-11-18.pdf](../../output/pdf/ReLog-Pitch-2026-11-18.pdf).

Osem slajdov v slovenščini, 16:9. Vidni del povzema produkt, potrebe, widgete, BJJ primer, hibridni AI in matematično jedro, konkurenco, zgodovino, ceno, ekonomiko in pridobivanje strank. Podrobne predhodne raziskave in predpostavke so vključene v osem PDF besedilnih opomb, dostopnih prek ikone ob številki strani v pregledovalniku, ki podpira anotacije. Zunanje povezave so tudi neposredno na slajdih. Opombe ne povečajo števila strani.

## Ponovitev izvoza

Potrebujemo macOS, Node.js 22+, Google Chrome in Swift z ogrodjema PDFKit/AppKit. Ni novih paketov ali skrivnih ključev. Običajni presentations artifact runtime ni bil na voljo, zato je dokument neposredno izpisan prek Chroma in dokončan s PDFKit. PDF ima izbirljivo besedilo; ne dobavljamo PPTX.

Iz korena projekta:

1. V ločenem terminalu zaženi `npm run dev` iz `sites/relog-motion`.
2. Zaženi `node design/pitch-2026-11-18/notes.mjs`.
3. Zaženi `node design/pitch-2026-11-18/export.mjs`.
4. Zaženi `swift -module-cache-path /private/tmp/relog-pitch-swift-cache design/pitch-2026-11-18/finalize.swift work/relog-pitch/pitch-unannotated.pdf work/relog-pitch/notes.json output/pdf/ReLog-Pitch-2026-11-18.pdf work/relog-pitch`.
5. Preveri vseh osem `work/relog-pitch/pdf-N.png` in ustavi strežnik.

Izvoz zajame dejanski začetni zaslon prototipa z izmišljenimi podatki. Ne spreminja aplikacije ali produkcijskih podatkov. Brskalniške predoglede, geometrijo in izvlečeno PDF besedilo shrani v `work/relog-pitch/`. Vsak kodni modul je krajši od 300 vrstic.

## Viri, predpostavke in status

`notes.mjs` vključi aktualne lokalne povzetke in raziskovalna poročila. Časovno občutljive informacije so prikazane kot raziskane 18. novembra 2026; stare cenovne ocene so v opombah izrecno označene kot predpostavke. Cenovni test 7,99 EUR je predlog iz nadaljnjega pogovora, ne potrjena sprememba paketa. Številke pilotnih mejnikov niso traction, 10.000 plačnikov ni napoved. AI, native widgeti in produkcijska hramba še niso implementirani.

## Vizualni viri

- `assets/relog-prototype.png`: neposreden zajem lokalnega ReLog prototipa; izmišljeni podatki.
- `assets/editorial-still-life.png`: ilustrativna fotografija, ustvarjena z vgrajenim imagegen orodjem za ta pitch. Ne predstavlja dejanskega uporabnika ali dogodka. Izvorna slika je ohranjena; asset je kopiran v projekt.
- Tipografija: Georgia in Arial, preverjeni lokalni pisavi; paleta sledi obstoječi ReLog smeri.

Prompt za sliko (vgrajeni način):

> Use case: photorealistic-natural. Asset type: editorial still-life photograph for the right half of a sophisticated startup pitch cover, landscape 4:3 image. Primary request: a quiet, beautifully composed everyday-life still life suggesting the connection between a sporting hobby, food, time and money. On warm ivory plaster surface: folded faded lavender Brazilian jiu-jitsu belt and cream training towel, a green pear, one short curled unbranded receipt with indistinct tiny marks, and a plain small paper calendar with a sparse grid but no legible dates. Arrange objects in a sculptural flowing composition on the right two thirds, with generous empty sand-coloured space to the left and above. Premium independent magazine photography, tangible natural materials, soft directional late afternoon light and subtle shadows. Palette warm sand #F1E6D0, lavender #DDE0EE, muted sage #DDE5D3 and terracotta #A95D48. No smartphone, no fake app screen, no charts, no logos, no readable text, no watermark, no people. Honest understated editorial photography, not a glossy AI-tech advertisement.

## Dopolnitev PDF-ja

Na izrecno zahtevo uporabnika sta na konec dodani strani 7 (poslovni model) in 8 (Lean Canvas). To nadomesti prvotno omejitev šestih strani. Vsebina prvih šestih ostaja enaka, številčenje zdaj kaže /08. Prvotna šeststranska kopija je ohranjena v `work/relog-pitch/base-six-pages.pdf`.

`appendix.html` in `appendix.css` sta izvor dodatka, vključenega v `deck.html`. Izvoz samodejno osveži dodatek v sestavljenem `deck.html`. Za izvoz z že shranjeno sliko prototipa uporabi `node design/pitch-2026-11-18/export.mjs --reuse-prototype`; ta način ne potrebuje lokalnega strežnika aplikacije. Nato zaženi običajni `finalize.swift`, ki zahteva osem strani in osem popolnih opomb.
