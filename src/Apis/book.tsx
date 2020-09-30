import { Book } from 'Interfaces/book';

const getBooks = async (page: number) => {
  const booksMock: Array<Array<Book>> = [
    [
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
    ],
    [
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
    ],
  ];

  const booksList: {
    totalPages: number;
    results: Array<Book>;
  } = {
    totalPages: 2,
    results: booksMock[page - 1],
  };

  return booksList || false;
};

const BookAPI = {
  getBooks,
};

export default BookAPI;
