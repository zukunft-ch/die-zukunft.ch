+++
title = "Doubler la densité de robots : ce que signifieraient 600 robots au lieu de 294"
description = "La Suisse compte 294 robots industriels pour 10 000 personnes employées, moins que l'Allemagne ou le Japon. La recherche le montre : davantage de robots augmentent la productivité. La disparition ou non d'emplois dépend fortement de la manière dont la transition est organisée."
slug = "roboterdichte-verdoppeln"
date = 2026-11-08
template = "notiz.html"

[extra]
code_path = "output/datenbriefings-2026-11/roboterdichte-verdoppeln"
data = "roboterdichte-verdoppeln.csv"
category = "datenbriefing"
evidence = "mittel"
tags = ["robotique", "industrie", "productivite", "emploi", "ifr"]
charts = ["roboter_dichte_vergleich.svg", "roboter_industrie_beschaeftigung.svg", "roboter_industrie_anteil.svg"]
pillar = "robotik"

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Première publication le 8 novembre 2026 ; chiffres et sources à jour au moment de la publication."

[[extra.changelog]]
date = 2026-11-08
text = "Première publication."
+++

Avec 294 robots industriels pour 10 000 personnes employées, la Suisse figure de justesse parmi les dix premiers pays du monde en 2024, mais nettement derrière la Corée du Sud (1 220), Singapour (818), l'Allemagne (449) et le Japon (446). Un doublement à environ 600 placerait la Suisse devant l'Allemagne. Depuis 2010, l'industrie emploie de manière assez stable entre 630 000 et 650 000 personnes environ, mais sa part dans l'ensemble des personnes actives occupées diminue. Des études menées dans des pays comparables montrent des gains de productivité nets grâce aux robots ; l'effet sur l'emploi est mitigé et dépend de la manière dont la transformation est conduite.

<!-- more -->

---

## Méthodologie

La densité de robots provient du World Robotics Report 2025 de l'International Federation of Robotics (IFR) : robots industriels installés pour 10 000 personnes employées dans l'industrie manufacturière, état 2024. Selon l'IFR, les valeurs pour la Chine reposent sur des données révisées du marché du travail et ne sont pas comparables avec les éditions précédentes ; c'est pourquoi nous ne présentons pas de série chronologique de la densité de robots. L'emploi provient de l'Enquête suisse sur la population active (ESPA) de l'OFS, sections B à E (industrie, industries extractives, approvisionnement en énergie et en eau). Jusqu'en 2009, il s'agit de valeurs du 2e trimestre, à partir de 2010 de moyennes annuelles ; la rupture est visible dans le graphique. Les effets des robots sont repris d'études évaluées par les pairs portant sur d'autres pays ; il n'existe pas d'étude comparable pour la Suisse.

---

### La Suisse en comparaison

{% chart(spec="roboter_dichte_vergleich", alt="Densité de robots en 2024 par pays, avec l'objectif d'une densité suisse doublée") %}
Avec 294, la Suisse se situe au-dessus de la moyenne de l'UE (231) et de la moyenne mondiale (132), mais en dessous de pays au niveau de salaires comparable et à forte industrie d'exportation, comme l'Allemagne, le Japon, la Suède et le Danemark. Un objectif d'environ 600 (le double de la valeur de 2024) est ambitieux, mais reste nettement inférieur à la Corée du Sud et à Singapour. Un pays à salaires élevés qui manque de main-d'œuvre qualifiée a précisément de bonnes raisons d'automatiser sa production plutôt que de la délocaliser.
{% end %}

---

### Emploi industriel : stable en chiffres absolus

{% chart(spec="roboter_industrie_beschaeftigung", alt="Personnes actives occupées dans l'industrie et les industries extractives en Suisse, de 1991 à 2025") %}
De 1991 à 2004, le nombre de personnes actives occupées dans les sections B à E est passé d'environ 798 000 à 634 000. Depuis, il évolue dans une fourchette étroite ; en 2025, il s'élevait à 633 600. L'industrie n'a donc pas disparu ; depuis deux décennies, elle maintient son emploi en chiffres absolus.
{% end %}

