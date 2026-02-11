+++
title = "Cosa cambierebbe un reddito di base nella distribuzione dei redditi"
description = "Microsimulazione: un reddito di base incondizionato di CHF 2'500/mese rafforza soprattutto i redditi bassi e riduce il coefficiente di Gini."
slug = "einkommensverteilung-grundeinkommen"
date = 2026-02-11
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["grundeinkommen", "einkommen", "ungleichheit", "simulation"]
charts = ["einkommensverteilung_dezile.svg", "einkommensverteilung_vergleich.svg", "einkommensverteilung_gini_zeitreihe.svg"]
+++

Un reddito di base incondizionato di CHF 2'500 al mese modificherebbe
sensibilmente la distribuzione dei redditi in Svizzera: i decili inferiori ne
beneficerebbero in misura proporzionalmente maggiore, e il coefficiente di Gini
simulato scenderebbe da 0.2839 a 0.1848.
Base dati: UST-HABE 2018 (quote di reddito per decile).

<!-- more -->

## Metodologia

La base sono le quote di reddito per decile tratte dall'Indagine sul budget
delle economie domestiche (HABE) 2018 dell'UST. Da queste vengono stimati
i redditi mensili assoluti per decile (quota x media x 10).

La microsimulazione aggiunge CHF 2'500/mese a ogni decile e calcola il
coefficiente di Gini risultante. Poiché sono disponibili solo quote per
decile (e non dati individuali), la stima del Gini è approssimativa.

## Risultati

![Quote di reddito per decile](/zukunftslabor/charts/einkommensverteilung_dezile.svg)

![Confronto: status quo vs. reddito di base](/zukunftslabor/charts/einkommensverteilung_vergleich.svg)

![Serie temporale Gini 1998–2018](/zukunftslabor/charts/einkommensverteilung_gini_zeitreihe.svg)

## Limiti

- Dati aggregati per decile anziché microdati (i dati individuali richiedono una richiesta all'UST)
- Nessuna modellazione del finanziamento (aumenti fiscali, sostituzione di trasferimenti)
- Nessun adeguamento comportamentale (offerta di lavoro, modelli di consumo)
- Le quote per decile sottostimano la dispersione all'interno dei gruppi
- Dati disponibili solo fino al 2018 (ultima pubblicazione UST-HABE)

## Fonti dei dati

- UST HABE 2018: indicatori sulla distribuzione dei redditi (reddito equivalente disponibile)
