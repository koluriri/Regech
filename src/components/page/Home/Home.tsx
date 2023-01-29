import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import Hero from '~/components/module/home/Hero/Hero';
import Card from '~/components/ui/Card/Card';
import TabHeader from '~/components/ui/TabHeader/TabHeader';
import GachaItem from '~/components/module/gacha/GachaItem/GachaItem';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import useLocale from '~/hooks/useLocale';
import { useAtom } from 'jotai';
import { postAtom, resultsAtom } from '~/atoms/atoms';
import { Post, User } from '@prisma/client';
import useGetResults from '~/hooks/useGetResults';
import Button from '~/components/ui/Button/Button';
import { fetcher } from '~/hooks/RESThandler';
import GetMorePostsResponse from '~/utils/module/post/getMorePosts.schema';
import zodErrorToString from '~/utils/zodErrorToString';

const Home: FC<{
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

  const [displayPosts, setDisplayPosts] = useState(posts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const handleMore = () => {
    setLoading(true);
    fetcher(`/api/more/${page + 1}`)
      .then((data) => {
        const parsedBody = GetMorePostsResponse.safeParse(data);
        if (!parsedBody.success) {
          alert(`Error:${zodErrorToString(parsedBody.error)}`);
        } else {
          setDisplayPosts((prevPosts) => [...prevPosts, ...parsedBody.data]);
          setPage((p) => p + 1);
        }
      })
      .catch((error: Error) => {
        alert(`Error:${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
          active={0}
          items={[t.LATEST, t.RANKING, t.TRENDING]}
          links={['/', '/ranking', '/trending']}
        />
        {displayPosts?.map((post) => (
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
        {!displayPosts.map((post) => post.id === 1).includes(true) && (
          <Button
            variant="tertiary"
            block
            mini
            onClick={handleMore}
            disabled={loading}
          >
            もっと見る
          </Button>
        )}
      </Card>
    </div>
  );
};

export default Home;
