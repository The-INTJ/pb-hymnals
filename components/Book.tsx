import React from "react";
import styles from "../styles/Book.module.scss";
import Link from "next/dist/client/link";
import Image from "next/image";

const Book = (props) => {
  return (
    <Link href={props.destination}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={props.image} alt={props.altText} />
        </div>
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
