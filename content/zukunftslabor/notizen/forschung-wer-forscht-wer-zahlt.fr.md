+++
title = "Recherche : qui cherche, qui paie — et qu'est-ce qui en revient ?"
description = "La Suisse investit beaucoup dans la R-D et dépose le plus de demandes de brevet européen par habitant. Mais le secteur privé domine — et la question du rendement public de la recherche publique reste ouverte."
slug = "forschung-wer-forscht-wer-zahlt"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "05_forschung_innovation"
pillar = "research-innovation"
category = "datenbriefing"
evidence = "stark"
tags = ["recherche", "innovation", "brevets", "ocde", "r-et-d"]
charts = ["forschung_sektoren_zeitreihe.svg", "forschung_privat_oeffentlich_ratio.svg", "forschung_patente_effizienz.svg", "forschung_konzentration.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Données de R-D 2023 de l'OFS vérifiées ; les indicateurs de brevets reposent sur l'Annual Report 2023 de l'OEB, les chiffres 2025 (Technology Dashboard 2025) ne sont pas encore intégrés."

[[extra.changelog]]
date = 2026-11-08
text = "Énoncés sur le rapport privé/public et sur la concentration sectorielle alignés sur les données, superlatifs non étayés supprimés."
+++

La Suisse investit 25,6 milliards de CHF dans la R-D
(2023) et obtient, avec 182 brevets OEB par milliard, la plus haute
efficacité en matière de brevets parmi les pays comparés. Mais le secteur privé dépasse la recherche
publique d'un facteur 2,37 — et les deux premiers secteurs
concentrent 45,4 % des dépenses.


<!-- more -->

---

## Méthodologie

La base est la statistique de la recherche de l'OFS (dépenses de R-D intra-muros par secteur,
2000–2023) et les données de brevets de l'OEB (Annual Report 2023). Le
secteur privé comprend la pharma, la métallurgie, les TIC, les instruments et d'autres
secteurs industriels. Public : hautes écoles, domaine des EPF, offices fédéraux.

---

### Dépenses de R-D au fil du temps

{% chart(spec="forschung_sektoren_zeitreihe", alt="Dépenses de R-D par secteur au fil du temps") %}
Le secteur privé domine les dépenses de R-D, mais son avance s'est réduite depuis 2000 (rapport privé/public : 3,1 → 2,4) et ne progresse de nouveau légèrement que depuis 2017. Cela témoigne d'une capacité d'innovation — mais aussi d'une dépendance : lorsque quelques grands groupes financent l'essentiel de la recherche, des angles morts apparaissent sur les sujets sans incitation directe du marché.
{% end %}

---

### Privé et public

{% chart(spec="forschung_privat_oeffentlich_ratio", alt="Rapport entre dépenses de R-D privées et publiques") %}
En Suisse, le secteur privé consacre nettement plus de moyens à la R-D que le secteur public (2023 : 2,4 pour 1). C'est d'une part le signe d'un secteur privé fort en recherche — d'autre part, la question se pose de savoir si la recherche publique a assez de poids propre pour couvrir la recherche fondamentale et les sujets d'intérêt général.
{% end %}

---

### Efficacité en matière de brevets en comparaison internationale

{% chart(spec="forschung_patente_effizienz", alt="Demandes de brevet par milliard de dépenses de R-D en comparaison internationale") %}
Parmi les pays comparés, la Suisse obtient la plus haute efficacité en matière de brevets : plus de demandes de brevet OEB par milliard investi que la Suède, les Pays-Bas, l'Allemagne, l'Autriche, la France, les États-Unis et le Japon. Selon l'OEB (Technology Dashboard 2025), la Suisse dépose aussi le plus de demandes de brevet européen par habitant parmi les pays de plus d'un million d'habitants. Cela plaide pour une chaîne efficace allant de la recherche au savoir exploitable — un atout pour la place économique, qu'il faut entretenir.
{% end %}

---

### Concentration sectorielle

{% chart(spec="forschung_konzentration", alt="Concentration des dépenses de R-D sur quelques secteurs") %}
Un secteur — la chimie et la pharma — représente environ un tiers de la R-D privée, et près de la moitié avec les TIC. Cela rend le paysage de la recherche vulnérable : la délocalisation d'une seule entreprise pourrait modifier sensiblement la statistique globale. La diversification de la base de recherche est une question stratégique.
{% end %}

---

## Limites

- Données de l'OFS relevées tous les 2 ans (pas de valeurs annuelles)
- Efficacité en matière de brevets : brevets OEB utilisés comme indicateur approché (toutes les innovations ne débouchent pas sur des brevets) ; sélection de huit pays
- Données sur les brevets état 2023 ; les chiffres 2025 de l'OEB (Technology Dashboard 2025, successeur du Patent Index) ne sont pas encore intégrés
- Dépenses de R-D privées en partie estimées (secrets d'affaires)
- La classification sectorielle suit la logique de l'OFS (Manuel de Frascati)

---

## Sources des données

- OFS : Forschung und Entwicklung — Intramuros-Aufwendungen (Recherche et développement — dépenses intra-muros, 2000–2023)
- OEB (EPO) : Annual Report 2023 — demandes de brevet par pays d'origine
- OCDE : Main Science and Technology Indicators (GERD)
- OEB (EPO) : Technology Dashboard 2025 (demandes de brevet par habitant), https://www.epo.org/en/about-us/statistics/technology-dashboard-2025
