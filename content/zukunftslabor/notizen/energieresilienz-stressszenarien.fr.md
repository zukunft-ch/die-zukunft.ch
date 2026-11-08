+++
title = "Test de résistance électrique : que se passe-t-il en cas de sécheresse et de sortie du nucléaire ?"
description = "Quatre scénarios montrent la vulnérabilité de l'approvisionnement électrique suisse — de la situation de référence au pire des cas combinant sécheresse et arrêt des centrales nucléaires."
slug = "energieresilienz-stressszenarien"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "06_energie_resilienz"
pillar = "energy-resilience"
category = "datenbriefing"
evidence = "stark"
tags = ["energie", "resilience", "electricite", "scenarios", "infrastructure"]
charts = ["energie_strommix_real.svg", "energie_verbrauch_sektoren.svg", "energie_szenarien_vergleich.svg", "energie_importluecke_kosten.svg"]
+++

Quatre scénarios de stress fondés sur des données réelles de l'OFEN (2024) le montrent :
dans le pire des cas (année sèche + sortie du nucléaire), la Suisse devrait
importer 39,1 % de son électricité — pour un coût de
2,29 milliards de CHF par an aux prix spot actuels.


<!-- more -->

---

## Méthodologie

La base est la statistique de l'électricité de l'OFEN (OGD, 2024). Quatre scénarios
modifient les chiffres de production de l'année de référence :

- **A — Référence** : production réelle 2024
- **B — Année sèche** : −30 % de production hydraulique (historiquement plausible, p. ex. 2022)
- **C — Sortie du nucléaire** : centrales nucléaires arrêtées (−22 983 GWh)
- **D — Combiné** : année sèche + sortie du nucléaire

Coûts d'importation calculés à 90 EUR/MWh (moyenne des prix spot européens).
Consommation d'énergie finale par secteur tirée de la statistique globale de l'énergie de l'OFEN.

---

### Mix électrique

{% chart(spec="energie_strommix_real", alt="Mix électrique suisse par agent énergétique") %}
L'hydraulique et le nucléaire dominent la production électrique suisse, avec ensemble plus de 90 %. Cette concentration sur deux sources est à la fois une force (faibles émissions de CO₂) et une vulnérabilité — toutes deux réagissent fortement aux chocs externes : la sécheresse pour l'eau, les décisions politiques pour le nucléaire.
{% end %}

---

### Consommation d'énergie finale par secteur

{% chart(spec="energie_verbrauch_sektoren", alt="Consommation d'énergie finale par secteur") %}
L'industrie et les transports sont les plus grands consommateurs d'électricité. La répartition par secteur montre où les gains d'efficacité et l'électrification (p. ex. la mobilité électrique) ont le plus grand effet de levier — et où naîtront des besoins supplémentaires en électricité.
{% end %}

---

### Scénarios de stress

{% chart(spec="energie_szenarien_vergleich", alt="Quatre scénarios de stress pour l'approvisionnement électrique suisse") %}
Quatre scénarios montrent l'éventail de la vulnérabilité : de la situation de référence stable au pire des cas (année sèche + sortie du nucléaire). Le scénario combiné crée une dépendance aux importations qui, sur des marchés européens tendus, ne peut pas être couverte sans autre.
{% end %}

---

### Coûts d'importation

{% chart(spec="energie_importluecke_kosten", alt="Coûts du déficit d'importation par scénario") %}
Les conséquences financières de la dépendance aux importations sont considérables : dans le pire des cas, les coûts d'importation annuels atteignent plusieurs milliards de francs — calculés aux prix spot européens actuels. En cas de pics de marché (comme en 2022), les coûts seraient un multiple de ce montant.
{% end %}

---

## Limites

- Scénarios statiques (pas de développement du solaire/de l'éolien, pas de réduction de la demande)
- Les prix à l'importation fluctuent fortement (2022 : jusqu'à 400 EUR/MWh)
- Effets saisonniers non modélisés (déficit hivernal > moyenne annuelle)
- Aucun effet de stockage (pompage-turbinage, batteries)

---

## Sources des données

- OFEN : Schweizerische Elektrizitätsbilanz (Statistique suisse de l'électricité, OGD, valeurs annuelles)
- OFEN : Schweizerische Gesamtenergiebilanz (Statistique globale suisse de l'énergie, consommation d'énergie finale par secteur)
- ENTSO-E : prix européens de l'électricité (marché spot day-ahead)
