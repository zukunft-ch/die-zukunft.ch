+++
title = "Dal 16° al 26° posto: perché la Svizzera arretra nell'e-government"
description = "Nell'indice ONU dell'e-government la Svizzera è scesa dal 16° posto (2020) al 23° (2022) e al 26° (2024). Infrastruttura e formazione sono solide, la lacuna sta nei servizi online dello Stato."
slug = "egovernment-rang-26"
date = 2026-11-08
template = "notiz.html"

[extra]
code_path = "output/datenbriefings-2026-11/egovernment-rang-26"
data = "egovernment-rang-26.csv"
category = "datenbriefing"
evidence = "stark"
tags = ["e-government", "stato aperto", "id-e", "egdi", "confronto"]
charts = ["egov_rang_verlauf.svg", "egov_teilindizes_2024.svg", "egov_osi_komponenten_2024.svg"]
pillar = "offener-staat"
+++

Nell'E-Government Development Index (EGDI) delle Nazioni Unite la Svizzera è scesa dal 16° posto (2020) al 23° (2022) e al 26° (2024) su 193 Stati, sebbene il suo valore d'indice sia leggermente aumentato (da 0,89 a 0,90). Semplicemente, altri Paesi migliorano più in fretta. In infrastruttura e formazione la Svizzera è vicina ai primi posti; la lacuna riguarda quasi interamente l'offerta online dello Stato. L'Id-e statale, approvata di stretta misura nel settembre 2025, da giugno 2026 non ha più una data di avvio.

<!-- more -->

---

## Metodologia

