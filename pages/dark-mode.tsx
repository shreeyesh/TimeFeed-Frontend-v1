import type { NextPage } from "next";
import styles from "./dark-mode.module.css";

const DarkMode: NextPage = () => {
  return (
    <div className={styles.darkMode}>
      <img
        className={styles.darkModeChild}
        alt=""
        src="../Assets/ellipse-17.svg"
      />
    </div>
  );
};

export default DarkMode;
