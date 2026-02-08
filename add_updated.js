const fs = require("fs");
const path = require("path");
const dir = "/Users/zara/Development/github.com/zukunft-ch/die-zukunft.ch/content";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".md")).sort();
files.forEach(fname => {
  const fp = path.join(dir, fname);
  let content = fs.readFileSync(fp, "utf8");
  const parts = content.split("+++");
  if (parts.length >= 3 && parts[1].includes("updated =")) {
    console.log("SKIP " + fname);
    return;
  }
  const lines = content.split(String.fromCharCode(10));
  const newLines = [];
  let inserted = false;
  lines.forEach(line => {
    newLines.push(line);
    if (!inserted && line.startsWith("description =")) {
      newLines.push("updated = 2026-02-08");
      inserted = true;
    }
  });
  if (inserted) {
    fs.writeFileSync(fp, newLines.join(String.fromCharCode(10)));
    console.log("OK " + fname);
  } else {
    console.log("WARN " + fname);
  }
});
console.log("DONE");
