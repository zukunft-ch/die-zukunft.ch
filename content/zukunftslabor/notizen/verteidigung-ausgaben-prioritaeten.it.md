+++
title = "Difesa: che cosa compra il franco svizzero della difesa?"
description = "Secondo il SIPRI, nel 2025 la Svizzera ha speso lo 0,76% del PIL per la difesa, meno di tutti i Paesi europei confrontati. La domanda non è solo quanto di più, ma per che cosa."
slug = "verteidigung-ausgaben-prioritaeten"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "12_neutralitaet_verteidigung"
pillar = "neutralitaet-frieden"
category = "datenbriefing"
evidence = "mittel"
tags = ["difesa", "bilancio", "esercito", "sicurezza", "milizia"]
charts = ["verteidigung_ch_trend.svg", "verteidigung_vergleich.svg", "verteidigung_pro_soldat.svg"]

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Aggiornato con i dati SIPRI 2025 (aprile 2026) e con la decisione NATO dell'Aia; il confronto dei costi per soldato si basa ancora su IISS 2023/24."

[[extra.changelog]]
date = 2026-11-08
text = "Aggiornato con i dati SIPRI 2025, aggiunto il riferimento NATO del 3,5% + 1,5% e rimossa la sezione non verificabile su bilancio e priorità della popolazione, compresa la quota del personale del 58%."
+++

Secondo il SIPRI, nel 2025 la Svizzera ha speso lo 0,76% del PIL per la
difesa (7,6 miliardi di dollari), dopo lo 0,70% del 2024. Si colloca così
sotto tutti i Paesi europei confrontati. L'esercito di milizia, con circa
140'000 militari, mantiene bassi i costi pro capite: la domanda non è quindi
solo «quanto di più», ma «per che cosa».


<!-- more -->

---

## Metodologia

Spese per la difesa in percentuale del PIL: SIPRI Military Expenditure
Database (edizione di aprile 2026, 2000–2025, 7 Paesi). Costi per soldato:
IISS Military Balance 2024 (stato 2023/24).

---

### Andamento della spesa svizzera

{% chart(spec="verteidigung_ch_trend", alt="Spese svizzere per la difesa in percentuale del PIL nel tempo") %}
Le spese svizzere per la difesa sono scese da circa l'1% del PIL (2000) allo 0,64% (2014) e da allora sono risalite allo 0,76% (2025), sempre nettamente sotto l'1% del PIL. In termini reali sono cresciute del 9,4% nel 2025 rispetto all'anno precedente (SIPRI). L'attuale pressione politica per un aumento contrasta con una tendenza al risparmio durata decenni: la domanda non è solo «quanto di più», ma «per che cosa».
{% end %}

---

### Confronto internazionale

{% chart(spec="verteidigung_vergleich", alt="Spese per la difesa in percentuale del PIL nel confronto internazionale") %}
Nel confronto internazionale la Svizzera si colloca in fondo alla classifica: nel 2025 l'Austria ha speso l'1,1% del PIL, la Francia il 2,0%, la Germania il 2,3%, la Svezia il 2,5% e la Finlandia il 2,6%. Al vertice dell'Aia (giugno 2025) i membri della NATO si sono impegnati a spendere ogni anno il 5% del PIL entro il 2035: almeno il 3,5% per le esigenze fondamentali della difesa e fino all'1,5% per spese legate alla difesa e alla sicurezza, come la protezione delle infrastrutture e la resilienza. Questo obiettivo non vale per la Svizzera neutrale e, senza obblighi di alleanza, il confronto diretto è relativo. Le lacune di capacità, tuttavia, non si riducono.
{% end %}

---

### Costi per soldato attivo

{% chart(spec="verteidigung_pro_soldat", alt="Costi per soldato attivo nel confronto tra Paesi") %}
Il modello di milizia determina una struttura dei costi particolare: la Svizzera conta circa 140'000 militari, la maggior parte dei quali presta servizio di milizia. I costi pro capite sono quindi nettamente inferiori a quelli degli eserciti professionali. I valori non sono direttamente confrontabili, perché i militi non occupano posti a tempo pieno.
{% end %}

---

## Limiti

- Effettivo di milizia ≠ equivalenti a tempo pieno (i costi per militare non sono direttamente confrontabili)
- Confronto dei costi per soldato basato sullo stato IISS 2023/24, non aggiornato
- Dati SIPRI: differenze di definizione delle spese per la difesa tra i Paesi; quote del PIL 2025 basate su stime del FMI

---

## Fonti dei dati

- SIPRI Military Expenditure Database, edizione di aprile 2026: https://www.sipri.org/databases/milex (tabella dei dati: https://www.sipri.org/sites/default/files/SIPRI-Milex-data-1949-2025.xlsx)
- SIPRI Fact Sheet «Trends in World Military Expenditure, 2025» (aprile 2026): https://www.sipri.org/sites/default/files/2026-04/2604_milex_2025.pdf
- NATO: vertice dell'Aia, 24–25 giugno 2025 (5% del PIL entro il 2035, di cui 3,5% per la difesa in senso stretto e 1,5% per spese legate alla difesa e alla sicurezza), https://www.nato.int/en/news-and-events/articles/news/2025/06/27/nato-concludes-historic-summit-in-the-hague
- IISS: Military Balance 2024 — effettivi e bilanci
