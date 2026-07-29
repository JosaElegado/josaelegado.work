/* ==========================================================================
   Field Journal — shared interactions
   Vanilla JS, no dependencies. Safe to port into a Wix custom-code element.
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Sticky header state ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (toggle && mobileNav) {
    var closeNav = function () {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
      document.body.style.overflow = "";
    };
    var openNav = function () {
      toggle.setAttribute("aria-expanded", "true");
      mobileNav.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? closeNav() : openNav();
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---- Draw-on-arrival ----
     Figures below the fold draw themselves when you reach them, using the
     same pen the opening spread uses. Arming is done here rather than in CSS
     so that a visitor without JavaScript sees the finished drawing instead of
     a blank frame. Runs once per figure. */
  var drawTargets = document.querySelectorAll("[data-draw]");

  if (drawTargets.length && "IntersectionObserver" in window) {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!reduced.matches) {
      drawTargets.forEach(function (el) { el.classList.add("is-armed"); });

      var drawObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-drawn");
              drawObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3, rootMargin: "0px 0px -60px 0px" }
      );

      drawTargets.forEach(function (el) { drawObserver.observe(el); });
    }
  }

  /* ---- Footer year ---- */
  var yearEl = document.querySelector("[data-current-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
