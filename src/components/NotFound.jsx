import styles from "./NotFound.module.css";

import Button from "./Button";

function NotFound({ children }) {
  return (
    <div className={styles.notFoundContainer}>
      <h2>{children}</h2>
      <Button type="error" replace to="/">
        Home
      </Button>
    </div>
  );
}

export default NotFound;
