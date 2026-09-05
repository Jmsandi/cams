/* CIMSL shared behaviour — vanilla JS, no extra dependencies. */
(function () {
  "use strict";

  function onReady(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  onReady(function () {
    var year = document.getElementById("cimsl-year");
    if (year) year.textContent = new Date().getFullYear();

    /* Sticky navbar shadow */
    var nav = document.querySelector(".site-navbar");
    function navShadow() {
      if (!nav) return;
      if (window.scrollY > 8) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    }
    navShadow();
    window.addEventListener("scroll", navShadow, { passive: true });

    /* Active nav highlighting (works for all static pages) */
    try {
      var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
      var map = {
        "index.html": "home", "about.html": "about",
        "programs.html": "programs", "programs-child-care-protection.html": "programs",
        "programs-education.html": "programs", "programs-healthcare.html": "programs",
        "programs-community-development.html": "programs",
        "impact.html": "impact", "get-involved.html": "involved",
        "gallery.html": "about", "news.html": "news", "news-single.html": "news",
        "events.html": "events", "contact.html": "contact", "donate.html": "donate"
      };
      var key = map[path];
      if (key) {
        document.querySelectorAll("[data-nav]").forEach(function (li) {
          if (li.getAttribute("data-nav") === key) li.classList.add("active");
          else li.classList.remove("active");
        });
      }
      /* highlight parent + child when a dropdown link matches this page */
      try {
        var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
        document.querySelectorAll(".site-navigation .dropdown a").forEach(function (a) {
          var href = (a.getAttribute("href") || "").split("#")[0].split("?")[0].toLowerCase();
          if (href && href === page) {
            a.classList.add("active");
            var pli = a.closest("li[data-nav]");
            if (pli) pli.classList.add("active");
          }
        });
      } catch (e2) { /* noop */ }
    } catch (e) { /* noop */ }

    /* Copy-to-clipboard for donation number */
    document.querySelectorAll("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var val = btn.getAttribute("data-copy");
        function done() {
          var old = btn.textContent;
          btn.textContent = "Copied ✓";
          setTimeout(function () { btn.textContent = old; }, 1600);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(val).then(done).catch(done);
        } else {
          var t = document.createElement("textarea");
          t.value = val; document.body.appendChild(t); t.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(t); done();
        }
      });
    });

    /* Generic validated forms (contact / volunteer / partner / newsletter) */
    document.querySelectorAll("form[data-cimsl-form]").forEach(function (form) {
      var okBox = form.parentElement.querySelector(".alert-cimsl.ok") || form.querySelector(".alert-cimsl.ok");
      var errBox = form.parentElement.querySelector(".alert-cimsl.err") || form.querySelector(".alert-cimsl.err");
      form.setAttribute("novalidate", "novalidate");
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var valid = true;
        var firstBad = null;
        form.querySelectorAll("[required]").forEach(function (f) {
          var bad = !f.value || !f.value.trim();
          if (f.type === "email" && f.value) {
            bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim());
          }
          f.classList.toggle("is-invalid", bad);
          f.setAttribute("aria-invalid", bad ? "true" : "false");
          if (bad) { valid = false; firstBad = firstBad || f; }
        });
        if (okBox) okBox.classList.remove("ok");
        if (errBox) errBox.classList.remove("err");
        // force reflow so re-shown alerts announce again
        void form.offsetWidth;
        if (!valid) {
          if (errBox) errBox.classList.add("err");
          if (firstBad) firstBad.focus();
          return;
        }
        // Static site: no backend yet. Store locally + show success.
        // Swap this block for a fetch() to a form endpoint/CMS later.
        try {
          var payload = {};
          form.querySelectorAll("input,select,textarea").forEach(function (f) {
            if (f.name) payload[f.name] = f.value;
          });
          payload._page = location.pathname;
          payload._at = new Date().toISOString();
          var key = "cimsl-" + (form.getAttribute("data-cimsl-form") || "form");
          var prev = JSON.parse(localStorage.getItem(key) || "[]");
          prev.push(payload);
          localStorage.setItem(key, JSON.stringify(prev));
        } catch (e) { /* storage optional */ }
        form.reset();
        if (okBox) {
          okBox.classList.add("ok");
          okBox.setAttribute("tabindex", "-1");
          okBox.focus({ preventScroll: false });
        }
      });
      // clear invalid state while typing
      form.addEventListener("input", function (ev) {
        if (ev.target.classList) ev.target.classList.remove("is-invalid");
      });
    });

    /* Gallery filter (gallery.html) */
    var filterBtns = document.querySelectorAll(".g-filter");
    if (filterBtns.length) {
      filterBtns.forEach(function (b) {
        b.addEventListener("click", function () {
          filterBtns.forEach(function (x) { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
          b.classList.add("active");
          b.setAttribute("aria-pressed", "true");
          var cat = b.getAttribute("data-filter");
          document.querySelectorAll(".g-item").forEach(function (item) {
            var show = cat === "All" || item.getAttribute("data-cat") === cat;
            item.style.display = show ? "" : "none";
          });
        });
      });
    }

    /* Render latest news cards into [data-render="news"] (CMS-ready) */
    try {
      var newsHost = document.querySelector('[data-render="news"]');
      if (newsHost && window.CIMSL && window.CIMSL.news) {
        var items = window.CIMSL.news.slice(0, 3);
        newsHost.innerHTML = items.map(function (n) {
          return (
            '<div class="col-md-4 mb-4" data-aos="fade-up">' +
              '<article class="news-card">' +
                '<a href="news-single.html?slug=' + encodeURIComponent(n.slug) + '" aria-label="Read: ' + n.title.replace(/"/g, "") + '">' +
                  '<img src="' + n.img + '" alt="' + n.alt.replace(/"/g, "") + '" loading="lazy">' +
                "</a>" +
                '<div class="p-4 d-flex flex-column" style="flex:1">' +
                  '<span class="cat-badge">' + n.category + "</span>" +
                  '<p class="small text-muted mb-1">' + n.dateDisplay + "</p>" +
                  '<h3 class="h5"><a href="news-single.html?slug=' + encodeURIComponent(n.slug) + '">' + n.title + "</a></h3>" +
                  "<p class='text-muted small' style='flex:1'>" + n.excerpt + "</p>" +
                  '<a class="font-weight-bold" href="news-single.html?slug=' + encodeURIComponent(n.slug) + '">Read More →</a>' +
                "</div>" +
              "</article>" +
            "</div>"
          );
        }).join("");
      }
    } catch (e) { /* noop */ }

    /* News single page: render by ?slug= */
    try {
      var singleHost = document.getElementById("news-single-body");
      if (singleHost && window.CIMSL && window.CIMSL.news) {
        var params = new URLSearchParams(location.search);
        var slug = params.get("slug") || window.CIMSL.news[0].slug;
        var post = window.CIMSL.news.filter(function (n) { return n.slug === slug; })[0] || window.CIMSL.news[0];
        document.title = post.title + " — CIMSL News | Children Integrated Missions";
        singleHost.innerHTML =
          '<span class="cat-badge">' + post.category + "</span>" +
          "<h1 class='mb-2'>" + post.title + "</h1>" +
          '<p class="text-muted">' + post.dateDisplay + " · CIMSL Newsroom</p>" +
          '<div class="cimsl-img-frame mb-4"><img src="' + post.img + '" alt="' + post.alt.replace(/"/g, "") + '"></div>' +
          post.body.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
          '<div class="quote-card mt-4"><strong>Child safeguarding:</strong> we never publish identifying information about children without proper authorisation.</div>';
        var moreHost = document.getElementById("news-more");
        if (moreHost) {
          moreHost.innerHTML = window.CIMSL.news
            .filter(function (n) { return n.slug !== post.slug; })
            .slice(0, 2)
            .map(function (n) {
              return (
                '<div class="col-md-6 mb-4"><article class="news-card">' +
                '<a href="news-single.html?slug=' + encodeURIComponent(n.slug) + '"><img src="' + n.img + '" alt="' + n.alt.replace(/"/g, "") + '" loading="lazy"></a>' +
                '<div class="p-4"><span class="cat-badge">' + n.category + "</span>" +
                '<h3 class="h5"><a href="news-single.html?slug=' + encodeURIComponent(n.slug) + '">' + n.title + "</a></h3>" +
                '<a class="font-weight-bold" href="news-single.html?slug=' + encodeURIComponent(n.slug) + '">Read More →</a></div>' +
                "</article></div>"
              );
            }).join("");
        }
      }
    } catch (e) { /* noop */ }
  });
})();
