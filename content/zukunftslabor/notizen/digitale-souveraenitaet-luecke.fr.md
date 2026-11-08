+++
title = "Fossé de préparation numérique : la population est en ligne, l'État ne l'est pas"
description = "90 % des Suisses utilisent Internet, mais la cyberadministration et l'open data restent en dessous de la moyenne de l'UE. Le problème n'est pas technologique : il est institutionnel."
slug = "digitale-souveraenitaet-luecke"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "02_digitale_souveraenitaet"
pillar = "digitale-souveraenitaet"
category = "datenbriefing"
evidence = "stark"
tags = ["souverainete-numerique", "cyberadministration", "open-data", "e-id", "comparaison"]
charts = ["digital_internetnutzung_alter.svg", "digital_egov_trend.svg", "digital_luecke_alter.svg", "digital_eid_motive.svg", "digital_opendata_vergleich.svg"]
+++

90 % de la population suisse utilise régulièrement Internet, mais
l'usage de la cyberadministration, la disponibilité en ligne et la maturité
de l'open data restent en dessous de la moyenne de l'UE. Le fossé de
préparation entre une population numérique et un État numérique atteint
12,1 points de pourcentage. Le référendum de 2021 sur l'e-ID le montre :
la solution doit être étatique et respectueuse de la protection des données.


<!-- more -->

---

## Méthodologie

L'analyse combine deux jeux de données de l'enquête Omnibus TIC de l'OFS
(2014–2025) : l'usage d'Internet par classe d'âge (le courrier électronique
servant d'indicateur) et l'usage de la cyberadministration par type de
service. Le «fossé de préparation» est la différence entre l'usage général
d'Internet et l'usage de la cyberadministration dans l'ensemble de la
population. L'analyse est complétée par l'EU Open Data Maturity Ranking et
par les données VOX/Sotomo sur le référendum de 2021 relatif à l'e-ID.

---

### Usage d'Internet par classe d'âge

{% chart(spec="digital_internetnutzung_alter", alt="Usage d'Internet par classe d'âge en Suisse") %}
Presque toutes les classes d'âge de moins de 65 ans dépassent 90 % d'usage d'Internet. Même les 65–74 ans sont désormais majoritairement en ligne. Le problème n'est pas la compétence numérique de la population, mais l'absence d'infrastructure numérique du côté de l'État.
{% end %}

---

### Usage de la cyberadministration

{% chart(spec="digital_egov_trend", alt="Usage de la cyberadministration au fil du temps") %}
L'usage de la cyberadministration stagne depuis des années. Malgré la diffusion croissante d'Internet, la part de la population qui utilise les services en ligne de l'État n'a guère augmenté. Cela indique un problème d'offre : ce n'est pas la demande qui manque, mais des services numériques utilisables.
{% end %}

---

### Fossé de préparation

{% chart(spec="digital_luecke_alter", alt="Fossé de préparation numérique entre la population et l'État") %}
L'écart entre l'usage général d'Internet et l'usage de la cyberadministration atteint environ 12 points de pourcentage. Ce fossé de préparation n'est pas un problème technologique, mais institutionnel : la population est prête, l'État ne l'est pas.
{% end %}

---

### Référendum sur l'e-ID : une question de confiance

{% chart(spec="digital_eid_motive", alt="Motifs de rejet lors du référendum de 2021 sur l'e-ID") %}
Le non à l'e-ID en 2021 n'était pas un rejet des identités numériques, mais du modèle confié au secteur privé. Les préoccupations liées à la protection des données et le manque de confiance envers les fournisseurs privés étaient les principaux motifs. Une solution étatique et respectueuse de la protection des données continue de bénéficier d'un large soutien.
{% end %}

---

### Maturité de l'open data

{% chart(spec="digital_opendata_vergleich", alt="Maturité de l'open data : Suisse et moyenne de l'UE") %}
Dans l'EU Open Data Maturity Ranking, la Suisse se situe en dessous de la moyenne, tant pour la disponibilité que pour l'utilisabilité des données ouvertes de l'administration. Cela freine l'innovation, la transparence et l'élaboration de politiques fondées sur les données.
{% end %}

---

## Limites

- Usage du courrier électronique comme indicateur de l'usage d'Internet (définition de l'OFS)
- Données sur la cyberadministration non disponibles par classe d'âge : l'écart n'est calculable qu'au niveau global
- Score open data fondé sur la méthodologie de l'UE (Suisse en tant qu'État observateur)
- Motifs du vote sur l'e-ID : enquête post-votation VOX avec un échantillon limité

---

## Sources des données

- BFS Omnibus ICT 2014–2025 / OFS, enquête Omnibus TIC : usage d'Internet, usage de la cyberadministration
- EU Open Data Maturity Report 2023 (data.europa.eu)
- VOX/Sotomo : enquête post-votation sur le référendum relatif à l'e-ID du 7 mars 2021
