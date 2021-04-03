import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adsly</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.companyName}>Adsly</span>
        </h1>

        <p className={styles.description}>
          Contact with as{' '}
          <a href="mailto:office@adsly.media" className={styles.code}>
            office@adsly.media
          </a>
        </p>
      </main>
    </div>
  );
}
