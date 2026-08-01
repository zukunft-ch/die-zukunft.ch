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

## Framing rules

- **No "country-first" slogans.** Avoid "CH-first", "La Suisse d'abord", "Prima la Svizzera",
  "Switzerland first" — they echo nationalist slogans (America/France/Italy First). Express the same
  sequencing as **internal strength → external credibility**: DE "Zuerst nach innen stark, dann nach
  aussen glaubwürdig", FR "D'abord forts à l'intérieur, puis crédibles à l'extérieur", IT "Prima forti
  all'interno, poi credibili all'esterno", EN "Strong at Home First, Then Credible Abroad".
- Tone (see `.claude/rules/content.md`): pragmatic, confident, Swiss-serious. No sci-fi, no culture-war,
  no climate framing (use "resilience/durability"), no "free money" framing for UBI (use
  "stability/foundation/simplification").

## Canonical pillar names (12)

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
