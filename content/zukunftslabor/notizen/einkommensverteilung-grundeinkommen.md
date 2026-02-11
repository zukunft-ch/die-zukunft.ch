+++
draft = true
title = "Was ein Grundeinkommen an der Einkommensverteilung ändern würde"
description = "Mikrosimulation: Ein bedingungsloses Grundeinkommen von CHF 2'500/Monat stärkt vor allem die unteren Einkommen und senkt den Gini-Koeffizienten."
slug = "einkommensverteilung-grundeinkommen"
date = 2026-02-11
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["grundeinkommen", "einkommen", "ungleichheit", "simulation"]
charts = ["einkommensverteilung_dezile.svg", "einkommensverteilung_vergleich.svg", "einkommensverteilung_gini_zeitreihe.svg"]
+++

Ein bedingungsloses Grundeinkommen von CHF 2'500 pro Monat würde die Schweizer
Einkommensverteilung spürbar verändern: Die unteren Dezile profitieren relativ am
stärksten, der simulierte Gini-Koeffizient sinkt von 0.2839 auf 0.1848.
Grundlage: BFS-HABE-Daten 2018 (Einkommensanteile nach Dezilen).


<!-- more -->

## Methodik

Grundlage sind die Einkommensanteile nach Dezilen aus der
Haushaltsbudgeterhebung (HABE) 2018 des BFS. Daraus werden absolute
Monatseinkommen pro Dezil geschätzt (Anteil × Mittelwert × 10).

Die Mikrosimulation addiert CHF 2'500/Monat auf jedes Dezil und berechnet
den resultierenden Gini-Koeffizienten. Da nur Dezilanteile vorliegen
(keine Individualdaten), ist die Gini-Schätzung approximativ.

## Ergebnisse

![Einkommensanteile nach Dezil](/zukunftslabor/charts/einkommensverteilung_dezile.svg)

![Vergleich: Status quo vs. Grundeinkommen](/zukunftslabor/charts/einkommensverteilung_vergleich.svg)

![Gini-Zeitreihe 1998–2018](/zukunftslabor/charts/einkommensverteilung_gini_zeitreihe.svg)

## Einschränkungen

- Aggregierte Dezildaten statt Mikrodaten (Individualdaten erfordern BFS-Antrag)
- Keine Modellierung der Gegenfinanzierung (Steuererhöhungen, Transferablösung)
- Keine Verhaltensanpassungen (Arbeitsangebot, Konsummuster)
- Dezilanteile unterschätzen die Streuung innerhalb der Gruppen
- Daten nur bis 2018 verfügbar (neueste BFS-HABE-Publikation)

## Datenquellen

- BFS HABE 2018: Kennzahlen zur Verteilung der Einkommen (Verfügbares Äquivalenzeinkommen)

