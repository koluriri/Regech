/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Avatar from '../../../ui/Avatar/Avatar';
import useAgoText from '../../../../hooks/useAgoText';
import { IconPlay, IconTime } from '../../../Icon';
import styles from './GachaDetail.module.css';

export type PropType = {
  src: string;
  name: string;
  playCount: number;
  created: string;
  center?: boolean;
};

const GachaDetail: FC<PropType> = ({
  src,
  name,
  playCount,
  created,
  center = false,
}) => {
  const agoText = useAgoText();

  return (
    <div className={clsx([styles.gachadetail, center && styles.center])}>
      <Link href={`/user/${name.replace('@', '')}`}>
        <a className={styles.userlink}>
          <Avatar src={src} screenname={name} mini />
        </a>
      </Link>
      <span className={styles.icondetail}>
        <IconPlay fill="var(--secondary)" width={18} height={18} /> {playCount}
      </span>
      <span className={styles.icondetail}>
        <IconTime fill="var(--secondary)" width={18} height={18} />{' '}
        {agoText(created)}
      </span>
    </div>
  );
};

export default GachaDetail;
