import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PBH</title>
        <meta name="description" content="Primitive Baptist Hymnals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <Link href="/paypal/soz">
        <p>Go to Paypal</p>
      </Link>
    </div>
  );
}
