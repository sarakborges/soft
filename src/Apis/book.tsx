// Interfaces
import { Book } from 'Interfaces/book';

// Constants
import { booksMock } from 'consts';

const getBooks = async ({
  currentPage,
  pageSize = 5,
  filter,
}: {
  currentPage: number;
  pageSize?: number;
  filter?: string;
}) => {
  const minCount = currentPage * pageSize - pageSize;
  const maxCount = currentPage * pageSize;

  let quantityCount = 0;

  const booksFiltered: Array<Book | undefined> = !!filter
    ? booksMock
        .flat()
        .filter(
          bookItem =>
            !!filter &&
            bookItem.name.toLocaleLowerCase().includes(filter.trim()),
        )
    : booksMock.flat();

  const booksList: {
    totalPages: number;
    results: Array<Book | undefined>;
  } = {
    totalPages: Math.ceil(booksFiltered.length / pageSize),
    results: booksFiltered.filter((bookItem, bookItemIndex) => {
      if (
        quantityCount < maxCount &&
        bookItemIndex >= minCount &&
        bookItemIndex < maxCount
      ) {
        quantityCount++;
        return true;
      } else {
        return false;
      }
    }),
  };

  return booksList || false;
};

const deleteBook = async (id: number) => {
  booksMock.forEach((bookItem, bookItemIndex) => {
    if (bookItem.id === id) {
      delete booksMock[bookItemIndex];
    }
  });
};

const BookAPI = {
  getBooks,
  deleteBook,
};

export default BookAPI;
