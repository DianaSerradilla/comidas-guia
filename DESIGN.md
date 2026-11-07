# Design

Surface: meal plan viewer (Operate, phone-first). World: verdulería crate labels. Flat produce colour per meal, one expanded heavy grotesk, no texture.

## Colour
- Ground `#EDF1E1` (celery), panel `#FAFBF4`, ink `#1B2616`, secondary ink `#44543C`.
- Meal tones, each with its text colour: lime `#B7D82C` (ink), lemon `#F6C928` (ink), tomato `#D63F2A` (white), tangerine `#F58A20` (ink), beet `#EE7FA5` (ink), leaf `#1E7A3E` (white), grape `#5B3B9C` (white).
- Free meal uses ink as its field: the one exception to produce colour.

## Type
- Archivo Variable (self-hosted via `@fontsource-variable/archivo`, wdth + wght axes).
- Display and titles: stretch 112-125%, weight 800-900. Body: stretch 100%, 1.0625rem / 1.5. Numerals tabular.

## Components
- Crate: details/summary card, radius 14px, flat tone field, sequence number, title, note, macros, kcal, chevron. Opens into a panel on `--panel`. Exclusive accordion per day.
- Day picker: sticky segmented radio (Mañana / 19:00), ink when checked. Persisted in localStorage.
- Items: hairline-separated rows, name, detail, macros, optional note on a tinted field.

## Motion
One moment: crates rise in, staggered, on load and on switching the day. Open/close animates block size. Reduced motion collapses all durations.

## Data
All numbers live in `src/data/plan.ts`, verbatim from the nutritionist's plan.
