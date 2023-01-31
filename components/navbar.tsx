import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import SearchBox from "../components/search-box";
import styles from "./navbar.module.css";

type NavbarType = {
  timefeedLowResolutionLogo?: string;
  darkMode?: string;
  accountCircleBlack24dp21?: string;
  accountBalanceWalletBlack?: string;

  /** Style props */
  navbarBackgroundColor?: Property.BackgroundColor;
  darkModeCursor?: Property.Cursor;
  exploreColor?: Property.Color;
  earnColor?: Property.Color;
  tradeColor?: Property.Color;
  postColor?: Property.Color;

  /** Action props */
  onDarkModeClick?: () => void;
  onExploreClick?: () => void;
  onEarnClick?: () => void;
  onTradeClick?: () => void;
  onPostClick?: () => void;
};

const Navbar: NextPage<NavbarType> = ({
  navbarBackgroundColor,
  timefeedLowResolutionLogo,
  darkMode,
  onDarkModeClick,
  darkModeCursor,
  onExploreClick,
  exploreColor,
  onEarnClick,
  earnColor,
  onTradeClick,
  tradeColor,
  onPostClick,
  postColor,
  accountCircleBlack24dp21,
  accountBalanceWalletBlack,
}) => {
  const navbarStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: navbarBackgroundColor,
    };
  }, [navbarBackgroundColor]);

  const darkModeStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: darkModeCursor,
    };
  }, [darkModeCursor]);

  const explore1Style: CSS.Properties = useMemo(() => {
    return {
      color: exploreColor,
    };
  }, [exploreColor]);

  const earnStyle: CSS.Properties = useMemo(() => {
    return {
      color: earnColor,
    };
  }, [earnColor]);

  const tradeStyle: CSS.Properties = useMemo(() => {
    return {
      color: tradeColor,
    };
  }, [tradeColor]);

  const postStyle: CSS.Properties = useMemo(() => {
    return {
      color: postColor,
    };
  }, [postColor]);

  return (
    <nav className={styles.navbar} data-scroll-to="navbar" style={navbarStyle}>
      <div className={styles.timefeedLowResolutionLogoBParent}>
        <img
          className={styles.timefeedLowResolutionLogoBIcon}
          alt=""
          loading="eager"
          src={timefeedLowResolutionLogo}
        />
        <SearchBox searchbox="Search posts, topics and accounts" />
        <button
          className={styles.darkMode}
          onClick={onDarkModeClick}
          // src={darkMode}
          style={darkModeStyle}
        >
          <img
            className={styles.darkModeChild}
            alt=""
            src="../Assets/ellipse-12.svg"
          />
        </button>
        <div className={styles.menus}>
          <button
            className={styles.explore}
            onClick={onExploreClick}
            style={explore1Style}
          >
            Explore
          </button>
          <button
            className={styles.explore}
            onClick={onEarnClick}
            style={earnStyle}
          >
            Earn
          </button>
          <button
            className={styles.explore}
            onClick={onTradeClick}
            style={tradeStyle}
          >
            Trade
          </button>
          <button
            className={styles.explore}
            onClick={onPostClick}
            style={postStyle}
          >
            Post
          </button>
        </div>
        <div className={styles.icon}>
          <img
            className={styles.accountBalanceWalletBlack2Icon}
            alt=""
            src={accountCircleBlack24dp21}
          />
          <img
            className={styles.accountBalanceWalletBlack2Icon}
            alt=""
            src={accountBalanceWalletBlack}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
