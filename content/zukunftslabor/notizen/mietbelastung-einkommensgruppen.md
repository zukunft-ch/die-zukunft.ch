+++
title = "40% des Einkommens für Miete — unterste Einkommen besonders belastet"
description = "Das unterste Einkommensquintil gibt 40% für Miete aus. Ein Grundeinkommen würde die Belastung deutlich senken — mit starken kantonalen Unterschieden."
slug = "mietbelastung-einkommensgruppen"
date = 2026-02-11
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["wohnen", "miete", "ungleichheit", "grundeinkommen"]
charts = ["mietbelastung_quintile.svg", "mieten_kantone.svg", "mietbelastung_grundeinkommen.svg"]
+++

Das unterste Einkommensquintil gibt heute rund 40% seines Einkommens für Miete
aus — weit über der 30%-Schwelle. Ein Grundeinkommen von CHF 2'500/Monat
würde die Belastung auf rund 17.8% senken. Die kantonalen Unterschiede
sind dabei erheblich: von CHF 1813 (Zug) bis CHF 926 (Jura).


<!-- more -->

## Methodik

Die Mietbelastungsquoten stammen aus publizierten BFS-SILC-Tabellen (2022),
aufgeschlüsselt nach Einkommensquintilen. Die kantonalen Durchschnittsmieten
basieren auf der BFS-Strukturerhebung Bau- und Wohnungswesen (2023). Die
Simulation addiert CHF 30'000 Jahreseinkommen (UBI) bei konstanten Mietkosten.

## Ergebnisse

![Mietbelastung nach Quintil](/zukunftslabor/charts/mietbelastung_quintile.svg)

![Kantonale Mieten](/zukunftslabor/charts/mieten_kantone.svg)

![Simulation: Mietbelastung mit Grundeinkommen](/zukunftslabor/charts/mietbelastung_grundeinkommen.svg)

## Einschränkungen

- Die Simulation hält Mieten konstant — in der Realität könnten Vermieter auf
  höhere Einkommen reagieren (Mietpreiseffekt)
- Quintilmediane verdecken Extremfälle innerhalb der Gruppen
- Kein Modell für Wohngeld / Mietzuschüsse, die durch UBI teilweise ersetzt würden
- SILC-Mietbelastungsdaten sind aggregierte Publikationswerte (keine Mikrodaten)

## Politische Einordnung

Die Mietbelastungsdaten machen deutlich: Wohnen ist das grösste Alltagsproblem
für tiefe Einkommen in der Schweiz. Ein Grundeinkommen wirkt hier direkt — aber
ohne parallele Wohnbaupolitik droht ein Teil des Effekts von steigenden Mieten
absorbiert zu werden.

## Datenquellen

- BFS SILC 2022: Wohnkostenbelastung nach Einkommensquintil (publizierte Tabelle)
- BFS Strukturerhebung 2023: Durchschnittliche Mietzinse nach Kanton und Zimmerzahl

