import { FirebaseError } from 'firebase-admin';
import admin from '~/utils/firebase/firebase-admin';
import prisma from '~/utils/prisma';
import zodErrorToString from '~/utils/zodErrorToString';
import { RequiredBodySchema } from './deletePost.schema';

const deletePost = async (body: unknown) => {
  const parsedBody = RequiredBodySchema.safeParse(body);
  if (!parsedBody.success) throw Error(zodErrorToString(parsedBody.error));

  const post = await prisma.post.findFirst({
    where: { id: parsedBody.data.id },
    select: { id: true, author: { select: { uid: true } } },
  });
  if (post === null) throw Error('投稿がありません');

  return admin
    .auth()
    .verifyIdToken(parsedBody.data.token)
    .then(async (decodedToken) => {
      const { uid } = decodedToken;

      const user = await prisma.user.findFirst({
        where: {
          uid,
        },
        select: {
          id: true,
          uid: true,
        },
      });

      if (!user) throw Error('User Not Found');
      if (user.uid !== post.author.uid)
        throw Error('あなたの投稿ではありません');

      return prisma.post
        .update({
          where: {
            id: parsedBody.data.id,
          },
          data: {
            deleted: true,
          },
        })
        .then(() => true)
        .catch((error: Error) => {
          throw Error(error.message);
        });
    })
    .catch((error: FirebaseError) => {
      throw Error(error.message ?? 'Error: could not decode token');
    });
};

export default deletePost;
