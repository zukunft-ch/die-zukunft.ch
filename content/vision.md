+++
title = "Vision"
description = "Künstliche Intelligenz und Robotik verändern, was Arbeit ist und woher Wohlstand kommt. Die Zukunft ist die Partei, die diesen Übergang gestaltet: mit Rechenkraft, souveräner KI, Talent und Produktion im eigenen Land und mit einer Dividende, die alle erreicht."
template = "vision.html"

[extra]
show_cta = true
cta_text = "Du willst, dass die Schweiz diesen Übergang anführt? Dann bau mit."
kicker = "Unsere Vision"
lead = "Wenn Maschinen Denkarbeit und körperliche Arbeit leisten, wird Wohlstand für alle möglich. Wir sorgen dafür, dass die Schweiz ihn baut, statt ihn zu mieten."

shift_eyebrow = "Ausgangslage"
shift_title = "Was gerade passiert"
shift_intro = "Künstliche Intelligenz macht kognitive Arbeit billiger, Robotik physische Arbeit. Das ist die grösste wirtschaftliche Verschiebung seit der Industrialisierung, und die Schweiz ist darauf schlechter vorbereitet, als sie sein müsste."
shift_note = "Die Zutaten sind da: Mit <strong>Apertus</strong> haben ETH Zürich, EPFL und CSCS 2025 eines der offensten grossen Sprachmodelle der Welt veröffentlicht, trainiert auf dem Supercomputer <strong>Alps</strong> in Lugano mit 10'752 GH200-Chips. Der Schweizerische Wissenschaftsrat empfahl im Mai 2026 eine nationale KI-Infrastrukturstrategie. Was fehlt, ist der politische Wille, daraus ein Programm zu machen."
shift = [
  { figure = "2047", title = "Allgemeine KI rückt näher", text = "In der grössten Umfrage unter 2'778 KI-Forschenden lag die Wahrscheinlichkeit bei 50 Prozent, dass Maschinen bis 2047 jede Aufgabe besser erledigen als Menschen. Das ist 13 Jahre früher als in der Umfrage davor. Niemand weiss, wann. Wir planen für den Fall, dass es früh ist.", source = "Grace et al., JAIR", source_url = "https://jair.org/index.php/jair/article/view/19087" },
  { figure = "294", title = "Die Schweiz automatisiert zaghaft", text = "Roboter pro 10'000 Industriebeschäftigte. Südkorea hat 1'220, Deutschland 449. Wer Produktion im Land halten oder zurückholen will, muss sie automatisieren.", source = "IFR World Robotics 2025", source_url = "https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas" },
  { figure = "3,6 %", title = "Rechenkraft braucht Strom", text = "So viel des Schweizer Stroms brauchten Rechenzentren 2024, rund 2,1 Terawattstunden. Bis 2030 könnten es bis zu 6 Prozent sein. Wer KI im Land will, muss Energie und Rechenkraft zusammen planen.", source = "Bundesamt für Energie, 2026", source_url = "https://www.admin.ch/de/newnsb/GV-_d7OgIlqjfQDGZqbkN" },
  { figure = "Rang 26", title = "Der Staat fällt zurück", text = "Im E-Government-Index der UNO lag die Schweiz 2024 auf Rang 26, nach Rang 16 im Jahr 2020. Ein reiches, gut ausgebildetes Land sollte hier unter den Besten sein.", source = "UN E-Government Survey 2024", source_url = "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/166-Switzerland" },
]

outcomes_eyebrow = "Ziel"
outcomes_title = "Die Schweiz im Jahr 2040"
outcomes_intro = "Keine Science-Fiction, sondern das, was mit heutiger Technologie und politischem Willen erreichbar ist."
outcomes = [
  { title = "Behördengänge in Minuten", text = "Steuern, Bewilligungen, Umzug: Der Staat erledigt Routinefälle automatisch, begründet und mit Einspruchsrecht. Die Menschen in der Verwaltung haben Zeit für die schwierigen Fälle." },
  { title = "Eine KI-Assistenz für alle", text = "Alle in der Schweiz haben Zugang zu einer vertrauenswürdigen KI-Assistenz in ihrer Landessprache, für Gesundheit, Recht, Bildung und Alltag. Auf Schweizer Infrastruktur, mit Schweizer Datenschutz." },
  { title = "Die Fabriken kommen zurück", text = "Medikamente, Präzisionsteile, Elektronik und Lebensmittel entstehen in hoch automatisierten Werken in unserer Nähe. Kürzere Lieferketten, weniger Abhängigkeit, neue Arbeit in Planung, Wartung und Entwicklung." },
  { title = "Bauen in halber Zeit", text = "Vorfertigung, Baurobotik und digitale Bewilligungen bringen Wohnungen schneller und günstiger auf den Markt. Mehr Wohnraum ist eine Frage der Produktivität, nicht des Verzichts." },
  { title = "Höfe mit Robotern", text = "Autonome Maschinen jäten, ernten und pflegen präzise. Höfe bleiben produktiv und eigenständig, auch wenn weniger Menschen in der Landwirtschaft arbeiten." },
  { title = "Mehr Zeit, weniger Existenzangst", text = "Die Gewinne der Automatisierung fliessen als Dividende an alle zurück: ein Fundament, das Weiterbildung, Gründungen und Care-Arbeit möglich macht." },
]

