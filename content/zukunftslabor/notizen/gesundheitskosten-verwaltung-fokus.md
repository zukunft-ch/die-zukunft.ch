+++
title = "Gesundheitskosten: Wo fliesst das Geld — und wo versickert es?"
description = "2024 kostete das Schweizer Gesundheitswesen 97,2 Mrd. Franken, 4,4% davon entfielen auf Verwaltung (BFS). Nach OECD-Abgrenzung liegt der Anteil bei 5,2%, über dem OECD-Schnitt von 3,3%."
slug = "gesundheitskosten-verwaltung-fokus"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "08_life_science_gesundheit"
pillar = "life-science"
category = "datenbriefing"
evidence = "stark"
tags = ["gesundheit", "kosten", "verwaltung", "oecd", "effizienz"]
charts = ["gesundheit_ausgaben_kategorien.svg", "gesundheit_verwaltungsanteil_trend.svg", "gesundheit_verwaltung_international.svg", "gesundheit_verwaltungsueberschuss.svg"]

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Mit den BFS-Gesundheitskosten 2023 und 2024 (Revision 2025) und der Zahl der Krankenversicherer laut BAG aktualisiert; der OECD-Vergleich beruht weiterhin auf Health at a Glance 2023."

[[extra.changelog]]
date = 2026-11-08
text = "Mit BFS-Daten 2023/2024 aktualisiert, OECD- und BFS-Abgrenzung getrennt ausgewiesen, Betrag pro Person neu berechnet (rund 17 statt 10 Franken pro Monat) und Zahl der Krankenversicherer korrigiert."
+++

Das Schweizer Gesundheitswesen kostete 2024 97,2 Mrd. Franken
(2023: 93,4 Mrd.), davon 4,24 Mrd. oder 4,4% für Verwaltung (BFS).
Nach OECD-Abgrenzung liegt die Schweiz mit 5,2% über dem OECD-Schnitt
(3,3%). Die Differenz entspricht rund 17 Franken pro Person und Monat.


<!-- more -->

---

## Methodik

BFS-Statistik der Kosten und der Finanzierung des Gesundheitswesens nach
dem System of Health Accounts (SHA). Die lange Reihe 1995–2019 beruht auf
der Methodik vor der BFS-Revision vom April 2025; revidierte Werte liegen für
2019, 2023 und 2024 vor und sind separat ausgewiesen (2024 provisorisch).
Kategorien: ambulante/stationäre Kurativbehandlung, Langzeitpflege,
Gesundheitsgüter, Verwaltung, Prävention. Internationaler Vergleich auf
Basis OECD Health at a Glance 2023 (OECD-Abgrenzung, nicht deckungsgleich
mit den BFS-Werten).

---

### Ausgaben nach Kategorie im Zeitverlauf

{% chart(spec="gesundheit_ausgaben_kategorien", alt="Gesundheitsausgaben nach Kategorie im Zeitverlauf") %}
Die Gesundheitsausgaben steigen kontinuierlich — aber nicht gleichmässig. Ambulante und stationäre Versorgung machen den Löwenanteil aus. Die Verwaltungskosten haben sich zwischen 1995 und 2019 fast verdoppelt (1,7 → 3,3 Mrd. CHF, alte BFS-Methodik), sind aber langsamer gewachsen als die Gesamtausgaben. Nach revidierter Methodik lagen sie 2024 bei 4,24 Mrd. Franken; 2023 stiegen sie um 9,6%, deutlich stärker als die Gesamtkosten. Offen bleibt die Frage, wie viel vom Prämienanstieg in Behandlung fliesst und wie viel in Bürokratie.
{% end %}

---

### Verwaltungsanteil im Zeitverlauf

