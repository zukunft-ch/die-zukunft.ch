+++
title = "Revenu de base : trois modèles de financement comparés"
description = "Qu'advient-il de la répartition des revenus si un revenu de base inconditionnel est financé par l'impôt sur le revenu, le remplacement des transferts ou un impôt sur la consommation ? Simulation par déciles avec des données de l'OFS."
slug = "grundeinkommen-finanzierungsmodelle"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "01_grundeinkommen"
pillar = "grundeinkommen"
category = "datenbriefing"
evidence = "mittel"
tags = ["revenu-de-base", "financement", "revenu", "inegalites", "simulation"]
charts = ["grundeinkommen_baseline_dezile.svg", "grundeinkommen_szenarien_vergleich.svg", "grundeinkommen_gini_szenarien.svg", "grundeinkommen_gewinner_verlierer.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Modèle et notion de revenu vérifiés ; les données de base datent de 2018, les vagues plus récentes de l'EBM et de SILC ne sont pas encore intégrées."

[[extra.changelog]]
date = 2026-11-08
text = "Énoncés sur la répartition des revenus et les scénarios alignés sur les données de simulation, notion de revenu (revenu disponible équivalent) désignée de façon uniforme et absence de réactions de comportement ajoutée comme limite du modèle."

[[extra.changelog]]
date = 2026-11-08
text = "Ajout de la section « Ce que montrent les expériences » (OpenResearch 2025, Finlande, votation de 2016) et d'un scénario comportemental dans le calculateur."
+++

Trois modèles de financement d'un revenu de base inconditionnel de 2 500 CHF par mois
produisent des effets redistributifs fondamentalement différents. Un impôt forfaitaire
sur le revenu réduit le plus fortement le coefficient de Gini. Le remplacement des
transferts existants permet certes d'économiser des impôts, mais profite le moins aux
ménages les plus pauvres — un résultat qui n'a rien d'anodin.
Un impôt sur la consommation agit de manière progressive, mais plus faiblement.


<!-- more -->

---

## Méthodologie

La base est constituée des parts des déciles dans le revenu disponible
équivalent, tirées du tableau de l'OFS «Kennzahlen zur Verteilung der
Einkommen» (indicateurs de la répartition des revenus ; données 2018,
enquête sur le budget des ménages EBM). On en déduit des revenus disponibles
équivalents absolus estimés par décile et par mois (part × moyenne × 10).

Trois scénarios de financement sont simulés :

- **A — Impôt forfaitaire sur le revenu** : les coûts bruts (222 milliards de CHF par an)
  sont financés par une surtaxe linéaire sur l'impôt sur le revenu.
- **B — Remplacement des transferts** : AVS, AI, PC, aide sociale, AC et allocations familiales
  (79 milliards de CHF) sont remplacées par le revenu de base.
  Le montant restant est financé par l'impôt sur le revenu.
- **C — Impôt sur la consommation** : le financement passe par une hausse de la TVA.
  Les taux de consommation varient selon le décile (D1 : 95 %, D10 : 55 %).

Le modèle est statique : il ignore les réactions de comportement, comme une
modification de l'offre de travail, d'autres habitudes de consommation ou
l'évitement fiscal. Les résultats montrent uniquement des effets de premier tour.

---

### Situation de référence : répartition des revenus 2018

{% chart(spec="grundeinkommen_baseline_dezile", alt="Parts de revenu par décile") %}
La répartition actuelle des revenus montre une forte concentration : le décile supérieur dispose d'un peu plus d'un cinquième (22 %) du revenu disponible équivalent total, le décile inférieur de moins de 3 %. Cette situation de référence est le point de départ des trois scénarios — elle montre à partir de quelle situation la redistribution opère.
{% end %}

---

### Effet net des trois scénarios

{% chart(spec="grundeinkommen_szenarien_vergleich", alt="Effet net des trois scénarios de revenu de base sur les déciles") %}
Les trois modèles de financement agissent de façon fondamentalement différente. Le scénario A (impôt sur le revenu) redistribue de manière linéaire — les déciles inférieurs gagnent, les déciles supérieurs perdent. Le scénario B (remplacement des transferts) produit un paradoxe : les déciles les plus bas gagnent le moins en termes nets (D1 : +92 CHF par mois), parce que le revenu de base ne fait pour l'essentiel que remplacer leurs transferts actuels. Le scénario C (impôt sur la consommation) pèse relativement davantage sur les déciles inférieurs en raison de leur taux de consommation plus élevé ; grâce au revenu de base, ils restent néanmoins nettement gagnants en termes nets.
{% end %}

---

### Coefficient de Gini par scénario

{% chart(spec="grundeinkommen_gini_szenarien", alt="Coefficient de Gini : situation de référence et trois scénarios") %}
Le coefficient de Gini mesure la concentration des revenus (0 = égalité parfaite, 1 = inégalité totale). Le scénario A réduit le plus fortement le Gini, car le financement progressif redistribue directement. Le scénario B le modifie à peine, parce qu'il se borne à remplacer les transferts existants. Le scénario C le réduit aussi nettement (de 0,28 à 0,18), mais moins que A : l'impôt sur la consommation pèse en soi relativement plus sur les bas revenus, et le revenu de base compense largement cet effet.
{% end %}

{{ ubi_rechner() }}


---

### Gagnants et perdants relatifs

{% chart(spec="grundeinkommen_gewinner_verlierer", alt="Gagnants et perdants par décile et par scénario") %}
On voit ici quels déciles gagnent ou perdent en termes nets. Le point de bascule varie selon le modèle de financement. Le paradoxe des transferts apparaît le plus nettement dans le scénario B : les déciles 1–2, qui dépendent fortement des prestations sociales existantes, en profitent moins que la classe moyenne — un résultat contre-intuitif, déterminant pour la mise en œuvre politique.
{% end %}

---

## Ce que montrent les expériences

Notre modèle est statique. Les expériences montrent dans quelle mesure les personnes ajustent leur temps de travail :

- **OpenResearch, États-Unis (2020–2023) :** 1000 personnes à bas revenu (21–40 ans, Texas et Illinois) ont reçu 1000 dollars par mois pendant trois ans ; 2000 personnes du groupe de contrôle ont reçu 50 dollars. Résultat : la participation au marché du travail a baissé de 3,9 points de pourcentage et le temps de travail de 1 à 2 heures par semaine ; les partenaires ont réduit le leur dans une mesure similaire. Pour chaque dollar reçu, les autres revenus de la personne ont baissé d'environ 16 cents (ceux du ménage d'environ 29 cents). Le temps gagné est allé surtout aux loisirs ; la qualité des emplois et les diplômes n'ont pas changé de manière mesurable, et le bien-être a augmenté la première année avant de revenir au niveau du groupe de contrôle.
- **Finlande (2017–2018) :** 2000 personnes au chômage ont reçu 560 euros par mois sans condition. Aucun effet mesurable sur l'emploi la première année, environ six jours de travail de plus la deuxième ; les bénéficiaires ont fait état d'un meilleur bien-être et d'une plus grande sécurité financière.
- **Suisse (2016) :** L'initiative populaire pour un revenu de base inconditionnel a échoué avec 76,9 % de non (Bâle-Ville : 36 % de oui). Selon l'enquête après le vote, l'absence de plan de financement a été déterminante. C'est précisément pourquoi ce laboratoire calcule d'abord le financement.

