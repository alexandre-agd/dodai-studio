# Dodai Studio — dodai-studio.com
Project Context

Corporate website for Dodai Studio (土台スタジオ), a Tokyo-based F&B and retail consulting firm. We help francophone and anglophone entrepreneurs open and operate profitable businesses in Japan.

Founders: Guillaume Dupérier (Operations & Network, 14+ years Tokyo) and Alexandre Gerard (Systems & Growth, CRM/automation/GTM).

Tagline: "Building and operating profitable businesses in Japan."

土台 (dodai) = foundation. Always write "Dodai Studio", never "Dodai" alone.

---

## Tech Stack

- **Framework:** React 19 + Vite 6 + TypeScript 5.7
- **Styling:** Tailwind CSS (CDN in `index.html` for runtime; `tailwind.config.js` for build config)
- **Routing:** React Router v7 (`react-router-dom`, `react-router-hash-link`)
- **Icons:** `lucide-react`
- **Translations:** Trilingual FR/EN/JP via `utils/translations.ts` + `contexts/LanguageContext.tsx`
- **Forms:** POST to n8n webhook — `https://n8n.agdevelopment.co/webhook/website-partenaire`
- **Chat widget:** Brevo Conversations (loaded 5s after `window.load`, ID `6992d0cd93caca2820045e7f`)
- **Images:** Cloudinary (account `dehnuytil`) — never hardcode local image paths
- **Hosting:** Firebase — deploy with `firebase deploy`

## Commands

```bash
npm run dev        # Local dev server
npm run build      # Production build (output: dist/)
npm run preview    # Preview production build
firebase deploy    # Deploy to production
```

## File Structure

```
/
├── App.tsx                    # Routes + LanguageProvider wrapper
├── index.tsx                  # Entry point
├── index.html                 # HTML shell: Tailwind CDN, importmap, fonts, Brevo
├── index.css                  # Custom CSS (check before adding new styles)
├── types.ts                   # TypeScript interfaces (ServiceTierProps, WizardData…)
├── tailwind.config.js         # Tailwind theme extension
├── vite.config.ts             # Vite build config (outDir: dist, minify: esbuild)
├── package.json
├── components/
│   ├── Layout.tsx             # Header + Footer (exported together)
│   ├── ContactForm.tsx        # Shared form (Home / Build / Diagnostic / Run variants)
│   ├── ProjectWizard.tsx      # 3-step routing wizard on Home
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Methodology.tsx
│   ├── Portfolio.tsx
│   ├── Pricing.tsx
│   ├── Services.tsx
│   ├── Team.tsx
│   ├── FAQ.tsx
│   ├── Definition.tsx
│   ├── Guardrails.tsx
│   └── ScrollToTop.tsx
├── contexts/
│   └── LanguageContext.tsx    # Language state + deepMerge fallback
├── pages/
│   ├── HomePage.tsx
│   ├── DiagnosticPage.tsx
│   ├── BuildPage.tsx
│   ├── RunPage.tsx
│   └── PartenairesPage.tsx
└── utils/
    └── translations.ts        # All FR/EN/JP strings — single source of truth
```

## Routing

```
/               → HomePage
/diagnostic     → DiagnosticPage
/build          → BuildPage
/run            → RunPage
/partenaires    → PartenairesPage
*               → redirect to /
```

Each phase page (`/diagnostic`, `/build`, `/run`) must link to the other two.

## Translation System

Language is stored as a URL param: `?lang=fr`, `?lang=en`, `?lang=jp`. Default is `en`.

- `useLanguage()` → `{ language, setLanguage, t }` — use everywhere instead of hardcoded strings
- FR is the canonical base. EN and JP are deepMerged over FR — missing keys fall back to FR.
- All new copy goes in `utils/translations.ts` under all three languages before wiring in JSX.

```tsx
const { t, language, setLanguage } = useLanguage();
```

## Design System

### Colors (Tailwind classes)

