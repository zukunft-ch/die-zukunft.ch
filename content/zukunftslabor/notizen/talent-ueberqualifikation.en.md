+++
title = "Talent & Migration: Are Qualifications Being Used — or Wasted?"
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
+++

In 2024 Switzerland recorded net migration of +82,792 people.
Yet qualifications are systematically wasted: 36% of third-country nationals
work below their level (vs. 13% of Swiss nationals). The estimated loss of value added
amounts to ~CHF 3.6 billion per year.


<!-- more -->

---

## Methodology

Population data: FSO Population and Households Statistics (2010–2024).
Migration data: FSO migration statistics (1991–2024).
Overqualification: FSO Structural Survey / SLFS (self-assessment + formal qualification),
supplemented by the OECD Indicators of Talent Attractiveness 2023.

---

### Foreign population by permit type

{% chart(spec="migration_herkunft_trend", alt="Foreign population by permit type over time") %}
The composition of the foreign population has shifted: EU/EFTA settled residents dominate, while short-term stays fluctuate with the economic cycle. The chart shows the development of the resident stock — steady growth that reflects the Swiss economy's demand for labour.
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
Certain sectors systematically "waste" talent: hospitality, cleaning and retail employ a particularly large number of overqualified people. This is a loss of value added in two senses — for those affected (lower wages) and for the economy (unused skills).
{% end %}

---

## Limitations

- Overqualification is based on self-assessment and formal recognition of diplomas
- Not all foreign diplomas are automatically equivalent (language barriers, protected professions)
- The estimate of economic loss is an order of magnitude (the wage gap varies widely by sector)
- SLFS data are sample data with confidence intervals

---

## Data sources

- FSO: Population and Households Statistics (STATPOP)
- FSO: migration statistics (international migration)
- FSO: Structural Survey — employment by qualification and nationality
- OECD: Indicators of Talent Attractiveness 2023
