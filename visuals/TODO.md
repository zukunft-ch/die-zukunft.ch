# Visuals TODO

Implemented on 2026-11-08 after the initial 20-scene visual set. Browser review remains open below.

## First priority

- [x] **Programm:** Add small crops of the existing pillar illustrations alongside each chapter to make the long sequence of text cards easier to scan and recognise. Reuse existing artwork.
- [x] **Mitmachen:** Add one welcoming illustration of people working together around a table. Label it as an imagined, AI-generated scene; a real gathering photo could replace it later.

## Further opportunities

- [x] **Manifest:** Add two or three wide illustrations between groups of theses to give the long document breathing room while preserving its typography. Try existing scenes first.
- [x] **Grundeinkommen:** Add a simple diagram before the calculator explaining the proposed automation dividend and connecting productivity, financing and household income. Keep proposed mechanisms and assumptions explicit.
- [x] **Zukunftslabor / Methodik:** Add a compact visual guide to evidence levels and the correction process so readers can understand the editorial standards at a glance.

## Implementation checklist

- [x] Use responsive AVIF sources, WebP fallbacks and JPEG fallback images for raster artwork; reuse the existing visual pipeline.
- [x] Lazy-load images below the fold and provide explicit dimensions to avoid layout shifts.
- [x] Use HTML/CSS or SVG for explanatory diagrams so text remains crisp and accessible.
- [x] Provide appropriate alt text, captions and diagram labels in German, French, Italian and English.
- [ ] Finish browser review on desktop and mobile in light and dark mode. Production build and internal-link checks pass; the browser connector was unavailable and concurrent native-browser use prevented completing visual review.

Validation: production build (212 pages, 15 sections), internal links, and all 20 affected localized pages checked for 68 responsive pictures, asset files, alt text, captions, loading hints, guide structure and preserved thesis addresses. New image checksum and all nine delivery files match the provenance record.
