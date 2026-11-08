+++
title = "Research: Who Does It, Who Pays — and What Comes Back?"
description = "Switzerland invests heavily in R&D and files the most European patent applications per capita. But the private sector dominates — and the question of the public return on public research remains open."
slug = "forschung-wer-forscht-wer-zahlt"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "05_forschung_innovation"
pillar = "research-innovation"
category = "datenbriefing"
evidence = "stark"
tags = ["research", "innovation", "patents", "oecd", "r-and-d"]
charts = ["forschung_sektoren_zeitreihe.svg", "forschung_privat_oeffentlich_ratio.svg", "forschung_patente_effizienz.svg", "forschung_konzentration.svg"]

[extra.review]
checked = 2026-11-08
status = "teilweise-veraltet"
note = "FSO R&D data for 2023 checked; the patent indicators are based on the EPO Annual Report 2023, the EPO figures for 2025 (Technology Dashboard 2025) have not yet been incorporated."

[[extra.changelog]]
date = 2026-11-08
text = "Statements on the private/public ratio and sector concentration aligned with the data, and unsupported superlatives removed."
+++

Switzerland invests CHF 25.6 billion in R&D
(2023) and, with 182 EPO patents per billion, achieves the
highest patent efficiency among the countries compared. But private-sector research outweighs public
research by a factor of 2.37 — and the top 2 sectors
account for 45.4% of spending.


<!-- more -->

---

## Methodology

The basis is the FSO research statistics (intramural R&D expenditure by sector,
2000–2023) and EPO patent data (Annual Report 2023). The
private sector comprises pharma, metallurgy, ICT, instruments and other
industrial sectors. Public: universities, the ETH Domain, federal offices.

---

### R&D expenditure over time

{% chart(spec="forschung_sektoren_zeitreihe", alt="R&D expenditure by sector over time") %}
The private sector dominates R&D expenditure, but its lead has narrowed since 2000 (private-to-public ratio: 3.1 → 2.4) and has only been growing slightly again since 2017. This demonstrates innovative strength — but also a dependence: when a few large corporations finance most of the research, blind spots emerge on topics without a direct market incentive.
{% end %}

---

### Private vs. public

{% chart(spec="forschung_privat_oeffentlich_ratio", alt="Ratio of private to public R&D expenditure") %}
In Switzerland the private sector spends considerably more on R&D than the public sector (2023: 2.4 to 1). On the one hand, this is a sign of a research-intensive private sector — on the other, it raises the question of whether public research carries enough weight of its own to cover basic research and public-interest topics.
{% end %}

---

### Patent efficiency in international comparison

{% chart(spec="forschung_patente_effizienz", alt="Patent applications per billion of R&D expenditure in international comparison") %}
Among the countries compared, Switzerland achieves the highest patent efficiency: more EPO patent applications per billion invested than Sweden, the Netherlands, Germany, Austria, France, the USA and Japan. According to the EPO (Technology Dashboard 2025), Switzerland also files the most European patent applications per capita among countries with more than one million inhabitants. This points to an effective chain from research to usable knowledge — a locational advantage that needs to be maintained.
{% end %}

---

### Sector concentration

{% chart(spec="forschung_konzentration", alt="Concentration of R&D expenditure in a few sectors") %}
One sector — chemicals/pharma — accounts for around a third of private R&D, and together with ICT for almost half. This makes the research landscape vulnerable: the relocation of a single company could shift the overall statistics markedly. Diversifying the research base is a strategic question.
{% end %}

---

## Limitations

- FSO data collected every 2 years (no annual values)
- Patent efficiency: EPO patents as a proxy (not all innovations result in patents); selection of eight countries
- Patent data as of 2023; the EPO figures for 2025 (Technology Dashboard 2025, successor to the Patent Index) have not yet been incorporated
- Private R&D expenditure partly estimated (trade secrets)
- Sector classification follows FSO logic (Frascati Manual)

---

## Data sources

- FSO: Forschung und Entwicklung — Intramuros-Aufwendungen [research and development — intramural expenditure] (2000–2023)
- EPO: Annual Report 2023 — patent applications by country of origin
- OECD: Main Science and Technology Indicators (GERD)
- EPO: Technology Dashboard 2025 (patent applications per capita), https://www.epo.org/en/about-us/statistics/technology-dashboard-2025
