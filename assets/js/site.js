// Lockdown — site behaviour. Small on purpose: the page works without it.

// Paste the App Store link here once the app is live, e.g.
// "https://apps.apple.com/app/lockdown-study-focus/id1234567890".
// While it is empty, every download button reads "Coming soon".
const APP_STORE_URL = "";

(() => {
  const root = document.documentElement;
  root.classList.add("js");

  // App Store buttons
  document.querySelectorAll("[data-store]").forEach((el) => {
    if (APP_STORE_URL) {
      el.href = APP_STORE_URL;
      el.removeAttribute("aria-disabled");
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      const top = el.querySelector("small");
      if (top) top.textContent = "Coming soon to the";
    }
  });

  // Frosted nav once the page moves
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("in"));
  }

  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
