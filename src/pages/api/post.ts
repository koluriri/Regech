import type { NextApiResponse } from 'next';
import { APIResponse, NextApiRequestWithBody } from '~/types/APIResponse';

import methodHandler from '~/utils/methodHandler';
import fetchResponse from '~/utils/fetchResponse';
import createPost from '~/utils/module/post/createPost';

const handler = (
  req: NextApiRequestWithBody,
  res: NextApiResponse<APIResponse>,
) => {
  methodHandler(
    {
      POST: () => fetchResponse(createPost(req.body), res),
    },
    req.method,
    res,
  );
};

export default handler;
