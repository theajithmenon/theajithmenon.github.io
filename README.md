# Ajith Menon — Cyber Security Researcher Portfolio

A responsive, static portfolio with a dark editorial design, lime accents, a portrait, filterable research projects, experience, speaking topics, and contact links.

## Publish free on GitHub Pages

See **DEPLOY_GITHUB_PAGES.md** for the complete instructions. There is no build step, paid hosting service, database, or package installation required.

Upload these files to the root of a public GitHub repository:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `research/`
- `.nojekyll` (included; hidden files may need to be shown in your file manager)

Enable Pages from **main / (root)**. Documentation can also be uploaded but is not needed to run the site.

## Preview

The security policy is designed for HTTP/HTTPS serving. Preview from a local server rather than opening files with `file://`. From this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Stop with Ctrl+C.

## Edit

| Change | File |
| --- | --- |
| Bio, career, projects, certifications, speaking, contact | `index.html` |
| Colours, fonts, layout, mobile breakpoints | `styles.css` |
| Filters, mobile navigation, footer year | `script.js` |
| Featured CVE write-up | `research/joomla-cve-2022-27913.html` |
| Portrait | `assets/ajith-menon.webp` |
| Site icon | `assets/favicon.svg` |

To add a research card, copy an existing `work-card` article and use one of the filter category values: `vulnerability`, `forensics`, or `ai`. If adding a category, add a corresponding filter button. Update the displayed All work count when adding projects.

The portrait uses CSS grayscale. Remove `grayscale(100%)` from `.portrait img` to show the supplied photo in colour.

## Content provenance

Professional content is based on the supplied résumé. The CVE credit, dates, and historical fix were checked against Joomla's official advisory on 3 November 2026:
https://developer.joomla.org/security-centre/886-20221002-core-reflected-xss-in-various-components.html

INDRA and AI assessment entries are high-level project summaries, not links to publicly released source code. The site does not publish internal security infrastructure details, investigation records, credential IDs, a phone number, or the original résumé PDF. The contact email and LinkedIn URL come from the supplied résumé.

Design inspiration: https://zerodayengineering.com/ . The implementation, visual assets, and copy were created for this portfolio; no third-party site assets or branding are bundled.

## Verification

- JavaScript syntax checked.
- Local links and image/style/script references checked.
- Desktop layout visually reviewed.
- Mobile and tablet layouts reviewed at 390px and 768px frame widths; no document-level horizontal overflow observed.
- Research filters, expandable project details, and mobile menu tested in a browser.
- GitHub deployment is not yet performed or verified. Follow the publishing guide to make the site live.

## Technical details

No third-party font requests, analytics, cookies, API keys, or backend. Email opens the visitor's configured email application. All asset paths are relative so the portfolio supports both account sites and repository/project sites.

After publishing, optionally add the final site URL as a canonical link and replace the relative `og:image` with the full HTTPS URL of your published portrait for more reliable social previews.

## Security hardening update — 3 November 2026

Both HTML pages now have an early meta Content Security Policy and a no-referrer policy. See `SECURITY_SETUP.md` for deployment, account protection, verification, and limits. This update has not been deployed to your live GitHub repository. The separate standalone visual preview is not the deployment artifact.
