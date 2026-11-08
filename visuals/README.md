# Hero visuals

Six imagined Swiss near-future scenes, generated on 2026-11-08 using the built-in
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
WebP 78, JPEG 80. The AVIF files range from 14–28 KiB at 600 px, 32–68 KiB at
960 px, and 74–150 KiB at 1536 px. Update generation dates/tool metadata in the
script when adding newly generated originals.

The Avenir theme uses `macros/visual.html` in `page.html`, `grundeinkommen.html`
and `zukunftslabor.html`. `extra.visuals_catalog` in `config.toml` opts the site
into this feature; the theme remains usable without a catalogue. The catalogue
maps canonical source files to translated URLs, so no content frontmatter edits
are necessary. Layout rules live in `_visuals.scss`.

Browser delivery uses `<picture>` with AVIF first, WebP second, and a JPEG image
fallback. Each format has responsive sources. Explicit dimensions reserve the
image space, and the single above-the-fold hero loads eagerly at high priority.
There is no image loader JavaScript, remote image service or PNG download.

Validation: Zola 0.22.1 production build and internal-link check; all 24 localized
hero outputs checked for assets, alt text and captions; headless Chrome checked
desktop/mobile/tablet, light/dark themes, single-format loading and WebP/JPEG
fallback selection. Use `mise exec -- zola` to select the pinned version.

Integration includes changes in the `themes/avenir` submodule. Include those
theme changes along with the site assets/configuration when committing or deploying.
