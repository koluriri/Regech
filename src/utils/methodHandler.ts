import { NextApiResponse } from 'next';
import errorHandler from './errorHandler';

const methodHandler = (
  components: {
    GET?: () => any;
    POST?: () => any;
    PUT?: () => any;
    DELETE?: () => any;
  },
  method: string | undefined,
  res: NextApiResponse,
) => {
  switch (method) {
    case 'GET':
      if (components.GET) components.GET();
      if (!components.GET) errorHandler(res, 501);
      break;

    case 'POST':
      if (components.POST) components.POST();
      if (!components.POST) errorHandler(res, 501);
      break;

    case 'PUT':
      if (components.PUT) components.PUT();
      if (!components.PUT) errorHandler(res, 501);
      break;

    case 'DELETE':
      if (components.DELETE) components.DELETE();
      if (!components.DELETE) errorHandler(res, 501);
      break;

    default:
      errorHandler(res, 501);
      break;
  }
};

export default methodHandler;
