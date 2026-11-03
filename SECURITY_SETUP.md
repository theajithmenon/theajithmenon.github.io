# Portfolio security setup

Prepared for Ajith Menon's GitHub Pages portfolio on 3 November 2026.

## Confirmed from your screenshots

- The repository name is `theajithmenon.github.io`.
- GitHub reports the site live at https://theajithmenon.github.io/ .
- Pages deploys from `main` / `(root)`.
- Enforce HTTPS is checked and required for the default github.io domain.
- The repository is public. This is normal for the chosen free Pages hosting setup.

No change is required to these settings. Leave the Danger Zone controls alone. The screenshots do not establish whether your account has 2FA/passkeys, which collaborators or apps have access, or whether a branch ruleset exists.

## Apply the website-file update

This archive updates these two website files:

- `index.html`
- `research/joomla-cve-2022-27913.html`

1. Download and extract the updated archive.
2. Open the repository's Code tab.
3. Upload `index.html` at the repository root, replacing the existing file.
4. Open the existing `research` folder and upload `joomla-cve-2022-27913.html` there, replacing the existing file.
5. Commit both updates, wait for the Pages deployment to succeed, then open the site and hard-refresh.

The full archive also includes the unchanged CSS, JavaScript, and image assets. Do not upload a second outer `ajith-portfolio` directory. If you edited the site since the initial package, merge the two new meta tags described below into your current HTML instead of replacing your content.

These changes are prepared and tested locally, not deployed to your GitHub repository. A public fetch of the live site was unavailable; your screenshots establish the hosting settings above, not the deployed policy or all response headers.

## What changed

Both HTML documents now have these tags immediately after the charset declaration, before any resource loads:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'none'; object-src 'none'; frame-src 'none'; base-uri 'none'; form-action 'none'">
<meta name="referrer" content="no-referrer">
```

The policy permits this site's own external JavaScript, CSS, and images. It blocks inline JavaScript, eval-style execution, third-party resource loads, fetch/XHR/WebSocket connections, embedded frames/objects, form submissions, and base-URL overrides. The referrer setting prevents this page's URL being sent as a Referer header during navigations and resource requests. Ordinary email and LinkedIn links remain usable.

This is defense in depth; it does not authenticate repository changes or stop an attacker who can replace the HTML and remove the policy. Because scripts are allowed from the same origin, it is not a guarantee that every possible script injection is prevented. Do not publish untrusted scripts or HTML under this account's Pages origin.

Adding analytics, remote fonts, embedded videos, forms, or a backend later will require a deliberate CSP review. Avoid solving blocked resources by broadly allowing `*`, `unsafe-inline`, or `unsafe-eval`.

## Protect the GitHub account

In your personal account Settings → Password and authentication:

1. Enable two-factor authentication if it is not already enabled.
2. Add a passkey or FIDO2 security key for phishing-resistant sign-in. Windows Hello or a reputable passkey provider can be used when supported by your device.
3. Keep a second recovery method and save GitHub recovery codes somewhere secure outside the repository.
4. Review active sessions, SSH keys, personal access tokens, and authorized applications. Remove access you no longer recognize or need; check that it is not used by a needed integration first.

These settings must be completed in your own account. Do not send passwords, tokens, passkeys, or recovery codes in chat or put them in site files.

## Protect main without blocking a solo workflow

Repository Settings → Rulesets → New ruleset → New branch ruleset:

- Name: `Protect portfolio main`
- Enforcement status: **Active**
- Target branch: `main` (or the default branch)
- Enable **Restrict deletions**.
- Enable **Block force pushes**.
- Leave the bypass list empty unless a documented workflow requires an exception.

For this solo portfolio, do not enable **Restrict updates**, mandatory reviewers, or unconfigured status checks as part of this baseline: they can block ordinary updates without adding a workable review process. If you later add collaborators, adopt pull requests and appropriate independent reviews.

Rulesets help prevent destructive branch operations. They do not stop every harmful normal commit by an authorized or compromised account. Account protection remains essential.

## Review access and public files

- Under Collaborators, keep write/admin access limited to people who need it.
- Review GitHub Apps and deploy keys; retain only required access.
- Keep GitHub Actions available for the Pages deployment. Disabling Actions indiscriminately can interrupt publishing.
- Keep credentials, private investigation records, internal assessments, personal documents, and recovery material out of the public repository, including commit history.
- If a real secret was ever committed, revoke/rotate it first; deleting the current file alone does not invalidate it or remove historical copies.
- Merge modes, DCO sign-off, and the Archive/Delete/Transfer controls shown in General settings are not the priority controls for this portfolio. The existing collaborators-only Wiki setting is reasonable; optional unused features can remain disabled or be turned off for tidiness.

## Verification

After deployment:

1. Open the published homepage and research page; verify their styling, portrait, filters, menu, and links.
2. Use View page source to confirm the two meta tags appear near the beginning of each document.
3. Check the browser console for unexpected CSP violations. The release has no inline scripts or styles and no remote assets, so normal features should work.
4. Recheck that Pages still shows Enforce HTTPS and that the ruleset is Active.

Local tests of the updated source confirmed that an intentionally inserted inline script did not execute, eval was denied, and a fetch request was blocked. The external site script still ran and the research filter remained functional. The test fixture and probes are not included in this archive.

## Limits of this hosting setup

A meta policy cannot enforce `frame-ancestors`, and an X-Frame-Options meta tag does not protect against clickjacking. Those require actual HTTP response headers. This package does not claim to set custom response headers, HSTS, Permissions-Policy, or WAF rules on GitHub's service. Files such as `.htaccess` or a `_headers` file should not be assumed to configure those controls on standard GitHub Pages.

For this public portfolio, focus first on account security, publishing access, HTTPS, and the provided browser policy. If you later need authentication, sensitive forms, custom response headers, or other server controls, review a hosting design that supports them. This work is a scoped hardening update, not a full penetration test or a guarantee of security.

## Rollback

Revert the commit containing the two HTML changes if a necessary feature breaks, then investigate the exact blocked resource before relaxing the policy. Preserve any unrelated content edits. You do not need to disable HTTPS or account security to roll back these HTML changes.

## Official references

- HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- Passkeys: https://docs.github.com/en/authentication/authenticating-with-a-passkey/about-passkeys
- Rulesets: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository
- Rules: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets
- CSP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
- Meta limitation: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
