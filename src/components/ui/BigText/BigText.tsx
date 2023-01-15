import { FC, ReactNode } from 'react';
import styles from './BigText.module.css';

export type PropType = {
  children: ReactNode;
};

const BigText: FC<PropType> = ({ children }) => (
  <div className={`${styles.bigtext}`}>{children}</div>
);

export default BigText;
