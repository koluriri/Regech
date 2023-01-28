import { Post, User } from '@prisma/client';

const useGenerateTweet =
  () => (results: string[], post: (Post & { author: User }) | null) =>
    `${results.join('\n')}\n\n${
      post ? `${post.title} by @${post.author.userName}` : '正規表現ガチャ'
    }\n`;

export default useGenerateTweet;
