+++
draft = true
title = "Ce qu'un revenu de base changerait dans la distribution des revenus"
description = "Microsimulation : un revenu de base inconditionnel de CHF 2'500/mois renforce surtout les revenus les plus bas et fait baisser le coefficient de Gini."
slug = "einkommensverteilung-grundeinkommen"
date = 2026-02-11
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["grundeinkommen", "einkommen", "ungleichheit", "simulation"]
charts = ["einkommensverteilung_dezile.svg", "einkommensverteilung_vergleich.svg", "einkommensverteilung_gini_zeitreihe.svg"]
+++

Un revenu de base inconditionnel de CHF 2'500 par mois modifierait sensiblement
la distribution des revenus en Suisse : les déciles inférieurs en profitent
proportionnellement le plus, le coefficient de Gini simulé passe de 0.2839
à 0.1848. Base de calcul : données HABE de l'OFS 2018 (parts de revenu par
décile).

<!-- more -->

## Méthodologie

L'analyse se fonde sur les parts de revenu par décile issues de l'enquête
sur le budget des ménages (HABE) 2018 de l'OFS. Les revenus mensuels absolus
par décile sont estimés à partir de ces parts (part × moyenne × 10).

La microsimulation ajoute CHF 2'500/mois à chaque décile et calcule le
coefficient de Gini résultant. Comme seules les parts par décile sont
disponibles (pas de données individuelles), l'estimation du Gini est
approximative.

## Résultats

![Parts de revenu par décile](/zukunftslabor/charts/einkommensverteilung_dezile.svg)

![Comparaison : statu quo vs. revenu de base](/zukunftslabor/charts/einkommensverteilung_vergleich.svg)

![Gini en série chronologique 1998–2018](/zukunftslabor/charts/einkommensverteilung_gini_zeitreihe.svg)

## Limites

- Données agrégées par décile et non microdonnées (les données individuelles nécessitent une demande auprès de l'OFS)
- Pas de modélisation du financement (hausse d'impôts, remplacement de transferts)
- Pas d'ajustements comportementaux (offre de travail, habitudes de consommation)
- Les parts par décile sous-estiment la dispersion au sein des groupes
- Données disponibles uniquement jusqu'en 2018 (dernière publication HABE de l'OFS)

## Sources des données

- OFS HABE 2018 : indicateurs de la distribution des revenus (revenu disponible équivalent)
