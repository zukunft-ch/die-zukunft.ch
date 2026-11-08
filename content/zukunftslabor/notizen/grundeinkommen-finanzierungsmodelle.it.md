+++
title = "Reddito di base: tre modelli di finanziamento a confronto"
description = "Che cosa succede alla distribuzione dei redditi se un reddito di base incondizionato viene finanziato tramite imposta sul reddito, sostituzione dei trasferimenti o imposta sui consumi? Simulazione per decili con dati UST."
slug = "grundeinkommen-finanzierungsmodelle"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "01_grundeinkommen"
pillar = "grundeinkommen"
category = "datenbriefing"
evidence = "mittel"
tags = ["reddito di base", "finanziamento", "reddito", "disuguaglianza", "simulazione"]
charts = ["grundeinkommen_baseline_dezile.svg", "grundeinkommen_szenarien_vergleich.svg", "grundeinkommen_gini_szenarien.svg", "grundeinkommen_gewinner_verlierer.svg"]
+++

Tre modelli di finanziamento per un reddito di base incondizionato di CHF 2'500 al mese
mostrano effetti distributivi profondamente diversi. Un'imposta forfettaria sul reddito
riduce maggiormente il coefficiente di Gini. La sostituzione dei trasferimenti esistenti
fa risparmiare imposte, ma può peggiorare la situazione delle economie domestiche più
povere: un risultato tutt'altro che banale. Un'imposta sui consumi ha un effetto
progressivo, ma più debole.


<!-- more -->

---

## Metodologia

La base sono le quote di reddito per decile dell'Indagine sul budget delle
economie domestiche (IBED) 2018 dell'UST. Da queste si stimano i redditi
mensili assoluti per decile (quota × valore medio × 10).

Vengono simulati tre scenari di finanziamento:

- **A — Imposta forfettaria sul reddito**: i costi lordi (CHF 222,0 miliardi all'anno)
  sono finanziati con un supplemento lineare all'imposta sul reddito.
- **B — Sostituzione dei trasferimenti**: AVS, AI, PC, aiuto sociale, AD e assegni familiari
  (CHF 79,0 miliardi) vengono sostituiti dal reddito di base.
  L'importo rimanente è finanziato tramite l'imposta sul reddito.
- **C — Imposta sui consumi**: il finanziamento avviene tramite un supplemento IVA.
  Le quote di consumo variano per decile (D1: 95%, D10: 55%).

---

### Situazione di partenza: distribuzione dei redditi 2018

{% chart(spec="grundeinkommen_baseline_dezile", alt="Quote di reddito per decile") %}
L'attuale distribuzione dei redditi mostra una forte concentrazione: il decile più alto dispone di circa un quarto del reddito complessivo, quello più basso di meno del 3%. Questa situazione di partenza è il punto di riferimento per tutti e tre gli scenari: mostra da quale base agisce la ridistribuzione.
{% end %}

---

### Effetto netto dei tre scenari

{% chart(spec="grundeinkommen_szenarien_vergleich", alt="Effetto netto dei tre scenari di reddito di base sui decili") %}
I tre modelli di finanziamento agiscono in modo profondamente diverso. Lo scenario A (imposta sul reddito) ridistribuisce in modo lineare: i decili inferiori guadagnano, quelli superiori perdono. Lo scenario B (sostituzione dei trasferimenti) produce un paradosso: i decili più bassi possono perdere al netto, perché i trasferimenti esistenti erano più elevati del reddito di base. Lo scenario C (imposta sui consumi) grava maggiormente sui decili inferiori a causa della loro quota di consumo più elevata.
{% end %}

---

### Coefficiente di Gini per scenario

{% chart(spec="grundeinkommen_gini_szenarien", alt="Coefficiente di Gini: situazione di partenza e tre scenari") %}
Il coefficiente di Gini misura la concentrazione dei redditi (0 = perfetta uguaglianza, 1 = disuguaglianza totale). Lo scenario A riduce maggiormente il Gini, perché il finanziamento progressivo ridistribuisce direttamente. Lo scenario B lo modifica appena, perché si limita a sostituire i trasferimenti esistenti. Anche lo scenario C lo riduce nettamente (da 0,28 a 0,18), ma meno di A: l'imposta sul consumo pesa di per sé relativamente di più sui redditi bassi, e il reddito di base compensa più che ampiamente questo effetto.
{% end %}

---

### Chi guadagna e chi perde in termini relativi

{% chart(spec="grundeinkommen_gewinner_verlierer", alt="Chi guadagna e chi perde per decile e scenario") %}
Qui emerge quali decili guadagnano o perdono al netto. Il punto di svolta varia a seconda del modello di finanziamento. Nello scenario B il paradosso dei trasferimenti è più evidente: i decili 1–2, fortemente dipendenti dalle prestazioni sociali esistenti, ne traggono meno vantaggio del ceto medio. È un risultato controintuitivo, decisivo per l'attuazione politica.
{% end %}

---

## Limiti

- Dati aggregati per decile invece di microdati (i dati individuali richiedono una domanda all'UST)
- Nessun adattamento dei comportamenti (offerta di lavoro, modelli di consumo)
- Ripartizione dei trasferimenti sui decili stimata (non direttamente dai microdati SILC)
- Le quote di consumo per decile si basano su valori di letteratura, non sul dettaglio IBED dell'UST
- Dati disponibili solo fino al 2018 (pubblicazione IBED più recente dell'UST)

---

## Fonti dei dati

- UST IBED 2018: quote di reddito per decile (reddito disponibile equivalente)
- UFAS, statistica delle assicurazioni sociali: volume dei trasferimenti AVS, AI, PC, AD
- UST SILC: quote di ripartizione pubblicate dei trasferimenti sociali
