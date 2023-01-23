/* eslint-disable react/require-default-props */
import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './BigText.module.css';

export type PropType = {
  children: ReactNode;
  p0?: boolean;
};

const BigText: FC<PropType> = ({ children, p0 = false }) => (
  <div className={clsx([styles.bigtext, p0 && styles.p0])}>{children}</div>
);

export default BigText;
