const nav = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    navToggle?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener(
  "scroll",
  () => {
    nav?.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true }
);
