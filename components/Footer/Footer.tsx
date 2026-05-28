import Link from "next/link";
import { FOOTER_CATEGORIES } from "@/lib/navigation";
import styles from "./Footer.module.css";

const POPULAR_TOPICS = [
  { label: "Boy Names", href: "/boy" },
  { label: "Girl Names", href: "/girl" },
  { label: "Unisex Names", href: "/unisex" },
  { label: "Names by Origin", href: "/names-by-origin" },
  { label: "Names by Meaning", href: "/names-by-meaning" },
  { label: "Trending 2026", href: "/trending-2026" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const POPULAR_INLINE = [
  { label: "Indian Names", href: "/indian-names" },
  { label: "Japanese Names", href: "/japanese-names" },
  { label: "Spanish Names", href: "/spanish-names" },
  { label: "Hebrew Names", href: "/hebrew-names" },
  { label: "Arabic Names", href: "/arabic-names" },
  { label: "Greek Names", href: "/greek-names" },
  { label: "Names Meaning Love", href: "/names-meaning-love" },
  { label: "Names Meaning Strong", href: "/names-meaning-strong" },
  { label: "Names Meaning Light", href: "/names-meaning-light" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brand}>
              Namelogue
            </Link>
            <p className={styles.brandTagline}>
              Curated name articles with meanings, origins &amp; inspiration for
              every purpose.
            </p>
          </div>

          <FooterColumn title="Popular Topics" links={POPULAR_TOPICS} />
          <FooterColumn title="Categories" links={FOOTER_CATEGORIES} />
          <FooterColumn title="Company" links={COMPANY} />
        </div>

        <div className={styles.seoBlock}>
          <p className={styles.seoLine}>
            Names Starting With:{" "}
            {ALPHA.map((letter, i) => (
              <span key={letter}>
                <Link
                  href={`/letter/${letter.toLowerCase()}`}
                  className={styles.seoLink}
                >
                  {letter}
                </Link>
                {i < ALPHA.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          <p className={styles.seoLine}>
            Popular:{" "}
            {POPULAR_INLINE.map((item, i) => (
              <span key={item.href}>
                <Link href={item.href} className={styles.seoLink}>
                  {item.label}
                </Link>
                {i < POPULAR_INLINE.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          <div className={styles.copyright}>
            © 2026 Namelogue. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className={styles.columnTitle}>{title}</h4>
      <ul className={styles.columnList}>
        {links.map((link) => (
          <li key={link.href} className={styles.columnItem}>
            <Link href={link.href} className={styles.columnLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
