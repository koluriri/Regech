/* eslint-disable react/require-default-props */
import { nanoid } from 'nanoid';
import { FC, useEffect } from 'react';
import ShuffleText from 'shuffle-text';

export type PropType = {
  children: string;
};

const DisplayResultLine: FC<PropType> = ({ children }) => {
  const id = nanoid();
  useEffect(() => {
    const span = document.getElementById(id);
    if (span) {
      const text = new ShuffleText(span);
      text.sourceRandomCharacter = '?^$+.+*()';
      text.duration = 500;
      text.emptyCharacter = '.';
      text.setText(children);
      text.start();
    }
  }, [children, id]);

  return <span id={id}>{children}</span>;
};

export default DisplayResultLine;
