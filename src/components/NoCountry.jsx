import styles from "./NoCountry.module.css";

function NoCountry({ children }) {
  return (
    <div className={styles.noCountryContainer}>
      <h2>{children}</h2>
    </div>
  );
}

export default NoCountry;
