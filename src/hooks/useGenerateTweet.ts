import { Post, User } from '@prisma/client';

const useGenerateTweet =
  () => (results: string[], post: (Post & { author: User }) | null) =>
    `${results.join('\n')}\n\n${
      post ? `${post.title} from @${post.author.userName}` : '正規表現ガチャ'
    }\n${
      post
        ? encodeURIComponent(`https://regech.app/post/${post.id}`)
        : encodeURIComponent('https://regech.app')
    }`;

export default useGenerateTweet;
