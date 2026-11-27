# Agrarium — React + TypeScript rebuild

A high-fidelity, front-end rebuild of the **Agrarium — Agriculture & Organic Food** WordPress
theme demo, written from scratch in **React 18 + TypeScript + Vite** (no WordPress, no Elementor,
no jQuery).

> Reference: <https://demo.artureanec.com/themes/agrarium/intro/#demo> → the showcased site is
> `https://demo.artureanec.com/themes/agrarium/` (home page **01. Agriculture**). Theme by
> [Arturianec](https://demo.artureanec.com/). This repository is a study/reference clone; the
> design, copy and photography remain the property of their respective owners.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173  (binds 0.0.0.0, works behind the sandbox preview proxy)
npm run build    # type-check + production bundle into dist/
npm run preview  # serve the production build on :4173
```

## How the reference was reverse-engineered

The demo is a ThemeForest-style showcase, so the real site sits behind a demo-picker
(`/intro/#demo`). Everything below was extracted from the live install rather than eyeballed:

| What | Source | Used for |
| --- | --- | --- |
| Rendered copy + section order | `wp-json/wp/v2/pages/158` + rendered page | exact strings, section sequence |
| Per-widget metrics | `wp-content/uploads/elementor/css/post-158.css` | container widths (1170 / 1574), section paddings (150px, 140px, 130px), headings (45px/50px, −1.35px), slider height (978px), image radii (3px 3px 3px 80px), banner height (482px) |
| Palette | screenshot sampling + Elementor CSS | `#1F1E17` ink, `#EECE38` accent, `#F0E6D7` cream, `#F9F6EF` off-white, `#555555` body, `#F2F5FA` hairlines |
| Fonts | theme CSS | `Manrope` (body/headings) + custom `Herbarium` script face |
| Imagery | theme media library (`wp-json/wp/v2/media`) | photographic assets |

## Design tokens

All of it lives in `src/styles/tokens.css` so the clone can be re-themed in one place:

```css
--c-dark: #1f1e17;   --c-accent: #eece38;  --c-cream: #f0e6d7;
--c-offwhite: #f9f6ef;  --c-heading: #2b2b2b;  --c-text: #555555;
--container: 1170px;    --container-wide: 1574px;
--font-body: 'Manrope'; --font-script: 'Kaushan Script';
```

### Fonts

* **Manrope** — the real theme face, installed from Fontsource (`@fontsource/manrope`, 400/500/700/800)
  and self-hosted, so no Google Fonts request is made at runtime.
* **Herbarium** — the theme's commercial script face used for the big “Harvest” / “Agrarium”
  display type, section eyebrows and banner titles. It is not redistributable, so it is substituted
  by **Kaushan Script** (`@fontsource/kaushan-script`), the closest metric match among open fonts.
  Swap it in `src/styles/tokens.css` (`--font-script`) once you have the original `woff2`.

### Imagery

The sandbox that produced this build had **no binary egress** (text/HTTP responses only), so photos
are referenced from the theme's own CDN (`8ded8880.rocketcdn.me`) with
`referrerPolicy="no-referrer"` and an inline SVG fallback for any URL that 404s — no broken-image
icons, ever. To make the build fully self-contained, run this from a machine with internet access:

```bash
npm run assets:local   # mirrors every URL into public/media/ and flips useLocalMedia = true
```

`<Img />` (`src/components/ui.tsx`) is the single place that handles loading strategy, referrer
policy and failure fallback.

## Page composition

`src/App.tsx` renders the same section order as the demo's DOM:

1. `TopBar` — location / phone / email, socials, “Get In Touch”
2. `Header` — sticky, logo, 6-item nav with dropdown, search / wishlist / cart, mobile drawer
3. `Hero` — 978px slider, 3 slides (script “Harvest”, “Organic Vegetables”, “We Grow the Best
   Quality Products”), numbered pagination, scroll cue, video lightbox
4. `Clients` — 6 desaturated partner logos, hairline rule, hover to full colour
5. `About` — overlapping image collage with 80px radius, script eyebrow, 45px heading, signature
6. `GiantBanner` — full-bleed field photo with 300px script wordmark
7. `Banners` — 4-up 482px category tiles (1574px container)
8. `DarkSection` — `#1F1E17` services block, staggered imagery, 4 circular icon features
9. `Benefits` — three icon cards + intro column
10. `BenefitsTwo` — checklist + photo with animated “45 years of experience” badge
11. `Products` — animated counters (9k / 23+) and an 8-card product grid
12. `BestProducts` — 6 illustrated vegetable cards
13. `Gallery` — 6-tile hover gallery on cream
14. `Testimonials` — auto-rotating quote slider with dots
15. `Blog` — 3 post cards with category, date and author meta
16. `Promos` — two image-overlay call-outs
17. `Partners` — trusted-by strip
18. `Contacts` — details + validated, accessible contact form
19. `Footer` — brand, link columns, newsletter, bottom bar + back-to-top

Every hover, reveal, counter and slider transition is hand-written CSS/`IntersectionObserver` — no
animation library — and everything respects `prefers-reduced-motion`.

## Project structure

```
src/
  App.tsx                 page composition
  components/
    Header.tsx            top bar, sticky header, mobile drawer
    Hero.tsx              slider + video lightbox
    Icon.tsx              inline SVG icon set (no icon font)
    ui.tsx                Img, Reveal, Button, SectionHeading, Counter, Socials
    sections/
      Story.tsx           Clients · About · GiantBanner · Banners
      Services.tsx        DarkSection · Benefits · BenefitsTwo
      Shop.tsx            Products · BestProducts · Gallery
      Social.tsx          Testimonials · Blog · Promos · Partners
      ContactFooter.tsx   Contacts · Footer · ScrollTop
  data/
    assets.ts             every CDN asset URL + fallback placeholder
    content.ts            all copy, nav, products, posts, testimonials
  styles/
    tokens.css            design tokens
    base.css              reset + layout primitives
    components.css        header, hero, buttons, headings, motion
    sections.css          all page sections + responsive rules
tools/download-assets.mjs mirror the CDN media for a fully offline build
```

## Responsive behaviour

Breakpoints mirror the theme: `1199px` (tablet landscape), `991px` (tablet — nav collapses to the
drawer, two-column grids stack), `767px` (phone — single column, type scale down, 70px section
padding). The hero keeps its 978px desktop height and degrades to a content-driven height below
991px.

## What is intentionally *not* here

* WordPress / Elementor / WooCommerce runtime: no cart, checkout, wishlist or account pages.
  Cart/wishlist icons and product links are visual affordances that scroll to the shop sections.
* Inner pages of the demo (About, Services, Blog post, Shop…) — this build covers the showcase
  home page; the nav links resolve to the matching in-page sections.
* The original promotional MP4. The hero lightbox shows the poster plus a note; drop a video into
  `public/media/` and wire it in `Hero.tsx` to enable playback.
* Server-side form handlers — the contact and newsletter forms validate and confirm locally.
