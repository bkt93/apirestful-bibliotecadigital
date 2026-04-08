import { Request, Response } from 'express';
import { Book } from '../models/Book.js';
import { sendResponse } from '../utils/responseHandler.js';

// obtengo todos los libros de la base de datos

/*
aca como posibilidad de mejora podría añadir filtros
desde backend para que no me traiga todos los libros
por ejemplo por genero, año, etc
esto me permitiría administrar mejor los recursos contratados
o al menos optimizar la respuesta de la api
*/
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    sendResponse(res, 200, 'libros obtenidos correctamente', books);
  } catch (error) {
    sendResponse(res, 500, 'error al obtener los libros', error);
  }
};

// obtengo un libro especifico por su id
// podría hacer la llamada desde el buscador
export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return sendResponse(res, 404, 'libro no encontrado');
    }

    sendResponse(res, 200, 'libro obtenido correctamente', book);
  } catch (error) {
    sendResponse(res, 500, 'error al obtener el libro', error);
  }
};

// creo un nuevo libro en la coleccion
export const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    sendResponse(res, 201, 'libro creado correctamente', newBook);
  } catch (error: any) {
    // manejo el error de titulo duplicado (unique)
    if (error.code === 11000) {
      return sendResponse(res, 400, 'el titulo del libro ya existe');
    }
    sendResponse(res, 400, 'error al crear el libro', error.message);
  }
};

// actualizo un libro existente (update)
// recupero el id del libro a actualizar y esto me permite
// actualizar un solo elemento
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedBook) {
      return sendResponse(res, 404, 'no se encontro el libro para actualizar');
    }

    sendResponse(res, 200, 'libro actualizado correctamente', updatedBook);
  } catch (error: any) {
    sendResponse(res, 400, 'error al actualizar el libro', error.message);
  }
};

// elimino un libro por su id
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return sendResponse(res, 404, 'no se encontro el libro para eliminar');
    }

    sendResponse(res, 200, 'libro eliminado correctamente');
  } catch (error) {
    sendResponse(res, 500, 'error al eliminar el libro', error);
  }
};
