+++
title = "Automatisation : comment l'IA déplace la carte des risques"
description = "L'IA dotée de capacités LLM modifie le risque d'automatisation : les emplois de bureau sont plus exposés, le travail manuel moins."
slug = "automatisierungsrisiko-branchen"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "03_automatisierung_arbeit"
pillar = "uebergaenge"
category = "datenbriefing"
evidence = "mittel"
tags = ["automatisation", "ia", "marche-du-travail", "branches", "llm"]
charts = ["automatisierung_beschaeftigung.svg", "automatisierung_pre_post_llm.svg", "automatisierung_risikoverschiebung.svg", "automatisierung_exponierte_stellen.svg"]
+++

L'IA dotée de capacités LLM déplace le risque d'automatisation : les emplois de bureau (finance,
droit, administration) sont plus exposés qu'avant 2018, les professions manuelles
moins. Environ 1,27 million d'emplois sont soumis au risque post-LLM.


<!-- more -->

---

## Méthodologie

Données d'emploi ESPA de l'OFS (2024) et deux modèles de risque :
OCDE/Frey-Osborne (2018, tâches routinières) et AI Preparedness Index
du FMI (2024, capacités LLM). Emplois exposés = personnes occupées × part de risque.

---

### Emploi par branche

{% chart(spec="automatisierung_beschaeftigung", alt="Emploi par branche en Suisse") %}
La structure des branches fournit le contexte : la santé, le commerce et la construction occupent le plus de personnes. La répartition montre quels secteurs ressentiraient les plus grands effets absolus en cas de poussée d'automatisation.
{% end %}

---

### Avant et après les LLM

{% chart(spec="automatisierung_pre_post_llm", alt="Risque d'automatisation avant et après l'ère des LLM") %}
L'IA dotée de capacités LLM modifie fondamentalement la carte des risques : des branches comme la finance et l'assurance, l'administration publique et l'information et la communication sont, après l'arrivée des LLM, nettement plus exposées que dans le modèle classique des tâches routinières. Les professions manuelles (construction, agriculture) restent largement inchangées.
{% end %}

---

### Déplacement du risque

{% chart(spec="automatisierung_risikoverschiebung", alt="Direction et ampleur du déplacement du risque dû aux LLM") %}
Le déplacement montre la direction et l'ampleur du changement. Des valeurs positives signifient un risque accru dû aux LLM. Les emplois de bureau augmentent le plus : un signal que les programmes classiques de formation continue pour les professions manuelles ne suffisent pas à eux seuls et que le travail intellectuel doit lui aussi être pris en compte.
{% end %}

---

### Emplois exposés

{% chart(spec="automatisierung_exponierte_stellen", alt="Nombre absolu d'emplois exposés par branche") %}
En chiffres absolus, la portée sociale apparaît : les branches comptant beaucoup de personnes occupées et un risque post-LLM élevé représentent des dizaines de milliers d'emplois potentiellement exposés. Cela ne signifie pas nécessairement des pertes d'emplois, mais la nécessité d'organiser systématiquement les transitions.
{% end %}

---

## Limites

- Les estimations de risque sont des moyennes par branche, non spécifiques aux professions
- Estimations post-LLM provisoires (les capacités des LLM évoluent rapidement)
- Les pertes d'emplois effectives dépendent de la régulation et de la complémentarité

---

## Sources des données

- BFS SAKE 2024 / OFS, Enquête suisse sur la population active (ESPA) 2024 : personnes actives occupées par section économique
- OECD: Automation Risk by Occupation (Nedelkoska/Quintini 2018)
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)
