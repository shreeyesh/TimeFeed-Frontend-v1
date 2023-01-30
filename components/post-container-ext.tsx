import type { NextPage } from "next";
import styles from "./post-container-ext.module.css";

const PostContainerExt: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.formationOfUseParent}>
          <div className={styles.formationOfUse}>Formation of USE</div>
          <img
            className={styles.image29Icon}
            alt=""
            src="../Assets/image-2913@2x.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <p className={styles.iFeelLike}>
                I feel like formation of United States of
              </p>
              <p className={styles.europeLedBy}>
                {" "}
                Europe led by Germany is needed...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.timeGainedParent}>
        <div className={styles.timeGained}>Time Gained</div>
        <div className={styles.div}>1:28</div>
      </div>
    </div>
  );
};

export default PostContainerExt;
