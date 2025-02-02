import styles from "./Error.module.css";

import Button from "./Button";
import Container from "./Container";

function Error() {
  return (
    <Container>
      <div className={styles.errorContainer}>
        <h2>Oops...something has gone wrong</h2>
        <Button type="error" replace to="/">
          Go Back
        </Button>
      </div>
    </Container>
  );
}

export default Error;
