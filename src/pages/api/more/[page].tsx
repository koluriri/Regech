import type { NextApiResponse } from 'next';
import { APIResponse, NextApiRequestWithBody } from '~/types/APIResponse';

import methodHandler from '~/utils/methodHandler';
import fetchResponse from '~/utils/fetchResponse';
import getMorePosts from '~/utils/module/post/getMorePosts';

const handler = (
  req: NextApiRequestWithBody,
  res: NextApiResponse<APIResponse>,
) => {
  const { page } = req.query;

  methodHandler(
    {
      GET: () => fetchResponse(getMorePosts(Number(page)), res),
    },
    req.method,
    res,
  );
};

export default handler;
