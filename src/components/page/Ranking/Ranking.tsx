/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import Head from 'next/head';
import Hero from '~/components/module/home/Hero/Hero';
import {
  IconRankingOne,
  IconRankingThree,
  IconRankingTwo,
} from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import TabHeader from '~/components/ui/TabHeader/TabHeader';
import GachaItem from '~/components/module/gacha/GachaItem/GachaItem';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import useLocale from '~/hooks/useLocale';
import { Post, User } from '@prisma/client';
import useGetResults from '~/hooks/useGetResults';

const Ranking: FC<{
  posts: (Post & { author: User })[];
}> = ({ posts }) => {
  const { t } = useLocale();
  const getResults = useGetResults();

  return (
    <div className="container">
      <Head>
        <title>{t.TITLE}</title>
        <meta property="og:title" content={t.LOGO} />
        <meta property="og:description" content={t.DESCRIPTION} />
        <meta property="og:image" content="https://www.regech.app/ogp.jpg" />
      </Head>

      <Hero />

      <Card>
        <TabHeader
          active={1}
          items={[t.LATEST, t.RANKING, t.TRENDING]}
          links={['/', '/ranking', '/trending']}
        />
        {posts?.map((post, index) => (
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
            icon={
              index === 0 ? (
                <IconRankingOne />
              ) : index === 1 ? (
                <IconRankingTwo />
              ) : index === 2 ? (
                <IconRankingThree />
              ) : (
                index + 1
              )
            }
            isTop={index < 3}
            id={post.id}
            preview={getResults(post.regex, 5)}
            title={post.title}
          />
        ))}
      </Card>
    </div>
  );
};

export default Ranking;
