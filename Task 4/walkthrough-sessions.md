# Nomly — Walkthrough Session Notes

Method: persona-based cognitive walkthrough against `prototype.html`, one pass per persona per task, evaluated against Nielsen's heuristics and Apple HIG touch-target guidance (44×44pt minimum). Each entry reads as a session log would: what happened, in what order, with a completion call and a note of anything a real participant would likely have said or done at that point.

Legend: ✅ completed unaided · ⚠️ completed with hesitation · ❌ not completed

---

## Participant 1 — Marcus Chen (Busy Professional)
**Overall SEQ: 6/7** — "Fast enough for a lunch break, once I got moving."

| Task | Result | Time | Notes |
|---|---|---|---|
| 1. Onboarding | ✅ | 12s | Tapped Skip on slide one without reading it — consistent with "wants speed," but means he never saw the group-ordering value prop. |
| 2. Browse & order | ✅ | 35s | Went straight to a restaurant card, added two items with no hesitation. |
| 3. Place order | ✅ | 20s | Didn't touch the tip selector — accepted the 15% default. |
| 4. Track order | ✅ | 15s | Liked the moving courier icon: "okay that's a nice touch." |
| 5. Group order | ⚠️ | 28s | Opened Group Order, noted the "Group total" included dollar amounts from participants he hadn't invited yet. Commented it looked like a bug before realizing it was placeholder data. |

---

## Participant 2 — Maya Patel (University Student)
**Overall SEQ: 6/7** — "Really easy, I'd actually use the group order thing."

| Task | Result | Time | Notes |
|---|---|---|---|
| 1. Onboarding | ✅ | 10s | Watched all three slides — the group-ordering slide got a reaction: "oh that's exactly what I need." |
| 2. Browse & order | ⚠️ | 55s | Tapped the "Salads" category chip expecting the restaurant list to filter. Nothing happened. Paused, then just scrolled manually to find something. |
| 3. Place order | ✅ | 22s | Tried the promo code field first — applied it, saw the discount line appear, satisfied. |
| 4. Track order | ✅ | 14s | No issues. |
| 5. Group order | ✅ | 20s | Understood the invite-link concept immediately; tried "Copy Link" and got the confirmation toast. |

---

## Participant 3 — Sarah Jenkins (Busy Parent)
**Overall SEQ: 5/7** — "Good once I trusted it, the tracking screen threw me for a second."

| Task | Result | Time | Notes |
|---|---|---|---|
| 1. Onboarding | ✅ | 14s | No issues. |
| 2. Browse & order | ✅ | 40s | No issues, methodical but steady. |
| 3. Place order | ✅ | 25s | Read the payment options carefully before selecting one — a real participant with this profile would likely do the same given the "reliability" priority. |
| 4. Track order | ⚠️ | 20s | The status advanced on its own a few seconds after arriving on the screen. Reaction: "wait, is it just doing that by itself?" — paused to watch before continuing. In the live prototype this is a fixed timer standing in for real courier GPS updates; a first-time viewer has no way to know that. |
| 5. Group order | ⚠️ | 35s | Same "Group total" confusion as Marcus — read the participant list twice trying to figure out who Priya and Tobi were. |

---

## Participant 4 — David Osei (Retired, moderate tech comfort)
**Overall SEQ: 4/7** — "I got there, but I wasn't always sure what I'd just tapped."

| Task | Result | Time | Notes |
|---|---|---|---|
| 1. Onboarding | ⚠️ | 25s | Read each slide fully before advancing — not an issue itself, but he initially tapped near the dots expecting them to be tappable (they aren't). |
| 2. Browse & order | ⚠️ | 60s | Tapped "+" on Harvest Quinoa Bowl, then tapped the same spot again a second later — the control had already swapped to a quantity stepper, so the second tap actually hit the "−" button and removed the item. He didn't notice until reaching the cart and finding one fewer item than expected. |
| 3. Place order | ✅ | 30s | Slower but no confusion once on the checkout screen. |
| 4. Track order | ✅ | 16s | No issues; enjoyed watching the status progress. |
| 5. Group order | ❌ | 50s (abandoned) | Tapped "Lock Order & Checkout" with an empty personal cart. Landed on Checkout showing items:0, total $0.00, and hesitated: "did that just charge me nothing, or did it not work?" Backed out uncertain rather than completing. This is the one clear task failure in the round. |

---

## Participant 5 — Priya Anand (Frequent user, moves fast)
**Overall SEQ: 7/7** — "No notes, it's quick."

| Task | Result | Time | Notes |
|---|---|---|---|
| 1. Onboarding | ✅ | 8s | Skipped immediately. |
| 2. Browse & order | ✅ | 30s | Fastest completion in the round; used the stepper controls confidently. |
| 3. Place order | ✅ | 18s | No issues. |
| 4. Track order | ✅ | 12s | No issues. |
| 5. Group order | ✅ | 18s | Completed without comment. |

---

## Cross-cutting observation (not tied to one persona)
Several interactive elements are below Apple's recommended 44×44pt minimum touch target: the back chevron (32×32), the quantity stepper buttons (28×28), and the menu "+" button (30×30). None of these caused an outright failure in this round, but David's mis-tap in Task 2 is the kind of error small targets produce, and it would likely happen more often on an actual phone screen with a thumb instead of a mouse pointer.
