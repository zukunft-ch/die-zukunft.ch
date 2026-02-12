+++
title = "Talent & Migration: Werden Qualifikationen genutzt — oder verschwendet?"
description = "36% der Drittstaatsangehörigen arbeiten unter ihrem Qualifikationsniveau. Das ist kein Integrationsversagen — es ist Wertschöpfungsverlust."
slug = "talent-ueberqualifikation"
date = 2026-02-12
template = "notiz.html"
draft = true

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["migration", "talent", "ueberqualifikation", "arbeitsmarkt", "integration"]
charts = ["migration_herkunft_trend.svg", "migration_nettowanderung.svg", "migration_ueberqualifikation.svg", "migration_ueberqualifikation_sektoren.svg"]
+++

Die Schweiz hat 2024 eine Nettowanderung von +82792 Personen.
Doch Qualifikationen werden systematisch verschwendet: 36% der Drittstaatsangehörigen
arbeiten unter Niveau (vs. 13% der Schweizer/innen). Der geschätzte Wertschöpfungsverlust
beträgt ~3.6 Mrd. CHF jährlich.


<!-- more -->

---

## Methodik

Bevölkerungsdaten: BFS Statistik der Bevölkerung und der Haushalte (2010–2024).
Wanderungsdaten: BFS Wanderungsstatistik (1991–2024).
Überqualifikation: BFS Strukturerhebung / SAKE (Selbsteinschätzung + formale Qualifikation),
ergänzt durch OECD Indicators of Talent Attractiveness 2023.

---

### Ausländische Bevölkerung nach Bewilligungstyp

{% chart(spec="migration_herkunft_trend", alt="Ausländische Bevölkerung nach Bewilligungstyp im Zeitverlauf") %}
Die Zusammensetzung der ausländischen Bevölkerung hat sich verschoben: EU/EFTA-Niederlassungen dominieren, Kurzaufenthalte schwanken konjunkturell. Die Grafik zeigt die Bestandsentwicklung — ein stabiles Wachstum, das die Arbeitskräftenachfrage der Schweizer Wirtschaft widerspiegelt.
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
Bestimmte Sektoren «verschwenden» systematisch Talent: Gastgewerbe, Reinigung und Detailhandel beschäftigen besonders viele Überqualifizierte. Das ist Wertschöpfungsverlust in doppeltem Sinn — für die Betroffenen (Lohneinbusse) und für die Volkswirtschaft (ungenutzte Kompetenz).
{% end %}

---

## Einschränkungen

- Überqualifikation basiert auf Selbsteinschätzung und formaler Diplomanerkennung
- Nicht alle ausländischen Diplome sind automatisch gleichwertig (Sprachbarrieren, Berufsschutz)
- Ökonomische Verlustschätzung ist Grössenordnung (Lohndifferenz variiert stark nach Sektor)
- SAKE-Daten sind Stichprobendaten mit Konfidenzintervallen

---

## Datenquellen

- BFS: Statistik der Bevölkerung und der Haushalte (STATPOP)
- BFS: Wanderungsstatistik (internationale Wanderungen)
- BFS: Strukturerhebung — Erwerbstätigkeit nach Qualifikation und Nationalität
- OECD: Indicators of Talent Attractiveness 2023

