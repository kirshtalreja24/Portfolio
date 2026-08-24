# Product Requirements Document
## "Friendly Neighborhood Engineer" — Superhero-Themed Developer Portfolio

**Version:** 1.0
**Reference:** spydyy-portfolio.vercel.app (screenshots-based reverse engineering)
**Owner:** Kirsh

---

## 1. Overview

A single-page, animation-heavy developer portfolio built around a superhero (Spider-Man) visual motif — mask/identity reveal, spiderweb decorations, and a "web-slinging" scroll narrative that ties every section together. The site is a personal brand statement as much as a resume: it needs to feel playful and confident, while still surfacing real technical signal (skills, project stack tags, resume download, contact form).

**Primary goal:** Get a recruiter/visitor to (a) understand who you are and what you're skilled in within 5 seconds of landing, (b) explore 2–4 real projects with tech context, and (c) either download the resume or send a message.

---

## 2. Important callout before you build

⚠️ **IP consideration:** The reference site uses actual Marvel/Sony Spider-Man imagery (movie stills, official suit renders). That's copyrighted character art — fine for a personal, non-commercial hobby deploy, but risky if you're linking this from a resume/LinkedIn to employers or if the site gets any real traffic/visibility, since Marvel actively protects this IP. Two safe paths:

| Path | Approach |
|---|---|
| **A — Safer** | Keep the *concept* (masked hero / secret identity reveal, web motifs, red-black-white palette) but commission or generate **original** illustrated artwork — a generic masked-hero silhouette, not Spider-Man specifically. |
| **B — As-is** | Use Spider-Man assets exactly like the reference, understanding it's a fan-tribute portfolio and carries some IP exposure. |

This PRD is written so either path works — just swap the asset source in Section 6.

---

## 3. Section-by-Section Breakdown

### 3.1 Navbar (sticky/fixed)
- Logo: wordmark "SUSHMITA." — first letter styled red, rest white/black depending on scroll state (transparent-on-hero → dark bg on scroll)
- Nav links: About / Skills / Projects / Contact (smooth-scroll anchors)
- Transitions from transparent-over-hero to solid dark background once scrolled

### 3.2 Hero Section
- Micro-label: "YOUR FRIENDLY NEIGHBORHOOD ENGINEER"
- Big italic headline: "SRI SUSHMITA." — bold condensed italic font, red drop-shadow/outline offset behind black text
- Two CTAs: primary solid red "EXPLORE PROJECTS" (scrolls to Projects), secondary dark "↓ SDE_RESUME.PDF" (triggers file download)
- Large hero visual: Spider-Man mask, full-bleed right side
- **Interaction:** hovering the masked face cross-fades/reveals the real photo underneath (identity reveal)
- Decorative spiderwebs in top-left and bottom-right corners, slowly rotating (idle looped animation)

### 3.3 Marquee / Ticker Strip
- Two rows of diagonally-skewed ribbon strips (alternating red and black), each scrolling horizontally in an infinite loop, opposite directions per row
- Content: skill/role keywords (FRONTEND DEVELOPMENT, UI/UX DESIGN, GSAP ANIMATIONS, FULL STACK ENGINEER…) interspersed with small circular face icons
- Sits directly under the navbar, overlapping the hero's bottom edge

### 3.4 About ("Behind the Mask")
- Eyebrow label: "🕸 BEHIND THE MASK"
- Heading: "SRI SUSHMITA."
- Two-paragraph bio (role, college, focus areas)
- "PRIMARY TECH STACK" pill row: React, Node.js, Express, PostgreSQL, MongoDB, Docker
- Right side: circular profile photo with a red ring border, connected to the top of the section by a single vertical red line ("web strand")
- Faint spiderweb watermark graphic in the background
- **Interaction:** on scroll-in, the vertical line draws itself downward and the circular photo "drops"/swings into place like it's dangling from a web thread — a scroll-triggered swing/drop entrance

