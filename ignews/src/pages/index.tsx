import Head from 'next/head';

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <h1 className={styles.title}>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
    </h1>
  )
}
