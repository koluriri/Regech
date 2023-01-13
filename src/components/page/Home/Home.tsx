import { FC } from 'react';
import Head from 'next/head';
import Projects from 'components/module/project/Projects';
import styles from './Home.module.css';

const Home: FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Hello World</title>
    </Head>

    <main className={styles.main}>
      <h1>
        Hello World!
        <br />
        こんにちは世界！
      </h1>
      <Projects />
    </main>
  </div>
);

export default Home;
