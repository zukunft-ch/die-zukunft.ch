+++
title = "Artificial General Intelligence and the Labour Market: Two Scenarios for Switzerland"
description = "How exposed Swiss occupations are to generative AI, how quickly the effects could arrive, and what transition policy a slow or a fast trajectory would require. Scenarios, not forecasts."
slug = "agi-szenarien-arbeitsmarkt"
date = 2026-11-08
template = "notiz.html"

[extra]
code_path = "output/datenbriefings-2026-11/agi-szenarien-arbeitsmarkt"
data = "agi-szenarien-arbeitsmarkt.csv"
category = "datenbriefing"
evidence = "mittel"
tags = ["ai", "agi", "labour market", "occupations", "scenarios", "transitions"]
charts = ["agi_berufe_2025.svg", "agi_berufe_veraenderung.svg", "agi_zeithorizonte.svg"]
pillar = "uebergaenge"

[extra.review]
checked = 2026-11-08
status = "aktuell"
note = "First published on 8 November 2026; figures and sources reflect the state at publication."

[[extra.changelog]]
date = 2026-11-08
text = "First publication."
+++

According to the ILO, around a third of workers in high-income countries are employed in occupations exposed to generative AI; the IMF puts the figure for advanced economies at around 60%, of which roughly half is more likely to be complemented than replaced. In 2025 Switzerland had around 4.89 million employed persons; the most exposed group, clerical support workers, has already been shrinking for years. Nobody knows how fast this will accelerate: AI researchers put a 50% probability on machines performing every task better than humans by 2047. We therefore describe two scenarios and what each requires of policy.

<!-- more -->

---

## Methodology

Employment by major occupational group (CH-ISCO-19) comes from the Swiss Labour Force Survey (SLFS) of the Federal Statistical Office (FSO), annual averages for 2010 and 2025. For exposure we rely on two studies: the ILO's refined index (Working Paper 140, 2025), which scores around 30,000 tasks, and the IMF Staff Discussion Note (2024), which additionally distinguishes whether AI is more likely to complement or to replace an activity. Neither study provides Swiss figures. Applying their averages to Switzerland is a **rough estimate**; Switzerland has an above-average share of professional and technical occupations. Exposure does not mean job loss: it measures which share of tasks could be automated or supported with today's technology. The two scenarios are planning assumptions, not forecasts.

---

### Where Switzerland works

{% chart(spec="agi_berufe_2025", alt="Employed persons in Switzerland by major occupational group, 2025") %}
The largest group is professionals, with around 1.3 million employed persons, followed by technicians and associate professionals (844,000). Clerical support workers number 571,000. According to the ILO, clerical occupations have the highest exposure: 8 of the 13 occupations in the highest tier (gradient 4) are clerical tasks such as accounting, payroll and data entry, alongside financial analysis, credit processing, call-centre sales, and web and multimedia development, among others. Roughly transferred, the high-income-country average (34% exposed, 17.3% in the two highest tiers) would mean around 1.7 million exposed jobs in Switzerland, of which around 850,000 are highly exposed (estimate).
{% end %}

---

### The shift is already under way

{% chart(spec="agi_berufe_veraenderung", alt="Change in employed persons by major occupational group, 2010 to 2025") %}
Between 2010 and 2025 the number of employed persons grew by 678,000. Over the same period clerical support workers lost 54,000 jobs and craft and related trades 118,000, while professionals gained 340,000 and technicians and associate professionals 245,000. So far the Swiss labour market has absorbed such shifts over 15 years. The decisive question is whether the next restructuring will allow as much time.
{% end %}

---

### How fast? The experts disagree

{% chart(spec="agi_zeithorizonte", alt="Expected years for artificial general intelligence and full automation according to a survey of AI researchers") %}
In the largest survey of 2,778 AI researchers (autumn 2023), the aggregate probability that machines will perform every task better than humans without human help is 10% by 2027 and 50% by 2047, 13 years earlier than in the 2022 survey. The same researchers expect full automation of all occupations much later: 50% only by 2116. The range is enormous. At the same time, the ILO urges caution: after two years of practice it lowered its automation scores for clerical tasks, because many activities require more human work than initially assumed.
{% end %}

---

### Two scenarios

**Scenario A: gradual diffusion.** AI capabilities keep improving, but adoption in firms takes years. The restructuring proceeds much as in 2010–2025: exposed groups shrink slowly, as clerical support workers have since 2010 at a little over half a percent per year, and new activities emerge alongside. Following the IMF's logic, just under half of exposed jobs (27% of all jobs in advanced economies) are more likely to be complemented than replaced by AI.

**Scenario B: rapid breakthrough.** Systems reach broad cognitive capability within about ten years, i.e. the early edge of the expert survey. The restructuring then hits the group with high exposure and low complementarity (33% of jobs in advanced economies according to the IMF, roughly 1.6 million in Switzerland when transferred, estimate) within a few years rather than decades. The problem is then less the number than the pace.

---

## What this means for policy

- **For scenario A:** continuously adapt in-company training and apprenticeship occupations, with a focus on clerical and administrative occupations; publish exposure and employment by occupation annually: [Work Without Fear](@/uebergaenge.en.md).
- **For scenario B:** prepared instruments that can be scaled up quickly: wage insurance for career changes, a tested basic income model as a foundation and a dividend from productivity gains: [Basic Income](@/grundeinkommen.en.md).
- **For both:** we plan for the early case without prophesying it. Leading indicators such as the quarterly SLFS data by occupation should determine when the scenario B instruments are triggered.

---

## Sources

1. Federal Statistical Office (FSO), SLFS: Berufshauptgruppen CH-ISCO-19 der Erwerbstätigen nach Nationalität [major occupational groups of employed persons by nationality] (T 03.02.01.21), 2010–2025. https://www.bfs.admin.ch/asset/de/36710074
2. Gmyrek, P. et al. (2025): Generative AI and Jobs: A Refined Global Index of Occupational Exposure. ILO Working Paper 140. https://www.ilo.org/sites/default/files/2025-05/WP140_web.pdf
3. Cazzaniga, M. et al. (2024): Gen-AI: Artificial Intelligence and the Future of Work. IMF Staff Discussion Note SDN/2024/001. https://www.imf.org/en/Publications/staff-discussion-notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379
4. Grace, K. et al. (2025): Thousands of AI Authors on the Future of AI. Journal of Artificial Intelligence Research 84. https://jair.org/index.php/jair/article/view/19087
