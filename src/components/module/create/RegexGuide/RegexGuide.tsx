/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import { FC, useState } from 'react';
import useLocale from '~/hooks/useLocale';
import Button from '../../../ui/Button/Button';
import styles from './RegexGuide.module.css';

export type PropType = {
  insertTextarea: (text: string) => void;
};

const RegexGuide: FC<PropType> = ({ insertTextarea }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useLocale();

  const keys = [
    { key: '', value: '(' },
    { key: '', value: ')' },
    { key: '', value: '[' },
    { key: '', value: ']' },
    { key: '', value: '{' },
    { key: '', value: '}' },
    { key: '', value: ',' },
    { key: '', value: '.' },
    { key: '', value: '+' },
    { key: '', value: '?' },
    { key: '', value: '*' },
    { key: '', value: 'A-Z' },
    { key: '', value: 'a-z' },
    { key: '', value: '0-9' },
    { key: '', value: 'あ-ん' },
    { key: '', value: 'ア-ン' },
  ];
  const buttons = [
    { key: t.AnySingleCharacter, value: '.' },
    { key: t.aaOrBbOrCc, value: '(aa|bb|cc)' },
    { key: t.aOrBOrC, value: '[abc]' },
    { key: t.UpperCaseLetterFromAToZ, value: '[A-Z]' },
    { key: t.GROUP, value: '(aaaa)' },
    { key: t.zeroOrOne, value: '?' },
    { key: t.zeroOrMore, value: '*' },
    { key: t.oneOrMore, value: '+' },
    { key: t.exactlyThree, value: '{3}' },
    { key: t.ThreeOrMore, value: '{3,}' },
    { key: t.ThreeToSix, value: '{3,6}' },
  ];

  if (!isOpen)
    return (
      <div className={styles.link}>
        <a onClick={() => setIsOpen(true)}>{t.OPEN_GUIDE}</a>
      </div>
    );

  return (
    <div className={`${styles.regexguide}`}>
      <div className={styles.link}>
        <a onClick={() => setIsOpen(false)}>{t.CLOSE_GUIDE}</a>
      </div>
      <div className={styles.body}>
        {keys.map((guide) => (
          <Button
            key={guide.value}
            onClick={() => insertTextarea(guide.value)}
            caption={guide.key}
          >
            {guide.value}
          </Button>
        ))}
      </div>
      <div className={`${styles.body} ${styles.guide}`}>
        {buttons.map((guide) => (
          <Button
            key={guide.key}
            variant="simple"
            onClick={() => insertTextarea(guide.value)}
            caption={guide.key}
          >
            {guide.value}
          </Button>
        ))}
      </div>
      <p className={styles.caption}>{t.OTHER_CAPTURE}</p>
    </div>
  );
};

export default RegexGuide;
