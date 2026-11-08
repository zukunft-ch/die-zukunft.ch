+++
title = "Onere dell'affitto: quanto pesa sul quintile più basso, Cantone per Cantone?"
description = "Il quintile più basso spende il 40% per l'affitto. Rapportato agli affitti cantonali, supera già la soglia del 30% in tutti i Cantoni."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "04_wohnen_ungleichheit"
pillar = "stadte-wohnen"
category = "datenbriefing"
evidence = "mittel"
tags = ["abitare", "affitti", "cantoni", "disuguaglianza"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Onere dell'affitto per quintile e affitti cantonali fino al 2023 verificati; SILC 2024 e la rilevazione strutturale 2024 sono disponibili e non ancora integrate."

[[extra.changelog]]
date = 2026-11-08
text = "Affermazioni su quintili e Cantoni allineate ai dati e rimossa la previsione della soglia, poco significativa perché il quintile più basso supera già il 30% in tutti i Cantoni."
+++

Il quintile più basso spende il 40% per l'affitto. Rapportato agli affitti
cantonali, nel 2023 superava già la soglia del 30% in tutti i 26 Cantoni: dal 33% nel Giura al 65% a Zugo.


<!-- more -->

---

## Metodologia

Statistica degli affitti dell'UST (2010–2023, appartamenti di 3 locali per Cantone) e
quote dell'onere dell'affitto secondo SILC (UST). CAGR calcolato dal rapporto 2010/2023.

---

### Onere dell'affitto per quintile di reddito

{% chart(spec="wohnen_mietbelastung_quintile", alt="Quota dell'onere dell'affitto per quintile di reddito") %}
Il quintile più basso spende circa il 40% del reddito disponibile per l'affitto, ben oltre la soglia del 30% considerata critica. I quintili superiori si situano tra il 12 e il 18%. L'onere dell'affitto agisce come un'imposta regressiva: chi guadagna meno paga in proporzione di più.
{% end %}

---

### Affitti per Cantone

{% chart(spec="wohnen_mieten_kantone", alt="Affitti per Cantone per appartamenti di 3 locali") %}
Le differenze cantonali sono considerevoli: Zugo, Zurigo e Svitto sono in testa, i Cantoni rurali nettamente al di sotto. Il grafico mostra la fascia di prezzo di un appartamento medio di 3 locali, la tipologia di abitazione più diffusa in Svizzera.
{% end %}

---

### Crescita degli affitti (CAGR)

{% chart(spec="wohnen_mietpreiswachstum_kantone", alt="Crescita annua degli affitti per Cantone") %}
La crescita annua degli affitti (CAGR) varia fortemente da un Cantone all'altro. In alcuni Cantoni cresce il doppio che in altri; con salari reali stagnanti, la forbice si allarga. Il ritmo di crescita determina quanto rapidamente l'onere continua ad aumentare se i redditi non tengono il passo.
{% end %}

---

## Limiti

- Il CAGR descrive la tendenza 2010–2023, non è una previsione
- Il reddito del primo quintile non è differenziato per Cantone
- Affitti dei contratti in corso (quelli dei nuovi contratti sono spesso più alti)

---

## Fonti dei dati

- UST, Rilevazione strutturale: affitti per Cantone e numero di locali
- UST, SILC 2022: quota dell'onere dell'affitto per quintile
