/* eslint-disable react/require-default-props */
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { IconPlay } from '~/components/Icon';
import Button from '~/components/ui/Button/Button';
import styles from './GachaItem.module.css';
import GachaPreview from './GachaPreview/GachaPreview';
import { useRouter } from 'next/router';
import { useLocale } from '~/hooks/useLocale';

export type PropType = {
  icon?: ReactNode;
  title: string;
  preview: string[];
  detail: ReactNode;
  id: number;
  animate?: boolean;
};

const GachaItem: FC<PropType> = ({
  icon,
  title,
  preview,
  detail,
  id,
  animate = true,
}) => {
  const router = useRouter();
  const { t } = useLocale();

  return (
    <div
      className={clsx([styles.gachaitem, icon && styles.gachaitemincludesicon])}
    >
      {!!icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.preview}>
          {animate ? (
            <GachaPreview preview={preview} />
          ) : (
            <span>{preview}</span>
          )}
        </div>
        {detail}
      </div>
      <div className={styles.btn}>
        <Button variant="default" onClick={() => router.push('/post')}>
          <IconPlay />
          {t.PLAY}
        </Button>
      </div>
    </div>
  );
};

export default GachaItem;
