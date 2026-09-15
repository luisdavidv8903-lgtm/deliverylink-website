# Google Business Profile Plan

**Status:** Planning only. Nothing in Google Business Profile has been changed — this document is a checklist for manual review, written from the website's code and the `DELIVERYLINK-GOVCON` source of truth. No GBP category names below are asserted to exist in Google's current category picker; each must be verified there directly before selecting it.

---

## Why this needs a decision, not just an update

DELIVERYLINK LLC now has two genuinely different service lines (Technology & Digital Services; Delivery & Logistics). A single Google Business Profile listing can only have one Primary Category, and Google's ranking/matching logic leans heavily on that one category. Before touching GBP at all, decide:

- **Option A — One listing, Technology as primary:** keep the existing listing's likely IT-consulting-oriented category as primary, add delivery-related categories as secondary. Simpler, but Delivery may struggle to rank for local "courier near me" searches against businesses whose primary category matches exactly.
- **Option B — One listing, Delivery as primary:** flips the above trade-off — likely better for the new, harder-to-rank-for local searches, at some cost to Technology's existing footing.
- **Option C — Two separate listings:** one for each division, each independently optimized. Most accurate long-term, but Google's guidelines restrict multiple listings for the same underlying business at the same address unless they're genuinely distinct in a way Google recognizes (different category, different name is *not* required, but the account needs a real justification) — this needs a read of Google's current guidelines before pursuing, not an assumption.

**This document doesn't pick one for you.** It's a decision for Luis, informed by which division needs local-search visibility more urgently.

---

## Checklist — review manually in the GBP dashboard

- [ ] **Primary Category** — confirm what's currently set. Decide per the options above. Do not select a Delivery-related category name from this document without confirming it exists exactly as named in Google's picker (e.g. search for "courier," "delivery," "logistics" inside GBP itself).
- [ ] **Secondary Categories** — once primary is decided, look for what other real categories Google offers for the *other* division (again, verify exact names in-app).
- [ ] **Service Area** — set to Palm Beach County; confirm which specific cities Google's service-area tool actually lets you list (it may offer a radius or a list of named places — use whichever the tool actually presents, not an assumed list).
- [ ] **Business Description** — must not restate the claims already removed from the website: no "SAM.gov Registered," no "Section 508 Compliant," no "MFMP Certified" (use "Registered Florida MFMP Vendor" if referencing it at all), no government past performance. Should mention both divisions if Option A/B is chosen for one listing.
- [ ] **Services** — populate with the real service list once finalized: Technology services from `/technology`, or Delivery services from `/delivery` (§8 of `DELIVERYLINK_WEB_EXPANSION_AUDIT.md` has the full reasoning on which delivery services are currently defensible to list).
- [ ] **Website** — confirm it points to the right URL for whichever listing this is (`/`, `/technology`, or `/delivery` — decide per the Option above).
- [ ] **Phone** — confirm it matches (561) 679-0314 exactly (NAP consistency with the website's `TrustBar`/footer).
- [ ] **Address visibility** — confirm whether the address is shown publicly or hidden (service-area business setting) — the website deliberately shows only city/state/ZIP, never a full street address; GBP should match that posture unless there's a reason to differ.
- [ ] **Photos** — real photos only, once available (a courier vehicle, real delivery/office work) — no stock photography, no AI-generated images presented as real.
- [ ] **Hours** — confirm current accuracy; do not let this document or the website's code invent hours that aren't actually set.
- [ ] **Review link** — generate and save once the profile is otherwise ready, for use with `DELIVERY_REVIEW_STRATEGY.md`.
- [ ] **Reviews** — see `DELIVERY_REVIEW_STRATEGY.md` for the acquisition plan; do not add anything here that isn't a real customer review.

---

## What NOT to do

- Do not add, remove, or guess at GBP categories from this document alone — every category name must be confirmed inside Google's own interface.
- Do not restate any of the four claims removed from the site in Phase 1 (SAM.gov Registered, Active SAM.gov Registration, MFMP Certified, Section 508 Compliant) anywhere in the GBP profile.
- Do not invent operating hours, service radius, or photos.
- Do not add reviews, ratings, or review counts anywhere that aren't genuinely from GBP itself.
