import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { resultsAtom } from '~/atoms/atoms';

const useListenResults = () => {
  const router = useRouter();
  const [results] = useAtom(resultsAtom);

  useEffect(() => {
    if (results.length !== 0) {
      router.push('/party').catch(() => alert('Error!'));
    }
  }, [results, router]);
};

export default useListenResults;
