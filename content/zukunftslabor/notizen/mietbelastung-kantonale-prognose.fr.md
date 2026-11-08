+++
title = "Charge locative : quand la situation devient-elle critique dans chaque canton ?"
description = "Le quintile inférieur consacre 40 % de son revenu au loyer. Selon les tendances actuelles, d'autres cantons franchiront le seuil de 30 %."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "04_wohnen_ungleichheit"
pillar = "stadte-wohnen"
category = "datenbriefing"
evidence = "stark"
tags = ["logement", "loyers", "cantons", "inegalites", "prevision"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg", "wohnen_schwelle_prognose.svg"]
+++

Le quintile inférieur consacre 40 % de son revenu au loyer. Avec la croissance actuelle des loyers et
une hausse des revenus de 1 %, plusieurs cantons franchiront le seuil de 30 % d'ici 2035.


<!-- more -->

---

## Méthodologie

Statistique des loyers de l'OFS (2010–2023, logements de 3 pièces par canton) et
taux de charge locative SILC de l'OFS. TCAM calculé à partir du rapport 2010/2023.
Prévision du seuil : loyer×(1+TCAM)^t / revenu×(1+1 %)^t = 30 %.

---

### Charge locative par quintile de revenu

{% chart(spec="wohnen_mietbelastung_quintile", alt="Taux de charge locative par quintile de revenu") %}
Le quintile inférieur consacre environ 40 % de son revenu disponible au loyer, bien au-delà du seuil de 30 % considéré comme critique. Les quintiles supérieurs se situent entre 15 et 20 %. La charge locative agit comme un impôt régressif : moins on gagne, plus on paie en proportion.
{% end %}

---

### Loyers par canton

{% chart(spec="wohnen_mieten_kantone", alt="Loyers par canton pour les logements de 3 pièces") %}
Les écarts cantonaux sont considérables : Zurich, Genève et Zoug sont en tête, les cantons ruraux nettement en dessous. Le graphique montre la fourchette de prix d'un logement moyen de 3 pièces, le type de logement le plus répandu en Suisse.
{% end %}

---

### Croissance des loyers (TCAM)

{% chart(spec="wohnen_mietpreiswachstum_kantone", alt="Croissance annuelle des loyers par canton") %}
La croissance annuelle des loyers (TCAM) varie fortement d'un canton à l'autre. Certains cantons progressent deux fois plus vite que d'autres ; avec des salaires réels qui stagnent en parallèle, l'écart se creuse. Le rythme de croissance détermine quand le seuil de charge sera franchi.
{% end %}

---

### Prévision du seuil

{% chart(spec="wohnen_schwelle_prognose", alt="Prévision : quand les cantons franchissent-ils le seuil de charge locative de 30 %") %}
Si les tendances actuelles se prolongent et avec une croissance des revenus supposée de 1 % par an, plusieurs cantons franchiront le seuil de 30 % d'ici 2035. La prévision est prudente : les loyers des nouveaux baux sont souvent nettement supérieurs aux loyers des baux en cours.
{% end %}

---

## Limites

- Le TCAM extrapole la tendance passée
- Revenus du premier quintile non différenciés par canton
- Loyers des baux en cours (les loyers des nouveaux baux sont souvent plus élevés)

---

## Sources des données

- BFS Strukturerhebung / OFS, relevé structurel : loyers par canton et nombre de pièces
- BFS SILC 2022 / OFS, enquête SILC 2022 : taux de charge locative par quintile
