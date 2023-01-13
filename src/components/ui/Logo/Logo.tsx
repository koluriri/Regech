/* eslint-disable react/require-default-props */
import { FC } from 'react';
import styles from './Logo.module.css';
import LogoSvg from './LogoSvg';

const Logo: FC = () => (
  <div className={`${styles.logo}`}>
    <LogoSvg />
    <span>正規表現ガチャ</span>
  </div>
);

export default Logo;
