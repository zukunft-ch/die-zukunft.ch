+++
title = "40% of Income Goes to Rent — Lowest Earners Hit Hardest"
description = "The bottom income quintile spends 40% on rent. A basic income would sharply reduce the burden — with large cantonal differences."
slug = "mietbelastung-einkommensgruppen"
date = 2026-02-11
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "stark"
tags = ["wohnen", "miete", "ungleichheit", "grundeinkommen"]
charts = ["mietbelastung_quintile.svg", "mieten_kantone.svg", "mietbelastung_grundeinkommen.svg"]
+++

The bottom income quintile currently spends around 40% of its income on rent —
well above the 30% threshold. A basic income of CHF 2,500/month would bring
that burden down to roughly 17.8%. Cantonal differences are substantial:
from CHF 1,813 (Zug) to CHF 926 (Jura).

<!-- more -->

## Methodology

Rent burden ratios come from published BFS-SILC (Statistics on Income and
Living Conditions) tables (2022), broken down by income quintile. Cantonal
average rents are based on the BFS Structural Survey on Construction and
Housing (2023). The simulation adds CHF 30,000 in annual income (basic income)
while holding rent costs constant.

## Results

![Rent burden by quintile](/zukunftslabor/charts/mietbelastung_quintile.svg)

![Cantonal rents](/zukunftslabor/charts/mieten_kantone.svg)

![Simulation: rent burden with basic income](/zukunftslabor/charts/mietbelastung_grundeinkommen.svg)

## Limitations

- The simulation holds rents constant — in practice, landlords could respond
  to higher incomes (rent price effect)
- Quintile medians mask extreme cases within groups
- No model for housing subsidies that a basic income would partially replace
- SILC rent burden data are aggregated publication values (no microdata)

## Policy perspective

The rent burden data make one thing clear: housing is the single biggest
everyday pressure for low-income households in Switzerland. A basic income
addresses this directly — but without parallel housing policy, part of the
effect risks being absorbed by rising rents.

## Data sources

- BFS SILC 2022: Housing cost burden by income quintile (published table)
- BFS Structural Survey 2023: Average rents by canton and number of rooms
