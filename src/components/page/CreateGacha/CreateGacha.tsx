import { FC, FormEvent, useRef, useState } from 'react';
import Head from 'next/head';
import { IconPencil, IconPlay } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import Textarea from '~/components/ui/Textarea/Textarea';
import RegexGuide from '~/components/module/create/RegexGuide/RegexGuide';
import Selector from '~/components/ui/Selector/Selector';
import Button from '~/components/ui/Button/Button';
import useLocale from '~/hooks/useLocale';
import GoTopButton from '~/components/module/create/GoTopButton/GoTopButton';
import { regexAtom, resultsAtom } from '~/atoms/atoms';
import { useAtom } from 'jotai';
import useGetResults from '~/hooks/useGetResults';
import useListenResults from '~/hooks/useListenResults';
import { getAnalytics, logEvent } from 'firebase/analytics';
import app from '~/utils/firebase/firebase';
import CreateGachaHint from './CreateGachaHint';

const CreateGacha: FC = () => {
  const { t } = useLocale();

  const [, setResults] = useAtom(resultsAtom);

  const [regex, setRegex] = useAtom(regexAtom);
  const [mode, setMode] = useState('multiple');
  const regexRef = useRef<HTMLTextAreaElement>(null);

  const getResults = useGetResults();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const analytics = getAnalytics(app);
      logEvent(analytics, 'create_gacha', { regex, mode });
    }
    const resultsTemporary = getResults(regex, mode === 'multiple' ? 10 : 1);
    setResults(resultsTemporary);
  };

  useListenResults();

  return (
    <div className="container">
      <Head>
        <title>{t.CREATE_GACHA_HEADER}</title>
        <meta property="og:title" content={t.LOGO} />
        <meta property="og:description" content={t.DESCRIPTION} />
        <meta property="og:image" content="https://www.regech.app/ogp.jpg" />
      </Head>

      <Card hint={<CreateGachaHint />}>
        <CardHeader>
          <IconPencil />
          {t.CREATE_GACHA_HEADER}
        </CardHeader>
        <form onSubmit={handleSubmit} method="POST">
          <Textarea
            name="regex"
            placeholder={t.ENTER_REGEXP}
            required
            maxLength={200}
            value={regex}
            onChange={(e) => setRegex(e.target.value)}
            ref={regexRef}
          />
          <RegexGuide
            insertTextarea={(text: string) => {
              setRegex((r) => `${r}${text}`);
              regexRef.current?.focus();
            }}
          />
          <Selector handleChange={(val: string) => setMode(val)} />
          <Button type="submit" block variant="primary">
            <IconPlay />
            {t.PLAY_GACHA}
          </Button>
        </form>
      </Card>

      <GoTopButton />
    </div>
  );
};

export default CreateGacha;
