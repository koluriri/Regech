import RandExp from 'randexp';
import prisma from '~/utils/prisma';
import zodErrorToString from '~/utils/zodErrorToString';
import { RequiredBodySchema } from './createPost.schema';

const updatePlayed = async (body: unknown) => {
  const parsedBody = RequiredBodySchema.safeParse(body);
  if (!parsedBody.success) throw Error(zodErrorToString(parsedBody.error));

  const matched = /(\{[0-9]{3,},|[0-9]{3,}\})/g.test(parsedBody.data.regex);
  if (matched) throw Error('結果が長すぎます。Results are too long.');

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
  }

  return prisma.post
    .create({
      data: parsedBody.data,
    })
    .then(() => true)
    .catch((error: Error) => {
      throw Error(error.message);
    });
};

export default updatePlayed;
