import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./banner.module.css";

type BannerType = {
  mainImage?: string;
  sideImage1?: string;
  sideImage2?: string;
  sideImage3?: string;
  pfp?: string;
  headingBanner?: string;
  username?: string;
  likes?: string;
  verified2?: string;
  vuesaxboldheart?: string;

  /** Style props */
  image56Left?: Property.Left;
  image29Top?: Property.Top;
  image29Right?: Property.Right;
  image29Bottom?: Property.Bottom;
  image29Left?: Property.Left;
  favoritBackgroundColor?: Property.BackgroundColor;
  frame34338BackgroundColor?: Property.BackgroundColor;
  frame34340BackgroundColor?: Property.BackgroundColor;
  frame34339BackgroundColor?: Property.BackgroundColor;
  frame34341BackgroundColor?: Property.BackgroundColor;
  profileBackgroundColor?: Property.BackgroundColor;
  profileBorder?: Property.Border;
  r66VoldColor?: Property.Color;
  likeBackgroundColor?: Property.BackgroundColor;
  image56Top?: Property.Top;
  favoritPosition?: Property.Position;
  favoritWidth?: Property.Width;
  favoritHeight?: Property.Height;
  favoritFlexShrink?: Property.FlexShrink;
  favoritTop?: Property.Top;
  favoritLeft?: Property.Left;
};

const Banner: NextPage<BannerType> = ({
  mainImage,
  sideImage1,
  sideImage2,
  sideImage3,
  pfp,
  headingBanner,
  username,
  likes,
  image56Left,
  image29Top,
  image29Right,
  image29Bottom,
  image29Left,
  verified2,
  vuesaxboldheart,
  favoritBackgroundColor,
  frame34338BackgroundColor,
  frame34340BackgroundColor,
  frame34339BackgroundColor,
  frame34341BackgroundColor,
  profileBackgroundColor,
  profileBorder,
  r66VoldColor,
  likeBackgroundColor,
  image56Top,
  favoritPosition,
  favoritWidth,
  favoritHeight,
  favoritFlexShrink,
  favoritTop,
  favoritLeft,
}) => {
  const image56IconStyle: CSS.Properties = useMemo(() => {
    return {
      left: image56Left,
      top: image56Top,
    };
  }, [image56Left, image56Top]);

  const image29IconStyle: CSS.Properties = useMemo(() => {
    return {
      top: image29Top,
      right: image29Right,
      bottom: image29Bottom,
      left: image29Left,
    };
  }, [image29Top, image29Right, image29Bottom, image29Left]);

  const favoritStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: favoritBackgroundColor,
      position: favoritPosition,
      width: favoritWidth,
      height: favoritHeight,
      flexShrink: favoritFlexShrink,
      top: favoritTop,
      left: favoritLeft,
    };
  }, [
    favoritBackgroundColor,
    favoritPosition,
    favoritWidth,
    favoritHeight,
    favoritFlexShrink,
    favoritTop,
    favoritLeft,
  ]);

  const frameDiv6Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame34338BackgroundColor,
    };
  }, [frame34338BackgroundColor]);

  const frameDiv7Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame34340BackgroundColor,
    };
  }, [frame34340BackgroundColor]);

  const frameDiv8Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame34339BackgroundColor,
    };
  }, [frame34339BackgroundColor]);

  const frameDiv9Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: frame34341BackgroundColor,
    };
  }, [frame34341BackgroundColor]);

  const profile16Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: profileBackgroundColor,
      border: profileBorder,
    };
  }, [profileBackgroundColor, profileBorder]);

  const r66VoldStyle: CSS.Properties = useMemo(() => {
    return {
      color: r66VoldColor,
    };
  }, [r66VoldColor]);

  const likeStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: likeBackgroundColor,
    };
  }, [likeBackgroundColor]);

  return (
    <div className={styles.favorit} style={favoritStyle}>
      <div className={styles.image56Wrapper} style={frameDiv6Style}>
        <img
          className={styles.image56Icon}
          alt=""
          src={mainImage}
          style={image56IconStyle}
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.image52Wrapper} style={frameDiv7Style}>
          <img className={styles.image52Icon} alt="" src={sideImage1} />
        </div>
        <div className={styles.image52Wrapper} style={frameDiv8Style}>
          <img className={styles.image52Icon} alt="" src={sideImage2} />
        </div>
        <div className={styles.image52Wrapper} style={frameDiv9Style}>
          <img className={styles.image52Icon} alt="" src={sideImage3} />
        </div>
      </div>
      <div className={styles.profileParent}>
        <div className={styles.profile} style={profile16Style}>
          <img
            className={styles.image29Icon}
            alt=""
            src={pfp}
            style={image29IconStyle}
          />
        </div>
        <img className={styles.verified2Icon} alt="" src={verified2} />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.r66VoldWrapper}>
          <div className={styles.r66Vold} style={r66VoldStyle}>
            {headingBanner}
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>{username}</div>
          </div>
        </div>
      </div>
      <button className={styles.like} style={likeStyle}>
        <img
          className={styles.vuesaxboldheartIcon}
          alt=""
          src={vuesaxboldheart}
        />
        <div className={styles.div}>{likes}</div>
      </button>
    </div>
  );
};

export default Banner;
