/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useEffect } from 'react';
import Head from 'next/head';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { IconGachaSingle, IconLogin } from '~/components/Icon';
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
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  TwitterAuthProvider,
} from 'firebase/auth';
import app from '~/utils/firebase/firebase';
import CreatePost from '~/components/module/result/CreatePost/CreatePost';
import useIsLoggedIn from '~/hooks/useIsLoggedIn';
import Spinner from '~/components/ui/Spinner/Spinner';
import { FirebaseError } from 'firebase/app';

const Result: FC = () => {
  const router = useRouter();
  const { t } = useLocale();
  const [results, setResults] = useAtom(resultsAtom);
  const [post] = useAtom(postAtom);

  const generateTweet = useGenerateTweet();

  const [isLoggedIn, isLoading] = useIsLoggedIn();

  useEffect(() => {
    const lastResults = localStorage.getItem('regech_last_results');
    if (lastResults && lastResults !== '[]') {
      setResults(JSON.parse(lastResults) as string[]);
    } else {
      router.push('/').catch(() => alert('Error!'));
    }

    // if (results.length === 0) router.push('/').catch(() => alert('Error!'));
  }, [setResults, router]);

  const handleLogin = async () => {
    const provider = new TwitterAuthProvider();
    const auth = getAuth(app);
    await signInWithRedirect(auth, provider);
  };

  const handleLoginWithPopup = () => {
    const provider = new TwitterAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const { secret } = credential;

          // The signed-in user info.
          const { user } = result;
          console.log(token);
          console.log(secret);
          console.log(user);
          alert(`logged in! ${user.displayName ?? ''}`);
        } else {
          alert('credential is falsy');
        }
        // ...
      })
      .catch((error: FirebaseError) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        alert(`error: ${errorMessage}`);
        // ...
      });
  };

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
              if (!post) {
                await router.push('/create');
              } else {
                await router.push(`/post/${post.id}`);
              }
            }}
          >
            <IconGachaSingle />
            {t.ONEMORETIME}
          </Button>
        </Card>

        {!post && (
          <Card>
            <CardHeader>{t.GACHA_POST_HEADER}</CardHeader>
            {isLoading && <Spinner />}
            {isLoggedIn && <CreatePost />}
            {!isLoggedIn && isLoggedIn !== null && (
              <>
                <Button variant="sky" block onClick={handleLogin}>
                  {t.GACHA_POST_LOGIN}
                  <IconLogin />
                </Button>
                <Button
                  variant="sky-simple"
                  block
                  mini
                  onClick={handleLoginWithPopup}
                >
                  {t.CANT_LOGIN}
                  <IconLogin />
                </Button>
              </>
            )}
          </Card>
        )}
      </CardStack>

      <GoTopButton />
    </div>
  );
};

export default Result;
