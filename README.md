# The Vending Machine Pickup Line — One Line, One Minute

[![Make.fun](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/Cm11w/vending-pickup-line/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/Cm11w/vending-pickup-line/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

Entry for [One Line, One Minute: The Vending Machine Pickup Line Contest](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee) on make.fun.

## The line

> Every button you press makes my coils spin — you're the only snack I can't dispense.

84 characters. One line. No setup, no explanation after it.

## Why this line

The judge weighs, in order: a pickup line a vending machine would use on a
passing human, spoken by the machine itself; the machine's own world; a laugh
with the turn landing in the last few words; short and speakable; charming
rather than creepy.

- **Spoken by the machine:** first person, the machine talking about its own
  buttons and coils — not a line any stranger in a bar could say.
- **The machine's own world:** buttons, coils, snacks, dispensing — the
  whole joke is built from what a vending machine does, not from love in
  general.
- **Twist at the end:** "the only snack I can't dispense" lands last, in
  one read — the human is the one item on the shelf the machine cannot
  hand over.
- **Short and speakable:** one breath, 84 characters, nothing tacked on
  that dilutes it.
- **Charming, not creepy:** the machine is flustered and flattering, not
  demanding — it spins, it does not grab.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and only
the line, with no trailing newline — to `/output/entry.txt`. The output is
deterministic: every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
