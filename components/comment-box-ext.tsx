import type { NextPage } from "next";
import styles from "./comment-box-ext.module.css";

type CommentBoxExtType = {
  commentPfp?: string;
  username?: string;
  handle?: string;
  commentText?: string;
};

const CommentBoxExt: NextPage<CommentBoxExtType> = ({
  commentPfp,
  username = "username",
  handle = "@handle",
  commentText = "commentText",
}) => {
  return (
    <div className={styles.property1variant2}>
      <div className={styles.frameParent}>
        <div className={styles.image41Parent}>
          <img className={styles.image41Icon} alt="" src={commentPfp} />
          <div className={styles.inputleftaddon}>
            <p className={styles.ryanSmith}>{username}</p>
            <p className={styles.ryanfeeds}>{handle}</p>
          </div>
        </div>
        <div className={styles.textPlaceholderWrapper}>
          <div className={styles.textPlaceholder}>{commentText}</div>
        </div>
      </div>
      <div className={styles.property1variant2Inner}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="../Assets/vector63.svg"
          />
          <img
            className={styles.vuesaxlinearheartSlashIcon}
            alt=""
            src="../Assets/vuesaxlinearheartslash41.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentBoxExt;
