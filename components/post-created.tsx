import type { NextPage } from "next";
import styles from "./post-created.module.css";

type PostCreatedType = {
  onClose?: () => void;
};

const PostCreated: NextPage<PostCreatedType> = ({ onClose }) => {
  return <div className={styles.postCreated} />;
};

export default PostCreated;
