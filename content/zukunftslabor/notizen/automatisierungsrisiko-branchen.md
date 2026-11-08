+++
title = "Automatisierung: Wie KI die Risikolandkarte verschiebt"
description = "LLM-fähige KI verändert das Automatisierungsrisiko: Bürojobs stärker exponiert, manuelle Arbeit weniger."
slug = "automatisierungsrisiko-branchen"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "03_automatisierung_arbeit"
pillar = "uebergaenge"
category = "datenbriefing"
evidence = "mittel"
tags = ["automatisierung", "ki", "arbeitsmarkt", "branchen", "llm"]
charts = ["automatisierung_beschaeftigung.svg", "automatisierung_pre_post_llm.svg", "automatisierung_risikoverschiebung.svg", "automatisierung_exponierte_stellen.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Beschäftigungsdaten BFS SAKE 2024 geprüft; die Risikowerte nach Branche sind modellierte Annahmen in Anlehnung an OECD 2018 und IMF 2024, keine gemessenen Werte."

[[extra.changelog]]
date = 2026-11-08
text = "Aussagen zur Branchenstruktur, zu manuellen Berufen und zu exponierten Stellen an die Daten angepasst, Quellen der Risikomodelle präzisiert und Diagrammbeschriftungen korrigiert."
+++

LLM-fähige KI verschiebt das Automatisierungsrisiko: Bürojobs (Finanz,
Recht, Verwaltung) sind stärker exponiert als vor 2018, manuelle Berufe
weniger. Rund 1,27 Millionen Stellen stehen unter Post-LLM-Risiko.


<!-- more -->

---

## Methodik

BFS-SAKE-Beschäftigungsdaten (2024) und zwei Risikomodelle:
Pre-LLM in Anlehnung an die OECD-Studie von Nedelkoska & Quintini (2018,
Routinetätigkeiten, aufbauend auf Frey & Osborne 2013) und Post-LLM in
Anlehnung an den IMF (Cazzaniga et al. 2024, KI-Exposition). Die
Branchenwerte sind eigene, gerundete Modellannahmen, die aus diesen Studien
abgeleitet sind; die Studien selbst weisen keine Werte nach Schweizer
Wirtschaftsabschnitt aus. Exponierte Stellen = Beschäftigte × Risikoanteil.

---

### Beschäftigung nach Branche

{% chart(spec="automatisierung_beschaeftigung", alt="Beschäftigung nach Branche in der Schweiz") %}
Die Branchenstruktur bildet den Kontext: Gesundheits- und Sozialwesen, Industrie und Handel beschäftigen die meisten Personen. Die Verteilung zeigt, welche Sektoren bei einem Automatisierungsschub die grössten absoluten Effekte spüren würden.
{% end %}

---

### Pre vs. Post LLM

{% chart(spec="automatisierung_pre_post_llm", alt="Automatisierungsrisiko vor und nach LLM-Ära") %}
LLM-fähige KI verschiebt die Risikolandkarte grundlegend: Branchen wie Finanz- und Versicherungswesen, öffentliche Verwaltung und Information/Kommunikation sind Post-LLM deutlich stärker exponiert als im klassischen Routinemodell. Manuelle Berufe (Bau, Verkehr, Gastgewerbe) sind Post-LLM dagegen weniger exponiert.
{% end %}

---

### Risikoverschiebung

{% chart(spec="automatisierung_risikoverschiebung", alt="Richtung und Grösse der Risikoverschiebung durch LLM") %}
Die Verschiebung zeigt Richtung und Ausmass der Veränderung. Positive Werte bedeuten erhöhtes Risiko durch LLM. Bürojobs steigen am stärksten — ein Signal, dass klassische Weiterbildungsprogramme für manuelle Berufe allein nicht ausreichen und auch Wissensarbeit in den Fokus rücken muss.
{% end %}

---

### Exponierte Stellen

{% chart(spec="automatisierung_exponierte_stellen", alt="Absolute Anzahl exponierter Stellen nach Branche") %}
In absoluten Zahlen zeigt sich die gesellschaftliche Tragweite: Branchen mit vielen Beschäftigten und hohem Post-LLM-Risiko kommen auf jeweils Zehntausende bis knapp 190'000 potenziell exponierte Stellen. Das bedeutet nicht zwingend Jobverlust — aber die Notwendigkeit systematischer Übergangsgestaltung.
{% end %}

---

## Einschränkungen

- Risikowerte nach Branche sind modelliert (eigene Annahmen in Anlehnung an OECD und IMF), keine gemessenen Werte
- Risikoschätzungen sind Branchendurchschnitte, nicht berufsspezifisch
- Post-LLM-Schätzungen vorläufig (LLM-Fähigkeiten entwickeln sich schnell)
- Tatsächliche Jobverluste hängen von Regulierung und Komplementarität ab

---

## Datenquellen

- BFS SAKE 2024: Erwerbstätige nach Wirtschaftsabschnitt
- OECD: Automation Risk by Occupation (Nedelkoska/Quintini 2018)
- Frey & Osborne (2013): The Future of Employment (Grundlage des OECD-Ansatzes)
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)

