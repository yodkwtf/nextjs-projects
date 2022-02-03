import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>TeamList | Home</title>
        <meta name="keywords" content="yodkwtf" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          consequatur deleniti quasi incidunt, dolor aperiam aspernatur iste ad
          impedit inventore?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          consequatur deleniti quasi incidunt, dolor aperiam aspernatur iste ad
          impedit inventore?
        </p>
        <Link href="/members">
          <a className={styles.btn}>All Team Members</a>
        </Link>
      </div>
    </>
  );
}
