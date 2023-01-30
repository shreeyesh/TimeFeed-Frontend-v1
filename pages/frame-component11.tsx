import type { NextPage } from "next";
import styles from "./frame-component11.module.css";

const FrameComponent11: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="../Assets/vector6.svg" />
        <img
          className={styles.vuesaxlinearheartSlashIcon}
          alt=""
          src="../Assets/vuesaxlinearheartslash4.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent11;
