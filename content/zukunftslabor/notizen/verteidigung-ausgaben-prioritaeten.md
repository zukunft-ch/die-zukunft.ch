+++
title = "Verteidigung: Was kauft der Schweizer Verteidigungsfranken?"
description = "Die Schweiz gab 2025 laut SIPRI 0,76% des BIP für Verteidigung aus, weniger als alle verglichenen europäischen Länder. Die Frage ist nicht nur, wie viel mehr, sondern wofür."
slug = "verteidigung-ausgaben-prioritaeten"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "12_neutralitaet_verteidigung"
pillar = "neutralitaet-frieden"
category = "datenbriefing"
evidence = "mittel"
tags = ["verteidigung", "budget", "armee", "sicherheit", "miliz"]
charts = ["verteidigung_ch_trend.svg", "verteidigung_vergleich.svg", "verteidigung_pro_soldat.svg"]

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Mit SIPRI-Daten 2025 (April 2026) und dem NATO-Beschluss von Den Haag aktualisiert; der Pro-Soldat-Vergleich beruht weiterhin auf IISS 2023/24."

[[extra.changelog]]
date = 2026-11-08
text = "Mit SIPRI-Daten 2025 aktualisiert, NATO-Richtwert 3,5% + 1,5% ergänzt und den nicht belegbaren Abschnitt zu Budget und Bevölkerungsprioritäten samt 58%-Personalanteil entfernt."
+++

Die Schweiz gab 2025 laut SIPRI 0,76% des BIP für Verteidigung aus
(7,6 Mrd. USD), nach 0,70% im Jahr 2024. Damit liegt sie unter allen
verglichenen europäischen Ländern. Die Milizarmee mit rund 140'000
Angehörigen hält die Kosten pro Kopf tief, die Frage ist deshalb nicht nur
«wie viel mehr», sondern «wofür».


<!-- more -->

---

## Methodik

Verteidigungsausgaben als BIP-Anteil: SIPRI Military Expenditure Database
(Ausgabe April 2026, 2000–2025, 7 Länder). Pro-Soldat-Kosten: IISS Military
Balance 2024 (Stand 2023/24).

---

### Schweizer Ausgabentrend

{% chart(spec="verteidigung_ch_trend", alt="Schweizer Verteidigungsausgaben als BIP-Anteil im Zeitverlauf") %}
Die Schweizer Verteidigungsausgaben sind von rund 1% des BIP (2000) auf 0,64% (2014) gesunken und seither auf 0,76% (2025) gestiegen, weiterhin deutlich unter 1% des BIP. Real nahmen sie 2025 gegenüber dem Vorjahr um 9,4% zu (SIPRI). Der aktuelle politische Druck zur Aufstockung steht im Kontrast zu einem jahrzehntelangen Spartrend — die Frage ist nicht nur «wie viel mehr», sondern «wofür».
{% end %}

---

### Internationaler Vergleich

{% chart(spec="verteidigung_vergleich", alt="Verteidigungsausgaben als BIP-Anteil im internationalen Vergleich") %}
Im internationalen Vergleich liegt die Schweiz am unteren Ende: 2025 gaben Österreich 1,1%, Frankreich 2,0%, Deutschland 2,3%, Schweden 2,5% und Finnland 2,6% des BIP aus. Die NATO-Mitglieder haben sich am Gipfel von Den Haag (Juni 2025) verpflichtet, bis 2035 jährlich 5% des BIP aufzuwenden: mindestens 3,5% für Kernausgaben der Verteidigung und bis zu 1,5% für verteidigungs- und sicherheitsrelevante Ausgaben wie Infrastrukturschutz und Resilienz. Für die neutrale Schweiz gilt diese Vorgabe nicht, und ohne Bündnisverpflichtungen ist der direkte Vergleich relativ. Die Fähigkeitslücken werden dadurch aber nicht kleiner.
{% end %}

---

### Kosten pro aktivem Soldaten

{% chart(spec="verteidigung_pro_soldat", alt="Kosten pro aktivem Soldaten im Ländervergleich") %}
Das Milizmodell führt zu einer besonderen Kostenstruktur: Die Schweiz hat rund 140'000 Angehörige der Armee, der Grossteil leistet Milizdienst. Pro Kopf liegen die Kosten deshalb deutlich tiefer als bei Berufsarmeen. Direkt vergleichbar sind die Werte nicht, weil Milizangehörige keine Vollzeitstellen besetzen.
{% end %}

---

## Einschränkungen

- Miliz-Truppenstärke ≠ Vollzeitäquivalente (Kosten pro AdA nicht direkt vergleichbar)
- Pro-Soldat-Vergleich auf IISS-Stand 2023/24, nicht aktualisiert
- SIPRI-Daten: Definitionsunterschiede bei Verteidigungsausgaben zwischen Ländern; BIP-Anteile 2025 auf Basis von IWF-Schätzungen

---

## Datenquellen

- SIPRI Military Expenditure Database, Ausgabe April 2026: https://www.sipri.org/databases/milex (Datentabelle: https://www.sipri.org/sites/default/files/SIPRI-Milex-data-1949-2025.xlsx)
- SIPRI Fact Sheet «Trends in World Military Expenditure, 2025» (April 2026): https://www.sipri.org/sites/default/files/2026-04/2604_milex_2025.pdf
- NATO: Gipfel von Den Haag, 24.–25. Juni 2025 (5% des BIP bis 2035, davon 3,5% Kernausgaben und 1,5% verteidigungs- und sicherheitsrelevante Ausgaben), https://www.nato.int/en/news-and-events/articles/news/2025/06/27/nato-concludes-historic-summit-in-the-hague
- IISS: Military Balance 2024 — Truppenstärke und Budgets
