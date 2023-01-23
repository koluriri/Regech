import { FirebaseError } from 'firebase/app';
import { getAuth, getRedirectResult, TwitterAuthProvider } from 'firebase/auth';
import { useEffect, useState } from 'react';
import app from '~/utils/firebase/firebase';

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

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
          const token = credential.accessToken;
          const { secret } = credential;

          const { user } = result;
          console.log(token, secret, user);

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
  }, []);

  const isLoading = isLoggedIn === null;

  return [isLoggedIn, isLoading];
};
export default useIsLoggedIn;
