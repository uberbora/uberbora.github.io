# uberbora.github.io

The uberbora website: the app shelf, UbiClipper's download page and every app's
privacy policy. Plain HTML, served by GitHub Pages, no build step.

```
index.html                 home: all apps
ubiclipper/                UbiClipper download page (newest release via the GitHub API)
ubiclipper/privacy/        UbiClipper privacy policy
ubichef/ ubireader/ ubitracker/   privacy policies (+ UbiChef's recipe-share page)
assets/site.css, site.js   shared look and the EN/TR switch
assets/uberbora.svg/.png   logo
.well-known/assetlinks.json   Android app links for UbiChef
```

New app: add a tile to `index.html` and a `<app>/privacy/` page. Texts are
written twice, `<span lang="en">` and `<span lang="tr">`; the switch shows one.
