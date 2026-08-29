# Nomly — Feedback & Findings Log (Completed)

One row per issue, sourced from `walkthrough-sessions.md`.

| # | Participant(s) | Task | Screen | What happened | Severity | Quote / evidence |
|---|---|---|---|---|---|---|
| 1 | David | Task 2 — Browse & order | Restaurant Detail | The "+" add button swaps in place to a quantity stepper; a second tap in the same spot hits "−" instead and silently removes the item. | **High** | "I didn't notice until I got to the cart and there was one less thing than I expected." |
| 2 | David | Task 5 — Group order | Group Order → Checkout | "Lock Order & Checkout" navigates to Checkout even with an empty personal cart, landing on a $0.00 total with no explanation. Participant abandoned the task uncertain whether it had "worked." | **High** | "Did that just charge me nothing, or did it not work?" |
| 3 | Cross-cutting | All | Back chevron, steppers, "+" button | Several tap targets (28–32px) sit below Apple's 44×44pt minimum recommended touch target, increasing mis-tap risk on an actual phone. | **High** | Heuristic finding — Apple HIG touch target guidance |
| 4 | Maya | Task 2 — Browse & order | Home | Category chips (Pizza, Sushi, etc.) look tappable and toggle a selected state, but don't filter the restaurant list. | **Medium** | Paused after tapping "Salads," then scrolled manually. |
| 5 | Marcus, Sarah | Task 5 — Group order | Group Order | "Group total" shows dollar amounts from mock participants before the user has actually invited anyone, reading as a bug rather than sample data. | **Medium** | "That looked like a bug before I realized it was placeholder data." |
| 6 | Sarah | Task 4 — Track order | Live Tracking | Delivery status advances on its own a few seconds after arrival, with nothing on screen explaining that it's a simulated timer rather than a real update. | **Medium** | "Wait, is it just doing that by itself?" |
| 7 | David | Task 1 — Onboarding | Onboarding | The carousel dot indicators look tappable (common pattern elsewhere) but aren't interactive. | **Low** | Attempted tap on inactive dots, self-corrected. |
| 8 | Maya (positive), Marcus (missed it) | Task 1 — Onboarding | Onboarding | "Skip" lets a user bypass all three slides, including the group-ordering slide — which was the single most persuasive screen for the student persona. | **Low** | Marcus skipped immediately and never saw it; Maya watched it and called it out unprompted. |

## Synthesis

**Top 3 recurring / highest-impact issues**
1. The empty-cart "Lock Order & Checkout" path (#2) — the only outright task failure in the round, and the kind of ambiguity ("did I just get charged?") that erodes trust fast.
2. Small tap targets (#3) — didn't fail a task here, but it's a systemic risk across nearly every screen, not a one-off.
3. The add-button/stepper swap (#1) — a real data-loss bug pattern (silent item removal), not just friction.

**Quick wins** (small change, real impact — do before next round)
- Disable/hide "Lock Order & Checkout" when the personal cart is empty, or route to Cart first instead of Checkout.
- Bump the stepper, add button, and back chevron to at least 44×44pt hit areas (the visible icon can stay the same size — just pad the tappable zone).
- Add a one-line label under the tracking status ("Simulated for demo" or, in production, tie it to real courier events) so the auto-advance doesn't read as a glitch.

**Bigger rethinks** (needs a design discussion)
- Either make the category chips actually filter, or restyle them so they don't imply filtering (e.g., as a horizontal "browse by" link list instead of a toggle chip).
- Group Order needs real state: participant totals should reflect actual invitees and their actual carts, not static placeholder data, before this screen goes further than a prototype.

**What worked well — keep these**
- The floating cart bar and quantity stepper pattern were fast and intuitive for 4 of 5 participants.
- The live tracking screen's moving courier icon got a positive, unprompted reaction from two participants.
- The promo code flow (enter code → see discount line appear) was immediately understood.
