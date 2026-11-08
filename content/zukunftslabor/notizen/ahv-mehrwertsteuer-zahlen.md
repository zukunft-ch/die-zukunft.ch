+++
title = "AHV und Mehrwertsteuer: Was die Zahlen zur Vorlage vom 29. November zeigen"
description = "Die 13. AHV-Rente kostet ab 2026 rund 4,1 Milliarden Franken pro Jahr. Die Mehrwertsteuererhöhung um 0,4 Punkte deckt zusammen mit dem Bundesbeitrag rund die Hälfte davon. Die amtlichen Zahlen zu Defiziten, Haushaltsbelastung und Alterung, ohne Stimmempfehlung."
slug = "ahv-mehrwertsteuer-zahlen"
date = 2026-11-08
template = "notiz.html"

[extra]
data = "ahv-mehrwertsteuer-zahlen.csv"
category = "datenbriefing"
evidence = "mittel"
tags = ["ahv", "mehrwertsteuer", "altersvorsorge", "demografie", "abstimmung"]
charts = ["ahv_umlageergebnis_szenarien.svg", "ahv_mwst_haushalte.svg", "ahv_altersquotient.svg"]
pillar = "grundeinkommen"

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Datenstand: BSV-Finanzperspektiven vom Juli 2026, BFS-Szenarien 2025–2055."

[[extra.changelog]]
date = 2026-11-08
text = "Erstveröffentlichung."
+++

Mit der 13. AHV-Rente kippt das Umlageergebnis der AHV 2026 ins Minus: Laut den Finanzperspektiven des Bundesamts für Sozialversicherungen (BSV) vom Juli 2026 fehlen 2026 rund 1,3 Milliarden Franken, 2035 ohne Zusatzfinanzierung rund 4,9 Milliarden. Mit der Mehrwertsteuererhöhung, über die am 29. November abgestimmt wird, wären es 2035 rund 3,3 Milliarden. Ein durchschnittlicher Haushalt würde laut der Eidgenössischen Steuerverwaltung (ESTV) rund 180 Franken pro Jahr mehr bezahlen. Darunter liegt ein demografischer Trend, den keines der drei BFS-Szenarien umkehrt: 2025 kommen auf 100 Personen im Erwerbsalter 33 Personen ab 65, 2050 sind es 43. Wir geben hier keine Stimmempfehlung ab.

<!-- more -->

---

## Methodik

Alle AHV-Zahlen stammen aus den Finanzperspektiven des BSV vom 2. Juli 2026, in Millionen Franken zu konstanten Preisen von 2025. Wir zeigen das **Umlageergebnis**: laufende Einnahmen minus Ausgaben, ohne Erträge aus der Anlage des AHV-Fonds. Das BSV rechnet zwei Varianten: die geltende Ordnung (13. Rente ab 2026, ohne Zusatzfinanzierung) und die Finanzierung der 13. Altersrente gemäss Abstimmungsvorlage (Mehrwertsteuer +0,4 Prozentpunkte ab 2028, reduzierter Satz unverändert). Eine Variante **ohne 13. Rente** veröffentlicht das BSV nicht mehr; wir leiten sie ab, indem wir zur geltenden Ordnung die vom BSV ausgewiesenen Kosten der 13. Rente addieren und den Bundesbeitrag darauf (20,2 Prozent) abziehen. Diese Linie ist eine eigene Rechnung und als solche markiert. Die Haushaltsbelastung stammt aus den Erläuterungen des Bundesrates (Schätzung der ESTV auf Basis der Haushaltsbudgeterhebung HABE 2018–2019). Die Demografie stammt aus den Szenarien des Bundesamts für Statistik (BFS) 2025–2055.

---

### Defizite mit und ohne Vorlage

{% chart(spec="ahv_umlageergebnis_szenarien", alt="AHV-Umlageergebnis 2025 bis 2040: geltende Ordnung, mit Mehrwertsteuererhöhung und ohne 13. Rente") %}
2025 schloss die AHV mit einem Umlageüberschuss von 1,84 Milliarden Franken. Ab 2026 kostet die 13. Rente laut BSV 4,1 Milliarden pro Jahr, 2035 5,1 Milliarden; der Bund trägt davon 20,2 Prozent. In der geltenden Ordnung sinkt das Umlageergebnis auf –2,6 Milliarden (2030) und –4,9 Milliarden (2035). Mit der Vorlage fliessen ab 2028 zusätzlich 1,1 Milliarden, ab 2029 rund 1,4 bis 1,5 Milliarden pro Jahr in die AHV; das Defizit beträgt dann –1,2 Milliarden (2030) und –3,3 Milliarden (2035). Mehrwertsteuer und Bundesbeitrag decken ab 2029 zusammen 50 bis 52 Prozent der Kosten der 13. Rente (eigene Rechnung aus den BSV-Tabellen). Die gestrichelte Linie zeigt: Ohne 13. Rente läge das Umlageergebnis bis 2040 etwa zwischen –0,8 und +2,0 Milliarden. Das Zickzack entsteht, weil die Renten alle zwei Jahre angepasst werden.
{% end %}

