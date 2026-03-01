# Lishe Landing Page

This repository contains the current marketing landing page for Lishe by PlateAI.

It is a static frontend project built for two audiences:

- Nutrition professionals: the primary audience and primary conversion target
- Individuals: the secondary audience who should eventually be routed into the product flow cleanly

## Product intent

The site currently positions Lishe as:

- `Lishe Manager` for nutrition professionals
- `Lishe Planner` for individuals

The current conversion priority is clear:

- Most high-intent CTAs for nutrition professionals lead to `Book a Demo`
- Individuals have entry points such as `Individual? Start here`, `Start Free`, and `Start your journey`

Important product note:

- The professional journey is better defined than the individual journey
- The individual path still needs a cleaner destination and clearer messaging

## Current status

What the landing page does well now:

- Presents a clear professional-first value proposition
- Highlights `Lishe Manager` and `Lishe Planner` as separate product experiences
- Includes responsive layout behavior for desktop and mobile
- Includes English / Swahili translation support
- Uses a static no-build setup that is easy to edit directly

What is still unresolved:

- Individual users are not directed as clearly as nutrition professionals
- Footer legal links are placeholders
- There is no dedicated `Terms` page yet
- There is no dedicated `Privacy Policy` or general legal page yet

## Primary user flows

### Nutrition professionals

This is the main funnel today.

- Hero CTA: `Book a Demo`
- Top navigation CTA: `Book a Demo`
- Manager section CTA: `Book a Manager Demo`
- CTA strip: `Book a Demo`

Current expectation:

- Professionals book a demo through the Google Calendar link

### Individuals

This flow is present, but still needs cleanup.

Current entry points:

- `Individual? Start here`
- `Start Free`
- `Start your journey`

Current behavior:

- These links point to `https://plateai.app/onboard`

Recommended future behavior:

- Route individuals to the real login / onboarding / signup page once that experience is finalized
- Make the copy more explicit about what happens after click

## Project structure

- `index.html`
  Main landing page

- `callback.html`
  Callback request page

- `js/translations.js`
  Translation dictionary and language switch logic for English and Swahili

- `images/`
  All page assets including hero, planner, manager, logo, and favicon files

## Frontend stack

- HTML
- CSS
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts

There is no build pipeline here.

To preview locally:

1. Open `index.html` in the browser

## Editing guide for the next designer / frontend developer

### 1. Start with `index.html`

Most design, layout, and content work happens here.

Key areas:

- Navigation
- Hero
- Conditions strip
- As Seen In strip
- Lishe Manager section
- Workflow section
- Lishe Planner section
- CTA strip
- FAQ
- Footer

### 2. Keep the audience hierarchy intact

Unless product strategy changes, treat the page as:

- Professional-first
- Individual-secondary

That means:

- Do not weaken the `Book a Demo` path for professionals
- Improve the individual path without competing with the main professional conversion

### 3. Translation workflow

The page now uses `data-translate` and `data-translate-html` attributes.

If you add or change copy:

1. Add the key in `index.html` or `callback.html`
2. Add matching `en` and `sw` entries in `js/translations.js`
3. Preserve markup-sensitive copy with `data-translate-html` when needed

Examples of content that use HTML translation:

- Hero title
- CTA strip headline
- Footer copyright

Important:

- Do not add a page-level placeholder `setLanguage()` inside HTML files
- The real language switch logic lives in `js/translations.js`

### 4. Responsive work

The landing page is static, so responsive problems are usually solved directly in the CSS inside `index.html`.

Before changing layouts:

- Check desktop first
- Check tablet behavior
- Check mobile stacking order
- Check CTA spacing and image placement

### 5. Legal / footer links

The footer currently includes:

- `Privacy Policy`
- `Terms of Use`

These are placeholders and should not remain as `#` long term.

When legal pages are created:

1. Create the new HTML pages or real routes
2. Update footer links
3. Add translation keys if those pages need bilingual support

## Pending issues

These should be treated as the next known frontend tasks.

### High priority

- Redirect individuals to the real login / onboarding page when that flow is built
- Clarify the individual CTA copy so users know whether they are signing up, logging in, or starting onboarding
- Create a dedicated `Terms` page
- Create a dedicated `Privacy Policy` / legal page

### Medium priority

- Review whether all CTA labels are consistent across desktop and mobile
- Review whether the individual journey needs its own stronger section or clearer outcome
- Check whether translated Swahili copy needs final product-language review

### Low priority

- Expand README again once legal pages and the individual auth flow exist
- Document deployment / hosting details if this repo stops being local-only

## Content notes

Brand terms that should usually stay unchanged:

- `Lishe`
- `PlateAI`
- `Lishe Manager`
- `Lishe Planner`

Translate surrounding UI copy, but keep product names consistent unless brand direction changes.

## Known design/product tension

There is a structural tension in the page:

- The site is strongest when speaking to nutrition professionals
- But it also needs to support individual discovery

The next design pass should resolve that by making one of these explicit:

- A professional-first homepage with a lighter secondary path for individuals
- Or a clearer split between professional and individual landing experiences

At the moment, the page is still closer to option one.

## Recommended next implementation steps

1. Finalize the individual destination page or auth route
2. Replace the current individual CTAs with that real destination
3. Build and link `Terms` and `Privacy Policy`
4. Re-check the full English / Swahili experience after legal pages are added
