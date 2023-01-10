/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import { IconBulb } from '../../Icon';
import CardHeader from '../CardHeader/CardHeader';
import styles from './Card.module.css';

export type PropType = {
  hint: ReactNode;
  children: ReactNode;
};

const Card: FC<PropType> = ({ hint, children }) => (
  <div className={`${styles.card}`}>
    <div className={styles.body}>{children}</div>
    {!!hint && (
      <div className={styles.hint}>
        <CardHeader>
          <IconBulb />
          ヒント
        </CardHeader>
        {hint}
      </div>
    )}
  </div>
);

export default Card;
