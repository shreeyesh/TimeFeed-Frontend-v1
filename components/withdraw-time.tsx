import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./withdraw-time.module.css";

type WithdrawTimeType = {
  line?: string;
  line1?: string;
  detailsPlaceholder?: string;
  line2?: string;

  /** Style props */
  marketplaceInNumberColor?: Property.Color;
  joinOurMailingListToStayIColor?: Property.Color;
  buttonBorder?: Property.Border;
  buttonBackgroundColor?: Property.BackgroundColor;
  createColor?: Property.Color;

  /** Action props */
  openWithdrawSuccessPopup?: () => void;
};

const WithdrawTime: NextPage<WithdrawTimeType> = ({
  line,
  line1,
  detailsPlaceholder,
  line2,
  marketplaceInNumberColor,
  joinOurMailingListToStayIColor,
  buttonBorder,
  buttonBackgroundColor,
  createColor,
  openWithdrawSuccessPopup,
}) => {
  const marketplaceInNumberStyle: CSS.Properties = useMemo(() => {
    return {
      color: marketplaceInNumberColor,
    };
  }, [marketplaceInNumberColor]);

  const joinOurMailingStyle: CSS.Properties = useMemo(() => {
    return {
      color: joinOurMailingListToStayIColor,
    };
  }, [joinOurMailingListToStayIColor]);

  const button2Style: CSS.Properties = useMemo(() => {
    return {
      border: buttonBorder,
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonBorder, buttonBackgroundColor]);

  const create1Style: CSS.Properties = useMemo(() => {
    return {
      color: createColor,
    };
  }, [createColor]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.marketplaceInNumberWrapper}>
          <b
            className={styles.marketplaceInNumber}
            style={marketplaceInNumberStyle}
          >
            Withdraw $Time
          </b>
        </div>
        <div className={styles.joinOurMailing} style={joinOurMailingStyle}>
          Enter the amount of $TIME you want to withdraw, withdrawal of 1 $TIME
          reduces one minute from your post.
        </div>
        <button className={styles.button} autoFocus style={button2Style}>
          <button
            className={styles.create}
            onClick={openWithdrawSuccessPopup}
            style={create1Style}
          >
            Withdraw
          </button>
        </button>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.parent}>
            <div className={styles.div}>
              <img className={styles.lineIcon} alt="" src={line} />
              <textarea
                className={styles.details}
                placeholder="704"
                defaultValue="Likes"
              />
            </div>
            <div className={styles.div}>
              <img className={styles.lineIcon} alt="" src={line1} />
              <textarea
                className={styles.details}
                placeholder={detailsPlaceholder}
                defaultValue="$Time Left"
              />
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div}>
              <img className={styles.lineIcon} alt="" src={line2} />
              <textarea
                className={styles.details}
                placeholder="301"
                defaultValue="Dislikes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawTime;
