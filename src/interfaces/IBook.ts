// interface para el modelo de libro
export interface IBook {
  title: string;
  author: string;
  publishedYear?: number;
  genre?: string;
  available: boolean;
}
