/* eslint-disable react/require-default-props */
import moment from 'moment';
import { FC } from 'react';
import { IconPlay, IconTime } from '../../Icon';
import Avatar from '../Avatar/Avatar';
import styles from './GachaDetail.module.css';

export type PropType = {
  src: string;
  name: string;
  playCount: number;
  created: string;
  center?: boolean;
};

moment.locale('ja');

const GachaDetail: FC<PropType> = ({
  src,
  name,
  playCount,
  created,
  center = false,
}) => (
  <div className={`${styles.gachadetail} ${center ? styles.center : ''}`}>
    <Avatar src={src} screenname={name} mini />
    <span className={styles.icondetail}>
      <IconPlay fill="var(--secondary)" width={18} height={18} /> {playCount}
    </span>
    <span className={styles.icondetail}>
      <IconTime fill="var(--secondary)" width={18} height={18} />{' '}
      {moment(created).fromNow()}
    </span>
  </div>
);

export default GachaDetail;
