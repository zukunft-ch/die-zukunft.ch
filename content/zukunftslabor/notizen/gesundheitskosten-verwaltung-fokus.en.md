+++
title = "Health Costs: Where Does the Money Go — and Where Does It Drain Away?"
description = "Switzerland spends 5.2% of health expenditure on administration — well above the OECD average. The excess costs ~CHF 10 per person per month."
slug = "gesundheitskosten-verwaltung-fokus"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "08_life_science_gesundheit"
pillar = "life-science"
category = "datenbriefing"
evidence = "stark"
tags = ["health", "costs", "administration", "oecd", "efficiency"]
charts = ["gesundheit_ausgaben_kategorien.svg", "gesundheit_verwaltungsanteil_trend.svg", "gesundheit_verwaltung_international.svg", "gesundheit_verwaltungsueberschuss.svg"]
+++

Switzerland spends CHF 82,472 million on health
(2019), of which 4.03% goes to administration.
In the OECD comparison, Switzerland's 5.2% is well above the average
(3.3%) — the excess costs ~CHF 10 per person per month.


<!-- more -->

---

## Methodology

FSO health expenditure statistics (1995–2019) according to the
System of Health Accounts (SHA). Categories: outpatient/inpatient curative care,
long-term care, medical goods, administration, prevention. International comparison
based on OECD Health at a Glance 2023.

---

### Expenditure by category over time

{% chart(spec="gesundheit_ausgaben_kategorien", alt="Health expenditure by category over time") %}
Health expenditure is rising continuously — but not evenly. While outpatient and inpatient care account for the lion's share, the administrative share is growing disproportionately. This raises the question of how much of the rise in premiums goes into treatment and how much into bureaucracy.
{% end %}

---

### Administrative share over time

{% chart(spec="gesundheit_verwaltungsanteil_trend", alt="Administrative share of health expenditure over time") %}
The administrative share is rising slowly but steadily. This is no coincidence: the fragmented insurance landscape with over 50 health insurers generates structural extra costs — accounting, marketing, risk selection — that would not arise in a single-payer system.
{% end %}

---

### International comparison

{% chart(spec="gesundheit_verwaltung_international", alt="Administrative share in international comparison") %}
Switzerland's administrative costs are well above the OECD average. Countries with more centralised systems (e.g. the Scandinavian states) achieve lower administrative shares with comparable or better quality of care. The comparison shows that efficiency gains are possible.
{% end %}

---

### Administrative excess

{% chart(spec="gesundheit_verwaltungsueberschuss", alt="Administrative excess over the OECD average in CHF per person") %}
The excess over the OECD average can be expressed in francs per person per month. This money does not go into treatment, medicines or care — it finances administrative structures whose simplification would directly lower premiums.
{% end %}

---

## Limitations

- SHA harmonisation facilitates comparisons, but differences between systems remain
- Administrative costs also include quality assurance and regulatory effort
- Single-payer vs. competitive model produce structurally different administrative costs
- OECD data partly from different years (2021–2023)

---

## Data sources

- FSO: Kosten und Finanzierung des Gesundheitswesens [costs and financing of the health system] (1995–2019)
- OECD: Health at a Glance 2023 — Health Expenditure and Financing
- WHO: Global Health Expenditure Database
