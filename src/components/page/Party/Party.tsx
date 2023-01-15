import { FC, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import Logo from '~/components/ui/Logo/Logo';
import PartyStage from '~/components/ui/PartyStage/PartyStage';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { IconSkip } from '~/components/Icon';

const Party: FC<{
  timer: number;
  results: string[];
}> = ({ timer, results }) => {
  const router = useRouter();

  const timerId = useRef<NodeJS.Timeout>();
  const clearTimer = useCallback(() => clearInterval(timerId.current), []);

  useEffect(() => {
    timerId.current = setTimeout(() => {
      router.replace('/result');
    }, timer * 1450);

    return clearTimer;
  }, [clearTimer]);

  return (
    <div className="container">
      <Head>
        <title>ガチャまわし中… | 正規表現ガチャ</title>
      </Head>

      <PartyStage results={results} />

      <Button
        variant="default"
        onClick={() => router.push('/result')}
        id="skip"
      >
        <IconSkip />
        スキップ
      </Button>
    </div>
  );
};

export default Party;
