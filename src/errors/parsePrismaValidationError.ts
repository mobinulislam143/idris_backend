// import { Prisma } from '@prisma/client';
// import { ApiError } from './ApiError';

// export const handlePrismaError = (error: any) => {
//   if (error instanceof Prisma.PrismaClientKnownRequestError) {
//     // Example: Unique constraint failed
//     if (error.code === 'P2002') {
//       const target = (error.meta?.target as string[])?.join(', ') || 'field';
//       return new ApiError(409, `Duplicate value for: ${target}`);
//     }
//     if (error.code === 'P2025') {
//       return new ApiError(404, 'Record not found');
//     }
//   }

//   // Fallback
//   return new ApiError(500, 'Database error');
// };
