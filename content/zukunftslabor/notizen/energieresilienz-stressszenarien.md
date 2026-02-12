+++
draft = true
title = "Stresstest Strom: Was passiert bei Trockenheit plus Atomausstieg?"
description = "Vier Szenarien zeigen, wie verwundbar die Schweizer Stromversorgung ist — von der Baseline bis zum Worst Case aus Trockenheit und Kernkraft-Abschaltung."
slug = "energieresilienz-stressszenarien"
date = 2026-02-12
template = "notiz.html"

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

## Methodik

Grundlage ist die BFE-Elektrizitätsbilanz (OGD, 2024). Vier Szenarien
modifizieren die Produktionszahlen des Basisjahres:

- **A — Baseline**: Reale Produktion 2024
- **B — Trockenjahr**: -30% Wasserkraftproduktion (historisch plausibel, z.B. 2022)
- **C — Atomausstieg**: Kernkraftwerke abgeschaltet (-22983 GWh)
- **D — Kombiniert**: Trockenjahr + Atomausstieg

Importkosten berechnet bei 90 EUR/MWh (europ. Spotpreis-Durchschnitt).
Endenergieverbrauch nach Sektor aus der BFE-Gesamtenergiebilanz.

## Ergebnisse

### Strommix

![Strommix](/zukunftslabor/charts/energie_strommix_real.svg)

### Endenergieverbrauch nach Sektor

![Verbrauch nach Sektor](/zukunftslabor/charts/energie_verbrauch_sektoren.svg)

### Stressszenarien

![Szenarien-Vergleich](/zukunftslabor/charts/energie_szenarien_vergleich.svg)

### Importkosten

![Importkosten](/zukunftslabor/charts/energie_importluecke_kosten.svg)

## Einschränkungen

- Statische Szenarien (kein Ausbau Solar/Wind, keine Nachfragereduktion)
- Importpreise schwanken stark (2022: bis 400 EUR/MWh)
- Saisonale Effekte nicht modelliert (Winterlücke > Jahresdurchschnitt)
- Keine Speichereffekte (Pumpspeicher, Batterien)

## Datenquellen

- BFE: Schweizerische Elektrizitätsbilanz (OGD, Jahreswerte)
- BFE: Schweizerische Gesamtenergiebilanz (Endenergieverbrauch nach Sektor)
- ENTSO-E: Europäische Strompreise (Day-Ahead-Spotmarkt)

