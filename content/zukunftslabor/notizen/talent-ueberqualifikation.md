+++
title = "Talent & Migration: Werden Qualifikationen genutzt — oder bleiben sie ungenutzt?"
description = "36% der Drittstaatsangehörigen arbeiten unter ihrem Qualifikationsniveau. Das ist kein Integrationsversagen — es ist Wertschöpfungsverlust."
slug = "talent-ueberqualifikation"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "10_talent_migration"
pillar = "talent-integration"
category = "datenbriefing"
evidence = "mittel"
tags = ["migration", "talent", "ueberqualifikation", "arbeitsmarkt", "integration"]
charts = ["migration_herkunft_trend.svg", "migration_nettowanderung.svg", "migration_ueberqualifikation.svg", "migration_ueberqualifikation_sektoren.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Bevölkerungs- und Wanderungsdaten bis 2024 geprüft; die Überqualifikationswerte nach Sektor und die Verlustschätzung beruhen auf Annahmen und sind nicht mit aktuellen SAKE-Daten nachgeführt."

[[extra.changelog]]
date = 2026-11-08
text = "Aussagen zur ausländischen Bevölkerung an die Daten angepasst, wertende Formulierung «verschwendet» durch «ungenutzt» ersetzt und die Verlustschätzung von 3,6 Mrd. Franken als eigene Grobschätzung mit Methode ausgewiesen."
+++

Die Schweiz hat 2024 eine Nettowanderung von +82'792 Personen.
Doch viele Qualifikationen bleiben ungenutzt: 36% der Drittstaatsangehörigen
arbeiten unter Niveau (vs. 13% der Schweizer/innen). Nach einer eigenen Grobschätzung entgehen
dadurch rund 3,6 Mrd. CHF Lohnsumme pro Jahr.


<!-- more -->

---

## Methodik

Bevölkerungsdaten: BFS Statistik der Bevölkerung und der Haushalte (2010–2024).
Wanderungsdaten: BFS Wanderungsstatistik (1991–2024).
Überqualifikation: BFS Strukturerhebung / SAKE (Selbsteinschätzung + formale Qualifikation),
ergänzt durch OECD Indicators of Talent Attractiveness 2023.

Die Verlustschätzung ist eine eigene Grobschätzung: rund 200'000
überqualifiziert beschäftigte Zugewanderte × eine angenommene
Lohndifferenz von rund 18'000 Franken pro Jahr ≈ 3,6 Mrd. Franken. Beide
Werte sind Annahmen, keine publizierten Statistiken; die Zahl zeigt eine
Grössenordnung.

---

### Ausländische Bevölkerung nach Bewilligungstyp

{% chart(spec="migration_herkunft_trend", alt="Ausländische Bevölkerung nach Bewilligungstyp im Zeitverlauf") %}
Die Zusammensetzung der ausländischen Bevölkerung hat sich verschoben: Niedergelassene (C) bilden weiterhin die Mehrheit, doch seit 2021 wächst vor allem die Zahl der Aufenthalter (B) — von 759'769 auf 915'566 (2024). Die Grafik zeigt die Bestandsentwicklung — ein stabiles Wachstum, das die Arbeitskräftenachfrage der Schweizer Wirtschaft widerspiegelt.
{% end %}

---

### Nettowanderung nach Herkunft

{% chart(spec="migration_nettowanderung", alt="Nettowanderung nach Herkunftsregion") %}
Die Nettowanderung zeigt, wer kommt und wer geht. EU/EFTA-Bürger stellen den Grossteil des Zuzugs — getrieben durch die Personenfreizügigkeit. Drittstaatsangehörige kommen in geringerer Zahl, haben aber die grössten Integrationshürden bei der Berufsanerkennung.
{% end %}

---

### Überqualifikationsrate nach Herkunftsgruppe

{% chart(spec="migration_ueberqualifikation", alt="Überqualifikationsrate nach Herkunftsgruppe") %}
36% der Drittstaatsangehörigen arbeiten unter ihrem Qualifikationsniveau — fast dreimal so viel wie bei Schweizer/innen (13%). Das ist kein Integrationsversagen der Betroffenen, sondern ein strukturelles Problem: Diplomanerkennung, Sprachbarrieren und berufliche Schutzregelungen verhindern den qualifikationsgerechten Einsatz.
{% end %}

---

### Sektoren mit hohem Überqualifikationsanteil

{% chart(spec="migration_ueberqualifikation_sektoren", alt="Branchen mit höchstem Anteil überqualifizierter Beschäftigter") %}
In bestimmten Sektoren bleibt besonders viel Talent ungenutzt: Gastgewerbe, Reinigung und Detailhandel beschäftigen besonders viele Überqualifizierte. Das ist Wertschöpfungsverlust in doppeltem Sinn — für die Betroffenen (Lohneinbusse) und für die Volkswirtschaft (ungenutzte Kompetenz).
{% end %}

---

## Einschränkungen

- Überqualifikation basiert auf Selbsteinschätzung und formaler Diplomanerkennung
- Nicht alle ausländischen Diplome sind automatisch gleichwertig (Sprachbarrieren, Berufsschutz)
- Ökonomische Verlustschätzung ist eine eigene Grobschätzung mit angenommenen Werten (Anzahl Betroffene, Lohndifferenz variiert stark nach Sektor)
- SAKE-Daten sind Stichprobendaten mit Konfidenzintervallen

---

## Datenquellen

- BFS: Statistik der Bevölkerung und der Haushalte (STATPOP)
- BFS: Wanderungsstatistik (internationale Wanderungen)
- BFS: Strukturerhebung — Erwerbstätigkeit nach Qualifikation und Nationalität
- OECD: Indicators of Talent Attractiveness 2023

