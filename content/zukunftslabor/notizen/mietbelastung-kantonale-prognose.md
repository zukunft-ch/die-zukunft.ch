+++
draft = true
title = "Mietbelastung: Wann wird es in welchem Kanton kritisch?"
description = "Das unterste Quintil zahlt 40% für Miete. Bei aktuellen Trends überschreiten weitere Kantone die 30%-Schwelle."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["wohnen", "mieten", "kantone", "ungleichheit", "prognose"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg", "wohnen_schwelle_prognose.svg"]
+++
Das unterste Quintil zahlt 40% für Miete. Bei aktuellem Mietpreiswachstum und
1% Einkommenszuwachs überschreiten mehrere Kantone die 30%-Schwelle bis 2035.


<!-- more -->

## Methodik

BFS-Mietpreisstatistik (2000–2023, 3-Zimmer nach Kanton) und
BFS-SILC-Mietbelastungsquoten. CAGR aus 2000/2023-Verhältnis.
Schwellenprognose: Miete×(1+CAGR)^t / Einkommen×(1+1%)^t = 30%.

## Ergebnisse

![Quintile](/zukunftslabor/charts/wohnen_mietbelastung_quintile.svg)
![Kantone](/zukunftslabor/charts/wohnen_mieten_kantone.svg)
![CAGR](/zukunftslabor/charts/wohnen_mietpreiswachstum_kantone.svg)
![Prognose](/zukunftslabor/charts/wohnen_schwelle_prognose.svg)

## Einschränkungen

- CAGR extrapoliert Vergangenheitstrend
- Q1-Einkommen nicht kantonal differenziert
- Bestandsmieten (Neuvertragsmieten oft höher)

## Datenquellen

- BFS Strukturerhebung: Mietpreise nach Kanton und Zimmerzahl
- BFS SILC 2022: Mietbelastungsquote nach Quintil

