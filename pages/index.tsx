import Head from "next/head"
import Header from "../components/Header";
import Link from "next/dist/client/link";
import Book from "../components/Book";

export default function Home() {
    return (
      <div className="container">
        <Head>
          <title>PBH</title>
          <meta name="description" content="Primitive Baptist Hymnals" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main-div">
          <Book
            destination="/paypal/soz"
            image="../public/soz.jpg"
            title="Songs of Zion"
            description="The newest songs written by people you know"
          />
          <Book
            destination="/paypal/osh"
            image="../public/pbh.png"
            title="Centennial"
            description="The old and gold"
          />
        </div>
      </div>
    );
}