Ces résultats ne sont transposables qu'en partie : les deux expériences étaient limitées dans le temps, non universelles et sans volet de financement. Dans le calculateur ci-dessus, la réaction mesurée par OpenResearch (16 centimes de revenu en moins par franc de revenu de base) peut être activée comme scénario.

---

## Limites

- Données agrégées par décile plutôt que microdonnées (les données individuelles nécessitent une demande à l'OFS)
- Aucune réaction de comportement modélisée (offre de travail, habitudes de consommation, évitement fiscal) : effets statiques de premier tour Le calculateur permet d'ajouter comme scénario la réaction de l'offre de travail mesurée par l'expérience OpenResearch (estimation américaine, transposable seulement en partie).
- Répartition des transferts par décile estimée (et non tirée directement des microdonnées SILC)
- Taux de consommation par décile fondés sur des valeurs de la littérature, et non sur le détail de l'EBM de l'OFS
- Données de base 2018 : la série de tableaux de l'OFS utilisée s'arrête en 2018 ; les vagues plus récentes de l'EBM et de SILC ne sont pas encore intégrées

---

## Sources des données

- OFS : Kennzahlen zur Verteilung der Einkommen vor und nach staatlichen Transfers (indicateurs de la répartition des revenus avant et après transferts ; EBM, données 2018), parts des déciles dans le revenu disponible équivalent, https://www.bfs.admin.ch/bfsstatic/dam/assets/15344786/master
- OFAS, statistique des assurances sociales (BSV Sozialversicherungsstatistik) : volume des transferts AVS, AI, PC, AC
- OFS, SILC : parts de répartition publiées des transferts sociaux
- Vivalt, Rhodes, Bartik, Broockman, Krause, Miller : The Employment Effects of a Guaranteed Income, NBER Working Paper 32719 (juillet 2024, révisé septembre 2025), https://www.nber.org/papers/w32719
- Université d'Helsinki / Kela : résultats de l'expérience finlandaise de revenu de base 2017–2018, https://www.helsinki.fi/en/news/fair-society/basic-income-experiment-finland-yields-surprising-results
- Swissvotes : initiative populaire « Pour un revenu de base inconditionnel », 5 juin 2016 (version allemande), https://swissvotes.ch/vote/601.00/kurzbeschreibung-de.pdf