| Token              | Class                  | Hex       |
|--------------------|------------------------|-----------|
| Charcoal (primary) | `bg-dodai-charcoal`    | `#2C2C2C` |
| Cream (background) | `bg-dodai-cream`       | `#FFFEF2` |
| Vermillion (accent)| `bg-dodai-red`         | `#C73E1D` |
| Light gray         | `bg-dodai-gray`        | `#F5F5F7` |

Also available with `text-`, `border-`, `selection:bg-` prefixes.

### Typography

- Body + headings: `font-sans` → `"Noto Sans JP"` (weights 300, 400, 700)
- Data / code / tags: `font-mono` → `"Roboto Mono"` (weights 400, 500)

### Animations

- `animate-fade-in-up` — entrance animation (0.8s ease-out)
- `animate-pulse-slow` — 4s pulse for ambient elements

### Layout patterns

- Max content width: `max-w-7xl mx-auto px-6`
- Header pill (scrolled): `max-w-5xl bg-white/80 backdrop-blur-xl rounded-full`
- Dark header pages: `/partenaires`, `/run`, `/diagnostic`, `/build` → logo inverts, nav text is light

## ContactForm

Single shared component with three variants controlled by props:

```tsx
<ContactForm />                           // Home / Build (default)
<ContactForm isDiagnosticPage={true} />   // Diagnostic page
<ContactForm isRunPage={true} />          // Run page
<ContactForm initialData={wizardData} />  // Pre-filled from ProjectWizard
```

On submit: POST JSON to the n8n webhook. 30s cooldown after success.

## Assets (Cloudinary)

- Logo (dark bg): `https://res.cloudinary.com/dehnuytil/image/upload/v1770612903/Dodai-logo_mfemab.png`
- Favicon / logo mark: `https://res.cloudinary.com/dehnuytil/image/upload/v1770622850/favicon_defxjo.png`
- OG image (cream bg): `https://res.cloudinary.com/dehnuytil/image/upload/c_pad,b_rgb:FFFEF2,w_1200,h_630,fl_relative/v1770612903/Dodai-logo_mfemab.png`
- Use `f_auto,q_auto` transforms for performance on new images.

---

## Site Architecture

```
/ (Home)        → Global offer, Project Wizard, methodology, team, portfolio
/diagnostic     → Diagnostic offer (¥600,000), 3 client profiles, FAQ
/build          → Build offer (Essential/Complete/Premium), 4 pillars, add-ons
/run            → Run subscription (¥150,000/month), 4 target profiles
/partenaires    → Partner referral acquisition, 5 partner profiles
```

### Project Wizard (Home)

Interactive routing tool — 3 questions:
1. Project type (F&B / Retail — no services)
2. Project stage (Idea / BP ready / Location found / Already open)
3. Main challenge (conditional)
→ Routes user to Diagnostic, Build, or Run page

### Forms per Page

| Page        | Fields                                                    |
|-------------|-----------------------------------------------------------|
| Home        | project type, budget, free message                        |
| /diagnostic | project stage (4 options) + validation needs (free text)  |
| /build      | project type, budget, free message                        |
| /run        | current concept (name + type) + main challenge (select)   |

---

## Business Model (3 Phases)

### 1. Diagnostic — ¥600,000
Reality check / Go-No-Go. 3-4 weeks. 100% upfront. Fully credited to Build if signed within 30 days.

### 2. Build — Zero-to-Open

| Tier      | Price         | Duration     | Profile                        |
|-----------|---------------|--------------|--------------------------------|
| Essential | from ¥1.2M   | 6-8 weeks    | Local already found            |
| Complete  | from ¥2.0M   | 8-20 weeks   | Recommended for 80% of clients |
| Premium   | ~¥3.0-3.5M   | 16-24 weeks  | Includes MVP + PR              |

Payment: 30% signing / 40% after legal+location / 30% at opening.
4 pillars available à la carte.

### 3. Run — ¥150,000/month
6-month minimum. Optional modules: Acquisition (¥80k), Seasonality (¥60k), Profitability (¥80k).