L'EGDI è la media di tre sottoindici con lo stesso peso, compresi tra 0 e 1: Online Service Index (OSI, offerta e qualità dei servizi online dello Stato), Telecommunication Infrastructure Index (TII) e Human Capital Index (HCI). Tutti i valori provengono dai profili nazionali della UN E-Government Knowledge Base (rilevazioni 2018–2024). Sono messi a confronto Svizzera, Danimarca, Estonia, Corea del Sud, Singapore, Germania e Austria. Importante: nel 2024 l'ONU ha modificato la metodologia (TII con l'accessibilità economica al posto della banda larga fissa, HCI con una componente aggiuntiva sulle competenze in materia di e-government). I valori assoluti sono quindi confrontabili nel tempo solo in misura limitata; le posizioni all'interno della stessa rilevazione invece sì.

---

### Un arretramento ad alto livello

{% chart(spec="egov_rang_verlauf", alt="Posizione della Svizzera nell'indice ONU dell'e-government dal 2018 al 2024") %}
Nel 2018 la Svizzera era al 15° posto, nel 2020 al 16°, nel 2022 al 23° e nel 2024 al 26°. Il valore EGDI è rimasto quasi stabile (2020: 0,8907; 2022: 0,8752; 2024: 0,9004). L'arretramento è quindi relativo: la Svizzera ristagna, mentre Paesi come Singapore (2022: 12° posto, 2024: 3°), l'Estonia (dall'8° al 2°) e la Germania (dal 22° al 12°) progrediscono nettamente. Nello stesso periodo l'Austria è scesa dal 20° al 22° posto.
{% end %}

---

### La lacuna è dello Stato, non della popolazione

{% chart(spec="egov_teilindizes_2024", alt="Sottoindici EGDI 2024 per sette Paesi") %}
In infrastruttura delle telecomunicazioni (0,958) e capitale umano (0,903) la Svizzera è nel gruppo di testa. Nell'Online Service Index raggiunge invece solo 0,841, contro 0,999 (Danimarca), 0,995 (Estonia), 1,000 (Corea del Sud) e 0,983 (Singapore). Anche la Germania (0,924) è chiaramente davanti; solo l'Austria (0,838) è altrettanto debole. L'OSI svizzero era di 0,829 nel 2020 e di 0,768 nel 2022. Ciò mostra che rete e formazione ci sono; manca l'offerta digitale dell'amministrazione.
{% end %}

---

### Dove esattamente l'Online Service Index perde punti

{% chart(spec="egov_osi_komponenten_2024", alt="Componenti dell'Online Service Index 2024: Svizzera, Germania, Danimarca, Estonia") %}
Nel quadro istituzionale (strategie, leggi) la Svizzera raggiunge, come tutti i Paesi di confronto, il valore massimo. Gli scarti nascono nell'attuazione: offerta di servizi 0,81 (Estonia 1,00, Danimarca 0,99), contenuti 0,89 (Estonia e Danimarca 1,00), e-partecipazione 0,82 e soprattutto tecnologia 0,63 (tutti e tre i Paesi di confronto 0,88). La Svizzera ha dunque i documenti, ma troppo poche procedure interamente digitali.
{% end %}

---

### Id-e: approvata, ma senza data di avvio

Le aventi e gli aventi diritto di voto hanno approvato la legge sull'Id-e il 28 settembre 2025 con il 50,4 per cento di sì. Nel febbraio 2026 la Confederazione ha indicato il 1° dicembre 2026 come data di avvio. Il 30 giugno 2026 ha revocato questo termine: a causa di nuovi rischi legati all'IA (deepfake, software dannoso sui dispositivi) il rilascio online deve essere ulteriormente protetto. Una nuova data non c'è; l'infrastruttura di fiducia dovrebbe entrare in funzione nel primo semestre 2027. Le ragioni sono comprensibili, ma la conseguenza per l'indice è chiara: senza un'identità digitale ampiamente utilizzata, le procedure online complete restano l'eccezione.

### Che cosa fanno diversamente i Paesi di testa

- **Piattaforma comune di scambio dati:** in Estonia X-Road collega registri pubblici e privati; secondo e-Estonia vi transitano circa 2,2 miliardi di transazioni all'anno. Le autorità si scambiano i dati tra loro invece di richiederli di nuovo alla popolazione (once-only).
- **Identità digitale nella vita quotidiana:** Singpass conta 5 milioni di utenti e oltre 41 milioni di transazioni al mese; con Myinfo i moduli vengono precompilati automaticamente.
- **Canale digitale come standard:** in Danimarca la legge impone a popolazione e imprese di poter ricevere Digital Post; chi non è in grado di comunicare digitalmente continua a ricevere la carta.

Anche la Svizzera dispone di una base: dal 1° gennaio 2024 è in vigore la LMeCA con il principio «open by default» per i dati dell'amministrazione; il relativo periodo transitorio scade a fine 2026.

---

## Che cosa significa per la politica

- **Rendere misurabile l'obiettivo:** entro la rilevazione ONU 2028 tornare tra i primi 15, misurati sull'Online Service Index e non sui documenti strategici: [Stato aperto](@/offener-staat.md).
- **Ancorare il principio once-only nella legge:** i dati che un'autorità possiede già non possono essere richiesti di nuovo da un'altra; lo scambio avviene tramite interfacce documentate (API per default).
- **Id-e con un calendario:** documentare apertamente i lavori sulla sicurezza e pubblicare una data di avvio vincolante con tappe intermedie.
- **Rispettare il termine della LMeCA:** dal 2027 indicare pubblicamente quali servizi federali mettono effettivamente a disposizione i loro dati in forma aperta.

---

## Fonti

1. UN DESA, E-Government Knowledge Base: profilo nazionale Svizzera (rilevazioni 2020, 2022, 2024). https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/166-Switzerland
2. UN DESA, profili nazionali Danimarca, Estonia, Corea del Sud, Singapore, Germania, Austria (rilevazione 2024). https://publicadministration.un.org/egovkb/en-us/Data/Country-Information/id/48-Denmark (analogamente id/57, 138, 154, 65, 10)
3. UN DESA: E-Government Survey 2024 (metodologia, Technical Appendix). https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024
4. Consiglio federale: legge sull'Id-e, votazione popolare del 28 settembre 2025. https://www.admin.ch/en/e-id-act
5. DFGP: Akzeptanz der E-ID mit zusätzlichen Massnahmen stärken, 25 febbraio 2026. https://www.ejpd.admin.ch/de/newnsb/L6Nbf7gStnDm
6. Ufficio federale di giustizia: Neuer Zeitplan für die Einführung der E-ID und der Vertrauensinfrastruktur, 30 giugno 2026. https://www.admin.ch/de/newnsb/4ZNYpSk3J1-U
7. e-Estonia: X-Road. https://e-estonia.com/solutions/interoperability-services/x-road/
8. GovTech Singapore: Singpass. https://www.tech.gov.sg/products-and-services/for-citizens/digital-services/singpass/
9. Agency for Digital Government (Danimarca): Digital Post. https://en.digst.dk/systems/digital-post/
10. UST: Open Government Data, LMeCA art. 10 e Masterplan 2024–2027. https://www.bfs.admin.ch/de/strategie-og-de
