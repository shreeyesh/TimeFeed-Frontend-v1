import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./withdraw-success-popup.module.css";

type WithdrawSuccessPopupType = {
  onClose?: () => void;
};

const WithdrawSuccessPopup: NextPage<WithdrawSuccessPopupType> = ({
  onClose,
}) => {
  const router = useRouter();
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

  return (
    <div className={styles.withdrawSuccessPopup}>
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
      <div className={styles.frameParent}>
        <div className={styles.exploreAndFightForOpinionsParent}>
          <div className={styles.exploreAndFight}>
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
          >
            <div className={styles.explore} onClick={onExploreTextClick}>
              Explore
            </div>
          </button>
          <button className={styles.button1} autoFocus data-animate-on-scroll>
            <div className={styles.create} onClick={onCreateTextClick}>
              Post
            </div>
          </button>
        </div>
        <div className={styles.cta}>
          <img
            className={styles.playCircleFilledBlack24dpIcon}
            alt=""
            src="../Assets/play-circle-filled-black-24dp-1-1.svg"
          />
          <div className={styles.exploreMoreAbout}>
            Explore More about BattleChan
          </div>
        </div>
      </div>
      <div className={styles.fading} />
      <div className={styles.navbar}>
        <div className={styles.timefeedLowResolutionLogoBParent}>
          <img
            className={styles.timefeedLowResolutionLogoBIcon}
            alt=""
            src="../Assets/timefeedlowresolutionlogoblackonwhitebackground-32@2x.png"
          />
          <div className={styles.groupParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="../Assets/vector74.svg"
              />
              <div className={styles.searchPostsTopics}>
                Search posts, topics and accounts
              </div>
            </div>
            <input className={styles.groupChild} type="text" />
          </div>
          <img
            className={styles.darkModeIcon}
            alt=""
            src="../Assets/dark-mode2.svg"
          />
          <div className={styles.menus}>
            <button className={styles.earn} onClick={onExploreClick}>
              Explore
            </button>
            <button className={styles.earn} onClick={onEarnClick}>
              Earn
            </button>
            <button className={styles.earn}>Trade</button>
            <div className={styles.exploreMoreAbout}>Post</div>
          </div>
          <div className={styles.buttonGroup}>
            <img
              className={styles.accountBalanceWalletBlack2Icon}
              alt=""
              src="../Assets/account-circle-black-24dp-2-15.svg"
            />
            <img
              className={styles.accountBalanceWalletBlack2Icon}
              alt=""
              src="../Assets/account-balance-wallet-black-24dp-5-15.svg"
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
  );
};

export default WithdrawSuccessPopup;
