import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@chakra-ui/react";
import styles from "./create-post-dark.module.css";

const CreatePostDark: NextPage = () => {
  const onExploreTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEarnTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cTA7']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.createPostDark}>
      <div className={styles.createPostDarkInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.desktop1Wrapper}>
              <div className={styles.desktop1}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div />
                  </div>
                  <div className={styles.frameDiv}>
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
                            <button className={styles.groupChild} />
                            <div className={styles.iconlyboldgraphParent}>
                              <img
                                className={styles.iconlyboldgraph}
                                alt=""
                                src="../Assets/iconlyboldgraph.svg"
                              />
                              <div className={styles.div}>05:38:40</div>
                            </div>
                          </div>
                          <div className={styles.rectangleGroup}>
                            <input
                              className={styles.groupItem}
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
                            src="../Assets/vuesaxlinearheartslash5.svg"
                          />
                        </div>
                        <div className={styles.frameParent1}>
                          <div className={styles.frameParent2}>
                            <div className={styles.formationOfUseParent}>
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
                              <div className={styles.frameContainer}>
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
                <div className={styles.auctions2}>
                  <div className={styles.auctions3}>
                    <img
                      className={styles.image49Icon}
                      alt=""
                      src="../Assets/image-491@2x.png"
                    />
                    <img
                      className={styles.image49Icon}
                      alt=""
                      src="../Assets/image-5011@2x.png"
                    />
                    <img className={styles.icon} alt="" />
                    <img
                      className={styles.image56Icon}
                      alt=""
                      src="../Assets/image-566@2x.png"
                    />
                    <img className={styles.auctionsItem} alt="" />
                    <img className={styles.lightsIcon} alt="" />
                    <div className={styles.stroke}>
                      <div className={styles.strokeChild} />
                    </div>
                    <button className={styles.auctionsInner} />
                    <button className={styles.rectangleButton} />
                    <button className={styles.rectangleContainer} autoFocus>
                      <button className={styles.groupInner} />
                      <div className={styles.iconlyboldgraphGroup}>
                        <img className={styles.iconlyboldgraph1} alt="" />
                        <img
                          className={styles.vuesaxlinearunlimitedIcon}
                          alt=""
                          src="../Assets/vuesaxlinearunlimited.svg"
                        />
                        <div className={styles.follow}>FOLLOW</div>
                      </div>
                    </button>
                    <div className={styles.groupDiv}>
                      <button className={styles.groupInner} />
                      <div className={styles.iconlyboldgraphContainer}>
                        <img className={styles.iconlyboldgraph2} alt="" />
                        <img
                          className={styles.vuesaxlinearunlimitedIcon}
                          alt=""
                        />
                        <div className={styles.byach}>BYACH</div>
                      </div>
                    </div>
                    <div className={styles.rectangleParent1}>
                      <button className={styles.groupInner} />
                      <div className={styles.vuesaxlinearuserSquareParent}>
                        <img
                          className={styles.vuesaxlinearuserSquareIcon}
                          alt=""
                          src="../Assets/vuesaxlinearusersquare.svg"
                        />
                        <div className={styles.profile5}>PROFILE</div>
                      </div>
                    </div>
                    <img
                      className={styles.vuesaxlinearpeopleIcon}
                      alt=""
                      src="../Assets/vuesaxlinearpeople.svg"
                    />
                  </div>
                  <img
                    className={styles.verified2Icon1}
                    alt=""
                    src="../Assets/verified-249@2x.png"
                  />
                  <div className={styles.frameParent3}>
                    <div className={styles.frameParent2}>
                      <div className={styles.auctionsWrapper}>
                        <div className={styles.alexRodriguesAlexir}>
                          Alex Rodrigues @Alexir
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.frameContainer}>
                          <div className={styles.description1}>
                            <p className={styles.iFeelLike}>
                              <span> Carpediem / Virgo</span>
                            </p>
                            <p className={styles.iFeelLike}>
                              <span>&nbsp;</span>
                            </p>
                            <p className={styles.followers20kCla}>
                              <span>{`       `}</span>
                              <span> FOLLOWERS : 20K CLAN</span>
                            </p>
                            <p className={styles.iFeelLike}>
                              <span>{`                                                   `}</span>
                            </p>
                            <p className={styles.europeLedBy}>
                              <span>{`       FOLLOWING : 5743         BYACH `}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.profileGroup}>
                      <div className={styles.profile6}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="../Assets/image-298@2x.png"
                        />
                      </div>
                      <div className={styles.profile7}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="../Assets/image-299@2x.png"
                        />
                      </div>
                      <div className={styles.profile8}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="../Assets/image-2910@2x.png"
                        />
                      </div>
                      <div className={styles.profile9}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="../Assets/image-2911@2x.png"
                        />
                      </div>
                      <div className={styles.profile10}>
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
                    <div />
                  </div>
                  <div className={styles.mutualFollowers}>MUTUAL FOLLOWERS</div>
                </div>
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
                <div className={styles.favorit}>
                  <div className={styles.image55Wrapper}>
                    <img
                      className={styles.image55Icon}
                      alt=""
                      src="../Assets/image-553@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.image51Wrapper}>
                      <img
                        className={styles.image51Icon}
                        alt=""
                        src="../Assets/image-5110@2x.png"
                      />
                    </div>
                    <div className={styles.image51Wrapper}>
                      <img
                        className={styles.image51Icon}
                        alt=""
                        src="../Assets/image-5110@2x.png"
                      />
                    </div>
                    <div className={styles.image51Wrapper}>
                      <img
                        className={styles.image51Icon}
                        alt=""
                        src="../Assets/image-5110@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.profileContainer}>
                    <div className={styles.profile11}>
                      <img
                        className={styles.image29Icon11}
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
                  <div className={styles.frameParent6}>
                    <div className={styles.auctionsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.frameContainer}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.like}>
                    <img className={styles.vuesaxboldheartIcon1} alt="" />
                    <div className={styles.trade}>82</div>
                  </div>
                </div>
                <div className={styles.favorit1}>
                  <div className={styles.image56Wrapper}>
                    <img
                      className={styles.image55Icon}
                      alt=""
                      src="../Assets/image-563@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.image51Wrapper}>
                      <img
                        className={styles.image51Icon}
                        alt=""
                        src="../Assets/image-524@2x.png"
                      />
                    </div>
                    <div className={styles.image51Wrapper}>
                      <img
                        className={styles.image51Icon}
                        alt=""
                        src="../Assets/image-518@2x.png"
                      />
                    </div>
                    <div className={styles.image51Wrapper}>
                      <img
                        className={styles.image51Icon}
                        alt=""
                        src="../Assets/image-519@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.profileContainer}>
                    <div className={styles.profile11}>
                      <img
                        className={styles.image29Icon11}
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
                  <div className={styles.frameParent6}>
                    <div className={styles.auctionsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.frameContainer}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.like}>
                    <img className={styles.vuesaxboldheartIcon1} alt="" />
                    <div className={styles.trade}>82</div>
                  </div>
                </div>
                <img
                  className={styles.image54Icon}
                  alt=""
                  src="../Assets/image-544@2x.png"
                />
                <img
                  className={styles.image55Icon1}
                  alt=""
                  src="../Assets/image-559@2x.png"
                />
                <img
                  className={styles.image52Icon2}
                  alt=""
                  src="../Assets/image-5216@2x.png"
                />
                <img
                  className={styles.image51Icon4}
                  alt=""
                  src="../Assets/image-559@2x.png"
                />
                <div className={styles.desktop1Item} />
                <div className={styles.desktop1Inner} />
                <div className={styles.frameParent9}>
                  <div className={styles.image29Parent}>
                    <img
                      className={styles.image29Icon13}
                      alt=""
                      src="../Assets/image-29191@2x.png"
                    />
                    <div className={styles.inputleftaddon}>
                      <p
                        className={styles.alexRodrigues}
                      >{`Alex Rodrigues     `}</p>
                      <p className={styles.europeLedBy}>@Alexir</p>
                    </div>
                    <div
                      className={styles.textPlaceholder}
                    >{`I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. `}</div>
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="../Assets/vector42.svg"
                    />
                    <button className={styles.vuesaxlinearheartSlash}>
                      <img
                        className={styles.vuesaxlinearheartSlashIcon1}
                        alt=""
                        src="../Assets/vuesaxlinearheartslash25.svg"
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.component19}>
                  <div className={styles.property1default}>
                    <div className={styles.textPlaceholderWrapper}>
                      <div className={styles.textPlaceholder1}>
                        I can understand your sentiment, but unity doesn't
                        always guarantee success.
                      </div>
                    </div>
                    <div className={styles.image41Parent}>
                      <img
                        className={styles.image29Icon13}
                        alt=""
                        src="../Assets/image-4112@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Emily Wilson</p>
                        <p className={styles.europeLedBy}>@emilywilson</p>
                      </div>
                    </div>
                    <div className={styles.property1defaultInner}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector43.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash26.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant2}>
                    <div className={styles.frameParent10}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4113@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Ryan Smith</p>
                          <p className={styles.europeLedBy}>@RyanFeeds</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholderContainer}>
                        <div className={styles.textPlaceholder2}>
                          Cultural diversity important too
                        </div>
                      </div>
                    </div>
                    <div className={styles.property1defaultInner}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector44.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash27.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant3}>
                    <div className={styles.frameParent11}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4114@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder3}>
                        All countries must be on board.
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant4}>
                    <div className={styles.frameParent11}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4115@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder4}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector45.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash28.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant5}>
                    <div className={styles.frameParent11}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4116@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder5}>
                        Don't rush without consideration.
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant6}>
                    <div className={styles.frameParent14}>
                      <div className={styles.auctionsWrapper}>
                        <div className={styles.image41Group}>
                          <img
                            className={styles.image29Icon13}
                            alt=""
                            src="../Assets/image-4117@2x.png"
                          />
                          <div className={styles.inputleftaddon1}>
                            <p className={styles.iFeelLike}>Christina Will</p>
                            <p className={styles.europeLedBy}>@ChristinaW</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder6}>
                        Interesting concept, evaluate well.
                      </div>
                    </div>
                    <div className={styles.property1defaultInner}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector46.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash29.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.verified1Icon}
                      alt=""
                      src="../Assets/verified-1@2x.png"
                    />
                  </div>
                  <div className={styles.property1variant7}>
                    <div className={styles.frameParent11}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4118@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder7}>
                        Potential drawbacks to consider.
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant8}>
                    <div className={styles.frameParent16}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4119@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder4}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.property1variant8Inner}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector47.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash30.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant9}>
                    <div className={styles.frameParent16}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4120@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder4}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.property1variant8Inner}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector48.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash31.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.verified1Icon1}
                      alt=""
                      src="../Assets/verified-1@2x.png"
                    />
                  </div>
                  <div className={styles.property1variant10}>
                    <div className={styles.frameParent11}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4121@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder4}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector49.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash32.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant11}>
                    <div className={styles.frameParent11}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4122@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder4}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector50.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash33.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant12}>
                    <div className={styles.frameParent11}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4123@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder4}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector51.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash34.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.property1variant13}>
                    <div className={styles.frameParent16}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image29Icon13}
                          alt=""
                          src="../Assets/image-4124@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Frank Smith</p>
                          <p className={styles.europeLedBy}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder4}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.property1variant8Inner}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="../Assets/vector52.svg"
                        />
                        <img
                          className={styles.vuesaxboldheartIcon1}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash35.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.viewMore}>--View More--</div>
                <img
                  className={styles.image56Icon2}
                  alt=""
                  src="../Assets/image-568@2x.png"
                />
                <img
                  className={styles.verified1Icon2}
                  alt=""
                  src="../Assets/verified-1@2x.png"
                />
                <div className={styles.group481543default}>
                  <img
                    className={styles.image30Icon}
                    alt=""
                    src="../Assets/image-3040@2x.png"
                  />
                  <input className={styles.textPlaceholder14} type="text" />
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="../Assets/vector53.svg"
                  />
                </div>
                <div className={styles.vuesaxlineartetherUsdt}>
                  <div className={styles.vuesaxlineartetherUsdt1}>
                    <div className={styles.tetherUsdt}>
                      <img className={styles.bg1Icon} alt="" />
                      <img
                        className={styles.vectorIcon12}
                        alt=""
                        src="../Assets/vector54.svg"
                      />
                      <img
                        className={styles.vectorIcon13}
                        alt=""
                        src="../Assets/vector55.svg"
                      />
                      <img
                        className={styles.vectorIcon14}
                        alt=""
                        src="../Assets/vector56.svg"
                      />
                      <img className={styles.vectorIcon15} alt="" />
                      <div className={styles.rectangleParent2}>
                        <textarea className={styles.rectangleTextarea} />
                        <button className={styles.groupChild3} autoFocus />
                        <div className={styles.div4}>300,000</div>
                        <div className={styles.buyTime}>BUY $TIME</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.vuesaxlineartetherUsdtIcon}
                  alt=""
                  src="../Assets/vuesaxlineartetherusdt.svg"
                />
              </div>
            </div>
            <div className={styles.navbar}>
              <div className={styles.timefeedLowResolutionLogoBParent}>
                <img
                  className={styles.timefeedLowResolutionLogoBIcon}
                  alt=""
                  src="../Assets/timefeedlowresolutionlogoblackonwhitebackground-32@2x.png"
                />
                <input
                  className={styles.frameChild}
                  type="text"
                  placeholder="Search posts, topics and accounts"
                />
                <img
                  className={styles.darkModeIcon}
                  alt=""
                  src="../Assets/dark-mode.svg"
                />
                <div className={styles.menus}>
                  <div className={styles.explore} onClick={onExploreTextClick}>
                    Explore
                  </div>
                  <div className={styles.explore} onClick={onEarnTextClick}>
                    Earn
                  </div>
                  <div className={styles.trade}>Trade</div>
                  <div className={styles.trade}>Post</div>
                </div>
                <div className={styles.formationOfUseParent}>
                  <img
                    className={styles.accountBalanceWalletBlack2Icon}
                    alt=""
                    src="../Assets/account-circle-black-24dp-2-12.svg"
                  />
                  <img
                    className={styles.accountBalanceWalletBlack2Icon}
                    alt=""
                    src="../Assets/account-balance-wallet-black-24dp-5-12.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.createPostDarkChild}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="../Assets/vector43.svg"
          />
          <img
            className={styles.vuesaxboldheartIcon1}
            alt=""
            src="../Assets/vuesaxlinearheartslash26.svg"
          />
        </div>
      </div>
      <div className={styles.createPostDarkInner1}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="../Assets/vector43.svg"
          />
          <img
            className={styles.vuesaxboldheartIcon1}
            alt=""
            src="../Assets/vuesaxlinearheartslash26.svg"
          />
        </div>
      </div>
      <div className={styles.createPostDarkInner2}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="../Assets/vector43.svg"
          />
          <img
            className={styles.vuesaxboldheartIcon1}
            alt=""
            src="../Assets/vuesaxlinearheartslash26.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePostDark;
