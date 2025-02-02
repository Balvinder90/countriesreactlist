import styles from "../components/Filters.module.css";

function Filters({ children }) {
  return <div className={styles.filterContainer}>{children}</div>;
}

export default Filters;
