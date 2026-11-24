import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: a pickup line a vending machine would say
// to a passing human. The joke is the machine's own world turned into a
// compliment — buttons, coils, dispensing — with the twist landing on the
// last words: the human is the one snack the machine cannot dispense.
// "Spin" is the machine getting flustered, not a malfunction.
// The file holds exactly this line: no trailing newline, so the gate
// counts the line alone.
const LINE =
  "Every button you press makes my coils spin — you're the only snack I can't dispense.";

// No network, no randomness, no environment reads: the same bytes on every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
