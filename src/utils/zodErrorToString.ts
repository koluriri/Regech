import { ZodError } from 'zod';

const zodErrorToString = (error: ZodError) => error.issues[0].message;

export default zodErrorToString;
