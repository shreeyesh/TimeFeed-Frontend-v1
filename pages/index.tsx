import type { NextPage } from "next";
import { useState, useCallback } from "react";
import {
  Stack,
  MenuButton,
  Menu,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import WithdrawSuccessPopup from "../components/withdraw-success-popup";
import PortalPopup from "../components/portal-popup";
import ExploreContainer from "../components/explore-container";
import Navbar from "../components/navbar";
import LeaderboardCards from "../components/leaderboard-cards";
import SocialCard from "../components/social-card";
import SocialCardExt from "../components/social-card-ext";
import SocialCardsNew from "../components/social-cards-new";
import Banner from "../components/banner";
import CreaterCards from "../components/creater-cards";
import WithdrawTime from "../components/withdraw-time";
import MobileContainer from "../components/mobile-container";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
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
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCreateTextClick = useCallback(() => {
    router.push("/create-post");
  }, [router]);

  const onExploreMoreAboutClick = useCallback(() => {
    window.open(
      "https://timefeed.notion.site/abdc61bc18d24190b22f5f40adeb5327?v=1a403d1fae724e87bf7c2a0beb65b901"
    );
  }, []);

  const onDarkModeClick = useCallback(() => {
    router.push("/page-dark");
  }, [router]);

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
    router.push("/create-post");
  }, [router]);

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

  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image64']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrame17Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navbar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.homepageInner}>
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
                exploreText="../Assets/play-circle-filled-black-24dp-1-1.svg"
                exploreTimeFeedText="Explore More about TimeFeed"
                propColor="#131516"
                propBackgroundColor="#029cf5"
                propColor1="#fff"
                propBorder="1px solid var(--color-cornflowerblue-300)"
                propBackgroundColor1="#fff"
                propColor2="#029cf5"
                propColor3="#029cf5"
                onButtonClick={onButtonClick}
                onExploreTextClick={onExploreTextClick}
                onCreateTextClick={onCreateTextClick}
                onExploreMoreAboutClick={onExploreMoreAboutClick}
              />
              <div className={styles.fading} />
              <Navbar
                timefeedLowResolutionLogo="../Assets/timefeedlowresolutionlogoblackonwhitebackground-31@2x.png"
                darkMode="dark-mode4.svg"
                onDarkModeClick={onDarkModeClick}
                onExploreClick={onExploreClick}
                onEarnClick={onEarnClick}
                onTradeClick={onTradeClick}
                onPostClick={onPostClick}
                accountCircleBlack24dp21="../Assets/account-circle-black-24dp-2-110.svg"
                accountBalanceWalletBlack="../Assets/account-balance-wallet-black-24dp-5-110.svg"
              />
              <img
                className={styles.timefeedLowResolutionLogoBIcon}
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
                src="../Assets/divider.svg"
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
                src="../Assets/divider1.svg"
              />
            </div>
          </div>
          <div className={styles.desktop2}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.hallOfFameParent}>
                  <div className={styles.hallOfFame}>Hall of Fame</div>
                  <div className={styles.frameContainer}>
                    <div className={styles.chainWrapper}>
                      <select className={styles.chain} />
                    </div>
                    <select className={styles.chainWrapper} />
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.auctionsParent}>
                    <LeaderboardCards
                      component="1"
                      image29="../Assets/image-2929@2x.png"
                      userName="Bobby Axelrod"
                      description="23.46"
                      divider="../Assets/divider16.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                    <LeaderboardCards
                      component="4"
                      image29="../Assets/image-2930@2x.png"
                      userName="Shany Rodriguez"
                      description="22.28"
                      divider="../Assets/divider17.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                    <LeaderboardCards
                      component="7"
                      image29="../Assets/image-2931@2x.png"
                      userName="Damaris Leffler"
                      description="21.51"
                      divider="../Assets/divider18.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                  </div>
                  <div className={styles.auctionsParent}>
                    <LeaderboardCards
                      component="2"
                      image29="../Assets/image-2932@2x.png"
                      userName="Christina Williams"
                      description="23.40"
                      divider="../Assets/divider19.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                      componentLeft="11px"
                    />
                    <LeaderboardCards
                      component="5"
                      image29="../Assets/image-2933@2x.png"
                      userName="Krystina Mosciski"
                      description="22.12"
                      divider="../Assets/divider20.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                    <LeaderboardCards
                      component="8"
                      image29="../Assets/image-2934@2x.png"
                      userName="Mya Tillman"
                      description="21.37"
                      divider="../Assets/divider21.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                  </div>
                  <div className={styles.auctionsParent}>
                    <LeaderboardCards
                      component="3"
                      image29="../Assets/image-2935@2x.png"
                      userName="Gavin Belson"
                      description="23.00"
                      divider="../Assets/divider22.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                    <LeaderboardCards
                      component="6"
                      image29="../Assets/image-2936@2x.png"
                      userName="Henry Denesik"
                      description="21.93"
                      divider="../Assets/divider23.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                    <LeaderboardCards
                      component="9"
                      image29="../Assets/image-2937@2x.png"
                      userName="Haley Douglas"
                      description="21.15"
                      divider="../Assets/divider24.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                  </div>
                  <div className={styles.auctionsParent}>
                    <LeaderboardCards
                      component="10"
                      image29="../Assets/image-2938@2x.png"
                      userName="Kabir Malhotra"
                      description="22.64"
                      divider="../Assets/divider25.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                    <LeaderboardCards
                      component="11"
                      image29="../Assets/image-2939@2x.png"
                      userName="Bored Ape Yacht"
                      description="21.72"
                      divider="../Assets/divider26.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                    <LeaderboardCards
                      component="12"
                      image29="image-2940@2x.png"
                      userName="Roman Klocko"
                      description="20.87"
                      divider="../Assets/divider27.svg"
                      percentGain="+ 45,23%"
                      runTime="15m 24s"
                    />
                  </div>
                </div>
              </div>
              <img
                className={styles.vuesaxlinearrankingIcon}
                alt=""
                src="../Assets/vuesaxlinearranking.svg"
              />
            </div>
          </div>
          <div className={styles.fading1} />
          <div className={styles.desktop1}>
            <div className={styles.frameParent6}>
              <div
                className={styles.frameParent7}
                data-scroll-to="frameContainer"
              >
                <div className={styles.chainWrapper}>
                  <div className={styles.hallOfFame}>Featured Posts</div>
                </div>
                <button className={styles.button} onClick={onButton2Click}>
                  <div className={styles.create}>See All</div>
                </button>
              </div>
              <div className={styles.frameParent8}>
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
                    group34289="../Assets/group-342898.svg"
                    iconlyBoldGraph="iconlyboldgraph2.svg"
                  />
                  <SocialCardExt auctionsHeight="500px" />
                  <SocialCardExt
                    postImage="image-464@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-342909.svg"
                    heading="Climate Change: A Global Crisis"
                    description="Climate change is a major environmental challenge .."
                    iconlyBoldGraph="iconlyboldgraph2.svg"
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
                    likeDislike="../Assets/group-342899.svg"
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
                    iconlyBoldGraph="iconlyboldgraph2.svg"
                  />
                </div>
                <div className={styles.auctionsParent}>
                  <div className={styles.auctions}>
                    <div className={styles.auctions1}>
                      <img
                        className={styles.image57Icon}
                        alt=""
                        src="../Assets/image-562@2x.png"
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
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="../Assets/blurText3@2x.png"
                        />
                        <div className={styles.iconlyboldgraphParent}>
                          <img
                            className={styles.iconlyboldgraph}
                            alt=""
                            src="../Assets/iconlyboldgraph.svg"
                          />
                          <div className={styles.div}>05:38:40</div>
                        </div>
                      </div>
                      <img
                        className={styles.auctionsChild}
                        alt=""
                        src="../Assets/group-34242.svg"
                      />
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.frameContainer}>
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
                    group34289="../Assets/group-3429010.svg"
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
                    iconlyBoldGraph="iconlyboldgraph2.svg"
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
                        src="../Assets/group-342902.svg"
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
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="../Assets/blurText5@2x.png"
                        />
                        <div className={styles.iconlyboldgraphParent}>
                          <img
                            className={styles.iconlyboldgraph}
                            alt=""
                            src="../Assets/iconlyboldgraph.svg"
                          />
                          <div className={styles.div}>05:38:40</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.frameParent10}>
                        <div className={styles.frameContainer}>
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
                        src="../Assets/group-342903.svg"
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
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="../Assets/blurText6@2x.png"
                        />
                        <div className={styles.iconlyboldgraphParent}>
                          <img
                            className={styles.iconlyboldgraph}
                            alt=""
                            src="../Assets/iconlyboldgraph.svg"
                          />
                          <div className={styles.div}>05:38:40</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.frameContainer}>
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
                    group34289="../Assets/group-3429013.svg"
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
                    iconlyBoldGraph="iconlyboldgraph2.svg"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-63@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-3428910.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    iconlyBoldGraph="iconlyboldgraph2.svg"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-62@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-3428911.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    iconlyBoldGraph="iconlyboldgraph2.svg"
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
                    likeDislike="../Assets/group-3428912.svg"
                    heading="Gun Control: Striking the Balance"
                    description="Gun control laws vary widely around the world, with some countries having..."
                    descriptionWidth="296px"
                    timeGainedTop="471px"
                    timeGainedLeft="30px"
                    componentTop="471px"
                    componentLeft="251px"
                    image46Width="300px"
                    iconlyBoldGraph="iconlyboldgraph2.svg"
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
                    group34289="group-3429014.svg"
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
                    iconlyBoldGraph="iconlyboldgraph24.svg"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-72@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-3428913.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    image65Width="301px"
                    iconlyBoldGraph="iconlyboldgraph24.svg"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-621@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-3428914.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    iconlyBoldGraph="iconlyboldgraph24.svg"
                  />
                  <SocialCardsNew
                    postImage="../Assets/image-651@2x.png"
                    userImage1="../Assets/image-292@2x.png"
                    userImage2="image-293@2x.png"
                    userImage3="image-294@2x.png"
                    userImage4="image-295@2x.png"
                    userImage5="image-296@2x.png"
                    timeLeft="05:38:40"
                    likeDislike="../Assets/group-3428915.svg"
                    heading="Formation of USE"
                    descirption="I feel like formation of United States of"
                    iconlyBoldGraph="iconlyboldgraph24.svg"
                  />
                </div>
              </div>
              <img className={styles.vuesaxlineararrowLeftIcon} alt="" />
            </div>
            <img
              className={styles.vuesaxlineararrowRightIcon}
              alt=""
              src="../Assets/vuesaxlineararrowright.svg"
            />
          </div>
        </div>
        <div className={styles.desktop3}>
          <div className={styles.frameParent15}>
            <div className={styles.frameParent16}>
              <div className={styles.frameWrapper3}>
                <div className={styles.trendingPostsParent}>
                  <div className={styles.hallOfFame}>Trending Posts</div>
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="../Assets/frame-34343.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="../Assets/frame-34344.svg"
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
                    <div className={styles.frameParent18}>
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
                    <div className={styles.frameParent19}>
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
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.div5}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="../Assets/image-506@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent18}>
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
                    <div className={styles.frameParent19}>
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
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.div5}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="../Assets/image-506@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent18}>
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
                    <div className={styles.frameParent19}>
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
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.div5}>82</div>
                    </button>
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
                    vuesaxboldheart="vuesaxboldheart18.svg"
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
                    vuesaxboldheart="vuesaxboldheart18.svg"
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
                    vuesaxboldheart="vuesaxboldheart18.svg"
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
                    vuesaxboldheart="vuesaxboldheart18.svg"
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
                    vuesaxboldheart="vuesaxboldheart22.svg"
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
                    vuesaxboldheart="vuesaxboldheart22.svg"
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
                    vuesaxboldheart="vuesaxboldheart22.svg"
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
                  />
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="../Assets/image-506@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent18}>
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
                    <div className={styles.frameParent19}>
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
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.div5}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="../Assets/image-506@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent18}>
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
                    <div className={styles.frameParent19}>
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
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.div5}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="../Assets/image-506@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent18}>
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
                    <div className={styles.frameParent19}>
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
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxlineararrowLeftIcon}
                        alt=""
                      />
                      <div className={styles.div5}>82</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent30}>
              <div className={styles.frameWrapper10}>
                <div className={styles.trendingPostsParent}>
                  <div className={styles.trendingCreators}>
                    Trending Creators
                  </div>
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="../Assets/frame-343431.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="../Assets/frame-343441.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent32}>
                <div className={styles.frameParent33}>
                  <div className={styles.frameParent34}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image66Icon}
                        alt=""
                        src="../Assets/image-66@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent7}>
                      <div className={styles.profile21}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="../Assets/image-29144@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon9}
                        alt=""
                        src="../Assets/verified-233@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>Shayne McLaughlin</div>
                      <div className={styles.clanByachContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="../Assets/image-3014@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="../Assets/image-3015@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    image301="image-309@2x.png"
                  />
                  <div className={styles.frameParent34}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image68Icon}
                        alt=""
                        src="../Assets/image-681@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent7}>
                      <div className={styles.profile21}>
                        <img
                          className={styles.image69Icon}
                          alt=""
                          src="../Assets/image-691@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon9}
                        alt=""
                        src="../Assets/verified-237@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>
                        Agung Prio Rismawan
                      </div>
                      <div className={styles.clanByachContainer1}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="../Assets/image-3022@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="../Assets/image-3022@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent36}>
                  <div className={styles.frameParent34}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image66Icon1}
                        alt=""
                        src="../Assets/image-661@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent7}>
                      <div className={styles.profile21}>
                        <img
                          className={styles.image29Icon18}
                          alt=""
                          src="../Assets/image-29146@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon9}
                        alt=""
                        src="../Assets/verified-237@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>
                        Agung Prio Rismawan
                      </div>
                      <div className={styles.clanByachContainer1}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="../Assets/image-3022@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="../Assets/image-3022@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    image301="image-309@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cta7} data-scroll-to="cTA7">
          <div className={styles.cta}>
            <div className={styles.bgMask}>
              <div className={styles.bg} />
              <img
                className={styles.bgMaskChild}
                alt=""
                src="../Assets/vector-1.svg"
              />
              <img
                className={styles.bgMaskItem}
                alt=""
                src="../Assets/withdrawTIme.svg"
              />
            </div>
            <WithdrawTime
              line="../Assets/line.svg"
              line1="../Assets/line.svg"
              detailsPlaceholder="403"
              line2="../Assets/line.svg"
              marketplaceInNumberColor="#fff"
              joinOurMailingListToStayIColor="#f5f7fa"
              buttonBorder="1px solid var(--color-cornflowerblue-300)"
              buttonBackgroundColor="#fff"
              createColor="#029cf5"
              openWithdrawSuccessPopup={openWithdrawSuccessPopup}
            />
          </div>
        </div>
        <div className={styles.homepageChild}>
          <div className={styles.buttonWrapper}>
            <Stack className={styles.button1}>
              <Menu>
                <MenuButton
                  w="319px"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="nftwhite"
                >
                  Dropdown
                </MenuButton>
                <MenuList>
                  <MenuItem value="Formation of USE - 00:50:00">
                    Formation of USE - 00:50:00
                  </MenuItem>
                  <MenuItem value="Abortion: A Growing Debate - 00:35:00">
                    Abortion: A Growing Debate - 00:35:00
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </div>
        </div>
        <input
          className={styles.button2}
          type="number"
          placeholder="200"
          min={0.1}
          required
        />
        <div className={styles.cta9}>
          <MobileContainer
            downloadBadgeImageUrl="../Assets/download-badge--google-play-badge.svg"
            groupImageUrl="group.svg"
            propColor="#131516"
            propColor1="#131516"
            propColor2="#131516"
            onDownloadBadgeAppStoreBadClick={onDownloadBadgeAppStoreBadClick}
          />
          <img
            className={styles.phoneMockup1}
            alt=""
            src="../Assets/phone-mockup-1@2x.png"
          />
          <img
            className={styles.phoneMockup2}
            alt=""
            src="../Assets/phone-mockup-2@2x.png"
          />
        </div>
        <div className={styles.vuesaxlineararrowRight} />
        <div className={styles.vuesaxlinearrefresh} />
        <img
          className={styles.vectorIcon}
          alt=""
          src="../Assets/vector24.svg"
        />
        <div className={styles.timeGained2}>Time Gained</div>
        <div className={styles.div14}>1:28</div>
        <div className={styles.timeGained3}>Time Gained</div>
        <div className={styles.div15}>1:28</div>
        <div className={styles.timeGained4}>Time Gained</div>
        <div className={styles.div16}>1:28</div>
        <div className={styles.timeGained5}>Time Gained</div>
        <div className={styles.div17}>1:28</div>
        <div className={styles.timeGained6}>Time Gained</div>
        <div className={styles.div18}>1:28</div>
        <div className={styles.timeGained7}>Time Gained</div>
        <div className={styles.div19}>1:28</div>
        <input
          className={styles.input}
          type="number"
          placeholder="200"
          required
          autoFocus
        />
        <img
          className={styles.homepageItem}
          alt=""
          src="../Assets/frame-34345.svg"
          onClick={onFrame17Click}
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

export default HomePage;
