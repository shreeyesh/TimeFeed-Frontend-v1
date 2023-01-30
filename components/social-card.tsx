import type { NextPage } from "next";
import { useMemo, useCallback } from "react";
import CSS, { Property } from "csstype";
import { useRouter } from "next/router";
import styles from "./social-card.module.css";

type SocialCardType = {
  heading?: string;
  postImage?: string;
  userImage1?: string;
  userImage2?: string;
  userImage3?: string;
  userImage4?: string;
  userImage5?: string;
  content?: string;
  timeGain?: string;
  timeLeft?: string;
  group34289?: string;
  iconlyBoldGraph?: string;

  /** Style props */
  image49Left?: Property.Left;
  image49Width?: Property.Width;
  frame34331Gap?: Property.Gap;
  frame34325Display?: Property.Display;
  frame34325FlexDirection?: Property.FlexDirection;
  frame34325AlignItems?: Property.AlignItems;
  frame34325JustifyContent?: Property.JustifyContent;
  timeGainedPosition?: Property.Position;
  timeGainedFlexShrink?: Property.FlexShrink;
  timeGainedTop?: Property.Top;
  timeGainedLeft?: Property.Left;
  componentPosition?: Property.Position;
  componentWidth?: Property.Width;
  componentFlexShrink?: Property.FlexShrink;
  componentTop?: Property.Top;
  componentLeft?: Property.Left;
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
  timeGainedColor?: Property.Color;
  componentColor1?: Property.Color;
};

const SocialCard: NextPage<SocialCardType> = ({
  heading = "Heading",
  postImage,
  userImage1,
  userImage2,
  userImage3,
  userImage4,
  userImage5,
  content,
  timeGain,
  timeLeft,
  image49Left,
  image49Width,
  group34289,
  frame34331Gap,
  frame34325Display,
  frame34325FlexDirection,
  frame34325AlignItems,
  frame34325JustifyContent,
  timeGainedPosition,
  timeGainedFlexShrink,
  timeGainedTop,
  timeGainedLeft,
  componentPosition,
  componentWidth,
  componentFlexShrink,
  componentTop,
  componentLeft,
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
  timeGainedColor,
  componentColor1,
}) => {
  const image49IconStyle: CSS.Properties = useMemo(() => {
    return {
      left: image49Left,
      width: image49Width,
    };
  }, [image49Left, image49Width]);

  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      gap: frame34331Gap,
    };
  }, [frame34331Gap]);

  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      display: frame34325Display,
      flexDirection: frame34325FlexDirection,
      alignItems: frame34325AlignItems,
      justifyContent: frame34325JustifyContent,
    };
  }, [
    frame34325Display,
    frame34325FlexDirection,
    frame34325AlignItems,
    frame34325JustifyContent,
  ]);

  const timeGained1Style: CSS.Properties = useMemo(() => {
    return {
      position: timeGainedPosition,
      flexShrink: timeGainedFlexShrink,
      top: timeGainedTop,
      left: timeGainedLeft,
      color: timeGainedColor,
    };
  }, [
    timeGainedPosition,
    timeGainedFlexShrink,
    timeGainedTop,
    timeGainedLeft,
    timeGainedColor,
  ]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      position: componentPosition,
      width: componentWidth,
      flexShrink: componentFlexShrink,
      top: componentTop,
      left: componentLeft,
      color: componentColor1,
    };
  }, [
    componentPosition,
    componentWidth,
    componentFlexShrink,
    componentTop,
    componentLeft,
    componentColor1,
  ]);

  const auctionsStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: auctionsBackgroundColor,
    };
  }, [auctionsBackgroundColor]);

  const profile1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor,
      border: profileBorder,
    };
  }, [profileBackgroundColor, profileBorder]);

  const profile2Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor1,
      border: profileBorder1,
    };
  }, [profileBackgroundColor1, profileBorder1]);

  const profile3Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor2,
      border: profileBorder2,
    };
  }, [profileBackgroundColor2, profileBorder2]);

  const profile4Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor3,
      border: profileBorder3,
    };
  }, [profileBackgroundColor3, profileBorder3]);

  const profile5Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor4,
      border: profileBorder4,
    };
  }, [profileBackgroundColor4, profileBorder4]);

  const rectangleIconStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangle3320BackgroundColor,
    };
  }, [rectangle3320BackgroundColor]);

  const div2Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor,
    };
  }, [componentColor]);

  const formationOfUSE1Style: CSS.Properties = useMemo(() => {
    return {
      color: formationOfUSEColor,
    };
  }, [formationOfUSEColor]);

  const router = useRouter();

  const onAuctionsContainer1Click = useCallback(() => {
    router.push("/view-post");
  }, [router]);

  return (
    <div
      className={styles.auctions}
      onClick={onAuctionsContainer1Click}
      style={auctionsStyle}
    >
      <div className={styles.auctions1}>
        <img
          className={styles.image49Icon}
          alt=""
          src={postImage}
          style={image49IconStyle}
        />
        <div className={styles.profileParent}>
          <div className={styles.profile} style={profile1Style}>
            <img className={styles.image29Icon} alt="" src={userImage1} />
          </div>
          <div className={styles.profile1} style={profile2Style}>
            <img className={styles.image29Icon} alt="" src={userImage2} />
          </div>
          <div className={styles.profile2} style={profile3Style}>
            <img className={styles.image29Icon} alt="" src={userImage3} />
          </div>
          <div className={styles.profile3} style={profile4Style}>
            <img className={styles.image29Icon} alt="" src={userImage4} />
          </div>
          <div className={styles.profile4} style={profile5Style}>
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
            src="../Assets/blurText@2x.png"
            style={rectangleIconStyle}
          />
          <div className={styles.iconlyboldgraphParent}>
            <img
              className={styles.iconlyboldgraph}
              alt=""
              src={iconlyBoldGraph}
            />
            <div className={styles.div} style={div2Style}>
              {timeLeft}
            </div>
          </div>
        </div>
        <img className={styles.auctionsChild} alt="" src={group34289} />
      </div>
      <div className={styles.frameParent} style={frameDiv2Style}>
        <div className={styles.frameGroup}>
          <div className={styles.formationOfUseParent}>
            <div className={styles.formationOfUse} style={formationOfUSE1Style}>
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
                <p className={styles.iFeelLike}>{content}</p>
                <p className={styles.europeLedBy}>
                  {" "}
                  Europe led by Germany is needed...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.timeGainedParent} style={frameDiv3Style}>
          <div className={styles.timeGained} style={timeGained1Style}>
            Time Gained
          </div>
          <div className={styles.div1} style={div1Style}>
            {timeGain}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
