+++
title = "Basic Income: Three Financing Models Compared"
description = "What happens to the income distribution if a UBI is financed through income tax, replacement of transfers or a consumption tax? A decile simulation with FSO data."
slug = "grundeinkommen-finanzierungsmodelle"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "01_grundeinkommen"
pillar = "grundeinkommen"
category = "datenbriefing"
evidence = "mittel"
tags = ["basic income", "financing", "income", "inequality", "simulation"]
charts = ["grundeinkommen_baseline_dezile.svg", "grundeinkommen_szenarien_vergleich.svg", "grundeinkommen_gini_szenarien.svg", "grundeinkommen_gewinner_verlierer.svg"]
+++

Three financing models for an unconditional basic income of CHF 2,500/month
show fundamentally different distributional effects. A flat income tax
reduces the Gini coefficient the most. Replacing existing transfers saves taxes,
but can leave the poorest households worse off — a non-trivial finding.
A consumption tax has a progressive effect, but a weaker one.


<!-- more -->

---

## Methodology

The basis is the income shares by decile from the FSO
Household Budget Survey (HBS) 2018. From these, absolute
monthly incomes per decile are estimated (share × mean × 10).

Three financing scenarios are simulated:

- **A — Flat income tax**: gross costs (CHF 222.0 billion/year)
  are financed through a linear income tax surcharge.
- **B — Replacement of transfers**: AHV/AVS (old-age and survivors' insurance), IV/AI (disability insurance), EL/PC (supplementary benefits), social assistance, ALV/AC (unemployment insurance) and family allowances
  (CHF 79.0 billion) are replaced by the UBI.
  The remaining amount is financed through income tax.
- **C — Consumption tax**: financing is through a VAT surcharge.
  Consumption ratios vary by decile (D1: 95%, D10: 55%).

---

### Baseline: income distribution 2018

{% chart(spec="grundeinkommen_baseline_dezile", alt="Income shares by decile") %}
Today's income distribution shows strong concentration: the top decile has around a quarter of total income, the bottom decile less than 3%. This baseline is the starting point for all three scenarios — it shows the initial situation from which redistribution takes effect.
{% end %}

---

### Net effect of the three scenarios

{% chart(spec="grundeinkommen_szenarien_vergleich", alt="Net effect of the three UBI scenarios on the deciles") %}
The three financing models have fundamentally different effects. Scenario A (income tax) redistributes linearly — lower deciles gain, upper deciles lose. Scenario B (replacement of transfers) produces a paradox: the lowest deciles can lose out in net terms because their existing transfers were higher than the UBI. Scenario C (consumption tax) weighs more heavily on lower deciles through their higher consumption ratio.
{% end %}

---

### Gini coefficient by scenario

{% chart(spec="grundeinkommen_gini_szenarien", alt="Gini coefficient: baseline vs. three scenarios") %}
The Gini coefficient measures income concentration (0 = perfect equality, 1 = total inequality). Scenario A reduces the Gini the most, because progressive financing redistributes directly. Scenario B barely changes it, because it merely replaces existing transfers. Scenario C even has a slightly regressive effect.
{% end %}

---

### Relative winners and losers

{% chart(spec="grundeinkommen_gewinner_verlierer", alt="Winners and losers by decile and scenario") %}
This shows which deciles gain or lose in net terms. The turning point varies depending on the financing model. The transfer paradox is most evident in scenario B: deciles 1–2, which depend heavily on existing social benefits, benefit less than the middle class — a counter-intuitive result that is decisive for political implementation.
{% end %}

---

## Limitations

- Aggregated decile data instead of microdata (individual data require an application to the FSO)
- No behavioural adjustments (labour supply, consumption patterns)
- Distribution of transfers across deciles estimated (not taken directly from SILC microdata)
- Consumption ratios by decile based on values from the literature, not HBS detail
- Data available only up to 2018 (latest FSO HBS publication)

---

## Data sources

- FSO HBS 2018: income shares by decile (disposable equivalised income)
- FSIO social insurance statistics: transfer volumes AHV, IV, EL, ALV
- FSO SILC: published distribution shares of social transfers
