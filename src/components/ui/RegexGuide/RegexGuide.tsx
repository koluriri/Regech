/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import { FC, useState } from 'react';
import Button from '../Button/Button';
import styles from './RegexGuide.module.css';

export type PropType = {
  insertTextarea: (text: string) => void;
};

const RegexGuide: FC<PropType> = ({ insertTextarea }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const buttons = [
    { key: '任意の一文字', value: '.' },
    { key: 'aaかbbかcc', value: '(aa|bb|cc)' },
    { key: 'abcのいずれか', value: '[abc]' },
    { key: 'A〜Zのいずれか', value: '[A-Z]' },
    { key: '0回か1回', value: '?' },
    { key: '0回以上の繰り返し', value: '*' },
    { key: '1回以上', value: '+' },
    { key: 'n回', value: '{n}' },
    { key: 'n回以上', value: '{n,}' },
    { key: 'n回以上m回以下', value: '{n,m}' },
  ];

  if (!isOpen)
    return (
      <div className={styles.link}>
        <a onClick={() => setIsOpen(true)}>正規表現ガイドを開く</a>
      </div>
    );

  return (
    <div className={`${styles.regexguide}`}>
      <div className={styles.link}>
        <a onClick={() => setIsOpen(false)}>正規表現ガイドを閉じる</a>
      </div>
      <div className={styles.body}>
        {buttons.map((guide) => (
          <Button
            onClick={() => insertTextarea(guide.value)}
            caption={guide.key}
          >
            {guide.value}
          </Button>
        ))}
      </div>
      <p className={styles.caption}>その他、キャプチャ等も使用可能</p>
    </div>
  );
};

export default RegexGuide;
