+++
title = "Défense : qu'achète le franc suisse consacré à la défense ?"
description = "La Suisse consacre 0,706 % du PIB à la défense. 58 % vont au personnel, alors que la population veut du cyber et de l'aide en cas de catastrophe."
slug = "verteidigung-ausgaben-prioritaeten"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "12_neutralitaet_verteidigung"
pillar = "neutralitaet-frieden"
category = "datenbriefing"
evidence = "mittel"
tags = ["defense", "budget", "armee", "securite", "milice"]
charts = ["verteidigung_ch_trend.svg", "verteidigung_vergleich.svg", "verteidigung_pro_soldat.svg", "verteidigung_prioritaeten_luecke.svg"]
+++

La Suisse consacre 0,706 % du PIB à la défense (2023). L'effectif de
milice (140 000) absorbe 58 % du budget en dépenses de personnel. Le cyber et
l'aide en cas de catastrophe, priorités absolues de la population (82 % / 88 %), ne reçoivent chacun que 3 à 4 %.


<!-- more -->

---

## Méthodologie

Dépenses de défense en part du PIB : Banque mondiale / SIPRI (2000–2023,
8 pays). Coûts par soldat : IISS Military Balance 2024.
Allocation budgétaire : message sur l'armée 2024 du DDPS (VBS Armeebotschaft 2024), catégories simplifiées.
Priorités de la population : étude «Sécurité 2024» du CSS de l'EPF Zurich.

---

### Évolution des dépenses suisses

{% chart(spec="verteidigung_ch_trend", alt="Dépenses de défense de la Suisse en part du PIB au fil du temps") %}
Les dépenses de défense de la Suisse baissent de manière continue depuis les années 1990 et se situent aujourd'hui nettement en dessous de 1 % du PIB. La pression politique actuelle en faveur d'une hausse contraste avec une tendance aux économies vieille de plusieurs décennies : la question n'est pas seulement «combien de plus», mais «pour quoi faire».
{% end %}

---

### Comparaison internationale

{% chart(spec="verteidigung_vergleich", alt="Dépenses de défense en part du PIB en comparaison internationale") %}
En comparaison internationale, la Suisse se situe en bas du classement : en dessous de l'objectif de 2 % de l'OTAN et de la plupart de ses voisins européens. À noter : la Suisse n'a pas d'obligations d'alliance, ce qui relativise la comparaison directe, sans pour autant réduire les lacunes capacitaires.
{% end %}

---

### Coûts par soldat actif

{% chart(spec="verteidigung_pro_soldat", alt="Coûts par soldat actif en comparaison entre pays") %}
Le modèle de milice induit une structure de coûts particulière : la Suisse compte 140 000 militaires, mais la plupart servent dans la milice. Les coûts par soldat sont plus bas que dans les armées professionnelles ; en contrepartie, les charges de personnel absorbent 58 % du budget total et laissent peu de marge pour la modernisation.
{% end %}

---

### Budget et priorités de la population

{% chart(spec="verteidigung_prioritaeten_luecke", alt="Allocation budgétaire et priorités de la population") %}
Le décalage entre l'allocation budgétaire et les priorités de la population est frappant : la cybersécurité et l'aide en cas de catastrophe sont jugées prioritaires par 82 à 88 % de la population, mais ne reçoivent chacune que 3 à 4 % du budget. La défense nationale classique absorbe l'essentiel des moyens, alors même que la perception des menaces a évolué.
{% end %}

---

## Limites

- Effectif de milice ≠ équivalents plein temps (coûts par militaire non directement comparables)
- Catégories budgétaires du DDPS présentées de manière simplifiée
- Priorités de la population : sondage (non pondéré selon l'expertise en matière de sécurité)
- Données du SIPRI : différences de définition des dépenses de défense selon les pays

---

## Sources des données

- World Bank / SIPRI : Military expenditure (% of GDP), 2000–2023
- IISS : Military Balance 2024 (effectifs et budgets)
- VBS / DDPS : Armeebotschaft 2024 / message sur l'armée 2024 (allocation budgétaire)
- ETH CSS / CSS de l'EPF Zurich : Sicherheit 2024 / Sécurité 2024 (formation de l'opinion en matière de politique de sécurité)
