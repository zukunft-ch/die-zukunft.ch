+++
title = "Du 16e au 26e rang : pourquoi la Suisse recule en matière de cyberadministration"
description = "Dans l'indice de l'ONU sur le développement de l'administration en ligne, la Suisse est passée du 16e rang (2020) au 23e (2022) puis au 26e (2024). Infrastructures et formation sont solides ; le retard se situe dans les services en ligne de l'État."
slug = "egovernment-rang-26"
date = 2026-11-08
template = "notiz.html"

[extra]
code_path = "output/datenbriefings-2026-11/egovernment-rang-26"
data = "egovernment-rang-26.csv"
category = "datenbriefing"
evidence = "stark"
tags = ["cyberadministration", "etat-ouvert", "e-id", "egdi", "comparaison"]
charts = ["egov_rang_verlauf.svg", "egov_teilindizes_2024.svg", "egov_osi_komponenten_2024.svg"]
pillar = "offener-staat"
+++

Dans l'E-Government Development Index (EGDI) des Nations unies, la Suisse est passée du 16e rang (2020) au 23e (2022), puis au 26e rang (2024) sur 193 États, alors même que sa valeur d'indice a légèrement progressé (de 0,89 à 0,90). D'autres pays s'améliorent tout simplement plus vite. En matière d'infrastructures et de formation, la Suisse est proche du sommet ; le retard se situe presque entièrement dans l'offre en ligne de l'État. L'e-ID étatique, acceptée de justesse en septembre 2025, n'a plus de date de lancement depuis juin 2026.

<!-- more -->

---

## Méthodologie

