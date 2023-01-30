import type { NextPage } from "next";
import { useMemo, useEffect } from "react";
import CSS, { Property } from "csstype";
import styles from "./explore-container.module.css";

type ExploreContainerType = {
  exploreText?: string;
  exploreTimeFeedText?: string;

  /** Style props */
  propColor?: Property.Color;
  propBackgroundColor?: Property.BackgroundColor;
  propColor1?: Property.Color;
  propBorder?: Property.Border;
  propBackgroundColor1?: Property.BackgroundColor;
  propColor2?: Property.Color;
  propColor3?: Property.Color;

  /** Action props */
  onButtonClick?: () => void;
  onExploreTextClick?: () => void;
  onCreateTextClick?: () => void;
  onExploreMoreAboutClick?: () => void;
};

const ExploreContainer: NextPage<ExploreContainerType> = ({
  exploreText,
  exploreTimeFeedText,
  propColor,
  propBackgroundColor,
  propColor1,
  propBorder,
  propBackgroundColor1,
  propColor2,
  propColor3,
  onButtonClick,
  onExploreTextClick,
  onCreateTextClick,
  onExploreMoreAboutClick,
}) => {
  const exploreAndFightStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const exploreStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const button1Style: CSS.Properties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor1,
    };
  }, [propBorder, propBackgroundColor1]);

  const createStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const exploreMoreAboutStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.exploreAndFightForOpinionsParent}>
        <div className={styles.exploreAndFight} style={exploreAndFightStyle}>
          Explore and fight for opinions
        </div>
        <div className={styles.joinOurMailing}>
          Join our mailing list to stay in the loop with our newest events
          happening.
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.button}
          autoFocus
          onClick={onButtonClick}
          data-animate-on-scroll
          style={buttonStyle}
        >
          <div
            className={styles.explore}
            onClick={onExploreTextClick}
            style={exploreStyle}
          >
            Explore
          </div>
        </button>
        <button
          className={styles.button1}
          autoFocus
          data-animate-on-scroll
          style={button1Style}
        >
          <div
            className={styles.create}
            onClick={onCreateTextClick}
            style={createStyle}
          >
            Post
          </div>
        </button>
      </div>
      <div className={styles.cta}>
        <img
          className={styles.playCircleFilledBlack24dpIcon}
          alt=""
          src={exploreText}
        />
        <button
          className={styles.exploreMoreAbout}
          onClick={onExploreMoreAboutClick}
          style={exploreMoreAboutStyle}
        >
          {exploreTimeFeedText}
        </button>
      </div>
    </div>
  );
};

export default ExploreContainer;
