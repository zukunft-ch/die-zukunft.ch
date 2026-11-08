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

## Limites

- Données agrégées par décile plutôt que microdonnées (les données individuelles nécessitent une demande à l'OFS)
- Aucune réaction de comportement modélisée (offre de travail, habitudes de consommation, évitement fiscal) : effets statiques de premier tour
- Répartition des transferts par décile estimée (et non tirée directement des microdonnées SILC)
- Taux de consommation par décile fondés sur des valeurs de la littérature, et non sur le détail de l'EBM de l'OFS
- Données de base 2018 : la série de tableaux de l'OFS utilisée s'arrête en 2018 ; les vagues plus récentes de l'EBM et de SILC ne sont pas encore intégrées

---

## Sources des données

- OFS : Kennzahlen zur Verteilung der Einkommen vor und nach staatlichen Transfers (indicateurs de la répartition des revenus avant et après transferts ; EBM, données 2018), parts des déciles dans le revenu disponible équivalent, https://www.bfs.admin.ch/bfsstatic/dam/assets/15344786/master
- OFAS, statistique des assurances sociales (BSV Sozialversicherungsstatistik) : volume des transferts AVS, AI, PC, AC
- OFS, SILC : parts de répartition publiées des transferts sociaux
