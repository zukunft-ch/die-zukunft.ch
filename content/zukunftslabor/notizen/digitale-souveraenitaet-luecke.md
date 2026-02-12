+++
title = "Digitale Bereitschaftslücke: Die Bevölkerung ist online — der Staat nicht"
description = "90% der Schweizer nutzen das Internet, aber E-Government und Open Data liegen unter dem EU-Durchschnitt. Das Problem ist nicht technologisch — es ist institutionell."
slug = "digitale-souveraenitaet-luecke"
date = 2026-02-12
template = "notiz.html"
draft = true

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["digitale-souveraenitaet", "e-government", "open-data", "e-id", "vergleich"]
charts = ["digital_internetnutzung_alter.svg", "digital_egov_trend.svg", "digital_luecke_alter.svg", "digital_eid_motive.svg", "digital_opendata_vergleich.svg"]
+++

90% der Schweizer Bevölkerung nutzen das Internet regelmässig — aber
E-Government-Nutzung, Online-Verfügbarkeit und Open-Data-Reife liegen
unter dem EU-Durchschnitt. Die Bereitschaftslücke zwischen digitaler
Bevölkerung und digitalem Staat beträgt 12.1 Prozentpunkte.
Das E-ID-Referendum 2021 zeigt: Die Lösung muss staatlich und
datenschutzfreundlich sein.


<!-- more -->

---

## Methodik

Die Analyse kombiniert zwei BFS-Omnibus-ICT-Datensätze (2014–2025):
Internetnutzung nach Altersgruppe (E-Mail als Proxy) und
E-Government-Nutzung nach Dienstart. Die «Bereitschaftslücke» ist die
Differenz zwischen allgemeiner Internetnutzung und E-Gov-Nutzung der
Gesamtbevölkerung. Ergänzt durch das EU Open Data Maturity Ranking und
VOX/Sotomo-Daten zum E-ID-Referendum 2021.

---

### Internetnutzung nach Altersgruppe

{% chart(spec="digital_internetnutzung_alter", alt="Internetnutzung nach Altersgruppe in der Schweiz") %}
Nahezu alle Altersgruppen unter 65 liegen über 90% Internetnutzung. Selbst die 65–74-Jährigen sind inzwischen mehrheitlich online. Das Problem ist nicht die digitale Kompetenz der Bevölkerung — es ist die fehlende digitale Infrastruktur auf Staatsseite.
{% end %}

---

### E-Government-Nutzung

{% chart(spec="digital_egov_trend", alt="E-Government-Nutzung im Zeitverlauf") %}
Die E-Government-Nutzung stagniert seit Jahren. Trotz zunehmender Internetdurchdringung ist der Anteil der Bevölkerung, der staatliche Online-Dienste nutzt, kaum gewachsen. Das deutet auf ein Angebotsproblem hin: Nicht die Nachfrage fehlt, sondern brauchbare digitale Services.
{% end %}

---

### Bereitschaftslücke

{% chart(spec="digital_luecke_alter", alt="Digitale Bereitschaftslücke zwischen Bevölkerung und Staat") %}
Die Lücke zwischen allgemeiner Internetnutzung und E-Gov-Nutzung beträgt rund 12 Prozentpunkte. Diese Bereitschaftslücke ist kein technologisches, sondern ein institutionelles Problem: Die Bevölkerung ist bereit — der Staat nicht.
{% end %}

---

### E-ID-Referendum: Vertrauensfrage

{% chart(spec="digital_eid_motive", alt="Ablehnungsmotive beim E-ID-Referendum 2021") %}
Das Nein zur E-ID 2021 war keine Ablehnung digitaler Identitäten, sondern des privatwirtschaftlichen Modells. Datenschutzbedenken und fehlendes Vertrauen in private Anbieter waren die Hauptmotive. Eine staatliche, datenschutzfreundliche Lösung hat weiterhin breite Unterstützung.
{% end %}

---

### Open-Data-Reife

{% chart(spec="digital_opendata_vergleich", alt="Open-Data-Reife: Schweiz vs. EU-Durchschnitt") %}
Im EU Open Data Maturity Ranking liegt die Schweiz unter dem Durchschnitt — sowohl bei der Verfügbarkeit als auch bei der Nutzbarkeit offener Verwaltungsdaten. Das erschwert Innovation, Transparenz und datenbasierte Politikgestaltung.
{% end %}

---

## Einschränkungen

- E-Mail-Nutzung als Proxy für Internetnutzung (BFS-Definition)
- E-Gov-Daten nicht nach Altersgruppe verfügbar — Lücke nur auf Totalebene berechenbar
- Open-Data-Score basiert auf EU-Methodik (Schweiz als Beobachterstaat)
- E-ID-Motive: VOX-Nachbefragung mit begrenzter Stichprobe

---

## Datenquellen

- BFS Omnibus ICT 2014–2025: Internetnutzung, E-Government-Nutzung
- EU Open Data Maturity Report 2023 (data.europa.eu)
- VOX/Sotomo: Nachbefragung E-ID-Referendum 7. März 2021

