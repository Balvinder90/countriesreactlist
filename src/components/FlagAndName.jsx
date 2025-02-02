import styles from "../components/FlagAndName.module.css";

function FlagAndTitle({ flag, name }) {
  const { svg, alt } = flag;

  return (
    <div className={styles.flagNameContainer}>
      <img src={svg} alt={alt} title={`The Flag of of ${name}`} />
      <h2>{name}</h2>
    </div>
  );
}

export default FlagAndTitle;
