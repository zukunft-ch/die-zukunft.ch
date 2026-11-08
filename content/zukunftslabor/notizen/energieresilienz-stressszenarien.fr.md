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

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Les scénarios reposent sur la statistique de l'électricité 2024 de l'OFEN ; la statistique 2025 est disponible et n'est pas encore intégrée."

[[extra.changelog]]
date = 2026-11-08
text = "Énoncés sur la consommation d'énergie finale et les coûts d'importation corrigés (conversion EUR/CHF rectifiée : environ 2,1 au lieu de 2,3 milliards de francs), hypothèse de change rendue explicite et proposition du Conseil fédéral sur l'interdiction de construire ajoutée."
+++

Quatre scénarios de stress fondés sur des données réelles de l'OFEN (2024) le montrent :
dans le pire des cas (année sèche + sortie du nucléaire), la Suisse devrait
importer 39,1 % de son électricité — pour un coût de
environ 2,07 milliards de CHF par an à 90 EUR/MWh.


<!-- more -->

---

## Méthodologie

La base est la statistique de l'électricité de l'OFEN (OGD, 2024). Quatre scénarios
modifient les chiffres de production de l'année de référence :

- **A — Référence** : production réelle 2024
- **B — Année sèche** : −30 % de production hydraulique (historiquement plausible, p. ex. 2022)
- **C — Sortie du nucléaire** : centrales nucléaires arrêtées (−22 983 GWh)
- **D — Combiné** : année sèche + sortie du nucléaire

Coûts d'importation calculés à 90 EUR/MWh (moyenne des prix spot européens 2023–2024) et
à un taux de change de 0,95 CHF pour 1 EUR, soit environ 86 CHF/MWh.
Consommation d'énergie finale par secteur tirée de la statistique globale de l'énergie de l'OFEN.

---

### Mix électrique

{% chart(spec="energie_strommix_real", alt="Mix électrique suisse par agent énergétique") %}
L'hydraulique et le nucléaire dominent la production électrique suisse, avec ensemble plus de 90 %. Cette concentration sur deux sources est à la fois une force (production indigène pilotable) et une vulnérabilité — toutes deux réagissent fortement aux chocs externes : la sécheresse pour l'eau, les décisions politiques pour le nucléaire.
{% end %}

---

### Consommation d'énergie finale par secteur

{% chart(spec="energie_verbrauch_sektoren", alt="Consommation d'énergie finale par secteur") %}
Les transports et les ménages sont les plus grands consommateurs d'énergie finale (tous agents énergétiques confondus, pas seulement l'électricité). La répartition par secteur montre où les gains d'efficacité et l'électrification (p. ex. la mobilité électrique) ont le plus grand effet de levier — et où naîtront des besoins supplémentaires en électricité.
{% end %}

---

### Scénarios de stress

{% chart(spec="energie_szenarien_vergleich", alt="Quatre scénarios de stress pour l'approvisionnement électrique suisse") %}
Quatre scénarios montrent l'éventail de la vulnérabilité : de la situation de référence stable au pire des cas (année sèche + sortie du nucléaire). Le scénario combiné crée une dépendance aux importations qui, sur des marchés européens tendus, ne peut pas être couverte sans autre. Le scénario C est un test de résistance, pas une prévision : la loi sur l'énergie nucléaire en vigueur interdit la construction de nouvelles centrales, tandis que les centrales existantes peuvent fonctionner tant qu'elles sont sûres. En août 2025, le Conseil fédéral a proposé de lever cette interdiction, en tant que contre-projet indirect à l'initiative populaire «Stop au blackout». La durée d'exploitation des centrales actuelles et la construction éventuelle de nouvelles restent des questions politiques ouvertes.
{% end %}

---

### Coûts d'importation

{% chart(spec="energie_importluecke_kosten", alt="Coûts du déficit d'importation par scénario") %}
Les conséquences financières de la dépendance aux importations sont considérables : dans le pire des cas, les coûts d'importation annuels atteignent environ 2,1 milliards de francs — calculés à 90 EUR/MWh et à 0,95 CHF pour 1 EUR. Toute variation du taux de change modifie les coûts dans la même proportion. En cas de pics de marché (comme en 2022), les coûts seraient un multiple de ce montant.
{% end %}

---

## Limites

- Scénarios statiques (pas de développement du solaire/de l'éolien, pas de réduction de la demande)
- Les prix à l'importation fluctuent fortement (2022 : jusqu'à 400 EUR/MWh) ; taux de change EUR/CHF en tant qu'hypothèse fixe (0,95)
- Base de données 2024 ; la statistique de l'électricité 2025 de l'OFEN n'est pas encore intégrée
- Effets saisonniers non modélisés (déficit hivernal > moyenne annuelle)
- Aucun effet de stockage (pompage-turbinage, batteries)

---

## Sources des données

- OFEN : Schweizerische Elektrizitätsbilanz (Statistique suisse de l'électricité, OGD, valeurs annuelles)
- OFEN : Schweizerische Gesamtenergiebilanz (Statistique globale suisse de l'énergie, consommation d'énergie finale par secteur)
- ENTSO-E : prix européens de l'électricité (marché spot day-ahead)
- Conseil fédéral : communiqué du 13 août 2025 sur le message relatif à l'initiative «Stop au blackout» et au contre-projet indirect (levée de l'interdiction de construire de nouvelles centrales nucléaires, en allemand), https://www.admin.ch/de/newnsb/GIECKzWVs6ZX6W1ba4i6X
