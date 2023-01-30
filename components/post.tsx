import type { NextPage } from "next";
import styles from "./post.module.css";

type PostType = {
  pfpPost?: string;
  username?: string;
  handle?: string;
  postText?: string;
};

const Post: NextPage<PostType> = ({
  pfpPost,
  username = "username",
  handle = "@handle",
  postText,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.image29Parent}>
        <img className={styles.image29Icon} alt="" src={pfpPost} />
        <div className={styles.inputleftaddon}>
          <p className={styles.alexRodrigues}>{username}</p>
          <p className={styles.alexir}>{handle}</p>
        </div>
        <div className={styles.textPlaceholder}>{postText}</div>
      </div>
      <button className={styles.vectorParent}>
        <img
          className={styles.vectorIcon}
          alt=""
          src="../Assets/vector60.svg"
        />
        <div className={styles.vuesaxlinearheartSlash}>
          <div className={styles.heartSlash}>
            <div className={styles.heartSlash}>
              <img
                className={styles.groupIcon}
                alt=""
                src="../Assets/group3.svg"
              />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="../Assets/vector61.svg"
              />
              <img className={styles.vectorIcon2} alt="" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Post;
