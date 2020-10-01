import { Book } from 'Interfaces/book';

const getBooks = async (page: number, filter?: string) => {
  const booksMock: Array<Book> = [
    {
      id: 1,
      name: 'Harry Potter e a Pedra Filosofal',
      isRented: false,
    },

    {
      id: 2,
      name: 'Harry Potter e a Câmara Secreta',
      isRented: false,
    },

    {
      id: 3,
      name: 'Harry Potter e o Prisioneiro de Azkaban',
      isRented: false,
    },

    {
      id: 4,
      name: 'Harry Potter e o Cálice de Fogo',
      isRented: false,
    },

    {
      id: 5,
      name: 'Harry Potter e a Ordem da Fênix',
      isRented: false,
    },

    {
      id: 6,
      name: 'Harry Potter e o Príncipe Mestiço',
      isRented: false,
    },

    {
      id: 7,
      name: 'Harry Potter e as Relíquias da Morte',
      isRented: false,
    },

    {
      id: 8,
      name: 'Crônicas de Gelo e Fogo',
      isRented: false,
    },

    {
      id: 9,
      name: 'A Batalha do Apocalipse',
      isRented: false,
    },

    {
      id: 10,
      name: 'Hobbit',
      isRented: false,
    },
  ];

  const booksFiltered: Array<Book | undefined> = !!filter
    ? booksMock.filter(bookItem => !!filter && bookItem.name.includes(filter))
    : booksMock;

  const finalBooks: Array<Book | undefined> = booksFiltered.filter(
    (bookItem, bookItemKey) =>
      bookItemKey >= page * 5 - 5 && bookItemKey < page * 5,
  );

  const booksList: {
    totalPages: number;
    results: Array<Book | undefined>;
  } = {
    totalPages: Math.ceil(booksFiltered.length / 5),
    results: finalBooks,
  };

  return booksList || false;
};

const BookAPI = {
  getBooks,
};

export default BookAPI;
