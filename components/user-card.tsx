import type { NextPage } from "next";
import styles from "./user-card.module.css";

type UserCardType = {
  pfpUsercard?: string;
  clanName?: string;
  usernameHandle?: string;
  bio?: string;
  followers?: string;
  following?: string;
  userImage1?: string;
  userImage2?: string;
  userImage3?: string;
  userImage4?: string;
  userImage5?: string;
};

const UserCard: NextPage<UserCardType> = ({
  pfpUsercard,
  clanName,
  usernameHandle = "Username            @Username",
  bio = "User bio",
  followers,
  following,
  userImage1,
  userImage2,
  userImage3,
  userImage4,
  userImage5,
}) => {
  return (
    <div className={styles.auctions}>
      <div className={styles.usercard}>
        <img className={styles.image56Icon} alt="" src={pfpUsercard} />
        <img className={styles.usercardChild} alt="" />
        <button className={styles.rectangleParent} autoFocus>
          <img
            className={styles.groupChild}
            alt=""
            src="../Assets/blurText15@2x.png"
          />
          <div className={styles.iconlyboldgraphParent}>
            <img className={styles.iconlyboldgraph} alt="" />
            <img
              className={styles.vuesaxlinearunlimitedIcon}
              alt=""
              src="../Assets/vuesaxlinearunlimited1.svg"
            />
            <div className={styles.follow}>FOLLOW</div>
          </div>
        </button>
        <button className={styles.rectangleGroup}>
          <img
            className={styles.groupChild}
            alt=""
            loading="lazy"
            src="../Assets/TransperentText1@2x.png"
          />
          <div className={styles.iconlyboldgraphGroup}>
            <img className={styles.iconlyboldgraph1} alt="" />
            <img className={styles.vuesaxlinearunlimitedIcon} alt="" />
            <div className={styles.follow}>{clanName}</div>
          </div>
        </button>
        <button className={styles.rectangleContainer}>
          <img
            className={styles.groupChild}
            alt=""
            loading="lazy"
            src="../Assets/blurText16@2x.png"
          />
          <div className={styles.vuesaxlinearuserSquareParent}>
            <img
              className={styles.vuesaxlinearuserSquareIcon}
              alt=""
              src="../Assets/vuesaxlinearusersquare1.svg"
            />
            <div className={styles.profile}>PROFILE</div>
          </div>
        </button>
        <img
          className={styles.vuesaxlinearpeopleIcon}
          alt=""
          src="../Assets/vuesaxlinearpeople1.svg"
        />
      </div>
      <img
        className={styles.verified2Icon}
        alt=""
        src="../Assets/verified-249@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.alexRodriguesAlexirWrapper}>
            <div className={styles.alexRodriguesAlexir}>{usernameHandle}</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.descriptionWrapper}>
              <div className={styles.description}>
                <p className={styles.carpediemVirgo}>
                  <span>{bio}</span>
                </p>
                <p className={styles.carpediemVirgo}>
                  <span>&nbsp;</span>
                </p>
                <p className={styles.followers20kCla}>
                  <span>{`       `}</span>
                  <span>{followers}</span>
                </p>
                <p className={styles.carpediemVirgo}>
                  <span>{`                                                   `}</span>
                </p>
                <p className={styles.following5743Byach}>
                  <span>{following}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileParent}>
          <div className={styles.profile1}>
            <img className={styles.image29Icon} alt="" src={userImage1} />
          </div>
          <div className={styles.profile2}>
            <img className={styles.image29Icon} alt="" src={userImage2} />
          </div>
          <div className={styles.profile3}>
            <img className={styles.image29Icon} alt="" src={userImage3} />
          </div>
          <div className={styles.profile4}>
            <img className={styles.image29Icon} alt="" src={userImage4} />
          </div>
          <div className={styles.profile5}>
            <img className={styles.image29Icon} alt="" src={userImage5} />
          </div>
          <img
            className={styles.verified2Icon1}
            alt=""
            src="../Assets/verified-21@2x.png"
          />
        </div>
      </div>
      <div className={styles.mutualFollowers}>MUTUAL FOLLOWERS</div>
    </div>
  );
};

export default UserCard;
