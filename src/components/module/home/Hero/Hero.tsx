/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import ShuffleText from 'shuffle-text';
import useLocale from '~/hooks/useLocale';
import { IconPencil } from '~/components/Icon';
import Button from '~/components/ui/Button/Button';
import styles from './Hero.module.css';

const Hero: FC = () => {
  const router = useRouter();
  const { t, locale } = useLocale();

  useEffect(() => {
    const kaite = document.getElementById('kaite');
    const mawasou = document.getElementById('mawasou');
    const toukou = document.getElementById('toukou');

    if (kaite && mawasou && toukou) {
      const kaiteText = new ShuffleText(kaite);
      kaiteText.sourceRandomCharacter = '?^$+.+*()';
      kaiteText.duration = 1000;
      kaiteText.emptyCharacter = '.';
      kaiteText.setText(locale === 'ja' ? '書いて' : 'Write');
      kaiteText.start();

      const mawasouText = new ShuffleText(mawasou);
      mawasouText.sourceRandomCharacter = '?^$+.+*()';
      mawasouText.duration = 1000;
      mawasouText.emptyCharacter = '.';
      mawasouText.setText(locale === 'ja' ? 'まわそう' : 'Draw');
      mawasouText.start();

      const toukouText = new ShuffleText(toukou);
      toukouText.sourceRandomCharacter = '?^$+.+*()';
      toukouText.duration = 1000;
      toukouText.emptyCharacter = '.';
      toukouText.setText(locale === 'ja' ? '投稿' : 'Post');
      toukouText.start();
    }
  }, [locale]);

  return (
    <h1 className={`${styles.hero}`}>
      {locale === 'ja' ? (
        <>
          <span>
            正規表現を
            <span className="text-red" id="kaite">
              書いて
            </span>
          </span>
          <span>
            ガチャを
            <span className="text-yellow" id="mawasou">
              まわそう
            </span>
          </span>
          <span>
            <span className="text-teal" id="toukou">
              投稿
            </span>
            しよう
          </span>
        </>
      ) : (
        <>
          <span>
            <span className="text-red" id="kaite">
              Write
            </span>{' '}
            RegExp.
          </span>
          <span>
            <span className="text-yellow" id="mawasou">
              Draw
            </span>{' '}
            lots.
          </span>
          <span>
            <span className="text-teal" id="toukou">
              Post
            </span>{' '}
            it.
          </span>
        </>
      )}
      <Button variant="secondary" onClick={() => router.push('/create')}>
        <IconPencil />
        {t.CREATE_GACHA}
      </Button>
    </h1>
  );
};

export default Hero;
