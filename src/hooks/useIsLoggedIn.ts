import { FirebaseError } from 'firebase/app';
import {
  getAdditionalUserInfo,
  getAuth,
  getRedirectResult,
  TwitterAuthProvider,
} from 'firebase/auth';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { userAtom } from '~/atoms/atoms';
import app from '~/utils/firebase/firebase';

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [, setUserInfo] = useAtom(userAtom);

  useEffect(() => {
    const auth = getAuth(app);

    getRedirectResult(auth)
      .then((result) => {
        if (!result) {
          setIsLoggedIn(false);

          return false;
        }
        const credential = TwitterAuthProvider.credentialFromResult(result);
        if (credential) {
          const { user } = result;
          const userInfo = getAdditionalUserInfo(result);
          setUserInfo({ ...user, username: userInfo?.username ?? '' });

          setIsLoggedIn(true);

          return true;
        }
        alert('Error!');

        setIsLoggedIn(false);

        return false;
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
  }, [setUserInfo]);

  const isLoading = isLoggedIn === null;

  return [isLoggedIn, isLoading];
};
export default useIsLoggedIn;