### 3.5 Skills ("Technical Skills")
- Eyebrow: "ARSENAL & EXPERTISE"
- Heading: "TECHNICAL SKILLS."
- 2-column grid of skill cards: skill name, category label (Frontend/Backend/Tools/Languages), proficiency badge (Advanced/Proficient)
- Large decorative Spider-Man illustration hanging from a web thread on the right edge (idle sway animation)
- Same spiderweb watermark background

### 3.6 Projects ("Featured Works")
- Eyebrow: "FEATURED WORKS"
- Heading: "PROJECTS."
- 2×2 grid of project cards, each with: title + external-link icon, 2–3 line description, tech-stack tag pills
- **Interaction:** on hover, card lifts/highlights (border glow or shadow + slight scale)
- Full-body standing Spider-Man illustration anchored on the left side, part of the same continuous scroll-linked character that appeared in Skills/About (creates the "he's following you down the page" narrative)

### 3.7 Contact ("Get in Touch")
- Eyebrow: "GET IN TOUCH"
- Heading: "CONTACT."
- Card containing: Name field, Email field, Message textarea (placeholder copy in Spider-Man voice — "Peter Parker" / "peter@stark.com" / "Let's build something amazing together…"), solid red "SEND MESSAGE" button
- The Spider-Man character's boots are visible at the top of this section — confirming it's one continuous illustration/element that travels the full page height via scroll-linked positioning, not a per-section image

### 3.8 Footer (not captured in screenshots — plan for)
- Socials (GitHub/LinkedIn/Email), copyright line, maybe a "back to top" web-shooter button

---

## 4. Animation Specification

This is the hardest part of the rebuild — worth its own table so nothing gets lost.

| # | Element | Trigger | Effect | Likely implementation |
|---|---|---|---|---|
| 1 | Corner spiderwebs (Hero) | On load, looped | Slow continuous rotation | CSS `@keyframes` `rotate` on an SVG, `animation: spin 40s linear infinite` |
| 2 | Mask → face reveal | Hover (desktop) / tap (mobile) | Mask image fades out / clips away to reveal photo underneath | Two stacked `<img>`s, `clip-path` or `opacity` transition on `:hover`, or GSAP `.to()` for finer easing |
| 3 | Marquee ribbons | On load, looped, infinite | Two skewed rows scroll horizontally in opposite directions | GSAP `gsap.to(el, {xPercent: -50, repeat: -1, ease: "linear"})` on a duplicated content track (classic seamless-marquee pattern), wrapped in a `transform: skewY()` container |
| 4 | Web-strand drop / swing (Hero → About) | Scroll into view | Vertical line "draws" downward (stroke/height animates 0→100%), then the circular photo swings/drops into place with slight overshoot | GSAP **ScrollTrigger** + a `stagger`/`ease: "elastic.out"` or `back.out` on the photo; the line uses `scaleY` from `transform-origin: top` |
| 5 | Hanging/standing Spider-Man figure (About → Contact) | Scroll-linked, continuous | Character appears to persist and subtly reposition/sway as you scroll through multiple sections | Either (a) `position: sticky` character layer with per-section opacity/transform swaps, or (b) GSAP ScrollTrigger `scrub: true` animating one element's `y`/`x`/`rotation` tied directly to scroll progress |
| 6 | Project card hover | Hover | Lift + border/shadow highlight | Tailwind `hover:` utilities or GSAP `.to()` on `y`, `boxShadow` |
| 7 | Navbar background | Scroll past hero | Transparent → solid dark | ScrollTrigger toggling a class, or `IntersectionObserver` |

**Accessibility note to bake into the PRD:** wrap all decorative/looping animations in a `prefers-reduced-motion` media query check and pause/skip them for users who have that OS setting on — this is a real accessibility requirement, not optional polish.

---

## 5. Design System (inferred)

