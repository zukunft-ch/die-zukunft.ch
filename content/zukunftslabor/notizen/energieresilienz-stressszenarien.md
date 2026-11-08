+++
title = "Stresstest Strom: Was passiert bei Trockenheit plus Atomausstieg?"
description = "Vier Szenarien zeigen, wie verwundbar die Schweizer Stromversorgung ist — von der Baseline bis zum Worst Case aus Trockenheit und Kernkraft-Abschaltung."
slug = "energieresilienz-stressszenarien"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "06_energie_resilienz"
pillar = "energy-resilience"
category = "datenbriefing"
evidence = "stark"
tags = ["energie", "resilienz", "strom", "szenarien", "infrastruktur"]
charts = ["energie_strommix_real.svg", "energie_verbrauch_sektoren.svg", "energie_szenarien_vergleich.svg", "energie_importluecke_kosten.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Szenarien beruhen auf der BFE-Elektrizitätsbilanz 2024; die Elektrizitätsbilanz 2025 des BFE liegt vor und ist noch nicht eingearbeitet."

[[extra.changelog]]
date = 2026-11-08
text = "Aussagen zum Endenergieverbrauch und zu den Importkosten korrigiert (Umrechnung EUR/CHF berichtigt: rund 2,1 statt 2,3 Mrd. Franken), Wechselkursannahme offengelegt und Vorschlag des Bundesrats zum Neubauverbot ergänzt."
+++

Vier Stressszenarien auf Basis realer BFE-Daten (2024) zeigen:
Im Worst Case (Trockenjahr + Atomausstieg) müsste die Schweiz
39,1% ihres Stroms importieren — Kosten
rund 2,07 Mrd. CHF/Jahr bei 90 EUR/MWh.


<!-- more -->

---

## Methodik

Grundlage ist die BFE-Elektrizitätsbilanz (OGD, 2024). Vier Szenarien
modifizieren die Produktionszahlen des Basisjahres:

- **A — Baseline**: Reale Produktion 2024
- **B — Trockenjahr**: -30% Wasserkraftproduktion (historisch plausibel, z.B. 2022)
- **C — Atomausstieg**: Kernkraftwerke abgeschaltet (−22'983 GWh)
- **D — Kombiniert**: Trockenjahr + Atomausstieg

Importkosten berechnet bei 90 EUR/MWh (europäischer Spotpreis-Durchschnitt 2023–2024) und
einem Wechselkurs von 0,95 CHF pro EUR, also rund 86 CHF/MWh.
Endenergieverbrauch nach Sektor aus der BFE-Gesamtenergiebilanz.

---

### Strommix

{% chart(spec="energie_strommix_real", alt="Schweizer Strommix nach Energieträger") %}
Wasserkraft und Kernenergie dominieren die Schweizer Stromproduktion mit zusammen über 90%. Diese Konzentration auf zwei Quellen ist zugleich Stärke (planbare, inländische Produktion) und Verwundbarkeit — beide reagieren empfindlich auf externe Schocks: Trockenheit bei Wasser, politische Entscheide bei Atom.
{% end %}

---

### Endenergieverbrauch nach Sektor

{% chart(spec="energie_verbrauch_sektoren", alt="Endenergieverbrauch nach Sektor") %}
Verkehr und Haushalte sind die grössten Endenergieverbraucher (alle Energieträger, nicht nur Strom). Die Sektorverteilung zeigt, wo Effizienzgewinne und Elektrifizierung (z.B. E-Mobilität) den grössten Hebel haben — und wo zusätzlicher Strombedarf entstehen wird.
{% end %}

---

### Stressszenarien

{% chart(spec="energie_szenarien_vergleich", alt="Vier Stressszenarien für die Schweizer Stromversorgung") %}
Vier Szenarien zeigen die Bandbreite der Verwundbarkeit: Von der stabilen Baseline bis zum Worst Case (Trockenjahr + Atomausstieg). Im kombinierten Szenario entsteht eine Importabhängigkeit, die bei angespannten europäischen Märkten nicht ohne weiteres gedeckt werden kann. Szenario C ist ein Stresstest, keine Prognose: Das geltende Kernenergiegesetz verbietet neue Kernkraftwerke, die bestehenden laufen, solange sie sicher sind. Der Bundesrat hat im August 2025 als indirekten Gegenvorschlag zur Volksinitiative «Blackout stoppen» beantragt, das Neubauverbot aufzuheben. Wie lange die heutigen Anlagen laufen und ob neue gebaut werden, ist politisch offen.
{% end %}

---

### Importkosten

{% chart(spec="energie_importluecke_kosten", alt="Kosten der Importlücke nach Szenario") %}
Die finanziellen Folgen der Importabhängigkeit sind erheblich: Im Worst Case liegen die jährlichen Importkosten bei rund 2,1 Milliarden Franken — berechnet bei 90 EUR/MWh und 0,95 CHF pro EUR. Jede Abweichung beim Wechselkurs verschiebt die Kosten proportional. Bei Marktspitzen (wie 2022) wären die Kosten ein Vielfaches davon.
{% end %}

---

## Einschränkungen

- Statische Szenarien (kein Ausbau Solar/Wind, keine Nachfragereduktion)
- Importpreise schwanken stark (2022: bis 400 EUR/MWh); Wechselkurs EUR/CHF als fixe Annahme (0,95)
- Datenbasis 2024; die Elektrizitätsbilanz 2025 des BFE ist noch nicht eingearbeitet
- Saisonale Effekte nicht modelliert (Winterlücke > Jahresdurchschnitt)
- Keine Speichereffekte (Pumpspeicher, Batterien)

---

## Datenquellen

- BFE: Schweizerische Elektrizitätsbilanz (OGD, Jahreswerte)
- BFE: Schweizerische Gesamtenergiebilanz (Endenergieverbrauch nach Sektor)
- ENTSO-E: Europäische Strompreise (Day-Ahead-Spotmarkt)
- Bundesrat: Medienmitteilung vom 13. August 2025 zur Botschaft über die Initiative «Blackout stoppen» und den indirekten Gegenvorschlag (Aufhebung des Neubauverbots für Kernkraftwerke), https://www.admin.ch/de/newnsb/GIECKzWVs6ZX6W1ba4i6X
