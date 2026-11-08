+++
title = "Research: Who Does It, Who Pays — and What Comes Back?"
description = "Switzerland leads the world in R&D per capita and patent efficiency. But the private sector dominates — and the question of the public return on public research remains open."
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
+++

Switzerland invests CHF 25.6 billion in R&D
(2023) and, with 182 EPO patents per billion, achieves the
highest patent efficiency in the world. But private-sector research outweighs public
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
The private sector dominates R&D expenditure, and its share is growing. This demonstrates innovative strength — but also a dependence: when a few large corporations finance most of the research, blind spots emerge on topics without a direct market incentive.
{% end %}

---

### Private vs. public

{% chart(spec="forschung_privat_oeffentlich_ratio", alt="Ratio of private to public R&D expenditure") %}
The ratio of private to public R&D expenditure in Switzerland is one of the highest in the world. On the one hand, this is a sign of a research-intensive private sector — on the other, it raises the question of whether public research carries enough weight of its own to cover basic research and public-interest topics.
{% end %}

---

### Patent efficiency in international comparison

{% chart(spec="forschung_patente_effizienz", alt="Patent applications per billion of R&D expenditure in international comparison") %}
Switzerland achieves the highest patent efficiency in the world: more EPO patents per billion invested than any other country. This points to an effective chain from research to usable knowledge — a locational advantage that needs to be maintained.
{% end %}

---

### Sector concentration

{% chart(spec="forschung_konzentration", alt="Concentration of R&D expenditure in a few sectors") %}
Two sectors — pharma and ICT — account for the bulk of private R&D. This makes the research landscape vulnerable: the relocation of a single company could shift the overall statistics markedly. Diversifying the research base is a strategic question.
{% end %}

---

## Limitations

- FSO data collected every 2 years (no annual values)
- Patent efficiency: EPO patents as a proxy (not all innovations result in patents)
- Private R&D expenditure partly estimated (trade secrets)
- Sector classification follows FSO logic (Frascati Manual)

---

## Data sources

- FSO: Forschung und Entwicklung — Intramuros-Aufwendungen [research and development — intramural expenditure] (2000–2023)
- EPO: Annual Report 2023 — patent applications by country of origin
- OECD: Main Science and Technology Indicators (GERD)
