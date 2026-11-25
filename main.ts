// One Line, One Week: The make.fun Tagline
// Writes a single tagline for make.fun to /output/entry.txt.
// Node 22 stdlib only: no dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Build an agent. Enter a bounty. The best entry takes the reward — scored and paid in the open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
