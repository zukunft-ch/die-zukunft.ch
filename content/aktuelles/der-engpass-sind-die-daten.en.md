+++
title = "The Bottleneck Is Data, and Europe Is Sitting on It"
description = "The AI debate is about compute. The real bottleneck is high-quality, rights-clear data — and Europe holds more of it than anyone. Using it is a question of coordination."
date = 2026-06-30
template = "page.html"

[extra]
og_image = "og/aktuelles/der-engpass-sind-die-daten.en.png"
+++

The public debate about who leads in artificial intelligence is almost entirely a debate about hardware. Who has the most accelerators, who controls the fabs, whose export controls bite whose supply chain. That debate is real. It is also, increasingly, looking in the wrong place.

The people running the largest AI labs say so themselves. In late 2024, Ilya Sutskever said that pre-training "as we know it" would end — for the blunt reason that compute keeps growing but data does not, "because we have but one internet." He called data "the fossil fuel of AI." If the scarce input is high-quality data, then the real question becomes: who holds the data that has not yet been consumed? The answer, for a large and very specific category, is Europe.

---

## The raw material is running short

The most careful public estimate comes from Epoch AI: roughly 300 trillion tokens of publicly available, human-generated text, fully used up at some point between 2026 and 2032. That is not a prediction of a wall. It is a prediction that the easy phase is ending — the one where you gained capability mostly by pointing a larger crawler at a larger share of the same web.

The raw web is vast, but most of it is not worth training on. Between petabytes of HTML and a few tens of trillions of clean tokens is the whole game. Quantity was never the bottleneck. Clean, relevant, rights-clear quantity is.

How scarce that raw material has become is shown by the behaviour of the largest labs. They took legal and reputational risk to get more text — up to billion-dollar settlements and the use of shadow libraries. When a company with practically unlimited access to the open web takes that kind of risk, the text has become the scarce input.

---

## What Europe — and Switzerland — hold

This is where the map flips. The text the crawlers cannot reach, because it was never digitized or never made public, is disproportionately European — and disproportionately the high-quality kind. Europe printed, archived, and catalogued for five centuries, across two dozen living languages, and for the most part never put the result on the open web.

The cleanest example is in Zurich. The Neue Zürcher Zeitung digitized its entire print run back to its first edition in 1780, around 1.9 million pages. It is one of the most complete continuous records of European public life in machine-readable form. Yet free access stops at 1914. Everything after — that is, exactly the century that shaped modern Europe — is reserved for paying customers. That is one newspaper, in one city, in one of the smaller countries of Europe. Multiply that pattern across every national paper, every learned society, every specialist journal on the continent, and the size of the locked corpus comes into view.

That clean training data can be made from it is not hypothetical. In 2025 Harvard Library released, from its digitized collections, a 242-billion-token dataset with traceable provenance. A single university library. The European version of that move, carried out across the continent's libraries and archives, would yield a corpus with no equivalent anywhere else.

There is a second advantage the incumbents structurally cannot replicate: aligned multilingual text. The EU works in 24 official languages; decades of parliamentary and legal translation have produced parallel corpora that exist for almost no other language in the world. Switzerland, with its four national languages, knows this asset from its own administration. For the long tail of underrepresented European languages, this text is exactly what makes the difference between a usable model and a useless one.

---

## A coordination problem, not a technology problem

Why does this advantage lie fallow? Because it is fragmented, and the fragmentation is structural. A French library, a Swiss newspaper, a German learned society, an Italian state archive each hold a piece, each under a different legal regime, none with the mandate or budget to turn its holdings into training data. The technical problem has been solved for years. The hard problem is institutional, legal, and political.

The legal situation is double-edged. Europe has built the densest data-governance apparatus in the world — and so far protection has outrun enablement. But the tools are there. The 2019 copyright directive grants research organizations and cultural-heritage institutions a mandatory, non-waivable exception for text and data mining, on any work to which they have lawful access. And it is precisely those institutions that hold the locked corpus. It is the most underused lever in European AI policy.

---

## It is already starting

The proof of concept is done, by small teams on modest budgets. Common Corpus, assembled by the French company PleIAs, is at roughly 2.3 trillion tokens the largest fully open multilingual training corpus — built only from public-domain and openly licensed material, with per-document provenance. Alongside it, sovereign models have appeared in two years: Teuken from Germany, EuroLLM, Spain's ALIA, Latvia's TildeOpen, plus an open European web index. Read individually, these are regional projects. Read together, they are a continent rediscovering the same insight from a dozen directions. What is missing is the layer above them: a shared corpus, a coordinated digitization programme, a budget that treats the data as strategic infrastructure rather than as a collection of national research grants.

---

## What this means for our programme

The Future has argued from the start for digital sovereignty through open standards, transparency, and anti-lock-in. The data bottleneck is the reason for that, not a slogan. Concretely:

- **Fund digitization as infrastructure, not as a cultural grant.** Libraries, archives, and newspaper morgues are, for the AI substrate, what roads and grid capacity are for the economy. They depreciate while they sit in boxes.
- **Use the mining exception with legal certainty.** Route digitization and corpus-building through the institutions that hold the lawful access.
- **Keep the corpus and the index open.** A shared open corpus means every lab competes on models, not on data hoards. A proprietary corpus reproduces exactly the dependency the whole effort is meant to escape.
- **Bring Switzerland in.** Swiss libraries, archives, and the multilingual administrative record belong in the European data space — and tied to sovereign compute, operated under domestic law.

The goal is not to "win the AI race." That is the wrong frame. The realistic goal is sovereign capability: models that are better in our languages, trained on rights-clear data that survives an audit, and usable by regulated sectors that legally cannot run on a corpus of uncertain provenance. That is a niche the giants cannot easily contest — and it sits exactly where Europe's data advantage lies.

---

## Further reading

This note is the civilian translation of a sister article published today, 30 June 2026:

- *The Bottleneck Is Data, and Europe Is Sitting on It* on [raskell.io](https://raskell.io/articles/the-bottleneck-is-data-and-europe-is-sitting-on-it/) (engineer's perspective, with full sources)

Sources: [Epoch AI on the data limit](https://epoch.ai/publications/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data), [DSM Directive 2019/790](https://eur-lex.europa.eu/eli/dir/2019/790/oj), [Common Corpus (PleIAs)](https://huggingface.co/datasets/PleIAs/common_corpus), [NZZ archive](https://zeitungsarchiv.nzz.ch/), [Harvard Institutional Books](https://arxiv.org/pdf/2506.08300).
