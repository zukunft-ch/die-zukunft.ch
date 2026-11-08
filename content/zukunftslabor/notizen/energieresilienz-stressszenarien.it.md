+++
title = "Stress test elettricità: che cosa succede con siccità e abbandono del nucleare?"
description = "Quattro scenari mostrano quanto sia vulnerabile l'approvvigionamento elettrico svizzero: dallo scenario di base al caso peggiore con siccità e spegnimento delle centrali nucleari."
slug = "energieresilienz-stressszenarien"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "06_energie_resilienz"
pillar = "energy-resilience"
category = "datenbriefing"
evidence = "stark"
tags = ["energia", "resilienza", "elettricità", "scenari", "infrastruttura"]
charts = ["energie_strommix_real.svg", "energie_verbrauch_sektoren.svg", "energie_szenarien_vergleich.svg", "energie_importluecke_kosten.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Gli scenari si basano sul bilancio elettrico 2024 dell'UFE; il bilancio 2025 è disponibile e non è ancora integrato."

[[extra.changelog]]
date = 2026-11-08
text = "Affermazioni sul consumo finale di energia e sui costi d'importazione corrette (conversione EUR/CHF rettificata: circa 2,1 invece di 2,3 miliardi di franchi), ipotesi di cambio esplicitata e aggiunta la proposta del Consiglio federale sul divieto di costruzione."
+++

Quattro scenari di stress basati su dati reali dell'UFE (2024) mostrano che
nel caso peggiore (anno secco + abbandono del nucleare) la Svizzera dovrebbe
importare il 39,1% della sua elettricità, con costi di
circa 2,07 miliardi di CHF all'anno a 90 EUR/MWh.


<!-- more -->

---

## Metodologia

La base è la statistica dell'elettricità dell'UFE (OGD, 2024). Quattro scenari
modificano i dati di produzione dell'anno di riferimento:

- **A — Scenario di base**: produzione reale 2024
- **B — Anno secco**: -30% di produzione idroelettrica (storicamente plausibile, p. es. 2022)
- **C — Abbandono del nucleare**: centrali nucleari spente (-22'983 GWh)
- **D — Combinato**: anno secco + abbandono del nucleare

Costi d'importazione calcolati a 90 EUR/MWh (media dei prezzi spot europei 2023–2024) e
a un tasso di cambio di 0,95 CHF per 1 EUR, ossia circa 86 CHF/MWh.
Consumo finale di energia per settore secondo la statistica globale dell'energia dell'UFE.

---

### Mix elettrico

{% chart(spec="energie_strommix_real", alt="Mix elettrico svizzero per vettore energetico") %}
Energia idroelettrica e nucleare dominano la produzione elettrica svizzera con oltre il 90% complessivo. Questa concentrazione su due fonti è al tempo stesso un punto di forza (produzione indigena programmabile) e una vulnerabilità: entrambe reagiscono in modo sensibile a shock esterni, la siccità per l'idroelettrico, le decisioni politiche per il nucleare.
{% end %}

---

### Consumo finale di energia per settore

{% chart(spec="energie_verbrauch_sektoren", alt="Consumo finale di energia per settore") %}
Trasporti ed economie domestiche sono i maggiori consumatori di energia finale (tutti i vettori energetici, non solo l'elettricità). La ripartizione per settore mostra dove i guadagni di efficienza e l'elettrificazione (p. es. la mobilità elettrica) hanno la leva maggiore, e dove nascerà un fabbisogno supplementare di elettricità.
{% end %}

---

### Scenari di stress

{% chart(spec="energie_szenarien_vergleich", alt="Quattro scenari di stress per l'approvvigionamento elettrico svizzero") %}
Quattro scenari mostrano l'ampiezza della vulnerabilità: dallo scenario di base stabile al caso peggiore (anno secco + abbandono del nucleare). Nello scenario combinato si crea una dipendenza dalle importazioni che, con mercati europei tesi, non può essere coperta senza difficoltà. Lo scenario C è uno stress test, non una previsione: la legge sull'energia nucleare in vigore vieta nuove centrali nucleari, mentre quelle esistenti possono funzionare finché sono sicure. Nell'agosto 2025 il Consiglio federale ha proposto di abolire il divieto di costruzione, come controprogetto indiretto all'iniziativa popolare «Blackout stoppen». Per quanto tempo funzioneranno gli impianti attuali e se ne verranno costruiti di nuovi resta una questione politica aperta.
{% end %}

---

### Costi d'importazione

{% chart(spec="energie_importluecke_kosten", alt="Costi della lacuna d'importazione per scenario") %}
Le conseguenze finanziarie della dipendenza dalle importazioni sono considerevoli: nel caso peggiore i costi d'importazione annui ammontano a circa 2,1 miliardi di franchi, calcolati a 90 EUR/MWh e a 0,95 CHF per 1 EUR. Ogni variazione del tasso di cambio sposta i costi in modo proporzionale. Con picchi di mercato (come nel 2022) i costi sarebbero un multiplo.
{% end %}

---

## Limiti

- Scenari statici (nessun potenziamento di solare/eolico, nessuna riduzione della domanda)
- I prezzi d'importazione oscillano fortemente (2022: fino a 400 EUR/MWh); tasso di cambio EUR/CHF come ipotesi fissa (0,95)
- Base di dati 2024; il bilancio elettrico 2025 dell'UFE non è ancora integrato
- Effetti stagionali non modellizzati (lacuna invernale > media annua)
- Nessun effetto di accumulazione (pompaggio, batterie)

---

## Fonti dei dati

- UFE: Statistica svizzera dell'elettricità (OGD, valori annui)
- UFE: Statistica globale svizzera dell'energia (consumo finale per settore)
- ENTSO-E: prezzi europei dell'elettricità (mercato spot day-ahead)
- Consiglio federale: comunicato del 13 agosto 2025 sul messaggio relativo all'iniziativa «Blackout stoppen» e al controprogetto indiretto (abolizione del divieto di costruire nuove centrali nucleari, in tedesco), https://www.admin.ch/de/newnsb/GIECKzWVs6ZX6W1ba4i6X