L'EGDI est la moyenne de trois sous-indices de poids égal, compris entre 0 et 1 : l'Online Service Index (OSI, offre et qualité des services en ligne de l'État), le Telecommunication Infrastructure Index (TII) et le Human Capital Index (HCI). Toutes les valeurs proviennent des profils par pays de l'UN E-Government Knowledge Base (enquêtes 2018–2024). La comparaison porte sur la Suisse, le Danemark, l'Estonie, la Corée du Sud, Singapour, l'Allemagne et l'Autriche. Point important : en 2024, l'ONU a adapté sa méthodologie (TII avec l'accessibilité financière au lieu du haut débit fixe, HCI avec une composante supplémentaire de compétences en cyberadministration). Les valeurs absolues ne sont donc que partiellement comparables d'une année à l'autre ; les rangs au sein d'une même édition le sont.

---

### Un recul à haut niveau

{% chart(spec="egov_rang_verlauf", alt="Rang de la Suisse dans l'indice de l'ONU sur l'administration en ligne, de 2018 à 2024") %}
En 2018, la Suisse occupait le 15e rang, en 2020 le 16e, en 2022 le 23e et en 2024 le 26e. La valeur de l'EGDI est restée presque stable (2020 : 0,8907 ; 2022 : 0,8752 ; 2024 : 0,9004). Le recul est donc relatif : la Suisse stagne, tandis que des pays comme Singapour (2022 : 12e rang, 2024 : 3e rang), l'Estonie (du 8e au 2e) et l'Allemagne (du 22e au 12e) progressent nettement. Sur la même période, l'Autriche est passée du 20e au 22e rang.
{% end %}

---

### Le retard est du côté de l'État, pas de la population

{% chart(spec="egov_teilindizes_2024", alt="Sous-indices de l'EGDI 2024 pour sept pays") %}
Pour les infrastructures de télécommunication (0,958) et le capital humain (0,903), la Suisse figure dans le groupe de tête. Pour l'Online Service Index, en revanche, elle n'atteint que 0,841, contre 0,999 (Danemark), 0,995 (Estonie), 1,000 (Corée du Sud) et 0,983 (Singapour). L'Allemagne (0,924) est elle aussi nettement devant ; seule l'Autriche (0,838) affiche un résultat aussi faible. L'OSI de la Suisse s'élevait à 0,829 en 2020 et à 0,768 en 2022. Le constat : le réseau et la formation sont là, ce qui manque, c'est l'offre numérique de l'administration.
{% end %}

---

### Où exactement l'Online Service Index perd des points

{% chart(spec="egov_osi_komponenten_2024", alt="Composantes de l'Online Service Index 2024 : Suisse, Allemagne, Danemark, Estonie") %}
Pour le cadre institutionnel (stratégies, lois), la Suisse atteint, comme tous les pays de comparaison, la valeur maximale. Les écarts apparaissent dans la mise en œuvre : offre de services 0,81 (Estonie 1,00, Danemark 0,99), contenus 0,89 (Estonie et Danemark 1,00), participation en ligne 0,82 et surtout technologie 0,63 (les trois pays de comparaison 0,88). La Suisse a donc les documents, mais trop peu de procédures entièrement numériques.
{% end %}

---

### E-ID : acceptée, mais sans date de lancement

Le corps électoral a accepté la loi sur l'e-ID le 28 septembre 2025 avec 50,4 % de oui. En février 2026, la Confédération a annoncé le 1er décembre 2026 comme date de lancement. Le 30 juin 2026, elle a annulé cette échéance : en raison de nouveaux risques liés à l'IA (deepfakes, logiciels malveillants sur les terminaux), l'émission en ligne doit être sécurisée davantage. Aucune nouvelle date n'a été fixée ; l'infrastructure de confiance doit entrer en service au premier semestre 2027. Les raisons sont compréhensibles, mais la conséquence pour l'indice est claire : sans identité numérique largement utilisée, les procédures entièrement en ligne restent l'exception.

### Ce que font différemment les pays de tête

- **Une plateforme commune d'échange de données :** en Estonie, X-Road relie les registres publics et privés ; selon e-Estonia, quelque 2,2 milliards de transactions y transitent chaque année. Les autorités s'échangent les données entre elles au lieu de les redemander à la population (principe «once-only»).
- **L'identité numérique au quotidien :** Singpass compte 5 millions d'utilisatrices et d'utilisateurs et plus de 41 millions de transactions par mois ; avec Myinfo, les formulaires sont préremplis automatiquement.
- **Le canal numérique comme norme :** au Danemark, la population et les entreprises doivent légalement pouvoir recevoir Digital Post ; les personnes qui ne peuvent pas communiquer par voie numérique continuent de recevoir du papier.

La Suisse dispose elle aussi d'une base : depuis le 1er janvier 2024, la LMETA s'applique avec le principe «open by default» pour les données de l'administration ; le délai transitoire correspondant expire fin 2026.

---

## Ce que cela signifie pour la politique

- **Rendre l'objectif mesurable :** revenir dans le top 15 d'ici l'enquête de l'ONU de 2028, mesuré à l'aune de l'Online Service Index et non des documents stratégiques : [État ouvert](@/offener-staat.md).
- **Ancrer le principe «once-only» dans la loi :** aucune autorité ne peut redemander des données qu'une autre détient déjà ; l'échange passe par des interfaces documentées (API par défaut).
- **Une e-ID avec un calendrier :** documenter ouvertement les travaux de sécurité et publier une date de lancement contraignante assortie de jalons.
- **Respecter le délai de la LMETA :** dès 2027, indiquer publiquement quels services fédéraux mettent réellement leurs données à disposition en accès libre.

---

## Sources

1. UN DESA, E-Government Knowledge Base : profil de la Suisse (enquêtes 2020, 2022, 2024). https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/166-Switzerland
2. UN DESA, profils du Danemark, de l'Estonie, de la Corée du Sud, de Singapour, de l'Allemagne et de l'Autriche (enquête 2024). https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/48-Denmark (de même id/57, 138, 154, 65, 10)
3. UN DESA : E-Government Survey 2024 (méthodologie, Technical Appendix). https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024
4. Bundesrat / Conseil fédéral : loi sur l'e-ID, votation populaire du 28 septembre 2025. https://www.admin.ch/en/e-id-act
5. EJPD / DFJP : «Akzeptanz der E-ID mit zusätzlichen Massnahmen stärken», 25 février 2026. https://www.ejpd.admin.ch/de/newnsb/L6Nbf7gStnDm
6. Bundesamt für Justiz / Office fédéral de la justice (OFJ) : «Neuer Zeitplan für die Einführung der E-ID und der Vertrauensinfrastruktur», 30 juin 2026. https://www.admin.ch/de/newnsb/4ZNYpSk3J1-U
7. e-Estonia : X-Road. https://e-estonia.com/solutions/interoperability-services/x-road/
8. GovTech Singapore : Singpass. https://www.tech.gov.sg/products-and-services/for-citizens/digital-services/singpass/
9. Agency for Digital Government (Danemark) : Digital Post. https://en.digst.dk/systems/digital-post/
10. BFS / Office fédéral de la statistique (OFS) : Open Government Data, art. 10 LMETA (EMBAG) et plan directeur 2024–2027. https://www.bfs.admin.ch/de/strategie-og-de
