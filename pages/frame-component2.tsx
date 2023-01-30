import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.logoClouds1Parent}>
      <div className={styles.logoClouds1}>
        <div className={styles.logosSection}>
          <img
            className={styles.dividerIcon}
            alt=""
            src="../Assets/divider14.svg"
          />
          <div className={styles.logos}>
            <img
              className={styles.image36Icon}
              alt=""
              src="../Assets/image-36@2x.png"
            />
            <img
              className={styles.image37Icon}
              alt=""
              src="../Assets/image-37@2x.png"
            />
            <img
              className={styles.image38Icon}
              alt=""
              src="../Assets/image38@3x.png"
            />
            <img
              className={styles.image39Icon}
              alt=""
              src="../Assets/image-39@2x.png"
            />
            <img
              className={styles.image41Icon}
              alt=""
              src="../Assets/image-418@2x.png"
            />
          </div>
          <img
            className={styles.dividerIcon}
            alt=""
            src="../Assets/divider15.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
