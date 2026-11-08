+++
title = "Talento & migrazione: le qualifiche vengono valorizzate o sprecate?"
description = "Il 36% delle persone cittadine di Stati terzi lavora al di sotto del proprio livello di qualifica. Non è un fallimento dell'integrazione: è una perdita di valore aggiunto."
slug = "talent-ueberqualifikation"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "10_talent_migration"
pillar = "talent-integration"
category = "datenbriefing"
evidence = "mittel"
tags = ["migrazione", "talento", "sovraqualificazione", "mercato del lavoro", "integrazione"]
charts = ["migration_herkunft_trend.svg", "migration_nettowanderung.svg", "migration_ueberqualifikation.svg", "migration_ueberqualifikation_sektoren.svg"]
+++

Nel 2024 la Svizzera registra un saldo migratorio di +82'792 persone.
Tuttavia le qualifiche vengono sistematicamente sprecate: il 36% delle persone
cittadine di Stati terzi lavora al di sotto del proprio livello (contro il 13%
delle svizzere e degli svizzeri). La perdita di valore aggiunto stimata è di
circa 3,6 miliardi di CHF all'anno.


<!-- more -->

---

## Metodologia

Dati sulla popolazione: UST, Statistica della popolazione e delle economie domestiche (2010–2024).
Dati migratori: UST, statistica delle migrazioni (1991–2024).
Sovraqualificazione: UST, Rilevazione strutturale / RIFOS (autovalutazione + qualifica formale),
integrati dagli OECD Indicators of Talent Attractiveness 2023.

---

### Popolazione straniera per tipo di permesso

{% chart(spec="migration_herkunft_trend", alt="Popolazione straniera per tipo di permesso nel tempo") %}
La composizione della popolazione straniera è cambiata: predominano i permessi di domicilio UE/AELS, mentre i soggiorni di breve durata oscillano con la congiuntura. Il grafico mostra l'evoluzione degli effettivi: una crescita stabile che rispecchia la domanda di manodopera dell'economia svizzera.
{% end %}

---

### Saldo migratorio per provenienza

{% chart(spec="migration_nettowanderung", alt="Saldo migratorio per regione di provenienza") %}
Il saldo migratorio mostra chi arriva e chi parte. Le cittadine e i cittadini UE/AELS costituiscono la maggior parte delle entrate, spinte dalla libera circolazione delle persone. Le persone cittadine di Stati terzi arrivano in numero minore, ma incontrano i maggiori ostacoli all'integrazione nel riconoscimento professionale.
{% end %}

---

### Tasso di sovraqualificazione per gruppo di provenienza

{% chart(spec="migration_ueberqualifikation", alt="Tasso di sovraqualificazione per gruppo di provenienza") %}
Il 36% delle persone cittadine di Stati terzi lavora al di sotto del proprio livello di qualifica: quasi il triplo rispetto alle svizzere e agli svizzeri (13%). Non si tratta di un fallimento dell'integrazione da parte delle persone interessate, ma di un problema strutturale: riconoscimento dei diplomi, barriere linguistiche e norme di protezione professionale impediscono un impiego adeguato alle qualifiche.
{% end %}

---

### Settori con un'alta quota di sovraqualificazione

{% chart(spec="migration_ueberqualifikation_sektoren", alt="Settori con la quota più alta di persone occupate sovraqualificate") %}
Alcuni settori «sprecano» sistematicamente talento: ristorazione e alloggio, pulizie e commercio al dettaglio impiegano un numero particolarmente elevato di persone sovraqualificate. È una perdita di valore aggiunto in un duplice senso: per le persone interessate (minore salario) e per l'economia nel suo insieme (competenze inutilizzate).
{% end %}

---

## Limiti

- La sovraqualificazione si basa sull'autovalutazione e sul riconoscimento formale dei diplomi
- Non tutti i diplomi esteri sono automaticamente equivalenti (barriere linguistiche, protezione professionale)
- La stima della perdita economica indica un ordine di grandezza (la differenza salariale varia molto a seconda del settore)
- I dati RIFOS sono dati campionari con intervalli di confidenza

---

## Fonti dei dati

- UST: Statistica della popolazione e delle economie domestiche (STATPOP)
- UST: Statistica delle migrazioni (migrazioni internazionali)
- UST: Rilevazione strutturale — attività professionale secondo la qualifica e la nazionalità
- OECD: Indicators of Talent Attractiveness 2023
