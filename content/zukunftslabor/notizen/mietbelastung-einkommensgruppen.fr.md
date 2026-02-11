+++
draft = true
title = "40% du revenu pour le loyer — les revenus les plus bas particulièrement touchés"
description = "Le quintile de revenu le plus bas consacre 40% au loyer. Un revenu de base réduirait nettement cette charge — avec de fortes disparités cantonales."
slug = "mietbelastung-einkommensgruppen"
date = 2026-02-11
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["wohnen", "miete", "ungleichheit", "grundeinkommen"]
charts = ["mietbelastung_quintile.svg", "mieten_kantone.svg", "mietbelastung_grundeinkommen.svg"]
+++

Le quintile de revenu le plus bas consacre aujourd'hui environ 40% de son revenu
au loyer — bien au-delà du seuil de 30%. Un revenu de base de CHF 2'500/mois
ramènerait cette charge à environ 17.8%. Les écarts cantonaux sont considérables :
de CHF 1813 (Zoug) à CHF 926 (Jura).

<!-- more -->

## Méthodologie

Les taux de charge locative proviennent des tableaux publiés par l'OFS-SILC
(2022), ventilés par quintile de revenu. Les loyers moyens cantonaux se fondent
sur l'enquête structurelle sur la construction et les logements de l'OFS (2023).
La simulation ajoute CHF 30'000 de revenu annuel (revenu de base) à coûts de
loyer constants.

## Résultats

![Charge locative par quintile](/zukunftslabor/charts/mietbelastung_quintile.svg)

![Loyers cantonaux](/zukunftslabor/charts/mieten_kantone.svg)

![Simulation : charge locative avec revenu de base](/zukunftslabor/charts/mietbelastung_grundeinkommen.svg)

## Limites

- La simulation maintient les loyers constants — en réalité, les bailleurs
  pourraient réagir à des revenus plus élevés (effet sur les prix locatifs)
- Les médianes par quintile masquent les cas extrêmes au sein des groupes
- Pas de modélisation des aides au logement qui seraient partiellement
  remplacées par un revenu de base
- Les données SILC sur la charge locative sont des valeurs agrégées publiées
  (pas de microdonnées)

## Mise en perspective politique

Les données sur la charge locative le montrent clairement : le logement est
le principal problème du quotidien pour les bas revenus en Suisse. Un revenu
de base agit ici directement — mais sans politique du logement parallèle, une
partie de l'effet risque d'être absorbée par la hausse des loyers.

## Sources des données

- OFS SILC 2022 : charge des coûts du logement par quintile de revenu (tableau publié)
- OFS Enquête structurelle 2023 : loyers moyens par canton et nombre de pièces
