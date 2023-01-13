/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import styles from './CardHeader.module.css';

export type PropType = {
  size?: 'md' | 'lg';
  children: ReactNode;
};

const CardHeader: FC<PropType> = ({ size = 'md', children }) => (
  <div className={`${styles.cardheader} ${styles[size]}`}>{children}</div>
);

export default CardHeader;
