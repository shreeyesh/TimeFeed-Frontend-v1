import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./group-component1.module.css";

const GroupComponent1: NextPage = () => {
  const onExploreTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onStatsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cTA7']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.navigationBarWrapper}>
        <div className={styles.navigationBar}>
          <div className={styles.content}>
            <div className={styles.logoNav}>
              <div className={styles.logo}>
                <div className={styles.logo1}>
                  <img
                    className={styles.image15Icon}
                    alt=""
                    src="../Assets/image-15@2x.png"
                  />
                </div>
                <img
                  className={styles.nfteaIcon}
                  alt=""
                  src="../Assets/nftea.svg"
                />
              </div>
              <input
                className={styles.field}
                type="text"
                placeholder="Search posts, topics and accounts"
              />
            </div>
            <div className={styles.menus}>
              <div className={styles.explore} onClick={onExploreTextClick}>
                Explore
              </div>
              <div className={styles.explore} onClick={onStatsTextClick}>
                Earn
              </div>
              <div className={styles.resources}>Trade</div>
              <div className={styles.resources}>Post</div>
            </div>
            <div className={styles.icon}>
              <img
                className={styles.accountBalanceWalletBlack2Icon}
                alt=""
                src="../Assets/account-circle-black-24dp-2-11.svg"
              />
              <img
                className={styles.accountBalanceWalletBlack2Icon}
                alt=""
                src="../Assets/account-balance-wallet-black-24dp-5-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
