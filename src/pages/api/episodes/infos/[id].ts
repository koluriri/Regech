import type { NextApiResponse } from 'next';
import { APIResponse, NextApiRequestWithBody } from 'types/APIResponse';

import decodeToken from 'utils/back-end/decodeToken';
import methodHandler from 'utils/back-end/methodHandler';
import fetchResponse from 'utils/back-end/fetchResponse';

import updateEpisodeInfo from 'utils/back-end/module/episode/updateEpisodeInfo';

const handler = (
  req: NextApiRequestWithBody,
  res: NextApiResponse<APIResponse>,
) => {
  const uid = decodeToken(req, res);
  if (!uid) return;

  const { id } = req.query;

  methodHandler(
    {
      PUT: () =>
        fetchResponse(updateEpisodeInfo(uid, Number(id), req.body), res),
    },
    req.method,
    res,
  );
};

export default handler;
