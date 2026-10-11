/* uberbora site: language switch (English / Türkçe) and the UbiClipper
   download button, which always points at the newest GitHub release. */
(function () {
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem("ubi-lang"); } catch (e) { return null; }
  }
  function setLang(lang, remember) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    document.querySelectorAll(".langswitch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set") === lang));
    });
    var t = document.querySelector("meta[name='title-" + lang + "']");
    if (t) document.title = t.content;
    if (remember) { try { localStorage.setItem("ubi-lang", lang); } catch (e) {} }
  }

  var first = saved() || (/^tr\b/i.test(navigator.language || "") ? "tr" : "en");
  setLang(first, false);

  document.addEventListener("DOMContentLoaded", function () {
    setLang(root.getAttribute("data-lang"), false);
    document.querySelectorAll(".langswitch button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-set"), true); });
    });
    releaseLinks();
  });

  /* ------------------------------------------------------------ downloads */
  function releaseLinks() {
    var setupLinks = document.querySelectorAll("[data-dl='setup']");
    var zipLinks = document.querySelectorAll("[data-dl='zip']");
    var info = document.querySelectorAll("[data-dl-info]");
    if (!setupLinks.length && !zipLinks.length) return;
    fetch("https://api.github.com/repos/uberbora/UbiClipper/releases/latest", {
      headers: { Accept: "application/vnd.github+json" }
    })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (rel) {
        var setup = null, zip = null;
        (rel.assets || []).forEach(function (a) {
          if (/Setup.*\.exe$/i.test(a.name)) setup = a;
          if (/portable\.zip$/i.test(a.name)) zip = a;
        });
        if (setup) setupLinks.forEach(function (l) { l.href = setup.browser_download_url; });
        if (zip) zipLinks.forEach(function (l) { l.href = zip.browser_download_url; });
        var ver = (rel.tag_name || "").replace(/^v/, "");
        var mb = setup ? Math.round(setup.size / 1e6) : null;
        info.forEach(function (el) {
          var tr = el.getAttribute("lang") === "tr";
          el.textContent = tr
            ? "Sürüm " + ver + (mb ? ", " + mb + " MB" : "") + ". Windows 10 ve 11, 64 bit."
            : "Version " + ver + (mb ? ", " + mb + " MB" : "") + ". Windows 10 and 11, 64-bit.";
        });
      })
      .catch(function () { /* the links already go to the releases page */ });
  }
})();
