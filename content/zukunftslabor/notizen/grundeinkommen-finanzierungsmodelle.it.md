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

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Modello e nozione di reddito verificati; i dati di base risalgono al 2018, le rilevazioni IBED e SILC più recenti non sono ancora integrate."

[[extra.changelog]]
date = 2026-11-08
text = "Affermazioni sulla distribuzione dei redditi e sugli scenari allineate ai dati della simulazione, nozione di reddito (reddito disponibile equivalente) indicata in modo uniforme e aggiunta l'assenza di reazioni comportamentali come limite del modello."

[[extra.changelog]]
date = 2026-11-08
text = "Aggiunta la sezione «Cosa mostrano gli esperimenti» (OpenResearch 2025, Finlandia, votazione 2016) e uno scenario comportamentale nel calcolatore."
+++

Tre modelli di finanziamento per un reddito di base incondizionato di CHF 2'500 al mese
mostrano effetti distributivi profondamente diversi. Un'imposta forfettaria sul reddito
riduce maggiormente il coefficiente di Gini. La sostituzione dei trasferimenti esistenti
fa risparmiare imposte, ma è quella che giova meno alle economie domestiche più
povere: un risultato tutt'altro che banale. Un'imposta sui consumi ha un effetto
progressivo, ma più debole.


<!-- more -->

---

## Metodologia

La base sono le quote dei decili sul reddito disponibile equivalente tratte
dalla tabella dell'UST «Kennzahlen zur Verteilung der Einkommen» (indicatori
della distribuzione dei redditi; dati 2018, Indagine sul budget delle economie
domestiche IBED). Da queste si stimano i redditi disponibili equivalenti
assoluti per decile e per mese (quota × valore medio × 10).

Vengono simulati tre scenari di finanziamento:

- **A — Imposta forfettaria sul reddito**: i costi lordi (CHF 222 miliardi all'anno)
  sono finanziati con un supplemento lineare all'imposta sul reddito.
- **B — Sostituzione dei trasferimenti**: AVS, AI, PC, aiuto sociale, AD e assegni familiari
  (CHF 79 miliardi) vengono sostituiti dal reddito di base.
  L'importo rimanente è finanziato tramite l'imposta sul reddito.
- **C — Imposta sui consumi**: il finanziamento avviene tramite un supplemento IVA.
  Le quote di consumo variano per decile (D1: 95%, D10: 55%).

Il modello è statico: ignora le reazioni comportamentali, come una diversa
offerta di lavoro, altri modelli di consumo o l'elusione fiscale. I risultati
mostrano solo effetti di primo impatto.

---

### Situazione di partenza: distribuzione dei redditi 2018

{% chart(spec="grundeinkommen_baseline_dezile", alt="Quote di reddito per decile") %}
L'attuale distribuzione dei redditi mostra una forte concentrazione: il decile più alto dispone di poco più di un quinto (22%) del reddito disponibile equivalente complessivo, quello più basso di meno del 3%. Questa situazione di partenza è il punto di riferimento per tutti e tre gli scenari: mostra da quale base agisce la ridistribuzione.
{% end %}

---

### Effetto netto dei tre scenari

{% chart(spec="grundeinkommen_szenarien_vergleich", alt="Effetto netto dei tre scenari di reddito di base sui decili") %}
I tre modelli di finanziamento agiscono in modo profondamente diverso. Lo scenario A (imposta sul reddito) ridistribuisce in modo lineare: i decili inferiori guadagnano, quelli superiori perdono. Lo scenario B (sostituzione dei trasferimenti) produce un paradosso: i decili più bassi guadagnano meno di tutti al netto (D1: +92 CHF al mese), perché il reddito di base sostituisce in gran parte i loro trasferimenti attuali. Lo scenario C (imposta sui consumi) grava relativamente di più sui decili inferiori a causa della loro quota di consumo più elevata; grazie al reddito di base, al netto guadagnano comunque in modo netto.
{% end %}

---

### Coefficiente di Gini per scenario

{% chart(spec="grundeinkommen_gini_szenarien", alt="Coefficiente di Gini: situazione di partenza e tre scenari") %}
Il coefficiente di Gini misura la concentrazione dei redditi (0 = perfetta uguaglianza, 1 = disuguaglianza totale). Lo scenario A riduce maggiormente il Gini, perché il finanziamento progressivo ridistribuisce direttamente. Lo scenario B lo modifica appena, perché si limita a sostituire i trasferimenti esistenti. Anche lo scenario C lo riduce nettamente (da 0,28 a 0,18), ma meno di A: l'imposta sul consumo pesa di per sé relativamente di più sui redditi bassi, e il reddito di base compensa più che ampiamente questo effetto.
{% end %}

{{ ubi_rechner() }}


---

### Chi guadagna e chi perde in termini relativi

{% chart(spec="grundeinkommen_gewinner_verlierer", alt="Chi guadagna e chi perde per decile e scenario") %}
Qui emerge quali decili guadagnano o perdono al netto. Il punto di svolta varia a seconda del modello di finanziamento. Nello scenario B il paradosso dei trasferimenti è più evidente: i decili 1–2, fortemente dipendenti dalle prestazioni sociali esistenti, ne traggono meno vantaggio del ceto medio. È un risultato controintuitivo, decisivo per l'attuazione politica.
{% end %}

---

## Cosa mostrano gli esperimenti

Il nostro modello è statico. Gli esperimenti mostrano quanto le persone adeguano il proprio lavoro:

- **OpenResearch, Stati Uniti (2020–2023):** 1'000 persone a basso reddito (21–40 anni, Texas e Illinois) hanno ricevuto 1'000 dollari al mese per tre anni; 2'000 persone del gruppo di controllo ne hanno ricevuti 50. Risultato: la partecipazione al mercato del lavoro è scesa di 3,9 punti percentuali e il tempo di lavoro di 1-2 ore alla settimana; partner e partner hanno ridotto il loro in misura simile. Per ogni dollaro ricevuto, gli altri redditi della persona sono scesi di circa 16 centesimi (quelli dell'economia domestica di circa 29 centesimi). Il tempo guadagnato è andato soprattutto al tempo libero; qualità del lavoro e titoli di studio non sono cambiati in modo misurabile, il benessere è aumentato nel primo anno per poi tornare al livello del gruppo di controllo.
- **Finlandia (2017–2018):** 2'000 persone disoccupate hanno ricevuto 560 euro al mese senza condizioni. Nessun effetto misurabile sull'occupazione nel primo anno, circa sei giorni di lavoro in più nel secondo; chi ha ricevuto il reddito ha riferito un maggiore benessere e più sicurezza finanziaria.
- **Svizzera (2016):** L'iniziativa popolare per un reddito di base incondizionato è stata respinta con il 76,9% di no (Basilea Città: 36% di sì). Secondo l'indagine post-voto, la mancanza di un piano di finanziamento è stata determinante. Proprio per questo il laboratorio calcola prima il finanziamento.