**Der AHV-Fonds.** Das Gesetz verlangt, dass der Ausgleichsfonds in der Regel mindestens eine Jahresausgabe umfasst (100 Prozent). In der geltenden Ordnung fällt er laut BSV 2027 auf 99 Prozent, 2035 auf 51 Prozent und 2040 auf 23 Prozent. Mit der Vorlage wären es 2035 68 Prozent und 2040 53 Prozent. Die Mindestreserve wird also in beiden Varianten unterschritten.

**Die Bandbreite.** Neben dem Referenzszenario rechnet das BSV ein günstiges und ein ungünstiges Szenario. Für die geltende Ordnung reicht das Umlageergebnis 2035 von –8,3 Milliarden (tief) bis –1,3 Milliarden (hoch). Das BSV übersetzt das Referenzdefizit 2035 auch in Mehrwertsteuerpunkte: Ohne Vorlage entspricht es 1,2 Punkten, mit Vorlage noch 0,8 Punkten.

---

### Was die Erhöhung einen Haushalt kostet

{% chart(spec="ahv_mwst_haushalte", alt="Mehrbelastung durch die Mehrwertsteuererhöhung in Franken pro Haushalt und Jahr nach Einkommensklasse") %}
Laut ESTV belastet die Erhöhung einen Haushalt im Durchschnitt mit rund 180 Franken pro Jahr (15 Franken pro Monat). Haushalte mit einem Bruttoeinkommen bis 4'599 Franken pro Monat zahlen rund 7 Franken pro Monat mehr, Haushalte mit 6'700 bis 9'399 Franken rund 13 Franken, Haushalte ab 13'400 Franken rund 28 Franken. Für die beiden Zwischenklassen weisen die Erläuterungen keine Werte aus; die hellen Balken sind ein Modell: die ESTV-Werte der Botschaft für +0,7 Punkte, mal 4/7. Bei den drei amtlichen Klassen liegt diese einfache Umrechnung 5 bis 10 Prozent über dem amtlichen Wert, weil der reduzierte Satz diesmal nicht steigt. Die Modellwerte sind deshalb eher zu hoch.
{% end %}

In Franken zahlen Haushalte mit hohem Einkommen also mehr, gemessen am Einkommen aber weniger. Für eine Erhöhung um 0,7 Punkte hatte die ESTV in der Botschaft 0,41 Prozent des Bruttoeinkommens im tiefsten Fünftel berechnet und 0,26 Prozent im höchsten. Für die nun beschlossenen 0,4 Punkte ist keine Prozentrechnung publiziert. Gleichzeitig erhalten Rentnerinnen und Rentner die 13. Rente: alleinstehend bis zu 2'520 Franken pro Jahr, Ehepaare bis zu 3'780 Franken.

---

### Demografie: der Trend unter den Zahlen

{% chart(spec="ahv_altersquotient", alt="Altersquotient 2025 bis 2050 nach den drei BFS-Grundszenarien") %}
Im Referenzszenario des BFS steigt der Altersquotient von 33,0 (2025) auf 36,8 (2030), 40,9 (2040) und 43,3 (2050). Anders gesagt: 2025 kommen auf eine Person ab 65 rund drei Personen zwischen 20 und 64, 2050 noch rund 2,3. Das hohe und das tiefe Szenario liegen 2050 nur 0,2 bis 0,3 Punkte daneben; sie unterscheiden sich vor allem in der Grösse der Bevölkerung, kaum in ihrer Altersstruktur. Erst die Extremvarianten spannen eine grössere Bandbreite auf: 2055 zwischen 38,6 und 52,8. Die Zahl der Personen ab 65 steigt im Referenzszenario von 1,81 Millionen (2025) auf 2,67 Millionen (2055), die Zahl der über 80-Jährigen von 0,54 auf 1,03 Millionen.
{% end %}

Das BSV verwendet für sein Referenzszenario genau dieses BFS-Szenario A-00-2025. Die Alterung ist damit in allen AHV-Zahlen oben bereits eingerechnet.

---

## Was die Zahlen nicht sagen

