+++
title = "Rent Burden: How Hard Do Rents Hit the Bottom Quintile in Each Canton?"
description = "The bottom quintile spends 40% on rent — and, measured against cantonal rents, is already above the 30% threshold in every canton."
slug = "mietbelastung-kantonale-prognose"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "04_wohnen_ungleichheit"
pillar = "stadte-wohnen"
category = "datenbriefing"
evidence = "mittel"
tags = ["housing", "rents", "cantons", "inequality"]
charts = ["wohnen_mietbelastung_quintile.svg", "wohnen_mieten_kantone.svg", "wohnen_mietpreiswachstum_kantone.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Rent burden by quintile and cantonal rents up to 2023 checked; SILC 2024 and the structural survey 2024 are available and have not yet been incorporated."

[[extra.changelog]]
date = 2026-11-08
text = "Statements on quintiles and cantons aligned with the data, and the uninformative threshold projection removed because the bottom quintile is already above 30% in every canton."
+++

The bottom quintile spends 40% on rent. Measured against cantonal rents,
it was already above the 30% threshold in all 26 cantons in 2023 — from 33% in Jura to 65% in Zug.


<!-- more -->

---

## Methodology

FSO rent statistics (2010–2023, 3-room flats by canton) and
FSO SILC rent burden ratios. CAGR from the 2010/2023 ratio.

---

### Rent burden by income quintile

{% chart(spec="wohnen_mietbelastung_quintile", alt="Rent burden ratio by income quintile") %}
The bottom quintile spends around 40% of disposable income on rent — far above the 30% threshold that is considered critical. The upper quintiles are at 12–18%. The rent burden acts like a regressive tax: those who earn less pay proportionally more.
{% end %}

---

### Rents by canton

{% chart(spec="wohnen_mieten_kantone", alt="Rents by canton for 3-room flats") %}
The differences between cantons are considerable: Zug, Zurich and Schwyz are at the top, rural cantons well below. The chart shows the price range of an average 3-room flat — the most common type of dwelling in Switzerland.
{% end %}

---

### Rent growth (CAGR)

{% chart(spec="wohnen_mietpreiswachstum_kantone", alt="Annual rent growth by canton") %}
Annual rent growth (CAGR) varies widely between cantons. Some cantons are growing twice as fast as others — and with real wages stagnating at the same time, a widening gap emerges. The pace of growth determines how quickly the burden keeps rising if incomes do not keep up.
{% end %}

---

## Limitations

- CAGR describes the 2010–2023 trend, not a forecast
- Q1 income not differentiated by canton
- Existing rents (rents for new tenancies are often higher)

---

## Data sources

- FSO Structural Survey: rents by canton and number of rooms
- FSO SILC 2022: rent burden ratio by quintile
