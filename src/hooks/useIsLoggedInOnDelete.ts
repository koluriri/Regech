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
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { userAtom } from '~/atoms/atoms';
import app from '~/utils/firebase/firebase';
import { useREST } from './RESThandler';
import useLocale from './useLocale';

const useIsLoggedInOnDelete = (
  postId: number,
): [
  isLoggedIn: boolean | null,
  isLoading: boolean,
  handleDeleteWithPopup: (e: MouseEvent<HTMLAnchorElement>) => void,
  deleted: boolean,
] => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [, setUserInfo] = useAtom(userAtom);

  const [deleted, setDeleted] = useState(false);

  const { post } = useREST();

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
            const auth = getAuth(app);
            if (auth.currentUser)
              auth.currentUser
                .getIdToken(/* forceRefresh */ true)
                .then((idToken) => {
                  setIsLoggedIn(true);
                  post(
                    `deletePost`,
                    {
                      token: idToken,
                      id: postId,
                    },
                    () => {
                      setDeleted(true);
                    },
                  ).catch((error: Error) => {
                    alert(`error: ${error.message}`);
                  });
                })
                .catch((error: Error) => {
                  alert(`error: ${error.message}`);
                });
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

  const { t } = useLocale();

  const handleDeleteWithPopup = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    const reallyDelete: boolean = confirm(t.REALLY_DELETE);
    if (reallyDelete) {
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
    }
  };

  const isLoading = isLoggedIn === null;

  return [isLoggedIn, isLoading, handleDeleteWithPopup, deleted];
};
export default useIsLoggedInOnDelete;
