+++
title = "Weiterbildung: Wer bildet sich weiter — und wer nicht?"
description = "Die Schere bei der Weiterbildung ist riesig: Hochqualifizierte bilden sich 2.6× häufiger weiter als Geringqualifizierte. Gerade die am stärksten exponierten Branchen investieren zu wenig."
slug = "weiterbildung-teilnahme-luecken"
date = 2026-02-12
template = "notiz.html"
draft = true

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["weiterbildung", "bildung", "automatisierung", "arbeitsmarkt"]
charts = ["weiterbildung_bildungsniveau.svg", "weiterbildung_altersgruppe.svg", "weiterbildung_zeitreihe.svg", "weiterbildung_automatisierung_kreuz.svg"]
+++

Die Weiterbildungsteilnahme stagniert bei 60% — und die Schere zwischen
Hoch- und Geringqualifizierten (79% vs. 30%) ist enorm. Branchen mit
hohem Automatisierungsrisiko bilden sich oft unterdurchschnittlich weiter.


<!-- more -->

---

## Methodik

Weiterbildungsdaten aus dem BFS Mikrozensus Aus- und Weiterbildung
(2011, 2016, 2021). Teilnahme an nicht-formaler Weiterbildung (Kurse,
Seminare, betriebliche Schulungen). Beschäftigungsdaten aus BFS SAKE
(2024). Automatisierungsrisiko: IMF AI Preparedness Index 2024.

---

### Nach Bildungsniveau

{% chart(spec="weiterbildung_bildungsniveau", alt="Weiterbildungsteilnahme nach Bildungsniveau") %}
Hochqualifizierte bilden sich 2.6-mal häufiger weiter als Geringqualifizierte. Diese Schere ist das zentrale Problem: Wer bereits gut ausgebildet ist, investiert weiter — wer es am meisten bräuchte, bleibt zurück. Ohne gezielte Angebote für Geringqualifizierte verschärft Weiterbildung die Ungleichheit statt sie zu mindern.
{% end %}

---

### Nach Altersgruppe

{% chart(spec="weiterbildung_altersgruppe", alt="Weiterbildungsteilnahme nach Altersgruppe") %}
Die Teilnahme fällt ab 45 Jahren deutlich ab. Gerade für die Altersgruppe 45–64 ist Weiterbildung aber entscheidend: Sie müssen noch 15–20 Jahre in einem sich wandelnden Arbeitsmarkt bestehen. Der Rückgang ist weniger ein individuelles Problem als ein Versagen der betrieblichen und institutionellen Angebotsstruktur.
{% end %}

---

### Zeitreihe

{% chart(spec="weiterbildung_zeitreihe", alt="Weiterbildungsteilnahme 2011–2021") %}
Ein Jahrzehnt nahezu Stillstand: Die Gesamtquote bewegt sich seit 2011 um die 60%. Trotz Digitalisierungsdebatte, Automatisierungsängsten und politischer Rhetorik hat sich an der tatsächlichen Weiterbildungsbeteiligung wenig geändert.
{% end %}

---

### Kreuzanalyse mit Automatisierungsrisiko

{% chart(spec="weiterbildung_automatisierung_kreuz", alt="Weiterbildungsquote vs. Automatisierungsrisiko nach Branche") %}
Der kritischste Befund: Branchen mit dem höchsten Automatisierungsrisiko weisen oft die tiefste Weiterbildungsquote auf. Die am stärksten exponierten Sektoren investieren am wenigsten in die Anpassungsfähigkeit ihrer Beschäftigten — ein strukturelles Risiko, das politische Intervention erfordert.
{% end %}

---

## Einschränkungen

- BFS Mikrozensus wird nur alle 5 Jahre erhoben
- Branchenspezifische Weiterbildungsquoten teilweise geschätzt
- Qualität der Weiterbildung nicht erfasst (nur Teilnahme)
- Korrelation ≠ Kausalität

---

## Datenquellen

- BFS: Mikrozensus Aus- und Weiterbildung 2011, 2016, 2021
- BFS: SAKE 2024 — Erwerbstätige nach Wirtschaftsabschnitt
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)

