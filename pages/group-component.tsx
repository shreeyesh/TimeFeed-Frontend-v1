import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import PostContainerExt from "../components/post-container-ext";
import styles from "./group-component.module.css";

const GroupComponent: NextPage = () => {
  const router = useRouter();

  const onCreateTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.desktop1Parent}>
      <div className={styles.desktop1}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.featuredTopicsWrapper}>
              <div className={styles.featuredTopics}>Featured Topics</div>
            </div>
            <div className={styles.button}>
              <div className={styles.create} onClick={onCreateTextClick}>
                See All
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.featuredTopicsWrapper}>
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
                    <button className={styles.groupChild} />
                    <div className={styles.iconlyboldgraphParent}>
                      <img
                        className={styles.iconlyboldgraph}
                        alt=""
                        src="../Assets/iconlyboldgraph13.svg"
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
                      src="../Assets/vuesaxboldheart9.svg"
                    />
                  </div>
                  <input className={styles.auctionsChild} type="checkbox" />
                  <img
                    className={styles.vuesaxlinearheartSlashIcon}
                    alt=""
                    src="../Assets/vuesaxlinearheartslash12.svg"
                  />
                </div>
                <PostContainerExt />
              </div>
            </div>
            <div className={styles.featuredTopicsWrapper}>
              <div className={styles.auctions}>
                <div className={styles.auctions1}>
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
                    <div className={styles.groupInner} />
                    <div className={styles.iconlyboldgraphParent}>
                      <img
                        className={styles.iconlyboldgraph}
                        alt=""
                        src="../Assets/iconlyboldgraph13.svg"
                      />
                      <div className={styles.div}>05:38:40</div>
                    </div>
                  </div>
                  <img
                    className={styles.auctionsItem}
                    alt=""
                    src="../Assets/group-342906.svg"
                  />
                </div>
                <PostContainerExt />
                <div className={styles.auctionsFrame}>
                  <div className={styles.auctions}>
                    <div className={styles.auctions1}>
                      <img
                        className={styles.image56Icon}
                        alt=""
                        src="../Assets/image-565@2x.png"
                      />
                      <img
                        className={styles.image76Icon}
                        alt=""
                        src="../Assets/image-76@2x.png"
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
                        <div className={styles.groupInner} />
                        <div className={styles.iconlyboldgraphParent}>
                          <img
                            className={styles.iconlyboldgraph}
                            alt=""
                            src="../Assets/iconlyboldgraph13.svg"
                          />
                          <div className={styles.div}>05:38:40</div>
                        </div>
                      </div>
                      <img className={styles.auctionsInner} alt="" />
                      <div className={styles.rectangleParent1}>
                        <input
                          className={styles.groupItem}
                          type="checkbox"
                          autoFocus
                        />
                        <img
                          className={styles.vuesaxboldheartIcon}
                          alt=""
                          src="../Assets/vuesaxboldheart10.svg"
                        />
                      </div>
                      <input
                        className={styles.auctionsChild1}
                        type="checkbox"
                      />
                      <img
                        className={styles.vuesaxlinearheartSlashIcon1}
                        alt=""
                        src="../Assets/vuesaxlinearheartslash13.svg"
                      />
                    </div>
                    <PostContainerExt />
                    <div className={styles.timeGained}>Time Gained</div>
                    <div className={styles.div3}>1:28</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.featuredTopicsWrapper}>
              <div className={styles.auctions}>
                <div className={styles.auctions1}>
                  <img
                    className={styles.image73Icon}
                    alt=""
                    src="../Assets/image-731@2x.png"
                  />
                  <img
                    className={styles.image46Icon}
                    alt=""
                    src="../Assets/image-462@2x.png"
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
                    <div className={styles.groupInner} />
                    <div className={styles.iconlyboldgraphParent}>
                      <img
                        className={styles.iconlyboldgraph}
                        alt=""
                        src="../Assets/iconlyboldgraph.svg"
                      />
                      <div className={styles.div}>05:38:40</div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent3}>
                    <input
                      className={styles.groupItem}
                      type="checkbox"
                      autoFocus
                    />
                    <img
                      className={styles.vuesaxboldheartIcon}
                      alt=""
                      src="../Assets/vuesaxboldheart10.svg"
                    />
                  </div>
                  <input className={styles.auctionsChild2} type="checkbox" />
                  <img
                    className={styles.vuesaxlinearheartSlashIcon2}
                    alt=""
                    src="../Assets/vuesaxlinearheartslash13.svg"
                  />
                </div>
                <PostContainerExt />
              </div>
            </div>
            <Textarea
              variant="filled"
              w="297px"
              placeholder="Text Area"
              backgroundColor="#edf2f7"
            />
            <Textarea
              variant="filled"
              w="297px"
              placeholder="Text Area"
              backgroundColor="#edf2f7"
            />
            <Textarea
              variant="filled"
              w="297px"
              placeholder="Text Area"
              backgroundColor="#edf2f7"
            />
            <TextField
              sx={{ width: 220 }}
              color="primary"
              variant="filled"
              defaultValue="Text Area"
              multiline
              rows={3}
              label="Label"
              placeholder="Textarea placeholder"
              margin="none"
            />
          </div>
          <img className={styles.vuesaxlineararrowLeftIcon} alt="" />
        </div>
        <img
          className={styles.vuesaxlineararrowRightIcon}
          alt=""
          src="../Assets/vuesaxlineararrowright1.svg"
        />
        <div className={styles.desktop1Child} />
        <div className={styles.desktop1Item} />
        <div className={styles.desktop1Inner} />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../Assets/rectangle-3325.svg"
        />
        <img
          className={styles.desktop1Child1}
          alt=""
          src="../Assets/rectangle-3333.svg"
        />
        <img
          className={styles.desktop1Child2}
          alt=""
          src="../Assets/rectangle-3336.svg"
        />
        <img
          className={styles.desktop1Child3}
          alt=""
          src="../Assets/rectangle-3331.svg"
        />
        <img
          className={styles.desktop1Child1}
          alt=""
          src="../Assets/rectangle-3334.svg"
        />
        <img
          className={styles.desktop1Child2}
          alt=""
          src="../Assets/rectangle-3337.svg"
        />
        <div className={styles.formationOfUse}>Formation of USE</div>
        <div className={styles.formationOfUse1}>Formation of USE</div>
        <div className={styles.formationOfUse2}>Formation of USE</div>
        <div
          className={styles.textFilled}
        >{`I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. `}</div>
        <div
          className={styles.textFilled1}
        >{`I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. `}</div>
        <div className={styles.colorFill} />
        <div className={styles.colorFill1} />
        <div className={styles.colorFill2} />
        <div className={styles.colorFill3} />
        <div className={styles.profile20}>
          <img
            className={styles.image29Icon20}
            alt=""
            src="../Assets/image-29172@2x.png"
          />
          <img
            className={styles.image30Icon}
            alt=""
            src="../Assets/image-3034@2x.png"
          />
        </div>
        <div className={styles.profile21}>
          <img
            className={styles.image29Icon20}
            alt=""
            src="../Assets/image-29172@2x.png"
          />
          <img
            className={styles.image30Icon}
            alt=""
            src="../Assets/image-3035@2x.png"
          />
        </div>
        <div className={styles.profile22}>
          <img
            className={styles.image29Icon20}
            alt=""
            src="../Assets/image-29172@2x.png"
          />
          <img
            className={styles.image30Icon}
            alt=""
            src="../Assets/image-3036@2x.png"
          />
        </div>
        <div className={styles.textPlaceholder}>Comment Here</div>
        <div className={styles.textPlaceholder1}>Comment Here</div>
        <div className={styles.textPlaceholder2}>Comment Here</div>
        <img className={styles.icon} alt="" src="../Assets/icon.svg" />
        <img className={styles.icon1} alt="" src="../Assets/icon1.svg" />
        <img className={styles.icon2} alt="" src="../Assets/icon2.svg" />
        <img
          className={styles.image33Icon}
          alt=""
          src="../Assets/image-33@2x.png"
        />
        <img
          className={styles.image37Icon}
          alt=""
          src="../Assets/image-371@2x.png"
        />
        <img
          className={styles.image30Icon3}
          alt=""
          src="../Assets/image-3037@2x.png"
        />
        <img
          className={styles.image34Icon}
          alt=""
          src="../Assets/image-34@2x.png"
        />
        <img
          className={styles.image38Icon}
          alt=""
          src="../Assets/image-38@2x.png"
        />
        <img
          className={styles.image31Icon}
          alt=""
          src="../Assets/image-314@2x.png"
        />
        <img
          className={styles.image35Icon}
          alt=""
          src="../Assets/image-35@2x.png"
        />
        <img
          className={styles.image39Icon}
          alt=""
          src="../Assets/image-391@2x.png"
        />
        <img className={styles.icon3} alt="" />
        <img className={styles.icon4} alt="" />
        <img className={styles.icon5} alt="" />
        <div className={styles.frameParent1}>
          <div className={styles.image32Wrapper}>
            <img
              className={styles.image32Icon}
              alt=""
              src="../Assets/image-326@2x.png"
            />
          </div>
          <div
            className={styles.textFilled2}
          >{`I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. `}</div>
        </div>
        <img
          className={styles.image36Icon}
          alt=""
          src="../Assets/image-361@2x.png"
        />
        <img
          className={styles.image40Icon}
          alt=""
          src="../Assets/image-40@2x.png"
        />
        <img
          className={styles.verified1Icon}
          alt=""
          src="../Assets/verified-1@2x.png"
        />
        <img
          className={styles.verified2Icon4}
          alt=""
          src="../Assets/verified-247@2x.png"
        />
        <img
          className={styles.verified3Icon}
          alt=""
          src="../Assets/verified-3@2x.png"
        />
        <div className={styles.desktop1Child6} />
        <div className={styles.inputleftaddon}>
          <p className={styles.charlesWilliam}>Charles William</p>
          <p className={styles.charlesw}>@charlesW</p>
        </div>
        <div className={styles.inputleftaddon1}>
          <p className={styles.charlesWilliam}>Charles William</p>
          <p className={styles.charlesw}>@charlesW</p>
        </div>
        <div className={styles.inputleftaddon2}>
          <p className={styles.charlesWilliam}>Frank Smith</p>
          <p className={styles.charlesw}>@FrankSays</p>
        </div>
        <div className={styles.inputleftaddon3}>
          <p className={styles.charlesWilliam}>Frank Smith</p>
          <p className={styles.charlesw}>@FrankSays</p>
        </div>
        <div className={styles.inputleftaddon4}>
          <p className={styles.charlesWilliam}>Frank Smith</p>
          <p className={styles.charlesw}>@FrankSays</p>
        </div>
        <div className={styles.inputleftaddon5}>
          <p className={styles.charlesWilliam}>Erica Bell</p>
          <p className={styles.charlesw}>@ericaFights</p>
        </div>
        <div className={styles.inputleftaddon6}>
          <p className={styles.charlesWilliam}>Erica Bell</p>
          <p className={styles.charlesw}>@ericaFights</p>
        </div>
        <div className={styles.inputleftaddon7}>
          <p className={styles.charlesWilliam}>Erica Bell</p>
          <p className={styles.charlesw}>@ericaFights</p>
        </div>
        <div className={styles.minWidth} />
        <div className={styles.minWidth1} />
        <div className={styles.minWidth2} />
        <div className={styles.minWidth3} />
        <div className={styles.minWidth4} />
        <div className={styles.minWidth5} />
        <div className={styles.minWidth6} />
        <div className={styles.minWidth7} />
        <div className={styles.minWidth8} />
        <div className={styles.textPlaceholder3}>
          <p
            className={styles.charlesWilliam}
          >{`Germany is just trying to do what they did in early world `}</p>
          <p className={styles.charlesw}>wars.</p>
        </div>
        <div className={styles.textPlaceholder4}>
          <p
            className={styles.charlesWilliam}
          >{`Germany is just trying to do what they did in early world `}</p>
          <p className={styles.charlesw}>wars.</p>
        </div>
        <div className={styles.textPlaceholder5}>No I dont think so</div>
        <div className={styles.textPlaceholder6}>No I dont think so</div>
        <div className={styles.textPlaceholder7}>No I dont think so</div>
        <div className={styles.textPlaceholder8}>Not a bad idea imo.</div>
        <div className={styles.textPlaceholder9}>Not a bad idea imo.</div>
        <div className={styles.textPlaceholder10}>Not a bad idea imo.</div>
        <div className={styles.minWidth9} />
        <div className={styles.minWidth10} />
        <div className={styles.minWidth11} />
        <img
          className={styles.vectorIcon}
          alt=""
          src="../Assets/vector25.svg"
        />
        <img
          className={styles.vectorIcon1}
          alt=""
          src="../Assets/vector25.svg"
        />
        <img
          className={styles.vectorIcon2}
          alt=""
          src="../Assets/vector27.svg"
        />
        <img
          className={styles.vectorIcon3}
          alt=""
          src="../Assets/vector25.svg"
        />
        <img
          className={styles.vectorIcon4}
          alt=""
          src="../Assets/vector25.svg"
        />
        <img
          className={styles.vectorIcon5}
          alt=""
          src="../Assets/vector30.svg"
        />
        <img
          className={styles.vectorIcon6}
          alt=""
          src="../Assets/vector30.svg"
        />
        <img
          className={styles.vectorIcon7}
          alt=""
          src="../Assets/vector32.svg"
        />
        <div className={styles.frameParent2}>
          <div className={styles.image29Parent}>
            <img
              className={styles.image29Icon23}
              alt=""
              src="../Assets/image-29175@2x.png"
            />
            <div className={styles.inputleftaddon8}>
              <p className={styles.charlesWilliam2}>Charles William</p>
              <p className={styles.charlesw}>@charlesW</p>
            </div>
            <div className={styles.textPlaceholder11}>
              <p
                className={styles.charlesWilliam}
              >{`Germany is just trying to do what they did in early world `}</p>
              <p className={styles.charlesw}>wars.</p>
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon8}
              alt=""
              src="../Assets/vector33.svg"
            />
            <img
              className={styles.vuesaxlineararrowLeftIcon}
              alt=""
              src="../Assets/vuesaxlinearheartslash15.svg"
            />
          </div>
        </div>
        <img
          className={styles.vuesaxlinearheartSlashIcon4}
          alt=""
          src="../Assets/vuesaxlinearheartslash16.svg"
        />
        <img
          className={styles.vuesaxlinearheartSlashIcon5}
          alt=""
          src="../Assets/vuesaxlinearheartslash16.svg"
        />
        <img
          className={styles.vuesaxlinearheartSlashIcon6}
          alt=""
          src="../Assets/vuesaxlinearheartslash18.svg"
        />
        <img
          className={styles.vuesaxlinearheartSlashIcon7}
          alt=""
          src="../Assets/vuesaxlinearheartslash19.svg"
        />
        <img
          className={styles.vuesaxlinearheartSlashIcon8}
          alt=""
          src="../Assets/vuesaxlinearheartslash19.svg"
        />
        <img
          className={styles.vuesaxlinearheartSlashIcon9}
          alt=""
          src="../Assets/vuesaxlinearheartslash21.svg"
        />
        <img
          className={styles.vuesaxlinearheartSlashIcon10}
          alt=""
          src="../Assets/vuesaxlinearheartslash21.svg"
        />
        <img
          className={styles.vuesaxlinearheartSlashIcon11}
          alt=""
          src="../Assets/vuesaxlinearheartslash23.svg"
        />
        <div className={styles.viewMore}>--View More--</div>
      </div>
    </div>
  );
};

export default GroupComponent;
