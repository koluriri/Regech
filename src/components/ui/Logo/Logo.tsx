/* eslint-disable react/require-default-props */
import Link from 'next/link';
import { FC } from 'react';
import styles from './Logo.module.css';
import LogoSvg from './LogoSvg';

const Logo: FC = () => (
  <Link href="/">
    <div className={`${styles.logo}`}>
      <LogoSvg />
      <span>正規表現ガチャ</span>
    </div>
  </Link>
);

export default Logo;
