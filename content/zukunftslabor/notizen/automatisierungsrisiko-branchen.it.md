+++
title = "Automazione: come l'IA sposta la mappa dei rischi"
description = "L'IA basata su LLM cambia il rischio di automazione: i lavori d'ufficio sono più esposti, il lavoro manuale meno."
slug = "automatisierungsrisiko-branchen"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "03_automatisierung_arbeit"
pillar = "uebergaenge"
category = "datenbriefing"
evidence = "mittel"
tags = ["automazione", "ia", "mercato del lavoro", "settori", "llm"]
charts = ["automatisierung_beschaeftigung.svg", "automatisierung_pre_post_llm.svg", "automatisierung_risikoverschiebung.svg", "automatisierung_exponierte_stellen.svg"]
+++

L'IA basata su LLM sposta il rischio di automazione: i lavori d'ufficio (finanza,
diritto, amministrazione) sono più esposti rispetto a prima del 2018, le professioni
manuali meno. Circa 1,27 milioni di posti di lavoro sono a rischio nello scenario post-LLM.


<!-- more -->

---

## Metodologia

Dati sull'occupazione RIFOS dell'UST (2024) e due modelli di rischio:
OCSE/Frey-Osborne (2018, attività di routine) e IMF AI Preparedness
Index (2024, capacità degli LLM). Posti esposti = occupati × quota di rischio.

---

### Occupazione per settore

{% chart(spec="automatisierung_beschaeftigung", alt="Occupazione per settore in Svizzera") %}
La struttura settoriale costituisce il contesto: sanità, commercio ed edilizia occupano il maggior numero di persone. La ripartizione mostra quali settori risentirebbero degli effetti assoluti maggiori in caso di un'accelerazione dell'automazione.
{% end %}

---

### Prima e dopo gli LLM

{% chart(spec="automatisierung_pre_post_llm", alt="Rischio di automazione prima e dopo l'era degli LLM") %}
L'IA basata su LLM sposta radicalmente la mappa dei rischi: settori come finanza e assicurazioni, pubblica amministrazione e informazione/comunicazione sono, dopo gli LLM, nettamente più esposti che nel classico modello delle attività di routine. Le professioni manuali (edilizia, agricoltura) restano in gran parte invariate.
{% end %}

---

### Spostamento del rischio

{% chart(spec="automatisierung_risikoverschiebung", alt="Direzione ed entità dello spostamento del rischio dovuto agli LLM") %}
Lo spostamento mostra direzione ed entità del cambiamento. Valori positivi indicano un rischio accresciuto a causa degli LLM. I lavori d'ufficio aumentano di più: un segnale che i classici programmi di formazione continua per le professioni manuali da soli non bastano e che anche il lavoro intellettuale deve entrare nel mirino.
{% end %}

---

### Posti di lavoro esposti

{% chart(spec="automatisierung_exponierte_stellen", alt="Numero assoluto di posti di lavoro esposti per settore") %}
In cifre assolute emerge la portata sociale: settori con molti occupati e un elevato rischio post-LLM comportano decine di migliaia di posti potenzialmente esposti. Ciò non significa necessariamente perdita di posti di lavoro, ma la necessità di gestire le transizioni in modo sistematico.
{% end %}

---

## Limiti

- Le stime del rischio sono medie settoriali, non specifiche per professione
- Le stime post-LLM sono provvisorie (le capacità degli LLM evolvono rapidamente)
- Le effettive perdite di posti di lavoro dipendono dalla regolamentazione e dalla complementarità

---

## Fonti dei dati

- UST RIFOS 2024: occupati per sezione economica
- OCSE: Automation Risk by Occupation (Nedelkoska/Quintini 2018)
- FMI: AI Preparedness Index 2024 (Cazzaniga et al.)
