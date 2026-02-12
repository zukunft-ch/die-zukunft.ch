+++
draft = true
title = "Grundeinkommen: Drei Finanzierungsmodelle im Vergleich"
description = "Flat Tax, Transferersatz oder Konsumsteuer? Drei Wege zum Grundeinkommen — und was jeder für die Einkommensverteilung bedeutet."
slug = "grundeinkommen-finanzierungsmodelle"
date = 2026-02-12
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["grundeinkommen", "finanzierung", "ungleichheit", "steuern", "simulation"]
charts = ["grundeinkommen_baseline_dezile.svg", "grundeinkommen_szenarien_vergleich.svg", "grundeinkommen_gini_szenarien.svg", "grundeinkommen_gewinner_verlierer.svg"]
+++

Flat Tax, Transferersatz oder Konsumsteuer? Drei Wege zum
Grundeinkommen — und jeder verändert die Einkommensverteilung anders.
Der Transferersatz-Ansatz birgt eine Überraschung: Einige der ärmsten
Haushalte könnten schlechter gestellt werden.

<!-- more -->

## Methodik

Grundlage: BFS-SILC-Einkommensdaten nach Dezil. Drei Finanzierungsszenarien
für ein UBI von CHF 2'500/Monat (~CHF 258 Mrd./Jahr Gesamtkosten):

- **Szenario A (Flat Tax)**: Pauschale Einkommenssteuer-Erhöhung
- **Szenario B (Transferersatz)**: Bestehende Transfers (AHV/IV/EL/Sozialhilfe) ersetzen
- **Szenario C (Konsumsteuer)**: MWST-Erhöhung, mit Konsumquoten nach Dezil

Für jedes Szenario: Netto-Einkommenseffekt pro Dezil und Gini-Koeffizient.

## Ergebnisse

![Baseline Dezile](/zukunftslabor/charts/grundeinkommen_baseline_dezile.svg)

![Szenarien Vergleich](/zukunftslabor/charts/grundeinkommen_szenarien_vergleich.svg)

![Gini Vergleich](/zukunftslabor/charts/grundeinkommen_gini_szenarien.svg)

![Gewinner und Verlierer](/zukunftslabor/charts/grundeinkommen_gewinner_verlierer.svg)

## Einschränkungen

- Pauschale Dezil-Durchschnitte (innerhalb Dezile grosse Variation)
- Transferschätzungen vereinfacht (nicht alle Transfers erfasst)
- Konsumquoten aus internationalen Studien (keine CH-spezifischen Daten)
- Verhaltensänderungen nicht modelliert

## Datenquellen

- BFS SILC: Einkommensverteilung nach Dezil
- BSV: Sozialversicherungsstatistik (AHV/IV/EL-Ausgaben)
- BFS: Haushaltsbudgeterhebung (Konsumquoten)
