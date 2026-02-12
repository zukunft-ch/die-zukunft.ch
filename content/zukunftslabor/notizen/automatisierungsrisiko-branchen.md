+++
draft = true
title = "Automatisierung: Wie KI die Risikolandkarte verschiebt"
description = "LLM-fähige KI verändert das Automatisierungsrisiko: Bürojobs stärker exponiert, manuelle Arbeit weniger."
slug = "automatisierungsrisiko-branchen"
date = 2026-02-12
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["automatisierung", "ki", "arbeitsmarkt", "branchen", "llm"]
charts = ["automatisierung_beschaeftigung.svg", "automatisierung_pre_post_llm.svg", "automatisierung_risikoverschiebung.svg", "automatisierung_exponierte_stellen.svg"]
+++
LLM-fähige KI verschiebt das Automatisierungsrisiko: Bürojobs (Finanz,
Recht, Verwaltung) sind stärker exponiert als vor 2018, manuelle Berufe
weniger. ~1271965'000 Stellen unter Post-LLM-Risiko.


<!-- more -->

## Methodik

BFS-SAKE-Beschäftigungsdaten (2024) und zwei Risikomodelle:
OECD/Frey-Osborne (2018, Routinetätigkeiten) und IMF AI Preparedness
Index (2024, LLM-Fähigkeiten). Exponierte Stellen = Beschäftigte × Risikoanteil.

## Ergebnisse

![Beschäftigung](/zukunftslabor/charts/automatisierung_beschaeftigung.svg)

![Pre vs. Post LLM](/zukunftslabor/charts/automatisierung_pre_post_llm.svg)

![Risikoverschiebung](/zukunftslabor/charts/automatisierung_risikoverschiebung.svg)

![Exponierte Stellen](/zukunftslabor/charts/automatisierung_exponierte_stellen.svg)

## Einschränkungen

- Risikoschätzungen sind Branchendurchschnitte, nicht berufsspezifisch
- Post-LLM-Schätzungen vorläufig (LLM-Fähigkeiten entwickeln sich schnell)
- Tatsächliche Jobverluste hängen von Regulierung und Komplementarität ab

## Datenquellen

- BFS SAKE 2024: Erwerbstätige nach Wirtschaftsabschnitt
- OECD: Automation Risk by Occupation (Nedelkoska/Quintini 2018)
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)

