/* eslint-disable react/require-default-props */
import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export type PropType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'sky'
    | 'blue'
    | 'simple'
    | 'sky-simple'
    | 'line';
  block?: boolean;
  caption?: string;
  mini?: boolean;
};

const Button: FC<PropType> = ({
  children,
  variant = 'default',
  block = false,
  caption = '',
  mini = false,
  ...props
}) => {
  const cls = clsx([
    styles.button,
    styles[variant],
    block && styles.block,
    mini && styles.mini,
  ]);

  return (
    <button type="button" className={cls} {...props}>
      {children}
      {caption !== '' && <span className={styles.caption}>{caption}</span>}
    </button>
  );
};

export default Button;
