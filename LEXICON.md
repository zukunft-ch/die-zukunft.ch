# Content Lexicon — Die Zukunft

Canonical terminology for the four-language site (DE default, FR, IT, EN). Keep this in sync when
introducing or renaming a recurring term. UI strings (buttons, labels, nav) live in `config.toml`
translation blocks; this file governs **content vocabulary and framing**.

## Brandmark

Always written with a trailing period. The wordmark renders lowercase (CSS `text-transform`), but in
prose use title case.

| Lang | Brandmark | Descriptor |
|------|-----------|------------|
| DE | Die Zukunft. | Eine neue Schweizer Partei |
| FR | Le Futur. | Un nouveau parti suisse |
| IT | Il Futuro. | Un nuovo partito svizzero |
| EN | The Future. | A new Swiss party |

The legal entity in all languages is the Verein **Die Zukunft** (Basel). On FR/IT legal pages, tie the
localized brand to it: "Le Futur (Die Zukunft)", "Il Futuro (Die Zukunft)".

## Concept terms (decisions)

- **Abundance** — the flagship concept: broad prosperity made possible by productivity, *not* decadent
  excess. Keep the cognate in every language: DE/EN **Abundance**, FR **Abondance**, IT **Abbondanza**.
  Do **not** use German **"Überfluss"** — it connotes wasteful excess and inverts the intended meaning.
  Gloss on first prominent use. Paired opposite: **Mangeldenken** (scarcity thinking).
- **Souveränität statt Abhängigkeit** / *Sovereignty over dependence* / *Souveraineté au lieu de la
  dépendance* / *Sovranità invece di dipendenza*. In EN use **"dependence"** (not "dependency")
  consistently.
- **Black-Box** — hyphenated; used for opaque state/health systems we reject ("keine Black-Box-Politik").
- **Lock-in / Anti-Lock-in** — hyphenated; vendor lock-in of critical state IT.
- **Good Offices** — the Swiss mediation tradition; keep the English term in all languages.
- **messbar / measurable** — recurring proof-standard word ("pragmatisch, messbar"). Back it with numbers
  where possible (see the Zukunftslabor).

## AI vocabulary (added Nov 2026)

The party's core premise: AI and robotics make broad prosperity possible; Switzerland must build the
stack (energy → compute → sovereign AI → talent → application in all three sectors → dividend).

| Concept | DE | FR | IT | EN |
|---|---|---|---|---|
| AI | künstliche Intelligenz (KI) | intelligence artificielle (IA) | intelligenza artificiale (IA) | artificial intelligence (AI) |
| AGI | allgemeine KI (AGI) | IA générale (AGI) | IA generale (AGI) | artificial general intelligence (AGI) |
| compute | Rechenkraft / Rechenkapazität | puissance de calcul | potenza di calcolo | compute / computing capacity |
| sovereign AI | souveräne KI | IA souveraine | IA sovrana | sovereign AI |
| automation dividend | (Automatisierungs-)Dividende | dividende (de l'automatisation) | dividendo (dell'automazione) | (automation) dividend |
| the stack | der Stack der Abundance | la pile de l'abondance | lo stack dell'abbondanza | the abundance stack |
| open state, transparency | transparent per Gesetz | transparent par défaut (par la loi) | trasparente per legge | transparent by default (by law) |
| meritocracy principle | Kompetenz statt Karriere | la compétence plutôt que la carrière | competenza invece di carriera | competence over careers |
| party patronage | Parteibuch | appartenance partisane / carte de parti | tessera di partito | party membership / patronage |
| term limits | Amtszeitbeschränkung | limitation de la durée des mandats | limite di mandato | term limits |
| cooling-off period | Karenzfrist | délai de carence | periodo di carenza | cooling-off period |
| militia system | Milizsystem / Milizidee | système de milice | sistema di milizia | militia system |
| talent visa | Talent-Visum | visa talents | visto per talenti | talent visa |
| sectors | 1./2./3. Sektor | secteur primaire/secondaire/tertiaire | settore primario/secondario/terziario | primary/secondary/tertiary sector |

Meritocracy applies to offices and the administration, never to the right to vote or stand for election: always keep that safeguard sentence. Rules: never claim machines "think"; say they do cognitive work / Denkarbeit. AGI timing is uncertain —
frame it as planning for the early case, not as prophecy. Cite figures with a source (see Vision page).

## Framing rules

- **No "country-first" slogans.** Avoid "CH-first", "La Suisse d'abord", "Prima la Svizzera",
  "Switzerland first" — they echo nationalist slogans (America/France/Italy First). Express the same
  sequencing as **internal strength → external credibility**: DE "Zuerst nach innen stark, dann nach
  aussen glaubwürdig", FR "D'abord forts à l'intérieur, puis crédibles à l'extérieur", IT "Prima forti
  all'interno, poi credibili all'esterno", EN "Strong at Home First, Then Credible Abroad".
- Tone (see `.claude/rules/content.md`): pragmatic, confident, Swiss-serious. No sci-fi, no culture-war,
  no climate framing (use "resilience/durability"), no "free money" framing for UBI (use
  "stability/foundation/simplification").

## Canonical pillar names (13)

#13 (souveraene-ki, hex 0x2C) was added in Nov 2026 and is listed FIRST in the programme and on the homepage; its hex is the next free slot, not its rank.

Order and names below are canonical (they match the `programm.*` chapter order and the hex map
`0x20`–`0x2B`). The landing page may present them in a different, more relatable order by design.
Internal links use Zola `@/<basename>.md` form (build-validated, auto-localized) — never hardcode slugs.

| # | `@/` basename | DE | FR | IT | EN |
|---|---------------|----|----|----|----|
| 1 | digitale-souveraenitaet | Digitale Souveränität | Souveraineté numérique | Sovranità digitale | Digital Sovereignty |
| 2 | robotik | Reindustrialisierung mit Robotik | Réindustrialisation par la robotique | Reindustrializzazione con la robotica | Reindustrialization with Robotics |
| 3 | uebergaenge | Arbeit ohne Angst | Travailler sans peur | Lavorare senza paura | Work Without Fear |
| 4 | life-science | Life Science & Gesundheit | Sciences de la vie & santé | Scienze della vita & salute | Life Science & Health |
| 5 | grundeinkommen | Grundeinkommen | Revenu de base | Reddito di base | Basic Income |
| 6 | stadte-wohnen | Städte & Wohnen | Villes & logement | Città & abitare | Cities & Housing |
| 7 | research-innovation | Forschung, Innovation & Commons | Recherche, innovation & communs | Ricerca, innovazione & beni comuni | Research, Innovation & Commons |
| 8 | energy-resilience | Energie & Infrastruktur-Resilienz | Énergie & résilience des infrastructures | Energia & resilienza delle infrastrutture | Energy & Infrastructure Resilience |
| 9 | offener-staat | Offener Staat | État ouvert | Stato aperto | Open Government |
| 10 | neutralitaet-frieden | Neutralität & Frieden | Neutralité & paix | Neutralità & pace | Neutrality & Peace |
| 11 | talent-integration | Talent, Integration & Rechtsstaat | Talent, intégration & état de droit | Talento, integrazione & stato di diritto | Talent, Integration & Rule of Law |
| 12 | sprache-verstaendigung | Sprache & Verständigung | Langue & compréhension | Lingua & comprensione | Language & Understanding |
| 13 | souveraene-ki | Souveräne KI & Rechenkraft | IA souveraine & puissance de calcul | IA sovrana & potenza di calcolo | Sovereign AI & Compute |