---

## Target Clients (ICP)

1. Expats without sector experience wanting to open (FR/EN, 30M+ JPY budget)
2. Entrepreneurs arriving in Japan with structured project (Business Manager visa, 30M+ JPY)
3. International franchises entering Japan (50M+ JPY)
4. Already-open businesses struggling (6-18 months, stagnating)

Sectors: F&B (restaurants, bars, cafés, wine bars) and Retail (wine shops, concept stores). NOT services, agencies, or B2B.

Hard requirements: capital ~30M JPY minimum, physical presence in Japan during Build.

---

## KPI Benchmarks (Displayed on Site)

| Metric               | Target               |
|----------------------|----------------------|
| Food Cost            | 28-32%               |
| Staff/Revenue ratio  | <35%                 |
| Net margin           | >10% post-stabilization |
| Break-even           | M6-M9                |
| Customer capture     | >60%                 |
| Repeat rate          | >30% by M6           |
| Google Maps          | >4.0 from M1         |
| Tabelog              | >3.5 by M12          |

---

## Partner Network

14 years in Tokyo, 10+ vetted partners: bilingual accountants, scriveners/legal (Eigyo Kyoka, GK/KK), real estate (F&B/retail focus, off-market), designers/builders (Tokyo constraints).

---

## Content & Tone Guidelines

### Voice Attributes

Authentic, Concrete, Diplomatic, Accessible, Terrain-oriented.

### Writing Rules

- Write naturally, like speaking. Short sentences, active voice.
- No em-dashes (tirets longs). Use periods, colons, or parentheses.
- No corporate jargon: synergy, leverage, empower, disrupter, game-changer, scalable.
- No empty superlatives: revolutionary, cutting-edge, world-class.
- No LinkedIn clichés: "Ravi d'annoncer", "Fier de partager", "D'accord ?"
- No pressure selling: no fake urgency, no FOMO, no "plus que X places".
- No generic content anyone could write about any market.
- Experience before data. Show, don't tell. Share successes AND failures.
- Emojis: 2-3 max per social post, never in formal emails.
- FR: tutoiement between entrepreneurs, vouvoiement for formal/corporate first contact.
- EN: European tone, not American motivational speaker energy. Never translate from FR — rewrite for anglophone context.
- JP: Natural Japanese, keigo-friendly, no sarcasm/irony. Explicit CTAs. Reference seasonal events when relevant.

### Forbidden Words

synergy, leverage, empower, disrupter, paradigm shift, game-changer, scalable, revolutionary, cutting-edge, world-class, "bonne question", "super insight", "c'est brillant", "ça dépend" (without recommending)

### Preferred Vocabulary

concrètement, en pratique, sur le terrain, dans les faits, on a testé, on a vu que, le truc c'est que, ce qui marche vraiment, construire, tester, itérer, ajuster, automatiser, risque, compromis, contrainte

---

## What We Do NOT Do

- No legal/tax advice (we connect to partners)
- No visa guarantees (immigration is sovereign)
- No unlimited concierge (support is scoped in tickets/hours)
- No projects without minimum capital (~30M JPY)
- No "dream projects" without execution capacity
- No signing leases on client's behalf
- No 24/7 support
- No guarantee of success (we reduce risk, not eliminate it)

---

## Important Dev Rules

- All claims and projections on the site must be factually accurate and verifiable.
- "30% of F&B businesses in Japan close in year one" — documented stat, OK to use.
- Pricing always shown with "starting from" or "indicatif" — never as fixed prices.
- Diagnostic credit: always mention the ¥600,000 is fully credited to Build if signed within 30 days.
- Each phase page must link to the other two phases.
- Home must include: "Most clients start with a Diagnostic, move to Build, then activate the Run. Each step stands on its own."
- Check `index.css` before adding new CSS — prefer Tailwind utilities.
- Never hardcode copy — all strings go through `utils/translations.ts`.
- CSS patterns use the `dodai-*` Tailwind tokens — never raw hex values in JSX.
