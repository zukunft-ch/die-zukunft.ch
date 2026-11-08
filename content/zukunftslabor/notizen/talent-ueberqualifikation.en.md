+++
title = "Talent & Migration: Are Qualifications Being Used — or Left Unused?"
description = "36% of third-country nationals work below their level of qualification. This is not an integration failure — it is a loss of value added."
slug = "talent-ueberqualifikation"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "10_talent_migration"
pillar = "talent-integration"
category = "datenbriefing"
evidence = "mittel"
tags = ["migration", "talent", "overqualification", "labour market", "integration"]
charts = ["migration_herkunft_trend.svg", "migration_nettowanderung.svg", "migration_ueberqualifikation.svg", "migration_ueberqualifikation_sektoren.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "Population and migration data up to 2024 checked; the overqualification values by sector and the loss estimate are based on assumptions and have not been updated with current SLFS data."

[[extra.changelog]]
date = 2026-11-08
text = "Statements on the foreign population aligned with the data, the judgemental wording \"wasted\" replaced with \"unused\" and the CHF 3.6 billion loss estimate labelled as our own rough estimate with its method."
+++

In 2024 Switzerland recorded net migration of +82,792 people.
Yet many qualifications remain unused: 36% of third-country nationals
work below their level (vs. 13% of Swiss nationals). According to our own rough estimate, this
means around CHF 3.6 billion in forgone wages per year.


<!-- more -->

---

## Methodology

Population data: FSO Population and Households Statistics (2010–2024).
Migration data: FSO migration statistics (1991–2024).
Overqualification: FSO Structural Survey / SLFS (self-assessment + formal qualification),
supplemented by the OECD Indicators of Talent Attractiveness 2023.

The loss estimate is our own rough estimate: around 200,000 overqualified
immigrant workers × an assumed wage gap of around CHF 18,000 per year
≈ CHF 3.6 billion. Both values are assumptions, not published statistics;
the figure indicates an order of magnitude.

---

### Foreign population by permit type

{% chart(spec="migration_herkunft_trend", alt="Foreign population by permit type over time") %}
The composition of the foreign population has shifted: settled residents (C permits) remain the majority, but since 2021 the number of residence-permit holders (B) in particular has grown — from 759,769 to 915,566 (2024). The chart shows the development of the resident stock — steady growth that reflects the Swiss economy's demand for labour.
{% end %}

---

### Net migration by origin

{% chart(spec="migration_nettowanderung", alt="Net migration by region of origin") %}
Net migration shows who arrives and who leaves. EU/EFTA citizens account for the bulk of immigration — driven by the free movement of persons. Third-country nationals arrive in smaller numbers but face the greatest integration hurdles in the recognition of professional qualifications.
{% end %}

---

### Overqualification rate by origin group

{% chart(spec="migration_ueberqualifikation", alt="Overqualification rate by origin group") %}
36% of third-country nationals work below their level of qualification — almost three times the rate among Swiss nationals (13%). This is not an integration failure on the part of those affected but a structural problem: recognition of diplomas, language barriers and protected-profession rules prevent people from being employed in line with their qualifications.
{% end %}

---

### Sectors with a high share of overqualification

{% chart(spec="migration_ueberqualifikation_sektoren", alt="Industries with the highest share of overqualified employees") %}
In certain sectors a particularly large amount of talent remains unused: hospitality, cleaning and retail employ a particularly large number of overqualified people. This is a loss of value added in two senses — for those affected (lower wages) and for the economy (unused skills).
{% end %}

---

## Limitations

- Overqualification is based on self-assessment and formal recognition of diplomas
- Not all foreign diplomas are automatically equivalent (language barriers, protected professions)
- The estimate of economic loss is our own rough estimate with assumed values (number of people affected; the wage gap varies widely by sector)
- SLFS data are sample data with confidence intervals

---

## Data sources

- FSO: Population and Households Statistics (STATPOP)
- FSO: migration statistics (international migration)
- FSO: Structural Survey — employment by qualification and nationality
- OECD: Indicators of Talent Attractiveness 2023
