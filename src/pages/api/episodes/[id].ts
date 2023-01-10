import type { NextApiResponse } from 'next';
import { APIResponse, NextApiRequestWithBody } from 'types/APIResponse';

import decodeToken from 'utils/back-end/decodeToken';
import methodHandler from 'utils/back-end/methodHandler';
import fetchResponse from 'utils/back-end/fetchResponse';
import getEpisodeById from 'utils/back-end/module/episode/getEpisodeById';
import deleteEpisodeById from '~/utils/back-end/module/episode/deleteEpisodeById';
import updateEpisodeById from '~/utils/back-end/module/episode/updateEpisodeById';

const handler = (
  req: NextApiRequestWithBody,
  res: NextApiResponse<APIResponse>,
) => {
  const uid = decodeToken(req, res);
  if (!uid) return;

  const { id } = req.query;

  methodHandler(
    {
      GET: () => fetchResponse(getEpisodeById(uid, Number(id)), res),
      PUT: () =>
        fetchResponse(updateEpisodeById(uid, Number(id), req.body), res),
      DELETE: () => fetchResponse(deleteEpisodeById(uid, Number(id)), res),
    },
    req.method,
    res,
  );
};

export default handler;
