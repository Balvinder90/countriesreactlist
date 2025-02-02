import styles from "../components/CountryInfo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CountryInfo({ icon, text }) {
  if (!text) return;
  return (
    <div className={styles.iconContainer}>
      <div className={styles.iconOuter}>
        <div className={styles.iconInner}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <p className={styles.info}>{text}</p>
    </div>
  );
}

export default CountryInfo;
