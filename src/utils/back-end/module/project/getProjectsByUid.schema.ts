import { z } from 'zod';
import { projectTypeSchema } from '~/types/types';

export const getProjectsByUidReturnObjSchema = z.object({
  id: z.number(),
  domain: z.string(),
  name: z.string(),
  type: projectTypeSchema,
  prefix: z.string(),
  logoWhite: z.string().optional().nullable(),
  keyVisual: z.string(),
  icon: z.string().optional().nullable(),
  users: z.array(
    z.object({
      status: z.string(),
      user: z.object({
        icon: z.string().optional().nullable(),
        displayName: z.string(),
        screenName: z.string(),
      }),
    }),
  ),
});

export type getProjectsByUidReturnObj = z.infer<
  typeof getProjectsByUidReturnObjSchema
>;

export const getProjectsByUidReturnSchema = z.array(
  getProjectsByUidReturnObjSchema,
);

export type getProjectsByUidReturn = z.infer<
  typeof getProjectsByUidReturnSchema
>;
