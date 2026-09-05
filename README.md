# CIMSL Website — Children Integrated Missions Sierra Leone

Official website for **Children Integrated Missions Sierra Leone (CIMSL)** —
*"Restoring Hope. Empowering Children. Building a Better Future."*

Supports orphaned, abandoned, vulnerable and disadvantaged children through
child protection, education support, healthcare & nutrition, and community
development. Rebuilt from the Fundraiser charity theme around CIMSL's real
mission, programs, objectives and contact/donation information.

## Run locally

No build step — plain static site. From this folder:

```bash
python3 -m http.server 8000
```

then open <http://localhost:8000>.

## Pages (17)

| Page | File |
|---|---|
| Home | `index.html` |
| About Us | `about.html` |
| Our Programs | `programs.html` |
| Child Care & Protection | `programs-child-care-protection.html` |
| Education Support | `programs-education.html` |
| Healthcare & Nutrition | `programs-healthcare.html` |
| Community Development | `programs-community-development.html` |
| Our Impact | `impact.html` |
| Get Involved (donate / sponsor / volunteer / partner) | `get-involved.html` |
| Donate | `donate.html` |
| Gallery | `gallery.html` |
| News & Stories | `news.html` (+ `news-single.html?slug=…` article template) |
| Events | `events.html` |
| Contact | `contact.html` |
| Privacy / Terms | `privacy.html`, `terms.html` |

Plus `sitemap.xml` and `robots.txt` (canonical base `https://cimsl.org/`).

## Structure

- `css/cimsl.css` — CIMSL design system (forest-green + gold, Poppins/Inter),
  layered over the base theme `css/style.css`. All site-specific styling lives here.
- `js/cimsl-data.js` — central **CMS-ready** content store (programs, objectives,
  news, gallery). To adopt a headless CMS later, swap these arrays for `fetch()`
  calls returning the same shape — no markup changes needed.
- `js/cimsl.js` — shared behaviour: sticky nav, active states, validated forms
  with success/error states, gallery filter, donation copy-buttons, news rendering.
- `images/cimsl/` — authentic field photography from cimsl.org, organised by
  `logo/`, `hero/`, `programs/`, `about/`, `gallery/` (see its README).

## Verified details (do not change without confirmation)

- **Donations:** Orange Money **076616259 — Samuel Mabona Kamara** (`donate.html`)
- **Phone/WhatsApp:** +232 766 16259 · **Email:** samuelmabonakamara468@gmail.com
- **Address:** 50 Conteh Street, Peacock Farm, Wellington, Freetown, Sierra Leone

## Content rules

- No Lorem Ipsum, no template demo content, no Colorlib branding.
- **Never invent** statistics, donation totals, events, testimonials, partners or
  staff. Use "Impact statistics coming soon" until figures are verified.
- Never publish identifying/sensitive information about children without proper
  authorisation; anonymise where appropriate.

## Deploy

Static hosting only (GitHub Pages, Netlify, cPanel, …). For GitHub Pages:
repo **Settings → Pages → Deploy from branch → `main`** — no build required.
