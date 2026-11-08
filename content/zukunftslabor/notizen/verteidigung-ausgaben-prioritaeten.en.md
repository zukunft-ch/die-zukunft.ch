+++
title = "Defence: What Does the Swiss Defence Franc Buy?"
description = "According to SIPRI, Switzerland spent 0.76% of GDP on defence in 2025, less than any of the European countries compared. The question is not only how much more, but what for."
slug = "verteidigung-ausgaben-prioritaeten"
date = 2026-02-12
template = "notiz.html"

[extra]
notebook = "12_neutralitaet_verteidigung"
pillar = "neutralitaet-frieden"
category = "datenbriefing"
evidence = "mittel"
tags = ["defence", "budget", "armed forces", "security", "militia"]
charts = ["verteidigung_ch_trend.svg", "verteidigung_vergleich.svg", "verteidigung_pro_soldat.svg"]

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "Updated with SIPRI data for 2025 (April 2026) and the NATO decision taken in The Hague; the cost-per-soldier comparison is still based on IISS 2023/24."

[[extra.changelog]]
date = 2026-11-08
text = "Updated with 2025 SIPRI data, the NATO benchmark of 3.5% + 1.5% added and the unverifiable section on budget versus population priorities, including the 58% personnel share, removed."
+++

According to SIPRI, Switzerland spent 0.76% of GDP on defence in 2025
(USD 7.6 billion), after 0.70% in 2024. That puts it below all the
European countries compared. The militia army with around 140,000 members
keeps per-capita costs low, so the question is not only "how much more"
but "what for".


<!-- more -->

---

## Methodology

Defence expenditure as a share of GDP: SIPRI Military Expenditure Database
(April 2026 edition, 2000–2025, 7 countries). Cost per soldier: IISS
Military Balance 2024 (2023/24 data).

---

### Swiss spending trend

{% chart(spec="verteidigung_ch_trend", alt="Swiss defence expenditure as a share of GDP over time") %}
Swiss defence expenditure fell from around 1% of GDP (2000) to 0.64% (2014) and has since risen to 0.76% (2025), still well below 1% of GDP. In real terms it grew by 9.4% in 2025 compared with the previous year (SIPRI). The current political pressure to increase it contrasts with a decades-long trend of cuts — the question is not only "how much more" but "for what".
{% end %}

---

### International comparison

{% chart(spec="verteidigung_vergleich", alt="Defence expenditure as a share of GDP in international comparison") %}
In international comparison, Switzerland is at the lower end: in 2025 Austria spent 1.1%, France 2.0%, Germany 2.3%, Sweden 2.5% and Finland 2.6% of GDP. At the summit in The Hague (June 2025), NATO members committed to spending 5% of GDP annually by 2035: at least 3.5% on core defence requirements and up to 1.5% on defence- and security-related spending such as infrastructure protection and resilience. This target does not apply to neutral Switzerland, and without alliance obligations the direct comparison is relative. The capability gaps, however, do not become any smaller.
{% end %}

---

### Cost per active soldier

{% chart(spec="verteidigung_pro_soldat", alt="Cost per active soldier by country") %}
The militia system leads to a particular cost structure: Switzerland has around 140,000 members of the armed forces, most of whom serve in the militia. Per-capita costs are therefore much lower than in professional armies. The figures are not directly comparable, because militia members do not fill full-time positions.
{% end %}

---

## Limitations

- Militia troop strength ≠ full-time equivalents (cost per member of the armed forces not directly comparable)
- Cost-per-soldier comparison based on IISS 2023/24 data, not updated
- SIPRI data: definitions of defence expenditure differ between countries; 2025 GDP shares based on IMF estimates

---

## Data sources

- SIPRI Military Expenditure Database, April 2026 edition: https://www.sipri.org/databases/milex (data table: https://www.sipri.org/sites/default/files/SIPRI-Milex-data-1949-2025.xlsx)
- SIPRI Fact Sheet "Trends in World Military Expenditure, 2025" (April 2026): https://www.sipri.org/sites/default/files/2026-04/2604_milex_2025.pdf
- NATO: The Hague Summit, 24–25 June 2025 (5% of GDP by 2035, of which 3.5% core defence and 1.5% defence- and security-related spending), https://www.nato.int/en/news-and-events/articles/news/2025/06/27/nato-concludes-historic-summit-in-the-hague
- IISS: Military Balance 2024 — troop strength and budgets
