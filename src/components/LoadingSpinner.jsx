import styles from "../components/LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>;
    </div>
  );
}

export default LoadingSpinner;
