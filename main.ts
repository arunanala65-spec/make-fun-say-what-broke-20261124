// Say What Actually Broke — make.fun entry
// Writes one line of honest, funny error copy to /output/entry.txt.
// The line names the real failure (the database is unreachable), tells the
// user their data is safe, and keeps the joke to a single readable line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Error 500: the database left for lunch without telling anyone. " +
  "Your data is safe — the query is just standing outside, knocking.";

// The gate requires 1–200 characters of non-whitespace text; refuse to
// write anything that would fail it instead of shipping a bad entry.
const text = ENTRY.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`Entry is ${text.length} characters; must be 1–200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`Wrote ${text.length} characters to /output/entry.txt`);
