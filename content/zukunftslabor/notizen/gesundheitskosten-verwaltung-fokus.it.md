+++
title = "Costi della salute: dove va il denaro e dove si disperde?"
description = "La Svizzera destina il 5,2% delle spese sanitarie all'amministrazione, nettamente sopra la media OCSE. L'eccedenza costa circa 10 CHF per persona al mese."
slug = "gesundheitskosten-verwaltung-fokus"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "08_life_science_gesundheit"
pillar = "life-science"
category = "datenbriefing"
evidence = "stark"
tags = ["salute", "costi", "amministrazione", "ocse", "efficienza"]
charts = ["gesundheit_ausgaben_kategorien.svg", "gesundheit_verwaltungsanteil_trend.svg", "gesundheit_verwaltung_international.svg", "gesundheit_verwaltungsueberschuss.svg"]
+++

La Svizzera spende 82'472 milioni di CHF per la salute
(2019), di cui il 4,03% per l'amministrazione.
Nel confronto OCSE la Svizzera, con il 5,2%, si situa ben sopra la media
(3,3%): l'eccedenza costa circa 10 CHF per persona al mese.


<!-- more -->

---

## Metodologia

Statistica dei costi del sistema sanitario dell'UST (1995–2019) secondo il
System of Health Accounts (SHA). Categorie: cure curative ambulatoriali e stazionarie,
cure di lunga durata, beni sanitari, amministrazione, prevenzione. Confronto internazionale
basato su OECD Health at a Glance 2023.

---

### Spese per categoria nel tempo

{% chart(spec="gesundheit_ausgaben_kategorien", alt="Spese sanitarie per categoria nel tempo") %}
Le spese sanitarie aumentano costantemente, ma non in modo uniforme. Mentre le cure ambulatoriali e stazionarie ne costituiscono la parte del leone, la quota amministrativa cresce in modo più che proporzionale. Ci si chiede quindi quanta parte dell'aumento dei premi vada alle cure e quanta alla burocrazia.
{% end %}

---

### Quota amministrativa nel tempo

{% chart(spec="gesundheit_verwaltungsanteil_trend", alt="Quota amministrativa delle spese sanitarie nel tempo") %}
La quota amministrativa aumenta lentamente ma costantemente. Non è un caso: il panorama assicurativo frammentato, con oltre 50 casse malati, genera costi supplementari strutturali (contabilità, marketing, selezione dei rischi) che in un sistema unico non si presenterebbero.
{% end %}

---

### Confronto internazionale

{% chart(spec="gesundheit_verwaltung_international", alt="Quota amministrativa nel confronto internazionale") %}
Per i costi amministrativi la Svizzera si situa nettamente sopra la media OCSE. Paesi con sistemi più centralizzati (p. es. gli Stati scandinavi) ottengono quote amministrative più basse con una qualità delle cure comparabile o migliore. Il confronto mostra che sono possibili guadagni di efficienza.
{% end %}

---

### Eccedenza amministrativa

{% chart(spec="gesundheit_verwaltungsueberschuss", alt="Eccedenza amministrativa rispetto alla media OCSE in CHF per persona") %}
L'eccedenza rispetto alla media OCSE si può esprimere in franchi per persona al mese. Questo denaro non va a cure, medicamenti o assistenza: finanzia strutture amministrative la cui semplificazione ridurrebbe direttamente i premi.
{% end %}

---

## Limiti

- L'armonizzazione SHA facilita i confronti, ma le differenze tra sistemi restano
- I costi amministrativi comprendono anche la garanzia della qualità e gli oneri di regolamentazione
- Cassa unica e modello concorrenziale generano costi amministrativi strutturalmente diversi
- Dati OCSE in parte sfasati nel tempo (2021–2023)

---

## Fonti dei dati

- UST: Costi e finanziamento del sistema sanitario (1995–2019)
- OCSE: Health at a Glance 2023 — Health Expenditure and Financing
- OMS: Global Health Expenditure Database
