import { getAuth } from 'firebase/auth';
import { APIResponseSuccessSchema } from '~/types/APIResponse';
import app from '~/utils/firebase/firebase';
import { CreatePostResponse } from '~/utils/module/post/createPost.schema';
import zodErrorToString from '~/utils/zodErrorToString';
import { useREST } from './RESThandler';

const useCreatePost = () => {
  const { post } = useREST();

  return (
    title: string,
    regex: string,
    onSuccess: (path: string) => Promise<void>,
    onError: () => void,
  ) => {
    const auth = getAuth(app);
    if (auth.currentUser)
      auth.currentUser
        .getIdToken(/* forceRefresh */ true)
        .then(async (idToken) => {
          await post(
            `post`,
            {
              token: idToken,
              title,
              regex,
            },
            async (data) => {
              const parsedBody = APIResponseSuccessSchema.safeParse(data);
              if (!parsedBody.success)
                throw Error(zodErrorToString(parsedBody.error));
              const parsedData = CreatePostResponse.safeParse(
                parsedBody.data.data,
              );
              if (!parsedData.success)
                throw Error(zodErrorToString(parsedData.error));
              await onSuccess(`/post/${parsedData.data.id}`);
            },
          );
        })
        .catch((error: Error) => {
          console.error(error);
          onError();
          alert(error.message);
        });
  };
};
export default useCreatePost;
