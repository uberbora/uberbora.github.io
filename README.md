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

Each app's pages carry `<body class="app-<app> app-page">`, which sets its colour
(`--app`, `--accent`) in `site.css`. Heroes and home bands end in the stepped bottom of the U.

New app: add a band to `index.html`, an `app-<app>` colour block in `site.css`, an
`<app>/` page and an `<app>/privacy/` page. Texts are
written twice, `<span lang="en">` and `<span lang="tr">`; the switch shows one.
