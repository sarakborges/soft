import { Book } from 'Interfaces/book';

const getBooks = async (page: number) => {
  const booksList: Array<Array<Book>> = [
    [
      {
        id: 1,
        name: 'Crônicas de Gelo e Fogo',
        isRented: false,
      },

      {
        id: 2,
        name: 'Harry Potter e a Ordem da Fênix',
        isRented: false,
      },
    ],
  ];

  return booksList[page - 1] || false;
};

const BookAPI = {
  getBooks,
};

export default BookAPI;
