import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import PostCreated from "../components/post-created";
import PortalPopup from "../components/portal-popup";
import PostContainer11111111111 from "../components/frame-34331";
import styles from "./create-post.module.css";

const CreatePost: NextPage = () => {
  const router = useRouter();
  const [isPostCreatedPopupOpen, setPostCreatedPopupOpen] = useState(false);

  const onTimefeedLowResolutionLogoBImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDarkModeClick = useCallback(() => {
    router.push("/create-post-dark1");
  }, [router]);

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

  const onPostTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='field']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPostButtonClick = useCallback(() => {
    router.push("/frame-component");
  }, [router]);

  const openPostCreatedPopup = useCallback(() => {
    setPostCreatedPopupOpen(true);
  }, []);

  const closePostCreatedPopup = useCallback(() => {
    setPostCreatedPopupOpen(false);
  }, []);

  const onButton5Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCreateClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onViewMoreClick = useCallback(() => {
    router.push("/F$193:3341$");
  }, [router]);

  const onAuctionsClick = useCallback(() => {
    router.push("/view-post");
  }, [router]);

  const onViewMore1Click = useCallback(() => {
    router.push("/F$193:3341$");
  }, [router]);

  return (
    <>
      <div className={styles.createPost}>
        <nav className={styles.navbar}>
          <div className={styles.timefeedLowResolutionLogoBParent}>
            <img
              className={styles.timefeedLowResolutionLogoBIcon}
              alt=""
              src="../Assets/timefeedlowresolutionlogoblackonwhitebackground-32@2x.png"
              onClick={onTimefeedLowResolutionLogoBImageClick}
            />
            <div className={styles.groupParent}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../Assets/vector74.svg"
                />
                <input
                  className={styles.searchPostsTopics}
                  type="text"
                  placeholder="Search posts, topics and accounts"
                />
              </div>
              <div className={styles.groupChild} />
            </div>
            <button className={styles.darkMode} onClick={onDarkModeClick}>
              <img
                className={styles.darkModeChild}
                alt=""
                src="../Assets/ellipse-12.svg"
              />
            </button>
            <div className={styles.menus}>
              <div className={styles.explore} onClick={onExploreTextClick}>
                Explore
              </div>
              <div className={styles.explore} onClick={onEarnTextClick}>
                Earn
              </div>
              <div className={styles.trade}>Trade</div>
              <div className={styles.explore} onClick={onPostTextClick}>
                Post
              </div>
            </div>
            <div className={styles.icon}>
              <img
                className={styles.accountBalanceWalletBlack2Icon}
                alt=""
                src="../Assets/account-circle-black-24dp-2-18.svg"
              />
              <img
                className={styles.accountBalanceWalletBlack2Icon}
                alt=""
                src="../Assets/account-balance-wallet-black-24dp-5-18.svg"
              />
            </div>
          </div>
        </nav>
        <div className={styles.upload}>
          <div className={styles.progress}>
            <div className={styles.progressChild} />
            <div className={styles.progressItem} />
            <div className={styles.progressInner} />
          </div>
          <div className={styles.background} />
          <input className={styles.uploadArea} type="file" />
          <div className={styles.dragYourDocumentsPhotosOParent}>
            <div className={styles.dragYourDocuments}>
              Drag your documents, photos, or videos here to start uploading.
            </div>
            <input className={styles.button} type="file" />
            <div className={styles.folder}>
              <img
                className={styles.folderBlankIcon}
                alt=""
                src="../Assets/folderblank1.svg"
              />
              <div className={styles.papers}>
                <div className={styles.papersChild} />
                <div className={styles.papersItem} />
                <div className={styles.papersInner} />
                <img
                  className={styles.dragIcon}
                  alt=""
                  src="../Assets/drag2@2x.png"
                />
              </div>
              <div className={styles.folderChild} />
            </div>
            <div className={styles.or}>
              <div className={styles.orParent}>
                <div className={styles.or1}>Or</div>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../Assets/group-481541.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <form className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.subHeadingParent}>
              <div className={styles.subHeading}>POST</div>
              <Menu className={styles.categoriesParent}>
                <MenuButton
                  w="395px"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="blue"
                >
                  Categories
                </MenuButton>
                <MenuList>
                  <MenuItem value="Art">Art</MenuItem>
                  <MenuItem value="Politics">Politics</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Cryptocurrency">Cryptocurrency</MenuItem>
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Anime">Anime</MenuItem>
                  <MenuItem value="Movies">Movies</MenuItem>
                  <MenuItem value="Games">Games</MenuItem>
                </MenuList>
              </Menu>
            </div>
            <input
              className={styles.frameChild}
              type="text"
              placeholder="Heading"
              minLength={0}
            />
          </div>
          <textarea className={styles.frameItem} placeholder="Text" />
        </form>
        <button
          className={styles.postButton}
          autoFocus
          onClick={onPostButtonClick}
        >
          <div className={styles.text}>POST</div>
          <div className={styles.text}>POST</div>
        </button>
        <button
          className={styles.mintNftButton}
          autoFocus
          onClick={openPostCreatedPopup}
        >
          <div className={styles.text2}>MINT NFT</div>
        </button>
        <input
          className={styles.numberinput}
          type="text"
          placeholder="Enter Amount of $TIME"
          required
        />
        <div className={styles.property1defaultParent}>
          <div className={styles.property1default}>
            <div className={styles.property1defaultInner}>
              <div className={styles.timeParent}>
                <div className={styles.time}>$TIME</div>
                <div className={styles.numberinput1}>
                  <button className={styles.button1}>
                    <img
                      className={styles.icon1}
                      alt=""
                      src="../Assets/icon7.svg"
                    />
                  </button>
                  <div className={styles.input}>
                    <div className={styles.value}>1.00</div>
                  </div>
                  <button className={styles.button2}>
                    <img
                      className={styles.icon1}
                      alt=""
                      src="../Assets/icon8.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.property1variant2}>
            <div className={styles.property1defaultInner}>
              <div className={styles.postTimeParent}>
                <div className={styles.value}>POST TIME</div>
                <div className={styles.numberinput2}>
                  <button className={styles.button1}>
                    <img
                      className={styles.icon1}
                      alt=""
                      src="../Assets/icon7.svg"
                    />
                  </button>
                  <div className={styles.input}>
                    <div className={styles.value}>1.00</div>
                  </div>
                  <button className={styles.button1}>
                    <img
                      className={styles.icon1}
                      alt=""
                      src="../Assets/icon8.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featuredTopicsParent}>
          <div className={styles.value}>Featured Topics</div>
          <button className={styles.button5} onClick={onButton5Click}>
            <div className={styles.create} onClick={onCreateClick}>
              See All
            </div>
          </button>
        </div>
        <div className={styles.textArea}>Text Area</div>
        <img className={styles.icon5} alt="" />
        <PostContainer111111111111 carImageUrl="image-29127@2x.png" />
        <form className={styles.group481543default}>
          <img
            className={styles.image30Icon}
            alt=""
            src="../Assets/image-30@2x.png"
          />
          <input
            className={styles.textPlaceholder}
            type="text"
            placeholder="Comment Here"
            minLength={1}
          />
          <img
            className={styles.vectorIcon1}
            alt=""
            src="../Assets/vector109.svg"
          />
        </form>
        <form className={styles.group481543defaultWrapper}>
          <form className={styles.group481543default1}>
            <img
              className={styles.image30Icon}
              alt=""
              src="../Assets/image-30@2x.png"
            />
            <input
              className={styles.textPlaceholder}
              type="text"
              placeholder="Comment Here"
            />
            <img
              className={styles.vectorIcon1}
              alt=""
              src="../Assets/vector110.svg"
            />
          </form>
        </form>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div />
            </div>
          </div>
          <img
            className={styles.image32Icon}
            alt=""
            src="../Assets/image-32@2x.png"
          />
          <div
            className={styles.textFilled}
          >{`I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. `}</div>
          <div className={styles.groupInner} />
          <div className={styles.groupContainer}>
            <div className={styles.component18Wrapper}>
              <div className={styles.component18}>
                <div className={styles.property1default1}>
                  <div className={styles.component181}>
                    <div className={styles.frameParent1}>
                      <div className={styles.image41Parent}>
                        <img
                          className={styles.image41Icon}
                          alt=""
                          src="../Assets/image-41@2x.png"
                        />
                        <div className={styles.inputleftaddon}>
                          <p className={styles.frankSmith}>Frank Smith</p>
                          <p className={styles.franksays}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder2}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.component18Inner}>
                      <button className={styles.vectorGroup}>
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="../Assets/vector111.svg"
                        />
                        <button className={styles.vuesaxlinearheartSlash}>
                          <img
                            className={styles.vuesaxlinearheartSlashIcon}
                            alt=""
                            src="../Assets/vuesaxlinearheartslash80.svg"
                          />
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant21}>
                  <div className={styles.component182}>
                    <div className={styles.frameParent1}>
                      <div className={styles.image41Parent}>
                        <img
                          className={styles.image41Icon}
                          alt=""
                          src="../Assets/image-41@2x.png"
                        />
                        <div className={styles.inputleftaddon}>
                          <p className={styles.frankSmith}>Frank Smith</p>
                          <p className={styles.franksays}>@FrankSays</p>
                        </div>
                      </div>
                      <div className={styles.textPlaceholder2}>
                        No I dont think so
                      </div>
                    </div>
                    <div className={styles.component18Inner}>
                      <button className={styles.vectorGroup}>
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="../Assets/vector111.svg"
                        />
                        <button className={styles.vuesaxlinearheartSlash}>
                          <img
                            className={styles.vuesaxlinearheartSlashIcon}
                            alt=""
                            src="../Assets/vuesaxlinearheartslash80.svg"
                          />
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../Assets/rectangle-6949.svg"
            />
            <img
              className={styles.image29Icon}
              alt=""
              src="../Assets/image-314@2x.png"
            />
            <img
              className={styles.image30Icon2}
              alt=""
              src="../Assets/image-3044@2x.png"
            />
            <div className={styles.component18Container}>
              <div className={styles.component183}>
                <div className={styles.component182}>
                  <div className={styles.frameParent1}>
                    <div className={styles.image41Parent}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="../Assets/image-41@2x.png"
                      />
                      <div className={styles.inputleftaddon}>
                        <p className={styles.frankSmith}>Frank Smith</p>
                        <p className={styles.franksays}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder2}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.component18Inner}>
                    <button className={styles.vectorGroup}>
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="../Assets/vector111.svg"
                      />
                      <button className={styles.vuesaxlinearheartSlash}>
                        <img
                          className={styles.vuesaxlinearheartSlashIcon}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash80.svg"
                        />
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.component20Wrapper}>
                <div className={styles.component20}>
                  <div className={styles.groupParent1}>
                    <div className={styles.component20Container}>
                      <div className={styles.component201}>
                        <div className={styles.component182}>
                          <div className={styles.frameParent1}>
                            <div className={styles.image41Parent}>
                              <img
                                className={styles.image41Icon}
                                alt=""
                                src="../Assets/image-41@2x.png"
                              />
                              <div className={styles.inputleftaddon}>
                                <p className={styles.frankSmith}>Frank Smith</p>
                                <p className={styles.franksays}>@FrankSays</p>
                              </div>
                            </div>
                            <div className={styles.textPlaceholder2}>
                              No I dont think so
                            </div>
                          </div>
                          <div className={styles.component18Inner}>
                            <button className={styles.vectorGroup}>
                              <img
                                className={styles.vectorIcon6}
                                alt=""
                                src="../Assets/vector111.svg"
                              />
                              <img
                                className={styles.vuesaxlinearheartSlashIcon3}
                                alt=""
                                src="../Assets/vuesaxlinearheartslash83.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.vectorParent2}>
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="../Assets/vector6.svg"
                      />
                      <button className={styles.vuesaxlinearheartSlash}>
                        <img
                          className={styles.vuesaxlinearheartSlashIcon}
                          alt=""
                          src="../Assets/vuesaxlinearheartslash84.svg"
                        />
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.viewMore} onClick={onViewMoreClick}>
              --View More--
            </button>
            <div className={styles.vuesaxlineardislike}>
              <div className={styles.support}>
                <img
                  className={styles.dislikeIcon}
                  alt=""
                  src="../Assets/dislike4@2x.png"
                />
              </div>
            </div>
            <div className={styles.vuesaxlinearlike}>
              <div className={styles.support}>
                <img
                  className={styles.vuesaxlinearheartSlashIcon}
                  alt=""
                  src="../Assets/like2.svg"
                />
              </div>
              <div className={styles.div}>530</div>
              <div className={styles.div1}>250</div>
            </div>
            <div className={styles.vuesaxlinear24Support}>
              <div className={styles.support}>
                <div className={styles.support}>
                  <img
                    className={styles.vectorIcon8}
                    alt=""
                    src="../Assets/vector116.svg"
                  />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="../Assets/group@2x.png"
                  />
                  <img className={styles.vectorIcon9} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.politics}>POLITICS</div>
        </div>
        <div className={styles.property1defaultWrapper}>
          <div className={styles.property1default2}>
            <article className={styles.auctions} onClick={onAuctionsClick}>
              <div className={styles.auctions1}>
                <img
                  className={styles.image50Icon}
                  alt=""
                  src="../Assets/image-501@2x.png"
                />
                <div className={styles.profileParent}>
                  <div className={styles.profile}>
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-298@2x.png"
                    />
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-298@2x.png"
                    />
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-298@2x.png"
                    />
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-298@2x.png"
                    />
                  </div>
                  <div className={styles.profile1}>
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-299@2x.png"
                    />
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-299@2x.png"
                    />
                  </div>
                  <div className={styles.profile2}>
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-2910@2x.png"
                    />
                  </div>
                  <div className={styles.profile3}>
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-2911@2x.png"
                    />
                  </div>
                  <div className={styles.profile4}>
                    <img
                      className={styles.image31Icon}
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
                    className={styles.groupChild1}
                    alt=""
                    src="../Assets/blurText@2x.png"
                  />
                  <div className={styles.iconlyboldgraphParent}>
                    <img
                      className={styles.iconlyboldgraph}
                      alt=""
                      src="../Assets/iconlyboldgraph.svg"
                    />
                    <div className={styles.div2}>05:38:40</div>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <input
                    className={styles.rectangleInput}
                    type="checkbox"
                    autoFocus
                  />
                  <img
                    className={styles.vuesaxboldheartIcon}
                    alt=""
                    src="../Assets/vuesaxboldheart.svg"
                  />
                </div>
                <input className={styles.auctionsChild} type="checkbox" />
                <img
                  className={styles.vuesaxlinearheartSlashIcon5}
                  alt=""
                  src="../Assets/vuesaxlinearheartslash13.svg"
                />
              </div>
              <PostContainer111111111111
                carImageUrl="image-2917@2x.png"
                propTop="374px"
                propLeft="12px"
              />
            </article>
          </div>
        </div>
        <div className={styles.property1defaultContainer}>
          <div className={styles.property1default2}>
            <div className={styles.auctions2}>
              <div className={styles.auctions1}>
                <img
                  className={styles.image76Icon}
                  alt=""
                  src="../Assets/image-76@2x.png"
                />
                <div className={styles.profileParent}>
                  <div className={styles.profile}>
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-298@2x.png"
                    />
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-298@2x.png"
                    />
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-298@2x.png"
                    />
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-298@2x.png"
                    />
                  </div>
                  <div className={styles.profile1}>
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-299@2x.png"
                    />
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-299@2x.png"
                    />
                  </div>
                  <div className={styles.profile2}>
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-2910@2x.png"
                    />
                  </div>
                  <div className={styles.profile3}>
                    <img
                      className={styles.image31Icon}
                      alt=""
                      src="../Assets/image-2911@2x.png"
                    />
                  </div>
                  <div className={styles.profile4}>
                    <img
                      className={styles.image31Icon}
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
                    className={styles.groupChild1}
                    alt=""
                    src="../Assets/blurText20@2x.png"
                  />
                  <div className={styles.iconlyboldgraphParent}>
                    <img
                      className={styles.iconlyboldgraph}
                      alt=""
                      src="../Assets/iconlyboldgraph.svg"
                    />
                    <div className={styles.div2}>05:38:40</div>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <input
                    className={styles.groupChild3}
                    type="checkbox"
                    autoFocus
                  />
                  <img
                    className={styles.vuesaxboldheartIcon}
                    alt=""
                    src="../Assets/vuesaxboldheart.svg"
                  />
                </div>
                <input className={styles.auctionsItem} type="checkbox" />
                <img
                  className={styles.vuesaxlinearheartSlashIcon5}
                  alt=""
                  src="../Assets/vuesaxlinearheartslash13.svg"
                />
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.subHeadingParent}>
                  <div className={styles.icon}>
                    <div className={styles.abortionAGrowing}>
                      Abortion: A Growing Debate
                    </div>
                    <img
                      className={styles.image29Icon11}
                      alt=""
                      src="../Assets/image-2913@2x.png"
                    />
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.descriptionWrapper}>
                      <div className={styles.description}>
                        Abortion is a highly contested issue in many countries..
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.timeGainedParent}>
                  <div className={styles.timeGained}>Time Gained</div>
                  <div className={styles.div4}>1:28</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.createPostInner}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameDiv}>
                  <div />
                </div>
              </div>
              <img
                className={styles.image32Icon}
                alt=""
                src="../Assets/image-32@2x.png"
              />
              <div
                className={styles.textFilled1}
              >{`I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. `}</div>
              <div className={styles.groupChild4} />
              <div className={styles.groupParent2}>
                <div className={styles.component18Frame}>
                  <div className={styles.component18}>
                    <div className={styles.property1default1}>
                      <div className={styles.component181}>
                        <div className={styles.frameParent1}>
                          <div className={styles.image41Parent}>
                            <img
                              className={styles.image41Icon}
                              alt=""
                              src="../Assets/image-41@2x.png"
                            />
                            <div className={styles.inputleftaddon}>
                              <p className={styles.frankSmith}>Frank Smith</p>
                              <p className={styles.franksays}>@FrankSays</p>
                            </div>
                          </div>
                          <div className={styles.textPlaceholder2}>
                            No I dont think so
                          </div>
                        </div>
                        <div className={styles.component18Inner}>
                          <div className={styles.vectorParent3}>
                            <img
                              className={styles.vectorIcon3}
                              alt=""
                              src="../Assets/vector111.svg"
                            />
                            <img
                              className={styles.vuesaxlinearheartSlashIcon3}
                              alt=""
                              src="../Assets/vuesaxlinearheartslash87.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.property1variant21}>
                      <div className={styles.component182}>
                        <div className={styles.frameParent1}>
                          <div className={styles.image41Parent}>
                            <img
                              className={styles.image41Icon}
                              alt=""
                              src="../Assets/image-41@2x.png"
                            />
                            <div className={styles.inputleftaddon}>
                              <p className={styles.frankSmith}>Frank Smith</p>
                              <p className={styles.franksays}>@FrankSays</p>
                            </div>
                          </div>
                          <div className={styles.textPlaceholder2}>
                            No I dont think so
                          </div>
                        </div>
                        <div className={styles.component18Inner}>
                          <button className={styles.vectorGroup}>
                            <img
                              className={styles.vectorIcon3}
                              alt=""
                              src="../Assets/vector111.svg"
                            />
                            <button className={styles.vuesaxlinearheartSlash}>
                              <img
                                className={styles.vuesaxlinearheartSlashIcon}
                                alt=""
                                src="../Assets/vuesaxlinearheartslash80.svg"
                              />
                            </button>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="../Assets/rectangle-6949.svg"
                />
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="../Assets/image-314@2x.png"
                />
                <img
                  className={styles.image30Icon2}
                  alt=""
                  src="../Assets/image-3044@2x.png"
                />
                <div className={styles.component18Wrapper1}>
                  <div className={styles.component183}>
                    <div className={styles.component182}>
                      <div className={styles.frameParent1}>
                        <div className={styles.image41Parent}>
                          <img
                            className={styles.image41Icon}
                            alt=""
                            src="../Assets/image-41@2x.png"
                          />
                          <div className={styles.inputleftaddon}>
                            <p className={styles.frankSmith}>Frank Smith</p>
                            <p className={styles.franksays}>@FrankSays</p>
                          </div>
                        </div>
                        <div className={styles.textPlaceholder2}>
                          No I dont think so
                        </div>
                      </div>
                      <div className={styles.component18Inner}>
                        <button className={styles.vectorGroup}>
                          <img
                            className={styles.vectorIcon3}
                            alt=""
                            src="../Assets/vector111.svg"
                          />
                          <button className={styles.vuesaxlinearheartSlash}>
                            <img
                              className={styles.vuesaxlinearheartSlashIcon}
                              alt=""
                              src="../Assets/vuesaxlinearheartslash80.svg"
                            />
                          </button>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.component20Wrapper}>
                    <div className={styles.component20}>
                      <div className={styles.groupParent1}>
                        <div className={styles.component20Container}>
                          <div className={styles.component201}>
                            <div className={styles.component182}>
                              <div className={styles.frameParent1}>
                                <div className={styles.image41Parent}>
                                  <img
                                    className={styles.image41Icon}
                                    alt=""
                                    src="../Assets/image-41@2x.png"
                                  />
                                  <div className={styles.inputleftaddon}>
                                    <p className={styles.frankSmith}>
                                      Frank Smith
                                    </p>
                                    <p className={styles.franksays}>
                                      @FrankSays
                                    </p>
                                  </div>
                                </div>
                                <div className={styles.textPlaceholder2}>
                                  No I dont think so
                                </div>
                              </div>
                              <div className={styles.component18Inner}>
                                <button className={styles.vectorGroup}>
                                  <img
                                    className={styles.vectorIcon6}
                                    alt=""
                                    src="../Assets/vector111.svg"
                                  />
                                  <img
                                    className={
                                      styles.vuesaxlinearheartSlashIcon3
                                    }
                                    alt=""
                                    src="../Assets/vuesaxlinearheartslash83.svg"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className={styles.vectorParent2}>
                          <img
                            className={styles.vectorIcon3}
                            alt=""
                            src="../Assets/vector6.svg"
                          />
                          <button className={styles.vuesaxlinearheartSlash}>
                            <img
                              className={styles.vuesaxlinearheartSlashIcon}
                              alt=""
                              src="../Assets/vuesaxlinearheartslash84.svg"
                            />
                          </button>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className={styles.viewMore1} onClick={onViewMore1Click}>
                  --View More--
                </button>
                <div className={styles.vuesaxlineardislike2}>
                  <div className={styles.support}>
                    <img
                      className={styles.dislikeIcon}
                      alt=""
                      src="../Assets/dislike4@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.vuesaxlinearlike2}>
                  <img
                    className={styles.dislikeIcon}
                    alt=""
                    src="../Assets/vuesaxlinearlike@2x.png"
                  />
                  <div className={styles.div}>530</div>
                  <div className={styles.div1}>250</div>
                </div>
                <div className={styles.vuesaxlinear24Support2}>
                  <div className={styles.support}>
                    <div className={styles.support}>
                      <img
                        className={styles.vectorIcon8}
                        alt=""
                        src="../Assets/vector116.svg"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="../Assets/group@2x.png"
                      />
                      <img className={styles.vectorIcon9} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.politics1}>POLITICS</div>
            </div>
          </div>
        </div>
        <button className={styles.maxbutton}>
          <div className={styles.max}>MAX</div>
        </button>
        <button className={styles.button6}>
          <div className={styles.max}>50%</div>
        </button>
        <button className={styles.button7}>
          <div className={styles.max}>25%</div>
        </button>
        <img className={styles.vuesaxlineararrowRightIcon} alt="" />
        <div className={styles.vuesaxlineartetherUsdt}>
          <div className={styles.vuesaxlineartetherUsdt1}>
            <div className={styles.tetherUsdt}>
              <div className={styles.tetherUsdt}>
                <img
                  className={styles.groupChild6}
                  alt=""
                  src="../Assets/rectangle-6954@2x.png"
                />
                <button className={styles.rectangleButton} autoFocus />
                <div className={styles.div9}>300,000</div>
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
      </div>
      {isPostCreatedPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePostCreatedPopup}
        >
          <PostCreated onClose={closePostCreatedPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CreatePost;
