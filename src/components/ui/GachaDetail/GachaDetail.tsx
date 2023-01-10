/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { IconPlay, IconTime } from '../../Icon';
import Avatar from '../Avatar/Avatar';
import styles from './GachaDetail.module.css';

export type PropType = {
  src: string;
  name: string;
  playCount: number;
  created: number;
};

const GachaDetail: FC<PropType> = ({ src, name, playCount, created }) => (
  <div className={styles.gachadetail}>
    <Avatar src={src} screenname={name} mini />
    <span className={styles.icondetail}>
      <IconPlay fill="var(--secondary)" width={18} height={18} /> {playCount}
    </span>
    <span className={styles.icondetail}>
      <IconTime fill="var(--secondary)" width={18} height={18} /> {created}
    </span>
  </div>
);

export default GachaDetail;
