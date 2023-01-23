/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { getAuth, signOut } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { userAtom } from '~/atoms/atoms';
import Avatar from '~/components/ui/Avatar/Avatar';
import BigText from '~/components/ui/BigText/BigText';
import Button from '~/components/ui/Button/Button';
import Input from '~/components/ui/Input/Input';
import useLocale from '~/hooks/useLocale';
import app from '~/utils/firebase/firebase';
import styles from './CreatePost.module.css';

const CreatePost: FC = () => {
  const router = useRouter();
  const { t } = useLocale();

  const [regex, setRegex] = useState('');
  const [userInfo] = useAtom(userAtom);

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
      <Input
        value={title}
        placeholder={t.ENTER_TITLE}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="blue" block>
        {t.POST}
      </Button>
    </>
  );
};

export default CreatePost;