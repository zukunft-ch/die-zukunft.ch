+++
title = "Coûts de la santé : où va l'argent — et où se perd-il ?"
description = "La Suisse consacre 5,2 % de ses dépenses de santé à l'administration — nettement au-dessus de la moyenne de l'OCDE. L'excédent coûte ~10 CHF par personne et par mois."
slug = "gesundheitskosten-verwaltung-fokus"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "08_life_science_gesundheit"
pillar = "life-science"
category = "datenbriefing"
evidence = "stark"
tags = ["sante", "couts", "administration", "ocde", "efficacite"]
charts = ["gesundheit_ausgaben_kategorien.svg", "gesundheit_verwaltungsanteil_trend.svg", "gesundheit_verwaltung_international.svg", "gesundheit_verwaltungsueberschuss.svg"]
+++

La Suisse dépense 82 472 millions de CHF pour la santé
(2019), dont 4,03 % pour l'administration.
Dans la comparaison de l'OCDE, la Suisse se situe avec 5,2 % nettement au-dessus de la moyenne
(3,3 %) — l'excédent coûte ~10 CHF par personne et par mois.


<!-- more -->

---

## Méthodologie

Statistique des coûts du système de santé de l'OFS (1995–2019) selon le
System of Health Accounts (SHA). Catégories : soins curatifs ambulatoires et hospitaliers,
soins de longue durée, biens de santé, administration, prévention. Comparaison internationale
sur la base du rapport OCDE Health at a Glance 2023.

---

### Dépenses par catégorie au fil du temps

{% chart(spec="gesundheit_ausgaben_kategorien", alt="Dépenses de santé par catégorie au fil du temps") %}
Les dépenses de santé augmentent continuellement — mais pas de manière uniforme. Si les soins ambulatoires et hospitaliers représentent la part du lion, la part de l'administration croît plus que proportionnellement. Cela soulève la question de savoir quelle part de la hausse des primes va aux traitements et quelle part à la bureaucratie.
{% end %}

---

### Part de l'administration au fil du temps

{% chart(spec="gesundheit_verwaltungsanteil_trend", alt="Part de l'administration dans les dépenses de santé au fil du temps") %}
La part de l'administration augmente lentement, mais régulièrement. Ce n'est pas un hasard : le paysage fragmenté de l'assurance, avec plus de 50 caisses-maladie, génère des surcoûts structurels — comptabilité, marketing, sélection des risques — qui n'existeraient pas dans un système unique.
{% end %}

---

### Comparaison internationale

{% chart(spec="gesundheit_verwaltung_international", alt="Part de l'administration en comparaison internationale") %}
Pour les coûts administratifs, la Suisse se situe nettement au-dessus de la moyenne de l'OCDE. Les pays dotés de systèmes plus centralisés (p. ex. les États scandinaves) obtiennent des parts administratives plus basses avec une qualité des soins comparable ou meilleure. La comparaison le montre : des gains d'efficacité sont possibles.
{% end %}

---

### Excédent administratif

{% chart(spec="gesundheit_verwaltungsueberschuss", alt="Excédent administratif par rapport à la moyenne de l'OCDE en CHF par personne") %}
L'excédent par rapport à la moyenne de l'OCDE peut s'exprimer en francs par personne et par mois. Cet argent ne va ni aux traitements, ni aux médicaments, ni aux soins — il finance des structures administratives dont la simplification ferait directement baisser les primes.
{% end %}

---

## Limites

- L'harmonisation SHA facilite les comparaisons, mais les différences entre systèmes subsistent
- Les coûts administratifs comprennent aussi l'assurance qualité et la charge réglementaire
- Caisse unique et modèle concurrentiel génèrent des coûts administratifs structurellement différents
- Données de l'OCDE en partie décalées dans le temps (2021–2023)

---

## Sources des données

- OFS : Kosten und Finanzierung des Gesundheitswesens (Coût et financement du système de santé, 1995–2019)
- OCDE : Health at a Glance 2023 — Health Expenditure and Financing
- OMS : Global Health Expenditure Database
