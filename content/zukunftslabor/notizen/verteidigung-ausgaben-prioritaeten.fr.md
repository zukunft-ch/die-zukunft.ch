+++
title = "Défense : qu'achète le franc suisse consacré à la défense ?"
description = "Selon le SIPRI, la Suisse a consacré 0,76 % du PIB à la défense en 2025, moins que tous les pays européens comparés. La question n'est pas seulement combien de plus, mais pour quoi faire."
slug = "verteidigung-ausgaben-prioritaeten"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "12_neutralitaet_verteidigung"
pillar = "neutralitaet-frieden"
category = "datenbriefing"
evidence = "mittel"
tags = ["defense", "budget", "armee", "securite", "milice"]
charts = ["verteidigung_ch_trend.svg", "verteidigung_vergleich.svg", "verteidigung_pro_soldat.svg"]

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Mis à jour avec les données 2025 du SIPRI (avril 2026) et la décision de l'OTAN prise à La Haye ; la comparaison des coûts par soldat repose toujours sur l'IISS 2023/24."

[[extra.changelog]]
date = 2026-11-08
text = "Mis à jour avec les données 2025 du SIPRI, valeur de référence de l'OTAN de 3,5 % + 1,5 % ajoutée et section non vérifiable sur le budget et les priorités de la population, y compris la part de personnel de 58 %, supprimée."
+++

Selon le SIPRI, la Suisse a consacré 0,76 % du PIB à la défense en 2025
(7,6 milliards de dollars), après 0,70 % en 2024. Elle se situe ainsi
en dessous de tous les pays européens comparés. L'armée de milice, forte
d'environ 140 000 militaires, maintient des coûts par tête bas : la question
n'est donc pas seulement «combien de plus», mais «pour quoi faire».


<!-- more -->

---

## Méthodologie

Dépenses de défense en part du PIB : SIPRI Military Expenditure Database
(édition d'avril 2026, 2000–2025, 7 pays). Coûts par soldat : IISS Military
Balance 2024 (état 2023/24).

---

### Évolution des dépenses suisses

{% chart(spec="verteidigung_ch_trend", alt="Dépenses de défense de la Suisse en part du PIB au fil du temps") %}
Les dépenses de défense de la Suisse sont passées d'environ 1 % du PIB (2000) à 0,64 % (2014), puis sont remontées à 0,76 % (2025), toujours nettement en dessous de 1 % du PIB. En termes réels, elles ont progressé de 9,4 % en 2025 par rapport à l'année précédente (SIPRI). La pression politique actuelle en faveur d'une hausse contraste avec une tendance aux économies vieille de plusieurs décennies : la question n'est pas seulement «combien de plus», mais «pour quoi faire».
{% end %}

---

### Comparaison internationale

{% chart(spec="verteidigung_vergleich", alt="Dépenses de défense en part du PIB en comparaison internationale") %}
En comparaison internationale, la Suisse se situe en bas du classement : en 2025, l'Autriche a consacré 1,1 % de son PIB à la défense, la France 2,0 %, l'Allemagne 2,3 %, la Suède 2,5 % et la Finlande 2,6 %. Au sommet de La Haye (juin 2025), les membres de l'OTAN se sont engagés à consacrer chaque année 5 % du PIB d'ici 2035 : au moins 3,5 % aux besoins essentiels de défense et jusqu'à 1,5 % à des dépenses liées à la défense et à la sécurité, comme la protection des infrastructures et la résilience. Cet objectif ne s'applique pas à la Suisse neutre, et en l'absence d'obligations d'alliance, la comparaison directe est relative. Les lacunes capacitaires n'en sont pas réduites pour autant.
{% end %}

---

### Coûts par soldat actif

{% chart(spec="verteidigung_pro_soldat", alt="Coûts par soldat actif en comparaison entre pays") %}
Le modèle de milice induit une structure de coûts particulière : la Suisse compte environ 140 000 militaires, dont la plupart servent dans la milice. Les coûts par tête sont donc nettement plus bas que dans les armées professionnelles. Les valeurs ne sont pas directement comparables, car les militaires de milice n'occupent pas de postes à plein temps.
{% end %}

---

## Limites

- Effectif de milice ≠ équivalents plein temps (coûts par militaire non directement comparables)
- Comparaison des coûts par soldat fondée sur l'état IISS 2023/24, non actualisée
- Données du SIPRI : différences de définition des dépenses de défense selon les pays ; parts du PIB 2025 fondées sur des estimations du FMI

---

## Sources des données

- SIPRI Military Expenditure Database, édition d'avril 2026 : https://www.sipri.org/databases/milex (tableau de données : https://www.sipri.org/sites/default/files/SIPRI-Milex-data-1949-2025.xlsx)
- SIPRI Fact Sheet «Trends in World Military Expenditure, 2025» (avril 2026) : https://www.sipri.org/sites/default/files/2026-04/2604_milex_2025.pdf
- OTAN : sommet de La Haye, 24–25 juin 2025 (5 % du PIB d'ici 2035, dont 3,5 % pour les besoins essentiels de défense et 1,5 % pour des dépenses liées à la défense et à la sécurité), https://www.nato.int/en/news-and-events/articles/news/2025/06/27/nato-concludes-historic-summit-in-the-hague
- IISS : Military Balance 2024 (effectifs et budgets)
