"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "./artwork";
import { association } from "@/lib/association";

const navigation = [{ href: "#about", label: "About ASA" }, { href: "#community", label: "Community" }, { href: "#connect", label: "Get involved" }];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const closeOnResize = () => { if (window.innerWidth > 760) setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => { document.removeEventListener("keydown", closeOnEscape); window.removeEventListener("resize", closeOnResize); };
  }, [open]);

  return <header className="site-header"><div className="header-inner wrap">
    <a className="brand" href="#home" aria-label="UChicago Arab Student Association home" onClick={() => setOpen(false)}><span className="brand-lettering">asa<span>.</span></span><span className="brand-rule" /><span className="brand-caption">ARAB STUDENT ASSOCIATION<br /><strong>THE UNIVERSITY OF CHICAGO</strong></span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <a className="header-join" href={association.mailingList} target="_blank" rel="noopener noreferrer">Join the mailing list <Arrow diagonal /></a>
    <button className="menu-toggle" ref={toggle} aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span className={open ? "open" : ""} /><span className={open ? "open" : ""} /></button>
  </div><nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Arrow /></a>)}<a href={association.mailingList} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Join the mailing list <Arrow diagonal /></a></nav></header>;
}
