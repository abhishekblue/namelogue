import Link from "next/link";
import { AdSlot } from "@/components/AdSlot/AdSlot";
import { NAV } from "@/lib/navigation";
import styles from "./Sidebar.module.css";

export type SidebarArticle = {
  slug: string;
  title: string;
  views?: string | number;
};

type SidebarProps = {
  articles?: SidebarArticle[];
};

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function Sidebar({ articles }: SidebarProps) {
  const mostRead = (articles ?? []).slice(0, 5);

  return (
    <aside className={styles.sidebar}>
      <AdSlot label="Sidebar · 300×250 · Ezoic placeholder" height={220} />

      <section className={styles.card}>
        <h3 className={styles.cardTitle}>Most Read</h3>
        {mostRead.length === 0 ? (
          <p className={styles.empty}>No articles to show yet.</p>
        ) : (
          <ol className={styles.mostReadList}>
            {mostRead.map((article, i) => (
              <li key={article.slug} className={styles.mostReadItem}>
                <span className={styles.mostReadRank}>{i + 1}</span>
                <div>
                  <Link
                    href={`/${article.slug}`}
                    className={styles.mostReadTitle}
                  >
                    {article.title}
                  </Link>
                  {article.views !== undefined && (
                    <div className={styles.mostReadMeta}>
                      {article.views} views
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section className={styles.card}>
        <h3 className={styles.cardTitle}>Browse Names by Letter</h3>
        <div className={styles.alphaGrid}>
          {ALPHA.map((letter) => (
            <Link
              key={letter}
              href={`/letter/${letter.toLowerCase()}`}
              className={styles.alphaCell}
            >
              {letter}
            </Link>
          ))}
        </div>
        <p className={styles.alphaHint}>e.g. &quot;A&quot; → all A-names</p>
      </section>

      <section className={styles.card}>
        <h3 className={styles.cardTitle}>Categories</h3>
        <ul className={styles.categoryList}>
          {NAV.map((item) => (
            <li key={item.href} className={styles.categoryItem}>
              <Link href={item.href} className={styles.categoryLink}>
                <span>{item.label}</span>
                <span className={styles.categoryArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AdSlot label="Sticky sidebar · 300×600 · Ezoic" height={480} />
    </aside>
  );
}
