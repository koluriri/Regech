/* eslint-disable react/require-default-props */
import { FC } from 'react';
import styles from './DisplayResult.module.css';
import DisplayResultLine from './DisplayResultLine';

export type PropType = {
  results: string[];
};

const DisplayResult: FC<PropType> = ({ results }) => (
  <div className={`${styles.displayresult}`}>
    {results.map((line) => (
      <DisplayResultLine>{line}</DisplayResultLine>
    ))}
  </div>
);

export default DisplayResult;
