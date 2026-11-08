+++
title = "Formation continue : qui se forme, et qui ne se forme pas ?"
description = "L'écart en matière de formation continue est énorme : les personnes hautement qualifiées se forment 2,6 fois plus souvent que les personnes peu qualifiées. Ce sont les branches à forte part de travail manuel qui se forment le moins — et non les métiers de bureau les plus exposés à l'IA."
slug = "weiterbildung-teilnahme-luecken"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "07_uebergaenge_weiterbildung"
pillar = "uebergaenge"
category = "datenbriefing"
evidence = "mittel"
tags = ["formation-continue", "formation", "automatisation", "marche-du-travail"]
charts = ["weiterbildung_bildungsniveau.svg", "weiterbildung_altersgruppe.svg", "weiterbildung_zeitreihe.svg", "weiterbildung_automatisierung_kreuz.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Données du Microrecensement 2021 de l'OFS et de l'ESPA 2024 vérifiées ; le risque d'automatisation par branche est modélisé, non mesuré."

[[extra.changelog]]
date = 2026-11-08
text = "Énoncés sur les classes d'âge et sur le lien avec le risque d'automatisation alignés sur les données, source de la mesure du risque précisée et légendes des graphiques corrigées."
+++

La participation à la formation continue stagne à 60 %, et l'écart entre
personnes hautement et peu qualifiées (79 % contre 30 %) est énorme. Les taux les plus bas se trouvent
dans l'hôtellerie-restauration, les transports et la construction — et non dans les branches les plus exposées à l'IA.


<!-- more -->

---

## Méthodologie

Données sur la formation continue issues du Microrecensement formation de base et formation continue de l'OFS
(2011, 2016, 2021). Participation à la formation continue non formelle (cours,
séminaires, formations en entreprise). Données sur l'emploi issues de l'ESPA de l'OFS
(2024). Risque d'automatisation : valeurs post-LLM modélisées par branche, reprises
de la note sur le risque d'automatisation par branche (hypothèses propres d'après
le FMI, Cazzaniga et al. 2024, il ne s'agit pas de valeurs mesurées).

---

### Selon le niveau de formation

{% chart(spec="weiterbildung_bildungsniveau", alt="Participation à la formation continue selon le niveau de formation") %}
Les personnes hautement qualifiées se forment 2,6 fois plus souvent que les personnes peu qualifiées. Cet écart est le problème central : qui est déjà bien formé continue d'investir, qui en aurait le plus besoin reste à la traîne. Sans offres ciblées pour les personnes peu qualifiées, la formation continue accentue les inégalités au lieu de les réduire.
{% end %}

---

### Selon le groupe d'âge

{% chart(spec="weiterbildung_altersgruppe", alt="Participation à la formation continue selon le groupe d'âge") %}
La participation diminue avec l'âge et chute nettement à partir de 55 ans (55–64 ans : 51 %). Or, pour le groupe des 45–64 ans, la formation continue est déterminante : ces personnes doivent encore tenir 15 à 20 ans sur un marché du travail en mutation. Ce recul est moins un problème individuel qu'une défaillance de la structure de l'offre des entreprises et des institutions.
{% end %}

---

### Série chronologique

{% chart(spec="weiterbildung_zeitreihe", alt="Participation à la formation continue de 2011 à 2021") %}
Une décennie de quasi-immobilisme : depuis 2011, le taux global oscille autour de 60 %. Malgré le débat sur la numérisation, les craintes liées à l'automatisation et la rhétorique politique, la participation effective à la formation continue a peu changé.
{% end %}

---

### Analyse croisée avec le risque d'automatisation

{% chart(spec="weiterbildung_automatisierung_kreuz", alt="Taux de formation continue et risque d'automatisation par branche") %}
Le lien est faiblement positif (r = 0,28) : les branches au risque post-LLM le plus élevé — finance, services professionnels, TIC — se forment plus que la moyenne (75–78 %). Les taux les plus bas concernent l'hôtellerie-restauration (35 %), les autres services économiques (38 %) et les transports (40 %), dont le risque se situe dans la moyenne. C'est là que manque la capacité d'adaptation au prochain changement structurel, un risque structurel qui appelle des offres ciblées.
{% end %}

---

## Limites

- Le microrecensement de l'OFS n'est réalisé que tous les 5 ans
- Les taux de formation continue par branche sont en partie estimés
- Risque d'automatisation par branche modélisé, non mesuré
- La qualité de la formation continue n'est pas saisie (seulement la participation)
- Corrélation ≠ causalité

---

## Sources des données

- OFS (BFS) : Microrecensement formation de base et formation continue (Mikrozensus Aus- und Weiterbildung) 2011, 2016, 2021
- OFS (BFS) : ESPA (SAKE) 2024 — personnes actives occupées selon la section économique
- FMI (IMF) : AI Preparedness Index 2024 (Cazzaniga et al.)
