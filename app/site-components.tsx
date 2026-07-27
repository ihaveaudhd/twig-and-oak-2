"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  ["Families", "/families"],
  ["Seniors", "/seniors"],
  ["Maternity", "/maternity"],
  ["Newborn", "/newborn"],
  ["About", "/about"],
  ["Investment", "/pricing"],
] as const;

export function Logo() {
  return (
    <span className="logo-lockup">
      <span className="logo-name">
        <span>Twig</span>
        <span className="logo-ampersand">&amp;</span>
        <span>Oak</span>
      </span>
      <small>Photography</small>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${pathname === "/families" ? " families-header" : ""}${scrolled ? " is-scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="Twig and Oak Photography home"><Logo /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
      </nav>
      <a className="header-button" href="mailto:amy@twigandoakphotography.com">Inquire</a>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span />
      </button>
      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <Link href={href} key={label} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <a className="button primary-button" href="mailto:amy@twigandoakphotography.com">Inquire</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" aria-label="Twig and Oak Photography home"><Logo /></Link>
      <nav aria-label="Footer navigation">
        {navItems.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
      </nav>
      <div className="social-links">
        <a href="https://www.instagram.com/twigandoakphotography/" target="_blank" rel="noreferrer" aria-label="Twig and Oak Photography on Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.25" />
            <circle className="social-dot" cx="17.45" cy="6.65" r="1" />
          </svg>
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Twig and Oak Photography on Pinterest">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.43 7.63 11.17-.11-.95-.2-2.4.04-3.44l1.41-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-.99 4-.28 1.19.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.89 2.74.1.12.11.22.08.34l-.33 1.36c-.05.22-.17.27-.4.16-1.5-.7-2.44-2.89-2.44-4.65 0-3.78 2.75-7.26 7.93-7.26 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.61 7.46-6.23 7.46-1.22 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15 1.12.35 2.32.54 3.55.54 6.63 0 12-5.37 12-12S18.63 0 12 0Z" />
          </svg>
        </a>
        <a className="yelp-link" href="https://www.yelp.com/biz/twig-and-oak-photography-walnut-creek" target="_blank" rel="noreferrer" aria-label="Twig and Oak Photography on Yelp">
          Yelp
        </a>
      </div>
      <small>© 2026 Twig &amp; Oak Photography</small>
      <small>Walnut Creek, California</small>
    </footer>
  );
}
