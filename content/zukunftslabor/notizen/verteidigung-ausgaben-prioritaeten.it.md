+++
title = "Difesa: che cosa compra il franco svizzero della difesa?"
description = "La Svizzera spende lo 0,706% del PIL per la difesa. Il 58% va al personale, ma la popolazione chiede cyber e aiuto in caso di catastrofe."
slug = "verteidigung-ausgaben-prioritaeten"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "12_neutralitaet_verteidigung"
pillar = "neutralitaet-frieden"
category = "datenbriefing"
evidence = "mittel"
tags = ["difesa", "bilancio", "esercito", "sicurezza", "milizia"]
charts = ["verteidigung_ch_trend.svg", "verteidigung_vergleich.svg", "verteidigung_pro_soldat.svg", "verteidigung_prioritaeten_luecke.svg"]
+++

La Svizzera spende lo 0,706% del PIL per la difesa (2023). L'effettivo di
milizia (140'000) vincola il 58% del bilancio al personale. Cyber e aiuto in
caso di catastrofe, priorità assolute per la popolazione (82%/88%), ricevono
ciascuno solo il 3-4%.


<!-- more -->

---

## Metodologia

Spese per la difesa in percentuale del PIL: Banca mondiale / SIPRI (2000–2023,
8 Paesi). Costi per soldato: IISS Military Balance 2024.
Allocazione del bilancio: DDPS, Messaggio sull'esercito 2024, categorie semplificate.
Priorità della popolazione: studio «Sicurezza» 2024 del CSS del PF di Zurigo.

---

### Andamento della spesa svizzera

{% chart(spec="verteidigung_ch_trend", alt="Spese svizzere per la difesa in percentuale del PIL nel tempo") %}
Dagli anni Novanta le spese svizzere per la difesa sono diminuite costantemente e oggi si situano nettamente sotto l'1% del PIL. L'attuale pressione politica per un aumento contrasta con una tendenza al risparmio durata decenni: la domanda non è solo «quanto di più», ma «per che cosa».
{% end %}

---

### Confronto internazionale

{% chart(spec="verteidigung_vergleich", alt="Spese per la difesa in percentuale del PIL nel confronto internazionale") %}
Nel confronto internazionale la Svizzera si colloca in fondo alla classifica: sotto l'obiettivo NATO del 2% e sotto la maggior parte dei vicini europei. Va però considerato che la Svizzera non ha obblighi di alleanza, il che relativizza il confronto diretto, ma non riduce le lacune di capacità.
{% end %}

---

### Costi per soldato attivo

{% chart(spec="verteidigung_pro_soldat", alt="Costi per soldato attivo nel confronto tra Paesi") %}
Il modello di milizia determina una struttura dei costi particolare: la Svizzera conta 140'000 militari, ma la maggior parte presta servizio di milizia. I costi per soldato sono inferiori a quelli degli eserciti professionali; in compenso, i costi del personale vincolano il 58% del bilancio complessivo e lasciano poco margine per la modernizzazione.
{% end %}

---

### Bilancio e priorità della popolazione

{% chart(spec="verteidigung_prioritaeten_luecke", alt="Allocazione del bilancio rispetto alle priorità della popolazione") %}
Lo scarto tra l'allocazione del bilancio e le priorità della popolazione è vistoso: la sicurezza informatica e l'aiuto in caso di catastrofe sono considerati prioritari dall'82–88% della popolazione, ma ricevono ciascuno solo il 3–4% del bilancio. La difesa nazionale classica assorbe la maggior parte dei fondi, benché la percezione delle minacce sia cambiata.
{% end %}

---

## Limiti

- Effettivo di milizia ≠ equivalenti a tempo pieno (i costi per militare non sono direttamente confrontabili)
- Categorie di bilancio del DDPS presentate in forma semplificata
- Priorità della popolazione: sondaggio (non ponderato in base alla competenza in materia di sicurezza)
- Dati SIPRI: differenze di definizione delle spese per la difesa tra i Paesi

---

## Fonti dei dati

- Banca mondiale / SIPRI: Military expenditure (% of GDP), 2000–2023
- IISS: Military Balance 2024 — effettivi e bilanci
- DDPS: Messaggio sull'esercito 2024 — allocazione del bilancio
- CSS del PF di Zurigo: Sicherheit 2024 — formazione dell'opinione in materia di politica di sicurezza
