+++
title = "Gesundheitskosten: Wo fliesst das Geld — und wo versickert es?"
description = "Die Schweiz gibt 5.2% der Gesundheitsausgaben für Verwaltung aus — deutlich über dem OECD-Schnitt. Der Überschuss kostet ~10 CHF pro Person und Monat."
slug = "gesundheitskosten-verwaltung-fokus"
date = 2026-02-12
template = "notiz.html"
draft = true

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["gesundheit", "kosten", "verwaltung", "oecd", "effizienz"]
charts = ["gesundheit_ausgaben_kategorien.svg", "gesundheit_verwaltungsanteil_trend.svg", "gesundheit_verwaltung_international.svg", "gesundheit_verwaltungsueberschuss.svg"]
+++

Die Schweiz gibt 82472 Mio. CHF für Gesundheit aus
(2019), davon 4.03% für Verwaltung.
Im OECD-Vergleich liegt die Schweiz mit 5.2% weit über dem Schnitt
(3.3%) — der Überschuss kostet ~10 CHF/Person/Monat.


<!-- more -->

---

## Methodik

BFS-Gesundheitsausgabenstatistik (1995–2019) nach dem
System of Health Accounts (SHA). Kategorien: Ambulante/stationäre Kurativbehandlung,
Langzeitpflege, Gesundheitsgüter, Verwaltung, Prävention. Internationaler Vergleich
auf Basis OECD Health at a Glance 2023.

---

### Ausgaben nach Kategorie im Zeitverlauf

{% chart(spec="gesundheit_ausgaben_kategorien", alt="Gesundheitsausgaben nach Kategorie im Zeitverlauf") %}
Die Gesundheitsausgaben steigen kontinuierlich — aber nicht gleichmässig. Während ambulante und stationäre Versorgung den Löwenanteil ausmachen, wächst der Verwaltungsanteil überproportional. Das wirft die Frage auf, wie viel vom Prämienanstieg in Behandlung fliesst und wie viel in Bürokratie.
{% end %}

---

### Verwaltungsanteil im Zeitverlauf

{% chart(spec="gesundheit_verwaltungsanteil_trend", alt="Verwaltungsanteil an den Gesundheitsausgaben im Zeitverlauf") %}
Der Verwaltungsanteil steigt langsam, aber stetig. Das ist kein Zufall: Die fragmentierte Versicherungslandschaft mit über 50 Krankenkassen erzeugt strukturelle Mehrkosten — Rechnungswesen, Marketing, Risikoselektion — die in einem Einheitssystem nicht anfallen würden.
{% end %}

---

### Internationaler Vergleich

{% chart(spec="gesundheit_verwaltung_international", alt="Verwaltungsanteil im internationalen Vergleich") %}
Die Schweiz liegt bei den Verwaltungskosten deutlich über dem OECD-Durchschnitt. Länder mit zentralisierteren Systemen (z.B. skandinavische Staaten) erzielen tiefere Admin-Anteile bei vergleichbarer oder besserer Versorgungsqualität. Der Vergleich zeigt: Effizienzgewinne sind möglich.
{% end %}

---

### Verwaltungsüberschuss

{% chart(spec="gesundheit_verwaltungsueberschuss", alt="Verwaltungsüberschuss gegenüber OECD-Schnitt in CHF pro Person") %}
Der Überschuss gegenüber dem OECD-Schnitt lässt sich in Franken pro Person und Monat ausdrücken. Dieses Geld geht nicht in Behandlungen, Medikamente oder Pflege — es finanziert administrative Strukturen, deren Vereinfachung direkt Prämien senken würde.
{% end %}

---

## Einschränkungen

- SHA-Harmonisierung erleichtert Vergleiche, aber Systemunterschiede bleiben
- Verwaltungskosten enthalten auch Qualitätssicherung und Regulierungsaufwand
- Einheitskasse vs. Wettbewerbsmodell erzeugt strukturell verschiedene Admin-Kosten
- OECD-Daten teilweise zeitlich versetzt (2021–2023)

---

## Datenquellen

- BFS: Kosten und Finanzierung des Gesundheitswesens (1995–2019)
- OECD: Health at a Glance 2023 — Health Expenditure and Financing
- WHO: Global Health Expenditure Database

