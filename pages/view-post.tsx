import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import UnderConstructionPopup from "../components/under-construction-popup";
import PortalPopup from "../components/portal-popup";
import UserCard from "../components/user-card";
import Banner from "../components/banner";
import Post from "../components/post";
import ReplyBox from "../components/reply-box";
import Reply from "../components/reply";
import BalanceBox from "../components/balance-box";
import styles from "./view-post.module.css";

const ViewPost: NextPage = () => {
  const router = useRouter();
  const [isUnderConstructionPopupOpen, setUnderConstructionPopupOpen] =
    useState(false);

  const onTimefeedLowResolutionLogoBClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDarkModeClick = useCallback(() => {
    router.push("/view-post1");
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

  const openUnderConstructionPopup = useCallback(() => {
    setUnderConstructionPopupOpen(true);
  }, []);

  const closeUnderConstructionPopup = useCallback(() => {
    setUnderConstructionPopupOpen(false);
  }, []);

  const onPostClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='field']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.viewPost}>
        <div className={styles.viewPostInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.navbarWrapper}>
                <nav className={styles.navbar}>
                  <div className={styles.timefeedLowResolutionLogoBParent}>
                    <button
                      className={styles.timefeedLowResolutionLogoB}
                      onClick={onTimefeedLowResolutionLogoBClick}
                    />
                    <textarea
                      className={styles.frameChild}
                      placeholder="Search posts, topics and accounts"
                    />
                    <button
                      className={styles.darkMode}
                      onClick={onDarkModeClick}
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
                      >
                        Explore
                      </button>
                      <button className={styles.explore} onClick={onEarnClick}>
                        Earn
                      </button>
                      <button
                        className={styles.explore}
                        onClick={openUnderConstructionPopup}
                      >
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
                        src="../Assets/account-circle-black-24dp-2-13.svg"
                      />
                      <img
                        className={styles.accountBalanceWalletBlack2Icon}
                        alt=""
                        src="../Assets/account-balance-wallet-black-24dp-5-13.svg"
                      />
                    </div>
                  </div>
                </nav>
              </div>
              <div className={styles.desktop1}>
                <div className={styles.frameGroup}>
                  <div />
                  <div className={styles.frameContainer}>
                    <div className={styles.auctionsWrapper}>
                      <div className={styles.auctions}>
                        <div className={styles.auctions1}>
                          <img
                            className={styles.image49Icon}
                            alt=""
                            src="../Assets/image-491@2x.png"
                          />
                          <img
                            className={styles.image49Icon}
                            alt=""
                            src="../Assets/image-501@2x.png"
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
                                src="../Assets/image-29179@2x.png"
                              />
                            </div>
                            <div className={styles.profile2}>
                              <img
                                className={styles.image29Icon}
                                alt=""
                                src="../Assets/image-29180@2x.png"
                              />
                            </div>
                            <div className={styles.profile3}>
                              <img
                                className={styles.image29Icon}
                                alt=""
                                src="../Assets/image-2911@2x.png"
                              />
                              <img
                                className={styles.image29Icon}
                                alt=""
                                src="../Assets/image-4110@2x.png"
                              />
                            </div>
                            <div className={styles.profile4}>
                              <img
                                className={styles.image29Icon}
                                alt=""
                                src="../Assets/image-2912@2x.png"
                              />
                              <img
                                className={styles.image29Icon}
                                alt=""
                                src="../Assets/image-4111@2x.png"
                              />
                            </div>
                            <img
                              className={styles.verified2Icon}
                              alt=""
                              src="../Assets/verified-21@2x.png"
                            />
                          </div>
                          <div className={styles.rectangleParent}>
                            <input
                              className={styles.groupChild}
                              type="checkbox"
                              autoFocus
                            />
                            <img
                              className={styles.vuesaxboldheartIcon}
                              alt=""
                              src="../Assets/vuesaxboldheart.svg"
                            />
                          </div>
                          <input
                            className={styles.auctionsChild}
                            type="checkbox"
                          />
                          <img
                            className={styles.vuesaxlinearheartSlashIcon}
                            alt=""
                            src="../Assets/vuesaxlinearheartslash13.svg"
                          />
                          <button className={styles.rectangleGroup}>
                            <img
                              className={styles.groupItem}
                              alt=""
                              loading="lazy"
                              src="../Assets/TransperentText@2x.png"
                            />
                            <div className={styles.iconlyboldgraphParent}>
                              <img className={styles.iconlyboldgraph} alt="" />
                              <img
                                className={styles.vuesaxlinearunlimitedIcon}
                                alt=""
                              />
                              <img
                                className={styles.path33909Icon}
                                alt=""
                                src="../Assets/path-33909.svg"
                              />
                              <div className={styles.div}>05:02:00</div>
                            </div>
                          </button>
                        </div>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameParent1}>
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
                            <div className={styles.frameWrapper1}>
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
                        <div className={styles.timeGained}>Time Gained</div>
                        <div className={styles.div1}>1:28</div>
                      </div>
                    </div>
                  </div>
                </div>
                <UserCard
                  pfpUsercard="image-5613@2x.png"
                  clanName="BYACH"
                  usernameHandle="Alex Rodrigues              @Alexir"
                  bio="          Carpediem / Virgo"
                  followers="  FOLLOWERS : 20K            CLAN"
                  following="       FOLLOWING : 5743         BYACH "
                  userImage1="../Assets/image-2912@2x.png"
                  userImage2="../Assets/image-2913@2x.png"
                  userImage3="../Assets/image-2914@2x.png"
                  userImage4="image-2915@2x.png"
                  userImage5="image-2916@2x.png"
                />
                <img className={styles.vuesaxlineararrowRightIcon} alt="" />
                <div className={styles.desktop1Child} />
                <Button
                  className={styles.new}
                  variant="outline"
                  w="1440px"
                  colorScheme="teal"
                >{`                                                    NEW `}</Button>
                <Button
                  className={styles.trending}
                  variant="outline"
                  w="1440px"
                  colorScheme="teal"
                >
                  TRENDING
                </Button>
                <Button
                  className={styles.related}
                  variant="outline"
                  w="1440px"
                  colorScheme="teal"
                >{` RELATED `}</Button>
                <Banner
                  mainImage="../Assets/image-553@2x.png"
                  sideImage1="../Assets/image-5110@2x.png"
                  sideImage2="../Assets/image-5110@2x.png"
                  sideImage3="../Assets/image-5110@2x.png"
                  pfp="image-29108@2x.png"
                  headingBanner="Formation of USE"
                  username="Mark Zuckerberg"
                  likes="82"
                  image29Top="-5.77%"
                  image29Right="-7.69%"
                  image29Bottom="-9.61%"
                  image29Left="-7.69%"
                  verified2="verified-216@2x.png"
                  favoritPosition="absolute"
                  favoritWidth="470px"
                  favoritHeight="335px"
                  favoritFlexShrink="unset"
                  favoritTop="1323px"
                  favoritLeft="490px"
                />
                <Banner
                  mainImage="../Assets/image-563@2x.png"
                  sideImage1="../Assets/image-524@2x.png"
                  sideImage2="../Assets/image-518@2x.png"
                  sideImage3="../Assets/image-519@2x.png"
                  pfp="image-29108@2x.png"
                  headingBanner="Formation of USE"
                  username="Mark Zuckerberg"
                  likes="82"
                  image29Top="-5.77%"
                  image29Right="-7.69%"
                  image29Bottom="-9.61%"
                  image29Left="-7.69%"
                  verified2="verified-216@2x.png"
                  favoritPosition="absolute"
                  favoritWidth="471px"
                  favoritHeight="335px"
                  favoritFlexShrink="unset"
                  favoritTop="1323px"
                  favoritLeft="0px"
                />
                <div className={styles.image54Parent}>
                  <img
                    className={styles.image54Icon}
                    alt=""
                    src="../Assets/image-544@2x.png"
                  />
                  <img
                    className={styles.image55Icon}
                    alt=""
                    src="../Assets/image-5511@2x.png"
                  />
                  <img
                    className={styles.image52Icon}
                    alt=""
                    src="../Assets/image-5219@2x.png"
                  />
                  <img
                    className={styles.image51Icon}
                    alt=""
                    src="../Assets/image-5511@2x.png"
                  />
                </div>
                <div className={styles.desktop1Item} />
                <div className={styles.desktop1Inner} />
                <Post
                  pfpPost="image-29324@2x.png"
                  username="Alex Rodrigues     "
                  handle="@Alexir"
                  postText="I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. "
                />
                <ReplyBox />
                <div className={styles.viewMore}>--View More--</div>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="../Assets/image-568@2x.png"
                />
                <img
                  className={styles.verified1Icon}
                  alt=""
                  src="../Assets/verified-1@2x.png"
                />
                <div className={styles.group481543defaultParent}>
                  <Reply
                    replyPfp="image-3061@2x.png"
                    replyText="Comment Here"
                    group481543DefaultAlignContent="center"
                    group481543DefaultAlignItems="center"
                    textPlaceholderAlignSelf="center"
                    textPlaceholderAlignItems="flex-start"
                  />
                  <textarea
                    className={styles.textPlaceholder}
                    placeholder="Comment Here"
                  />
                </div>
                <div className={styles.vuesaxlineartetherUsdt}>
                  <div className={styles.vuesaxlineartetherUsdt1}>
                    <div className={styles.tetherUsdt}>
                      <div className={styles.tetherUsdt}>
                        <BalanceBox maxLength={10} />
                        <button className={styles.groupInner} autoFocus />
                        <div className={styles.div2}>300,000</div>
                        <div className={styles.buyTime}>BUY $TIME</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.vuesaxlineartetherUsdtIcon}
                  alt=""
                  src="../Assets/vuesaxlineartetherusdt1.svg"
                />
                <img
                  className={styles.vuesaxlinearheartIcon}
                  alt=""
                  src="../Assets/vuesaxlinearheart.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.viewPostChild}>
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
              alt=""
              src="../Assets/vector73.svg"
            />
            <img
              className={styles.vuesaxlinearheartSlashIcon1}
              alt=""
              src="../Assets/vuesaxlinearheartslash50.svg"
            />
          </div>
        </div>
      </div>
      {isUnderConstructionPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUnderConstructionPopup}
        >
          <UnderConstructionPopup onClose={closeUnderConstructionPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ViewPost;
