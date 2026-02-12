+++
title = "Mietbelastung: Wann wird es in welchem Kanton kritisch?"
description = "Das unterste Quintil zahlt 40% für Miete. Bei aktuellen Trends überschreiten weitere Kantone die 30%-Schwelle."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"
draft = true

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["wohnen", "mieten", "kantone", "ungleichheit", "prognose"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg", "wohnen_schwelle_prognose.svg"]
+++

Das unterste Quintil zahlt 40% für Miete. Bei aktuellem Mietpreiswachstum und
1% Einkommenszuwachs überschreiten mehrere Kantone die 30%-Schwelle bis 2035.


<!-- more -->

---

## Methodik

BFS-Mietpreisstatistik (2010–2023, 3-Zimmer nach Kanton) und
BFS-SILC-Mietbelastungsquoten. CAGR aus 2010/2023-Verhältnis.
Schwellenprognose: Miete×(1+CAGR)^t / Einkommen×(1+1%)^t = 30%.

---

### Mietbelastung nach Einkommensquintil

{% chart(spec="wohnen_mietbelastung_quintile", alt="Mietbelastungsquote nach Einkommensquintil") %}
Das unterste Quintil gibt rund 40% des verfügbaren Einkommens für Miete aus — weit über der 30%-Schwelle, die als kritisch gilt. Die oberen Quintile liegen bei 15–20%. Die Mietbelastung wirkt wie eine regressive Steuer: Wer weniger verdient, zahlt prozentual mehr.
{% end %}

---

### Mietpreise nach Kanton

{% chart(spec="wohnen_mieten_kantone", alt="Mietpreise nach Kanton für 3-Zimmer-Wohnungen") %}
Die kantonalen Unterschiede sind erheblich: Zürich, Genf und Zug liegen an der Spitze, ländliche Kantone deutlich darunter. Die Grafik zeigt die Preisspanne einer durchschnittlichen 3-Zimmer-Wohnung — der meistverbreitete Wohnungstyp in der Schweiz.
{% end %}

---

### Mietpreiswachstum (CAGR)

{% chart(spec="wohnen_mietpreiswachstum_kantone", alt="Jährliches Mietpreiswachstum nach Kanton") %}
Das jährliche Mietpreiswachstum (CAGR) variiert stark zwischen den Kantonen. Einige Kantone wachsen doppelt so schnell wie andere — bei gleichzeitig stagnierenden Reallöhnen entsteht eine zunehmende Schere. Das Wachstumstempo bestimmt, wann die Belastungsschwelle überschritten wird.
{% end %}

---

### Schwellenprognose

{% chart(spec="wohnen_schwelle_prognose", alt="Prognose: Wann überschreiten Kantone die 30%-Mietbelastungsschwelle") %}
Bei Fortschreibung der aktuellen Trends und einem angenommenen Einkommenswachstum von 1% pro Jahr überschreiten mehrere Kantone die 30%-Schwelle bis 2035. Die Prognose ist konservativ — Neuvertragsmieten liegen oft deutlich über Bestandsmieten.
{% end %}

---

## Einschränkungen

- CAGR extrapoliert Vergangenheitstrend
- Q1-Einkommen nicht kantonal differenziert
- Bestandsmieten (Neuvertragsmieten oft höher)

---

## Datenquellen

- BFS Strukturerhebung: Mietpreise nach Kanton und Zimmerzahl
- BFS SILC 2022: Mietbelastungsquote nach Quintil

