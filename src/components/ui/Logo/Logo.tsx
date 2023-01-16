/* eslint-disable react/require-default-props */
import Link from 'next/link';
import { FC } from 'react';
import { useLocale } from '~/hooks/useLocale';
import styles from './Logo.module.css';
import LogoSvg from './LogoSvg';

const Logo: FC = () => {
  const { t } = useLocale();

  return (
    <Link href="/">
      <div className={`${styles.logo}`} id="logo">
        <LogoSvg />
        <span>{t.LOGO}</span>
      </div>
    </Link>
  );
};

export default Logo;
