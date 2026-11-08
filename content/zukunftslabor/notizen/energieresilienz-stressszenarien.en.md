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

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Scenarios are based on the SFOE electricity balance 2024; the SFOE electricity balance 2025 is available and has not yet been incorporated."

[[extra.changelog]]
date = 2026-11-08
text = "Statements on final energy consumption and import costs corrected (EUR/CHF conversion fixed: around CHF 2.1 instead of 2.3 billion), exchange-rate assumption disclosed and the Federal Council's proposal on the new-build ban added."
+++

Four stress scenarios based on real SFOE data (2024) show that
in the worst case (dry year + nuclear phase-out) Switzerland would
have to import 39.1% of its electricity — at a cost of
around CHF 2.07 billion per year at EUR 90/MWh.


<!-- more -->

---

## Methodology

The basis is the SFOE electricity balance (OGD, 2024). Four scenarios
modify the production figures of the base year:

- **A — Baseline**: actual production in 2024
- **B — Dry year**: −30% hydropower production (historically plausible, e.g. 2022)
- **C — Nuclear phase-out**: nuclear power plants shut down (−22,983 GWh)
- **D — Combined**: dry year + nuclear phase-out

Import costs calculated at EUR 90/MWh (European average spot price 2023–2024) and
an exchange rate of CHF 0.95 per EUR, i.e. around CHF 86/MWh.
Final energy consumption by sector from the SFOE overall energy balance.

---

### Electricity mix

{% chart(spec="energie_strommix_real", alt="Swiss electricity mix by energy source") %}
Hydropower and nuclear energy dominate Swiss electricity production, together accounting for over 90%. This concentration on two sources is both a strength (dispatchable domestic production) and a vulnerability — both are sensitive to external shocks: drought for hydropower, political decisions for nuclear.
{% end %}

---

### Final energy consumption by sector

{% chart(spec="energie_verbrauch_sektoren", alt="Final energy consumption by sector") %}
Transport and households are the largest final energy consumers (all energy carriers, not just electricity). The sectoral distribution shows where efficiency gains and electrification (e.g. electric mobility) have the greatest leverage — and where additional electricity demand will arise.
{% end %}

---

### Stress scenarios

{% chart(spec="energie_szenarien_vergleich", alt="Four stress scenarios for Swiss electricity supply") %}
Four scenarios show the range of vulnerability: from the stable baseline to the worst case (dry year + nuclear phase-out). The combined scenario creates an import dependence that cannot easily be covered when European markets are tight. Scenario C is a stress test, not a forecast: the current Nuclear Energy Act prohibits new nuclear power plants, while the existing ones may run as long as they are safe. In August 2025 the Federal Council proposed lifting the ban on new plants as an indirect counter-proposal to the popular initiative "Blackout stoppen" (stop the blackout). How long today's plants will run and whether new ones will be built remains politically open.
{% end %}

---

### Import costs

{% chart(spec="energie_importluecke_kosten", alt="Cost of the import gap by scenario") %}
The financial consequences of import dependence are considerable: in the worst case, annual import costs amount to around CHF 2.1 billion — calculated at EUR 90/MWh and CHF 0.95 per EUR. Any deviation in the exchange rate shifts the costs proportionally. At market peaks (as in 2022), the costs would be a multiple of that.
{% end %}

---

## Limitations

- Static scenarios (no expansion of solar/wind, no reduction in demand)
- Import prices fluctuate strongly (2022: up to EUR 400/MWh); EUR/CHF exchange rate as a fixed assumption (0.95)
- Data basis 2024; the SFOE electricity balance 2025 has not yet been incorporated
- Seasonal effects not modelled (winter gap > annual average)
- No storage effects (pumped storage, batteries)

---

## Data sources

- SFOE: Swiss electricity balance (OGD, annual figures)
- SFOE: Swiss overall energy balance (final energy consumption by sector)
- ENTSO-E: European electricity prices (day-ahead spot market)
- Federal Council: press release of 13 August 2025 on the dispatch on the "Blackout stoppen" initiative and the indirect counter-proposal (lifting the ban on new nuclear power plants, in German), https://www.admin.ch/de/newnsb/GIECKzWVs6ZX6W1ba4i6X
