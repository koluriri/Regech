import type { NextApiResponse } from 'next';
import { APIResponse, NextApiRequestWithBody } from '~/types/APIResponse';

import methodHandler from '~/utils/methodHandler';
import fetchResponse from '~/utils/fetchResponse';
import deletePost from '~/utils/module/post/deletePost';

const handler = (
  req: NextApiRequestWithBody,
  res: NextApiResponse<APIResponse>,
) => {
  methodHandler(
    {
      POST: () => fetchResponse(deletePost(req.body), res),
    },
    req.method,
    res,
  );
};

export default handler;
