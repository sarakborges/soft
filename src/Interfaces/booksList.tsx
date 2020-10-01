import { Book } from 'Interfaces/book';

export interface BooksList {
  currentPage: number;
  totalPages: number;
  results: Array<Book | undefined>;
  filter: string;
}
