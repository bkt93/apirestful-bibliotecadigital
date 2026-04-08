import { Request, Response } from 'express';
import { Book } from '../models/Book.js';
import { sendResponse } from '../utils/responseHandler.js';

// obtengo todos los libros de la base de datos
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    sendResponse(res, 200, 'libros obtenidos correctamente', books);
  } catch (error) {
    sendResponse(res, 500, 'error al obtener los libros', error);
  }
};
