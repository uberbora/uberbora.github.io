# uberbora.github.io

The uberbora website: the app shelf, UbiClipper's download page and every app's
privacy policy. Plain HTML, served by GitHub Pages, no build step.

```
index.html                 home: one colour band per app
<app>/                     app page (UbiClipper's gets its newest release via the GitHub API)
<app>/privacy/             privacy policy (both languages on one page, linked from Google Play)
<app>/roadmap/             public roadmap (UbiChef, UbiClipper, UbiTracker)
ubichef/r/                 UbiChef's recipe-share page
assets/site.css, site.js   shared look and the EN/TR switch
assets/uberbora.svg/.png   logo
.well-known/assetlinks.json   Android app links for UbiChef
```

The look is the Ubi design system (the same as the apps): Bricolage Grotesque for
titles and big numbers, Figtree for text, DM Mono for small uppercase labels, white
cards with 1px lines, and one accent colour per app. Each app's pages carry
`<body class="app-<app> app-page">`, which points the role variables (`--bg`,
`--surface`, `--accent` …) at that app's colours in `assets/site.css`; the home page
uses the site's own black and yellow. Light and dark follow the visitor's setting.

New app: add a band to `index.html`, an `app-<app>` colour block in `site.css`, an
`<app>/` page and an `<app>/privacy/` page. Texts are
written twice, `<span lang="en">` and `<span lang="tr">`; the switch shows one.
