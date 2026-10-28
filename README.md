# Lockdown website

The marketing site, support page and legal pages for **Lockdown**, the study focus timer and app blocker for iPhone.

Live at **https://neel-sh.github.io/Lockdown-website/**

| Page | Path |
|---|---|
| Home | `/` |
| Support | `/support/` |
| Privacy Policy | `/privacy/` |
| Terms of Service | `/terms/` |

## Stack

Plain HTML, CSS and a few lines of JavaScript. No build step, no framework, no cookies and no analytics, so pages are fast and the Privacy Policy stays true for the website too. Hosted on GitHub Pages from the `main` branch.

```
index.html            Home
privacy/ terms/ support/
404.html
assets/css/site.css   Design tokens and all styles
assets/js/site.js     Scroll reveal, nav, App Store link config
assets/screens/       Product screenshots in iPhone 18 Pro bezels (WebP, 1350w and 675w)
assets/img/           App icon, favicons, Open Graph image
sitemap.xml robots.txt site.webmanifest
ASO.md                App Store listing copy and launch checklist
```

## Design

The site follows the app's visual direction:

- **Palette.** Ink `#111113` and Graphite `#5E5E66` on white, Snow `#F5F5F7` and Mist `#A3A3AB` on black, and the warm atmosphere arc (rose, coral, peach, apricot, yellow) with lavender as the cool counterpoint. Dark values match `Shared/Palette.swift`.
- **One light per section.** Each section draws a few feathered radial glows, echoing the app's `Atmosphere` states: Ready overhead in the hero, the session horizon in the privacy band, the Complete bloom in the final call to action.
- **Glass only where you touch.** Frosted backgrounds appear only on the nav and buttons.
- **SF Pro** via the system font stack, capsule buttons and a 4-pt spacing scale.
- Light and dark mode, with dark screenshots served in dark mode. Respects Reduce Motion, Reduce Transparency and Increase Contrast.

## SEO

- Descriptive titles, meta descriptions and canonical URLs on every page
- Open Graph and Twitter cards with a 1200 × 630 share image
- JSON-LD: `MobileApplication`, `WebSite`, `Organization`, `FAQPage` and breadcrumbs
- `sitemap.xml` with image entries, and `robots.txt`
- Semantic HTML, descriptive alt text, explicit image dimensions, responsive `srcset`, and a preloaded hero image

## Updating

- **App Store link:** set `APP_STORE_URL` at the top of `assets/js/site.js`.
- **Screenshots:** replace the WebP files in `assets/screens/` and keep the names.
- **Custom domain:** add a `CNAME` file, then replace `https://neel-sh.github.io/Lockdown-website/` everywhere it appears (canonicals, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`) and `/Lockdown-website/` in `404.html` and `site.webmanifest`.
- **Legal pages:** edit `privacy/index.html` and `terms/index.html` directly, and update the "last updated" date and `dateModified`.

## Local preview

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.
