import type { NextApiResponse } from 'next';
import { APIResponse, NextApiRequestWithBody } from 'types/APIResponse';

import decodeToken from 'utils/back-end/decodeToken';
import methodHandler from 'utils/back-end/methodHandler';
import fetchResponse from 'utils/back-end/fetchResponse';

import createEpisodeInfo from 'utils/back-end/module/episode/createEpisodeInfo';

const handler = (
  req: NextApiRequestWithBody,
  res: NextApiResponse<APIResponse>,
) => {
  const uid = decodeToken(req, res);
  if (!uid) return;

  methodHandler(
    {
      POST: () => fetchResponse(createEpisodeInfo(uid, req.body), res),
    },
    req.method,
    res,
  );
};

export default handler;
