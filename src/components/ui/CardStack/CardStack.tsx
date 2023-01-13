/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import styles from './CardStack.module.css';

export type PropType = {
  children: ReactNode;
};

const CardStack: FC<PropType> = ({ children }) => (
  <div className={`${styles.cardstack}`}>{children}</div>
);

export default CardStack;
