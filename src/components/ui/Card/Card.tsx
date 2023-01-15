/* eslint-disable react/require-default-props */
import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { IconBulb } from '../../Icon';
import CardHeader from '../CardHeader/CardHeader';
import styles from './Card.module.css';

export type PropType = {
  hint?: ReactNode;
  transparent?: boolean;
  children: ReactNode;
};

const Card: FC<PropType> = ({ hint, transparent = false, children }) => (
  <div className={clsx([styles.card, transparent && styles.transparent])}>
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
