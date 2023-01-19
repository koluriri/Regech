import { z } from 'zod';

export const RequiredBodySchema = z.object({});

export type RequiredBody = z.infer<typeof RequiredBodySchema>;
