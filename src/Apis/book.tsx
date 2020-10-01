// Interfaces
import { Book } from 'Interfaces/book';

// Constants
import { booksMock } from 'consts';

const getBooks = async ({
  currentPage,
  pageSize,
  filter,
}: {
  currentPage: number;
  pageSize: number;
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

  const booksOrdered = booksFiltered.sort((a, b) => {
    const aName: string = a?.name.toLocaleLowerCase()!;
    const bName: string = b?.name.toLocaleLowerCase()!;

    if (aName < bName) {
      return -1;
    } else {
      return 1;
    }
  });

  const booksList: {
    totalPages: number;
    results: Array<Book | undefined>;
  } = {
    totalPages: Math.ceil(booksOrdered.length / pageSize),
    results: booksOrdered.filter((bookItem, bookItemIndex) => {
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

const getBook = async (id: string) => {
  return booksMock.flat().find(bookItem => bookItem.id === parseInt(id));
};

const createBook = async (bookInfo: Book) => {
  booksMock.push({
    ...bookInfo,
    id: booksMock.flat()[booksMock.flat().length - 1].id + 1,
  });
};

const editBook = async (id: string, bookInfo: Book) => {
  const bookIndex = booksMock
    .flat()
    .findIndex(bookItem => bookItem.id === parseInt(id));

  if (!!bookIndex) {
    booksMock[bookIndex] = { ...bookInfo };
  }
};

const deleteBook = async (id: number) => {
  booksMock.forEach((bookItem, bookItemIndex) => {
    if (bookItem.id === id) {
      delete booksMock[bookItemIndex];
    }
  });
};

const toggleRentBook = async (id: number) => {
  const book = booksMock.flat().find(bookItem => bookItem.id === id);

  if (!!book) {
    book.isRented = !book.isRented;
  }
};

const BookAPI = {
  getBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
  toggleRentBook,
};

export default BookAPI;
