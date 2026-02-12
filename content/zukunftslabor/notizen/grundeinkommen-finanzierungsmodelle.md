+++
draft = true
title = "Grundeinkommen: Drei Finanzierungsmodelle im Vergleich"
description = "Was passiert mit der Einkommensverteilung, wenn ein UBI über Einkommensteuer, Transferablösung oder Konsumsteuer finanziert wird? Dezil-Simulation mit BFS-Daten."
slug = "grundeinkommen-finanzierungsmodelle"
date = 2026-02-12
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["grundeinkommen", "finanzierung", "einkommen", "ungleichheit", "simulation"]
charts = ["grundeinkommen_baseline_dezile.svg", "grundeinkommen_szenarien_vergleich.svg", "grundeinkommen_gini_szenarien.svg", "grundeinkommen_gewinner_verlierer.svg"]
+++
Drei Finanzierungsmodelle für ein bedingungsloses Grundeinkommen von CHF 2'500/Monat
zeigen grundlegend verschiedene Verteilungswirkungen. Eine pauschale Einkommensteuer
senkt den Gini am stärksten. Die Ablösung bestehender Transfers spart zwar Steuern,
kann aber die ärmsten Haushalte schlechter stellen — ein nicht-trivialer Befund.
Eine Konsumsteuer wirkt progressiv, aber schwächer.


<!-- more -->

## Methodik

Grundlage sind die Einkommensanteile nach Dezilen aus der
Haushaltsbudgeterhebung (HABE) 2018 des BFS. Daraus werden absolute
Monatseinkommen pro Dezil geschätzt (Anteil × Mittelwert × 10).

Drei Finanzierungsszenarien werden simuliert:

- **A — Pauschale Einkommensteuer**: Bruttokosten (CHF 222.0 Mrd./Jahr)
  werden über einen linearen Einkommensteuerzuschlag finanziert.
- **B — Transferablösung**: AHV, IV, EL, Sozialhilfe, ALV und Familienzulagen
  (CHF 79.0 Mrd.) werden durch das UBI ersetzt.
  Der verbleibende Betrag wird über Einkommensteuer finanziert.
- **C — Konsumsteuer**: Die Finanzierung erfolgt über einen MwSt.-Zuschlag.
  Konsumquoten variieren nach Dezil (D1: 95%, D10: 55%).

## Ergebnisse

### Baseline: Einkommensverteilung 2018

![Einkommensanteile nach Dezil](/zukunftslabor/charts/grundeinkommen_baseline_dezile.svg)

### Nettowirkung der drei Szenarien

![Szenarien-Vergleich](/zukunftslabor/charts/grundeinkommen_szenarien_vergleich.svg)

### Gini-Koeffizient nach Szenario

![Gini-Vergleich](/zukunftslabor/charts/grundeinkommen_gini_szenarien.svg)

### Relative Gewinner und Verlierer

![Gewinner und Verlierer](/zukunftslabor/charts/grundeinkommen_gewinner_verlierer.svg)

## Einschränkungen

- Aggregierte Dezildaten statt Mikrodaten (Individualdaten erfordern BFS-Antrag)
- Keine Verhaltensanpassungen (Arbeitsangebot, Konsummuster)
- Transferverteilung auf Dezile geschätzt (nicht direkt aus SILC-Mikrodaten)
- Konsumquoten nach Dezil basieren auf Literaturwerten, nicht BFS-HABE-Detail
- Daten nur bis 2018 verfügbar (neueste BFS-HABE-Publikation)

## Datenquellen

- BFS HABE 2018: Einkommensanteile nach Dezilen (Verfügbares Äquivalenzeinkommen)
- BSV Sozialversicherungsstatistik: Transfervolumen AHV, IV, EL, ALV
- BFS SILC: publizierte Verteilungsanteile der Sozialtransfers

