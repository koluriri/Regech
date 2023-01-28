import { z } from 'zod';

export const RequiredBodySchema = z.object({
  token: z.string(),
  id: z.number(),
});

export type RequiredBody = z.infer<typeof RequiredBodySchema>;
