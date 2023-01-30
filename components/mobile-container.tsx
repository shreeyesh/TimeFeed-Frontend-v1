import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./mobile-container.module.css";

type MobileContainerType = {
  downloadBadgeImageUrl?: string;
  groupImageUrl?: string;

  /** Style props */
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propColor2?: Property.Color;

  /** Action props */
  onDownloadBadgeAppStoreBadClick?: () => void;
};

const MobileContainer: NextPage<MobileContainerType> = ({
  downloadBadgeImageUrl,
  groupImageUrl,
  propColor,
  propColor1,
  propColor2,
  onDownloadBadgeAppStoreBadClick,
}) => {
  const sectionTitleStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const description1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const getTheAppStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.content}>
      <div className={styles.ctaMessage}>
        <div className={styles.sectionHeading}>
          <div className={styles.ctaMessage}>
            <div className={styles.sectionTitle} style={sectionTitleStyle}>
              Enjoy from your mobile
            </div>
          </div>
          <div className={styles.description} style={description1Style}>
            Download the app to never miss out on amazing battles, Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Auctor neque sed
            imperdiet nibh lectus feugiat nunc sem.
          </div>
        </div>
      </div>
      <div className={styles.getTheApp}>
        <div className={styles.getTheApp1} style={getTheAppStyle}>
          Get the App soon on
        </div>
        <div className={styles.badges}>
          <img
            className={styles.downloadBadgeGooglePlayB}
            alt=""
            src={downloadBadgeImageUrl}
          />
          <button
            className={styles.downloadBadgeAppStoreBad}
            onClick={onDownloadBadgeAppStoreBadClick}
          >
            <img className={styles.groupIcon} alt="" src={groupImageUrl} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileContainer;
