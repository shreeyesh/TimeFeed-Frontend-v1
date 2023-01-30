import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./social-cards-new.module.css";

type SocialCardsNewType = {
  postImage?: string;
  userImage1?: string;
  userImage2?: string;
  userImage3?: string;
  userImage4?: string;
  userImage5?: string;
  timeLeft?: string;
  likeDislike?: string;
  heading?: string;
  descirption?: string;
  iconlyBoldGraph?: string;

  /** Style props */
  image65Width?: Property.Width;
  auctionsBackgroundColor?: Property.BackgroundColor;
  profileBackgroundColor?: Property.BackgroundColor;
  profileBorder?: Property.Border;
  profileBackgroundColor1?: Property.BackgroundColor;
  profileBorder1?: Property.Border;
  profileBackgroundColor2?: Property.BackgroundColor;
  profileBorder2?: Property.Border;
  profileBackgroundColor3?: Property.BackgroundColor;
  profileBorder3?: Property.Border;
  profileBackgroundColor4?: Property.BackgroundColor;
  profileBorder4?: Property.Border;
  rectangle3320BackgroundColor?: Property.BackgroundColor;
  componentColor?: Property.Color;
  formationOfUSEColor?: Property.Color;
};

const SocialCardsNew: NextPage<SocialCardsNewType> = ({
  postImage,
  userImage1,
  userImage2,
  userImage3,
  userImage4,
  userImage5,
  timeLeft,
  likeDislike,
  heading,
  descirption,
  image65Width,
  iconlyBoldGraph,
  auctionsBackgroundColor,
  profileBackgroundColor,
  profileBorder,
  profileBackgroundColor1,
  profileBorder1,
  profileBackgroundColor2,
  profileBorder2,
  profileBackgroundColor3,
  profileBorder3,
  profileBackgroundColor4,
  profileBorder4,
  rectangle3320BackgroundColor,
  componentColor,
  formationOfUSEColor,
}) => {
  const image65IconStyle: CSS.Properties = useMemo(() => {
    return {
      width: image65Width,
    };
  }, [image65Width]);

  const auctions2Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: auctionsBackgroundColor,
    };
  }, [auctionsBackgroundColor]);

  const profile11Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor,
      border: profileBorder,
    };
  }, [profileBackgroundColor, profileBorder]);

  const profile12Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor1,
      border: profileBorder1,
    };
  }, [profileBackgroundColor1, profileBorder1]);

  const profile13Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor2,
      border: profileBorder2,
    };
  }, [profileBackgroundColor2, profileBorder2]);

  const profile14Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor3,
      border: profileBorder3,
    };
  }, [profileBackgroundColor3, profileBorder3]);

  const profile15Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor4,
      border: profileBorder4,
    };
  }, [profileBackgroundColor4, profileBorder4]);

  const rectangleIcon2Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle3320BackgroundColor,
    };
  }, [rectangle3320BackgroundColor]);

  const div5Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor,
    };
  }, [componentColor]);

  const formationOfUSE2Style: CSS.Properties = useMemo(() => {
    return {
      color: formationOfUSEColor,
    };
  }, [formationOfUSEColor]);

  return (
    <div className={styles.auctions} style={auctions2Style}>
      <div className={styles.auctions1}>
        <img
          className={styles.image65Icon}
          alt=""
          src={postImage}
          style={image65IconStyle}
        />
        <div className={styles.profileParent}>
          <div className={styles.profile} style={profile11Style}>
            <img className={styles.image29Icon} alt="" src={userImage1} />
          </div>
          <div className={styles.profile1} style={profile12Style}>
            <img className={styles.image29Icon} alt="" src={userImage2} />
          </div>
          <div className={styles.profile2} style={profile13Style}>
            <img className={styles.image29Icon} alt="" src={userImage3} />
          </div>
          <div className={styles.profile3} style={profile14Style}>
            <img className={styles.image29Icon} alt="" src={userImage4} />
          </div>
          <div className={styles.profile4} style={profile15Style}>
            <img className={styles.image29Icon} alt="" src={userImage5} />
          </div>
          <img
            className={styles.verified2Icon}
            alt=""
            src="../Assets/verified-21@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="../Assets/blurText14@2x.png"
            style={rectangleIcon2Style}
          />
          <div className={styles.iconlyboldgraphParent}>
            <img
              className={styles.iconlyboldgraph}
              alt=""
              src={iconlyBoldGraph}
            />
            <div className={styles.div} style={div5Style}>
              {timeLeft}
            </div>
          </div>
        </div>
        <img className={styles.auctionsChild} alt="" src={likeDislike} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.formationOfUseParent}>
            <div className={styles.formationOfUse} style={formationOfUSE2Style}>
              {heading}
            </div>
            <img
              className={styles.image29Icon5}
              alt=""
              src="../Assets/image-2913@2x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.descriptionWrapper}>
              <div className={styles.description}>
                <p className={styles.iFeelLike}>{descirption}</p>
                <p className={styles.europeLedBy}>
                  {" "}
                  Europe led by Germany is needed...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default SocialCardsNew;
