import styles from "../components/CountriesContainer.module.css";

function CountriesContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default CountriesContainer;
