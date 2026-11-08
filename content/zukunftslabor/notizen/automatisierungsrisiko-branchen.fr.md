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

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Données d'emploi ESPA 2024 de l'OFS vérifiées ; les valeurs de risque par branche sont des hypothèses modélisées d'après l'OCDE 2018 et le FMI 2024, non des valeurs mesurées."

[[extra.changelog]]
date = 2026-11-08
text = "Énoncés sur la structure des branches, les professions manuelles et les emplois exposés alignés sur les données, sources des modèles de risque précisées et légendes des graphiques corrigées."
+++

L'IA dotée de capacités LLM déplace le risque d'automatisation : les emplois de bureau (finance,
droit, administration) sont plus exposés qu'avant 2018, les professions manuelles
moins. Environ 1,27 million d'emplois sont soumis au risque post-LLM.


<!-- more -->

---

## Méthodologie

Données d'emploi ESPA de l'OFS (2024) et deux modèles de risque :
avant les LLM, d'après l'étude de l'OCDE de Nedelkoska et Quintini (2018,
tâches routinières, fondée sur Frey et Osborne 2013) ; après les LLM, d'après
le FMI (Cazzaniga et al. 2024, exposition à l'IA). Les valeurs par branche sont
des hypothèses de modélisation propres et arrondies, dérivées de ces études ;
les études elles-mêmes ne publient pas de valeurs par section économique
suisse. Emplois exposés = personnes occupées × part de risque.

---

### Emploi par branche

{% chart(spec="automatisierung_beschaeftigung", alt="Emploi par branche en Suisse") %}
La structure des branches fournit le contexte : la santé et l'action sociale, l'industrie et le commerce occupent le plus de personnes. La répartition montre quels secteurs ressentiraient les plus grands effets absolus en cas de poussée d'automatisation.
{% end %}

---

### Avant et après les LLM

{% chart(spec="automatisierung_pre_post_llm", alt="Risque d'automatisation avant et après l'ère des LLM") %}
L'IA dotée de capacités LLM modifie fondamentalement la carte des risques : des branches comme la finance et l'assurance, l'administration publique et l'information et la communication sont, après l'arrivée des LLM, nettement plus exposées que dans le modèle classique des tâches routinières. Les professions manuelles (construction, transports, hôtellerie-restauration) sont en revanche moins exposées après l'arrivée des LLM.
{% end %}

---

### Déplacement du risque

{% chart(spec="automatisierung_risikoverschiebung", alt="Direction et ampleur du déplacement du risque dû aux LLM") %}
Le déplacement montre la direction et l'ampleur du changement. Des valeurs positives signifient un risque accru dû aux LLM. Les emplois de bureau augmentent le plus : un signal que les programmes classiques de formation continue pour les professions manuelles ne suffisent pas à eux seuls et que le travail intellectuel doit lui aussi être pris en compte.
{% end %}

---

### Emplois exposés

{% chart(spec="automatisierung_exponierte_stellen", alt="Nombre absolu d'emplois exposés par branche") %}
En chiffres absolus, la portée sociale apparaît : les branches comptant beaucoup de personnes occupées et un risque post-LLM élevé représentent chacune de quelques dizaines de milliers à près de 190 000 emplois potentiellement exposés. Cela ne signifie pas nécessairement des pertes d'emplois, mais la nécessité d'organiser systématiquement les transitions.
{% end %}

---

## Limites

- Les valeurs de risque par branche sont modélisées (hypothèses propres d'après l'OCDE et le FMI), il ne s'agit pas de valeurs mesurées
- Les estimations de risque sont des moyennes par branche, non spécifiques aux professions
- Estimations post-LLM provisoires (les capacités des LLM évoluent rapidement)
- Les pertes d'emplois effectives dépendent de la régulation et de la complémentarité

---

## Sources des données

- BFS SAKE 2024 / OFS, Enquête suisse sur la population active (ESPA) 2024 : personnes actives occupées par section économique
- OCDE : Automation Risk by Occupation (Nedelkoska/Quintini 2018)
- Frey et Osborne (2013) : The Future of Employment (base de l'approche de l'OCDE)
- FMI : AI Preparedness Index 2024 (Cazzaniga et al.)
