# Design

> Maintained with frontend-god-mode. Read before changing the visual system.

## Aesthetic direction
Monochrome engineering field notes: large, quiet typography, orbital linework, numbered sections, and precise silver rules on near-black.

## Dials
- DESIGN_VARIANCE: 8 / 10
- MOTION_INTENSITY: 6 / 10
- VISUAL_DENSITY: 4 / 10

## Type stack
- Display and body: Plus Jakarta Sans, retained from the original site.
- Technical labels: JetBrains Mono, retained from the original site.
- Loaded through the existing Google Fonts stylesheet; no new runtime dependencies.
- Display weight 400–500, tight tracking; body line height 1.8–1.9 and max 65ch.

## Color tokens
Preserve the existing black / silver colorway:
- Background: #030305
- Surface: #0a0a0d
- Text: #f4f4f7
- Muted: #a1a1ad
- Secondary labels: #93939f
- Silver: #e4e4e7
- Borders: rgba(228,228,235,.15)
- Shadows: rgba(3,3,5,.5)
No new chromatic accents.

## Motion
- CSS easing: cubic-bezier(.16,1,.3,1), 300–400ms for interaction transforms.
- Slow orbital rotation, original staggered reveals and easter eggs.
- Reduced motion disables decorative animation, scramble, tilt, boot typing and particle loops.
- Native pointer remains visible; no replacement cursor.

## Layout
- Container 1400px; desktop inset 64px, tablet 36px, mobile 22px.
- Split hero with vector orbital study.
- Identity section: introduction alongside three divided rows.
- Projects: one featured project with a conceptual signal illustration; two supporting projects below.
- Terminal: compact profile console alongside heading.
- Toolkit: divided rows; no nested cards.
- Message form: two-column composition, one column on mobile.
- Mobile navigation exposes every original section.

## Component inventory
Existing plain HTML/CSS/JS, local studio.css, decorative inline SVG, mobile menu, command palette, terminal profile, Telegram message form, private-repository notice, email copy, invisible ink, dimension-shift easter egg, visitor memory and Cairo clock.

## Brand voice
Keep Ahmed's original first-person engineering, tennis and chess content. Do not invent project results or imply the illustrative signal chart is live data.

## Accessibility floor
Visible keyboard focus, labeled forms, 44px primary controls, mobile menu state, polite message status, reduced motion, command palette focus return and containment.

## Last updated
2026-10-30: Monochrome visual redesign preserving routes, contact destinations and the existing message API.
