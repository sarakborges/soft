// Dependencies
import React, { useEffect, useState } from 'react';

// Constants

// Context

// APIS
import BookAPI from 'Apis/book';

// Interfaces
import { Book } from 'Interfaces/book';

// Components

// Styles
import {
  BooksListStyle,
  BooksListTitle,
  BooksListWrapper,
  BooksListItem,
  BookTitle,
} from './style';

// Container BooksList
const BooksList = () => {
  // Attributes
  const [booksList, setBooksList] = useState<Array<Book>>([]);
  const [hasRequested, sethasRequested] = useState<boolean>(false);

  // Functions
  const getBooksList = async (page: number) => {
    const booksListRequest = await BookAPI.getBooks(page);

    if (!!booksListRequest) {
      setBooksList(() => booksListRequest);
    }

    sethasRequested(() => true);
  };

  useEffect(() => {
    getBooksList(1);
  }, []);

  // DOM
  return (
    <BooksListStyle>
      {booksList.length > 0 && (
        <>
          <BooksListTitle>Encontre seu livro favorito aqui!</BooksListTitle>

          <BooksListWrapper>
            {booksList.map(bookItem => {
              return (
                <BooksListItem key={`book-item-${bookItem.id}`}>
                  <BookTitle>{bookItem.name}</BookTitle>
                </BooksListItem>
              );
            })}
          </BooksListWrapper>
        </>
      )}

      {booksList.length < 1 && hasRequested && (
        <BooksListTitle>Nenhum livro encontrado.</BooksListTitle>
      )}

      {booksList.length < 1 && !hasRequested && (
        <BooksListTitle>Aguarde enquanto buscamos os livros!</BooksListTitle>
      )}
    </BooksListStyle>
  );
};

export default BooksList;
