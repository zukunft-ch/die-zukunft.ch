+++
title = "Electricity Stress Test: What Happens with Drought plus a Nuclear Phase-Out?"
description = "Four scenarios show how vulnerable Switzerland's electricity supply is — from the baseline to the worst case of drought combined with a nuclear shutdown."
slug = "energieresilienz-stressszenarien"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "06_energie_resilienz"
pillar = "energy-resilience"
category = "datenbriefing"
evidence = "stark"
tags = ["energy", "resilience", "electricity", "scenarios", "infrastructure"]
charts = ["energie_strommix_real.svg", "energie_verbrauch_sektoren.svg", "energie_szenarien_vergleich.svg", "energie_importluecke_kosten.svg"]
+++

Four stress scenarios based on real SFOE data (2024) show that
in the worst case (dry year + nuclear phase-out) Switzerland would
have to import 39.1% of its electricity — at a cost of
CHF 2.29 billion per year at current spot prices.


<!-- more -->

---

## Methodology

The basis is the SFOE electricity balance (OGD, 2024). Four scenarios
modify the production figures of the base year:

- **A — Baseline**: actual production in 2024
- **B — Dry year**: −30% hydropower production (historically plausible, e.g. 2022)
- **C — Nuclear phase-out**: nuclear power plants shut down (−22,983 GWh)
- **D — Combined**: dry year + nuclear phase-out

Import costs calculated at EUR 90/MWh (European average spot price).
Final energy consumption by sector from the SFOE overall energy balance.

---

### Electricity mix

{% chart(spec="energie_strommix_real", alt="Swiss electricity mix by energy source") %}
Hydropower and nuclear energy dominate Swiss electricity production, together accounting for over 90%. This concentration on two sources is both a strength (low CO₂) and a vulnerability — both are sensitive to external shocks: drought for hydropower, political decisions for nuclear.
{% end %}

---

### Final energy consumption by sector

{% chart(spec="energie_verbrauch_sektoren", alt="Final energy consumption by sector") %}
Industry and transport are the largest electricity consumers. The sectoral distribution shows where efficiency gains and electrification (e.g. electric mobility) have the greatest leverage — and where additional electricity demand will arise.
{% end %}

---

### Stress scenarios

{% chart(spec="energie_szenarien_vergleich", alt="Four stress scenarios for Swiss electricity supply") %}
Four scenarios show the range of vulnerability: from the stable baseline to the worst case (dry year + nuclear phase-out). The combined scenario creates an import dependence that cannot easily be covered when European markets are tight.
{% end %}

---

### Import costs

{% chart(spec="energie_importluecke_kosten", alt="Cost of the import gap by scenario") %}
The financial consequences of import dependence are considerable: in the worst case, annual import costs amount to several billion francs — calculated at current European spot prices. At market peaks (as in 2022), the costs would be a multiple of that.
{% end %}

---

## Limitations

- Static scenarios (no expansion of solar/wind, no reduction in demand)
- Import prices fluctuate strongly (2022: up to EUR 400/MWh)
- Seasonal effects not modelled (winter gap > annual average)
- No storage effects (pumped storage, batteries)

---

## Data sources

- SFOE: Schweizerische Elektrizitätsbilanz [Swiss electricity balance] (OGD, annual values)
- SFOE: Schweizerische Gesamtenergiebilanz [Swiss overall energy balance] (final energy consumption by sector)
- ENTSO-E: European electricity prices (day-ahead spot market)
