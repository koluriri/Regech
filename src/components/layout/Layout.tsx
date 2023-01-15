import Head from 'next/head';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import Logo from '../ui/Logo/Logo';
import styles from './Layout.module.css';

export type PropType = {
  children: ReactNode;
};

const Layout: FC<PropType> = ({ children }) => (
  <>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9a0000" />
      <meta name="msapplication-TileColor" content="#dae1ee" />
      <meta name="theme-color" content="#dae1ee" />
    </Head>

    <Logo />

    <div>{children}</div>

    <footer className={styles.footer}>
      <span>
        © 2023{' '}
        <a href="//twitter.com/koluriri" target="_blank">
          @koluriri
        </a>
        .
      </span>
      <span>
        <Link href="/privacy">プライバシーポリシー</Link>
      </span>
    </footer>
  </>
);

export default Layout;
