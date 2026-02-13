+++
title = "Revenu de base"
slug = "revenu-de-base"
description = "Le revenu de base comme dividende de l'automatisation : stabilité, liberté, simplification."
template = "grundeinkommen.html"

[extra]
show_cta = true
cta_text = "Convaincu·e ? Engagez-vous avec nous pour un revenu de base."
faq_title = "Questions fréquentes"
faq = [
  { q = "N'est-ce pas simplement «de l'argent pour tous» ?", a = "Non. Le revenu de base remplace une grande partie de la bureaucratie actuelle des assurances sociales par une garantie de base simple et universelle. C'est une simplification du système — pas un cadeau." },
  { q = "Comment est-il financé ?", a = "Par une combinaison de taxes sur l'automatisation, de gains de simplification dans le système social et de réaffectation de transferts existants. Des modèles concrets sont élaborés avec des économistes et des spécialistes des sciences sociales." },
  { q = "Les gens arrêteront-ils de travailler ?", a = "La recherche montre que non. Les projets pilotes dans le monde entier démontrent que les personnes bénéficiant d'une garantie de base créent plus souvent des entreprises, se forment davantage et travaillent plus productivement — pas moins." },
  { q = "Pourquoi maintenant ?", a = "L'automatisation s'accélère. Sans un socle stabilisateur, des tensions sociales sont à craindre. Le revenu de base est une mesure préventive, pas réactive." },
  { q = "Cela s'applique-t-il aussi aux non-Suisses ?", a = "Les modalités exactes — comme l'obligation de résidence et la durée de cotisation — seront définies dans le processus démocratique. Le principe essentiel est celui de la garantie de base universelle." },
  { q = "Qu'advient-il des prestations sociales existantes ?", a = "Le revenu de base remplace et simplifie les transferts existants. Il ne s'agit pas d'en rajouter, mais de rendre le système plus simple, plus transparent et plus juste." },
  { q = "Pourquoi un projet pilote plutôt qu'une introduction directe ?", a = "Parce que nous sommes pragmatiques. Un pilote fédéral compare les modèles (RBI, impôt négatif, hybride), mesure l'impact et crée une base de décision solide – plutôt que de l'idéologie." },
  { q = "Que mesure-t-on ?", a = "Trois domaines clés : bien-être et sécurité (stress existentiel, stabilité), créations d'entreprises et entrepreneuriat, ainsi que coûts bureaucratiques et charge administrative." },
]

# Calculator
sim_title = "Calculateur RBI"
sim_desc = "Combien coûte un revenu de base inconditionnel pour la Suisse — et comment le financer ? Réglez les paramètres et comparez les scénarios."
scenario_referendum = "Initiative populaire 2016"
scenario_modest = "Début modéré"
scenario_full = "Transition complète"
panel_parameters = "Paramètres"
panel_results = "Résultats"
slider_ubi_adult = "Revenu de base adultes (CHF/mois)"
slider_ubi_child = "Revenu de base enfants (CHF/mois)"
slider_income_tax = "Supplément impôt sur le revenu (%)"
slider_vat = "Hausse TVA (points de %)"
slider_wealth_tax = "Impôt sur la fortune (%)"
slider_savings = "Économies système social (%)"
result_annual_cost = "Coût annuel"
result_revenue = "Recettes"
result_income_tax_revenue = "Impôt sur le revenu"
result_vat_revenue = "TVA"
result_wealth_tax_revenue = "Impôt sur la fortune"
result_savings_revenue = "Économies"
result_net = "Solde"
result_surplus = "Excédent"
result_deficit = "Déficit"
result_per_month = "par mois"
result_per_year = "par an"
result_billion = "mrd."
impact_title = "Effet net par personne"
impact_subtitle = "Revenu mensuel"
impact_net_gain = "Gain net"
impact_net_loss = "Perte nette"
impact_ubi_received = "RBI reçu"
impact_additional_taxes = "Impôts supplémentaires"
result_total_revenue = "Total recettes"
compare_title = "Comparaison"
compare_current = "Dépenses sociales actuelles"
compare_ubi_cost = "Coût RBI"
methodology_title = "Méthodologie & hypothèses"
methodology_text = "Ce modèle est une simplification. Il repose sur des données publiques de l'Office fédéral de la statistique (OFS) et de l'Administration fédérale des contributions (AFC). Le financement réel dépend d'effets comportementaux, de dynamiques économiques et de décisions politiques qu'un modèle statique ne peut pas refléter."
sources_title = "Sources des données"
sources_intro = "Toutes les valeurs utilisées dans le calculateur proviennent de statistiques suisses publiques. Les valeurs sont arrondies."
sources_col_param = "Indicateur"
sources_col_value = "Valeur"
sources_col_source = "Source"

[[extra.sections]]
title = "Le dividende de l'automatisation"
text = "Quand les machines produisent une part croissante de la valeur ajoutée, une partie de ce dividende doit revenir à la société. Le revenu de base n'est pas une aumône — c'est une réponse structurelle à un changement structurel."

[[extra.sections]]
title = "Ce qu'il permet"
text = ""
items = [
  { label = "Liberté de reconversion", text = "Qui perd son emploi a besoin d'un pont, pas de la peur." },
  { label = "Encouragement à l'entrepreneuriat", text = "Un socle stable permet la prise de risque pour de nouvelles idées." },
  { label = "Reconnaissance du travail de soins", text = "Le travail de care non rémunéré est rendu visible par la sécurité financière." },
  { label = "Réduction de la bureaucratie", text = "Des dizaines de prestations individuelles sont remplacées par un système transparent." },
  { label = "Travail flexible", text = "Temps partiel, travail par projet ou formation continue deviennent possibles sans angoisse existentielle." },
]

[[extra.sections]]
title = "Pas une expérience — une évolution"
text = "La Suisse possède l'un des meilleurs systèmes sociaux du monde. Le revenu de base s'appuie dessus : plus simple, plus direct, plus actuel. C'est l'évolution logique pour une société en mutation."

[[extra.sources]]
param = "Population résidante (18+)"
value = "7,53 mio."
source = "OFS, STATPOP 2024"
url = "https://www.bfs.admin.ch/bfs/fr/home/statistiques/population/effectif-evolution.html"

[[extra.sources]]
param = "Population résidante (<18)"
value = "1,53 mio."
source = "OFS, STATPOP 2024"
url = "https://www.bfs.admin.ch/bfs/fr/home/statistiques/population/effectif-evolution.html"

[[extra.sources]]
param = "Revenu imposable"
value = "CHF 420 mrd."
source = "AFC, Statistique fiscale des personnes physiques 2021"
url = "https://www.estv.admin.ch/estv/fr/accueil/afc/statistiques-fiscales-afc/chiffres-cles.html"

[[extra.sources]]
param = "Dépenses de consommation des ménages"
value = "CHF 380 mrd."
source = "OFS, Comptes nationaux 2023"
url = "https://www.bfs.admin.ch/bfs/fr/home/statistiques/economie-nationale/comptes-nationaux.html"

[[extra.sources]]
param = "Fortune imposable nette"
value = "CHF 2'800 mrd."
source = "AFC, Statistique de la fortune des personnes physiques 2021"
url = "https://www.estv.admin.ch/estv/fr/accueil/afc/statistiques-fiscales-afc/chiffres-cles.html"

[[extra.sources]]
param = "Dépenses sociales"
value = "CHF 185 mrd."
source = "OFAS, Comptes globaux de la protection sociale 2022"
url = "https://www.bsv.admin.ch/bsv/fr/home/assurances-sociales/ueberblick/grsv.html"
+++
