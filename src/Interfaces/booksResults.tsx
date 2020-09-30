import { Book } from 'Interfaces/book';

export interface Books {
  currentPage: number;
  totalPages: number;
  results: Array<Book>;
}
