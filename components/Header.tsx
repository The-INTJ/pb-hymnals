import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/dist/client/link";
import OptionsAccordion from "./OptionsAccordion";

const Header = (props) => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <h1>The PBH</h1>
      </Link>
      <OptionsAccordion options={[["/about", "About"], ["/account", "Account"]]} />
    </div>
  );
};

export default Header;
