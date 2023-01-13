/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import { IconPlay } from '../../Icon';
import Button from '../Button/Button';
import styles from './GachaItem.module.css';
import GachaPreview from './GachaPreview/GachaPreview';

export type PropType = {
  icon?: ReactNode;
  title: string;
  preview: string[];
  detail: ReactNode;
  id: number;
};

const GachaItem: FC<PropType> = ({ icon, title, preview, detail, id }) => (
  <div
    className={`${styles.gachaitem} ${
      icon ? styles.gachaitemincludesicon : ''
    }`}
  >
    {!!icon && <div className={styles.icon}>{icon}</div>}
    <div className={styles.body}>
      <div className={styles.title}>{title}</div>
      <div className={styles.preview}>
        <GachaPreview preview={preview} />
      </div>
      {detail}
    </div>
    <div className={styles.btn}>
      <Button variant="default" onClick={() => alert(id)}>
        <IconPlay />
        あそぶ
      </Button>
    </div>
  </div>
);

export default GachaItem;
