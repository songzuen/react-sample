import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getSortedPostsData } from "@/lib/post";
import { GetStaticProps } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({allPostsData} : {
    allPostsData : {
      id : string,
      date : string,
      title : string
    }[]
  }) {
  return (
    <div className={styles.containter}>
      <Head>
        <title>Song Jooeun</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.headingMd}>
        <p>[Song Jooeun Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({id, title, date})=>
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={styles.lightText}>
                {date}
              </small>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps:GetStaticProps = async() => {
  const allPostsData = getSortedPostsData()
  return {
    props : {
      allPostsData
    }
  }
}