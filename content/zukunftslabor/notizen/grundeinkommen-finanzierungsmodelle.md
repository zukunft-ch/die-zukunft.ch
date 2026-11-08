+++
title = "Grundeinkommen: Drei Finanzierungsmodelle im Vergleich"
description = "Was passiert mit der Einkommensverteilung, wenn ein UBI über Einkommensteuer, Transferablösung oder Konsumsteuer finanziert wird? Dezil-Simulation mit BFS-Daten."
slug = "grundeinkommen-finanzierungsmodelle"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "01_grundeinkommen"
pillar = "grundeinkommen"
category = "datenbriefing"
evidence = "mittel"
tags = ["grundeinkommen", "finanzierung", "einkommen", "ungleichheit", "simulation"]
charts = ["grundeinkommen_baseline_dezile.svg", "grundeinkommen_szenarien_vergleich.svg", "grundeinkommen_gini_szenarien.svg", "grundeinkommen_gewinner_verlierer.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Modell und Einkommensbegriff geprüft; die Datengrundlage ist 2018, neuere HABE- und SILC-Wellen sind noch nicht eingearbeitet."

[[extra.changelog]]
date = 2026-11-08
text = "Aussagen zur Einkommensverteilung und zu den Szenarien an die Simulationsdaten angepasst, Einkommensbegriff (verfügbares Äquivalenzeinkommen) einheitlich bezeichnet und fehlende Verhaltensreaktionen als Grenze des Modells ergänzt."

[[extra.changelog]]
date = 2026-11-08
text = "Abschnitt «Was Experimente zeigen» (OpenResearch 2025, Finnland, Abstimmung 2016) und Verhaltensszenario im Rechner ergänzt."
+++

Drei Finanzierungsmodelle für ein bedingungsloses Grundeinkommen von CHF 2'500/Monat
zeigen grundlegend verschiedene Verteilungswirkungen. Eine pauschale Einkommensteuer
senkt den Gini am stärksten. Die Ablösung bestehender Transfers spart zwar Steuern,
bringt aber den ärmsten Haushalten am wenigsten — ein nicht-trivialer Befund.
Eine Konsumsteuer wirkt progressiv, aber schwächer.


<!-- more -->

---

## Methodik

Grundlage sind die Anteile der Dezile am verfügbaren Äquivalenzeinkommen
aus der BFS-Tabelle «Kennzahlen zur Verteilung der Einkommen»
(Datengrundlage 2018, Haushaltsbudgeterhebung HABE). Daraus werden
absolute verfügbare Äquivalenzeinkommen pro Dezil und Monat geschätzt
(Anteil × Mittelwert × 10).

Drei Finanzierungsszenarien werden simuliert:

- **A — Pauschale Einkommensteuer**: Bruttokosten (CHF 222 Mrd./Jahr)
  werden über einen linearen Einkommensteuerzuschlag finanziert.
- **B — Transferablösung**: AHV, IV, EL, Sozialhilfe, ALV und Familienzulagen
  (CHF 79 Mrd.) werden durch das UBI ersetzt.
  Der verbleibende Betrag wird über Einkommensteuer finanziert.
- **C — Konsumsteuer**: Die Finanzierung erfolgt über einen MwSt.-Zuschlag.
  Konsumquoten variieren nach Dezil (D1: 95%, D10: 55%).

Das Modell ist statisch: Es ignoriert Verhaltensreaktionen wie ein
verändertes Arbeitsangebot, andere Konsummuster oder Ausweichverhalten bei
Steuern. Die Resultate zeigen reine Erstrundeneffekte.

---

### Baseline: Einkommensverteilung 2018

{% chart(spec="grundeinkommen_baseline_dezile", alt="Einkommensanteile nach Dezil") %}
Die heutige Einkommensverteilung zeigt eine starke Konzentration: Das oberste Dezil verfügt über gut einen Fünftel (22%) des gesamten verfügbaren Äquivalenzeinkommens, das unterste über weniger als 3%. Diese Baseline ist der Ausgangspunkt für alle drei Szenarien — sie zeigt, von welcher Ausgangslage aus Umverteilung wirkt.
{% end %}

---

### Nettowirkung der drei Szenarien

{% chart(spec="grundeinkommen_szenarien_vergleich", alt="Nettowirkung der drei UBI-Szenarien auf die Dezile") %}
Die drei Finanzierungsmodelle wirken grundlegend verschieden. Szenario A (Einkommensteuer) verteilt linear um — untere Dezile gewinnen, obere verlieren. Szenario B (Transferablösung) produziert ein Paradox: Die untersten Dezile gewinnen netto am wenigsten (D1: +92 CHF/Monat), weil das Grundeinkommen ihre bisherigen Transfers weitgehend nur ersetzt. Szenario C (Konsumsteuer) belastet untere Dezile über ihre höhere Konsumquote relativ stärker; netto gewinnen sie dank Grundeinkommen dennoch deutlich.
{% end %}

---

### Gini-Koeffizient nach Szenario

{% chart(spec="grundeinkommen_gini_szenarien", alt="Gini-Koeffizient: Baseline vs. drei Szenarien") %}
Der Gini-Koeffizient misst die Einkommenskonzentration (0 = perfekte Gleichheit, 1 = totale Ungleichheit). Szenario A senkt den Gini am stärksten, weil die progressive Finanzierung direkt umverteilt. Szenario B verändert ihn kaum, weil es bestehende Transfers nur ersetzt. Szenario C senkt ihn ebenfalls deutlich (von 0,28 auf 0,18), aber weniger als A: Die Konsumsteuer selbst belastet tiefe Einkommen relativ stärker, das Grundeinkommen gleicht das mehr als aus.
{% end %}

{{ ubi_rechner() }}


---

### Relative Gewinner und Verlierer

{% chart(spec="grundeinkommen_gewinner_verlierer", alt="Gewinner und Verlierer nach Dezil und Szenario") %}
Hier wird sichtbar, welche Dezile netto gewinnen oder verlieren. Der Wendepunkt variiert je nach Finanzierungsmodell. In Szenario B zeigt sich das Transferparadox am deutlichsten: Dezile 1–2, die stark von bestehenden Sozialleistungen abhängen, profitieren weniger als die Mittelschicht — ein kontraintuitives Ergebnis, das bei der politischen Umsetzung entscheidend ist.
{% end %}

---

## Was Experimente zeigen

Unser Modell rechnet statisch. Wie stark Menschen ihr Arbeitsangebot anpassen, zeigen Experimente:

- **OpenResearch, USA (2020–2023):** 1'000 Personen mit tiefem Einkommen (21–40 Jahre, Texas und Illinois) erhielten drei Jahre lang 1'000 Dollar pro Monat, 2'000 Personen in der Kontrollgruppe 50 Dollar. Ergebnis: Die Erwerbsbeteiligung sank um 3,9 Prozentpunkte, die Arbeitszeit um 1 bis 2 Stunden pro Woche, Partnerinnen und Partner reduzierten ähnlich stark. Pro erhaltenem Dollar sank das übrige Einkommen der Person um rund 16 Cent (des Haushalts um rund 29 Cent). Die gewonnene Zeit ging vor allem in Freizeit; Jobqualität und Abschlüsse veränderten sich nicht messbar, das Wohlbefinden stieg im ersten Jahr und kehrte danach auf das Niveau der Kontrollgruppe zurück.
- **Finnland (2017–2018):** 2'000 Arbeitslose erhielten 560 Euro pro Monat ohne Bedingungen. Kein messbarer Beschäftigungseffekt im ersten Jahr, im zweiten Jahr rund sechs Arbeitstage mehr; die Empfängerinnen und Empfänger berichteten über besseres Wohlbefinden und mehr finanzielle Sicherheit.
- **Schweiz (2016):** Die Volksinitiative für ein bedingungsloses Grundeinkommen scheiterte mit 76,9 Prozent Nein (Basel-Stadt: 36 Prozent Ja). Laut Nachbefragung war das fehlende Finanzierungskonzept mitentscheidend. Genau deshalb rechnet dieses Labor zuerst die Finanzierung.

Übertragbar ist das nur begrenzt: Beide Experimente waren befristet, nicht universell und ohne Finanzierungsseite. Im Rechner oben lässt sich die OpenResearch-Reaktion (16 Rappen weniger übriges Einkommen pro Franken Grundeinkommen) als Szenario zuschalten.

---

## Einschränkungen

- Aggregierte Dezildaten statt Mikrodaten (Individualdaten erfordern BFS-Antrag)
- Keine Verhaltensreaktionen modelliert (Arbeitsangebot, Konsummuster, Steuerausweichung): statische Erstrundeneffekte Im Rechner lässt sich die Arbeitsangebotsreaktion aus dem OpenResearch-Experiment als Szenario zuschalten (US-Schätzung, nur begrenzt übertragbar).
- Transferverteilung auf Dezile geschätzt (nicht direkt aus SILC-Mikrodaten)
- Konsumquoten nach Dezil basieren auf Literaturwerten, nicht BFS-HABE-Detail
- Datengrundlage 2018: Die verwendete BFS-Tabellenreihe endet 2018; neuere HABE- und SILC-Wellen sind noch nicht eingearbeitet

---

## Datenquellen

- BFS: Kennzahlen zur Verteilung der Einkommen vor und nach staatlichen Transfers (HABE, Datengrundlage 2018), Anteile der Dezile am verfügbaren Äquivalenzeinkommen, https://www.bfs.admin.ch/bfsstatic/dam/assets/15344786/master
- BSV Sozialversicherungsstatistik: Transfervolumen AHV, IV, EL, ALV
- BFS SILC: publizierte Verteilungsanteile der Sozialtransfers
- Vivalt, Rhodes, Bartik, Broockman, Krause, Miller: The Employment Effects of a Guaranteed Income, NBER Working Paper 32719 (Juli 2024, revidiert September 2025), https://www.nber.org/papers/w32719
- Universität Helsinki / Kela: Ergebnisse des finnischen Grundeinkommensexperiments 2017–2018, https://www.helsinki.fi/en/news/fair-society/basic-income-experiment-finland-yields-surprising-results
- Swissvotes: Volksinitiative «Für ein bedingungsloses Grundeinkommen», 5. Juni 2016, https://swissvotes.ch/vote/601.00/kurzbeschreibung-de.pdf
