+++
title = "Defence: What Does the Swiss Defence Franc Buy?"
description = "Switzerland spends 0.706% of GDP on defence. 58% goes on personnel — but the population wants cyber defence and disaster relief."
slug = "verteidigung-ausgaben-prioritaeten"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "12_neutralitaet_verteidigung"
pillar = "neutralitaet-frieden"
category = "datenbriefing"
evidence = "mittel"
tags = ["defence", "budget", "armed forces", "security", "militia"]
charts = ["verteidigung_ch_trend.svg", "verteidigung_vergleich.svg", "verteidigung_pro_soldat.svg", "verteidigung_prioritaeten_luecke.svg"]
+++

Switzerland spends 0.706% of GDP on defence (2023). The
militia troop strength (140,000) ties up 58% of the budget in personnel. Cyber defence and
disaster relief — top priorities for the population (82%/88%) — each receive only 3–4%.


<!-- more -->

---

## Methodology

Defence expenditure as a share of GDP: World Bank / SIPRI (2000–2023,
8 countries). Cost per soldier: IISS Military Balance 2024.
Budget allocation: DDPS Armeebotschaft 2024 [armed forces dispatch], simplified categories.
Population priorities: ETH CSS Security Study 2024.

---

### Swiss spending trend

{% chart(spec="verteidigung_ch_trend", alt="Swiss defence expenditure as a share of GDP over time") %}
Swiss defence expenditure has fallen continuously since the 1990s and is now well below 1% of GDP. The current political pressure to increase it contrasts with a decades-long trend of cuts — the question is not only "how much more" but "for what".
{% end %}

---

### International comparison

{% chart(spec="verteidigung_vergleich", alt="Defence expenditure as a share of GDP in international comparison") %}
In international comparison, Switzerland is at the lower end — below the NATO target of 2% and below most of its European neighbours. It should be noted that Switzerland has no alliance obligations, which puts the direct comparison into perspective but does not make the capability gaps any smaller.
{% end %}

---

### Cost per active soldier

{% chart(spec="verteidigung_pro_soldat", alt="Cost per active soldier by country") %}
The militia system leads to a particular cost structure: Switzerland has 140,000 members of the armed forces, but most of them serve in the militia. Costs per soldier are lower than in professional armies — but personnel costs tie up 58% of the total budget, leaving little room for modernisation.
{% end %}

---

### Budget vs. population priorities

{% chart(spec="verteidigung_prioritaeten_luecke", alt="Budget allocation vs. priorities of the population") %}
The discrepancy between budget allocation and the population's priorities is striking: cyber security and disaster relief are rated as priorities by 82–88% of the population but each receive only 3–4% of the budget. Conventional national defence ties up most of the money — even though threat perceptions have shifted.
{% end %}

---

## Limitations

- Militia troop strength ≠ full-time equivalents (cost per member of the armed forces not directly comparable)
- DDPS budget categories shown in simplified form
- Population priorities: survey (not weighted by security expertise)
- SIPRI data: definitions of defence expenditure differ between countries

---

## Data sources

- World Bank / SIPRI: Military expenditure (% of GDP), 2000–2023
- IISS: Military Balance 2024 — troop strength and budgets
- DDPS: Armeebotschaft 2024 [armed forces dispatch] — budget allocation
- ETH CSS: Sicherheit 2024 [Security 2024] — security policy opinion formation