stack_eyebrow = "Bauplan"
stack_title = "Der Stack der Abundance"
stack_intro = "Wohlstand aus KI entsteht nicht in einer App. Er entsteht in Schichten, die aufeinander aufbauen. Fehlt eine, trägt das Ganze nicht. Darum denken wir sie zusammen, von der Energie bis zur Dividende."
stack = [
  { layer = "01", title = "Energie", text = "Ohne Strom keine Rechenkraft und keine Roboter. Wir sichern bezahlbaren, verlässlichen Strom, auch im Winter, und planen den zusätzlichen Bedarf von Rechenzentren und Automatisierung von Anfang an mit.", link = "@/energy-resilience.md", link_text = "Energie" },
  { layer = "02", title = "Rechenkraft", text = "Rechenzentren und KI-Kapazität im Land, zugänglich für Hochschulen, KMU und Verwaltung. Wer Rechenkraft nur mietet, mietet seine Zukunft.", link = "@/souveraene-ki.md", link_text = "Souveräne KI" },
  { layer = "03", title = "Souveräne KI", text = "Offene Schweizer Modelle wie Apertus weiterentwickeln, in allen Landessprachen und mit transparenten Daten. Für kritische Anwendungen gilt: Modelle, die wir prüfen, betreiben und ersetzen können.", link = "@/souveraene-ki.md", link_text = "Souveräne KI" },
  { layer = "04", title = "Talent", text = "Die besten Köpfe ausbilden, halten und anziehen: ETH, EPFL und Fachhochschulen stärken und ein Talent-Visum für Spitzenkräfte aus aller Welt schaffen, die hier Forschung, Firmen und ganze Branchen aufbauen. Weiterbildung als Normalfall.", link = "@/talent-integration.md", link_text = "Talent" },
  { layer = "05", title = "Anwendung in allen Sektoren", text = "Roboter auf Feldern, Baustellen und in Fabriken. KI in jeder Dienstleistung und in der Verwaltung. Dort, wo es Menschen entlastet und Wertschöpfung ins Land holt.", link = "@/robotik.md", link_text = "Robotik" },
  { layer = "06", title = "Dividende", text = "Die Produktivitätsgewinne erreichen alle: über ein Grundeinkommen als Fundament, sichere Übergänge zwischen Berufen und tiefere Kosten im Alltag.", link = "@/grundeinkommen.md", link_text = "Grundeinkommen" },
]

