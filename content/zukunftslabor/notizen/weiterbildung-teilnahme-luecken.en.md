+++
title = "Continuing Education: Who Takes Part — and Who Does Not?"
description = "The gap in continuing education is huge: highly qualified people take part 2.6× more often than those with low qualifications. The most exposed industries in particular invest too little."
slug = "weiterbildung-teilnahme-luecken"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "07_uebergaenge_weiterbildung"
pillar = "uebergaenge"
category = "datenbriefing"
evidence = "mittel"
tags = ["continuing education", "education", "automation", "labour market"]
charts = ["weiterbildung_bildungsniveau.svg", "weiterbildung_altersgruppe.svg", "weiterbildung_zeitreihe.svg", "weiterbildung_automatisierung_kreuz.svg"]
+++

Participation in continuing education is stagnating at 60% — and the gap between
highly and low-qualified people (79% vs. 30%) is enormous. Industries with
a high automation risk often have below-average participation in continuing education.


<!-- more -->

---

## Methodology

Continuing education data from the FSO Microcensus on Education and Training
(2011, 2016, 2021). Participation in non-formal education (courses,
seminars, in-company training). Employment data from the FSO SLFS
(2024). Automation risk: IMF AI Preparedness Index 2024.

---

### By level of education

{% chart(spec="weiterbildung_bildungsniveau", alt="Participation in continuing education by level of education") %}
Highly qualified people take part in continuing education 2.6 times more often than those with low qualifications. This gap is the central problem: those who are already well educated keep investing — those who need it most are left behind. Without targeted offerings for people with low qualifications, continuing education widens inequality instead of reducing it.
{% end %}

---

### By age group

{% chart(spec="weiterbildung_altersgruppe", alt="Participation in continuing education by age group") %}
Participation drops markedly from the age of 45. Yet continuing education is crucial precisely for the 45–64 age group: they still have to hold their own for 15–20 years in a changing labour market. The decline is less an individual problem than a failure of the in-company and institutional provision.
{% end %}

---

### Time series

{% chart(spec="weiterbildung_zeitreihe", alt="Participation in continuing education, 2011–2021") %}
A decade of near standstill: the overall rate has hovered around 60% since 2011. Despite the debate on digitalisation, fears of automation and political rhetoric, actual participation in continuing education has changed little.
{% end %}

---

### Cross-analysis with automation risk

{% chart(spec="weiterbildung_automatisierung_kreuz", alt="Continuing education rate vs. automation risk by industry") %}
The most critical finding: industries with the highest automation risk often have the lowest continuing education rate. The most exposed sectors invest the least in the adaptability of their employees — a structural risk that calls for political intervention.
{% end %}

---

## Limitations

- The FSO Microcensus is conducted only every 5 years
- Industry-specific continuing education rates partly estimated
- Quality of continuing education not recorded (participation only)
- Correlation ≠ causation

---

## Data sources

- FSO: Mikrozensus Aus- und Weiterbildung [Microcensus on Education and Training] 2011, 2016, 2021
- FSO: SLFS 2024 — employed persons by economic section
- IMF: AI Preparedness Index 2024 (Cazzaniga et al.)
