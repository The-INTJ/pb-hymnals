import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/dist/client/link";
import OptionsAccordion from "./OptionsAccordion";

const Header = (props) => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <div className={styles.h1ToolTip}>
          <span>Old Baptist Hymnals</span>
          <h1 id={styles.hoverDescription}>The OBH</h1>
        </div>
      </Link>
      <OptionsAccordion
        options={[
          ["/about", "About"],
          ["/account", "Account"],
        ]}
      />
    </div>
  );
};

export default Header;
