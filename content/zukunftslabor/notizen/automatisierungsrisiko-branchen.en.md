+++
title = "Automation: How AI Is Shifting the Risk Map"
description = "LLM-capable AI changes automation risk: office jobs are more exposed, manual work less so."
slug = "automatisierungsrisiko-branchen"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "03_automatisierung_arbeit"
pillar = "uebergaenge"
category = "datenbriefing"
evidence = "mittel"
tags = ["automation", "ai", "labour market", "industries", "llm"]
charts = ["automatisierung_beschaeftigung.svg", "automatisierung_pre_post_llm.svg", "automatisierung_risikoverschiebung.svg", "automatisierung_exponierte_stellen.svg"]
+++

LLM-capable AI shifts automation risk: office jobs (finance, law,
administration) are more exposed than before 2018, manual occupations
less so. Around 1.27 million jobs are at post-LLM risk.


<!-- more -->

---

## Methodology

FSO SLFS employment data (2024) and two risk models:
OECD/Frey-Osborne (2018, routine tasks) and the IMF AI Preparedness
Index (2024, LLM capabilities). Exposed jobs = employed persons × risk share.

---

### Employment by industry

{% chart(spec="automatisierung_beschaeftigung", alt="Employment by industry in Switzerland") %}
The industry structure provides the context: health, retail and construction employ the most people. The distribution shows which sectors would feel the largest absolute effects of an automation surge.
{% end %}

---

### Pre- vs. post-LLM

{% chart(spec="automatisierung_pre_post_llm", alt="Automation risk before and after the LLM era") %}
LLM-capable AI fundamentally shifts the risk map: industries such as finance and insurance, public administration and information/communication are considerably more exposed post-LLM than in the classic routine model. Manual occupations (construction, agriculture) remain largely unchanged.
{% end %}

---

### Risk shift

{% chart(spec="automatisierung_risikoverschiebung", alt="Direction and size of the risk shift caused by LLMs") %}
The shift shows the direction and extent of the change. Positive values mean increased risk due to LLMs. Office jobs rise the most — a signal that classic retraining programmes for manual occupations alone are not enough and that knowledge work must also come into focus.
{% end %}

---

### Exposed jobs

{% chart(spec="automatisierung_exponierte_stellen", alt="Absolute number of exposed jobs by industry") %}
Absolute numbers show the social scale: industries with many employees and high post-LLM risk add up to tens of thousands of potentially exposed jobs. This does not necessarily mean job losses — but it does mean transitions need to be managed systematically.
{% end %}

---

## Limitations

- Risk estimates are industry averages, not occupation-specific
- Post-LLM estimates are provisional (LLM capabilities are evolving quickly)
- Actual job losses depend on regulation and complementarity

---

## Data sources

- FSO SLFS 2024: Erwerbstätige nach Wirtschaftsabschnitt [employed persons by economic section]
- OECD: Automation Risk by Occupation (Nedelkoska/Quintini 2018)
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)
