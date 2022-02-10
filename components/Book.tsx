import React from "react";
import styles from "../styles/Book.module.scss";
import Link from "next/dist/client/link";

const Book = (props) => {
  return (
    <Link href={props.destination}>
      <div className={styles.container}>
        <img src={props.image} />
        <div className={styles.description}>
          <h4>
            <b>{props.title}</b>
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
