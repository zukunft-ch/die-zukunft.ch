+++
title = "IA générale et marché du travail : deux scénarios pour la Suisse"
description = "Dans quelle mesure les professions suisses sont exposées à l'IA générative, à quelle vitesse cela pourrait se faire sentir et quelle politique de transition exige une évolution lente ou rapide. Des scénarios, pas des prévisions."
slug = "agi-szenarien-arbeitsmarkt"
date = 2026-11-08
template = "notiz.html"

[extra]
code_path = "output/datenbriefings-2026-11/agi-szenarien-arbeitsmarkt"
data = "agi-szenarien-arbeitsmarkt.csv"
category = "datenbriefing"
evidence = "mittel"
tags = ["ia", "agi", "marche-du-travail", "professions", "scenarios", "transitions"]
charts = ["agi_berufe_2025.svg", "agi_berufe_veraenderung.svg", "agi_zeithorizonte.svg"]
pillar = "uebergaenge"
+++

Selon l'OIT, dans les pays à revenu élevé, environ un tiers des personnes actives occupées travaillent dans des professions exposées à l'IA générative ; le FMI arrive à quelque 60 % pour les économies avancées, dont environ la moitié serait plutôt complétée que remplacée. La Suisse compte en 2025 environ 4,89 millions de personnes actives occupées ; le groupe le plus exposé, les employés de type administratif, se réduit déjà depuis des années. Personne ne sait à quelle vitesse cela va s'accélérer : les chercheuses et chercheurs en IA situent en 2047 la probabilité de 50 % que les machines accomplissent chaque tâche mieux que les humains. Nous décrivons donc deux scénarios et ce que chacun exige de la politique.

<!-- more -->

---

## Méthodologie

L'emploi par grand groupe de professions (CH-ISCO-19) provient de l'Enquête suisse sur la population active (ESPA) de l'OFS (moyennes annuelles 2010 et 2025). Pour l'exposition, nous nous appuyons sur deux études : l'indice affiné de l'OIT (Working Paper 140, 2025), qui évalue environ 30 000 tâches, et la Staff Discussion Note du FMI (2024), qui distingue en outre si l'IA complète ou remplace plutôt une activité. Aucune des deux études ne fournit de valeurs pour la Suisse. Transposer leurs moyennes à la Suisse constitue donc une **estimation grossière** ; la Suisse compte une part supérieure à la moyenne de professions intellectuelles et techniques. Exposition ne signifie pas perte d'emploi : elle mesure quelle part des tâches pourrait être automatisée ou assistée avec la technique actuelle. Les deux scénarios sont des hypothèses de planification, pas des prévisions.

---

### Où travaille la Suisse

{% chart(spec="agi_berufe_2025", alt="Personnes actives occupées en Suisse par grand groupe de professions, 2025") %}
Le groupe le plus important est celui des professions intellectuelles et scientifiques, avec environ 1,3 million de personnes actives occupées, suivi des professions intermédiaires (844 000). Les employés de type administratif comptent 571 000 personnes. Selon l'OIT, les professions de bureau présentent l'exposition la plus élevée ; 8 des 13 professions du niveau le plus élevé (gradient 4) sont des activités de bureau comme la comptabilité, la comptabilité salariale et la saisie de données, auxquelles s'ajoutent notamment l'analyse financière, le traitement des crédits, la vente par centre d'appels ainsi que le développement web et multimédia. Transposée grossièrement, la moyenne des pays à revenu élevé (34 % exposés, 17,3 % dans les deux niveaux les plus élevés) correspondrait pour la Suisse à environ 1,7 million d'emplois exposés, dont quelque 850 000 fortement exposés (estimation).
{% end %}

---

### Le changement est déjà en cours

{% chart(spec="agi_berufe_veraenderung", alt="Évolution des personnes actives occupées par grand groupe de professions de 2010 à 2025") %}
De 2010 à 2025, le nombre de personnes actives occupées a augmenté de 678 000. Dans le même temps, les employés de type administratif ont perdu 54 000 emplois et les métiers de l'artisanat 118 000, tandis que les professions intellectuelles et scientifiques en ont gagné 340 000 et les professions intermédiaires 245 000. Jusqu'ici, le marché du travail suisse a absorbé de tels déplacements sur 15 ans. La question décisive est de savoir si la prochaine transformation laissera autant de temps.
{% end %}

