import { FC, useEffect } from 'react';
import Head from 'next/head';
import Hero from '~/components/module/home/Hero/Hero';
import Card from '~/components/ui/Card/Card';
import TabHeader from '~/components/ui/TabHeader/TabHeader';
import GachaItem from '~/components/module/gacha/GachaItem/GachaItem';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import { useLocale } from '~/hooks/useLocale';
import { useAtom } from 'jotai';
import { resultsAtom } from '~/atoms/atoms';
import { Post, User } from '@prisma/client';
import useGetResults from '~/hooks/useGetResults';

const Home: FC<{
  posts: (Post & { author: User })[];
}> = ({ posts }) => {
  const { t } = useLocale();

  const [, setResults] = useAtom(resultsAtom);
  useEffect(() => {
    setResults([]);
  }, [setResults]);

  const getResults = useGetResults();

  console.log(posts);

  return (
    <div className="container">
      <Head>
        <title>{t.TITLE}</title>
      </Head>

      <Hero />

      <Card>
        <TabHeader
          active={0}
          items={[t.LATEST, t.RANKING]}
          links={['/', '/ranking']}
        />
        {posts?.map((post) => (
          <GachaItem
            key={post.id}
            detail={
              <GachaDetail
                created={post.created.toString()}
                name={`@${post.author.userName}`}
                playCount={post.play_count}
                src={post.author.icon}
              />
            }
            id={post.id}
            preview={getResults(post.regex, 5)}
            title={post.title}
          />
        ))}
      </Card>
    </div>
  );
};

export default Home;
