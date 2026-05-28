import styles from "./SearchBar.module.css";

type SearchBarProps = {
  large?: boolean;
};

export function SearchBar({ large = false }: SearchBarProps) {
  return (
    <form
      action="https://www.google.com/search"
      method="GET"
      target="_blank"
      role="search"
      className={`${styles.form} ${large ? styles.large : styles.small}`}
    >
      <input type="hidden" name="as_sitesearch" value="namelogue.com" />
      <span className={styles.icon} aria-hidden="true">
        ⌕
      </span>
      <input
        name="q"
        type="text"
        placeholder={large ? "Search 30,000+ names..." : "Search names..."}
        aria-label="Search Namelogue"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
