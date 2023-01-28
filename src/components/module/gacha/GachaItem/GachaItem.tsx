/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { resultsAtom } from '~/atoms/atoms';
import useLocale from '../../../../hooks/useLocale';
import { IconPlay } from '../../../Icon';
import Button from '../../../ui/Button/Button';
import styles from './GachaItem.module.css';
import GachaPreview from './GachaPreview/GachaPreview';

export type PropType = {
  icon?: ReactNode;
  title: string;
  preview: string[];
  detail: ReactNode;
  id: number;
  animate?: boolean;
  isTop?: boolean;
};

const GachaItem: FC<PropType> = ({
  icon,
  title,
  preview,
  detail,
  id,
  animate = true,
  isTop = false,
}) => {
  const router = useRouter();
  const { t } = useLocale();

  const [, setResults] = useAtom(resultsAtom);

  return (
    <div
      className={clsx([
        styles.gachaitem,
        icon && styles.gachaitemincludesicon,
        isTop && styles.top,
      ])}
    >
      {!!icon && <div className={clsx([styles.icon])}>{icon}</div>}
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.preview}>
          {animate ? (
            <GachaPreview preview={preview} />
          ) : (
            <span suppressHydrationWarning>{preview[0]}</span>
          )}
        </div>
        {detail}
      </div>
      <div className={styles.btn}>
        <Button
          variant="default"
          onClick={async () => {
            setResults([]);
            await router.push(`/post/${id}`);
          }}
        >
          <IconPlay />
          {t.PLAY}
        </Button>
      </div>
    </div>
  );
};

export default GachaItem;