sectors_eyebrow = "Anwendung"
sectors_title = "Drei Sektoren, ein Ziel"
sectors_intro = "Maschinen sollen dort arbeiten, wo sie Menschen entlasten und Wertschöpfung ins Land holen. In jedem Sektor der Wirtschaft."
sectors = [
  { label = "1. Sektor · Landwirtschaft & Rohstoffe", title = "Präzision statt Plackerei", text = "Die Landwirtschaft verliert Arbeitskräfte: Seit 2000 arbeiten fast 30 Prozent weniger Menschen in ihr. Robotik hält die Höfe produktiv und die Versorgung im Land.", examples = ["Autonome Jät-, Pflege- und Ernteroboter", "Geteilte Maschinenparks für kleine und mittlere Höfe", "Sensorik für präzisen Einsatz von Wasser und Dünger", "Automatisierte Verarbeitung nah beim Hof"], link = "@/robotik.md", link_text = "Zum Pfeiler Robotik" },
  { label = "2. Sektor · Industrie & Bau", title = "Die Produktion kommt zurück", text = "Hoch automatisierte Fertigung macht Produktion in der Schweiz wieder wettbewerbsfähig, trotz hoher Löhne. Lokal heisst: kurze Wege, weniger Abhängigkeit, Know-how im Land.", examples = ["Vollautomatisierte Werke für Medtech, Pharma, Präzision und Elektronik", "Geteilte Robotik-Zentren für KMU", "Baurobotik und industrielle Vorfertigung", "Kritische Güter im Land herstellen können"], link = "@/robotik.md", link_text = "Zum Pfeiler Robotik" },
  { label = "3. Sektor · Dienstleistungen & Staat", title = "Jede Dienstleistung wird besser", text = "KI macht Dienstleistungen schneller, günstiger und zugänglicher. Der Staat geht voran und wird zum besten Dienstleister des Landes.", examples = ["Verwaltung: transparent per Gesetz, Routinefälle automatisch, jeder Entscheid begründet", "Ämter nach Kompetenz statt Parteibuch, begrenzte Amtszeiten", "KI-Assistenz in Gesundheit, Recht und Bildung", "Tiefere Kosten bei Banken, Versicherungen und im Handel", "Mehr Zeit für das Persönliche, Komplexe und Fürsorgliche"], link = "@/offener-staat.md", link_text = "Zum Pfeiler Offener Staat" },
]

guardrails_eyebrow = "Leitplanken"
guardrails_title = "Schnell, aber kontrolliert"
guardrails_intro = "Menschen nehmen neue Technologie an, wenn sie ihr vertrauen können. Darum gelten für uns klare Regeln."
guardrails = [
  { title = "Menschliche Verantwortung.", text = "Jeder Entscheid über Menschen hat eine verantwortliche Person, eine Begründung und ein Einspruchsrecht." },
  { title = "Prüfbarkeit.", text = "KI im öffentlichen Einsatz ist dokumentiert, getestet und unabhängig auditierbar." },
  { title = "Datenschutz by design.", text = "Gesundheits- und Personendaten nur mit Einwilligung. Kritische Verarbeitung im Land." },
  { title = "Sicherheit vor Skalierung.", text = "Leistungsfähige Systeme werden vor dem Einsatz in kritischen Bereichen auf Risiken geprüft." },
  { title = "Wahlfreiheit.", text = "Der persönliche Zugang zu staatlichen Leistungen bleibt garantiert, für alle, die ihn brauchen." },
]

why_ch_eyebrow = "Standort"
why_ch_title = "Warum die Schweiz es zuerst schaffen kann"
why_ch = [
  { title = "Weltklasse-Forschung", text = "ETH Zürich gehört zu den zehn besten Hochschulen der Welt. Mit EPFL, CSCS und Apertus hat die Schweiz, was andere Länder erst aufbauen müssen." },
  { title = "Klein und dezentral", text = "26 Kantone sind 26 Reallabore. Was in einem funktioniert, können die anderen übernehmen. So lernt ein Land schneller als ein grosses Zentrum." },
  { title = "Vertrauen und Demokratie", text = "Direkte Demokratie gibt Veränderungen Legitimität. Was die Bevölkerung mitentscheidet, trägt sie auch mit." },
  { title = "Industrie mit Präzision", text = "Medtech, Pharma, Maschinenbau: Die Schweiz kann komplexe Dinge bauen. Automatisierung macht diese Stärke grösser, nicht kleiner." },
  { title = "Verlässliche Energie", text = "Über die Hälfte des Schweizer Stroms stammt aus steuerbarer Wasserkraft. Das ist eine gute Grundlage für Rechenzentren, wenn wir den Ausbau klug planen." },
  { title = "Neutralität", text = "Ein neutrales, rechtsstaatliches Land ist ein vertrauenswürdiger Ort für Rechenkraft, Daten und internationale KI-Diplomatie." },
]

why_us_eyebrow = "Unsere Rolle"
why_us_title = "Die Partei für diesen Übergang."
why_us = [
  "Die etablierten Parteien streiten über die Verteilung von heute. KI kommt bei ihnen als Risiko vor, als Regulierungsfrage oder gar nicht. Dabei entscheidet sich in den nächsten zehn Jahren, wem die Wertschöpfung von morgen gehört.",
  "<strong>Die Zukunft</strong> stellt diese Frage ins Zentrum. Wir verstehen die Technologie, wir nehmen ihre Risiken ernst, und wir haben einen Plan, wie die Schweiz sie nutzt: mit eigener Rechenkraft, eigenen Modellen, den besten Talenten, Produktion im Land und einer Dividende für alle.",
  "Nicht links, nicht rechts. Nach vorne.",
]

