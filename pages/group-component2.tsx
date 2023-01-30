import type { NextPage } from "next";
import styles from "./group-component2.module.css";

const GroupComponent2: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img
        className={styles.groupItem}
        alt=""
        src="../Assets/ellipse-1146.svg"
      />
    </div>
  );
};

export default GroupComponent2;
