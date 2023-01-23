import { z } from 'zod';

export const RequiredBodySchema = z.object({
  token: z.string(),
  title: z.string().max(34),
  regex: z.string().max(200),
});

export type RequiredBody = z.infer<typeof RequiredBodySchema>;

export const CreatePostResponse = z.object({
  id: z.number(),
});
