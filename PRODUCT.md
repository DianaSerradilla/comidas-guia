# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Astro (user-requested). Static site, no backend.

## Users
One person (the owner), following a nutritionist-prescribed plan. Opens it on a phone, mostly one-handed, at the moment of eating or assembling a plate, and needs the answer in seconds. (Device: confirmed. Other facts below are taken from the supplied plan.)

## Product Purpose
A fast, simple viewer for the nutritionist's meal plan: what to eat in each meal, with exact quantities and macros, depending on whether training is in the morning or at 19:00. Success: from opening the page to seeing today's meal options takes one tap or less.

## Positioning
A personal tool built around one specific prescribed plan (7 blocks, fixed daily total), not a generic calorie tracker. It does not log or count; it shows what the plan already decided.

## Operating Context
- Daily total is always about 1,700 kcal, 141 g protein, 119 g carbs, 72 g fat, regardless of training time.
- Two day layouts. Morning training: pre-workout express, breakfast, lunch with carbs, afternoon snack, dinner without carbs, dessert. 19:00 training: breakfast, lunch without carbs, afternoon snack/pre-workout, dinner with carbs, dessert.
- Seven blocks hold the options: 1 pre-workout express, 2 breakfast, 3 meal with carbs, 4 afternoon snack, 5 meal without carbs, 6 fixed dessert, 7 cheat-meal rule (2 per week; replaces block 3 plus block 6).
- Some meals are built in steps (protein, carb, vegetables, fat). Lentils rule: choosing lentils lowers chicken to 140 g. Bife de chorizo: max 3 per week.
- Content is in Spanish (Argentina), with Argentine brand names.

## Capabilities and Constraints
- Content is the nutritionist's plan, supplied by the user; never alter quantities or macros.
- Language of UI copy: Spanish (user's own language, Argentine usage), because this is a personal tool for a Spanish speaker.
- Health information is sensitive: no diagnosis, no advice beyond the supplied plan.
- Undecided: hosting/deploy, offline/PWA use.

## Evidence on Hand
Full plan text supplied in chat (blocks 1-7 with macros). No photos, no logo, no brand assets.

## Product Principles
1. Answer first: the day's meals are visible before any explanation.
2. Quantities are the product; they must be readable at a glance.
3. Never recompute or reword the nutritionist's numbers.
4. Zero setup per visit: it remembers the training-time choice.

## Accessibility & Inclusion
Readable one-handed on a phone, legible type sizes, sufficient contrast, tap targets of at least 44 px.
