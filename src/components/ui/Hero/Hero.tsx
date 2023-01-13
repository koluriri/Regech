import { useRouter } from 'next/router';
import { FC } from 'react';
import { IconPencil } from '../../Icon';
import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero: FC = () => {
  const router = useRouter();

  return (
    <div className={`${styles.hero}`}>
      <span>
        正規表現を
        <span className="text-red">書いて</span>
      </span>
      <span>
        ガチャを
        <span className="text-yellow">まわそう</span>
      </span>
      <span>
        <span className="text-teal">投稿</span>
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
