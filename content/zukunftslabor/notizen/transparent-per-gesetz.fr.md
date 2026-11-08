+++
title = "Transparent par la loi : 20 ans de principe de la transparence en chiffres"
description = "Les demandes d'accès adressées à l'administration fédérale ont plus que triplé depuis 2015. En 2025, l'accès complet n'a toutefois été accordé que dans 39 % des cas, et le nombre d'exceptions légales augmente."
slug = "transparent-per-gesetz"
date = 2026-11-08
template = "notiz.html"

[extra]
code_path = "output/datenbriefings-2026-11/transparent-per-gesetz"
data = "transparent-per-gesetz.csv"
category = "datenbriefing"
evidence = "mittel"
tags = ["transparence", "principe-de-transparence", "ltrans", "liens-d-interets", "etat-ouvert"]
charts = ["transparenz_gesuche_verlauf.svg", "transparenz_ergebnisse.svg", "transparenz_schlichtung_frist.svg"]
pillar = "offener-staat"

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Première publication le 8 novembre 2026 ; chiffres et sources à jour au moment de la publication."

[[extra.changelog]]
date = 2026-11-08
text = "Première publication."
+++

Depuis le 1er juillet 2006, les documents de l'administration fédérale sont en principe publics ; depuis le 1er novembre 2023, l'accès est en principe gratuit. La demande a fortement augmenté : en 2025, les autorités fédérales ont annoncé 2 145 demandes d'accès traitées, près de quatre fois plus qu'en 2015. Dans le même temps, la part des demandes ayant abouti à un accès complet est tombée à 39 %, et le Conseil fédéral et le Parlement ont soustrait 13 domaines entièrement à la loi. La Suède et l'Estonie montrent à quoi ressemble l'ouverture lorsqu'elle est la norme.

<!-- more -->

---

## Méthodologie

Les chiffres concernant la Confédération proviennent des rapports d'activité du Préposé fédéral à la protection des données et à la transparence (PFPDT), en dernier lieu du 33e rapport 2025/2026, qui contient la statistique des demandes d'accès selon la loi sur la transparence (LTrans) pour l'année civile 2025. Les autorités déclarent elles-mêmes leurs cas ; le PFPDT relève que la charge de travail n'est pas saisie de manière uniforme. Il n'existe pas de statistique globale comparable pour la Suède et l'Estonie ; la comparaison se limite donc aux règles légales. Les lois cantonales et le Parlement lui-même ne relèvent pas de la LTrans.

---

### La demande augmente

