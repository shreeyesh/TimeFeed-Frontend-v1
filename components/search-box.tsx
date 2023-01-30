import type { NextPage } from "next";
import styles from "./search-box.module.css";

type SearchBoxType = {
  searchbox?: string;
};

const SearchBox: NextPage<SearchBoxType> = ({ searchbox = "Search Here" }) => {
  return (
    <input className={styles.frameChild} type="text" placeholder={searchbox} />
  );
};

export default SearchBox;
