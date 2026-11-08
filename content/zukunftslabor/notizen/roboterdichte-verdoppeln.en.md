+++
title = "Doubling Robot Density: What 600 Instead of 294 Robots Would Mean"
description = "Switzerland has 294 industrial robots per 10,000 employees, fewer than Germany or Japan. Research shows that more robots raise productivity. Whether jobs are lost depends heavily on how the transition is organised."
slug = "roboterdichte-verdoppeln"
date = 2026-11-08
template = "notiz.html"

[extra]
code_path = "output/datenbriefings-2026-11/roboterdichte-verdoppeln"
data = "roboterdichte-verdoppeln.csv"
category = "datenbriefing"
evidence = "mittel"
tags = ["robotics", "industry", "productivity", "employment", "ifr"]
charts = ["roboter_dichte_vergleich.svg", "roboter_industrie_beschaeftigung.svg", "roboter_industrie_anteil.svg"]
pillar = "robotik"
+++

With 294 industrial robots per 10,000 employees, Switzerland was narrowly in the global top 10 in 2024, but well behind South Korea (1,220), Singapore (818), Germany (449) and Japan (446). Doubling to around 600 would put Switzerland ahead of Germany. Industry has employed a fairly stable 630,000 to 650,000 people since 2010, but its share of all employed persons is falling. Studies from comparable countries show clear productivity gains from robots; the effect on employment is mixed and depends on how the restructuring is handled.

<!-- more -->

---

## Methodology

Robot density comes from the World Robotics Report 2025 of the International Federation of Robotics (IFR): installed industrial robots per 10,000 employees in manufacturing, as of 2024. According to the IFR, the figures for China are based on revised labour market data and are not comparable with earlier editions; for this reason we show no time series of robot density. Employment comes from the Swiss Labour Force Survey (SLFS) of the FSO, sections B–E (industry, mining, energy and water supply). Up to 2009 the figures are second-quarter values, from 2010 annual averages; the break is visible in the chart. We take the effects of robots from peer-reviewed studies on other countries; there is no comparable study for Switzerland.

---

### Switzerland in comparison

{% chart(spec="roboter_dichte_vergleich", alt="Robot density in 2024 by country, with the target of a doubled Swiss density") %}
At 294, Switzerland is above the EU average (231) and the world average (132), but below countries with similarly high wage levels and strong export industries such as Germany, Japan, Sweden and Denmark. A target of around 600 (double the 2024 value) is ambitious but clearly below South Korea and Singapore. A high-wage country with a skills shortage, in particular, has a strong reason to automate production rather than relocate it.
{% end %}

---

### Industrial employment: stable in absolute terms

{% chart(spec="roboter_industrie_beschaeftigung", alt="Employed persons in industry and mining in Switzerland, 1991 to 2025") %}
Between 1991 and 2004, the number of employed persons in sections B–E fell from around 798,000 to 634,000. Since then it has fluctuated within a narrow band; in 2025 it was 633,600. Industry has therefore not disappeared; for two decades it has held its employment steady in absolute terms.
{% end %}

---

### Industrial share: slowly declining

{% chart(spec="roboter_industrie_anteil", alt="Share of industry and mining in all employed persons, 1991 to 2025") %}
Because total employment grew (2025: 4.89 million employed persons), industry's share fell from 21.2% (1991) to 13.0% (2025). More automation need not accelerate this trend: where production stays in the country or returns thanks to robots, jobs in planning, maintenance, quality assurance and supply also stay.
{% end %}

---

### What research shows about robots, productivity and work

- **Productivity:** in 17 countries from 1993 to 2007, increased robot use contributed around 0.37 percentage points to annual labour productivity growth, raised total factor productivity and lowered product prices. Total employment did not fall significantly, but the share of low-skilled labour did (Graetz and Michaels, 2018).
- **Germany:** job losses in industry due to robots were fully offset by new jobs in the service sector. Existing employees more often stayed with the same firm and took on new tasks; those mainly affected were young labour-market entrants who never entered industry in the first place (Dauth et al., 2021).
- **USA:** one additional robot per 1,000 workers reduced the employment-to-population ratio by 0.2 percentage points and wages by 0.42% in heavily affected regions (Acemoglu and Restrepo, 2020).

The differences between Germany and the USA show that the labour market adapts better where firms retrain their people and redeploy them internally. These findings cannot be transferred one-to-one to Switzerland, but they show what matters.

---

## What this means for policy

- **A measurable target:** double robot density to around 600 by 2035 and report it annually on the basis of IFR data: [Reindustrialization with Robotics](@/robotik.md).
- **Targeted support for SMEs:** large exporters automate on their own. The leverage lies with SMEs, for example through shared test centres, leasing models and advisory services.
- **Organise the transition within firms:** the German pattern — retraining within the same firm instead of dismissal — should be supported with training vouchers and apprenticeship occupations in robotics and maintenance: [Work Without Fear](@/uebergaenge.md).

---

## Sources

1. International Federation of Robotics (IFR): Robot density surges in Europe, Asia and Americas (World Robotics 2025), 8 April 2026. https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas
2. Federal Statistical Office (FSO), SLFS: Erwerbstätige nach Wirtschaftsabschnitten [employed persons by economic section] (T 03.02.01.20), 1991–2025. https://www.bfs.admin.ch/asset/de/36494612
3. Graetz, G. and Michaels, G. (2018): Robots at Work. Review of Economics and Statistics 100(5), 753–768. https://doi.org/10.1162/rest_a_00754
4. Dauth, W., Findeisen, S., Suedekum, J. and Woessner, N. (2021): The Adjustment of Labor Markets to Robots. Journal of the European Economic Association 19(6), 3104–3153. https://doi.org/10.1093/jeea/jvab012
5. Acemoglu, D. and Restrepo, P. (2020): Robots and Jobs: Evidence from US Labor Markets. Journal of Political Economy 128(6), 2188–2244. https://doi.org/10.1086/705716
