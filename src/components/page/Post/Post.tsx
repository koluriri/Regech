/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useState } from 'react';
import Head from 'next/head';
import Button from '~/components/ui/Button/Button';
import { IconPlay } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import BigText from '~/components/ui/BigText/BigText';
import Selector from '~/components/ui/Selector/Selector';
import GachaItem from '~/components/module/gacha/GachaItem/GachaItem';
import CardStack from '~/components/ui/CardStack/CardStack';
import useLocale from '~/hooks/useLocale';
import GoTopButton from '~/components/module/create/GoTopButton/GoTopButton';
import { Post, User } from '@prisma/client';
import useGetResults from '~/hooks/useGetResults';
import { useAtom } from 'jotai';
import { postAtom, resultsAtom } from '~/atoms/atoms';
import useListenResults from '~/hooks/useListenResults';
import { useREST } from '~/hooks/RESThandler';

const PostComponent: FC<{
  post: Post & { author: User };
  recommendeds: (Post & { author: User })[];
}> = ({ post, recommendeds }) => {
  const { t } = useLocale();
  const getResults = useGetResults();
  const { put } = useREST();

  const [, setResults] = useAtom(resultsAtom);
  const [, setPost] = useAtom(postAtom);

  const [mode, setMode] = useState('multiple');

  const handleSubmit = async () => {
    await put(`played/${post.id}`, {}, () => {
      const resultsTemporary = getResults(
        post.regex,
        mode === 'multiple' ? 10 : 1,
      );
      setPost(post);
      setResults(resultsTemporary);
    });
  };

  useListenResults();

  return (
    <div className="container">
      <Head>
        <title>{post.title}</title>
      </Head>

      <CardStack>
        <Card>
          <CardHeader>
            <span>{post.title}</span>
            <GachaDetail
              center
              created={post.created.toString()}
              name={`@${post.author.userName}`}
              playCount={post.play_count}
              src={post.author.icon}
            />
          </CardHeader>
          <BigText>{post.regex}</BigText>
          <Selector handleChange={(val: string) => setMode(val)} />
          <Button block variant="primary" onClick={handleSubmit}>
            <IconPlay />
            {t.PLAY_GACHA}
          </Button>
        </Card>

        <Card transparent>
          <CardHeader>{t.RECOMMENDED}</CardHeader>
          {recommendeds?.map((recommended) => (
            <GachaItem
              key={recommended.id}
              animate={false}
              detail={
                <GachaDetail
                  created={recommended.created.toString()}
                  name={`@${recommended.author.userName}`}
                  playCount={recommended.play_count}
                  src={recommended.author.icon}
                />
              }
              id={recommended.id}
              preview={getResults(recommended.regex, 5)}
              title={recommended.title}
            />
          ))}
        </Card>
      </CardStack>

      <GoTopButton />
    </div>
  );
};

export default PostComponent;
