+++
title = "Raddoppiare la densità di robot: che cosa significherebbero 600 robot invece di 294"
description = "La Svizzera conta 294 robot industriali ogni 10'000 addetti, meno di Germania o Giappone. La ricerca mostra che più robot aumentano la produttività. Se vadano persi posti di lavoro dipende molto da come viene organizzata la transizione."
slug = "roboterdichte-verdoppeln"
date = 2026-11-08
template = "notiz.html"

[extra]
code_path = "output/datenbriefings-2026-11/roboterdichte-verdoppeln"
data = "roboterdichte-verdoppeln.csv"
category = "datenbriefing"
evidence = "mittel"
tags = ["robotica", "industria", "produttività", "occupazione", "ifr"]
charts = ["roboter_dichte_vergleich.svg", "roboter_industrie_beschaeftigung.svg", "roboter_industrie_anteil.svg"]
pillar = "robotik"
+++

Con 294 robot industriali ogni 10'000 addetti, nel 2024 la Svizzera rientra di poco nei primi 10 al mondo, ma resta nettamente dietro a Corea del Sud (1'220), Singapore (818), Germania (449) e Giappone (446). Un raddoppio a circa 600 porterebbe la Svizzera davanti alla Germania. Dal 2010 l'industria occupa in modo piuttosto stabile tra 630'000 e 650'000 persone, ma la sua quota sul totale degli occupati diminuisce. Studi su Paesi comparabili mostrano chiari guadagni di produttività grazie ai robot; l'effetto sull'occupazione è eterogeneo e dipende da come avviene la trasformazione.

<!-- more -->

---

## Metodologia

La densità di robot proviene dal World Robotics Report 2025 della International Federation of Robotics (IFR): robot industriali installati ogni 10'000 addetti nell'industria manifatturiera, stato 2024. Secondo l'IFR, i valori per la Cina si basano su dati rivisti del mercato del lavoro e non sono confrontabili con le edizioni precedenti; per questo motivo non presentiamo una serie temporale della densità di robot. L'occupazione proviene dalla Rilevazione sulle forze di lavoro in Svizzera (RIFOS) dell'UST, sezioni B–E (industria, attività estrattive, approvvigionamento energetico e idrico). Fino al 2009 si tratta di valori del 2° trimestre, dal 2010 di medie annue; la discontinuità è visibile nel grafico. Gli effetti dei robot sono ripresi da studi sottoposti a revisione paritaria su altri Paesi; per la Svizzera non esiste un'analisi comparabile.

---

### La Svizzera a confronto

{% chart(spec="roboter_dichte_vergleich", alt="Densità di robot 2024 per Paese, con l'obiettivo di una densità svizzera raddoppiata") %}
Con 294 la Svizzera supera la media UE (231) e la media mondiale (132), ma resta al di sotto di Paesi con un livello salariale altrettanto elevato e una forte industria d'esportazione come Germania, Giappone, Svezia e Danimarca. Un obiettivo di circa 600 (il doppio del valore 2024) è ambizioso, ma resta chiaramente al di sotto di Corea del Sud e Singapore. Proprio un Paese ad alti salari con carenza di personale qualificato ha buone ragioni per automatizzare la produzione invece di delocalizzarla.
{% end %}

---

### Occupazione industriale: stabile in cifre assolute

{% chart(spec="roboter_industrie_beschaeftigung", alt="Occupati nell'industria e nelle attività estrattive in Svizzera dal 1991 al 2025") %}
Dal 1991 al 2004 il numero di occupati nelle sezioni B–E è sceso da circa 798'000 a 634'000. Da allora oscilla in una fascia ristretta; nel 2025 erano 633'600. L'industria non è dunque scomparsa: da due decenni mantiene la propria occupazione in cifre assolute.
{% end %}

---

### Quota dell'industria: in lento calo

{% chart(spec="roboter_industrie_anteil", alt="Quota dell'industria e delle attività estrattive sul totale degli occupati dal 1991 al 2025") %}
Poiché l'occupazione complessiva è cresciuta (2025: 4,89 milioni di occupati), la quota dell'industria è scesa dal 21,2 per cento (1991) al 13,0 per cento (2025). Più automazione non deve necessariamente accelerare questa tendenza: dove la produzione resta nel Paese o vi ritorna grazie ai robot, restano anche posti di lavoro nella pianificazione, nella manutenzione, nel controllo qualità e nella fornitura.
{% end %}

---

### Che cosa mostra la ricerca su robot, produttività e lavoro

- **Produttività:** in 17 Paesi tra il 1993 e il 2007 l'impiego crescente di robot ha contribuito per circa 0,37 punti percentuali alla crescita annua della produttività del lavoro, ha aumentato la produttività totale dei fattori e ridotto i prezzi dei prodotti. L'occupazione complessiva non è diminuita in modo significativo, la quota di lavoro poco qualificato invece sì (Graetz e Michaels, 2018).
- **Germania:** le perdite di posti di lavoro nell'industria dovute ai robot sono state interamente compensate da nuovi posti nel settore dei servizi. Le persone già occupate sono rimaste più spesso nella stessa azienda assumendo nuovi compiti; a essere colpiti sono stati soprattutto i giovani all'inizio della carriera, che nell'industria non sono nemmeno entrati (Dauth et al., 2021).
- **Stati Uniti:** un robot in più ogni 1'000 addetti ha ridotto, nelle regioni più colpite, il tasso di occupazione di 0,2 punti percentuali e i salari dello 0,42 per cento (Acemoglu e Restrepo, 2020).

Le differenze tra Germania e Stati Uniti mostrano che il mercato del lavoro si adatta meglio laddove le aziende formano il proprio personale e lo ricollocano internamente. Questi risultati non sono trasferibili tali e quali alla Svizzera, ma mostrano che cosa conta.

---

## Che cosa significa per la politica

- **Un obiettivo misurabile:** raddoppiare la densità di robot a circa 600 entro il 2035 e renderne conto ogni anno sulla base dei dati IFR: [Reindustrializzazione con la robotica](@/robotik.md).
- **Sostenere in modo mirato le PMI:** le grandi aziende esportatrici automatizzano da sole. La leva sta nelle PMI, ad esempio con centri di prova condivisi, modelli di leasing e consulenza.
- **Organizzare la transizione in azienda:** il modello tedesco, riqualificazione nella stessa azienda invece del licenziamento, andrebbe sostenuto con buoni di formazione continua e professioni di tirocinio per robotica e manutenzione: [Lavorare senza paura](@/uebergaenge.md).

---

## Fonti

1. International Federation of Robotics (IFR): Robot density surges in Europe, Asia and Americas (World Robotics 2025), 8 aprile 2026. https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas
2. Ufficio federale di statistica (UST), RIFOS: occupati per sezione economica (T 03.02.01.20), 1991–2025. https://www.bfs.admin.ch/asset/de/36494612
3. Graetz, G. e Michaels, G. (2018): Robots at Work. Review of Economics and Statistics 100(5), 753–768. https://doi.org/10.1162/rest_a_00754
4. Dauth, W., Findeisen, S., Suedekum, J. e Woessner, N. (2021): The Adjustment of Labor Markets to Robots. Journal of the European Economic Association 19(6), 3104–3153. https://doi.org/10.1093/jeea/jvab012
5. Acemoglu, D. e Restrepo, P. (2020): Robots and Jobs: Evidence from US Labor Markets. Journal of Political Economy 128(6), 2188–2244. https://doi.org/10.1086/705716