- **Keine Gewissheit über 2035 hinaus.** Das BSV schreibt selbst, dass Projektionen über mehr als zehn Jahre mit grosser Unsicherheit behaftet sind. Die Bandbreite für 2035 reicht von –1,3 bis –8,3 Milliarden Franken.
- **Keine Anlageerträge.** Das Umlageergebnis lässt die Erträge des AHV-Fonds weg; das BSV rechnet für den Fondsstand mit real rund 2 Prozent Rendite. Gute oder schlechte Börsenjahre verschieben den Fondsstand spürbar.
- **Alte Konsumdaten.** Die Haushaltszahlen beruhen auf Preisen und Konsum von 2018–2019. Laut den Erläuterungen dürfte die tatsächliche Mehrbelastung etwas höher ausfallen. Auch die Weitergabe an die Preise ist eine Annahme: Unternehmen überwälzen eine Erhöhung nicht immer vollständig.
- **Keine Nettobilanz pro Haushalt.** Die Zahlen zeigen die Belastung durch die Steuer, nicht den Saldo mit der 13. Rente. Ob ein Haushalt unter dem Strich gewinnt, hängt davon ab, ob und wie viel AHV-Rente er bezieht.
- **Offene Parameter.** Ob der Sondersatz für die Hotellerie über 2027 hinaus gilt, war bei Redaktionsschluss der Erläuterungen offen. Der Bundesrat will die Reform AHV2030 voraussichtlich im Frühling 2027 vorlegen; sie wird die Perspektiven verändern.
- **Keine Aussage über die richtige Finanzierung.** Die Zahlen zeigen, wie gross die Lücke ist und wer wie viel trägt. Ob Mehrwertsteuer, Lohnbeiträge, Bundesmittel oder Leistungsanpassungen der richtige Weg sind, ist eine politische Frage, keine statistische.

---

## Einordnung

Unsere Lesart der vier Vorlagen vom 29. November, ebenfalls ohne Stimmempfehlung, steht im Artikel [Abstimmung vom 29. November 2026](@/aktuelles/abstimmung-29-november-2026.md). Warum uns die Finanzierungsbasis der Sozialwerke über Konsum statt allein über Löhne interessiert, beschreibt der Pfeiler [Grundeinkommen](@/grundeinkommen.md); wie sich verschiedene Steuerbasen auf die Einkommensverteilung auswirken, zeigt die Notiz [Grundeinkommen: Drei Finanzierungsmodelle im Vergleich](@/zukunftslabor/notizen/grundeinkommen-finanzierungsmodelle.md).

---

## Quellen

1. Bundesamt für Sozialversicherungen (BSV): Finanzielle Lage und Perspektiven der AHV, Finanzperspektiven vom 2. Juli 2026. https://www.bsv.admin.ch/finanzen-ahv
2. BSV: Finanzperspektiven der AHV gemäss geltender Ordnung (Referenzszenario, Szenarien tief und hoch), 2. Juli 2026. https://www.bsv.admin.ch/dam/de/sd-web/op2mTMWV0HCj/Finanzperspektiven%20der%20AHV%20gem%C3%A4ss%20geltender%20Ordnung.xlsx
3. BSV: Finanzperspektiven der AHV gemäss Finanzierung der 13. Altersrente (inkl. Blatt «Massnahmen»), 2. Juli 2026. https://www.bsv.admin.ch/dam/de/sd-web/jnnnev0Cvqna/Finanzperspektiven%20der%20AHV%20gem%C3%A4ss%20Finanzierung%20der%2013.%20Altersrente.xlsx
4. BSV: Das Wichtigste in Kürze: Finanzperspektiven der AHV, der IV und der EO mit Szenarien, 2. Juli 2026. https://www.bsv.admin.ch/dam/de/sd-web/layXpeKUCS4Y/Faktenblatt%20Szenarien_2026_DE.pdf
5. Bundeskanzlei: Erläuterungen des Bundesrates zur Volksabstimmung vom 29. November 2026, S. 13–19. https://www.admin.ch/dam/de/sd-web/HXhFMFWOaa6u/BAR_Erlaeuterungen_Nov26_DE_v10.pdf
6. BSV: 13. AHV-Rente: Volksabstimmung über die AHV-Zusatzfinanzierung. https://www.bsv.admin.ch/de/abstimmung-13-ahv-rente
7. Bundesrat: Botschaft vom 16. Oktober 2024 zur Umsetzung und Finanzierung der Initiative für eine 13. AHV-Rente, BBl 2024 2747, Ziff. 6.5, Tabellen 6–4 und 6–5. https://www.fedlex.admin.ch/eli/fga/2024/2747/de
8. Bundesamt für Statistik (BFS): Szenarien zur Bevölkerungsentwicklung der Schweiz und der Kantone 2025–2055, Tabellen TA7–TA9. https://www.bfs.admin.ch/asset/de/34687099
9. BFS: Projections – reference scenario 2025–2055 (Faktenblatt). https://dam-api.bfs.admin.ch/hub/api/dam/assets/34687124/master
10. Parlament: Fragen und Antworten zur Finanzierung der 13. AHV-Rente, 19. Juni 2026. https://www.parlament.ch/de/services/news/Seiten/2026/20260619104626831194158159026_bsd070.aspx
