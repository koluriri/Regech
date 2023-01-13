/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import styles from './Tooltip.module.css';

export type PropType = {
  label: string;
  className?: string;
  children: ReactNode;
};

const Tooltip: FC<PropType> = ({ label, className, children }) => (
  <div className={`${styles.tooltipcontainer} ${className || ''}`}>
    {label !== '' && <span className={styles.tooltip}>{label}</span>}
    {children}
  </div>
);

export default Tooltip;
