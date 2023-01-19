import { NextApiRequest, NextApiResponse } from 'next';
import { APIResponse, generateAPIResponseError } from '~/types/APIResponse';

const decodeToken = (
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>,
) => {
  const { headers } = req;

  let token = headers.authorization;
  // デコード
  token = 'testuid';

  if (!token) {
    res.status(401).json(generateAPIResponseError('認証が必要です'));

    return false;
  }

  return token;
};

export default decodeToken;
