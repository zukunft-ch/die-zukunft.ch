+++
title = "Grundeinkommen: Drei Finanzierungsmodelle im Vergleich"
description = "Was passiert mit der Einkommensverteilung, wenn ein UBI über Einkommensteuer, Transferablösung oder Konsumsteuer finanziert wird? Dezil-Simulation mit BFS-Daten."
slug = "grundeinkommen-finanzierungsmodelle"
date = 2026-02-12
template = "notiz.html"
draft = true

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

---

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

---

### Baseline: Einkommensverteilung 2018

{% chart(spec="grundeinkommen_baseline_dezile", alt="Einkommensanteile nach Dezil") %}
Die heutige Einkommensverteilung zeigt eine starke Konzentration: Das oberste Dezil verfügt über rund einen Viertel des Gesamteinkommens, das unterste über weniger als 3%. Diese Baseline ist der Ausgangspunkt für alle drei Szenarien — sie zeigt, von welcher Ausgangslage aus Umverteilung wirkt.
{% end %}

---

### Nettowirkung der drei Szenarien

{% chart(spec="grundeinkommen_szenarien_vergleich", alt="Nettowirkung der drei UBI-Szenarien auf die Dezile") %}
Die drei Finanzierungsmodelle wirken grundlegend verschieden. Szenario A (Einkommensteuer) verteilt linear um — untere Dezile gewinnen, obere verlieren. Szenario B (Transferablösung) produziert ein Paradox: Die untersten Dezile können netto verlieren, weil bestehende Transfers höher waren als das UBI. Szenario C (Konsumsteuer) belastet untere Dezile stärker über ihre höhere Konsumquote.
{% end %}

---

### Gini-Koeffizient nach Szenario

{% chart(spec="grundeinkommen_gini_szenarien", alt="Gini-Koeffizient: Baseline vs. drei Szenarien") %}
Der Gini-Koeffizient misst die Einkommenskonzentration (0 = perfekte Gleichheit, 1 = totale Ungleichheit). Szenario A senkt den Gini am stärksten, weil die progressive Finanzierung direkt umverteilt. Szenario B verändert ihn kaum, weil es bestehende Transfers nur ersetzt. Szenario C wirkt sogar leicht regressiv.
{% end %}

---

### Relative Gewinner und Verlierer

{% chart(spec="grundeinkommen_gewinner_verlierer", alt="Gewinner und Verlierer nach Dezil und Szenario") %}
Hier wird sichtbar, welche Dezile netto gewinnen oder verlieren. Der Wendepunkt variiert je nach Finanzierungsmodell. In Szenario B zeigt sich das Transferparadox am deutlichsten: Dezile 1–2, die stark von bestehenden Sozialleistungen abhängen, profitieren weniger als die Mittelschicht — ein kontraintuitives Ergebnis, das bei der politischen Umsetzung entscheidend ist.
{% end %}

---

## Einschränkungen

- Aggregierte Dezildaten statt Mikrodaten (Individualdaten erfordern BFS-Antrag)
- Keine Verhaltensanpassungen (Arbeitsangebot, Konsummuster)
- Transferverteilung auf Dezile geschätzt (nicht direkt aus SILC-Mikrodaten)
- Konsumquoten nach Dezil basieren auf Literaturwerten, nicht BFS-HABE-Detail
- Daten nur bis 2018 verfügbar (neueste BFS-HABE-Publikation)

---

## Datenquellen

- BFS HABE 2018: Einkommensanteile nach Dezilen (Verfügbares Äquivalenzeinkommen)
- BSV Sozialversicherungsstatistik: Transfervolumen AHV, IV, EL, ALV
- BFS SILC: publizierte Verteilungsanteile der Sozialtransfers

