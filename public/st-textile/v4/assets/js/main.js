/* ===========================================================
   ST GLOBAL TEXTILE — Site behavior
   =========================================================== */
(function () {
  "use strict";

  var DEFAULT_LANG = "en";
  var STORE_KEY = "st-lang";

  /* ---------- i18n ---------- */
  function getLang() {
    var saved = localStorage.getItem(STORE_KEY);
    if (saved && window.I18N[saved]) return saved;
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    if (!window.I18N[lang]) lang = DEFAULT_LANG;
    var dict = window.I18N[lang];

    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(STORE_KEY, lang);

    // textContent / innerHTML (allow simple tags like <br>)
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    // attributes: data-i18n-placeholder, data-i18n-aria
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    // active state on lang buttons
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  function initLang() {
    applyLang(getLang());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ---------- Header scroll state ---------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var solid = header.hasAttribute("data-solid"); // inner pages start solid
    function onScroll() {
      if (window.scrollY > 40 || solid) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    var openBtn = document.getElementById("menuOpen");
    var closeBtn = document.getElementById("menuClose");
    var menu = document.getElementById("mobileMenu");
    var backdrop = document.getElementById("menuBackdrop");
    if (!menu) return;
    function open() { menu.classList.add("open"); if (backdrop) backdrop.classList.remove("hidden"); document.body.style.overflow = "hidden"; }
    function close() { menu.classList.remove("open"); if (backdrop) backdrop.classList.add("hidden"); document.body.style.overflow = ""; }
    if (openBtn) openBtn.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (backdrop) backdrop.addEventListener("click", close);
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Animated counters ---------- */
  function initCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var dur = 1600, start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = target * eased;
          el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Year ---------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Contact form (demo) ---------- */
  function initForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("formStatus");
      if (msg) { msg.classList.remove("hidden"); }
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initHeader();
    initMobileMenu();
    initReveal();
    initCounters();
    initYear();
    initForm();
  });
})();
