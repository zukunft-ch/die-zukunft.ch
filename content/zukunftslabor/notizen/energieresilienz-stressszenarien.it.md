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
+++

Quattro scenari di stress basati su dati reali dell'UFE (2024) mostrano che
nel caso peggiore (anno secco + abbandono del nucleare) la Svizzera dovrebbe
importare il 39,1% della sua elettricità, con costi di
2,29 miliardi di CHF all'anno ai prezzi spot attuali.


<!-- more -->

---

## Metodologia

La base è la statistica dell'elettricità dell'UFE (OGD, 2024). Quattro scenari
modificano i dati di produzione dell'anno di riferimento:

- **A — Scenario di base**: produzione reale 2024
- **B — Anno secco**: -30% di produzione idroelettrica (storicamente plausibile, p. es. 2022)
- **C — Abbandono del nucleare**: centrali nucleari spente (-22'983 GWh)
- **D — Combinato**: anno secco + abbandono del nucleare

Costi d'importazione calcolati a 90 EUR/MWh (media dei prezzi spot europei).
Consumo finale di energia per settore secondo la statistica globale dell'energia dell'UFE.

---

### Mix elettrico

{% chart(spec="energie_strommix_real", alt="Mix elettrico svizzero per vettore energetico") %}
Energia idroelettrica e nucleare dominano la produzione elettrica svizzera con oltre il 90% complessivo. Questa concentrazione su due fonti è al tempo stesso un punto di forza (basse emissioni di CO₂) e una vulnerabilità: entrambe reagiscono in modo sensibile a shock esterni, la siccità per l'idroelettrico, le decisioni politiche per il nucleare.
{% end %}

---

### Consumo finale di energia per settore

{% chart(spec="energie_verbrauch_sektoren", alt="Consumo finale di energia per settore") %}
Industria e trasporti sono i maggiori consumatori di elettricità. La ripartizione per settore mostra dove i guadagni di efficienza e l'elettrificazione (p. es. la mobilità elettrica) hanno la leva maggiore, e dove nascerà un fabbisogno supplementare di elettricità.
{% end %}

---

### Scenari di stress

{% chart(spec="energie_szenarien_vergleich", alt="Quattro scenari di stress per l'approvvigionamento elettrico svizzero") %}
Quattro scenari mostrano l'ampiezza della vulnerabilità: dallo scenario di base stabile al caso peggiore (anno secco + abbandono del nucleare). Nello scenario combinato si crea una dipendenza dalle importazioni che, con mercati europei tesi, non può essere coperta senza difficoltà.
{% end %}

---

### Costi d'importazione

{% chart(spec="energie_importluecke_kosten", alt="Costi della lacuna d'importazione per scenario") %}
Le conseguenze finanziarie della dipendenza dalle importazioni sono considerevoli: nel caso peggiore i costi d'importazione annui ammontano a diversi miliardi di franchi, calcolati ai prezzi spot europei attuali. Con picchi di mercato (come nel 2022) i costi sarebbero un multiplo.
{% end %}

---

## Limiti

- Scenari statici (nessun potenziamento di solare/eolico, nessuna riduzione della domanda)
- I prezzi d'importazione oscillano fortemente (2022: fino a 400 EUR/MWh)
- Effetti stagionali non modellizzati (lacuna invernale > media annua)
- Nessun effetto di accumulazione (pompaggio, batterie)

---

## Fonti dei dati

- UFE: Statistica svizzera dell'elettricità (OGD, valori annui)
- UFE: Statistica globale svizzera dell'energia (consumo finale per settore)
- ENTSO-E: prezzi europei dell'elettricità (mercato spot day-ahead)
