import styles from "../components/Button.module.css";
import { Link } from "react-router";

function Button({ children, id, type, onClick, to }) {
  if (id)
    return (
      <div className={`${styles.buttonContainer} ${styles[type]}`}>
        <Link to={id}>{children}</Link>
      </div>
    );

  if (onClick)
    return (
      <div className={`${styles.buttonContainer} ${styles[type]}`}>
        <Link onClick={onClick} to={id}>
          {children}
        </Link>
      </div>
    );

  if (to)
    return (
      <div className={`${styles.buttonContainerSmall} ${styles[type]}`}>
        <Link to={to}>{children}</Link>
      </div>
    );
}

export default Button;
