/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { getAuth, signOut } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { regexAtom } from '~/atoms/atoms';
import Avatar from '~/components/ui/Avatar/Avatar';
import BigText from '~/components/ui/BigText/BigText';
import Button from '~/components/ui/Button/Button';
import Input from '~/components/ui/Input/Input';
import app from '~/utils/firebase/firebase';
import styles from './CreatePost.module.css';

const CreatePost: FC<{ src: string; username: string }> = ({
  src,
  username,
}) => {
  const router = useRouter();

  const [regex] = useAtom(regexAtom);

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

  return (
    <>
      <div className={styles.author}>
        <Avatar src={src} username={username} mini />
        として投稿{' '}
        <a href="#" onClick={handleLogout}>
          ログアウト(トップへ)
        </a>
      </div>
      <BigText p0>{regex}</BigText>
      <Input
        value={title}
        placeholder="タイトルを入力"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="blue" block>
        投稿する
      </Button>
    </>
  );
};

export default CreatePost;
