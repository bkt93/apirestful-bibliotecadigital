import { Schema, model } from 'mongoose';
import { IBook } from '../interfaces/IBook.js';

// book schema de mongoose
const bookSchema = new Schema<IBook>({

  title: {
    type: String,
    required: [true, 'El titulo es obligatorio'],
    unique: true
  },

  author: {
    type: String,
    required: [true, 'El autor es obligatorio']
  },

  publishedYear: {
    type: Number
  },

  genre: {
    type: String
  },

  available: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

// exporto el modelo
export const Book = model<IBook>('Book', bookSchema);
