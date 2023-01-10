/* eslint-disable react/require-default-props */
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';

export type PropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'default';
  block?: boolean;
  caption?: string;
};

const Button: FC<PropType> = ({
  children,
  variant = 'default',
  block = false,
  caption = '',
  ...props
}) => (
  <button
    type="button"
    className={`${styles.button} ${styles[variant]} ${
      block ? styles.block : ''
    }`}
    {...props}
  >
    {children}
    {caption !== '' && <span className={styles.caption}>{caption}</span>}
  </button>
);

export default Button;
