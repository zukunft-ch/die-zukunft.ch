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
evidence = "mittel"
tags = ["souverainete-numerique", "cyberadministration", "open-data", "e-id", "comparaison"]
charts = ["digital_internetnutzung_alter.svg", "digital_egov_trend.svg", "digital_luecke_alter.svg", "digital_eid_motive.svg", "digital_opendata_vergleich.svg"]

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Données Omnibus TIC de l'OFS jusqu'en 2025 vérifiées et mises à jour avec le résultat de l'e-ID du 28 septembre 2025 et l'Open Data Maturity Report 2025."

[[extra.changelog]]
date = 2026-11-08
text = "Chiffres sur l'usage d'Internet et de la cyberadministration alignés sur les données 2025 de l'OFS, votation de 2025 sur l'e-ID et maturité de l'open data 2025 ajoutées, graphique des motifs remplacé par les valeurs VOX documentées."
+++

90 % de la population suisse utilise régulièrement Internet, mais
l'usage de la cyberadministration, la disponibilité en ligne et la maturité
de l'open data restent en dessous de la moyenne de l'UE. Le fossé de
préparation entre une population numérique et un État numérique atteignait
13,2 points de pourcentage en 2025. En 2021, un modèle d'e-ID confié au secteur privé a échoué
dans les urnes (64,4 % de non) ; l'e-ID étatique n'a été acceptée que de justesse
le 28 septembre 2025 (50,4 % de oui).


<!-- more -->

---

## Méthodologie

L'analyse combine deux jeux de données de l'enquête Omnibus TIC de l'OFS
(2014–2025) : l'usage d'Internet par classe d'âge (le courrier électronique
servant d'indicateur) et l'usage de la cyberadministration par type de
service. Le «fossé de préparation» est la différence entre l'usage général
d'Internet et l'usage de la cyberadministration dans l'ensemble de la
population. L'analyse est complétée par l'EU Open Data Maturity Report 2025, par
l'enquête post-votation VOX (gfs.bern) sur le référendum de 2021 relatif à
l'e-ID et par les résultats officiels des votations sur l'e-ID de 2021 et 2025.

---

### Usage d'Internet par classe d'âge

{% chart(spec="digital_internetnutzung_alter", alt="Usage d'Internet par classe d'âge en Suisse") %}
Les 15–29 ans et les 30–59 ans utilisent Internet à environ 95 %. Même parmi les plus de 60 ans, près de 80 % sont désormais en ligne. Le problème n'est pas la compétence numérique de la population, mais l'absence d'infrastructure numérique du côté de l'État.
{% end %}

---

### Usage de la cyberadministration

{% chart(spec="digital_egov_trend", alt="Usage de la cyberadministration au fil du temps") %}
L'usage de la cyberadministration est passé de 67 % (2014) à 82 % (2023), mais il est retombé à 77 % en 2025, alors que l'usage d'Internet continuait de progresser. Cela indique un problème d'offre : ce n'est pas la demande qui manque, mais des services numériques utilisables.
{% end %}

---

### Fossé de préparation

{% chart(spec="digital_luecke_alter", alt="Fossé de préparation numérique entre la population et l'État") %}
L'écart entre l'usage général d'Internet et l'usage de la cyberadministration atteignait environ 13 points de pourcentage en 2025, après s'être réduit à 8 points en 2021. Ce fossé de préparation n'est pas un problème technologique, mais institutionnel : la population est prête, l'État ne l'est pas.
{% end %}

---

### Référendum sur l'e-ID : une question de confiance

{% chart(spec="digital_eid_motive", alt="Motifs des votants du non lors du référendum de 2021 sur l'e-ID (analyse VOX)") %}
Le non à l'e-ID en 2021 (64,4 %) visait avant tout le modèle confié au secteur privé : dans l'enquête post-votation VOX, les votants du non ont surtout cité la protection et la sécurité des données (60 % de toutes les mentions) ainsi que le rôle de l'État (49 %), par exemple «l'e-ID doit être étatique» (25 %). L'e-ID étatique, entièrement repensée, a été acceptée le 28 septembre 2025 avec 50,4 % de oui. Ce résultat serré le montre : la confiance dans la protection des données et dans la responsabilité de l'État est une condition de l'identité numérique, pas un acquis.
{% end %}

---

### Maturité de l'open data

{% chart(spec="digital_opendata_vergleich", alt="Maturité de l'open data 2025 : la Suisse comparée à la moyenne de l'UE et à quelques pays") %}
Dans l'Open Data Maturity Report 2025, la Suisse obtient 82 % (2 points de plus qu'en 2024) et fait partie du groupe des «followers» (73–84 %). La moyenne de l'UE-27 est de 86 %, la France est en tête avec 100 %. Il y a des progrès, comme le principe «open by default» inscrit dans la LMETA et le plan directeur OGD 2024–2027, mais l'écart avec les pays les plus avancés demeure. Cela freine l'innovation, la transparence et l'élaboration de politiques fondées sur les données.
{% end %}

---

## Limites

- Usage du courrier électronique comme indicateur de l'usage d'Internet (définition de l'OFS)
- Données sur la cyberadministration non disponibles par classe d'âge : l'écart n'est calculable qu'au niveau global
- Score open data fondé sur la méthodologie de l'UE (Suisse en tant que pays de l'AELE participant)
- Motifs du vote sur l'e-ID : enquête post-votation VOX avec un échantillon limité, question ouverte à réponses multiples

---

## Sources des données

- OFS, enquête Omnibus TIC 2014–2025 : usage d'Internet, usage de la cyberadministration
- data.europa.eu : Open Data Maturity Report 2025, https://data.europa.eu/sites/default/files/2025-12/2025_odm_report_7.pdf
- data.europa.eu : Open Data Maturity 2025, fiche pays Suisse, https://data.europa.eu/sites/default/files/2025-12/2025_odm_factsheet_switzerland.pdf
- gfs.bern : analyse VOX de mars 2021 (loi sur l'e-ID, en allemand), https://swissvotes.ch/vote/639.00/nachbefragung-de.pdf
- Swissvotes : loi sur l'e-ID du 7 mars 2021, rejetée avec 64,4 % de non, https://swissvotes.ch/vote/639.00
- SRF : votation du 28 septembre 2025, loi sur l'e-ID acceptée avec 50,4 % de oui, https://www.srf.ch/news/schweiz/abstimmungen-28-september-so-hat-die-schweiz-abgestimmt
