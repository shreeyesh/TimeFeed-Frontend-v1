import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./creater-cards.module.css";

type CreaterCardsType = {
  cover?: string;
  pfp?: string;
  username?: string;
  clanName?: string;
  numberofPost?: string;
  numberofFans?: string;
  bestRun?: string;
  timeEarned?: string;
  verified2?: string;
  image30?: string;
  image301?: string;

  /** Style props */
  image67Height?: Property.Height;
  image71Height?: Property.Height;
  image71Width?: Property.Width;
  image71Right?: Property.Right;
  image71Bottom?: Property.Bottom;
  image67Width?: Property.Width;
  image67Left?: Property.Left;
  frame34347BackgroundColor?: Property.BackgroundColor;
  frame34347BackgroundColor1?: Property.BackgroundColor;
  profileBackgroundColor?: Property.BackgroundColor;
  profileBorder?: Property.Border;
  kellyRossColor?: Property.Color;
  clanGHOSTOFICPWidth?: Property.Width;
  identityBackgroundColor?: Property.BackgroundColor;
  identityBorderRight?: Property.BorderRight;
  kColor?: Property.Color;
  identityBackgroundColor1?: Property.BackgroundColor;
  identityBorderRight1?: Property.BorderRight;
  kColor1?: Property.Color;
  identityBackgroundColor2?: Property.BackgroundColor;
  identityBorderRight2?: Property.BorderRight;
  componentColor?: Property.Color;
  identityBackgroundColor3?: Property.BackgroundColor;
  kColor2?: Property.Color;
  image67Top?: Property.Top;
  image71Top?: Property.Top;
  image71Left?: Property.Left;
};

const CreaterCards: NextPage<CreaterCardsType> = ({
  cover,
  pfp,
  username,
  clanName,
  numberofPost,
  numberofFans,
  bestRun,
  timeEarned,
  image67Height,
  image71Height,
  image71Width,
  image71Right,
  image71Bottom,
  verified2,
  image30,
  image67Width,
  image67Left,
  frame34347BackgroundColor,
  frame34347BackgroundColor1,
  profileBackgroundColor,
  profileBorder,
  kellyRossColor,
  clanGHOSTOFICPWidth,
  identityBackgroundColor,
  identityBorderRight,
  kColor,
  identityBackgroundColor1,
  identityBorderRight1,
  kColor1,
  identityBackgroundColor2,
  identityBorderRight2,
  componentColor,
  identityBackgroundColor3,
  kColor2,
  image67Top,
  image71Top,
  image71Left,
  image301,
}) => {
  const image67IconStyle: CSS.Properties = useMemo(() => {
    return {
      height: image67Height,
      width: image67Width,
      left: image67Left,
      top: image67Top,
    };
  }, [image67Height, image67Width, image67Left, image67Top]);

  const image71IconStyle: CSS.Properties = useMemo(() => {
    return {
      height: image71Height,
      width: image71Width,
      right: image71Right,
      bottom: image71Bottom,
      top: image71Top,
      left: image71Left,
    };
  }, [
    image71Height,
    image71Width,
    image71Right,
    image71Bottom,
    image71Top,
    image71Left,
  ]);

  const frameDiv10Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame34347BackgroundColor,
    };
  }, [frame34347BackgroundColor]);

  const frameDiv11Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame34347BackgroundColor1,
    };
  }, [frame34347BackgroundColor1]);

  const profile17Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor,
      border: profileBorder,
    };
  }, [profileBackgroundColor, profileBorder]);

  const kellyRossStyle: CSS.Properties = useMemo(() => {
    return {
      color: kellyRossColor,
    };
  }, [kellyRossColor]);

  const clanGHOSTContainerStyle: CSS.Properties = useMemo(() => {
    return {
      width: clanGHOSTOFICPWidth,
    };
  }, [clanGHOSTOFICPWidth]);

  const identityStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: identityBackgroundColor,
      borderRight: identityBorderRight,
    };
  }, [identityBackgroundColor, identityBorderRight]);

  const kStyle: CSS.Properties = useMemo(() => {
    return {
      color: kColor,
    };
  }, [kColor]);

  const identity1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: identityBackgroundColor1,
      borderRight: identityBorderRight1,
    };
  }, [identityBackgroundColor1, identityBorderRight1]);

  const k1Style: CSS.Properties = useMemo(() => {
    return {
      color: kColor1,
    };
  }, [kColor1]);

  const identity2Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: identityBackgroundColor2,
      borderRight: identityBorderRight2,
    };
  }, [identityBackgroundColor2, identityBorderRight2]);

  const div6Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor,
    };
  }, [componentColor]);

  const identity3Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: identityBackgroundColor3,
    };
  }, [identityBackgroundColor3]);

  const k2Style: CSS.Properties = useMemo(() => {
    return {
      color: kColor2,
    };
  }, [kColor2]);

  return (
    <div className={styles.frameParent} style={frameDiv10Style}>
      <div className={styles.image67Wrapper} style={frameDiv11Style}>
        <img
          className={styles.image67Icon}
          alt=""
          src={cover}
          style={image67IconStyle}
        />
      </div>
      <div className={styles.profileParent}>
        <div className={styles.profile} style={profile17Style}>
          <img
            className={styles.image71Icon}
            alt=""
            src={pfp}
            style={image71IconStyle}
          />
        </div>
        <img className={styles.verified2Icon} alt="" src={verified2} />
      </div>
      <div className={styles.kellyRossParent}>
        <div className={styles.kellyRoss} style={kellyRossStyle}>
          {username}
        </div>
        <div
          className={styles.clanGhostContainer}
          style={clanGHOSTContainerStyle}
        >
          <span>{`Clan : `}</span>
          <span className={styles.ghostOfIcp}>{clanName}</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.identity} style={identityStyle}>
          <div className={styles.postsParent}>
            <div className={styles.posts}>Posts</div>
            <div className={styles.k} style={kStyle}>
              {numberofPost}
            </div>
          </div>
        </div>
        <div className={styles.identity} style={identity1Style}>
          <div className={styles.postsParent}>
            <div className={styles.posts}>Fans</div>
            <div className={styles.k} style={k1Style}>
              {numberofFans}
            </div>
          </div>
        </div>
        <div className={styles.identity} style={identity2Style}>
          <div className={styles.postsParent}>
            <div className={styles.posts}>Best Run</div>
            <div className={styles.image30Parent}>
              <img className={styles.image30Icon} alt="" src={image301} />
              <div className={styles.kellyRoss} style={div6Style}>
                {bestRun}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.identity3} style={identity3Style}>
          <div className={styles.postsParent}>
            <div className={styles.posts}>Time Earned</div>
            <div className={styles.image30Parent}>
              <img className={styles.image30Icon} alt="" src={image30} />
              <div className={styles.kellyRoss} style={k2Style}>
                {timeEarned}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreaterCards;
