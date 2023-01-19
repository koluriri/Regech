import type { NextApiResponse } from 'next';
import { APIResponse, NextApiRequestWithBody } from '~/types/APIResponse';

import methodHandler from '~/utils/methodHandler';
import fetchResponse from '~/utils/fetchResponse';
import updatePlayed from '~/utils/module/post/updatePlayed';

const handler = (
  req: NextApiRequestWithBody,
  res: NextApiResponse<APIResponse>,
) => {
  const { id } = req.query;

  methodHandler(
    {
      PUT: () => fetchResponse(updatePlayed(Number(id), req.body), res),
    },
    req.method,
    res,
  );
};

export default handler;
