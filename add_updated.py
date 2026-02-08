#!/usr/bin/env python3
import glob, os
content_dir = "/Users/zara/Development/github.com/zukunft-ch/die-zukunft.ch/content"
files = sorted(glob.glob(os.path.join(content_dir, "*.md")))
for f in files:
    with open(f, "r") as fh:
        content = fh.read()
    parts = content.split("+++")
    if len(parts) >= 3 and "updated =" in parts[1]:
        print("SKIP " + os.path.basename(f))
        continue
    lines = content.split(chr(10))
    new_lines = []
    inserted = False
    for line in lines:
        new_lines.append(line)
        if not inserted and line.startswith("description ="):
            new_lines.append("updated = 2026-02-08")
            inserted = True
    if inserted:
        with open(f, "w") as fh:
            fh.write(chr(10).join(new_lines))
        print("OK " + os.path.basename(f))
    else:
        print("WARN " + os.path.basename(f))
print("DONE")
