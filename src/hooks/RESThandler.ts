import useSWR from 'swr';
import { z } from 'zod';
import axios, { AxiosError } from 'axios';

/* import { getAuth } from 'firebase/auth';
import app from 'utils/firebase/firebase'; */
import {
  APIResponseErrorSchema,
  APIResponseSchema,
  JSON,
} from '~/types/APIResponse';

// const auth = getAuth(app);

export const fetcher = (url: string): Promise<any> =>
  /* if (auth.currentUser) {
    return auth.currentUser
      .getIdToken(/* forceRefresh * true)
      .then((idToken) => */
  axios
    .get(`${url}`, { headers: { Authorization: /* idToken */ 'testuid' } })
    .then((response) => {
      const parsedBody = APIResponseSchema.safeParse(response.data);
      if (!parsedBody.success) {
        throw Error(`APIからのレスポンスが異常です`);
      } else {
        return parsedBody.data.data;
      }
    })
    .catch((response: AxiosError) => {
      const parsedBody = APIResponseErrorSchema.safeParse(
        response.response?.data,
      );
      if (parsedBody.success) {
        throw Error(`${parsedBody.data.message}`);
      } else {
        throw Error(`${response.message}`);
      }
    });
/* );
  } */
// throw Error('not user');

type UseGetReturn<T> =
  | {
      status: 'loading';
    }
  | {
      status: 'success';
      data: T;
    }
  | {
      status: 'error';
      error: Error;
    };

export const useGet = <T>(
  endpoint: string,
  schema: z.ZodTypeAny,
): UseGetReturn<T> => {
  // eslint-disable-next-line prefer-const
  let { data, error } = useSWR<JSON, Error>(`/api/${endpoint}`, fetcher);

  const parsedBody = schema.safeParse(data);
  if (data && !parsedBody.success)
    error = Error('APIからのレスポンスが異常です');

  if (!error && !data) return { status: 'loading' };
  if (error) return { status: 'error', error };
  if (!parsedBody.success)
    return { status: 'error', error: Error('データのエラー') };

  return {
    status: 'success',
    data: parsedBody.data as T,
  };
};

export const useREST = () => ({
  post: (
    endpoint: string,
    data: JSON,
    onSuccess: (result: any) => any,
    onError = (): any => true,
  ) =>
    axios
      .post(`/api/${endpoint}`, data, {
        headers: { Authorization: /* idToken */ 'testuid' },
      })
      .then((response) => {
        const parsedBody = APIResponseSchema.safeParse(response.data);
        if (!parsedBody.success) {
          onError();
          console.log(response);
          throw Error(`APIからのレスポンスが異常です`);
        } else {
          onSuccess(response.data);

          return parsedBody.data;
        }
      })
      .catch((response: AxiosError) => {
        onError();
        const parsedBody = APIResponseErrorSchema.safeParse(
          response.response?.data,
        );
        if (parsedBody.success) {
          throw Error(`${parsedBody.data.message}`);
        } else {
          throw Error(`${response.message}`);
        }
      }),
  put: (
    endpoint: string,
    data: JSON,
    onSuccess: () => any,
    onError = (): any => true,
  ) =>
    axios
      .put(`/api/${endpoint}`, data, {
        headers: { Authorization: /* idToken */ 'testuid' },
      })
      .then((response) => {
        const parsedBody = APIResponseSchema.safeParse(response.data);
        if (!parsedBody.success) {
          onError();
          throw Error(`APIからのレスポンスが異常です`);
        } else {
          onSuccess();

          return parsedBody.data;
        }
      })
      .catch((response: AxiosError) => {
        onError();
        const parsedBody = APIResponseErrorSchema.safeParse(
          response.response?.data,
        );
        if (parsedBody.success) {
          throw Error(`${parsedBody.data.message}`);
        } else {
          throw Error(`${response.message}`);
        }
      }),
  delete: (endpoint: string, onSuccess: () => any, onError = (): any => true) =>
    axios
      .delete(`/api/${endpoint}`, {
        headers: { Authorization: /* idToken */ 'testuid' },
      })
      .then((response) => {
        const parsedBody = APIResponseSchema.safeParse(response.data);
        if (!parsedBody.success) {
          onError();
          throw Error(`APIからのレスポンスが異常です`);
        } else {
          onSuccess();

          return parsedBody.data;
        }
      })
      .catch((response: AxiosError) => {
        onError();
        const parsedBody = APIResponseErrorSchema.safeParse(
          response.response?.data,
        );
        if (parsedBody.success) {
          throw Error(`${parsedBody.data.message}`);
        } else {
          throw Error(`${response.message}`);
        }
      }),
});
