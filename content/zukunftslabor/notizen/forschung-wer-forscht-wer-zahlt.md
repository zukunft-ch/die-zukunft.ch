+++
title = "Forschung: Wer forscht, wer zahlt — und was kommt zurück?"
description = "Die Schweiz investiert viel in F&E und meldet pro Kopf die meisten europäischen Patente an. Aber die Privatwirtschaft dominiert — und die Frage nach dem öffentlichen Ertrag öffentlicher Forschung bleibt offen."
slug = "forschung-wer-forscht-wer-zahlt"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "05_forschung_innovation"
pillar = "research-innovation"
category = "datenbriefing"
evidence = "stark"
tags = ["forschung", "innovation", "patente", "oecd", "f-und-e"]
charts = ["forschung_sektoren_zeitreihe.svg", "forschung_privat_oeffentlich_ratio.svg", "forschung_patente_effizienz.svg", "forschung_konzentration.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "BFS-F&E-Daten 2023 geprüft; die Patentkennzahlen beruhen auf dem EPO Annual Report 2023, die EPO-Zahlen 2025 (Technology Dashboard 2025) sind noch nicht eingearbeitet."

[[extra.changelog]]
date = 2026-11-08
text = "Aussagen zum Verhältnis privat/öffentlich und zur Sektorkonzentration an die Daten angepasst und unbelegte Superlative entfernt."
+++

Die Schweiz investiert 25,6 Mrd. CHF in F&E
(2023) und erzielt mit 182 EPO-Patenten pro Milliarde die höchste
Patenteffizienz unter den verglichenen Ländern. Aber die Privatwirtschaft überwiegt die öffentliche
Forschung um das 2,37-Fache — und die Top 2 Sektoren
vereinen 45,4% der Ausgaben.


<!-- more -->

---

## Methodik

Grundlage sind die BFS-Forschungsstatistik (intramuros F&E-Aufwendungen nach Sektor,
2000–2023) und EPO-Patentdaten (Annual Report 2023). Die
Privatwirtschaft umfasst Pharma, Metallurgie, ICT, Instrumente und andere
Industriesektoren. Öffentlich: Hochschulen, ETH-Bereich, Bundesämter.

---

### F&E-Ausgaben im Zeitverlauf

{% chart(spec="forschung_sektoren_zeitreihe", alt="F&E-Ausgaben nach Sektor im Zeitverlauf") %}
Die Privatwirtschaft dominiert die F&E-Ausgaben, ihr Vorsprung ist seit 2000 aber geschrumpft (Verhältnis privat zu öffentlich: 3,1 → 2,4) und wächst erst seit 2017 wieder leicht. Das zeigt Innovationskraft — aber auch eine Abhängigkeit: Wenn wenige Grosskonzerne den Grossteil der Forschung finanzieren, entstehen blinde Flecken bei Themen ohne direkten Marktanreiz.
{% end %}

---

### Privat vs. Öffentlich

{% chart(spec="forschung_privat_oeffentlich_ratio", alt="Verhältnis private zu öffentliche F&E-Ausgaben") %}
Die Privatwirtschaft wendet in der Schweiz deutlich mehr für F&E auf als die öffentliche Hand (2023: 2,4 zu 1). Das ist einerseits ein Zeichen für eine forschungsstarke Privatwirtschaft — andererseits stellt sich die Frage, ob öffentliche Forschung genug Eigengewicht hat, um Grundlagen und Gemeinwohlthemen abzudecken.
{% end %}

---

### Patenteffizienz im internationalen Vergleich

{% chart(spec="forschung_patente_effizienz", alt="Patentanmeldungen pro Milliarde F&E-Ausgaben im internationalen Vergleich") %}
Unter den verglichenen Ländern erzielt die Schweiz die höchste Patenteffizienz: mehr EPO-Patentanmeldungen pro investierte Milliarde als Schweden, die Niederlande, Deutschland, Österreich, Frankreich, die USA und Japan. Auch pro Kopf meldet die Schweiz laut EPO (Technology Dashboard 2025) unter den Ländern mit mehr als einer Million Einwohnern die meisten europäischen Patente an. Das spricht für eine effektive Umsetzungskette von Forschung zu verwertbarem Wissen — ein Standortvorteil, der gepflegt werden muss.
{% end %}

---

### Sektorkonzentration

{% chart(spec="forschung_konzentration", alt="Konzentration der F&E-Ausgaben auf wenige Sektoren") %}
Ein Sektor — Chemie/Pharma — trägt rund ein Drittel der privaten F&E, zusammen mit ICT fast die Hälfte. Das macht die Forschungslandschaft verletzlich: Ein Standortwechsel eines einzigen Unternehmens könnte die Gesamtstatistik markant verschieben. Diversifikation der Forschungsbasis ist eine strategische Frage.
{% end %}

---

## Einschränkungen

- BFS-Daten alle 2 Jahre erhoben (keine Jahreswerte)
- Patenteffizienz: EPO-Patente als Proxy (nicht alle Innovationen münden in Patente); Auswahl von acht Ländern
- Patentdaten Stand 2023; die EPO-Zahlen 2025 (Technology Dashboard 2025, Nachfolger des Patent Index) sind noch nicht eingearbeitet
- Private F&E-Ausgaben teilweise geschätzt (Unternehmensgeheimnisse)
- Sektorklassifikation folgt BFS-Logik (Frascati-Manual)

---

## Datenquellen

- BFS: Forschung und Entwicklung — Intramuros-Aufwendungen (2000–2023)
- EPO: Annual Report 2023 — Patentanmeldungen nach Herkunftsland
- OECD: Main Science and Technology Indicators (GERD)
- EPO: Technology Dashboard 2025 (Patentanmeldungen pro Kopf), https://www.epo.org/en/about-us/statistics/technology-dashboard-2025
