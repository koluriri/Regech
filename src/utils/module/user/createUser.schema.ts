import { z } from 'zod';

export const RequiredBodySchema = z.object({
  uid: z.string(),
  displayName: z.string(),
  userName: z.string(),
  icon: z.string(),
});

export type RequiredBody = z.infer<typeof RequiredBodySchema>;
