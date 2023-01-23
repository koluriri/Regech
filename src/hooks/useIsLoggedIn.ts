import { FirebaseError } from 'firebase/app';
import {
  getAdditionalUserInfo,
  getAuth,
  getRedirectResult,
  signInWithPopup,
  TwitterAuthProvider,
  UserCredential,
} from 'firebase/auth';
import { useAtom } from 'jotai';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { userAtom } from '~/atoms/atoms';
import app from '~/utils/firebase/firebase';
import { useREST } from './RESThandler';

const useIsLoggedIn = (): [
  isLoggedIn: boolean | null,
  isLoading: boolean,
  handleLoginWithPopup: () => void,
  scrollBottomRef: RefObject<HTMLDivElement>,
] => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [, setUserInfo] = useAtom(userAtom);

  const { post } = useREST();

  const scrollBottomRef = useRef<HTMLDivElement>(null);

  const onThen = useCallback(
    (result: UserCredential | null) => {
      if (result === null) {
        setIsLoggedIn(false);

        return false;
      }
      const credential = TwitterAuthProvider.credentialFromResult(result);
      if (credential !== null) {
        const { user } = result;
        const userInfo = getAdditionalUserInfo(result);
        setUserInfo({ ...user, username: userInfo?.username ?? '' });

        post(
          `user`,
          {
            uid: user.uid,
            displayName: user.displayName,
            userName: userInfo?.username ?? '',
            icon: user.photoURL,
          },
          () => {
            setIsLoggedIn(true);
            scrollBottomRef?.current?.scrollIntoView();
          },
        ).catch((error: Error) => {
          alert(`error: ${error.message}`);
          setIsLoggedIn(false);
        });

        return true;
      }
      alert('Error!');

      setIsLoggedIn(false);

      return false;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setUserInfo],
  );

  useEffect(() => {
    const auth = getAuth(app);

    getRedirectResult(auth)
      .then((result) => {
        onThen(result);
      })
      .catch((error) => {
        const err = error as FirebaseError;
        const errorCode = err.code;
        const errorMessage = err.message;
        alert(`Error! ${errorMessage}`);
        console.log(errorCode, errorMessage);

        setIsLoggedIn(false);

        return false;
      });
  }, [onThen]);

  const isLoading = isLoggedIn === null;

  const handleLoginWithPopup = () => {
    setIsLoggedIn(null);
    const provider = new TwitterAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        onThen(result);
      })
      .catch((error: FirebaseError) => {
        const errorMessage = error.message;
        alert(`error: ${errorMessage}`);
        console.log(error);
      });
  };

  return [isLoggedIn, isLoading, handleLoginWithPopup, scrollBottomRef];
};
export default useIsLoggedIn;
