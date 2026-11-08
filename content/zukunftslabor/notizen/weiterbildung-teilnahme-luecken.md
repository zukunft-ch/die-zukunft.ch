+++
title = "Weiterbildung: Wer bildet sich weiter — und wer nicht?"
description = "Die Schere bei der Weiterbildung ist riesig: Hochqualifizierte bilden sich 2,6× häufiger weiter als Geringqualifizierte. Am wenigsten bilden sich Branchen mit viel manueller Arbeit weiter — nicht die Büroberufe mit dem höchsten KI-Risiko."
slug = "weiterbildung-teilnahme-luecken"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "07_uebergaenge_weiterbildung"
pillar = "uebergaenge"
category = "datenbriefing"
evidence = "mittel"
tags = ["weiterbildung", "bildung", "automatisierung", "arbeitsmarkt"]
charts = ["weiterbildung_bildungsniveau.svg", "weiterbildung_altersgruppe.svg", "weiterbildung_zeitreihe.svg", "weiterbildung_automatisierung_kreuz.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Weiterbildungsdaten des BFS-Mikrozensus 2021 und SAKE 2024 geprüft; das Automatisierungsrisiko nach Branche ist modelliert, nicht gemessen."

[[extra.changelog]]
date = 2026-11-08
text = "Aussagen zu Altersgruppen und zum Zusammenhang mit dem Automatisierungsrisiko an die Daten angepasst, Quelle des Risikomasses präzisiert und Diagrammbeschriftungen korrigiert."
+++

Die Weiterbildungsteilnahme stagniert bei 60% — und die Schere zwischen
Hoch- und Geringqualifizierten (79% vs. 30%) ist enorm. Die tiefsten Quoten haben
Gastgewerbe, Verkehr und Bau — nicht die Branchen mit dem höchsten KI-Risiko.


<!-- more -->

---

## Methodik

Weiterbildungsdaten aus dem BFS Mikrozensus Aus- und Weiterbildung
(2011, 2016, 2021). Teilnahme an nicht-formaler Weiterbildung (Kurse,
Seminare, betriebliche Schulungen). Beschäftigungsdaten aus BFS SAKE
(2024). Automatisierungsrisiko: modellierte Post-LLM-Branchenwerte aus der
Notiz «Automatisierungsrisiko nach Branche» (eigene Annahmen in Anlehnung
an IMF, Cazzaniga et al. 2024, keine gemessenen Werte).

---

### Nach Bildungsniveau

{% chart(spec="weiterbildung_bildungsniveau", alt="Weiterbildungsteilnahme nach Bildungsniveau") %}
Hochqualifizierte bilden sich 2,6-mal häufiger weiter als Geringqualifizierte. Diese Schere ist das zentrale Problem: Wer bereits gut ausgebildet ist, investiert weiter — wer es am meisten bräuchte, bleibt zurück. Ohne gezielte Angebote für Geringqualifizierte verschärft Weiterbildung die Ungleichheit statt sie zu mindern.
{% end %}

---

### Nach Altersgruppe

{% chart(spec="weiterbildung_altersgruppe", alt="Weiterbildungsteilnahme nach Altersgruppe") %}
Die Teilnahme sinkt mit dem Alter und fällt ab 55 Jahren deutlich ab (55–64: 51%). Gerade für die Altersgruppe 45–64 ist Weiterbildung aber entscheidend: Sie müssen noch 15–20 Jahre in einem sich wandelnden Arbeitsmarkt bestehen. Der Rückgang ist weniger ein individuelles Problem als ein Versagen der betrieblichen und institutionellen Angebotsstruktur.
{% end %}

---

### Zeitreihe

{% chart(spec="weiterbildung_zeitreihe", alt="Weiterbildungsteilnahme 2011–2021") %}
Ein Jahrzehnt nahezu Stillstand: Die Gesamtquote bewegt sich seit 2011 um die 60%. Trotz Digitalisierungsdebatte, Automatisierungsängsten und politischer Rhetorik hat sich an der tatsächlichen Weiterbildungsbeteiligung wenig geändert.
{% end %}

---

### Kreuzanalyse mit Automatisierungsrisiko

{% chart(spec="weiterbildung_automatisierung_kreuz", alt="Weiterbildungsquote vs. Automatisierungsrisiko nach Branche") %}
Der Zusammenhang ist schwach positiv (r = 0,28): Die Branchen mit dem höchsten Post-LLM-Risiko — Finanz, freiberufliche Dienstleistungen, ICT — bilden sich überdurchschnittlich weiter (75–78%). Die tiefsten Quoten haben Gastgewerbe (35%), sonstige wirtschaftliche Dienstleistungen (38%) und Verkehr (40%), deren Risiko im mittleren Bereich liegt. Dort fehlt die Anpassungsfähigkeit für den nächsten Strukturwandel — ein strukturelles Risiko, das gezielte Angebote erfordert.
{% end %}

---

## Einschränkungen

- BFS Mikrozensus wird nur alle 5 Jahre erhoben
- Branchenspezifische Weiterbildungsquoten teilweise geschätzt
- Automatisierungsrisiko nach Branche modelliert, nicht gemessen
- Qualität der Weiterbildung nicht erfasst (nur Teilnahme)
- Korrelation ≠ Kausalität

---

## Datenquellen

- BFS: Mikrozensus Aus- und Weiterbildung 2011, 2016, 2021
- BFS: SAKE 2024 — Erwerbstätige nach Wirtschaftsabschnitt
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)

