import { z } from 'zod';

const GetMorePostsResponse = z.array(
  z.object({
    id: z.number(),
    authorId: z.number(),
    title: z.string(),
    regex: z.string(),
    play_count: z.number(),
    for_ranking_count: z.number(),
    created: z.string().transform((val) => new Date(val)),
    modified: z.string().transform((val) => new Date(val)),
    author: z.object({
      id: z.number(),
      uid: z.string(),
      displayName: z.string(),
      userName: z.string(),
      icon: z.string(),
      created: z.string().transform((val) => new Date(val)),
      modified: z.string().transform((val) => new Date(val)),
    }),
  }),
);

export default GetMorePostsResponse;
