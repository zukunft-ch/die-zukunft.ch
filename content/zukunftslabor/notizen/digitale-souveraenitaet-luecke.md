+++
title = "Digitale Bereitschaftslücke: Die Bevölkerung ist online — der Staat nicht"
description = "90% der Schweizer nutzen das Internet, aber E-Government und Open Data liegen unter dem EU-Durchschnitt. Das Problem ist nicht technologisch — es ist institutionell."
slug = "digitale-souveraenitaet-luecke"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "02_digitale_souveraenitaet"
pillar = "digitale-souveraenitaet"
category = "datenbriefing"
evidence = "mittel"
tags = ["digitale-souveraenitaet", "e-government", "open-data", "e-id", "vergleich"]
charts = ["digital_internetnutzung_alter.svg", "digital_egov_trend.svg", "digital_luecke_alter.svg", "digital_eid_motive.svg", "digital_opendata_vergleich.svg"]

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "BFS-Omnibus-IKT-Daten bis 2025 geprüft und mit dem E-ID-Resultat vom 28. September 2025 sowie dem Open Data Maturity Report 2025 aktualisiert."

[[extra.changelog]]
date = 2026-11-08
text = "Zahlen zu Internet- und E-Government-Nutzung an die BFS-Daten 2025 angepasst, E-ID-Abstimmung 2025 und Open-Data-Reife 2025 ergänzt und die Motivgrafik durch belegte VOX-Werte ersetzt."
+++

90% der Schweizer Bevölkerung nutzen das Internet regelmässig — aber
E-Government-Nutzung, Online-Verfügbarkeit und Open-Data-Reife liegen
unter dem EU-Durchschnitt. Die Bereitschaftslücke zwischen digitaler
Bevölkerung und digitalem Staat betrug 2025 13,2 Prozentpunkte.
2021 scheiterte ein privatwirtschaftliches E-ID-Modell an der Urne
(64,4% Nein); die staatliche E-ID wurde am 28. September 2025 nur knapp
angenommen (50,4% Ja).


<!-- more -->

---

## Methodik

Die Analyse kombiniert zwei BFS-Omnibus-ICT-Datensätze (2014–2025):
Internetnutzung nach Altersgruppe (E-Mail als Proxy) und
E-Government-Nutzung nach Dienstart. Die «Bereitschaftslücke» ist die
Differenz zwischen allgemeiner Internetnutzung und E-Gov-Nutzung der
Gesamtbevölkerung. Ergänzt durch den EU Open Data Maturity Report 2025, die
VOX-Nachbefragung (gfs.bern) zum E-ID-Referendum 2021 und die amtlichen
Resultate der E-ID-Abstimmungen 2021 und 2025.

---

### Internetnutzung nach Altersgruppe

{% chart(spec="digital_internetnutzung_alter", alt="Internetnutzung nach Altersgruppe in der Schweiz") %}
Die 15–29- und die 30–59-Jährigen liegen bei rund 95% Internetnutzung. Selbst von den über 60-Jährigen sind inzwischen knapp 80% online. Das Problem ist nicht die digitale Kompetenz der Bevölkerung — es ist die fehlende digitale Infrastruktur auf Staatsseite.
{% end %}

---

### E-Government-Nutzung

{% chart(spec="digital_egov_trend", alt="E-Government-Nutzung im Zeitverlauf") %}
Die E-Government-Nutzung ist von 67% (2014) auf 82% (2023) gestiegen, 2025 aber auf 77% zurückgefallen — obwohl die Internetnutzung weiter zunahm. Das deutet auf ein Angebotsproblem hin: Nicht die Nachfrage fehlt, sondern brauchbare digitale Services.
{% end %}

---

### Bereitschaftslücke

{% chart(spec="digital_luecke_alter", alt="Digitale Bereitschaftslücke zwischen Bevölkerung und Staat") %}
Die Lücke zwischen allgemeiner Internetnutzung und E-Gov-Nutzung lag 2025 bei rund 13 Prozentpunkten, nachdem sie sich bis 2021 auf 8 Prozentpunkte verkleinert hatte. Diese Bereitschaftslücke ist kein technologisches, sondern ein institutionelles Problem: Die Bevölkerung ist bereit — der Staat nicht.
{% end %}

---

### E-ID-Referendum: Vertrauensfrage

{% chart(spec="digital_eid_motive", alt="Nein-Motive beim E-ID-Referendum 2021 (VOX-Analyse)") %}
Das Nein zur E-ID 2021 (64,4%) richtete sich vor allem gegen das privatwirtschaftliche Modell: In der VOX-Nachbefragung nannten die Nein-Stimmenden am häufigsten Datenschutz und Datensicherheit (60% aller Nennungen) sowie die Rolle des Staates (49%), etwa «E-ID soll staatlich sein» (25%). Die neu aufgesetzte, staatliche E-ID wurde am 28. September 2025 mit 50,4% Ja angenommen. Das knappe Resultat zeigt: Vertrauen in Datenschutz und staatliche Verantwortung ist die Bedingung für digitale Identität, keine Selbstverständlichkeit.
{% end %}

---

### Open-Data-Reife

{% chart(spec="digital_opendata_vergleich", alt="Open-Data-Reife 2025: Schweiz im Vergleich mit dem EU-Durchschnitt und ausgewählten Ländern") %}
Im Open Data Maturity Report 2025 erreicht die Schweiz 82% (2 Punkte mehr als 2024) und gehört zur Gruppe der «Followers» (73–84%). Der EU-27-Schnitt liegt bei 86%, Frankreich führt mit 100%. Fortschritte gibt es, etwa das Prinzip «open by default» im EMBAG und den Masterplan OGD 2024–2027; der Abstand zu den führenden Ländern bleibt. Das erschwert Innovation, Transparenz und datenbasierte Politikgestaltung.
{% end %}

---

## Einschränkungen

- E-Mail-Nutzung als Proxy für Internetnutzung (BFS-Definition)
- E-Gov-Daten nicht nach Altersgruppe verfügbar — Lücke nur auf Totalebene berechenbar
- Open-Data-Score basiert auf EU-Methodik (Schweiz als teilnehmendes EFTA-Land)
- E-ID-Motive: VOX-Nachbefragung mit begrenzter Stichprobe, offene Frage mit Mehrfachnennungen

---

## Datenquellen

- BFS Omnibus IKT 2014–2025: Internetnutzung, E-Government-Nutzung
- data.europa.eu: Open Data Maturity Report 2025, https://data.europa.eu/sites/default/files/2025-12/2025_odm_report_7.pdf
- data.europa.eu: Open Data Maturity 2025, Länderprofil Schweiz, https://data.europa.eu/sites/default/files/2025-12/2025_odm_factsheet_switzerland.pdf
- gfs.bern: VOX-Analyse März 2021 (E-ID-Gesetz), https://swissvotes.ch/vote/639.00/nachbefragung-de.pdf
- Swissvotes: E-ID-Gesetz 7. März 2021, abgelehnt mit 64,4% Nein, https://swissvotes.ch/vote/639.00
- SRF: Abstimmung 28. September 2025, E-ID-Gesetz angenommen mit 50,4% Ja, https://www.srf.ch/news/schweiz/abstimmungen-28-september-so-hat-die-schweiz-abgestimmt
