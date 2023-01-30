import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./post-container111111111111.module.css";

type PostContainer11111111111Type = {
  carImageUrl?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propColor2?: Property.Color;
};

const PostContainer111111111111: NextPage<PostContainer11111111111Type> = ({
  carImageUrl,
  propTop,
  propLeft,
  propColor,
  propColor1,
  propColor2,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const formationOfUSEStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const timeGainedStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.frameGroup}>
        <div className={styles.formationOfUseParent}>
          <div className={styles.formationOfUse} style={formationOfUSEStyle}>
            Formation of USE
          </div>
          <img className={styles.image29Icon} alt="" src={carImageUrl} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <p className={styles.iFeelLike}>
                I feel like formation of United States of
              </p>
              <p className={styles.europeLedBy}>
                {" "}
                Europe led by Germany is needed...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.timeGainedParent}>
        <div className={styles.timeGained} style={timeGainedStyle}>
          Time Gained
        </div>
        <div className={styles.div} style={divStyle}>
          1:28
        </div>
      </div>
    </div>
  );
};

export default PostContainer111111111111;
