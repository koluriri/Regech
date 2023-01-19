/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useEffect } from 'react';
import Head from 'next/head';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { IconGachaSingle } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import DisplayResult from '~/components/module/result/DisplayResult/DisplayResult';
import CardStack from '~/components/ui/CardStack/CardStack';
import useLocale from '~/hooks/useLocale';
import GoTopButton from '~/components/module/create/GoTopButton/GoTopButton';
import { postAtom, resultsAtom } from '~/atoms/atoms';
import { useAtom } from 'jotai';
import useGenerateTweet from '~/hooks/useGenerateTweet';

const Result: FC = () => {
  const router = useRouter();
  const { t } = useLocale();
  const [results, setResults] = useAtom(resultsAtom);
  const [post] = useAtom(postAtom);

  const generateTweet = useGenerateTweet();

  useEffect(() => {
    if (results.length === 0) router.push('/').catch(() => alert('Error!'));
  }, [router, results]);

  return (
    <div className="container">
      <Head>
        <title>{t.RESULTS}</title>
      </Head>

      <CardStack>
        <Card>
          {!!post && (
            <CardHeader>
              <span>{post.title}</span>
              <GachaDetail
                center
                created={post.created.toString()}
                name={`@${post.author.userName}`}
                playCount={post.play_count + 1}
                src={post.author.icon}
              />
            </CardHeader>
          )}
          <CardHeader>{t.RESULTS}</CardHeader>
          <DisplayResult results={results} />
          <Button
            variant="sky"
            block
            onClick={() =>
              window.open(
                `http://twitter.com/share?text=${encodeURIComponent(
                  generateTweet(results, post),
                )}&url=${
                  post
                    ? `https://regech.app/post/${post.id}`
                    : 'https://regech.app'
                }&related=${encodeURIComponent('@koluriri')}`,
              )
            }
          >
            {t.TWEET_RESULT}
          </Button>
          <Button
            variant="primary"
            block
            onClick={async () => {
              setResults([]);
              await router.push('/create');
            }}
          >
            <IconGachaSingle />
            {t.ONEMORETIME}
          </Button>
        </Card>

        <Card>
          <CardHeader>{t.GACHA_POST_HEADER}</CardHeader>
          <Button variant="sky" block>
            {t.GACHA_POST_LOGIN}
          </Button>
        </Card>
      </CardStack>

      <GoTopButton />
    </div>
  );
};

export default Result;
