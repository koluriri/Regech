import { FC, useEffect } from 'react';
import Head from 'next/head';
import Card from '~/components/ui/Card/Card';
import GachaItem from '~/components/module/gacha/GachaItem/GachaItem';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import useLocale from '~/hooks/useLocale';
import { useAtom } from 'jotai';
import { postAtom, resultsAtom } from '~/atoms/atoms';
import { Post, User } from '@prisma/client';
import useGetResults from '~/hooks/useGetResults';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import GoTopButton from '~/components/module/create/GoTopButton/GoTopButton';

const UserComponent: FC<{
  posts: (Post & { author: User })[];
}> = ({ posts }) => {
  const { t } = useLocale();

  const [, setResults] = useAtom(resultsAtom);
  const [, setPost] = useAtom(postAtom);
  useEffect(() => {
    setPost(null);
    setResults([]);
    localStorage.setItem('regech_last_results', '[]');
  }, [setResults, setPost]);

  const getResults = useGetResults();

  return (
    <div className="container">
      <Head>
        <title>{t.TITLE}</title>
        <meta property="og:title" content={t.LOGO} />
        <meta property="og:description" content={t.DESCRIPTION} />
        <meta property="og:image" content="https://www.regech.app/ogp.jpg" />
      </Head>

      {posts.length === 0 && (
        <Card>
          <CardHeader>ユーザーが見つかりませんでした。</CardHeader>
        </Card>
      )}
      {posts.length !== 0 && (
        <Card>
          <CardHeader>@{posts[0].author.userName}さんの投稿一覧</CardHeader>
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
      )}
      <GoTopButton />
    </div>
  );
};

export default UserComponent;
