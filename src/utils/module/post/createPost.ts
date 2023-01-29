import { FirebaseError } from 'firebase-admin';
import RandExp from 'randexp';
import admin from '~/utils/firebase/firebase-admin';
import prisma from '~/utils/prisma';
import zodErrorToString from '~/utils/zodErrorToString';
import { RequiredBodySchema } from './createPost.schema';
import NGWords from './NGWords';

const createPost = async (body: unknown) => {
  const parsedBody = RequiredBodySchema.safeParse(body);
  if (!parsedBody.success) throw Error(zodErrorToString(parsedBody.error));

  const tooLongMatched = /(\{[0-9]{3,},|[0-9]{3,}\})/g.test(
    parsedBody.data.regex,
  );
  if (tooLongMatched) throw Error('結果が長すぎます。Results are too long.');

  if (
    parsedBody.data.regex === '.+' ||
    parsedBody.data.regex === '.' ||
    parsedBody.data.regex === '.*' ||
    parsedBody.data.regex === '.+?' ||
    parsedBody.data.regex === '.*?' ||
    parsedBody.data.regex === '.+*'
  )
    throw Error('正規表現が簡単すぎます。Regular expressions is too simple.');

  let rgx = /^$/;
  try {
    rgx = new RegExp(parsedBody.data.regex);
  } catch {
    throw Error(
      '正しい正規表現を入力してください。Enter the correct regular expression.',
    );
  }
  const rand: RandExp = new RandExp(rgx);
  rand.defaultRange.add(0, 65535);
  rand.max = 7;

  for (let i = 0; i < 30; i += 1) {
    const result = rand.gen();
    if (result === '')
      throw Error(
        '結果が空になる正規表現は使用できません。You cannot use a regular expression that yields an empty result.',
      );
    if (result.length > 400)
      throw Error('結果が長すぎます。Results are too long.');

    if (NGWords.map((value) => result.includes(value)).includes(true))
      throw Error('NGワードが含まれています。');
  }

  if (
    NGWords.map((value) => parsedBody.data.regex.includes(value)).includes(true)
  )
    throw Error('NGワードが含まれています。');
  if (
    NGWords.map((value) => parsedBody.data.title.includes(value)).includes(true)
  )
    throw Error('NGワードが含まれています。');

  const existsRegex = await prisma.post.findFirst({
    where: { regex: parsedBody.data.regex, deleted: false },
    select: { id: true },
  });
  if (existsRegex !== null)
    throw Error(
      '既に同じ正規表現が投稿されています。The same regex has already been posted.',
    );

  const existsTitle = await prisma.post.findFirst({
    where: { title: parsedBody.data.title, deleted: false },
    select: { id: true },
  });
  if (existsTitle !== null)
    throw Error(
      '既に同じタイトルが投稿されています。The same title has already been posted.',
    );

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
        },
      });

      if (!user) throw Error('User Not Found');

      return prisma.post
        .create({
          data: {
            authorId: user.id,
            title: parsedBody.data.title,
            regex: parsedBody.data.regex,
          },
        })
        .then(async () => {
          const lastPost = await prisma.post.findFirst({
            where: {
              title: parsedBody.data.title,
              authorId: user.id,
            },
            select: { id: true },
            orderBy: { id: 'desc' },
          });
          if (lastPost?.id !== undefined) {
            return { id: lastPost.id };
          }
          throw Error('投稿IDが見つかりません');
        })
        .catch((error: Error) => {
          throw Error(error.message);
        });
    })
    .catch((error: FirebaseError) => {
      throw Error(error.message ?? 'Error: could not decode token');
    });
};

export default createPost;