Questi risultati sono trasferibili solo in parte: entrambi gli esperimenti erano limitati nel tempo, non universali e senza il lato del finanziamento. Nel calcolatore qui sopra si può attivare come scenario la reazione misurata da OpenResearch (16 centesimi di reddito in meno per franco di reddito di base).

---

## Limiti

- Dati aggregati per decile invece di microdati (i dati individuali richiedono una domanda all'UST)
- Nessuna reazione comportamentale modellizzata (offerta di lavoro, modelli di consumo, elusione fiscale): effetti statici di primo impatto Nel calcolatore si può aggiungere come scenario la reazione dell'offerta di lavoro misurata dall'esperimento OpenResearch (stima statunitense, trasferibile solo in parte).
- Ripartizione dei trasferimenti sui decili stimata (non direttamente dai microdati SILC)
- Le quote di consumo per decile si basano su valori di letteratura, non sul dettaglio IBED dell'UST
- Dati di base 2018: la serie di tabelle UST utilizzata termina nel 2018; le rilevazioni IBED e SILC più recenti non sono ancora integrate

---

## Fonti dei dati

- UST: Kennzahlen zur Verteilung der Einkommen vor und nach staatlichen Transfers (indicatori della distribuzione dei redditi prima e dopo i trasferimenti; IBED, dati 2018), quote dei decili sul reddito disponibile equivalente, https://www.bfs.admin.ch/bfsstatic/dam/assets/15344786/master
- UFAS, statistica delle assicurazioni sociali: volume dei trasferimenti AVS, AI, PC, AD
- UST SILC: quote di ripartizione pubblicate dei trasferimenti sociali
- Vivalt, Rhodes, Bartik, Broockman, Krause, Miller: The Employment Effects of a Guaranteed Income, NBER Working Paper 32719 (luglio 2024, rivisto settembre 2025), https://www.nber.org/papers/w32719
- Università di Helsinki / Kela: risultati dell'esperimento finlandese sul reddito di base 2017–2018, https://www.helsinki.fi/en/news/fair-society/basic-income-experiment-finland-yields-surprising-results
- Swissvotes: iniziativa popolare «Per un reddito di base incondizionato», 5 giugno 2016 (versione tedesca), https://swissvotes.ch/vote/601.00/kurzbeschreibung-de.pdf
