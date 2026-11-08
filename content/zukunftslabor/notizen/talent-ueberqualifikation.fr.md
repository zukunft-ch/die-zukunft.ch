+++
title = "Talent & migration : les qualifications sont-elles utilisées ou restent-elles inexploitées ?"
description = "36 % des ressortissantes et ressortissants d'États tiers travaillent en dessous de leur niveau de qualification. Ce n'est pas un échec d'intégration, c'est une perte de valeur ajoutée."
slug = "talent-ueberqualifikation"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "10_talent_migration"
pillar = "talent-integration"
category = "datenbriefing"
evidence = "mittel"
tags = ["migration", "talent", "surqualification", "marche-du-travail", "integration"]
charts = ["migration_herkunft_trend.svg", "migration_nettowanderung.svg", "migration_ueberqualifikation.svg", "migration_ueberqualifikation_sektoren.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Données sur la population et les migrations jusqu'en 2024 vérifiées ; les valeurs de surqualification par secteur et l'estimation de la perte reposent sur des hypothèses et ne sont pas actualisées avec les données récentes de l'ESPA."

[[extra.changelog]]
date = 2026-11-08
text = "Énoncés sur la population étrangère alignés sur les données, formulation «gaspillées» remplacée par «inexploitées» et estimation de la perte de 3,6 milliards de francs présentée comme estimation approximative propre, avec sa méthode."
+++

En 2024, la Suisse enregistre un solde migratoire de +82 792 personnes.
Pourtant, de nombreuses qualifications restent inexploitées : 36 % des ressortissantes et ressortissants d'États tiers
travaillent en dessous de leur niveau (contre 13 % des personnes de nationalité suisse). Selon notre propre estimation
approximative, cela représente environ 3,6 milliards de CHF de salaires non perçus par an.


<!-- more -->

---

## Méthodologie

Données démographiques : OFS, Statistique de la population et des ménages (2010–2024).
Données migratoires : OFS, Statistique des migrations (1991–2024).
Surqualification : OFS, Relevé structurel / ESPA (auto-évaluation + qualification formelle),
complétés par les OECD Indicators of Talent Attractiveness 2023.

L'estimation de la perte est une estimation approximative propre : environ
200 000 personnes immigrées occupées en situation de surqualification × un
écart salarial supposé d'environ 18 000 francs par an ≈ 3,6 milliards de
francs. Les deux valeurs sont des hypothèses, non des statistiques publiées ;
le chiffre indique un ordre de grandeur.

---

### Population étrangère par type d'autorisation

{% chart(spec="migration_herkunft_trend", alt="Population étrangère par type d'autorisation au fil du temps") %}
La composition de la population étrangère s'est déplacée : les personnes établies (permis C) restent majoritaires, mais depuis 2021 c'est surtout le nombre de titulaires d'une autorisation de séjour (B) qui augmente — de 759 769 à 915 566 (2024). Le graphique montre l'évolution de l'effectif, une croissance stable qui reflète la demande de main-d'œuvre de l'économie suisse.
{% end %}

---

### Solde migratoire par provenance

{% chart(spec="migration_nettowanderung", alt="Solde migratoire par région de provenance") %}
Le solde migratoire montre qui arrive et qui part. Les ressortissantes et ressortissants de l'UE/AELE représentent la majeure partie des arrivées, sous l'effet de la libre circulation des personnes. Les ressortissantes et ressortissants d'États tiers sont moins nombreux, mais rencontrent les plus grands obstacles à l'intégration en matière de reconnaissance professionnelle.
{% end %}

---

### Taux de surqualification par groupe de provenance

{% chart(spec="migration_ueberqualifikation", alt="Taux de surqualification par groupe de provenance") %}
36 % des ressortissantes et ressortissants d'États tiers travaillent en dessous de leur niveau de qualification, près de trois fois plus que les personnes de nationalité suisse (13 %). Ce n'est pas un échec d'intégration des personnes concernées, mais un problème structurel : la reconnaissance des diplômes, les barrières linguistiques et les réglementations protégeant certaines professions empêchent un emploi conforme aux qualifications.
{% end %}

---

### Secteurs à forte proportion de surqualification

{% chart(spec="migration_ueberqualifikation_sektoren", alt="Branches avec la plus forte proportion de personnes employées surqualifiées") %}
Dans certains secteurs, une part particulièrement importante des talents reste inexploitée : l'hôtellerie-restauration, le nettoyage et le commerce de détail emploient particulièrement de nombreuses personnes surqualifiées. C'est une perte de valeur ajoutée à double titre : pour les personnes concernées (perte de salaire) et pour l'économie (compétences inutilisées).
{% end %}

---

## Limites

- La surqualification repose sur l'auto-évaluation et la reconnaissance formelle des diplômes
- Tous les diplômes étrangers ne sont pas automatiquement équivalents (barrières linguistiques, professions protégées)
- L'estimation de la perte économique est une estimation approximative propre fondée sur des valeurs supposées (nombre de personnes concernées ; l'écart salarial varie fortement selon le secteur)
- Les données de l'ESPA sont des données d'échantillon assorties d'intervalles de confiance

---

## Sources des données

- OFS (BFS) : Statistique de la population et des ménages (STATPOP)
- OFS (BFS) : Statistique des migrations (migrations internationales)
- OFS (BFS) : Relevé structurel — personnes actives occupées selon la qualification et la nationalité
- OCDE : Indicators of Talent Attractiveness 2023
