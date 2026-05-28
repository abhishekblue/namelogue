import styles from "./StickyMobileAd.module.css";

export function StickyMobileAd() {
  return (
    <div className={styles.bar} aria-hidden="true">
      <span className={styles.label}>Sticky mobile · 320×50 · Ezoic</span>
    </div>
  );
}
