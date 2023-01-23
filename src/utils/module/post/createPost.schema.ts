import { z } from 'zod';

export const RequiredBodySchema = z.object({
  token: z.string(),
  title: z
    .string()
    .min(1, 'タイトルを入力してください')
    .max(34, 'タイトルは34文字までにしてください'),
  regex: z
    .string()
    .min(1, '正規表現を入力してください')
    .max(200, '正規表現は200文字までにしてください'),
});

export type RequiredBody = z.infer<typeof RequiredBodySchema>;

export const CreatePostResponse = z.object({
  id: z.number(),
});
