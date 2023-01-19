import type { NextApiResponse } from 'next';
import { APIResponse, NextApiRequestWithBody } from '~/types/APIResponse';

import methodHandler from '~/utils/methodHandler';
import fetchResponse from '~/utils/fetchResponse';
import createUser from '~/utils/module/user/createUser';

const handler = (
  req: NextApiRequestWithBody,
  res: NextApiResponse<APIResponse>,
) => {
  methodHandler(
    {
      POST: () => fetchResponse(createUser(req.body), res),
    },
    req.method,
    res,
  );
};

export default handler;
