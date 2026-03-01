(function () {
  function closeNav(nav, toggle) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function bindLegalNav(nav) {
    const toggle = nav.querySelector("[data-legal-nav-toggle]");
    const links = nav.querySelector("[data-legal-nav-links]");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeNav(nav, toggle);
      });
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target)) {
        closeNav(nav, toggle);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) {
        closeNav(nav, toggle);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-legal-nav]").forEach(bindLegalNav);
  });
})();
