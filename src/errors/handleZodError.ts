import { ZodError } from 'zod';
import { ApiError } from './ApiError';

export const handleZodError = (error: ZodError) => {
  const messages = error.errors.map(err => `${err.path.join('.')} - ${err.message}`);
  return new ApiError(400, messages.join(', '));
};