---

### À quelle vitesse ? Les spécialistes ne sont pas d'accord

{% chart(spec="agi_zeithorizonte", alt="Années attendues pour l'IA générale et l'automatisation complète selon une enquête auprès de chercheurs en IA") %}
Dans la plus vaste enquête menée auprès de 2 778 chercheuses et chercheurs en IA (automne 2023), la probabilité agrégée que des machines accomplissent sans aide humaine chaque tâche mieux que les humains est de 10 % d'ici 2027 et de 50 % d'ici 2047, soit 13 ans plus tôt que dans l'enquête de 2022. L'automatisation complète de toutes les professions est en revanche attendue bien plus tard par ces mêmes personnes : 50 % seulement en 2116. La fourchette est énorme. Parallèlement, l'OIT appelle à la prudence : après deux ans de pratique, elle a abaissé les valeurs d'automatisation des tâches de bureau, car de nombreuses activités exigent plus de travail humain que ce qui avait été supposé au départ.
{% end %}

---

### Deux scénarios

**Scénario A : diffusion progressive.** Les capacités de l'IA continuent de croître, mais leur introduction dans les entreprises prend des années. La transformation se déroule de manière semblable à 2010–2025 : les groupes exposés se réduisent lentement, comme les employés de type administratif depuis 2010, d'un peu plus d'un demi pour cent par an, et de nouvelles activités apparaissent à côté. Selon la logique du FMI, près de la moitié des emplois exposés (27 % de tous les emplois dans les économies avancées) seront plutôt complétés que remplacés par l'IA.

**Scénario B : percée rapide.** Les systèmes atteignent en une dizaine d'années une large capacité cognitive, soit la borne précoce de l'enquête auprès des spécialistes. La transformation touche alors le groupe à forte exposition et à faible complémentarité (selon le FMI, 33 % des emplois dans les économies avancées, soit transposé environ 1,6 million en Suisse, estimation) en quelques années plutôt qu'en plusieurs décennies. Le problème tient alors moins au nombre qu'au rythme.

---

## Ce que cela signifie pour la politique

- **Pour le scénario A :** adapter en continu la formation continue en entreprise et les métiers d'apprentissage, de manière ciblée pour les professions de bureau et de gestion de dossiers ; publier chaque année l'exposition et l'emploi par profession : [Travailler sans peur](@/uebergaenge.md).
- **Pour le scénario B :** des instruments préparés, qui peuvent monter en puissance rapidement : assurance salariale en cas de changement de profession, un modèle de revenu de base testé comme fondement et un dividende issu des gains de productivité : [Revenu de base](@/grundeinkommen.md).
- **Pour les deux :** nous planifions pour le cas précoce, sans le prophétiser. Des indicateurs avancés comme les données trimestrielles de l'ESPA par profession doivent déterminer quand les instruments du scénario B sont déclenchés.

---

## Sources

1. Bundesamt für Statistik (BFS) / Office fédéral de la statistique (OFS), SAKE / ESPA : Berufshauptgruppen CH-ISCO-19 der Erwerbstätigen nach Nationalität (T 03.02.01.21), 2010–2025. https://www.bfs.admin.ch/asset/de/36710074
2. Gmyrek, P. et al. (2025): Generative AI and Jobs: A Refined Global Index of Occupational Exposure. ILO Working Paper 140. https://www.ilo.org/sites/default/files/2025-05/WP140_web.pdf
3. Cazzaniga, M. et al. (2024): Gen-AI: Artificial Intelligence and the Future of Work. IMF Staff Discussion Note SDN/2024/001. https://www.imf.org/en/Publications/staff-discussion-notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379
4. Grace, K. et al. (2025): Thousands of AI Authors on the Future of AI. Journal of Artificial Intelligence Research 84. https://jair.org/index.php/jair/article/view/19087
