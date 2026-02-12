+++
title = "Verteidigung: Was kauft der Schweizer Verteidigungsfranken?"
description = "Die Schweiz gibt 0.706% des BIP für Verteidigung aus. 58% gehen in Personal — aber die Bevölkerung will Cyber und Katastrophenhilfe."
slug = "verteidigung-ausgaben-prioritaeten"
date = 2026-02-12
template = "notiz.html"
draft = true

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["verteidigung", "budget", "armee", "sicherheit", "miliz"]
charts = ["verteidigung_ch_trend.svg", "verteidigung_vergleich.svg", "verteidigung_pro_soldat.svg", "verteidigung_prioritaeten_luecke.svg"]
+++

Die Schweiz gibt 0.706% des BIP für Verteidigung aus (2023). Die
Miliz-Truppenstärke (140'000) bindet 58% des Budgets für Personal. Cyber und
Katastrophenhilfe — Toppriorität der Bevölkerung (82%/88%) — erhalten je nur 3-4%.


<!-- more -->

---

## Methodik

Verteidigungsausgaben als BIP-Anteil: World Bank / SIPRI (2000–2023,
8 Länder). Pro-Soldat-Kosten: IISS Military Balance 2024.
Budgetallokation: VBS Armeebotschaft 2024, vereinfachte Kategorien.
Bevölkerungsprioritäten: ETH CSS Sicherheitsstudie 2024.

---

### Schweizer Ausgabentrend

{% chart(spec="verteidigung_ch_trend", alt="Schweizer Verteidigungsausgaben als BIP-Anteil im Zeitverlauf") %}
Die Schweizer Verteidigungsausgaben sind seit den 1990er-Jahren kontinuierlich gesunken und liegen heute deutlich unter 1% des BIP. Der aktuelle politische Druck zur Aufstockung steht im Kontrast zu einem Jahrzehnte langen Spartrend — die Frage ist nicht nur «wie viel mehr», sondern «wofür».
{% end %}

---

### Internationaler Vergleich

{% chart(spec="verteidigung_vergleich", alt="Verteidigungsausgaben als BIP-Anteil im internationalen Vergleich") %}
Im internationalen Vergleich liegt die Schweiz am unteren Ende — unter dem NATO-Ziel von 2% und unter den meisten europäischen Nachbarn. Dabei ist zu beachten: Die Schweiz hat keine Bündnisverpflichtungen, was den direkten Vergleich relativiert, aber die Fähigkeitslücken nicht kleiner macht.
{% end %}

---

### Kosten pro aktivem Soldaten

{% chart(spec="verteidigung_pro_soldat", alt="Kosten pro aktivem Soldaten im Ländervergleich") %}
Das Milizmodell führt zu einer besonderen Kostenstruktur: Die Schweiz hat 140'000 Angehörige der Armee, aber der Grossteil dient im Milizdienst. Die Kosten pro Soldat liegen im Vergleich zu Berufsarmeen tiefer — dafür binden Personalkosten 58% des Gesamtbudgets und lassen wenig Raum für Modernisierung.
{% end %}

---

### Budget vs. Bevölkerungsprioritäten

{% chart(spec="verteidigung_prioritaeten_luecke", alt="Budgetallokation vs. Prioritäten der Bevölkerung") %}
Die Diskrepanz zwischen Budgetallokation und Bevölkerungsprioritäten ist frappant: Cyber-Sicherheit und Katastrophenhilfe werden von 82–88% der Bevölkerung als prioritär eingestuft, erhalten aber je nur 3–4% des Budgets. Klassische Landesverteidigung bindet das meiste Geld — obwohl die Bedrohungswahrnehmung sich verschoben hat.
{% end %}

---

## Einschränkungen

- Miliz-Truppenstärke ≠ Vollzeitäquivalente (Kosten pro AdA nicht direkt vergleichbar)
- VBS-Budgetkategorien vereinfacht dargestellt
- Bevölkerungsprioritäten: Befragung (nicht gewichtet nach Sicherheitsexpertise)
- SIPRI-Daten: Definitionsunterschiede bei Verteidigungsausgaben zwischen Ländern

---

## Datenquellen

- World Bank / SIPRI: Military expenditure (% of GDP), 2000–2023
- IISS: Military Balance 2024 — Truppenstärke und Budgets
- VBS: Armeebotschaft 2024 — Budgetallokation
- ETH CSS: Sicherheit 2024 — Sicherheitspolitische Meinungsbildung

