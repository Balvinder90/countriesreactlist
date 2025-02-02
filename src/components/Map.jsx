import styles from "../components/Map.module.css";

function Map({ latlng, name }) {
  const [lat, lng] = latlng;

  return (
    <div className={styles.mapContainer}>
      <iframe
        src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${lat},${lng}+(${name})&t=&z=6&ie=UTF8&iwloc=B&output=embed`}
      ></iframe>
    </div>
  );
}

export default Map;
