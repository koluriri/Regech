/* eslint-disable react/require-default-props */
import Link from 'next/link';
import { FC } from 'react';
import styles from './TabHeader.module.css';

export type PropType = {
  items: string[];
  links: string[];
  active: number;
};

const TabHeader: FC<PropType> = ({ items, links, active }) => (
  <div className={`${styles.tabheader}`}>
    {items.map((item, index) => (
      <span
        className={`${styles.item} ${index === active ? styles.active : ''}`}
      >
        <Link href={links[index]}>{item}</Link>
      </span>
    ))}
  </div>
);

export default TabHeader;
