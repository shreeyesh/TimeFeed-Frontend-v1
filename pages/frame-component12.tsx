import type { NextPage } from "next";
import styles from "./frame-component12.module.css";

const FrameComponent12: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.frameItem}
        alt=""
        src="../Assets/ellipse-1146.svg"
      />
    </div>
  );
};

export default FrameComponent12;
