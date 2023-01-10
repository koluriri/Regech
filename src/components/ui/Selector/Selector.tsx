/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import { FC, useState } from 'react';
import { IconGachaMultiple, IconGachaSingle } from '../../Icon';

export type PropType = {
  handleChange: (val: string) => void;
};

const Selector: FC<PropType> = ({ handleChange }) => {
  const [value, setValue] = useState('single');
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <div className="selector">
      <input
        type="radio"
        name="selector"
        className="left"
        id="option1"
        value="multiple"
        checked={value === 'multiple'}
        onChange={changeValue}
      />
      <label htmlFor="option1" className="selectoroption">
        <IconGachaMultiple />
        10連
      </label>
      <input
        type="radio"
        name="selector"
        className="right"
        id="option2"
        value="single"
        checked={value === 'single'}
        onChange={changeValue}
      />
      <label htmlFor="option2" className="selectoroption">
        <IconGachaSingle />
        単発
      </label>
      <div className="buttonbg" />
    </div>
  );
};
export default Selector;
