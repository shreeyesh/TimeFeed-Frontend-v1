import type { NextPage } from "next";
import styles from "./balance-box.module.css";

type BalanceBoxType = {
  maxLength?: number;
};

const BalanceBox: NextPage<BalanceBoxType> = ({ maxLength }) => {
  return (
    <img
      className={styles.groupChild}
      alt=""
      src="../Assets/rectangle-6954@2x.png"
    />
  );
};

export default BalanceBox;
