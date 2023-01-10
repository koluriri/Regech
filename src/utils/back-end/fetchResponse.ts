import { NextApiResponse } from 'next';
// import prisma from 'utils/back-end/prisma';
import {
  generateAPIResponseError,
  generateAPIResponseSuccess,
  JSON,
} from 'types/APIResponse';

const fetchResponse = (func: Promise<any>, res: NextApiResponse) => {
  func
    .then((returnValue: JSON) => {
      res.status(200).json(generateAPIResponseSuccess(returnValue));
      // await prisma.$disconnect();
    })
    .catch((error: Error) => {
      let msg = error.message;
      if (msg.includes('Unique')) msg = '既に存在しています';
      if (msg.includes('prisma')) msg = 'データベースエラー';
      res.status(500).json(generateAPIResponseError(msg));
      // await prisma.$disconnect();
    });
};

export default fetchResponse;
