/* eslint-disable react/require-default-props */
import { TextareaHTMLAttributes, FC, useState } from 'react';
import styles from './Textarea.module.css';

export type PropType = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: FC<PropType> = ({ children, ...props }) => {
  const [val, setVal] = useState('');

  const calcTextAreaHeight = (value: string) => {
    const rowsNum = value.split('\n').length;

    return rowsNum;
  };

  return (
    <textarea
      className={`${styles.textarea}`}
      rows={calcTextAreaHeight(val)}
      onChange={(e) => setVal(e.target.value)}
      {...props}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
