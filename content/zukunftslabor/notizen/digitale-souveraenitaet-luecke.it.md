+++
title = "Divario di prontezza digitale: la popolazione è online, lo Stato no"
description = "Il 90% della popolazione svizzera usa Internet, ma e-government e open data restano sotto la media UE. Il problema non è tecnologico, è istituzionale."
slug = "digitale-souveraenitaet-luecke"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "02_digitale_souveraenitaet"
pillar = "digitale-souveraenitaet"
category = "datenbriefing"
evidence = "stark"
tags = ["sovranità digitale", "e-government", "open data", "id-e", "confronto"]
charts = ["digital_internetnutzung_alter.svg", "digital_egov_trend.svg", "digital_luecke_alter.svg", "digital_eid_motive.svg", "digital_opendata_vergleich.svg"]
+++

Il 90% della popolazione svizzera usa regolarmente Internet, ma
l'utilizzo dell'e-government, la disponibilità online dei servizi e la
maturità degli open data restano sotto la media UE. Il divario di
prontezza tra popolazione digitale e Stato digitale è di 12,1 punti
percentuali. Il referendum sull'Id-e del 2021 lo mostra: la soluzione
deve essere statale e rispettosa della protezione dei dati.


<!-- more -->

---

## Metodologia

L'analisi combina due set di dati dell'indagine Omnibus TIC dell'UST
(2014–2025): utilizzo di Internet per fascia d'età (e-mail come proxy)
e utilizzo dell'e-government per tipo di servizio. Il «divario di
prontezza» è la differenza tra l'utilizzo generale di Internet e
l'utilizzo dell'e-government da parte della popolazione complessiva.
Completano l'analisi l'EU Open Data Maturity Ranking e i dati
VOX/Sotomo sul referendum sull'Id-e del 2021.

---

### Utilizzo di Internet per fascia d'età

{% chart(spec="digital_internetnutzung_alter", alt="Utilizzo di Internet per fascia d'età in Svizzera") %}
Quasi tutte le fasce d'età sotto i 65 anni superano il 90% di utilizzo di Internet. Anche le persone tra i 65 e i 74 anni sono ormai in maggioranza online. Il problema non sono le competenze digitali della popolazione, ma la mancanza di infrastruttura digitale da parte dello Stato.
{% end %}

---

### Utilizzo dell'e-government

{% chart(spec="digital_egov_trend", alt="Utilizzo dell'e-government nel tempo") %}
L'utilizzo dell'e-government ristagna da anni. Malgrado la crescente diffusione di Internet, la quota di popolazione che usa i servizi online dello Stato è cresciuta appena. Ciò indica un problema di offerta: non manca la domanda, mancano servizi digitali utilizzabili.
{% end %}

---

### Divario di prontezza

{% chart(spec="digital_luecke_alter", alt="Divario di prontezza digitale tra popolazione e Stato") %}
Il divario tra l'utilizzo generale di Internet e l'utilizzo dell'e-government è di circa 12 punti percentuali. Questo divario di prontezza non è un problema tecnologico, ma istituzionale: la popolazione è pronta, lo Stato no.
{% end %}

---

### Referendum sull'Id-e: una questione di fiducia

{% chart(spec="digital_eid_motive", alt="Motivi del rifiuto nel referendum sull'Id-e del 2021") %}
Il no all'Id-e nel 2021 non è stato un rifiuto delle identità digitali, bensì del modello affidato all'economia privata. I timori per la protezione dei dati e la mancanza di fiducia nei fornitori privati sono stati i motivi principali. Una soluzione statale e rispettosa della protezione dei dati continua a godere di ampio sostegno.
{% end %}

---

### Maturità degli open data

{% chart(spec="digital_opendata_vergleich", alt="Maturità degli open data: Svizzera e media UE a confronto") %}
Nell'EU Open Data Maturity Ranking la Svizzera si colloca sotto la media, sia per la disponibilità sia per l'utilizzabilità dei dati aperti dell'amministrazione. Ciò ostacola l'innovazione, la trasparenza e una politica fondata sui dati.
{% end %}

---

## Limiti

- Utilizzo dell'e-mail come proxy per l'utilizzo di Internet (definizione UST)
- Dati sull'e-government non disponibili per fascia d'età: il divario è calcolabile solo a livello complessivo
- Il punteggio open data si basa sulla metodologia UE (Svizzera come Stato osservatore)
- Motivi del voto sull'Id-e: sondaggio VOX successivo al voto con campione limitato

---

## Fonti dei dati

- UST Omnibus TIC 2014–2025: utilizzo di Internet, utilizzo dell'e-government
- EU Open Data Maturity Report 2023 (data.europa.eu)
- VOX/Sotomo: sondaggio successivo al referendum sull'Id-e del 7 marzo 2021