| Token | Value (approx.) |
|---|---|
| Primary red | `#B71C24` / crimson-red (buttons, accents, outline text) |
| Ink/black | `#0F0F10` (navbar, headline fill) |
| Background | `#FFFFFF` / off-white `#FAFAFA` |
| Neutral text | `#4B5563` (bio paragraphs) |
| Headline font | Bold, condensed, **italic** display sans (something like *Archivo Black* italic, *Anton*, or a custom condensed font) |
| Body font | Clean grotesk sans (Inter / Manrope / system-ui) |
| Signature effect | Red offset "shadow" duplicate behind black headline text (looks like a 2–3px red layer behind black text, comic-outline style) |
| Corner radius | Medium (8–12px) on cards, full-round on pills/badges |
| Spacing | Generous vertical rhythm (~120–160px section padding) |

---

## 6. Recommended Tech Stack

Based directly on the "Technical Skills" section of the reference site (which doubles as a stack confession) plus what the interactions demand:

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14/15 (App Router)** + React | SEO-friendly SSG for a portfolio, file-based routing, easy Vercel deploy |
| Language | **TypeScript** | Matches listed skill, safer refactors for a component-heavy build |
| Styling | **Tailwind CSS** | Confirmed skill; fast utility styling for cards/grids/pills |
| Animation | **GSAP** + **ScrollTrigger** plugin | Confirmed skill; only real option for scroll-scrubbed swing effects and seamless marquees at this quality |
| Icons | `lucide-react` | Lightweight, consistent with modern React portfolios |
| Fonts | `next/font` (self-hosted, no layout shift) | Performance |
| Contact form backend | **Resend** or **EmailJS** (client-only) or a Next.js API route + Nodemailer | You listed Node/Express — a tiny `/api/contact` route fits naturally |
| Hosting | **Vercel** | Matches the reference URL, zero-config Next.js deploys |
| Asset optimization | `next/image` | Hero art and character illustrations are heavy — needs lazy-loading and responsive sizes |
| Version control | Git + GitHub | Confirmed skill |
| Optional | Docker | Listed skill — not needed for a static/SSG portfolio, but you could containerize the dev environment if you want the badge to be "true," or skip it and remove that skill card |

