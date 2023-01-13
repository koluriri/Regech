/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import styles from './Hero.module.css';

export type PropType = {
  children: ReactNode;
};

const Hero: FC<PropType> = ({ children }) => (
  <div className={`${styles.hero}`}>{children}</div>
);

export default Hero;