---

### Part de l'industrie : en lente diminution

{% chart(spec="roboter_industrie_anteil", alt="Part de l'industrie et des industries extractives dans l'ensemble des personnes actives occupées, de 1991 à 2025") %}
Comme l'emploi total a augmenté (2025 : 4,89 millions de personnes actives occupées), la part de l'industrie est passée de 21,2 % (1991) à 13,0 % (2025). Davantage d'automatisation ne doit pas forcément accélérer cette tendance : là où la production reste dans le pays ou y revient grâce aux robots, des emplois demeurent aussi dans la planification, la maintenance, l'assurance qualité et la sous-traitance.
{% end %}

---

### Ce que la recherche montre sur les robots, la productivité et le travail

- **Productivité :** dans 17 pays, de 1993 à 2007, le recours croissant aux robots a contribué pour environ 0,37 point de pourcentage à la croissance annuelle de la productivité du travail, a augmenté la productivité totale des facteurs et a fait baisser les prix des produits. L'emploi total n'a pas diminué de manière significative, mais la part du travail peu qualifié, si (Graetz et Michaels, 2018).
- **Allemagne :** les pertes d'emplois dues aux robots dans l'industrie ont été entièrement compensées par de nouveaux emplois dans le secteur des services. Les personnes déjà en poste sont plus souvent restées dans la même entreprise et y ont repris de nouvelles tâches ; ce sont surtout les jeunes en début de carrière, qui ne sont tout simplement pas entrés dans l'industrie, qui ont été touchés (Dauth et al., 2021).
- **États-Unis :** un robot supplémentaire pour 1 000 personnes employées a fait baisser, dans les régions fortement touchées, le taux d'emploi de 0,2 point de pourcentage et les salaires de 0,42 % (Acemoglu et Restrepo, 2020).

Les différences entre l'Allemagne et les États-Unis le montrent : le marché du travail s'adapte mieux là où les entreprises forment leur personnel et le réaffectent en interne. Ces résultats ne sont pas transposables tels quels à la Suisse ; ils montrent toutefois ce qui compte.

---

## Ce que cela signifie pour la politique

- **Un objectif mesurable :** doubler la densité de robots pour atteindre environ 600 d'ici 2035 et en rendre compte chaque année sur la base des données de l'IFR : [Réindustrialisation par la robotique](@/robotik.fr.md).
- **Soutenir les PME de manière ciblée :** les grandes entreprises exportatrices automatisent par elles-mêmes. Le levier se situe auprès des PME, par exemple avec des centres d'essai partagés, des modèles de leasing et du conseil.
- **Organiser la transition au sein de l'entreprise :** le modèle allemand, la reconversion dans la même entreprise plutôt que le licenciement, devrait être soutenu par des bons de formation continue et des apprentissages dans la robotique et la maintenance : [Travailler sans peur](@/uebergaenge.fr.md).

---

## Sources

1. International Federation of Robotics (IFR) : Robot density surges in Europe, Asia and Americas (World Robotics 2025), 8 avril 2026. https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas
2. Bundesamt für Statistik (Office fédéral de la statistique, OFS), SAKE (ESPA) : Erwerbstätige nach Wirtschaftsabschnitten (personnes actives occupées selon les sections économiques, T 03.02.01.20), 1991–2025. https://www.bfs.admin.ch/asset/de/36494612
3. Graetz, G. et Michaels, G. (2018) : Robots at Work. Review of Economics and Statistics 100(5), 753–768. https://doi.org/10.1162/rest_a_00754
4. Dauth, W., Findeisen, S., Suedekum, J. et Woessner, N. (2021) : The Adjustment of Labor Markets to Robots. Journal of the European Economic Association 19(6), 3104–3153. https://doi.org/10.1093/jeea/jvab012
5. Acemoglu, D. et Restrepo, P. (2020) : Robots and Jobs: Evidence from US Labor Markets. Journal of Political Economy 128(6), 2188–2244. https://doi.org/10.1086/705716
