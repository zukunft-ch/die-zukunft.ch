+++
title = "Automatisierung: Wie KI die Risikolandkarte verschiebt"
description = "LLM-fähige KI verändert das Automatisierungsrisiko: Bürojobs stärker exponiert, manuelle Arbeit weniger."
slug = "automatisierungsrisiko-branchen"
date = 2026-02-12
template = "notiz.html"
draft = true

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

---

## Methodik

BFS-SAKE-Beschäftigungsdaten (2024) und zwei Risikomodelle:
OECD/Frey-Osborne (2018, Routinetätigkeiten) und IMF AI Preparedness
Index (2024, LLM-Fähigkeiten). Exponierte Stellen = Beschäftigte × Risikoanteil.

---

### Beschäftigung nach Branche

{% chart(spec="automatisierung_beschaeftigung", alt="Beschäftigung nach Branche in der Schweiz") %}
Die Branchenstruktur bildet den Kontext: Gesundheit, Handel und Bau beschäftigen die meisten Personen. Die Verteilung zeigt, welche Sektoren bei einem Automatisierungsschub die grössten absoluten Effekte spüren würden.
{% end %}

---

### Pre vs. Post LLM

{% chart(spec="automatisierung_pre_post_llm", alt="Automatisierungsrisiko vor und nach LLM-Ära") %}
LLM-fähige KI verschiebt die Risikolandkarte grundlegend: Branchen wie Finanz- und Versicherungswesen, öffentliche Verwaltung und Information/Kommunikation sind Post-LLM deutlich stärker exponiert als im klassischen Routinemodell. Manuelle Berufe (Bau, Landwirtschaft) bleiben weitgehend unverändert.
{% end %}

---

### Risikoverschiebung

{% chart(spec="automatisierung_risikoverschiebung", alt="Richtung und Grösse der Risikoverschiebung durch LLM") %}
Die Verschiebung zeigt Richtung und Ausmass der Veränderung. Positive Werte bedeuten erhöhtes Risiko durch LLM. Bürojobs steigen am stärksten — ein Signal, dass klassische Weiterbildungsprogramme für manuelle Berufe allein nicht ausreichen und auch Wissensarbeit in den Fokus rücken muss.
{% end %}

---

### Exponierte Stellen

{% chart(spec="automatisierung_exponierte_stellen", alt="Absolute Anzahl exponierter Stellen nach Branche") %}
In absoluten Zahlen zeigt sich die gesellschaftliche Tragweite: Branchen mit vielen Beschäftigten und hohem Post-LLM-Risiko führen zu zehntausenden potenziell exponierten Stellen. Das bedeutet nicht zwingend Jobverlust — aber die Notwendigkeit systematischer Übergangsgestaltung.
{% end %}

---

## Einschränkungen

- Risikoschätzungen sind Branchendurchschnitte, nicht berufsspezifisch
- Post-LLM-Schätzungen vorläufig (LLM-Fähigkeiten entwickeln sich schnell)
- Tatsächliche Jobverluste hängen von Regulierung und Komplementarität ab

---

## Datenquellen

- BFS SAKE 2024: Erwerbstätige nach Wirtschaftsabschnitt
- OECD: Automation Risk by Occupation (Nedelkoska/Quintini 2018)
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)

