"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Professional Training", href: "/professional-training" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    const desktop = window.matchMedia("(min-width: 1200px)");
    function handleResize() {
      if (desktop.matches) setOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutsideClick);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={styles.header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="RD Prestige Services Corp. — Home" onClick={() => setOpen(false)}>
          {/* Display the two parts of the supplied stacked artwork as a horizontal lockup. */}
          <span className={styles.logoMark} aria-hidden="true">
            <Image src="/logo/rdcsp_logo.png" alt="" width={2000} height={1302} sizes="180px" preload />
          </span>
          <span className={styles.logoWordmark} aria-hidden="true">
            <Image src="/logo/rdcsp_logo.png" alt="" width={2000} height={1302} sizes="280px" loading="eager" />
          </span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" aria-label="Main navigation" className={`${styles.navigation} ${open ? styles.open : ""}`}>
          <ul className={styles.links}>
            {navigation.map(({ label, href }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
              return (
                <li key={href}>
                  <Link href={href} className={`${styles.link} ${active ? styles.active : ""}`} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/contact" className={styles.consultation} onClick={() => setOpen(false)}>
            <CalendarDays size={20} strokeWidth={1.8} aria-hidden="true" />
            Request a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
