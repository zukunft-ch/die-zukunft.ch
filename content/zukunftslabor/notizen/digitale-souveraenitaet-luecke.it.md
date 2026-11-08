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
evidence = "mittel"
tags = ["sovranità digitale", "e-government", "open data", "id-e", "confronto"]
charts = ["digital_internetnutzung_alter.svg", "digital_egov_trend.svg", "digital_luecke_alter.svg", "digital_eid_motive.svg", "digital_opendata_vergleich.svg"]

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Dati Omnibus TIC dell'UST fino al 2025 verificati e aggiornati con il risultato sull'Id-e del 28 settembre 2025 e con l'Open Data Maturity Report 2025."

[[extra.changelog]]
date = 2026-11-08
text = "Cifre sull'utilizzo di Internet e dell'e-government allineate ai dati UST 2025, aggiunti la votazione sull'Id-e del 2025 e la maturità degli open data 2025, grafico dei motivi sostituito con i valori VOX documentati."
+++

Il 90% della popolazione svizzera usa regolarmente Internet, ma
l'utilizzo dell'e-government, la disponibilità online dei servizi e la
maturità degli open data restano sotto la media UE. Il divario di
prontezza tra popolazione digitale e Stato digitale era di 13,2 punti
percentuali nel 2025. Nel 2021 un modello di Id-e affidato all'economia privata è stato
respinto alle urne (64,4% di no); l'Id-e statale è stata accolta solo di
misura il 28 settembre 2025 (50,4% di sì).


<!-- more -->

---

## Metodologia

L'analisi combina due set di dati dell'indagine Omnibus TIC dell'UST
(2014–2025): utilizzo di Internet per fascia d'età (e-mail come proxy)
e utilizzo dell'e-government per tipo di servizio. Il «divario di
prontezza» è la differenza tra l'utilizzo generale di Internet e
l'utilizzo dell'e-government da parte della popolazione complessiva.
Completano l'analisi l'EU Open Data Maturity Report 2025, il sondaggio
VOX (gfs.bern) successivo al referendum sull'Id-e del 2021 e i risultati
ufficiali delle votazioni sull'Id-e del 2021 e del 2025.

---

### Utilizzo di Internet per fascia d'età

{% chart(spec="digital_internetnutzung_alter", alt="Utilizzo di Internet per fascia d'età in Svizzera") %}
Le fasce 15–29 e 30–59 anni si attestano attorno al 95% di utilizzo di Internet. Anche tra gli over 60 quasi l'80% è ormai online. Il problema non sono le competenze digitali della popolazione, ma la mancanza di infrastruttura digitale da parte dello Stato.
{% end %}

---

### Utilizzo dell'e-government

{% chart(spec="digital_egov_trend", alt="Utilizzo dell'e-government nel tempo") %}
L'utilizzo dell'e-government è salito dal 67% (2014) all'82% (2023), ma nel 2025 è sceso di nuovo al 77%, benché l'utilizzo di Internet continuasse a crescere. Ciò indica un problema di offerta: non manca la domanda, mancano servizi digitali utilizzabili.
{% end %}

---

### Divario di prontezza

{% chart(spec="digital_luecke_alter", alt="Divario di prontezza digitale tra popolazione e Stato") %}
Il divario tra l'utilizzo generale di Internet e l'utilizzo dell'e-government era di circa 13 punti percentuali nel 2025, dopo essersi ridotto a 8 punti nel 2021. Questo divario di prontezza non è un problema tecnologico, ma istituzionale: la popolazione è pronta, lo Stato no.
{% end %}

---

### Referendum sull'Id-e: una questione di fiducia

{% chart(spec="digital_eid_motive", alt="Motivi di chi ha votato no nel referendum sull'Id-e del 2021 (analisi VOX)") %}
Il no all'Id-e nel 2021 (64,4%) era rivolto soprattutto contro il modello affidato all'economia privata: nel sondaggio VOX, chi ha votato no ha citato più spesso la protezione e la sicurezza dei dati (60% di tutte le menzioni) e il ruolo dello Stato (49%), per esempio «l'Id-e deve essere statale» (25%). La nuova Id-e statale è stata accolta il 28 settembre 2025 con il 50,4% di sì. Il risultato di misura mostra che la fiducia nella protezione dei dati e nella responsabilità dello Stato è una condizione per l'identità digitale, non un dato acquisito.
{% end %}

---

### Maturità degli open data

{% chart(spec="digital_opendata_vergleich", alt="Maturità degli open data 2025: la Svizzera a confronto con la media UE e alcuni Paesi") %}
Nell'Open Data Maturity Report 2025 la Svizzera ottiene l'82% (2 punti in più rispetto al 2024) e rientra nel gruppo dei «followers» (73–84%). La media UE-27 è dell'86%, in testa c'è la Francia con il 100%. Ci sono progressi, come il principio «open by default» nella LMeCA e il piano direttore OGD 2024–2027, ma la distanza dai Paesi più avanzati resta. Ciò ostacola l'innovazione, la trasparenza e una politica fondata sui dati.
{% end %}

---

## Limiti

- Utilizzo dell'e-mail come proxy per l'utilizzo di Internet (definizione UST)
- Dati sull'e-government non disponibili per fascia d'età: il divario è calcolabile solo a livello complessivo
- Il punteggio open data si basa sulla metodologia UE (Svizzera come Paese AELS partecipante)
- Motivi del voto sull'Id-e: sondaggio VOX successivo al voto con campione limitato, domanda aperta con risposte multiple

---

## Fonti dei dati

- UST Omnibus TIC 2014–2025: utilizzo di Internet, utilizzo dell'e-government
- data.europa.eu: Open Data Maturity Report 2025, https://data.europa.eu/sites/default/files/2025-12/2025_odm_report_7.pdf
- data.europa.eu: Open Data Maturity 2025, scheda Paese Svizzera, https://data.europa.eu/sites/default/files/2025-12/2025_odm_factsheet_switzerland.pdf
- gfs.bern: analisi VOX di marzo 2021 (legge sull'Id-e, in tedesco), https://swissvotes.ch/vote/639.00/nachbefragung-de.pdf
- Swissvotes: legge sull'Id-e del 7 marzo 2021, respinta con il 64,4% di no, https://swissvotes.ch/vote/639.00
- SRF: votazione del 28 settembre 2025, legge sull'Id-e accolta con il 50,4% di sì, https://www.srf.ch/news/schweiz/abstimmungen-28-september-so-hat-die-schweiz-abgestimmt
