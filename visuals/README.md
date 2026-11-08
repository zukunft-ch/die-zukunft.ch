# Hero visuals

Twenty-one imagined Swiss near-future scenes, generated on 2026-11-08 using the built-in
OpenAI `image_gen` tool. The art direction follows the shared
`../assets/visuals/PROMPTS.md` prompt kit (relative to the site repository root).
The complete prompts used here are preserved beside the originals.

| Slot | Placement (all four languages) |
| --- | --- |
| `pillar-souveraene-ki` | Sovereign AI and compute |
| `pillar-robotik` | Robotics |
| `pillar-grundeinkommen` | Basic income |
| `pillar-stadte-wohnen` | Cities and housing |
| `pillar-energy-resilience` | Energy and infrastructure resilience |
| `lab-hero` | Future Lab |
| `join-together` | Get involved / Mitmachen |
| `pillar-digitale-souveraenitaet` | Digital sovereignty |
| `pillar-uebergaenge` | Work without fear / retraining |
| `pillar-life-science` | Life science and health |
| `pillar-research-innovation` | Research, innovation and commons |
| `pillar-offener-staat` | Open government |
| `pillar-neutralitaet-frieden` | Neutrality and peace |
| `pillar-talent-integration` | Talent, integration and rule of law |
| `pillar-sprache-verstaendigung` | Language and understanding |
| `vision-01-behoerden` | Vision: public services |
| `vision-02-assistenz` | Vision: personal AI assistance |
| `vision-03-fabrik` | Vision: local production |
| `vision-04-bauen` | Vision: prefabricated housing |
| `vision-05-hof` | Vision: agricultural robotics |
| `vision-06-zeit` | Homepage and Vision: time and everyday life |

- `incoming/`: selected original PNGs and exact generation prompts, outside the published site.
- `catalog.json`: source-page mappings, image dimensions, alt text and captions in DE/FR/IT/EN.
- `provenance.json`: tool, generation date, prompt, original checksum and encoded output sizes.
- `../static/visuals/`: production AVIF, WebP and JPEG assets at 600, 960 and 1536 px.

Every image has a visible, translated “Visualisation · AI-generated” caption and
a note that the scene is imaginary. These are illustrations, not photographs of
existing projects or identified locations.

To regenerate the compressed assets, install ImageMagick with AVIF and WebP
support, then run from the repository root:

```sh
python3 scripts/build_visuals.py
```

The script preserves the full 3:2 composition, strips delivery metadata, never
upscales, and writes the provenance record. Current quality settings: AVIF 50,
WebP 78, JPEG 80. The AVIF files range from 14–30 KiB at 600 px, 32–76 KiB at
960 px, and 74–171 KiB at 1536 px. Update generation dates/tool metadata in the
script when adding newly generated originals.

The Avenir theme uses `macros/visual.html` in `page.html`, `grundeinkommen.html`
and `zukunftslabor.html`. `extra.visuals_catalog` in `config.toml` opts the site
into this feature; the theme remains usable without a catalogue. The catalogue
maps canonical source files to translated URLs, so no content frontmatter edits
are necessary. Layout rules live in `_visuals.scss`. The `story` macro adds three-image strips
below the homepage introduction. The `scene` macro illustrates each of the six
Vision outcomes, with slot ordering configured in `catalog.json` under
`vision_outcomes`. The
shared picture/caption markup lives in `macros/visual_picture.html`; strips use
lazy loading and smaller responsive size hints. All 13 programme pillars now
have heroes; the homepage reuses selected assets and Vision pairs each outcome with a dedicated scene.

Browser delivery uses `<picture>` with AVIF first, WebP second, and a JPEG image
fallback. Each format has responsive sources. Explicit dimensions reserve the
image space, and the single above-the-fold hero loads eagerly at high priority.
Gallery images load lazily at normal priority. There is no image loader JavaScript, remote image service or PNG download.

Validation: Zola 0.22.1 production build and internal-link check; all 64 localized
pages (56 heroes and 36 lazy editorial images) checked for assets, alt text and captions; headless Chrome checked
desktop/mobile/tablet, light/dark themes, single-format loading and WebP/JPEG
fallback selection. Use `mise exec -- zola` to select the pinned version.

Integration includes changes in the `themes/avenir` submodule. Include those
theme changes along with the site assets/configuration when committing or deploying.

## Follow-up placements (2026-11-08)

Programme chapters reuse the thirteen pillar scenes with CSS crops. The manifesto
adds two wide pauses after the production and dividend theses; their permanent
hex addresses map to `manifest_interludes` in the catalogue. Mitmachen uses the
new `join-together` scene, generated with the built-in image tool; its exact
prompt and original are in `incoming/` and its provenance is recorded as usual.

`macros/visual_guide.html` renders semantic HTML lists for the automation-dividend
flow and the Methodology evidence/correction guides. Their copy lives in the four
localized content files and is included in the generated Markdown twins and
LLM corpora. Decorative arrows and evidence bars are hidden from screen readers.

This pass: production build and internal-link check passed, and all 20 affected
localized pages passed asset/markup checks (68 pictures). Full desktop/mobile
light/dark browser review remains pending: browser connector unavailable, with
concurrent native-browser use preventing reliable completion. See `TODO.md`.
