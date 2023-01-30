import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import WithdrawSuccessPopup from "../components/withdraw-success-popup";
import PortalPopup from "../components/portal-popup";
import ExploreContainer from "../components/explore-container";
import SearchBox from "../components/search-box";
import LeaderboardCards from "../components/leaderboard-cards";
import SocialCard from "../components/social-card";
import SocialCardExt from "../components/social-card-ext";
import SocialCardsNew from "../components/social-cards-new";
import Banner from "../components/banner";
import CreaterCards from "../components/creater-cards";
import WithdrawTime from "../components/withdraw-time";
import MobileContainer from "../components/mobile-container";
import styles from "./page-dark.module.css";

const PageDark: NextPage = () => {
  const router = useRouter();
  const [isWithdrawSuccessPopupOpen, setWithdrawSuccessPopupOpen] =
    useState(false);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onExploreTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCreateTextClick = useCallback(() => {
    router.push("/create-post-dark1");
  }, [router]);

  const onExploreMoreAboutClick = useCallback(() => {
    window.open(
      "https://holy-surfboard-9a0.notion.site/abdc61bc18d24190b22f5f40adeb5327?v=1a403d1fae724e87bf7c2a0beb65b901"
    );
  }, []);

  const openWithdrawSuccessPopup = useCallback(() => {
    setWithdrawSuccessPopupOpen(true);
  }, []);

  const closeWithdrawSuccessPopup = useCallback(() => {
    setWithdrawSuccessPopupOpen(false);
  }, []);

  const onDownloadBadgeAppStoreBadClick = useCallback(() => {
    window.open(
      "https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=CjwKCAiA8OmdBhAgEiwAShr40_H9ceIl6gs0t6_Bf07j8qQPi3LqjeaiOz9bL_Ha5u61LSwm9hlMLRoCPyMQAvD_BwE&gclsrc=aw.ds&pli=1"
    );
  }, []);

  const onExploreClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEarnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cTA7']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTradeClick = useCallback(() => {
    router.push("/under-construction-popup");
  }, [router]);

  const onPostClick = useCallback(() => {
    router.push("/create-post-dark1");
  }, [router]);

  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image64']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.pageDark}>
        <div className={styles.pageDarkInner}>
          <div className={styles.sectionhomepageWrapper}>
            <div className={styles.sectionhomepage}>
              <div className={styles.component5Parent}>
                <div className={styles.component5}>
                  <div className={styles.imageParent}>
                    <div className={styles.image}>
                      <img
                        className={styles.image48Icon}
                        alt=""
                        src="../Assets/image-48@2x.png"
                      />
                    </div>
                    <div className={styles.image1}>
                      <img
                        className={styles.image48Icon}
                        alt=""
                        src="../Assets/image-47@2x.png"
                      />
                    </div>
                    <div className={styles.image2}>
                      <img
                        className={styles.image48Icon}
                        alt=""
                        src="../Assets/image-46@2x.png"
                      />
                    </div>
                    <div className={styles.image2}>
                      <img
                        className={styles.image50Icon}
                        alt=""
                        src="../Assets/image-504@2x.png"
                      />
                    </div>
                    <div className={styles.image4}>
                      <img
                        className={styles.image50Icon}
                        alt=""
                        src="../Assets/image-504@2x.png"
                      />
                    </div>
                    <div className={styles.image2}>
                      <img
                        className={styles.image50Icon}
                        alt=""
                        src="../Assets/image-504@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.component10}>
                  <div className={styles.imageGroup}>
                    <div className={styles.image6}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-75@2x.png"
                      />
                    </div>
                    <div className={styles.image6}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-75@2x.png"
                      />
                    </div>
                    <div className={styles.image4}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-75@2x.png"
                      />
                    </div>
                    <div className={styles.image2}>
                      <img
                        className={styles.image75Icon3}
                        alt=""
                        src="../Assets/image-753@2x.png"
                      />
                    </div>
                    <div className={styles.image10}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-754@2x.png"
                      />
                    </div>
                    <div className={styles.image11}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-755@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.component9}>
                  <div className={styles.imageParent}>
                    <div className={styles.image}>
                      <img
                        className={styles.image48Icon1}
                        alt=""
                        src="../Assets/image-481@2x.png"
                      />
                    </div>
                    <div className={styles.image1}>
                      <img
                        className={styles.image48Icon}
                        alt=""
                        src="../Assets/image-471@2x.png"
                      />
                    </div>
                    <div className={styles.image2}>
                      <img
                        className={styles.image48Icon}
                        alt=""
                        src="../Assets/image-461@2x.png"
                      />
                    </div>
                    <div className={styles.image2}>
                      <img
                        className={styles.image50Icon}
                        alt=""
                        src="../Assets/image-505@2x.png"
                      />
                    </div>
                    <div className={styles.image4}>
                      <img
                        className={styles.image50Icon}
                        alt=""
                        src="../Assets/image-505@2x.png"
                      />
                    </div>
                    <div className={styles.image2}>
                      <img
                        className={styles.image50Icon}
                        alt=""
                        src="../Assets/image-505@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.component11}>
                  <div className={styles.imageGroup}>
                    <div className={styles.image6}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-756@2x.png"
                      />
                    </div>
                    <div className={styles.image6}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-756@2x.png"
                      />
                    </div>
                    <div className={styles.image4}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-756@2x.png"
                      />
                    </div>
                    <div className={styles.image2}>
                      <img
                        className={styles.image75Icon9}
                        alt=""
                        src="../Assets/image-759@2x.png"
                      />
                    </div>
                    <div className={styles.image10}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-7510@2x.png"
                      />
                    </div>
                    <div className={styles.image11}>
                      <img
                        className={styles.image75Icon}
                        alt=""
                        src="../Assets/image-7511@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ExploreContainer
                exploreText="play-circle-filled-black-24dp-1-12.svg"
                exploreTimeFeedText="Explore More about BattleChan"
                propColor="#fff"
                propBackgroundColor="#13a7fd"
                propColor1="1px solid #0d0d0d"
                propBorder="1px solid var(--color-cornflowerblue-100)"
                propBackgroundColor1="1px solid #0d0d0d"
                propColor2="#13a7fd"
                propColor3="#13a7fd"
                onButtonClick={onButtonClick}
                onExploreTextClick={onExploreTextClick}
                onCreateTextClick={onCreateTextClick}
                onExploreMoreAboutClick={onExploreMoreAboutClick}
              />
              <div className={styles.fading} />
              <div className={styles.navbar}>
                <div className={styles.timefeedLowResolutionLogoBParent}>
                  <img
                    className={styles.timefeedLowResolutionLogoBIcon}
                    alt=""
                    src="../Assets/timefeedlowresolutionlogoblackonwhitebackground-39@2x.png"
                  />
                  <SearchBox searchbox="Search posts, topics and accounts" />
                  <img
                    className={styles.darkModeIcon}
                    alt=""
                    src="../Assets/dark-mode.svg"
                  />
                  <div className={styles.menus}>
                    <button className={styles.explore} onClick={onExploreClick}>
                      Explore
                    </button>
                    <button className={styles.explore} onClick={onEarnClick}>
                      Earn
                    </button>
                    <button className={styles.explore} onClick={onTradeClick}>
                      Trade
                    </button>
                    <button className={styles.explore} onClick={onPostClick}>
                      Post
                    </button>
                  </div>
                  <div className={styles.icon}>
                    <img
                      className={styles.accountBalanceWalletBlack2Icon}
                      alt=""
                      src="../Assets/account-circle-black-24dp-2-19.svg"
                    />
                    <img
                      className={styles.accountBalanceWalletBlack2Icon}
                      alt=""
                      src="../Assets/account-balance-wallet-black-24dp-5-19.svg"
                    />
                  </div>
                </div>
              </div>
              <img
                className={styles.timefeedLowResolutionLogoBIcon1}
                alt=""
                src="../Assets/timefeedlowresolutionlogoblackonwhitebackground-2@2x.png"
              />
              <img
                className={styles.notificationBingIcon}
                alt=""
                src="../Assets/notificationbing.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.logoClouds1Parent}
          data-scroll-to="frameContainer"
        >
          <div className={styles.logoClouds1}>
            <div className={styles.logosSection}>
              <img
                className={styles.dividerIcon}
                alt=""
                src="../Assets/divider16.svg"
              />
              <div className={styles.logos}>
                <img
                  className={styles.image36Icon}
                  alt=""
                  src="../Assets/image-36@2x.png"
                />
                <img
                  className={styles.image37Icon}
                  alt=""
                  src="../Assets/image-37@2x.png"
                />
                <button className={styles.image38} />
                <img
                  className={styles.image39Icon}
                  alt=""
                  src="../Assets/image-39@2x.png"
                />
                <img
                  className={styles.image41Icon}
                  alt=""
                  src="../Assets/image-418@2x.png"
                />
              </div>
              <img
                className={styles.dividerIcon}
                alt=""
                src="../Assets/divider17.svg"
              />
            </div>
          </div>
          <div className={styles.desktop2}>
            <div className={styles.desktop2Inner}>
              <div className={styles.frameParent}>
                <div className={styles.leaderboardsParent}>
                  <div className={styles.leaderboards}>Leaderboards</div>
                  <div className={styles.icon}>
                    <div className={styles.chainWrapper}>
                      <select className={styles.chain} />
                    </div>
                    <select className={styles.chainWrapper} />
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.auctionsParent}>
                    <LeaderboardCards
                      component="1"
                      image29="../Assets/image-2929@2x.png"
                      userName="Bobby Axelrod"
                      description="23.46"
                      divider="../Assets/divider2.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                    <LeaderboardCards
                      component="4"
                      image29="../Assets/image-2930@2x.png"
                      userName="Shany Rodriguez"
                      description="22.28"
                      divider="../Assets/divider3.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                    <LeaderboardCards
                      component="7"
                      image29="../Assets/image-2931@2x.png"
                      userName="Damaris Leffler"
                      description="21.51"
                      divider="../Assets/divider4.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                  </div>
                  <div className={styles.auctionsParent}>
                    <LeaderboardCards
                      component="2"
                      image29="../Assets/image-2932@2x.png"
                      userName="Christina Williams"
                      description="23.40"
                      divider="../Assets/divider5.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      componentLeft="11px"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                    <LeaderboardCards
                      component="5"
                      image29="../Assets/image-2933@2x.png"
                      userName="Krystina Mosciski"
                      description="22.12"
                      divider="../Assets/divider6.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                    <LeaderboardCards
                      component="8"
                      image29="../Assets/image-2934@2x.png"
                      userName="Mya Tillman"
                      description="21.37"
                      divider="../Assets/divider7.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                  </div>
                  <div className={styles.auctionsParent}>
                    <LeaderboardCards
                      component="3"
                      image29="../Assets/image-2935@2x.png"
                      userName="Gavin Belson"
                      description="23.00"
                      divider="../Assets/divider8.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                    <LeaderboardCards
                      component="6"
                      image29="../Assets/image-2936@2x.png"
                      userName="Henry Denesik"
                      description="21.93"
                      divider="../Assets/divider9.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                    <LeaderboardCards
                      component="9"
                      image29="../Assets/image-2937@2x.png"
                      userName="Haley Douglas"
                      description="21.15"
                      divider="../Assets/divider10.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                  </div>
                  <div className={styles.auctionsParent}>
                    <LeaderboardCards
                      component="10"
                      image29="../Assets/image-2938@2x.png"
                      userName="Kabir Malhotra"
                      description="22.64"
                      divider="../Assets/divider11.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                    <LeaderboardCards
                      component="11"
                      image29="../Assets/image-2939@2x.png"
                      userName="Bored Ape Yacht"
                      description="21.72"
                      divider="../Assets/divider12.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                    <LeaderboardCards
                      component="12"
                      image29="image-2940@2x.png"
                      userName="Roman Klocko"
                      description="20.87"
                      divider="../Assets/divider13.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      frame8BackgroundColor="#0d0d0d"
                      profileBackgroundColor="#0d0d0d"
                      labelColor="#fff"
                      labelColor1="#82d5a5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fading1} />
          <div className={styles.desktop1}>
            <div className={styles.frameParent5}>
              <div
                className={styles.frameParent6}
                data-scroll-to="frameContainer1"
              >
                <div className={styles.chainWrapper}>
                  <div className={styles.leaderboards}>Featured Posts</div>
                </div>
                <button className={styles.button} onClick={onButton2Click}>
                  <div className={styles.create}>See All</div>
                </button>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.auctionsParent}>
                  <SocialCard
                    heading="Formation of USE"
                    postImage="image-502@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    content="I feel like formation of United States of"
                    timeGain="1:28"
                    timeLeft="05:38:40"
                    group34289="../Assets/group-34289.svg"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                    timeGainedColor="#fff"
                    componentColor1="#13a7fd"
                  />
                  <SocialCardExt
                    postImage="image-761@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    auctionsHeight="500px"
                    image46Left="0px"
                    likeDislike="../Assets/group-34290.svg"
                    frame34331Gap="11px"
                    heading="Abortion: A Growing Debate"
                    description="Abortion is a highly contested issue in many countries.."
                    descriptionWidth="284px"
                    frame34325Display="flex"
                    frame34325FlexDirection="row"
                    frame34325AlignItems="flex-start"
                    frame34325JustifyContent="flex-start"
                    timeGainedPosition="relative"
                    timeGainedTop="unset"
                    timeGainedLeft="unset"
                    timeGainedFlexShrink="0"
                    componentPosition="relative"
                    componentTop="unset"
                    componentLeft="unset"
                    image46Width="302px"
                    image46BorderRadius="unset"
                    image46Height="336px"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    componentColor="#0d0d0d"
                    climateChangeAGlobalCrisiColor="#fff"
                    timeGainedColor="#fff"
                    componentColor1="#13a7fd"
                  />
                  <SocialCardExt
                    postImage="image-464@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-342901.svg"
                    heading="Climate Change: A Global Crisis"
                    description="Climate change is a major environmental challenge .."
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    componentColor="#0d0d0d"
                    climateChangeAGlobalCrisiColor="#fff"
                    timeGainedColor="#fff"
                    componentColor1="#13a7fd"
                  />
                  <SocialCardExt
                    postImage="../Assets/image-45@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    auctionsHeight="500px"
                    image46Left="0.43px"
                    likeDislike="../Assets/group-342891.svg"
                    frame34331Gap="unset"
                    heading="Immigration: A Divisive Issue"
                    description="Immigration is a highly contentious issue in many countries..."
                    descriptionWidth="279px"
                    frame34325Position="absolute"
                    frame34325Top="474px"
                    frame34325Left="25px"
                    frame34325Display="flex"
                    frame34325FlexDirection="row"
                    frame34325AlignItems="flex-start"
                    frame34325JustifyContent="flex-start"
                    timeGainedPosition="relative"
                    timeGainedTop="unset"
                    timeGainedLeft="unset"
                    timeGainedFlexShrink="0"
                    componentPosition="relative"
                    componentTop="unset"
                    componentLeft="unset"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    componentColor="#0d0d0d"
                    climateChangeAGlobalCrisiColor="#fff"
                    timeGainedColor="#fff"
                    componentColor1="#13a7fd"
                  />
                </div>
                <div className={styles.auctionsParent}>
                  <div className={styles.auctions}>
                    <div className={styles.auctions1}>
                      <img
                        className={styles.image57Icon}
                        alt=""
                        src="../Assets/image-5621@2x.png"
                      />
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-298@2x.png"
                          />
                        </div>
                        <div className={styles.profile1}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-299@2x.png"
                          />
                        </div>
                        <div className={styles.profile2}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2910@2x.png"
                          />
                        </div>
                        <div className={styles.profile3}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2911@2x.png"
                          />
                        </div>
                        <div className={styles.profile4}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2912@2x.png"
                          />
                        </div>
                        <img
                          className={styles.verified2Icon}
                          alt=""
                          src="../Assets/verified-21@2x.png"
                        />
                      </div>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <div className={styles.iconlyboldgraphParent}>
                          <img
                            className={styles.iconlyboldgraph}
                            alt=""
                            src="../Assets/iconlyboldgraph22.svg"
                          />
                          <div className={styles.div}>05:38:40</div>
                        </div>
                      </div>
                      <img
                        className={styles.auctionsChild}
                        alt=""
                        src="../Assets/group-342421.svg"
                      />
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameParent9}>
                        <div className={styles.icon}>
                          <div className={styles.formationOfUse}>
                            Formation of USE
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
                      <div />
                    </div>
                    <div className={styles.timeGainedParent}>
                      <div className={styles.timeGained}>Time Gained</div>
                      <div className={styles.div1}>1:28</div>
                    </div>
                  </div>
                  <SocialCard
                    heading="Formation of USE"
                    postImage="../Assets/image-58@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    content="I feel like formation of United States of"
                    timeGain="1:28"
                    timeLeft="05:38:40"
                    image49Left="1px"
                    image49Width="300px"
                    group34289="../Assets/group-342902.svg"
                    frame34331Gap="44px"
                    frame34325Display="unset"
                    frame34325FlexDirection="unset"
                    frame34325AlignItems="unset"
                    frame34325JustifyContent="unset"
                    timeGainedPosition="absolute"
                    timeGainedFlexShrink="unset"
                    timeGainedTop="472px"
                    timeGainedLeft="28px"
                    componentPosition="absolute"
                    componentWidth="unset"
                    componentFlexShrink="unset"
                    componentTop="472px"
                    componentLeft="249px"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                    timeGainedColor="#fff"
                    componentColor1="#13a7fd"
                  />
                  <div className={styles.auctions2}>
                    <div className={styles.auctions3}>
                      <img
                        className={styles.image57Icon}
                        alt=""
                        src="../Assets/image-57@2x.png"
                      />
                      <img
                        className={styles.auctionsChild}
                        alt=""
                        src="../Assets/group-3429010.svg"
                      />
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-298@2x.png"
                          />
                        </div>
                        <div className={styles.profile1}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-299@2x.png"
                          />
                        </div>
                        <div className={styles.profile2}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2910@2x.png"
                          />
                        </div>
                        <div className={styles.profile3}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2911@2x.png"
                          />
                        </div>
                        <div className={styles.profile4}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2912@2x.png"
                          />
                        </div>
                        <img
                          className={styles.verified2Icon}
                          alt=""
                          src="../Assets/verified-21@2x.png"
                        />
                      </div>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <div className={styles.iconlyboldgraphParent}>
                          <img
                            className={styles.iconlyboldgraph}
                            alt=""
                            src="../Assets/iconlyboldgraph22.svg"
                          />
                          <div className={styles.div}>05:38:40</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent10}>
                      <div className={styles.frameParent9}>
                        <div className={styles.icon}>
                          <div className={styles.formationOfUse}>
                            Formation of USE
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
                      <div />
                    </div>
                  </div>
                  <div className={styles.auctions}>
                    <div className={styles.auctions1}>
                      <img
                        className={styles.image60Icon}
                        alt=""
                        src="../Assets/image-60@2x.png"
                      />
                      <img
                        className={styles.auctionsChild}
                        alt=""
                        src="../Assets/group-3429011.svg"
                      />
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-298@2x.png"
                          />
                        </div>
                        <div className={styles.profile1}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-299@2x.png"
                          />
                        </div>
                        <div className={styles.profile2}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2910@2x.png"
                          />
                        </div>
                        <div className={styles.profile3}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2911@2x.png"
                          />
                        </div>
                        <div className={styles.profile4}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="../Assets/image-2912@2x.png"
                          />
                        </div>
                        <img
                          className={styles.verified2Icon}
                          alt=""
                          src="../Assets/verified-21@2x.png"
                        />
                      </div>
                      <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <div className={styles.iconlyboldgraphParent}>
                          <img
                            className={styles.iconlyboldgraph}
                            alt=""
                            src="../Assets/iconlyboldgraph22.svg"
                          />
                          <div className={styles.div}>05:38:40</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameParent9}>
                        <div className={styles.icon}>
                          <div className={styles.formationOfUse}>
                            Formation of USE
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
                      <div />
                    </div>
                    <div className={styles.timeGained1}>Time Gained</div>
                    <div className={styles.div4}>1:28</div>
                  </div>
                </div>
                <div className={styles.auctionsParent}>
                  <SocialCard
                    heading="Formation of USE"
                    postImage="../Assets/image-64@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    content="I feel like formation of United States of"
                    timeGain="1:28"
                    timeLeft="05:38:40"
                    image49Left="1px"
                    image49Width="300px"
                    group34289="../Assets/group-342905.svg"
                    frame34331Gap="44px"
                    frame34325Display="unset"
                    frame34325FlexDirection="unset"
                    frame34325AlignItems="unset"
                    frame34325JustifyContent="unset"
                    timeGainedPosition="absolute"
                    timeGainedFlexShrink="unset"
                    timeGainedTop="473px"
                    timeGainedLeft="31px"
                    componentPosition="absolute"
                    componentWidth="unset"
                    componentFlexShrink="unset"
                    componentTop="473px"
                    componentLeft="252px"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                    timeGainedColor="#fff"
                    componentColor1="#13a7fd"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-63@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-342892.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-62@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-342893.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                  />
                  <SocialCardExt
                    postImage="../Assets/image-65@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    auctionsHeight="501px"
                    image46Left="1px"
                    likeDislike="../Assets/group-342894.svg"
                    heading="Gun Control: Striking the Balance"
                    description="Gun control laws vary widely around the world, with some countries having..."
                    descriptionWidth="296px"
                    timeGainedTop="471px"
                    timeGainedLeft="30px"
                    componentTop="471px"
                    componentLeft="251px"
                    image46Width="300px"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    componentColor="#0d0d0d"
                    climateChangeAGlobalCrisiColor="#fff"
                    timeGainedColor="#fff"
                    componentColor1="#13a7fd"
                  />
                </div>
                <div className={styles.auctionsParent}>
                  <SocialCard
                    heading="Formation of USE"
                    postImage="../Assets/image-73@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    content="I feel like formation of United States of"
                    timeGain="1:28"
                    timeLeft="05:38:40"
                    image49Left="1px"
                    image49Width="301px"
                    group34289="../Assets/group-342906.svg"
                    frame34331Gap="44px"
                    frame34325Display="unset"
                    frame34325FlexDirection="unset"
                    frame34325AlignItems="unset"
                    frame34325JustifyContent="unset"
                    timeGainedPosition="absolute"
                    timeGainedFlexShrink="unset"
                    timeGainedTop="463px"
                    timeGainedLeft="30px"
                    componentPosition="absolute"
                    componentWidth="unset"
                    componentFlexShrink="unset"
                    componentTop="463px"
                    componentLeft="251px"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                    timeGainedColor="#fff"
                    componentColor1="#13a7fd"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-72@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-342895.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    image65Width="301px"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-621@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-342896.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-651@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-342897.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    iconlyBoldGraph="../Assets/iconlyboldgraph.svg"
                    auctionsBackgroundColor="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    profileBackgroundColor1="#0d0d0d"
                    profileBorder1="2px solid #1d2a3c"
                    profileBackgroundColor2="#0d0d0d"
                    profileBorder2="2px solid #1d2a3c"
                    profileBackgroundColor3="#0d0d0d"
                    profileBorder3="2px solid #1d2a3c"
                    profileBackgroundColor4="#0d0d0d"
                    profileBorder4="2px solid #1d2a3c"
                    rectangle3320BackgroundColor="rgba(13, 13, 13, 0.23)"
                    componentColor="#0d0d0d"
                    formationOfUSEColor="#fff"
                  />
                </div>
              </div>
              <img className={styles.vuesaxlineararrowLeftIcon} alt="" />
            </div>
            <img
              className={styles.vuesaxlineararrowRightIcon}
              alt=""
              src="../Assets/vuesaxlineararrowright2.svg"
            />
          </div>
        </div>
        <div className={styles.desktop3}>
          <div className={styles.frameParent14}>
            <div className={styles.frameParent15}>
              <div className={styles.frameWrapper3}>
                <div className={styles.trendingPostsParent}>
                  <div className={styles.leaderboards}>Trending Posts</div>
                  <div className={styles.icon}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="../Assets/frame-343432.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="../Assets/frame-343442.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.component13}>
                <div className={styles.favoritParent}>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="../Assets/image-506@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent17}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent1}>
                      <div className={styles.profile15}>
                        <img
                          className={styles.image29Icon18}
                          alt=""
                          src="../Assets/image-29130@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon3}
                        alt=""
                        src="../Assets/verified-219@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent18}>
                      <div className={styles.chainWrapper}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.leaderboards}>82</div>
                    </div>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="../Assets/image-506@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent17}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent1}>
                      <div className={styles.profile15}>
                        <img
                          className={styles.image29Icon18}
                          alt=""
                          src="../Assets/image-29130@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon3}
                        alt=""
                        src="../Assets/verified-219@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent18}>
                      <div className={styles.chainWrapper}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.leaderboards}>82</div>
                    </div>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="../Assets/image-506@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent17}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="../Assets/image-51@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent1}>
                      <div className={styles.profile15}>
                        <img
                          className={styles.image29Icon18}
                          alt=""
                          src="../Assets/image-29130@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon3}
                        alt=""
                        src="../Assets/verified-219@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent18}>
                      <div className={styles.chainWrapper}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.leaderboards}>82</div>
                    </div>
                  </div>
                  <Banner
                    mainImage="../Assets/image-542@2x.png"
                    sideImage1="image-5111@2x.png"
                    sideImage2="../Assets/image-526@2x.png"
                    sideImage3="../Assets/image-5112@2x.png"
                    pfp="image-2926@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    image56Left="200px"
                    image29Top="-5.77%"
                    image29Right="-7.69%"
                    image29Bottom="-9.61%"
                    image29Left="-7.69%"
                    verified2="verified-25@2x.png"
                    vuesaxboldheart="vuesaxboldheart3.svg"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                  />
                  <Banner
                    mainImage="../Assets/image-563@2x.png"
                    sideImage1="image-521@2x.png"
                    sideImage2="image-512@2x.png"
                    sideImage3="image-513@2x.png"
                    pfp="image-29141@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    verified2="verified-227@2x.png"
                    vuesaxboldheart="vuesaxboldheart3.svg"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                  />
                  <Banner
                    mainImage="image-552@2x.png"
                    sideImage1="../Assets/image-51@2x.png"
                    sideImage2="../Assets/image-51@2x.png"
                    sideImage3="../Assets/image-51@2x.png"
                    pfp="image-29141@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    verified2="verified-227@2x.png"
                    vuesaxboldheart="vuesaxboldheart3.svg"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                  />
                  <Banner
                    mainImage="image-558@2x.png"
                    sideImage1="image-5117@2x.png"
                    sideImage2="../Assets/image-529@2x.png"
                    sideImage3="../Assets/image-5118@2x.png"
                    pfp="image-29141@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    verified2="verified-227@2x.png"
                    vuesaxboldheart="vuesaxboldheart3.svg"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                  />
                </div>
              </div>
              <div className={styles.component15}>
                <div className={styles.favoritGroup}>
                  <Banner
                    mainImage="image-509@2x.png"
                    sideImage1="../Assets/image-5119@2x.png"
                    sideImage2="image-5210@2x.png"
                    sideImage3="../Assets/image-5120@2x.png"
                    pfp="../Assets/image-29144@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    verified2="verified-227@2x.png"
                    vuesaxboldheart="vuesaxboldheart3.svg"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                  />
                  <Banner
                    mainImage="../Assets/image-543@2x.png"
                    sideImage1="image-5121@2x.png"
                    sideImage2="image-5121@2x.png"
                    sideImage3="image-5121@2x.png"
                    pfp="image-29141@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    verified2="verified-227@2x.png"
                    vuesaxboldheart="vuesaxboldheart3.svg"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                  />
                  <Banner
                    mainImage="../Assets/image-559@2x.png"
                    sideImage1="image-5212@2x.png"
                    sideImage2="image-5123@2x.png"
                    sideImage3="image-5124@2x.png"
                    pfp="../Assets/image-29144@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    verified2="verified-227@2x.png"
                    vuesaxboldheart="vuesaxboldheart3.svg"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                  />
                  <Banner
                    mainImage="../Assets/image-544@2x.png"
                    sideImage1="image-5125@2x.png"
                    sideImage2="image-5125@2x.png"
                    sideImage3="image-5125@2x.png"
                    pfp="../Assets/image-29144@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    verified2="verified-227@2x.png"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                  />
                  <Banner
                    mainImage="image-508@2x.png"
                    sideImage1="image-515@2x.png"
                    sideImage2="image-515@2x.png"
                    sideImage3="image-515@2x.png"
                    pfp="image-2926@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    image56Left="-31px"
                    image29Top="-5.77%"
                    image29Right="-7.69%"
                    image29Bottom="-9.61%"
                    image29Left="-7.69%"
                    verified2="verified-25@2x.png"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                    image56Top="-10px"
                  />
                  <Banner
                    mainImage="image-508@2x.png"
                    sideImage1="image-515@2x.png"
                    sideImage2="image-515@2x.png"
                    sideImage3="image-515@2x.png"
                    pfp="image-2926@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    image56Left="-31px"
                    image29Top="-5.77%"
                    image29Right="-7.69%"
                    image29Bottom="-9.61%"
                    image29Left="-7.69%"
                    verified2="verified-25@2x.png"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                    image56Top="-10px"
                  />
                  <Banner
                    mainImage="image-508@2x.png"
                    sideImage1="image-515@2x.png"
                    sideImage2="image-515@2x.png"
                    sideImage3="image-515@2x.png"
                    pfp="image-2926@2x.png"
                    headingBanner="Formation of USE"
                    username="Mark Zuckerberg"
                    likes="82"
                    image56Left="-31px"
                    image29Top="-5.77%"
                    image29Right="-7.69%"
                    image29Bottom="-9.61%"
                    image29Left="-7.69%"
                    verified2="verified-25@2x.png"
                    favoritBackgroundColor="#0d0d0d"
                    frame34338BackgroundColor="#1932c0"
                    frame34340BackgroundColor="#1932c0"
                    frame34339BackgroundColor="#1932c0"
                    frame34341BackgroundColor="#1932c0"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    r66VoldColor="#fff"
                    likeBackgroundColor="#141414"
                    image56Top="-10px"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent23}>
              <div className={styles.frameWrapper7}>
                <div className={styles.trendingPostsParent}>
                  <div className={styles.trendingCreators}>
                    Trending Creators
                  </div>
                  <div className={styles.icon}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="../Assets/frame-343433.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="../Assets/frame-343443.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent25}>
                <div className={styles.frameParent26}>
                  <CreaterCards
                    cover="../Assets/image-66@2x.png"
                    pfp="image-29151@2x.png"
                    username="Shayne McLaughlin"
                    clanName="BYACH"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    image67Height="171.43px"
                    image71Height="115.38%"
                    image71Width="115.38%"
                    image71Right="-15.38%"
                    image71Bottom="-15.38%"
                    verified2="../Assets/verified-237@2x.png"
                    image30="image-3010@2x.png"
                    image67Left="130px"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    clanGHOSTOFICPWidth="140px"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image301="image-309@2x.png"
                  />
                  <CreaterCards
                    cover="../Assets/image-67@2x.png"
                    pfp="../Assets/image-71@2x.png"
                    username="Kelly Ross"
                    clanName="GHOST OF ICP"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    verified2="../Assets/verified-237@2x.png"
                    image30="image-3010@2x.png"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image301="image-309@2x.png"
                  />
                  <CreaterCards
                    cover="../Assets/image-68@2x.png"
                    pfp="../Assets/image-69@2x.png"
                    username="Agung Prio Rismawan"
                    clanName="WOLVES"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    image67Height="375px"
                    verified2="../Assets/verified-237@2x.png"
                    image30="image-3010@2x.png"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image301="image-309@2x.png"
                  />
                  <CreaterCards
                    cover="../Assets/image-70@2x.png"
                    pfp="image-29152@2x.png"
                    username="Valentina Keebler"
                    clanName="BYACH"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    image67Height="480.08px"
                    image71Height="115.38%"
                    image71Width="115.38%"
                    image71Right="-15.38%"
                    image71Bottom="-15.38%"
                    verified2="../Assets/verified-237@2x.png"
                    image30="image-3010@2x.png"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image301="image-309@2x.png"
                  />
                  <CreaterCards
                    cover="../Assets/image-681@2x.png"
                    pfp="../Assets/image-691@2x.png"
                    username="Agung Prio Rismawan"
                    clanName="BYACH"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    image67Height="375px"
                    image71Right="-8.33%"
                    image71Bottom="-9.72%"
                    verified2="verified-241@2x.png"
                    image30="image-3017@2x.png"
                    image67Left="-108px"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image67Top="-36px"
                    image71Top="-6.94%"
                    image71Left="-8.33%"
                    image301="image-3017@2x.png"
                  />
                </div>
                <div className={styles.frameParent27}>
                  <CreaterCards
                    cover="../Assets/image-661@2x.png"
                    pfp="image-29153@2x.png"
                    username="Agung Prio Rismawan"
                    clanName="BYACH"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    image67Height="171.43px"
                    image71Height="115.38%"
                    image71Width="115.38%"
                    image71Right="-7.69%"
                    image71Bottom="-9.61%"
                    verified2="verified-241@2x.png"
                    image30="image-3017@2x.png"
                    image67Left="-108px"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image67Top="-36px"
                    image71Top="-5.77%"
                    image71Left="-7.69%"
                    image301="image-3017@2x.png"
                  />
                  <CreaterCards
                    cover="../Assets/image-671@2x.png"
                    pfp="../Assets/image-711@2x.png"
                    username="     Donavon Bradtke"
                    clanName="GHOST OF ICP"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    verified2="../Assets/verified-237@2x.png"
                    image30="image-3010@2x.png"
                    image67Left="20px"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image301="image-309@2x.png"
                  />
                  <CreaterCards
                    cover="../Assets/image-682@2x.png"
                    pfp="../Assets/image-692@2x.png"
                    username="Orville Rodriguez"
                    clanName="BYACH"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    image67Height="375px"
                    verified2="../Assets/verified-237@2x.png"
                    image30="image-3010@2x.png"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image301="image-309@2x.png"
                  />
                  <CreaterCards
                    cover="../Assets/image-5511@2x.png"
                    pfp="image-29154@2x.png"
                    username="         Emilio Bruen"
                    clanName="WOLVES"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    image67Height="434px"
                    image71Height="115.38%"
                    image71Width="115.38%"
                    image71Right="-15.38%"
                    image71Bottom="-15.38%"
                    verified2="../Assets/verified-237@2x.png"
                    image30="image-3010@2x.png"
                    image67Width="434px"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image301="image-309@2x.png"
                  />
                  <CreaterCards
                    cover="../Assets/image-683@2x.png"
                    pfp="../Assets/image-693@2x.png"
                    username="Georgianna Miller"
                    clanName="BYACH"
                    numberofPost="9.2K"
                    numberofFans="6.2K"
                    bestRun="0.12"
                    timeEarned="13K"
                    image67Height="375px"
                    verified2="verified-246@2x.png"
                    image30="image-3017@2x.png"
                    frame34347BackgroundColor="#0d0d0d"
                    frame34347BackgroundColor1="#0d0d0d"
                    profileBackgroundColor="#0d0d0d"
                    profileBorder="2px solid #1d2a3c"
                    kellyRossColor="#fff"
                    identityBackgroundColor="#0d0d0d"
                    identityBorderRight="1px solid #18212e"
                    kColor="#fff"
                    identityBackgroundColor1="#0d0d0d"
                    identityBorderRight1="1px solid #18212e"
                    kColor1="#fff"
                    identityBackgroundColor2="#0d0d0d"
                    identityBorderRight2="1px solid #18212e"
                    componentColor="#fff"
                    identityBackgroundColor3="#0d0d0d"
                    kColor2="#fff"
                    image301="image-309@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cta7}>
          <div className={styles.cta}>
            <img
              className={styles.bgMaskIcon}
              alt=""
              src="../Assets/bg-mask.svg"
            />
            <WithdrawTime
              line="../Assets/line3.svg"
              line1="../Assets/line3.svg"
              detailsPlaceholder="403"
              line2="../Assets/line3.svg"
              marketplaceInNumberColor="1px solid #0d0d0d"
              joinOurMailingListToStayIColor="#141414"
              buttonBorder="1px solid var(--color-cornflowerblue-100)"
              buttonBackgroundColor="1px solid #0d0d0d"
              createColor="#13a7fd"
              openWithdrawSuccessPopup={openWithdrawSuccessPopup}
            />
          </div>
        </div>
        <select className={styles.button1} required autoFocus />
        <div className={styles.button2}>
          <input
            className={styles.create1}
            type="text"
            placeholder="200"
            required
            autoFocus
          />
        </div>
        <div className={styles.cta9}>
          <MobileContainer
            downloadBadgeImageUrl="../Assets/download-badge--google-play-badge1.svg"
            groupImageUrl="../Assets/group8.svg"
            propColor="#fff"
            propColor1="#fff"
            propColor2="#fff"
            onDownloadBadgeAppStoreBadClick={onDownloadBadgeAppStoreBadClick}
          />
          <div className={styles.phoneMockup1}>
            <img
              className={styles.details1Icon}
              alt=""
              src="../Assets/details-1@2x.png"
            />
            <img
              className={styles.iphoneXIcon}
              alt=""
              src="../Assets/iphone-x@2x.png"
            />
          </div>
          <div className={styles.phoneMockup2}>
            <img
              className={styles.details1Icon}
              alt=""
              src="../Assets/home-7-1@2x.png"
            />
            <img
              className={styles.iphoneXIcon1}
              alt=""
              src="../Assets/iphone-x1@2x.png"
            />
          </div>
        </div>
        <div className={styles.vuesaxlineararrowRight} />
        <div className={styles.vuesaxlinearrefresh} />
        <img
          className={styles.vectorIcon}
          alt=""
          src="../Assets/vector123.svg"
        />
        <div className={styles.timeGained2}>Time Gained</div>
        <div className={styles.div8}>1:28</div>
        <div className={styles.timeGained3}>Time Gained</div>
        <div className={styles.div9}>1:28</div>
        <div className={styles.timeGained4}>Time Gained</div>
        <div className={styles.div10}>1:28</div>
        <div className={styles.timeGained5}>Time Gained</div>
        <div className={styles.div11}>1:28</div>
        <div className={styles.timeGained6}>Time Gained</div>
        <div className={styles.div12}>1:28</div>
        <div className={styles.timeGained7}>Time Gained</div>
        <div className={styles.div13}>1:28</div>
        <img
          className={styles.pageDarkChild}
          alt=""
          src="../Assets/frame-343451.svg"
        />
      </div>
      {isWithdrawSuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWithdrawSuccessPopup}
        >
          <WithdrawSuccessPopup onClose={closeWithdrawSuccessPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default PageDark;
