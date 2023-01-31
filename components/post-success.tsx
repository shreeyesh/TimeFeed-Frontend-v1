import type { NextPage } from "next";
import styles from "./post-created.module.css";

type PostSuccessType = {
  onClose?: () => void;
};

const PostSuccess: NextPage<PostSuccessType> = ({ onClose }) => {
  return <div className={styles.postCreated} />;
};

export default PostSuccess;
