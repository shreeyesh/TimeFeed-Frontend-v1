import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./reply.module.css";

type ReplyType = {
  replyPfp?: string;
  replyText?: string;

  /** Style props */
  group481543DefaultAlignContent?: Property.AlignContent;
  group481543DefaultAlignItems?: Property.AlignItems;
  textPlaceholderAlignSelf?: Property.AlignSelf;
  textPlaceholderAlignItems?: Property.AlignItems;
};

const Reply: NextPage<ReplyType> = ({
  replyPfp,
  replyText = "Comment Here",
  group481543DefaultAlignContent,
  group481543DefaultAlignItems,
  textPlaceholderAlignSelf,
  textPlaceholderAlignItems,
}) => {
  const group481543DefaultStyle: CSS.Properties = useMemo(() => {
    return {
      alignContent: group481543DefaultAlignContent,
      alignItems: group481543DefaultAlignItems,
    };
  }, [group481543DefaultAlignContent, group481543DefaultAlignItems]);

  const textPlaceholderStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: textPlaceholderAlignSelf,
      alignItems: textPlaceholderAlignItems,
    };
  }, [textPlaceholderAlignSelf, textPlaceholderAlignItems]);

  return (
    <form
      className={styles.group481543default}
      method="post"
      style={group481543DefaultStyle}
    >
      <img className={styles.image30Icon} alt="" src={replyPfp} />
      <textarea
        className={styles.textPlaceholder}
        placeholder={replyText}
        style={textPlaceholderStyle}
      />
      <img className={styles.vectorIcon} alt="" src="../Assets/vector72.svg" />
    </form>
  );
};

export default Reply;
