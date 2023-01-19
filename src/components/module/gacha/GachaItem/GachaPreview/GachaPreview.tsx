/* eslint-disable react/require-default-props */
import { FC, useEffect, useRef, useState } from 'react';

export type PropType = {
  preview: string[];
};

const GachaPreview: FC<PropType> = ({ preview }) => {
  const [currentPreview, setCurrentPreview] = useState(preview[0]);
  const callbackRef = useRef<() => void>(() => {
    setCurrentPreview(preview[Math.floor(Math.random() * preview.length)]);
  });
  useEffect(() => {
    const tick = () => {
      callbackRef.current();
    };
    const timerId = setInterval(tick, 100);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <span suppressHydrationWarning>{currentPreview}</span>;
};

export default GachaPreview;
