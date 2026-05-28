"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/navigation";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import styles from "./Header.module.css";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(styles.bodyLock, mobileOpen);
    return () => document.body.classList.remove(styles.bodyLock);
  }, [mobileOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Namelogue home">
          <span className={styles.brandMark} aria-hidden="true">
            N
          </span>
          <span className={styles.brandWord}>Namelogue</span>
        </Link>

        <button
          type="button"
          className={styles.hamburger}
          aria-expanded={mobileOpen}
          aria-controls="namelogue-primary-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>

        <nav
          id="namelogue-primary-nav"
          className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`}
          aria-label="Primary"
        >
          <ul className={styles.navList}>
            {NAV.map((item) => (
              <li
                key={item.href}
                className={`${styles.navItem} ${
                  item.children ? styles.hasChildren : ""
                }`}
              >
                <Link
                  href={item.href}
                  className={styles.navLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.children && (
                    <span className={styles.caret} aria-hidden="true">
                      ▾
                    </span>
                  )}
                </Link>
                {item.children && (
                  <ul className={styles.dropdown} role="menu">
                    {item.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          role="menuitem"
                          className={styles.dropdownLink}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
