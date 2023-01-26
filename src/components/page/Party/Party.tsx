/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import PartyStage from '~/components/module/gacha/PartyStage/PartyStage';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { IconSkip } from '~/components/Icon';
import useLocale from '~/hooks/useLocale';
import { useAtom } from 'jotai';
import { regexAtom, resultsAtom } from '~/atoms/atoms';

const Party: FC = () => {
  const router = useRouter();
  const { t } = useLocale();

  const [results] = useAtom(resultsAtom);
  const [regex] = useAtom(regexAtom);
  if (typeof window !== 'undefined') {
    localStorage.setItem('regech_last_results', JSON.stringify(results));
    localStorage.setItem('regech_last_regex', regex);
  }

  const timer = results.length;

  const timerId = useRef<NodeJS.Timeout>();
  const clearTimer = useCallback(() => clearInterval(timerId.current), []);

  useEffect(() => {
    timerId.current = setTimeout(() => {
      router.replace('/result').catch(() => alert('error'));
    }, timer * 1500);

    return clearTimer;
  }, [clearTimer, router, timer]);

  return (
    <div className="container">
      <Head>
        <title>{t.LOGO}</title>
        <meta property="og:title" content={t.LOGO} />
        <meta property="og:description" content={t.DESCRIPTION} />
        <meta property="og:image" content="https://www.regech.app/ogp.jpg" />
      </Head>

      <PartyStage results={results} />

      <Button
        variant="default"
        onClick={() => router.push('/result')}
        id="skip"
      >
        <IconSkip />
        {t.SKIP}
      </Button>
    </div>
  );
};

export default Party;