{% chart(spec="gesundheit_verwaltungsanteil_trend", alt="Verwaltungsanteil an den Gesundheitskosten im Zeitverlauf") %}
Nach alter BFS-Abgrenzung ist der Verwaltungsanteil von rund 5% (1995) auf 4% (2019) gesunken. Nach der revidierten Methodik liegt er etwas höher: 4,1% (2019), 4,5% (2023) und 4,4% (2024). Im OECD-Vergleich bleibt er hoch: Die Versicherungslandschaft mit 42 Krankenversicherern (2025, BAG) erzeugt strukturelle Mehrkosten — Rechnungswesen, Marketing, Risikoselektion —, die in einem einfacheren System teilweise nicht anfallen würden.
{% end %}

---

### Internationaler Vergleich

{% chart(spec="gesundheit_verwaltung_international", alt="Verwaltungsanteil im internationalen Vergleich") %}
Nach OECD-Abgrenzung (5,2%) liegt die Schweiz bei den Verwaltungskosten deutlich über dem OECD-Durchschnitt (3,3%); nach BFS-Abgrenzung sind es 4,4%. Länder mit zentralisierteren Systemen (z.B. Schweden) erzielen tiefere Verwaltungsanteile bei vergleichbarer oder besserer Versorgungsqualität. Der Vergleich zeigt: Effizienzgewinne sind möglich.
{% end %}

---

### Verwaltungsüberschuss

{% chart(spec="gesundheit_verwaltungsueberschuss", alt="Verwaltungsanteil der Schweiz gegenüber dem OECD-Schnitt") %}
Die Differenz von 1,9 Prozentpunkten zum OECD-Schnitt entspricht, angewendet auf die BFS-Gesundheitskosten 2024 von 899 Franken pro Kopf und Monat, rund 17 Franken pro Person und Monat. Rechnet man mit dem BFS-Verwaltungsanteil (4,4%), sind es rund 10 Franken. Dieses Geld geht nicht in Behandlungen, Medikamente oder Pflege — es finanziert administrative Strukturen, deren Vereinfachung die Prämien senken würde.
{% end %}

---

## Einschränkungen

- SHA-Harmonisierung erleichtert Vergleiche, aber Systemunterschiede bleiben
- BFS-Revision 2025: Werte vor und nach der Revision sind nicht direkt vergleichbar; Werte 2024 provisorisch
- OECD- und BFS-Abgrenzung der Verwaltungskosten unterscheiden sich (5,2% vs. 4,4%); die Frankenbeträge mischen OECD-Anteile mit BFS-Gesamtkosten
- Verwaltungskosten enthalten auch Qualitätssicherung und Regulierungsaufwand
- Einheitskasse vs. Wettbewerbsmodell erzeugt strukturell verschiedene Admin-Kosten
- OECD-Daten teilweise zeitlich versetzt (2021–2023)

---

## Datenquellen

- BFS: Kosten und Finanzierung des Gesundheitswesens 2023, Medienmitteilung vom 28. April 2025, https://dam-api.bfs.admin.ch/hub/api/dam/assets/34788155/master
- BFS: Kosten des Gesundheitswesens nach Leistung (2019, 2023, 2024), https://www.bfs.admin.ch/asset/de/36519541
- BFS: Kosten des Gesundheitswesens seit 1960, https://www.bfs.admin.ch/asset/de/36519640
- BFS: Gesundheitskosten und Finanzierung 2024 (97,2 Mrd. Franken, 899 Franken pro Kopf und Monat), https://www.bfs.admin.ch/asset/de/36515499
- BFS: Kosten und Finanzierung des Gesundheitswesens (Reihe 1995–2019, Methodik vor 2025)
- BAG: Tätigkeitsbericht 2025 soziale Kranken- und Unfallversicherung (Anzahl Versicherer), https://www.bag.admin.ch/dam/en/sd-web/TiFIhRVtPuIx/BAG_Ta%CC%88tigkeitsbericht_2025_soziale-Kranken-und-Unfallversicherung.pdf
- OECD: Health at a Glance 2023 — Health Expenditure and Financing
- WHO: Global Health Expenditure Database
