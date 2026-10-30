import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { navigation } from "../data/navigation";
import ScrollButton from "./ScrollButton";

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <ScrollButton
          className="brand"
          targetId="home"
          onClick={() => setOpen(false)}
          aria-label="Ammad Fareed, home"
        >
          <img
            className="brand-mark"
            src="/favicon.svg"
            alt=""
            width="42"
            height="42"
          />
          <span className="brand-name">Ammad Fareed</span>
        </ScrollButton>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, id]) => (
            <ScrollButton
              className={active === id ? "is-active" : ""}
              targetId={id}
              aria-current={active === id ? "location" : undefined}
              key={id}
            >
              {label}
            </ScrollButton>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        inert={!open}
      >
        {navigation.map(([label, id]) => (
          <ScrollButton
            targetId={id}
            onClick={() => setOpen(false)}
            key={id}
          >
            {label}
            <ChevronRight size={17} aria-hidden="true" />
          </ScrollButton>
        ))}
      </nav>
    </header>
  );
}

export default Header;
