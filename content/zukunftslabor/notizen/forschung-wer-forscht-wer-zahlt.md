+++
title = "Forschung: Wer forscht, wer zahlt — und was kommt zurück?"
description = "Die Schweiz ist Weltspitze bei F&E pro Kopf und Patenteffizienz. Aber die Privatwirtschaft dominiert — und die Frage nach dem öffentlichen Ertrag öffentlicher Forschung bleibt offen."
slug = "forschung-wer-forscht-wer-zahlt"
date = 2026-02-12
template = "notiz.html"
draft = true

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["forschung", "innovation", "patente", "oecd", "f-und-e"]
charts = ["forschung_sektoren_zeitreihe.svg", "forschung_privat_oeffentlich_ratio.svg", "forschung_patente_effizienz.svg", "forschung_konzentration.svg"]
+++

Die Schweiz investiert 25.6 Mrd. CHF in F&E
(2023) und erzielt mit 182 EPO-Patenten pro Milliarde weltweit die
höchste Patenteffizienz. Aber die Privatwirtschaft überwiegt die öffentliche
Forschung um das 2.37-Fache — und die Top 2 Sektoren
vereinen 45.4% der Ausgaben.


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
Die Privatwirtschaft dominiert die F&E-Ausgaben und ihr Anteil wächst. Das zeigt Innovationskraft — aber auch eine Abhängigkeit: Wenn wenige Grosskonzerne den Grossteil der Forschung finanzieren, entstehen blinde Flecken bei Themen ohne direkten Marktanreiz.
{% end %}

---

### Privat vs. Öffentlich

{% chart(spec="forschung_privat_oeffentlich_ratio", alt="Verhältnis private zu öffentliche F&E-Ausgaben") %}
Das Verhältnis zwischen privaten und öffentlichen F&E-Ausgaben ist in der Schweiz eines der höchsten weltweit. Das ist einerseits ein Zeichen für eine forschungsstarke Privatwirtschaft — andererseits stellt sich die Frage, ob öffentliche Forschung genug Eigengewicht hat, um Grundlagen und Gemeinwohlthemen abzudecken.
{% end %}

---

### Patenteffizienz im internationalen Vergleich

{% chart(spec="forschung_patente_effizienz", alt="Patentanmeldungen pro Milliarde F&E-Ausgaben im internationalen Vergleich") %}
Die Schweiz erzielt weltweit die höchste Patenteffizienz: Mehr EPO-Patente pro investierte Milliarde als jedes andere Land. Das spricht für eine effektive Umsetzungskette von Forschung zu verwertbarem Wissen — ein Standortvorteil, der gepflegt werden muss.
{% end %}

---

### Sektorkonzentration

{% chart(spec="forschung_konzentration", alt="Konzentration der F&E-Ausgaben auf wenige Sektoren") %}
Zwei Sektoren — Pharma und ICT — vereinen den Grossteil der privaten F&E. Das macht die Forschungslandschaft verletzlich: Ein Standortwechsel eines einzigen Unternehmens könnte die Gesamtstatistik markant verschieben. Diversifikation der Forschungsbasis ist eine strategische Frage.
{% end %}

---

## Einschränkungen

- BFS-Daten alle 2 Jahre erhoben (keine Jahreswerte)
- Patenteffizienz: EPO-Patente als Proxy (nicht alle Innovationen münden in Patente)
- Private F&E-Ausgaben teilweise geschätzt (Unternehmensgeheimnisse)
- Sektorklassifikation folgt BFS-Logik (Frascati-Manual)

---

## Datenquellen

- BFS: Forschung und Entwicklung — Intramuros-Aufwendungen (2000–2023)
- EPO: Annual Report 2023 — Patentanmeldungen nach Herkunftsland
- OECD: Main Science and Technology Indicators (GERD)

