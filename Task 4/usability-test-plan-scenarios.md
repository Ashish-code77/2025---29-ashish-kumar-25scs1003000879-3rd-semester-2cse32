# Nomly — Usability Test Plan & Scenarios

## Purpose
Evaluate whether a first-time user can complete the core Nomly journeys unaided, using the working clickable prototype from the Interactive Prototyping task. This plan defines the method, tasks, and metrics used in the study documented in `walkthrough-sessions.md` and summarized in the final report.

## Method used for this round
**Persona-based cognitive walkthrough (heuristic evaluation).** Live participant recruitment wasn't available in this environment, so each task was walked through once per persona, evaluating the interaction against standard usability heuristics (Nielsen's 10, plus Apple HIG for touch targets) rather than collecting live human reactions.

This is a legitimate discount-usability substitute, but it is **not** a replacement for testing with real people — it can't surface unscripted confusion, wording problems, or reactions the evaluator didn't anticipate. Section 5 of the final report spells out exactly what a live round would add. If real participants become available, reuse the tasks and metrics below unchanged.

## Participants (5)
Matched loosely to the personas defined during wireframing, plus two additions for broader coverage:

| Persona | Profile | Why they're in this round |
|---|---|---|
| Marcus Chen | Busy professional, orders on a lunch break, wants speed | Tests whether the fastest path is actually fast |
| Maya Patel | University student, price-conscious, orders with roommates | Tests promo codes and group ordering |
| Sarah Jenkins | Busy parent, values reliability and order tracking | Tests trust signals during live tracking |
| David Osei *(new)* | Retired, moderate tech comfort, methodical | Tests discoverability and tap-target forgiveness |
| Priya Anand *(new)* | Rideshare driver, orders frequently between jobs, very fast with apps | Tests the experience for a power user moving quickly |

## Tasks & scenarios
Same five tasks used in the Interactive Prototyping round, carried forward so results are comparable:

1. **Onboarding & sign-in** — get from first launch to the Home screen.
2. **Browse & order** — find something from Green Bowl Kitchen, add two items, reach Checkout.
3. **Place an order** — complete checkout.
4. **Track the order** — check delivery status.
5. **Start a group order** — begin a group order for three people.

## Metrics captured
- **Task success rate** — completed unaided / completed with hesitation / not completed
- **Time on task** — seconds from task start to the success screen
- **Errors / hesitations** — misclicks, dead ends, moments of visible confusion
- **Single Ease Question (SEQ)** — 1–7 self-rating of difficulty, collected once per participant after all tasks
- **Verbatim reactions** — anything said in the moment, positive or negative

## What this round does not cover
- Wording/comprehension testing (would need real reading, not walkthrough judgment)
- Emotional response and trust — whether the app *feels* trustworthy is hard to simulate
- Accessibility with assistive technology (screen reader, switch control) — needs a real AT user
- Performance on an actual device/network, not a desktop browser
