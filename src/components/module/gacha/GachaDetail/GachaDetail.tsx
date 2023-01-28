/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import { FC, MouseEvent } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import useLocale from '~/hooks/useLocale';
import Avatar from '../../../ui/Avatar/Avatar';
import useAgoText from '../../../../hooks/useAgoText';
import { IconPlay, IconTime } from '../../../Icon';
import styles from './GachaDetail.module.css';

export type PropType = {
  src: string;
  name: string;
  playCount: number;
  created: string;
  center?: boolean;
  deleteButton?: boolean;
  handleDelete?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const GachaDetail: FC<PropType> = ({
  src,
  name,
  playCount,
  created,
  center = false,
  deleteButton = false,
  handleDelete = () => true,
}) => {
  const agoText = useAgoText();
  const { t } = useLocale();

  return (
    <div className={clsx([styles.gachadetail, center && styles.center])}>
      <Link href={`/user/${name.replace('@', '')}`}>
        <a className={styles.userlink}>
          <Avatar src={src} screenname={name} mini />
        </a>
      </Link>
      <span className={styles.icondetail}>
        <IconPlay fill="var(--secondary)" width={18} height={18} /> {playCount}
      </span>
      <span className={styles.icondetail}>
        <IconTime fill="var(--secondary)" width={18} height={18} />{' '}
        {agoText(created)}
      </span>
      {deleteButton && (
        <span className={styles.deletebutton}>
          <a href="#" onClick={handleDelete}>
            {t.DELETE_POST}
          </a>
        </span>
      )}
    </div>
  );
};

export default GachaDetail;
