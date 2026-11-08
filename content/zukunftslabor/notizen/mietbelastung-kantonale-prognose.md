+++
title = "Mietbelastung: Wie stark trifft die Miete das unterste Quintil in den Kantonen?"
description = "Das unterste Quintil zahlt 40% für Miete — und liegt gemessen an den kantonalen Mieten bereits in allen Kantonen über der 30%-Schwelle."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "04_wohnen_ungleichheit"
pillar = "stadte-wohnen"
category = "datenbriefing"
evidence = "mittel"
tags = ["wohnen", "mieten", "kantone", "ungleichheit"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Mietbelastung nach Quintil und Kantonsmieten bis 2023 geprüft; SILC 2024 und Strukturerhebung 2024 liegen vor und sind noch nicht eingearbeitet."

[[extra.changelog]]
date = 2026-11-08
text = "Aussagen zu Quintilen und Kantonen an die Daten angepasst und die nicht aussagekräftige Schwellenprognose entfernt, da das unterste Quintil bereits in allen Kantonen über 30% liegt."
+++

Das unterste Quintil zahlt 40% für Miete. Gemessen an den kantonalen Mieten
liegt es schon 2023 in allen 26 Kantonen über der 30%-Schwelle — von 33% im Jura bis 65% in Zug.


<!-- more -->

---

## Methodik

BFS-Mietpreisstatistik (2010–2023, 3-Zimmer nach Kanton) und
BFS-SILC-Mietbelastungsquoten. CAGR aus 2010/2023-Verhältnis.

---

### Mietbelastung nach Einkommensquintil

{% chart(spec="wohnen_mietbelastung_quintile", alt="Mietbelastungsquote nach Einkommensquintil") %}
Das unterste Quintil gibt rund 40% des verfügbaren Einkommens für Miete aus — weit über der 30%-Schwelle, die als kritisch gilt. Die oberen Quintile liegen bei 12–18%. Die Mietbelastung wirkt wie eine regressive Steuer: Wer weniger verdient, zahlt prozentual mehr.
{% end %}

---

### Mietpreise nach Kanton

{% chart(spec="wohnen_mieten_kantone", alt="Mietpreise nach Kanton für 3-Zimmer-Wohnungen") %}
Die kantonalen Unterschiede sind erheblich: Zug, Zürich und Schwyz liegen an der Spitze, ländliche Kantone deutlich darunter. Die Grafik zeigt die Preisspanne einer durchschnittlichen 3-Zimmer-Wohnung — der meistverbreitete Wohnungstyp in der Schweiz.
{% end %}

---

### Mietpreiswachstum (CAGR)

{% chart(spec="wohnen_mietpreiswachstum_kantone", alt="Jährliches Mietpreiswachstum nach Kanton") %}
Das jährliche Mietpreiswachstum (CAGR) variiert stark zwischen den Kantonen. Einige Kantone wachsen doppelt so schnell wie andere — bei gleichzeitig stagnierenden Reallöhnen entsteht eine zunehmende Schere. Das Wachstumstempo bestimmt, wie schnell die Belastung weiter steigt, wenn die Einkommen nicht mithalten.
{% end %}

---

## Einschränkungen

- CAGR beschreibt den Trend 2010–2023, keine Prognose
- Q1-Einkommen nicht kantonal differenziert
- Bestandsmieten (Neuvertragsmieten oft höher)

---

## Datenquellen

- BFS Strukturerhebung: Mietpreise nach Kanton und Zimmerzahl
- BFS SILC 2022: Mietbelastungsquote nach Quintil

