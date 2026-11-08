#!/usr/bin/env python3
"""Encode checked-in hero originals; requires ImageMagick with AVIF/WebP support."""
import hashlib
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
WIDTHS = (600, 960, 1536)
FORMATS = {"avif": 50, "webp": 78, "jpg": 80}


def main():
    catalog = json.loads((ROOT / "visuals/catalog.json").read_text())
    destination = ROOT / "static/visuals"
    destination.mkdir(parents=True, exist_ok=True)
    records = []
    for item in catalog["images"]:
        slot = item["slot"]
        source = ROOT / "visuals/incoming" / f"{slot}.png"
        prompt = source.with_suffix(".txt")
        record = {
            "slot": slot,
            "generated_on": "2026-11-08",
            "tool": "OpenAI built-in image_gen",
            "source": str(source.relative_to(ROOT)),
            "source_sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
            "prompt_file": str(prompt.relative_to(ROOT)),
            "prompt": prompt.read_text().strip(),
            "outputs": [],
        }
        for width in WIDTHS:
            for extension, quality in FORMATS.items():
                output = destination / f"{slot}-{width}.{extension}"
                subprocess.run([
                    "magick", str(source), "-auto-orient", "-colorspace", "sRGB",
                    "-resize", f"{width}x>", "-strip", "-quality", str(quality),
                    str(output),
                ], check=True)
                record["outputs"].append({
                    "path": str(output.relative_to(ROOT)),
                    "width": width, "format": extension,
                    "quality": quality, "bytes": output.stat().st_size,
                })
        records.append(record)
        print(f"{slot}: " + ", ".join(
            f"{o['format']} {o['bytes'] / 1024:.0f} KiB"
            for o in record["outputs"] if o["width"] == 1536
        ), flush=True)
    (ROOT / "visuals/provenance.json").write_text(
        json.dumps({"images": records}, ensure_ascii=False, indent=2) + "\n"
    )


if __name__ == "__main__":
    main()
