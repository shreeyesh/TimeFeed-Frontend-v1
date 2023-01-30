import type { NextPage } from "next";
import styles from "./profile.module.css";

const Profile: NextPage = () => {
  return (
    <div className={styles.profile}>
      <img
        className={styles.image29Icon}
        alt=""
        src="../Assets/image-29172@2x.png"
      />
      <img
        className={styles.image30Icon}
        alt=""
        src="../Assets/image-3038@2x.png"
      />
    </div>
  );
};

export default Profile;
