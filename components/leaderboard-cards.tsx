import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./leaderboard-cards.module.css";

type LeaderboardCardsType = {
  component?: string;
  image29?: string;
  userName?: string;
  description?: string;
  divider?: string;
  percentGain?: string;
  runTime?: string;

  /** Style props */
  componentLeft?: Property.Left;
  frame8BackgroundColor?: Property.BackgroundColor;
  profileBackgroundColor?: Property.BackgroundColor;
  labelColor?: Property.Color;
  labelColor1?: Property.Color;
};

const LeaderboardCards: NextPage<LeaderboardCardsType> = ({
  component = "NA",
  image29,
  userName = "Username",
  description,
  divider,
  percentGain,
  runTime = "0s",
  componentLeft,
  frame8BackgroundColor,
  profileBackgroundColor,
  labelColor,
  labelColor1,
}) => {
  const bStyle: CSS.Properties = useMemo(() => {
    return {
      left: componentLeft,
    };
  }, [componentLeft]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame8BackgroundColor,
    };
  }, [frame8BackgroundColor]);

  const profileStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor,
    };
  }, [profileBackgroundColor]);

  const labelStyle: CSS.Properties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  const label1Style: CSS.Properties = useMemo(() => {
    return {
      color: labelColor1,
    };
  }, [labelColor1]);

  return (
    <div className={styles.parent} style={frameDiv1Style}>
      <b className={styles.b} style={bStyle}>
        {component}
      </b>
      <div className={styles.profileParent}>
        <div className={styles.profile} style={profileStyle}>
          <img
            className={styles.image29Icon}
            alt=""
            loading="eager"
            src={image29}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.label} style={labelStyle}>
            {userName}
          </div>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>Best Run</div>
            <div className={styles.descriptionWrapper}>
              <div className={styles.description}>{runTime}</div>
            </div>
          </div>
        </div>
        <img
          className={styles.verified1Icon}
          alt=""
          src="../Assets/verified-1@2x.png"
        />
      </div>
      <div className={styles.info1}>
        <div className={styles.label1} style={label1Style}>
          {percentGain}
        </div>
        <div className={styles.image28Parent}>
          <img
            className={styles.image28Icon}
            alt=""
            src="../Assets/image-28@2x.png"
          />
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <img className={styles.dividerIcon} alt="" src={divider} />
    </div>
  );
};

export default LeaderboardCards;
