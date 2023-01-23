/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { getAuth, signOut } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { FC, FormEvent, useEffect, useState } from 'react';
import { resultsAtom, userAtom } from '~/atoms/atoms';
import Avatar from '~/components/ui/Avatar/Avatar';
import BigText from '~/components/ui/BigText/BigText';
import Button from '~/components/ui/Button/Button';
import Input from '~/components/ui/Input/Input';
import useCreatePost from '~/hooks/useCreatePost';
import useLocale from '~/hooks/useLocale';
import app from '~/utils/firebase/firebase';
import styles from './CreatePost.module.css';

const CreatePost: FC = () => {
  const router = useRouter();
  const { t } = useLocale();

  const [regex, setRegex] = useState('');
  const [userInfo] = useAtom(userAtom);
  const [, setResults] = useAtom(resultsAtom);

  useEffect(() => {
    setRegex(localStorage.getItem('regech_last_regex') ?? '');
  }, []);

  const [title, setTitle] = useState('');
  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(async () => {
        await router.push('/');
      })
      .catch(() => {
        alert('ログアウトできませんでした。');
      });
  };

  const [loading, setLoading] = useState(false);

  const createPost = useCreatePost();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    createPost(title, regex, async (path: string) => {
      setResults([]);
      setLoading(false);
      await router.push(path);
    });
  };

  if (userInfo === null) return null;

  return (
    <>
      <div className={styles.author}>
        {t.POST_AS}
        <Avatar
          src={userInfo.photoURL ?? ''}
          username={`@${userInfo.username ?? ''}`}
          mini
        />{' '}
        <a href="#" onClick={handleLogout}>
          {t.LOGOUT}
        </a>
      </div>
      <BigText p0>{regex}</BigText>
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          placeholder={t.ENTER_TITLE}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" variant="blue" block disabled={loading}>
          {t.POST}
        </Button>
      </form>
    </>
  );
};

export default CreatePost;
