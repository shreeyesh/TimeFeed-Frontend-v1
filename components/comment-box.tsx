import type { NextPage } from "next";
import styles from "./comment-box.module.css";

type CommentBoxType = {
  commentText?: string;
  commentPfp?: string;
  username?: string;
  handle?: string;
};

const CommentBox: NextPage<CommentBoxType> = ({
  commentText,
  commentPfp,
  username = "username",
  handle = "@handle",
}) => {
  return (
    <div className={styles.property1default}>
      <div className={styles.textPlaceholderWrapper}>
        <div className={styles.textPlaceholder}>{commentText}</div>
      </div>
      <div className={styles.image41Parent}>
        <img className={styles.image41Icon} alt="" src={commentPfp} />
        <div className={styles.inputleftaddon}>
          <p className={styles.emilyWilson}>{username}</p>
          <p className={styles.emilywilson}>{handle}</p>
        </div>
      </div>
      <div className={styles.property1defaultInner}>
        <button className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="../Assets/vector6.svg"
          />
          <img
            className={styles.vuesaxlinearheartSlashIcon}
            alt=""
            src="../Assets/vuesaxlinearheartslash19.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
