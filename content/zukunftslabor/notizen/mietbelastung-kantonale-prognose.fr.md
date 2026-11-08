+++
title = "Charge locative : quel poids pour le quintile inférieur, canton par canton ?"
description = "Le quintile inférieur consacre 40 % de son revenu au loyer. Rapporté aux loyers cantonaux, il dépasse déjà le seuil de 30 % dans tous les cantons."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "04_wohnen_ungleichheit"
pillar = "stadte-wohnen"
category = "datenbriefing"
evidence = "mittel"
tags = ["logement", "loyers", "cantons", "inegalites"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Charge locative par quintile et loyers cantonaux jusqu'en 2023 vérifiés ; SILC 2024 et le relevé structurel 2024 sont disponibles et ne sont pas encore intégrés."

[[extra.changelog]]
date = 2026-11-08
text = "Énoncés sur les quintiles et les cantons alignés sur les données, et prévision du seuil supprimée car peu parlante : le quintile inférieur dépasse déjà 30 % dans tous les cantons."
+++

Le quintile inférieur consacre 40 % de son revenu au loyer. Rapporté aux loyers cantonaux,
il dépassait déjà le seuil de 30 % dans les 26 cantons en 2023 — de 33 % dans le Jura à 65 % à Zoug.


<!-- more -->

---

## Méthodologie

Statistique des loyers de l'OFS (2010–2023, logements de 3 pièces par canton) et
taux de charge locative SILC de l'OFS. TCAM calculé à partir du rapport 2010/2023.

---

### Charge locative par quintile de revenu

{% chart(spec="wohnen_mietbelastung_quintile", alt="Taux de charge locative par quintile de revenu") %}
Le quintile inférieur consacre environ 40 % de son revenu disponible au loyer, bien au-delà du seuil de 30 % considéré comme critique. Les quintiles supérieurs se situent entre 12 et 18 %. La charge locative agit comme un impôt régressif : moins on gagne, plus on paie en proportion.
{% end %}

---

### Loyers par canton

{% chart(spec="wohnen_mieten_kantone", alt="Loyers par canton pour les logements de 3 pièces") %}
Les écarts cantonaux sont considérables : Zoug, Zurich et Schwyz sont en tête, les cantons ruraux nettement en dessous. Le graphique montre la fourchette de prix d'un logement moyen de 3 pièces, le type de logement le plus répandu en Suisse.
{% end %}

---

### Croissance des loyers (TCAM)

{% chart(spec="wohnen_mietpreiswachstum_kantone", alt="Croissance annuelle des loyers par canton") %}
La croissance annuelle des loyers (TCAM) varie fortement d'un canton à l'autre. Certains cantons progressent deux fois plus vite que d'autres ; avec des salaires réels qui stagnent en parallèle, l'écart se creuse. Le rythme de croissance détermine la vitesse à laquelle la charge continue d'augmenter si les revenus ne suivent pas.
{% end %}

---

## Limites

- Le TCAM décrit la tendance 2010–2023, il ne s'agit pas d'une prévision
- Revenus du premier quintile non différenciés par canton
- Loyers des baux en cours (les loyers des nouveaux baux sont souvent plus élevés)

---

## Sources des données

- BFS Strukturerhebung / OFS, relevé structurel : loyers par canton et nombre de pièces
- BFS SILC 2022 / OFS, enquête SILC 2022 : taux de charge locative par quintile
