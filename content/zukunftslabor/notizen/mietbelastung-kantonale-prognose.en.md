+++
title = "Rent Burden: When Does It Become Critical in Which Canton?"
description = "The bottom quintile spends 40% on rent. On current trends, more cantons will cross the 30% threshold."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "04_wohnen_ungleichheit"
pillar = "stadte-wohnen"
category = "datenbriefing"
evidence = "stark"
tags = ["housing", "rents", "cantons", "inequality", "forecast"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg", "wohnen_schwelle_prognose.svg"]
+++

The bottom quintile spends 40% on rent. With current rent growth and
1% income growth, several cantons will cross the 30% threshold by 2035.


<!-- more -->

---

## Methodology

FSO rent statistics (2010–2023, 3-room flats by canton) and
FSO SILC rent burden ratios. CAGR from the 2010/2023 ratio.
Threshold projection: rent×(1+CAGR)^t / income×(1+1%)^t = 30%.

---

### Rent burden by income quintile

{% chart(spec="wohnen_mietbelastung_quintile", alt="Rent burden ratio by income quintile") %}
The bottom quintile spends around 40% of disposable income on rent — far above the 30% threshold that is considered critical. The upper quintiles are at 15–20%. The rent burden acts like a regressive tax: those who earn less pay proportionally more.
{% end %}

---

### Rents by canton

{% chart(spec="wohnen_mieten_kantone", alt="Rents by canton for 3-room flats") %}
The differences between cantons are considerable: Zurich, Geneva and Zug are at the top, rural cantons well below. The chart shows the price range of an average 3-room flat — the most common type of dwelling in Switzerland.
{% end %}

---

### Rent growth (CAGR)

{% chart(spec="wohnen_mietpreiswachstum_kantone", alt="Annual rent growth by canton") %}
Annual rent growth (CAGR) varies widely between cantons. Some cantons are growing twice as fast as others — and with real wages stagnating at the same time, a widening gap emerges. The pace of growth determines when the burden threshold is crossed.
{% end %}

---

### Threshold projection

{% chart(spec="wohnen_schwelle_prognose", alt="Projection: when cantons cross the 30% rent burden threshold") %}
Extrapolating current trends and assuming income growth of 1% per year, several cantons will cross the 30% threshold by 2035. The projection is conservative — rents for new tenancies are often well above existing rents.
{% end %}

---

## Limitations

- CAGR extrapolates the past trend
- Q1 income not differentiated by canton
- Existing rents (rents for new tenancies are often higher)

---

## Data sources

- FSO Structural Survey: rents by canton and number of rooms
- FSO SILC 2022: rent burden ratio by quintile
