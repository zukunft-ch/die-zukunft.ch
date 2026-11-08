+++
title = "Onere dell'affitto: quando diventa critico, e in quale Cantone?"
description = "Il quintile più basso spende il 40% per l'affitto. Con le tendenze attuali, altri Cantoni superano la soglia del 30%."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "04_wohnen_ungleichheit"
pillar = "stadte-wohnen"
category = "datenbriefing"
evidence = "stark"
tags = ["abitare", "affitti", "cantoni", "disuguaglianza", "previsione"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg", "wohnen_schwelle_prognose.svg"]
+++

Il quintile più basso spende il 40% per l'affitto. Con l'attuale crescita degli
affitti e un aumento dei redditi dell'1%, diversi Cantoni superano la soglia del 30% entro il 2035.


<!-- more -->

---

## Metodologia

Statistica degli affitti dell'UST (2010–2023, appartamenti di 3 locali per Cantone) e
quote dell'onere dell'affitto secondo SILC (UST). CAGR calcolato dal rapporto 2010/2023.
Previsione della soglia: affitto×(1+CAGR)^t / reddito×(1+1%)^t = 30%.

---

### Onere dell'affitto per quintile di reddito

{% chart(spec="wohnen_mietbelastung_quintile", alt="Quota dell'onere dell'affitto per quintile di reddito") %}
Il quintile più basso spende circa il 40% del reddito disponibile per l'affitto, ben oltre la soglia del 30% considerata critica. I quintili superiori si situano tra il 15 e il 20%. L'onere dell'affitto agisce come un'imposta regressiva: chi guadagna meno paga in proporzione di più.
{% end %}

---

### Affitti per Cantone

{% chart(spec="wohnen_mieten_kantone", alt="Affitti per Cantone per appartamenti di 3 locali") %}
Le differenze cantonali sono considerevoli: Zurigo, Ginevra e Zugo sono in testa, i Cantoni rurali nettamente al di sotto. Il grafico mostra la fascia di prezzo di un appartamento medio di 3 locali, la tipologia di abitazione più diffusa in Svizzera.
{% end %}

---

### Crescita degli affitti (CAGR)

{% chart(spec="wohnen_mietpreiswachstum_kantone", alt="Crescita annua degli affitti per Cantone") %}
La crescita annua degli affitti (CAGR) varia fortemente da un Cantone all'altro. In alcuni Cantoni cresce il doppio che in altri; con salari reali stagnanti, la forbice si allarga. Il ritmo di crescita determina quando la soglia di onere viene superata.
{% end %}

---

### Previsione della soglia

{% chart(spec="wohnen_schwelle_prognose", alt="Previsione: quando i Cantoni superano la soglia del 30% di onere dell'affitto") %}
Proiettando le tendenze attuali e ipotizzando una crescita dei redditi dell'1% all'anno, diversi Cantoni superano la soglia del 30% entro il 2035. La previsione è prudente: gli affitti dei nuovi contratti sono spesso nettamente superiori a quelli dei contratti in corso.
{% end %}

---

## Limiti

- Il CAGR estrapola la tendenza passata
- Il reddito del primo quintile non è differenziato per Cantone
- Affitti dei contratti in corso (quelli dei nuovi contratti sono spesso più alti)

---

## Fonti dei dati

- UST, Rilevazione strutturale: affitti per Cantone e numero di locali
- UST, SILC 2022: quota dell'onere dell'affitto per quintile
