+++
title = "Grundeinkommen"
description = "Das Grundeinkommen als Automatisierungsdividende: Stabilität, Freiheit, Vereinfachung."
template = "grundeinkommen.html"

[extra]
show_cta = true
cta_text = "Überzeugt? Setz dich mit uns für ein Grundeinkommen ein."
faq_title = "Häufige Fragen"
faq = [
  { q = "Ist das nicht einfach 'Geld für alle'?", a = "Nein. Das Grundeinkommen ersetzt einen grossen Teil der heutigen Sozialversicherungsbürokratie durch eine einfache, universelle Grundsicherung. Es ist eine Vereinfachung des Systems — kein Geschenk." },
  { q = "Wie wird es finanziert?", a = "Durch eine Kombination aus Automatisierungssteuern, Vereinfachungsgewinnen im Sozialwesen und Umschichtung bestehender Transfers. Konkrete Modelle werden mit Ökonomen und Sozialwissenschaftlern erarbeitet." },
  { q = "Hören die Leute dann auf zu arbeiten?", a = "Die Forschung zeigt: Nein. Pilotprojekte weltweit belegen, dass Menschen mit Grundsicherung häufiger gründen, sich weiterbilden und produktiver arbeiten — nicht weniger." },
  { q = "Warum gerade jetzt?", a = "Die Automatisierung beschleunigt sich. Ohne ein stabilisierendes Fundament drohen soziale Verwerfungen. Das Grundeinkommen ist eine präventive, keine reaktive Massnahme." },
  { q = "Gilt das auch für Nicht-Schweizer?", a = "Die genaue Ausgestaltung — etwa Wohnsitzpflicht und Beitragsdauer — wird im demokratischen Prozess festgelegt. Entscheidend ist das Prinzip der universellen Grundsicherung." },
  { q = "Was passiert mit bestehenden Sozialleistungen?", a = "Das Grundeinkommen ersetzt und vereinfacht bestehende Transferleistungen. Es geht nicht darum, mehr draufzupacken, sondern das System einfacher, transparenter und gerechter zu machen." },
  { q = "Warum ein Pilot und nicht gleich einführen?", a = "Weil wir pragmatisch sind. Ein bundesweiter Pilot vergleicht Modelle (UBI, Negative Income Tax, Hybrid), misst Wirkung und schafft eine solide Entscheidungsgrundlage – statt Ideologie." },
  { q = "Was wird gemessen?", a = "Drei Kernbereiche: Wohlbefinden und Sicherheit (Existenzstress, Stabilität), Gründungen und Unternehmertum, sowie Bürokratiekosten und Verwaltungsaufwand." },
]

# Calculator
sim_title = "UBI-Rechner"
sim_desc = "Was kostet ein bedingungsloses Grundeinkommen für die Schweiz — und wie lässt es sich finanzieren? Stell die Parameter ein und vergleiche Szenarien."
scenario_referendum = "Volksinitiative 2016"
scenario_modest = "Moderater Einstieg"
scenario_full = "Voller Übergang"
panel_parameters = "Parameter"
panel_results = "Ergebnisse"
slider_ubi_adult = "Grundeinkommen Erwachsene (CHF/Mt.)"
slider_ubi_child = "Grundeinkommen Kinder (CHF/Mt.)"
slider_income_tax = "Einkommenssteuer-Zuschlag (%)"
slider_vat = "MwSt.-Erhöhung (%-Punkte)"
slider_wealth_tax = "Vermögensabgabe (%)"
slider_savings = "Einsparungen Sozialsystem (%)"
result_annual_cost = "Jährliche Kosten"
result_revenue = "Einnahmen"
result_income_tax_revenue = "Einkommenssteuer"
result_vat_revenue = "Mehrwertsteuer"
result_wealth_tax_revenue = "Vermögensabgabe"
result_savings_revenue = "Einsparungen"
result_net = "Saldo"
result_surplus = "Überschuss"
result_deficit = "Defizit"
result_per_month = "pro Monat"
result_per_year = "pro Jahr"
result_billion = "Mrd."
impact_title = "Nettowirkung pro Person"
impact_subtitle = "Monatliches Einkommen"
impact_net_gain = "Nettogewinn"
impact_net_loss = "Nettoverlust"
impact_ubi_received = "UBI erhalten"
impact_additional_taxes = "Zusätzliche Steuern"
result_total_revenue = "Total Einnahmen"
compare_title = "Vergleich"
compare_current = "Heutige Sozialausgaben"
compare_ubi_cost = "UBI-Kosten"
methodology_title = "Methodik & Annahmen"
methodology_text = "Dieses Modell ist eine Vereinfachung. Es basiert auf öffentlich verfügbaren Daten des Bundesamts für Statistik (BFS) und der Eidgenössischen Steuerverwaltung (ESTV). Die tatsächliche Finanzierung hängt von Verhaltenseffekten, wirtschaftlichen Dynamiken und politischen Entscheidungen ab, die ein statisches Modell nicht abbilden kann."
sources_title = "Datenquellen"
sources_intro = "Alle im Rechner verwendeten Kenngrössen basieren auf öffentlich zugänglichen Schweizer Statistiken. Die Werte sind gerundet."
sources_col_param = "Kenngrösse"
sources_col_value = "Wert"
sources_col_source = "Quelle"

