# drivven.ca design system

This is the source of truth for drivven.ca styling. The site is built in Webflow. Custom styling comes from `tokens.css` and the bundles in `js/`, which jsDelivr serves pinned to a commit. Read this before adding CSS, and reuse a value listed here instead of inventing a new one.

## Voice and rules (owner)
- French first. Write "location-achat". Put no space before "?". Use no long dashes and as few hyphens as possible.
- Publish no rates, worked examples or per-car payments. Make no claims about specs, inspection, warranty or Carfax. Never mention the ACFC or the OPC.
- Say "peu importe votre statut". The only phone number is 819 300-0777. No cookie banner.
- The design reference is freshauto.ru: calm surfaces, big rounded cards, one strong accent.

## Colour
| Role | Value | Use |
|---|---|---|
| Ink | #132023 | Body text, dark cards, footer, focus outline on light backgrounds |
| Ink 80 | #132023cc | Secondary text on light backgrounds |
| Muted | #5a676b | Smallest secondary text: legal, notes, labels. At least 4.5:1 on white, #eef2f3, #f3f5f6 and #e5e8f2 |
| Soft green | #7a9b76 | Brand accent, illustrations, chips |
| Lime | #d4ff00 | Main call to action on dark backgrounds, focus outline on dark backgrounds. Never use it for text on white |
| Page | #e5e8f2 | Page background |
| Surface | #ffffff | Cards |
| Surface 2 | #f2f5f5 / #eef2f3 | Subtle fills inside cards, step cards, form fields |

Retired: #8a979b, #7c898d and #66757a failed contrast. dv-fix replaces them at runtime; do not use them in new code.

## Type
- Altone is the only typeface. Use weight 400 for body and 500 for headings and buttons. Open Sans, Inter and Manrope are still loaded by Webflow's font settings but are unused; remove them in Site settings > Fonts.
- h1: clamp(36px, 3.4vw, 50px); 30px or larger on phones. h2: clamp(28px, 2.5vw, 36px). Body: 16px. Small text: 13 to 15px, never under 12px.
- Line height 1.1 for headings, 1.5 for body. Headings use letter-spacing -0.02em.

## Shape and depth
- Radii: 24px for cards, 32px for large panels, 16px or 12px for inner tiles, 999px for buttons, chips and pills. Do not add new radii.
- Shadows are almost absent. Use only one: 0 8px 24px rgba(19,32,35,.08) on floating CTAs. Cards use no shadow.

## Components
- Buttons are 52px tall pills. Primary: lime on dark, or ink on light. Secondary: white with an ink label.
- Touch targets are at least 44px for controls and at least 24px for text links in lists.
- Focus outline: 2px solid, ink on light backgrounds and lime on dark ones, with a 2 to 4px offset.
- The hero slider (.rs7) pauses on hover and focus, under reduced motion and when off screen, and has a stop button.

## Accessibility
- Hidden proxy forms (.dv-form-proxy-hidden) must carry aria-hidden and keep every field at tabindex -1. dv-fix enforces this.
- One main landmark per page, a footer landmark on .drivven-footer, and the skip link #dvSkip.
- Each page keeps one h1 and does not skip heading levels.

## How CSS ships
- tokens.css holds the shared rules. js/dv-home.js and js/dv-site.js hold the page scripts and dv-fix. dvload (a Webflow site script) loads one bundle per page, with SRI.
- The selector prefixes (`:root:not(#_#_)`) and `!important` exist only to beat Webflow's own classes. New rules should target a dv- class at the lowest specificity that works.
