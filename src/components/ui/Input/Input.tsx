/* eslint-disable react/require-default-props */
import { InputHTMLAttributes, FC } from 'react';
import styles from './Input.module.css';

export type PropType = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<PropType> = ({ ...props }) => (
  <input type="text" className={`${styles.input}`} {...props} />
);

export default Input;
