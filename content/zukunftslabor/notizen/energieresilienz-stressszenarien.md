+++
title = "Stresstest Strom: Was passiert bei Trockenheit plus Atomausstieg?"
description = "Vier Szenarien zeigen, wie verwundbar die Schweizer Stromversorgung ist — von der Baseline bis zum Worst Case aus Trockenheit und Kernkraft-Abschaltung."
slug = "energieresilienz-stressszenarien"
date = 2026-02-12
template = "notiz.html"
draft = true

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["energie", "resilienz", "strom", "szenarien", "infrastruktur"]
charts = ["energie_strommix_real.svg", "energie_verbrauch_sektoren.svg", "energie_szenarien_vergleich.svg", "energie_importluecke_kosten.svg"]
+++

Vier Stressszenarien auf Basis realer BFE-Daten (2024) zeigen:
Im Worst Case (Trockenjahr + Atomausstieg) müsste die Schweiz
39.1% ihres Stroms importieren — Kosten
2.29 Mrd. CHF/Jahr bei aktuellen Spotpreisen.


<!-- more -->

---

## Methodik

Grundlage ist die BFE-Elektrizitätsbilanz (OGD, 2024). Vier Szenarien
modifizieren die Produktionszahlen des Basisjahres:

- **A — Baseline**: Reale Produktion 2024
- **B — Trockenjahr**: -30% Wasserkraftproduktion (historisch plausibel, z.B. 2022)
- **C — Atomausstieg**: Kernkraftwerke abgeschaltet (-22983 GWh)
- **D — Kombiniert**: Trockenjahr + Atomausstieg

Importkosten berechnet bei 90 EUR/MWh (europ. Spotpreis-Durchschnitt).
Endenergieverbrauch nach Sektor aus der BFE-Gesamtenergiebilanz.

---

### Strommix

{% chart(spec="energie_strommix_real", alt="Schweizer Strommix nach Energieträger") %}
Wasserkraft und Kernenergie dominieren die Schweizer Stromproduktion mit zusammen über 90%. Diese Konzentration auf zwei Quellen ist zugleich Stärke (CO₂-arm) und Verwundbarkeit — beide reagieren empfindlich auf externe Schocks: Trockenheit bei Wasser, politische Entscheide bei Atom.
{% end %}

---

### Endenergieverbrauch nach Sektor

{% chart(spec="energie_verbrauch_sektoren", alt="Endenergieverbrauch nach Sektor") %}
Industrie und Verkehr sind die grössten Stromverbraucher. Die Sektorverteilung zeigt, wo Effizienzgewinne und Elektrifizierung (z.B. E-Mobilität) den grössten Hebel haben — und wo zusätzlicher Strombedarf entstehen wird.
{% end %}

---

### Stressszenarien

{% chart(spec="energie_szenarien_vergleich", alt="Vier Stressszenarien für die Schweizer Stromversorgung") %}
Vier Szenarien zeigen die Bandbreite der Verwundbarkeit: Von der stabilen Baseline bis zum Worst Case (Trockenjahr + Atomausstieg). Im kombinierten Szenario entsteht eine Importabhängigkeit, die bei angespannten europäischen Märkten nicht ohne weiteres gedeckt werden kann.
{% end %}

---

### Importkosten

{% chart(spec="energie_importluecke_kosten", alt="Kosten der Importlücke nach Szenario") %}
Die finanziellen Folgen der Importabhängigkeit sind erheblich: Im Worst Case liegen die jährlichen Importkosten bei mehreren Milliarden Franken — berechnet zu aktuellen europäischen Spotpreisen. Bei Marktspitzen (wie 2022) wären die Kosten ein Vielfaches davon.
{% end %}

---

## Einschränkungen

- Statische Szenarien (kein Ausbau Solar/Wind, keine Nachfragereduktion)
- Importpreise schwanken stark (2022: bis 400 EUR/MWh)
- Saisonale Effekte nicht modelliert (Winterlücke > Jahresdurchschnitt)
- Keine Speichereffekte (Pumpspeicher, Batterien)

---

## Datenquellen

- BFE: Schweizerische Elektrizitätsbilanz (OGD, Jahreswerte)
- BFE: Schweizerische Gesamtenergiebilanz (Endenergieverbrauch nach Sektor)
- ENTSO-E: Europäische Strompreise (Day-Ahead-Spotmarkt)

