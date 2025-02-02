import styles from "../components/SearchBar.module.css";

function SearchBar({
  search,
  setSearch,
  setSortedByName,
  setSortedByPopulation,
}) {
  return (
    <div className={styles.outer}>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          setSortedByName(null);
          setSortedByPopulation(null);
        }}
        value={search}
        className={styles.input}
        placeholder="Search for Countries..."
      />
    </div>
  );
}

export default SearchBar;