**Not needed for this specific site** (even though they're on your skills list generally): Express/PostgreSQL/MongoDB — unless you want the contact form to persist messages to a DB instead of just emailing you. If you do, add a minimal Express + Postgres/Mongo route for storing submissions — otherwise keep it serverless-simple.

---

## 7. Suggested Component / File Structure

```
portfolio/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx                  # assembles all sections
│  └─ api/contact/route.ts      # POST handler → email service
├─ components/
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ MaskReveal.tsx             # hover-swap mask/photo
│  ├─ MarqueeStrip.tsx           # infinite skewed ticker
│  ├─ About.tsx
│  ├─ WebStrand.tsx              # scroll-drawn line + swing photo
│  ├─ Skills.tsx
│  ├─ SkillCard.tsx
│  ├─ Projects.tsx
│  ├─ ProjectCard.tsx
│  ├─ Contact.tsx
│  ├─ ContactForm.tsx
│  ├─ HeroCharacter.tsx          # the persistent scroll-linked figure
│  └─ SpiderwebSVG.tsx           # reusable rotating web decoration
├─ data/
│  ├─ skills.ts
│  └─ projects.ts
├─ lib/
│  └─ gsap.ts                    # registers ScrollTrigger once, SSR-safe
├─ public/
│  └─ assets/ (illustrations, mask, resume.pdf)
└─ styles/
   └─ globals.css
```

### Example data shape

```ts
// data/projects.ts
export const projects = [
  {
    title: "Multi-Tenant SaaS Platform",
    description: "Containerized multi-tenant SaaS app with strict data isolation, dynamic tenancy resolution, and role-based access control.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    link: "https://...",
  },
  // ...
];
```

---

## 8. Build Workflow

### Phase 0 — Decide on assets (before writing code)
1. Choose Path A (original hero illustration) or Path B (Spider-Man assets) from Section 2.
2. Source/commission: masked-hero front-facing image, unmasked photo of you, full-body standing/hanging illustration, spiderweb SVGs.
3. Write real bio copy, finalize project list + real project links, export resume as PDF.

### Phase 1 — Project setup
1. `npx create-next-app@latest --typescript --tailwind --app`
2. Install: `gsap`, `lucide-react`
3. Set up `lib/gsap.ts` with SSR-safe `ScrollTrigger` registration (`gsap.registerPlugin(ScrollTrigger)` inside a `"use client"` guard)
4. Configure `next/font` for headline + body fonts
5. Define Tailwind theme tokens (colors, font families) from Section 5

### Phase 2 — Static layout first (no animation)
1. Build Navbar, Hero, About, Skills, Projects, Contact as static components with real content and correct spacing/typography
2. Get responsive breakpoints right (mobile/tablet/desktop) before touching animation — this avoids re-debugging layout and motion at the same time

### Phase 3 — Micro-interactions
1. Mask-hover reveal (Hero)
2. Project card hover states
3. Navbar scroll-state toggle

### Phase 4 — GSAP set pieces (the hard part)
1. Build `MarqueeStrip` first — it's self-contained and a good GSAP warm-up
2. Build `WebStrand` scroll-triggered line-draw + swing-drop
3. Build the persistent `HeroCharacter` scroll-scrub across About → Skills → Projects → Contact
4. Add rotating spiderweb decorations
5. Wrap everything in a `prefers-reduced-motion` check and provide a static fallback state

### Phase 5 — Contact form
1. Build `/api/contact/route.ts` — validate input server-side, send via Resend/Nodemailer
2. Wire up client form with loading/success/error states (no full page reload)
3. Add basic spam protection (honeypot field or simple rate-limit)

### Phase 6 — Polish & performance pass
1. Run Lighthouse — target 90+ on Performance/Accessibility
2. Optimize all illustration assets (`next/image`, WebP/AVIF, correct `sizes`)
3. Lazy-load below-the-fold GSAP triggers (`ScrollTrigger` naturally handles this, but double check image loading)
4. Verify keyboard navigation + focus states on nav links, buttons, form fields
5. Cross-browser check (Safari especially — `clip-path` and `sticky` quirks)

### Phase 7 — Deploy & QA
1. Push to GitHub, connect repo to Vercel
2. Verify production build matches dev (animation timing, font loading)
3. Test on real mobile devices — marquee performance and scroll-scrub can behave differently on low-power devices; consider simplifying/disabling the heaviest scrub animation on small viewports
4. Add OG image/meta tags for link previews (LinkedIn, Twitter)

### Phase 8 — Post-launch
1. Swap resume PDF whenever it updates without a redeploy (host it in `public/` or a CDN link you can update)
2. Add real analytics (Vercel Analytics or Plausible) to see what recruiters actually click
3. Iterate: add a blog/case-study page if you want to go deeper than card summaries

---

## 9. Risks & Considerations

| Risk | Mitigation |
|---|---|
| Marvel IP exposure (see Section 2) | Decide Path A vs B before sourcing assets |
| GSAP scroll-scrub feels janky on low-end/mobile devices | Test early on real devices; provide reduced-motion and reduced-complexity mobile variants |
| Heavy character illustrations hurt load time | Use `next/image`, compress aggressively, consider SVG over raster where possible |
| Contact form abuse/spam | Honeypot + basic server-side rate limiting before going public |
| Over-animated site hurts recruiter skimmability | Keep animation additive, not blocking — content must be readable even with JS/animation disabled |

---

## 10. Definition of Done
- [ ] All 6 sections built responsively (mobile/tablet/desktop)
- [ ] All 7 animation set-pieces implemented and functioning
- [ ] `prefers-reduced-motion` fallback verified
- [ ] Contact form sends real emails and validates input
- [ ] Resume downloads correctly
- [ ] Lighthouse Performance/Accessibility ≥ 90
- [ ] Deployed on Vercel with custom domain (optional) and OG meta tags