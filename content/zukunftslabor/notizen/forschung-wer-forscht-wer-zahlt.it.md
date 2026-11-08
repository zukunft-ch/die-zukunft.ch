+++
title = "Ricerca: chi fa ricerca, chi paga e che cosa ritorna?"
description = "La Svizzera è ai vertici mondiali per R&S pro capite ed efficienza brevettuale. Ma domina il settore privato, e resta aperta la questione del ritorno pubblico della ricerca pubblica."
slug = "forschung-wer-forscht-wer-zahlt"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "05_forschung_innovation"
pillar = "research-innovation"
category = "datenbriefing"
evidence = "stark"
tags = ["ricerca", "innovazione", "brevetti", "ocse", "r-e-s"]
charts = ["forschung_sektoren_zeitreihe.svg", "forschung_privat_oeffentlich_ratio.svg", "forschung_patente_effizienz.svg", "forschung_konzentration.svg"]
+++

La Svizzera investe 25,6 miliardi di CHF in R&S
(2023) e, con 182 brevetti UEB per miliardo, raggiunge la più alta
efficienza brevettuale al mondo. Ma il settore privato supera la ricerca
pubblica di 2,37 volte, e i primi 2 settori
concentrano il 45,4% della spesa.


<!-- more -->

---

## Metodologia

La base è costituita dalla statistica della ricerca dell'UST (spese intra muros di R&S per settore,
2000–2023) e dai dati sui brevetti dell'UEB (Annual Report 2023). Il
settore privato comprende farmaceutica, metallurgia, TIC, strumenti e altri
settori industriali. Settore pubblico: scuole universitarie, settore dei PF, uffici federali.

---

### Spese di R&S nel tempo

{% chart(spec="forschung_sektoren_zeitreihe", alt="Spese di R&S per settore nel tempo") %}
Il settore privato domina le spese di R&S e la sua quota cresce. Ciò testimonia una forte capacità d'innovazione, ma anche una dipendenza: se poche grandi imprese finanziano la maggior parte della ricerca, si creano punti ciechi sui temi privi di un incentivo di mercato diretto.
{% end %}

---

### Privato e pubblico

{% chart(spec="forschung_privat_oeffentlich_ratio", alt="Rapporto tra spese di R&S private e pubbliche") %}
In Svizzera il rapporto tra spese di R&S private e pubbliche è tra i più alti al mondo. Da un lato è il segno di un settore privato forte nella ricerca; dall'altro ci si chiede se la ricerca pubblica abbia abbastanza peso proprio per coprire la ricerca di base e i temi d'interesse generale.
{% end %}

---

### Efficienza brevettuale nel confronto internazionale

{% chart(spec="forschung_patente_effizienz", alt="Domande di brevetto per miliardo di spese di R&S nel confronto internazionale") %}
La Svizzera raggiunge la più alta efficienza brevettuale al mondo: più brevetti UEB per miliardo investito di qualsiasi altro Paese. Ciò indica una catena efficace dalla ricerca al sapere valorizzabile, un vantaggio di piazza che va curato.
{% end %}

---

### Concentrazione settoriale

{% chart(spec="forschung_konzentration", alt="Concentrazione delle spese di R&S su pochi settori") %}
Due settori, farmaceutica e TIC, concentrano la maggior parte della R&S privata. Ciò rende vulnerabile il panorama della ricerca: il trasferimento di una sola impresa potrebbe modificare in modo marcato la statistica complessiva. Diversificare la base della ricerca è una questione strategica.
{% end %}

---

## Limiti

- Dati UST rilevati ogni 2 anni (nessun valore annuale)
- Efficienza brevettuale: brevetti UEB come indicatore indiretto (non tutte le innovazioni sfociano in brevetti)
- Spese private di R&S in parte stimate (segreto aziendale)
- La classificazione settoriale segue la logica dell'UST (Manuale di Frascati)

---

## Fonti dei dati

- UST: Ricerca e sviluppo — spese intra muros (2000–2023)
- UEB (EPO): Annual Report 2023 — domande di brevetto per Paese d'origine
- OCSE: Main Science and Technology Indicators (GERD)
