import { NextApiResponse } from 'next';
import { generateAPIResponseError } from '~/types/APIResponse';

const errorHandler = (res: NextApiResponse, code: number) => {
  switch (code) {
    case 401:
      res.status(401).json(generateAPIResponseError('認証が必要です'));
      break;

    case 500:
      res
        .status(500)
        .json(generateAPIResponseError('データベースに接続できません'));
      break;

    case 501:
      res.status(501).json(generateAPIResponseError('APIのメソッドが不正です'));
      break;

    default:
      break;
  }
};

export default errorHandler;
