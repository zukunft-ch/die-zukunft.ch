+++
title = "The Digital Readiness Gap: The Population Is Online — the State Is Not"
description = "90% of Swiss residents use the internet, but e-government and open data lag behind the EU average. The problem is not technological — it is institutional."
slug = "digitale-souveraenitaet-luecke"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "02_digitale_souveraenitaet"
pillar = "digitale-souveraenitaet"
category = "datenbriefing"
evidence = "stark"
tags = ["digital sovereignty", "e-government", "open data", "e-id", "comparison"]
charts = ["digital_internetnutzung_alter.svg", "digital_egov_trend.svg", "digital_luecke_alter.svg", "digital_eid_motive.svg", "digital_opendata_vergleich.svg"]
+++

90% of the Swiss population use the internet regularly — but
e-government use, online availability and open-data maturity lag
behind the EU average. The readiness gap between the digital
population and the digital state amounts to 12.1 percentage points.
The 2021 e-ID referendum shows that the solution must be state-run
and privacy-friendly.


<!-- more -->

---

## Methodology

The analysis combines two FSO Omnibus ICT datasets (2014–2025):
internet use by age group (e-mail as a proxy) and
e-government use by type of service. The "readiness gap" is the
difference between general internet use and e-government use across
the whole population. Supplemented by the EU Open Data Maturity ranking and
VOX/Sotomo data on the 2021 e-ID referendum.

---

### Internet use by age group

{% chart(spec="digital_internetnutzung_alter", alt="Internet use by age group in Switzerland") %}
Almost all age groups under 65 exceed 90% internet use. Even a majority of 65- to 74-year-olds are now online. The problem is not the population's digital skills — it is the missing digital infrastructure on the state's side.
{% end %}

---

### E-government use

{% chart(spec="digital_egov_trend", alt="E-government use over time") %}
E-government use has stagnated for years. Despite rising internet penetration, the share of the population using public online services has barely grown. This points to a supply problem: what is missing is not demand but usable digital services.
{% end %}

---

### Readiness gap

{% chart(spec="digital_luecke_alter", alt="Digital readiness gap between the population and the state") %}
The gap between general internet use and e-government use is around 12 percentage points. This readiness gap is not a technological but an institutional problem: the population is ready — the state is not.
{% end %}

---

### E-ID referendum: a question of trust

{% chart(spec="digital_eid_motive", alt="Reasons for rejection in the 2021 e-ID referendum") %}
The 2021 no to the e-ID was not a rejection of digital identities but of the private-sector model. Data protection concerns and a lack of trust in private providers were the main motives. A state-run, privacy-friendly solution continues to enjoy broad support.
{% end %}

---

### Open-data maturity

{% chart(spec="digital_opendata_vergleich", alt="Open-data maturity: Switzerland vs. EU average") %}
In the EU Open Data Maturity ranking, Switzerland is below average — both in the availability and in the usability of open government data. This hampers innovation, transparency and evidence-based policymaking.
{% end %}

---

## Limitations

- E-mail use as a proxy for internet use (FSO definition)
- E-government data not available by age group — gap can only be calculated at total level
- Open-data score based on EU methodology (Switzerland as an observer state)
- E-ID motives: VOX post-vote survey with a limited sample

---

## Data sources

- FSO Omnibus ICT 2014–2025: internet use, e-government use
- EU Open Data Maturity Report 2023 (data.europa.eu)
- VOX/Sotomo: Nachbefragung E-ID-Referendum [post-vote survey on the e-ID referendum], 7 March 2021