targets_eyebrow = "Messgrössen"
targets_title = "Woran man uns messen kann"
targets_intro = "Ziele mit Jahreszahl. Wir berichten öffentlich, wie weit die Schweiz ist."
targets = [
  { year = "2027", goal = "Nationale KI-Infrastrukturstrategie mit gesicherter Finanzierung", how = "Wie vom Wissenschaftsrat 2026 empfohlen: Rechenkraft als dauerhafte Infrastruktur, nicht als befristetes Projektgeld." },
  { year = "2027", goal = "Ein Schweizer Talent-Visum für Spitzenkräfte", how = "Für Forschende, Gründer:innen und Spezialist:innen in KI, Robotik und Life Science: Entscheid in zehn Arbeitstagen, Familie inklusive, Zuzug ohne Hürden. Es geht nicht um mehr allgemeine Arbeitsmigration, sondern um die Menschen, um die sich die Bay Area, Singapur und Hongkong bemühen." },
  { year = "2028", goal = "Ein offenes Schweizer KI-Modell im Einsatz in der Bundesverwaltung", how = "Auf Basis von Apertus, betrieben auf Schweizer Infrastruktur, in allen Landessprachen." },
  { year = "2028", goal = "Bundesweiter Grundeinkommens-Pilot läuft", how = "Mit unabhängiger Evaluation von Bürokratiekosten, Gründungen und Wohlbefinden." },
  { year = "2030", goal = "Zehnmal mehr öffentlich zugängliche KI-Rechenkapazität", how = "Für Hochschulen, KMU und Verwaltung, mit dem Strombedarf von Anfang an mitgeplant." },
  { year = "2030", goal = "Unter den besten zehn Ländern im E-Government-Index der UNO", how = "Heute Rang 26. Routinefälle digital und automatisiert, mit Begründung und Einspruchsrecht." },
  { year = "2035", goal = "Roboterdichte in der Industrie verdoppelt", how = "Von 294 auf rund 600 Roboter pro 10'000 Beschäftigte, vor Deutschland mit heute 449." },
]

sources_title = "Quellen"
sources = [
  { label = "Grace et al.: Thousands of AI Authors on the Future of AI, Journal of Artificial Intelligence Research", url = "https://jair.org/index.php/jair/article/view/19087" },
  { label = "IFR: Robot density surges in Europe, Asia and Americas (World Robotics 2025)", url = "https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas" },
  { label = "Bundesamt für Energie: Stromverbrauch der Rechenzentren in der Schweiz (Mai 2026)", url = "https://www.admin.ch/de/newnsb/GV-_d7OgIlqjfQDGZqbkN" },
  { label = "Bundesamt für Energie: Elektrizitätsstatistik 2025", url = "https://www.admin.ch/de/newnsb/YQtEZcK-D9fQ" },
  { label = "UN E-Government Survey 2024: Schweiz", url = "https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/166-Switzerland" },
  { label = "EPFL: Apertus, a fully open, transparent, multilingual language model", url = "https://ai.epfl.ch/apertus-a-fully-open-transparent-multilingual-language-model" },
  { label = "CSCS: Alps hardware", url = "https://docs.cscs.ch/alps/hardware/" },
  { label = "Schweizerischer Wissenschaftsrat empfiehlt nationale KI-Infrastrukturstrategie (Mai 2026)", url = "https://www.pctipp.ch/themen/news/schweizerischer-wissenschaftsrat-empfiehlt-nationale-ki-infrastrukturstrategie" },
  { label = "BFS: Landwirtschaftliche Beschäftigte 2024", url = "https://dam-api.bfs.admin.ch/hub/api/dam/assets/36632459/master" },
  { label = "Singapur: Overseas Networks & Expertise (ONE) Pass", url = "https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass" },
  { label = "Hongkong: Top Talent Pass Scheme", url = "https://www.immd.gov.hk/eng/services/visas/TTPS.html" },
  { label = "Grossbritannien: Global Talent Visa", url = "https://www.gov.uk/global-talent" },
  { label = "Bundesamt für Justiz: Regulierung künstlicher Intelligenz", url = "https://www.bj.admin.ch/de/kuenstliche-intelligenz" },
]
+++
