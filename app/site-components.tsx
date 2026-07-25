"use client";

import Link from "next/link";
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
      <span>twig &amp; oak</span>
      <small>Photography</small>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
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
        <a href="https://www.instagram.com/twigandoakphotography/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a>
      </div>
      <small>© 2026 Twig &amp; Oak Photography</small>
      <small>Walnut Creek, California</small>
    </footer>
  );
}
