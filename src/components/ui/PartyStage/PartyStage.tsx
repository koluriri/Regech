/* eslint-disable react/require-default-props */
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import PartyStageCapsule from './PartyStageCapsule';
import PartyStageBg from './PartyStageBg';

export type PropType = {
  results: string[];
};

const PartyStage: FC<PropType> = ({ results }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(results[currentIndex]);

  const timerId = useRef<NodeJS.Timeout>();
  const clearTimer = useCallback(() => clearInterval(timerId.current), []);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCurrentIndex((c) => c + 1);
      if (results[currentIndex + 1]) {
        setDisplayText(results[currentIndex + 1]);
      } else {
        console.log('end! redirect!');
      }
    }, 1500);

    return clearTimer;
  }, [results, clearTimer, currentIndex]);

  return (
    <>
      <PartyStageBg />
      <PartyStageCapsule displayText={displayText} />
    </>
  );
};

export default PartyStage;