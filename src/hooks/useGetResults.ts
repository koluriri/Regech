import RandExp from 'randexp';
import { useCallback } from 'react';

const useGetResults = () =>
  useCallback((regex: string, times: number) => {
    const rand: RandExp = new RandExp(new RegExp(regex));
    rand.defaultRange.add(0, 65535);
    rand.max = 7;

    const results: string[] = [];
    for (let i = 0; i < times; i += 1) {
      results.push(rand.gen());
    }

    return results;
  }, []);

export default useGetResults;
