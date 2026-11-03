# Publish your portfolio on GitHub Pages — free

The website is complete and ready to upload. Publishing still needs to be completed in your GitHub account. These instructions do not require connecting GitHub to ChatGPT.

## 1. Create the repository

1. Sign in to https://github.com/ in your own browser.
2. Choose **+ → New repository**.
3. Name it **YOUR-USERNAME.github.io**, replacing `YOUR-USERNAME` with your exact GitHub username. For example, an account named `example-user` would use `example-user.github.io`.
4. Choose **Public** for free GitHub Pages hosting on GitHub Free.
5. Create the repository. You do not need a template, paid plan, domain name, or build service.

If that repository already exists, do not overwrite it blindly: it may host an existing website. You can instead create a new public repository named `cybersecurity-portfolio`; its site will be at `https://YOUR-USERNAME.github.io/cybersecurity-portfolio/`.

## 2. Upload the website

1. Extract `Ajith_Menon_GitHub_Pages_Portfolio.zip` on your computer.
2. Open the extracted `ajith-portfolio` folder.
3. In the new GitHub repository, choose **uploading an existing file**, or **Add file → Upload files**.
4. Drag the **contents** of `ajith-portfolio` into the upload area. Preserve the `assets` and `research` folders. Do not upload only the ZIP, and do not wrap the site in another outer folder.
5. Commit the files to the `main` branch.
6. Confirm that `index.html` appears directly at the repository's top level, alongside `styles.css`, `script.js`, `assets`, and `research`.

A desktop browser is easiest for uploading folders. If your file manager hides `.nojekyll`, show hidden files before uploading. This static site also works through GitHub's default processing without that file, but including it explicitly disables Jekyll.

## 3. Turn on Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**.
4. Click **Save**.
5. Wait for the Pages deployment to finish. GitHub says publishing can take up to 10 minutes.
6. Return to **Settings → Pages** and use **Visit site** to open the confirmed live address.

For an account repository named `YOUR-USERNAME.github.io`, the address will be:

```text
https://YOUR-USERNAME.github.io/
```

This is the expected URL format, not a claim that a site has already been deployed.

## 4. Verify the live website

- Confirm the portrait and styling appear.
- Try the research filters and the CVE research page.
- Test the mobile menu on a phone.
- Verify the email and LinkedIn destinations.
- Ensure HTTPS is enabled in Pages settings. The default github.io domain supports HTTPS without buying a certificate or configuring DNS.

## Updating later

Edit the relevant files, then upload/commit the changed files to the same branch. GitHub republishes automatically. Preserve file and folder names, or update links to match.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| 404 on the main site | Repository name, successful deployment, and `index.html` at the configured publishing root |
| Text appears without styling | `styles.css` must be next to `index.html`; check filename case |
| Portrait missing | `assets/ajith-menon.webp` must be present with the exact filename |
| Research page is missing | Keep the `research` folder and its HTML file |
| Old content remains | Check the latest Pages workflow result, wait for publishing, and refresh the browser cache |
| Pages unavailable | Repository must be public on GitHub Free; account/organization policies may also restrict Pages |

## Official documentation

- Creating a Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Documentation checked on 3 November 2026.
