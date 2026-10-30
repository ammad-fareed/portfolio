export function scrollToSection(id, { focus = false } = {}) {
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
    block: "start",
  });
  if (focus) target.focus({ preventScroll: true });
}
