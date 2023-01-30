import type { NextPage } from "next";
import styles from "./group-component3.module.css";

const GroupComponent3: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupWrapper}>
        <div className={styles.shareThisArticleParent}>
          <div className={styles.shareThisArticle}>Share this article</div>
          <div className={styles.ifYouLike}>
            If you like this article share it with your friends.
          </div>
          <div className={styles.groupParent}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupItem}
                alt=""
                src="../Assets/ellipse-2.svg"
              />
              <img
                className={styles.groupInner}
                alt=""
                src="../Assets/polygon-1.svg"
              />
              <div className={styles.facebook}>Facebook</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src="../Assets/vector16.svg"
              />
            </div>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.groupItem}
                alt=""
                src="../Assets/ellipse-4.svg"
              />
              <img
                className={styles.polygonIcon}
                alt=""
                src="../Assets/polygon-11.svg"
              />
              <div className={styles.whatsapp}>WhatsApp</div>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="../Assets/vector17.svg"
              />
            </div>
            <div className={styles.ellipseContainer}>
              <img
                className={styles.groupItem}
                alt=""
                src="../Assets/ellipse-41.svg"
              />
              <img
                className={styles.groupChild2}
                alt=""
                src="../Assets/polygon-12.svg"
              />
              <div className={styles.reddit}>Reddit</div>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="../Assets/vector18.svg"
              />
            </div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupItem}
                alt=""
                src="../Assets/ellipse-1.svg"
              />
              <img
                className={styles.groupChild4}
                alt=""
                src="../Assets/polygon-13.svg"
              />
              <div className={styles.twitter}>Twitter</div>
              <img
                className={styles.vectorIcon3}
                alt=""
                src="../Assets/vector19.svg"
              />
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.httpsexamplecomarticleso}>
                https://example.com/article/social-share-modal
              </div>
              <img
                className={styles.groupIcon}
                alt=""
                src="../Assets/group-9.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupWrapper}>
        <div className={styles.groupFrame}>
          <div className={styles.shareThisArticleParent}>
            <div className={styles.shareThisArticle}>Share this article</div>
            <div className={styles.ifYouLike}>
              If you like this article share it with your friends.
            </div>
            <div className={styles.groupParent}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../Assets/ellipse-2.svg"
                />
                <img
                  className={styles.groupInner}
                  alt=""
                  src="../Assets/polygon-1.svg"
                />
                <div className={styles.facebook}>Facebook</div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../Assets/vector16.svg"
                />
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../Assets/ellipse-4.svg"
                />
                <img
                  className={styles.polygonIcon}
                  alt=""
                  src="../Assets/polygon-11.svg"
                />
                <div className={styles.whatsapp}>WhatsApp</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../Assets/vector17.svg"
                />
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../Assets/ellipse-41.svg"
                />
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="../Assets/polygon-12.svg"
                />
                <div className={styles.reddit}>Reddit</div>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../Assets/vector18.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="../Assets/ellipse-1.svg"
                />
                <img
                  className={styles.groupChild4}
                  alt=""
                  src="../Assets/polygon-13.svg"
                />
                <div className={styles.twitter}>Twitter</div>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="../Assets/vector19.svg"
                />
              </div>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.httpsexamplecomarticleso}>
                  https://example.com/article/social-share-modal
                </div>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="../Assets/group-9.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
