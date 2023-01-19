import { z } from 'zod';

export const RequiredBodySchema = z.object({
  authorId: z.number(),
  title: z.string().max(34),
  regex: z.string().max(200),
});

export type RequiredBody = z.infer<typeof RequiredBodySchema>;
