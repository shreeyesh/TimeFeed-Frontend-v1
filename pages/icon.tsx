import type { NextPage } from "next";
import styles from "./icon.module.css";

const Icon: NextPage = () => {
  return (
    <div className={styles.icon}>
      <img
        className={styles.accountBalanceWalletBlack2Icon}
        alt=""
        src="../Assets/account-circle-black-24dp-2-111.svg"
      />
      <img
        className={styles.accountBalanceWalletBlack2Icon}
        alt=""
        src="../Assets/account-balance-wallet-black-24dp-5-111.svg"
      />
    </div>
  );
};

export default Icon;
