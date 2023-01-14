import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import ShuffleText from 'shuffle-text';
import { IconPencil } from '../../Icon';
import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const kaite = document.getElementById('kaite');
    const mawasou = document.getElementById('mawasou');
    const toukou = document.getElementById('toukou');
    if (kaite && mawasou && toukou) {
      const kaiteText = new ShuffleText(kaite);
      kaiteText.sourceRandomCharacter = '?^$+[09-]AZaz.+*()';
      kaiteText.duration = 1000;
      kaiteText.emptyCharacter = '.';
      kaiteText.setText('書いて');
      kaiteText.start();

      const mawasouText = new ShuffleText(mawasou);
      mawasouText.sourceRandomCharacter = '?^$+[09-]AZaz.+*()';
      mawasouText.duration = 1000;
      mawasouText.emptyCharacter = '.';
      mawasouText.setText('まわそう');
      mawasouText.start();

      const toukouText = new ShuffleText(toukou);
      toukouText.sourceRandomCharacter = '?^$+[09-]AZaz.+*()';
      toukouText.duration = 1000;
      toukouText.emptyCharacter = '.';
      toukouText.setText('投稿');
      toukouText.start();
    }
  }, []);

  return (
    <div className={`${styles.hero}`}>
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
      <Button variant="secondary" onClick={() => router.push('/create')}>
        <IconPencil />
        ガチャをつくる
      </Button>
    </div>
  );
};

export default Hero;
