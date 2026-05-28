import styles from "./AdSlot.module.css";

type AdSlotProps = {
  label: string;
  height?: number;
};

export function AdSlot({ label, height = 90 }: AdSlotProps) {
  return (
    <div className={styles.adSlot} style={{ height }} aria-hidden="true">
      <span className={styles.label}>{label}</span>
    </div>
  );
}