{% chart(spec="transparenz_gesuche_verlauf", alt="Nombre de demandes d'accès selon la LTrans adressées à l'administration fédérale, de 2006 à 2025") %}
Au cours de la première (demi-)année 2006, 95 demandes ont été déposées ; elles étaient 600 en 2015, un record de 2 232 en 2024 et 2 145 en 2025 (2 086 nouvelles plus 59 reportées de l'année précédente). Selon le PFPDT, leur nombre annuel a plus que triplé en dix ans. Les émoluments restent l'exception : en 2025, les autorités fédérales ont facturé 7 601 francs au total.
{% end %}

---

### Moins d'accès complets

{% chart(spec="transparenz_ergebnisse", alt="Issue des demandes d'accès selon la LTrans de 2019 à 2025, en pour cent") %}
La part des demandes avec accès complet est restée stable à environ 50 % de 2020 à 2024, puis est tombée à 39 % en 2025. L'accès partiel ou différé est monté à 25 %, les refus complets sont restés autour de 10 %. Les cas sans document officiel (13 %) et les demandes en suspens (9 %) ont fortement augmenté. Le PFPDT observe en outre que la LTrans est parfois utilisée à des fins sans lien avec la transparence.
{% end %}

---

### La médiation dure trop longtemps

{% chart(spec="transparenz_schlichtung_frist", alt="Part des procédures de médiation du PFPDT réglées dans les 30 jours, de 2018 à 2025") %}
Quiconque conteste la décision d'une autorité peut demander une médiation au PFPDT ; il y a eu 203 demandes en 2025. La loi prévoit un délai de 30 jours. En 2018 et 2019, le PFPDT a respecté ce délai dans environ la moitié des cas, depuis 2022 seulement dans un quart environ (2025 : 24 %) ; 36 % des procédures ont duré plus de 100 jours. Lorsqu'une médiation a lieu, elle aboutit souvent : un accord a été trouvé dans 73 % des séances.
{% end %}

---

### Exceptions et comparaison

- **Des exceptions toujours plus nombreuses :** depuis 2006, le Conseil fédéral et le Parlement ont introduit 13 réserves dans des lois spéciales, et au moins 11 autres sont prévues selon le PFPDT, souvent en faveur d'autorités de surveillance.
- **Suède :** le principe de transparence s'applique depuis l'ordonnance sur la liberté de la presse de 1766 et est aujourd'hui ancré au chapitre 2 de la Tryckfrihetsförordningen (1949:105), donc au niveau constitutionnel. Les autorités doivent remettre les documents rapidement («skyndsamt») ; les exceptions figurent de manière exhaustive dans la loi sur la publicité et le secret.
- **Estonie :** la loi sur l'information publique oblige les autorités à tenir des registres électroniques de documents consultables par le public ; les demandes doivent recevoir une réponse dans les cinq jours ouvrables et sont en principe gratuites.

### Intérêts et durée des mandats

Les membres de l'Assemblée fédérale doivent déclarer leurs activités professionnelles, leurs mandats et leurs fonctions de conseil et, depuis décembre 2019, indiquer si un mandat est rémunéré ou bénévole (art. 11 LParl). Les Services du Parlement publient le registre en ligne. Le montant des indemnités n'a pas à être indiqué. Il n'existe pas de limitation de la durée des mandats au niveau fédéral, mais il en existe dans certains cantons : au Grand Conseil de Bâle-Ville, une pause de quatre ans est requise après 16 ans ; au Landrat de Bâle-Campagne, après quatre législatures consécutives, il n'est pas possible de se porter candidat pour la suivante (§ 54 Cst. BL).

---

## Ce que cela signifie pour la politique

- **Justifier et limiter dans le temps les exceptions :** toute nouvelle exception à la LTrans doit être assortie d'une justification publique et d'une date d'échéance ; les 13 exceptions existantes sont réexaminées : [État ouvert](@/offener-staat.fr.md).
- **Proactif plutôt que sur demande :** des registres de documents sur le modèle estonien, afin que les documents n'aient plus à être demandés un par un.
- **Respecter les délais :** doter le PFPDT des moyens nécessaires pour que le délai de 30 jours redevienne la règle ; le mesurer publiquement chaque année.
- **Chiffrer les intérêts :** publier les revenus tirés des mandats par fourchettes ; examiner des limitations de la durée des mandats sur le modèle bâlois.

---

## Sources

1. EDÖB (Préposé fédéral à la protection des données et à la transparence, PFPDT) : 33. Tätigkeitsbericht 2025/2026, Kapitel Öffentlichkeitsprinzip und Statistik der Zugangsgesuche 2025 (33e rapport d'activités). https://www.edoeb.admin.ch/dam/de/sd-web/ZgZZm5CLxIFF/33_T%C3%A4tigkeitsbericht%202025-2026%20DE_Web.pdf
2. EDÖB (PFPDT) : 32. Tätigkeitsbericht 2024/2025 (gratuité depuis le 1er novembre 2023). https://www.oeffentlichkeitsgesetz.ch/deutsch/files/2025/07/Taetigkeitsbericht-DE.pdf
3. Bundesgesetz über das Öffentlichkeitsprinzip der Verwaltung (BGÖ) / Loi fédérale sur le principe de la transparence dans l'administration (LTrans), RS 152.3. https://www.fedlex.admin.ch/eli/cc/2006/355/de
4. Sveriges riksdag : Tryckfrihetsförordning (1949:105). https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/tryckfrihetsforordning-1949105_sfs-1949-105/
5. Regeringskansliet : Offentlighetsprincipen och sekretess, kortfattat om lagstiftningen. https://regeringen.se/contentassets/243fe724fd9a41218886261ff999fc2a/offentlighetsprincipen-och-sekretess--kortfattat-om-lagstiftningen
6. Riigi Teataja : Public Information Act (Avaliku teabe seadus). https://www.riigiteataja.ee/en/eli/ee/Riigikogu/act/514112013001/consolide
7. Kultuuriministeerium (Estonie) : File a request for information. https://kulka.ee/public-information/file-a-request-for-information
8. Parlamentsdienste (Services du Parlement) : Offenlegungspflicht der Ratsmitglieder (obligation de signaler les intérêts). https://www.parlament.ch/de/%C3%BCber-das-parlament/parlamentsportraet/ratsmitglieder/rechtsstellung-der-ratsmitglieder/offenlegungspflicht
9. Grosser Rat Basel-Stadt (Grand Conseil de Bâle-Ville) : Broschüre 2025. https://grosserrat.bs.ch/images/dateien/broschuere/2025_broschuere.pdf
10. Verfassung des Kantons Basel-Landschaft (Constitution du canton de Bâle-Campagne), SGS 100, § 54. https://bl.clex.ch/data/100
