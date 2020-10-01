// Dependencies
import React, { useCallback, useContext, useEffect, useState } from 'react';

// Constants

// Context
import { BooksListProvider, BooksListContext } from 'Contexts/booksList';

// APIS
import BookAPI from 'Apis/book';

// Components
import Pagination from 'Components/Pagination';

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
  const [hasRequested, setHasRequested] = useState<boolean>(false);
  const { state, dispatch } = useContext(BooksListContext);
  const { currentPage, totalPages, results } = state;

  // Functions
  const getBooksList = useCallback(
    async (page: number) => {
      const booksListRequest = await BookAPI.getBooks(page);

      if (!!booksListRequest) {
        dispatch({
          type: 'GET_BOOKS',
          data: {
            ...booksListRequest,
          },
        });
      }

      setHasRequested(() => true);
    },
    [dispatch],
  );

  useEffect(() => {
    getBooksList(currentPage);
  }, [currentPage, getBooksList]);

  // DOM
  return (
    <BooksListStyle>
      {results.length > 0 && (
        <>
          <BooksListTitle>Encontre seu livro favorito aqui!</BooksListTitle>

          <BooksListWrapper>
            {results.map(bookItem => {
              return (
                <BooksListItem key={`book-item-${bookItem?.id}`}>
                  <BookTitle>{bookItem?.name}</BookTitle>
                </BooksListItem>
              );
            })}
          </BooksListWrapper>

          {totalPages > 1 && <Pagination />}
        </>
      )}

      {results.length < 1 && hasRequested && (
        <BooksListTitle>Nenhum livro encontrado.</BooksListTitle>
      )}

      {results.length < 1 && !hasRequested && (
        <BooksListTitle>Aguarde enquanto buscamos os livros!</BooksListTitle>
      )}
    </BooksListStyle>
  );
};

const BookList = () => {
  return (
    <BooksListProvider>
      <BooksList />
    </BooksListProvider>
  );
};

export default BookList;
