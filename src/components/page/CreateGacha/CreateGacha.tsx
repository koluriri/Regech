import { FC, FormEvent, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import RandExp from 'randexp';
import { IconPencil, IconPlay } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import Textarea from '~/components/ui/Textarea/Textarea';
import RegexGuide from '~/components/module/create/RegexGuide/RegexGuide';
import Selector from '~/components/ui/Selector/Selector';
import Button from '~/components/ui/Button/Button';
import { useLocale } from '~/hooks/useLocale';
import GoTopButton from '~/components/module/create/GoTopButton/GoTopButton';
import CreateGachaHint from './CreateGachaHint';
import { useAtom } from 'jotai';
import { regexAtom, resultsAtom } from '~/atoms/atoms';

const CreateGacha: FC = () => {
  const router = useRouter();
  const { t } = useLocale();

  const [results, setResults] = useAtom(resultsAtom);

  const [regex, setRegex] = useAtom(regexAtom);
  const [mode, setMode] = useState('single');
  const regexRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rand = new RandExp(regex);
    rand.max = 7;

    const times = mode === 'multiple' ? 10 : 1;
    const resultsTemporary: string[] = [];
    for (let i = 0; i < times; i++) {
      resultsTemporary.push(rand.gen());
    }
    setResults((r) => resultsTemporary);
    console.log(results);

    router.push('/party');
  };

  return (
    <div className="container">
      <Head>
        <title>
          {t.CREATE_GACHA_HEADER} | {t.LOGO}
        </title>
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
