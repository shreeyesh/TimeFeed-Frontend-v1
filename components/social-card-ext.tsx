import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./social-card-ext.module.css";

type SocialCardExtType = {
  postImage?: string;
  userImage1?: string;
  userImage2?: string;
  userImage3?: string;
  userImage4?: string;
  userImage5?: string;
  timeLeft?: string;
  likeDislike?: string;
  heading?: string;
  description?: string;
  iconlyBoldGraph?: string;

  /** Style props */
  auctionsHeight?: Property.Height;
  image46Left?: Property.Left;
  frame34331Gap?: Property.Gap;
  descriptionWidth?: Property.Width;
  frame34325Position?: Property.Position;
  frame34325Top?: Property.Top;
  frame34325Left?: Property.Left;
  frame34325Display?: Property.Display;
  frame34325FlexDirection?: Property.FlexDirection;
  frame34325AlignItems?: Property.AlignItems;
  frame34325JustifyContent?: Property.JustifyContent;
  timeGainedPosition?: Property.Position;
  timeGainedTop?: Property.Top;
  timeGainedLeft?: Property.Left;
  timeGainedFlexShrink?: Property.FlexShrink;
  componentPosition?: Property.Position;
  componentTop?: Property.Top;
  componentLeft?: Property.Left;
  image46Width?: Property.Width;
  image46BorderRadius?: Property.BorderRadius;
  image46Height?: Property.Height;
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
  climateChangeAGlobalCrisiColor?: Property.Color;
  timeGainedColor?: Property.Color;
  componentColor1?: Property.Color;
};

const SocialCardExt: NextPage<SocialCardExtType> = ({
  postImage,
  userImage1,
  userImage2,
  userImage3,
  userImage4,
  userImage5,
  timeLeft,
  auctionsHeight,
  image46Left,
  likeDislike,
  frame34331Gap,
  heading,
  description,
  descriptionWidth,
  frame34325Position,
  frame34325Top,
  frame34325Left,
  frame34325Display,
  frame34325FlexDirection,
  frame34325AlignItems,
  frame34325JustifyContent,
  timeGainedPosition,
  timeGainedTop,
  timeGainedLeft,
  timeGainedFlexShrink,
  componentPosition,
  componentTop,
  componentLeft,
  image46Width,
  image46BorderRadius,
  image46Height,
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
  iconlyBoldGraph,
  componentColor,
  climateChangeAGlobalCrisiColor,
  timeGainedColor,
  componentColor1,
}) => {
  const auctions1Style: CSS.Properties = useMemo(() => {
    return {
      height: auctionsHeight,
      backgroundColor: auctionsBackgroundColor,
    };
  }, [auctionsHeight, auctionsBackgroundColor]);

  const image46IconStyle: CSS.Properties = useMemo(() => {
    return {
      left: image46Left,
      width: image46Width,
      borderRadius: image46BorderRadius,
      height: image46Height,
    };
  }, [image46Left, image46Width, image46BorderRadius, image46Height]);

  const frameDiv4Style: CSS.Properties = useMemo(() => {
    return {
      gap: frame34331Gap,
    };
  }, [frame34331Gap]);

  const descriptionStyle: CSS.Properties = useMemo(() => {
    return {
      width: descriptionWidth,
    };
  }, [descriptionWidth]);

  const frameDiv5Style: CSS.Properties = useMemo(() => {
    return {
      position: frame34325Position,
      top: frame34325Top,
      left: frame34325Left,
      display: frame34325Display,
      flexDirection: frame34325FlexDirection,
      alignItems: frame34325AlignItems,
      justifyContent: frame34325JustifyContent,
    };
  }, [
    frame34325Position,
    frame34325Top,
    frame34325Left,
    frame34325Display,
    frame34325FlexDirection,
    frame34325AlignItems,
    frame34325JustifyContent,
  ]);

  const timeGained2Style: CSS.Properties = useMemo(() => {
    return {
      position: timeGainedPosition,
      top: timeGainedTop,
      left: timeGainedLeft,
      flexShrink: timeGainedFlexShrink,
      color: timeGainedColor,
    };
  }, [
    timeGainedPosition,
    timeGainedTop,
    timeGainedLeft,
    timeGainedFlexShrink,
    timeGainedColor,
  ]);

  const div3Style: CSS.Properties = useMemo(() => {
    return {
      position: componentPosition,
      top: componentTop,
      left: componentLeft,
      color: componentColor1,
    };
  }, [componentPosition, componentTop, componentLeft, componentColor1]);

  const profile6Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor,
      border: profileBorder,
    };
  }, [profileBackgroundColor, profileBorder]);

  const profile7Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor1,
      border: profileBorder1,
    };
  }, [profileBackgroundColor1, profileBorder1]);

  const profile8Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor2,
      border: profileBorder2,
    };
  }, [profileBackgroundColor2, profileBorder2]);

  const profile9Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor3,
      border: profileBorder3,
    };
  }, [profileBackgroundColor3, profileBorder3]);

  const profile10Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor4,
      border: profileBorder4,
    };
  }, [profileBackgroundColor4, profileBorder4]);

  const rectangleIcon1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle3320BackgroundColor,
    };
  }, [rectangle3320BackgroundColor]);

  const div4Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor,
    };
  }, [componentColor]);

  const climateChangeAStyle: CSS.Properties = useMemo(() => {
    return {
      color: climateChangeAGlobalCrisiColor,
    };
  }, [climateChangeAGlobalCrisiColor]);

  return (
    <div className={styles.auctions} style={auctions1Style}>
      <div className={styles.auctions1}>
        <img
          className={styles.image46Icon}
          alt=""
          src={postImage}
          style={image46IconStyle}
        />
        <div className={styles.profileParent}>
          <div className={styles.profile} style={profile6Style}>
            <img className={styles.image29Icon} alt="" src={userImage1} />
          </div>
          <div className={styles.profile1} style={profile7Style}>
            <img className={styles.image29Icon} alt="" src={userImage2} />
          </div>
          <div className={styles.profile2} style={profile8Style}>
            <img className={styles.image29Icon} alt="" src={userImage3} />
          </div>
          <div className={styles.profile3} style={profile9Style}>
            <img className={styles.image29Icon} alt="" src={userImage4} />
          </div>
          <div className={styles.profile4} style={profile10Style}>
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
            src="../Assets/blurText1@2x.png"
            style={rectangleIcon1Style}
          />
          <div className={styles.iconlyboldgraphParent}>
            <img
              className={styles.iconlyboldgraph}
              alt=""
              src={iconlyBoldGraph}
            />
            <div className={styles.div} style={div4Style}>
              {timeLeft}
            </div>
          </div>
        </div>
        <img className={styles.auctionsChild} alt="" src={likeDislike} />
      </div>
      <div className={styles.frameParent} style={frameDiv4Style}>
        <div className={styles.frameGroup}>
          <div className={styles.climateChangeAGlobalCrisiParent}>
            <div className={styles.climateChangeA} style={climateChangeAStyle}>
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
              <div className={styles.description} style={descriptionStyle}>
                {description}
              </div>
            </div>
          </div>
        </div>
        <div style={frameDiv5Style} />
      </div>
      <div className={styles.timeGained} style={timeGained2Style}>
        Time Gained
      </div>
      <div className={styles.div1} style={div3Style}>
        1:28
      </div>
    </div>
  );
};

export default SocialCardExt;
