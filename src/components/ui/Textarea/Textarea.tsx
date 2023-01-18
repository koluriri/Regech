/* eslint-disable react/require-default-props */
import React, {
  TextareaHTMLAttributes,
  useState,
  ClassAttributes,
} from 'react';
import styles from './Textarea.module.css';

export type PropType = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, PropType>(
  ({ ...props }, ref) => {
    const [val, setVal] = useState('');

    const calcTextAreaHeight = (value: string) => {
      const rowsNum = value.split('\n').length;

      return rowsNum;
    };

    return (
      <textarea
        ref={ref}
        className={`${styles.textarea}`}
        rows={calcTextAreaHeight(val)}
        onChange={(e) => setVal(e.target.value)}
        {...props}
      ></textarea>
    );
  },
);

export default Textarea;
