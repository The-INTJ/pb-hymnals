import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/dist/client/link";

const Header = (props) => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <h1>The PBH</h1>
      </Link>
      <div className={styles.headerOptions}>
        <p className={styles.headerLink} onClick={props.breweries}>
          About
        </p>
        <p className={styles.headerLink} onClick={props.account}>
          Account
        </p>
      </div>
    </div>
  );
};

export default Header;
