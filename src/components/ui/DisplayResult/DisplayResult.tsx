/* eslint-disable react/require-default-props */
import { FC } from 'react';
import styles from './DisplayResult.module.css';

export type PropType = {
  results: string[];
};

const DisplayResult: FC<PropType> = ({ results }) => (
  <div className={`${styles.displayresult}`}>
    {results.map((line) => (
      <span>{line}</span>
    ))}
  </div>
);

export default DisplayResult;
