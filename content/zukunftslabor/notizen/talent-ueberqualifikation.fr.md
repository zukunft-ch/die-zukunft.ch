+++
title = "Talent & migration : les qualifications sont-elles utilisées ou gaspillées ?"
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
+++

En 2024, la Suisse enregistre un solde migratoire de +82 792 personnes.
Pourtant, les qualifications sont systématiquement gaspillées : 36 % des ressortissantes et ressortissants d'États tiers
travaillent en dessous de leur niveau (contre 13 % des personnes de nationalité suisse). La perte de valeur ajoutée estimée
s'élève à environ 3,6 milliards de CHF par an.


<!-- more -->

---

## Méthodologie

Données démographiques : OFS, Statistique de la population et des ménages (2010–2024).
Données migratoires : OFS, Statistique des migrations (1991–2024).
Surqualification : OFS, Relevé structurel / ESPA (auto-évaluation + qualification formelle),
complétés par les OECD Indicators of Talent Attractiveness 2023.

---

### Population étrangère par type d'autorisation

{% chart(spec="migration_herkunft_trend", alt="Population étrangère par type d'autorisation au fil du temps") %}
La composition de la population étrangère s'est déplacée : les établissements de ressortissantes et ressortissants de l'UE/AELE dominent, les séjours de courte durée varient selon la conjoncture. Le graphique montre l'évolution de l'effectif, une croissance stable qui reflète la demande de main-d'œuvre de l'économie suisse.
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
Certains secteurs «gaspillent» systématiquement des talents : l'hôtellerie-restauration, le nettoyage et le commerce de détail emploient particulièrement de nombreuses personnes surqualifiées. C'est une perte de valeur ajoutée à double titre : pour les personnes concernées (perte de salaire) et pour l'économie (compétences inutilisées).
{% end %}

---

## Limites

- La surqualification repose sur l'auto-évaluation et la reconnaissance formelle des diplômes
- Tous les diplômes étrangers ne sont pas automatiquement équivalents (barrières linguistiques, professions protégées)
- L'estimation de la perte économique est un ordre de grandeur (l'écart salarial varie fortement selon le secteur)
- Les données de l'ESPA sont des données d'échantillon assorties d'intervalles de confiance

---

## Sources des données

- OFS (BFS) : Statistique de la population et des ménages (STATPOP)
- OFS (BFS) : Statistique des migrations (migrations internationales)
- OFS (BFS) : Relevé structurel — personnes actives occupées selon la qualification et la nationalité
- OCDE : Indicators of Talent Attractiveness 2023
