/* eslint-disable react/require-default-props */
import { FC } from 'react';
import styles from './Avatar.module.css';

export type PropType = {
  src?: string;
  username: string;
  screenname: string;
  mini?: boolean;
};

const Avatar: FC<PropType> = ({ src, username, screenname, mini = false }) => (
  <div className={`${styles.avatar} ${mini ? styles.mini : ''}`}>
    <div>{!!src && <img src={src} alt="" />}</div>
    <div className={styles.avatardetail}>
      {username && <span className={styles.username}>{username}</span>}
      {screenname && <span className={styles.screenname}>{screenname}</span>}
    </div>
  </div>
);

export default Avatar;
