# Nomly Prototype — Quick Usability Testing Plan

## Objective
Find out whether someone unfamiliar with the app can complete the core food-ordering journey — browsing, ordering, tracking, and group ordering — without guidance, and surface friction points before the design moves to development.

## Method
- **Format:** Moderated, think-aloud. One moderator, one participant, screen-shared or side-by-side on a phone/laptop with `prototype.html` open.
- **Length:** ~15 minutes per session (5 tasks, ~2–3 min each, plus a short debrief).
- **Participants:** 5 is enough to surface most usability issues at this fidelity. Recruit people who roughly match the personas from the wireframing phase, so findings map back to who the app is actually for:
  - A busy-professional type (values speed, reordering)
  - A student/budget-conscious type (values price, deals, group ordering)
  - A parent/family type (values reliability, order tracking)
- **Facilitator setup:** Use the **Show hotspots** button beforehand, privately, to confirm every tap target you plan to reference in a task actually works — then turn it **off** before the participant starts, so it doesn't bias where they tap. Use **Restart** between participants to reset the cart and onboarding state.

## Tasks

Read each scenario aloud (or show it as text) and let the participant navigate without hints. Don't say "tap here" — if they're stuck for 30+ seconds, note it as a failure point and move on.

**Task 1 — Onboarding & sign-in**
> "You've just downloaded Nomly for the first time. Get to the point where you can start browsing food."
Success: reaches Home screen via either sign-up or guest path.

**Task 2 — Browse & order**
> "You're hungry for something healthy. Find something from Green Bowl Kitchen, add two items to your cart, and get to the point where you're about to pay."
Success: reaches Checkout with 2+ items in cart.

**Task 3 — Place an order**
> "Go ahead and place the order."
Success: reaches the Order Success screen; note whether they noticed the confirmation.

**Task 4 — Track the order**
> "Check on your order — has it left the restaurant yet?"
Success: reaches Live Tracking and can correctly state the current status.

**Task 5 — Start a group order**
> "Now imagine you're ordering with two friends and want everyone to add their own food. Try starting that."
Success: reaches the Group Order screen and understands what the invite link does.

## What to record per task
- ✅ / ⚠️ / ❌ — completed unaided / completed with hesitation / did not complete
- Time on task (rough, stopwatch is fine)
- Where they hesitated, misclicked, or said something revealing out loud
- Direct quotes — these are gold for the design review

## Closing questions (after all 5 tasks)
1. On a scale of 1–7, how easy or difficult was that overall? *(Single Ease Question)*
2. Was there any point where you weren't sure what would happen if you tapped something?
3. What, if anything, would you change first?
4. Anything that surprised you — good or bad?

## After each session
Log everything in `feedback-log-template.md` **immediately**, while it's fresh — memory of "which task" fades fast across back-to-back sessions.
