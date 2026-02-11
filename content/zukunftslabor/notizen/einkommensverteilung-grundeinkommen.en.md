+++
draft = true
title = "What a Basic Income Would Change About Income Distribution"
description = "Microsimulation: An unconditional basic income of CHF 2,500/month strengthens lower incomes most and reduces the Gini coefficient."
slug = "einkommensverteilung-grundeinkommen"
date = 2026-02-11
template = "notiz.html"

[extra]
category = "datenbriefing"
evidence = "mittel"
tags = ["grundeinkommen", "einkommen", "ungleichheit", "simulation"]
charts = ["einkommensverteilung_dezile.svg", "einkommensverteilung_vergleich.svg", "einkommensverteilung_gini_zeitreihe.svg"]
+++

An unconditional basic income of CHF 2,500 per month would noticeably reshape
Switzerland's income distribution: the lower deciles benefit the most in
relative terms, and the simulated Gini coefficient drops from 0.2839 to 0.1848.
Basis: BFS-HABE data 2018 (income shares by decile).

<!-- more -->

## Methodology

The analysis builds on income shares by decile from the Household Budget Survey
(HABE) 2018, published by the BFS (Federal Statistical Office). Absolute monthly
incomes per decile are estimated from those shares (share x mean x 10).

The microsimulation adds CHF 2,500/month to each decile and calculates the
resulting Gini coefficient. Because only decile shares are available (no
individual-level data), the Gini estimate is approximate.

## Results

![Income shares by decile](/zukunftslabor/charts/einkommensverteilung_dezile.svg)

![Comparison: status quo vs. basic income](/zukunftslabor/charts/einkommensverteilung_vergleich.svg)

![Gini time series 1998–2018](/zukunftslabor/charts/einkommensverteilung_gini_zeitreihe.svg)

## Limitations

- Aggregated decile data rather than microdata (individual-level data requires a formal BFS application)
- No modelling of financing mechanisms (tax increases, transfer substitution)
- No behavioural adjustments (labour supply, consumption patterns)
- Decile shares understate dispersion within groups
- Data available only up to 2018 (latest BFS-HABE publication)

## Data sources

- BFS HABE 2018: Distribution indicators for income (equivalised disposable income)
