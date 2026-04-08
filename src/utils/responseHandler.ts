import { Response } from 'express';

// utilidad para estandarizar las respuestas de la api
export const sendResponse = (res: Response, statusCode: number, message: string, data: any = null) => {
  return res.status(statusCode).json({
    status: statusCode < 400 ? 'success' : 'error',
    message,
    data
  });
};