[[extra.sections]]
title = "Die Automatisierungsdividende"
text = "Wenn Maschinen einen wachsenden Teil der Wertschöpfung erbringen, muss ein Teil dieser Dividende an die Gesellschaft zurückfliessen. Das Grundeinkommen ist kein Almosen — es ist eine strukturelle Antwort auf eine strukturelle Veränderung."

[[extra.sections]]
title = "Was es ermöglicht"
text = ""
items = [
  { label = "Freiheit zur Umschulung", text = "Wer seinen Job verliert, braucht keine Angst, sondern eine Brücke." },
  { label = "Gründungsfreundlichkeit", text = "Ein stabiles Fundament ermöglicht Risikobereitschaft für neue Ideen." },
  { label = "Pflegearbeit anerkennen", text = "Unbezahlte Care-Arbeit wird durch finanzielle Sicherheit sichtbar gemacht." },
  { label = "Bürokratie abbauen", text = "Dutzende Einzelleistungen werden durch ein transparentes System ersetzt." },
  { label = "Flexible Arbeit", text = "Teilzeit, Projektarbeit oder Weiterbildung werden ohne existenzielle Angst möglich." },
]

[[extra.sections]]
title = "Kein Experiment — eine Weiterentwicklung"
text = "Die Schweiz hat eines der besten Sozialsysteme der Welt. Das Grundeinkommen baut darauf auf: einfacher, direkter, zeitgemässer. Es ist die logische Weiterentwicklung für eine Gesellschaft im Wandel."

[[extra.sources]]
param = "Wohnbevölkerung (18+)"
value = "7,53 Mio."
source = "BFS, STATPOP 2024"
url = "https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung/stand-entwicklung.html"

[[extra.sources]]
param = "Wohnbevölkerung (<18)"
value = "1,53 Mio."
source = "BFS, STATPOP 2024"
url = "https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung/stand-entwicklung.html"

[[extra.sources]]
param = "Steuerbares Einkommen"
value = "CHF 420 Mrd."
source = "ESTV, Steuerstatistik natürliche Personen 2021"
url = "https://www.estv.admin.ch/estv/de/home/die-estv/steuerstatistiken-estv/kennzahlen.html"

[[extra.sources]]
param = "Konsumausgaben der Haushalte"
value = "CHF 380 Mrd."
source = "BFS, Volkswirtschaftliche Gesamtrechnung 2023"
url = "https://www.bfs.admin.ch/bfs/de/home/statistiken/volkswirtschaft/volkswirtschaftliche-gesamtrechnung.html"

[[extra.sources]]
param = "Steuerbares Reinvermögen"
value = "CHF 2'800 Mrd."
source = "ESTV, Vermögensstatistik natürliche Personen 2021"
url = "https://www.estv.admin.ch/estv/de/home/die-estv/steuerstatistiken-estv/kennzahlen.html"

[[extra.sources]]
param = "Sozialausgaben"
value = "CHF 185 Mrd."
source = "BSV, Gesamtrechnung der Sozialen Sicherheit 2022"
url = "https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ueberblick/grsv.html"
+++
