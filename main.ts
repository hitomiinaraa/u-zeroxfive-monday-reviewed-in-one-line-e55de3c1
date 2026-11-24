// Revision pass: entry unchanged from the build tournament winner; NOTES.md added alongside.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Monday walked in like it owned the place, spilled my coffee, and scheduled a meeting about the spill.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
