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

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Model and income concept checked; the data basis is 2018, more recent HBS and SILC waves have not yet been incorporated."

[[extra.changelog]]
date = 2026-11-08
text = "Statements on income distribution and the scenarios aligned with the simulation data, the income concept (disposable equivalised income) labelled consistently and missing behavioural responses added as a limitation of the model."

[[extra.changelog]]
date = 2026-11-08
text = "Added the section “What experiments show” (OpenResearch 2025, Finland, 2016 vote) and a behavioural scenario in the calculator."
+++

Three financing models for an unconditional basic income of CHF 2,500/month
show fundamentally different distributional effects. A flat income tax
reduces the Gini coefficient the most. Replacing existing transfers saves taxes,
but does the least for the poorest households — a non-trivial finding.
A consumption tax has a progressive effect, but a weaker one.


<!-- more -->

---

## Methodology

The basis is the decile shares of disposable equivalised income from
the FSO table "Kennzahlen zur Verteilung der Einkommen" [key figures on
income distribution] (data basis 2018, Household Budget Survey HBS). From
these, absolute disposable equivalised incomes per decile and month are
estimated (share × mean × 10).

Three financing scenarios are simulated:

- **A — Flat income tax**: gross costs (CHF 222 billion/year)
  are financed through a linear income tax surcharge.
- **B — Replacement of transfers**: AHV/AVS (old-age and survivors' insurance), IV/AI (disability insurance), EL/PC (supplementary benefits), social assistance, ALV/AC (unemployment insurance) and family allowances
  (CHF 79 billion) are replaced by the UBI.
  The remaining amount is financed through income tax.
- **C — Consumption tax**: financing is through a VAT surcharge.
  Consumption ratios vary by decile (D1: 95%, D10: 55%).

The model is static: it ignores behavioural responses such as changes in
labour supply, consumption patterns or tax avoidance. The results show
first-round effects only.

---

### Baseline: income distribution 2018

{% chart(spec="grundeinkommen_baseline_dezile", alt="Income shares by decile") %}
Today's income distribution shows strong concentration: the top decile has just over a fifth (22%) of total disposable equivalised income, the bottom decile less than 3%. This baseline is the starting point for all three scenarios — it shows the initial situation from which redistribution takes effect.
{% end %}

---

### Net effect of the three scenarios

{% chart(spec="grundeinkommen_szenarien_vergleich", alt="Net effect of the three UBI scenarios on the deciles") %}
The three financing models have fundamentally different effects. Scenario A (income tax) redistributes linearly — lower deciles gain, upper deciles lose. Scenario B (replacement of transfers) produces a paradox: the lowest deciles gain the least in net terms (D1: +CHF 92/month) because the basic income largely just replaces their existing transfers. Scenario C (consumption tax) weighs relatively more heavily on lower deciles through their higher consumption ratio; thanks to the basic income, they still gain clearly in net terms.
{% end %}

---

### Gini coefficient by scenario

{% chart(spec="grundeinkommen_gini_szenarien", alt="Gini coefficient: baseline vs. three scenarios") %}
The Gini coefficient measures income concentration (0 = perfect equality, 1 = total inequality). Scenario A reduces the Gini the most, because progressive financing redistributes directly. Scenario B barely changes it, because it merely replaces existing transfers. Scenario C also lowers it markedly (from 0.28 to 0.18), but less than A: the consumption tax itself weighs relatively more on low incomes, and the basic income more than offsets this.
{% end %}

{{ ubi_rechner() }}


---

### Relative winners and losers

{% chart(spec="grundeinkommen_gewinner_verlierer", alt="Winners and losers by decile and scenario") %}
This shows which deciles gain or lose in net terms. The turning point varies depending on the financing model. The transfer paradox is most evident in scenario B: deciles 1–2, which depend heavily on existing social benefits, benefit less than the middle class — a counter-intuitive result that is decisive for political implementation.
{% end %}

---

## What experiments show

Our model is static. Experiments show how much people adjust how much they work:

- **OpenResearch, USA (2020–2023):** 1,000 low-income people (aged 21–40, Texas and Illinois) received $1,000 a month for three years; 2,000 people in the control group received $50. Result: labour-force participation fell by 3.9 percentage points and working time by 1 to 2 hours a week; partners reduced theirs by a similar amount. For every dollar received, the person's other income fell by about 16 cents (the household's by about 29 cents). The time gained went mostly into leisure; job quality and degrees did not change measurably, and well-being rose in the first year, then returned to control-group levels.
- **Finland (2017–2018):** 2,000 unemployed people received €560 a month without conditions. No measurable employment effect in the first year, about six more working days in the second; recipients reported better well-being and more financial security.
- **Switzerland (2016):** The popular initiative for an unconditional basic income failed with 76.9% No (Basel-Stadt: 36% Yes). According to the post-vote survey, the missing financing plan was a decisive factor. That is exactly why this lab calculates the financing first.

These results transfer only in part: both experiments were temporary, not universal and had no financing side. In the calculator above, the OpenResearch response (16 cents less other income per franc of basic income) can be switched on as a scenario.

---

## Limitations

- Aggregated decile data instead of microdata (individual data require an application to the FSO)
- No behavioural responses modelled (labour supply, consumption patterns, tax avoidance): static first-round effects The calculator can add the labour-supply response measured by the OpenResearch experiment as a scenario (a US estimate, transferable only in part).
- Distribution of transfers across deciles estimated (not taken directly from SILC microdata)
- Consumption ratios by decile based on values from the literature, not HBS detail
- Data basis 2018: the FSO table series used ends in 2018; more recent HBS and SILC waves have not yet been incorporated

---

## Data sources

- FSO: Kennzahlen zur Verteilung der Einkommen vor und nach staatlichen Transfers [key figures on income distribution before and after state transfers] (HBS, data basis 2018), decile shares of disposable equivalised income, https://www.bfs.admin.ch/bfsstatic/dam/assets/15344786/master
- FSIO social insurance statistics: transfer volumes AHV, IV, EL, ALV
- FSO SILC: published distribution shares of social transfers
- Vivalt, Rhodes, Bartik, Broockman, Krause, Miller: The Employment Effects of a Guaranteed Income, NBER Working Paper 32719 (July 2024, revised September 2025), https://www.nber.org/papers/w32719
- University of Helsinki / Kela: results of the Finnish basic income experiment 2017–2018, https://www.helsinki.fi/en/news/fair-society/basic-income-experiment-finland-yields-surprising-results
- Swissvotes: popular initiative for an unconditional basic income, 5 June 2016, https://swissvotes.ch/vote/601.00/kurzbeschreibung-de.pdf
