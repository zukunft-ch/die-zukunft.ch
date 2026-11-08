+++
title = "Formazione continua: chi si forma, e chi no?"
description = "Il divario nella formazione continua è enorme: le persone altamente qualificate si formano 2,6 volte più spesso di quelle poco qualificate. Proprio i settori più esposti investono troppo poco."
slug = "weiterbildung-teilnahme-luecken"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "07_uebergaenge_weiterbildung"
pillar = "uebergaenge"
category = "datenbriefing"
evidence = "mittel"
tags = ["formazione continua", "formazione", "automazione", "mercato del lavoro"]
charts = ["weiterbildung_bildungsniveau.svg", "weiterbildung_altersgruppe.svg", "weiterbildung_zeitreihe.svg", "weiterbildung_automatisierung_kreuz.svg"]
+++

La partecipazione alla formazione continua ristagna al 60%, e il divario tra
persone altamente e poco qualificate (79% contro 30%) è enorme. I settori con
un alto rischio di automazione si formano spesso meno della media.


<!-- more -->

---

## Metodologia

Dati sulla formazione continua dal Microcensimento formazione di base e continua dell'UST
(2011, 2016, 2021). Partecipazione alla formazione continua non formale (corsi,
seminari, formazioni aziendali). Dati sull'occupazione dalla RIFOS dell'UST
(2024). Rischio di automazione: IMF AI Preparedness Index 2024.

---

### Per livello di formazione

{% chart(spec="weiterbildung_bildungsniveau", alt="Partecipazione alla formazione continua per livello di formazione") %}
Le persone altamente qualificate si formano 2,6 volte più spesso di quelle poco qualificate. Questo divario è il problema centrale: chi è già ben formato continua a investire, chi ne avrebbe più bisogno resta indietro. Senza offerte mirate per le persone poco qualificate, la formazione continua accentua le disuguaglianze invece di ridurle.
{% end %}

---

### Per fascia d'età

{% chart(spec="weiterbildung_altersgruppe", alt="Partecipazione alla formazione continua per fascia d'età") %}
La partecipazione cala nettamente a partire dai 45 anni. Eppure per la fascia 45–64 la formazione continua è decisiva: queste persone devono restare ancora 15–20 anni in un mercato del lavoro in trasformazione. Il calo non è tanto un problema individuale quanto un fallimento della struttura dell'offerta aziendale e istituzionale.
{% end %}

---

### Serie temporale

{% chart(spec="weiterbildung_zeitreihe", alt="Partecipazione alla formazione continua 2011–2021") %}
Un decennio di quasi immobilità: dal 2011 la quota complessiva si aggira intorno al 60%. Nonostante il dibattito sulla digitalizzazione, i timori legati all'automazione e la retorica politica, la partecipazione effettiva alla formazione continua è cambiata poco.
{% end %}

---

### Analisi incrociata con il rischio di automazione

{% chart(spec="weiterbildung_automatisierung_kreuz", alt="Quota di formazione continua e rischio di automazione per settore") %}
Il risultato più critico: i settori con il rischio di automazione più elevato presentano spesso la quota di formazione continua più bassa. I settori più esposti investono meno di tutti nella capacità di adattamento delle loro lavoratrici e dei loro lavoratori: un rischio strutturale che richiede un intervento politico.
{% end %}

---

## Limiti

- Il Microcensimento dell'UST viene rilevato solo ogni 5 anni
- Le quote di formazione continua per settore sono in parte stimate
- La qualità della formazione continua non è rilevata (solo la partecipazione)
- Correlazione ≠ causalità

---

## Fonti dei dati

- UST: Microcensimento formazione di base e continua 2011, 2016, 2021
- UST: RIFOS 2024 — occupati per sezione economica
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)
