import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
import CreateGachaHint from './CreateGachaHint';

const CreateGacha: FC = () => {
  const router = useRouter();
  const { t } = useLocale();

  const [results, setResults] = useAtom(resultsAtom);

  const [regex, setRegex] = useAtom(regexAtom);
  const [mode, setMode] = useState('multiple');
  const regexRef = useRef<HTMLTextAreaElement>(null);

  const getResults = useGetResults();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultsTemporary = getResults(regex, mode === 'multiple' ? 10 : 1);
    setResults(resultsTemporary);
  };

  useEffect(() => {
    if (results.length !== 0) {
      router.push('/party').catch(() => alert('Error!'));
    }
  }, [results, router]);

  return (
    <div className="container">
      <Head>
        <title>{t.CREATE_GACHA_HEADER}</title>
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
