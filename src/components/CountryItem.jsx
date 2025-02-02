import styles from "../components/CountryItem.module.css";

import Button from "../components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faBuilding,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

function CountryItem({ country }) {
  const name = country.name.common;
  const population = country.population;
  const capital = country.capital;
  const flag = country.flags.svg;
  const alt = country.flags.alt;
  const currency = country?.currencies[Object.keys(country.currencies)]?.name;
  const countryCode = country.cca2;

  return (
    <div className={styles.item}>
      <img className={styles.flag} src={flag} alt={alt} title={name} />
      <h2 className={styles.heading}>{name}</h2>

      <div className={styles.iconContainer}>
        <div className={styles.iconOuter}>
          <div className={styles.iconInner}>
            <FontAwesomeIcon icon={faPerson} />
          </div>
        </div>
        <p className={styles.info}>{population}</p>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconOuter}>
          <div className={styles.iconInner}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
        </div>
        <p className={styles.info}>{capital}</p>
      </div>

      {currency && (
        <div className={styles.iconContainer}>
          <div className={styles.iconOuter}>
            <div className={styles.iconInner}>
              <FontAwesomeIcon icon={faCoins} />{" "}
            </div>
          </div>
          <p className={styles.info}>{currency}</p>
        </div>
      )}
      <Button id={countryCode} type="readMore">
        Read More
      </Button>
    </div>
  );
}

export default CountryItem;
