/* eslint-disable react/require-default-props */
import { FC } from 'react';
import clsx from 'clsx';
import useAgoText from '~/hooks/useAgoText';
import { IconPlay, IconTime } from '~/components/Icon';
import Avatar from '~/components/ui/Avatar/Avatar';
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

  const cls = clsx([styles.gachadetail, center && styles.center]);

  return (
    <div className={cls}>
      <Avatar src={src} screenname={name} mini />
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
