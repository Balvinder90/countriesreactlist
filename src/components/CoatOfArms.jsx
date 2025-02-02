import styles from "../components/CoatOfArms.module.css";

function CoatOfArms({ coatOfArms, name }) {
  const { png } = coatOfArms;

  return (
    <div className={styles.coatOfArmsContainer}>
      <img
        src={png}
        title={`The coat of arms for ${name}`}
        alt={`The coat of arms for ${name}`}
      />
      <h2>Coat of Arms</h2>
    </div>
  );
}

export default CoatOfArms;
