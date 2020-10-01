// Dependencies
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Constants

// Context
import { BooksListProvider, BooksListContext } from 'Contexts/booksList';
import Field from 'Components/Field';

// APIS
import BookAPI from 'Apis/book';

// Components
import Pagination from 'Components/Pagination';

// Styles
import {
  BooksListStyle,
  BooksListTitle,
  BooksListFilter,
  BooksListWrapper,
  BooksListItem,
  BookTitle,
} from './style';

// Container BooksList
const BooksList = () => {
  // Attributes
  const [hasRequested, setHasRequested] = useState<boolean>(false);
  const { state, dispatch } = useContext(BooksListContext);
  const { currentPage, totalPages, results, filter } = state;

  // Functions
  const getBooksList = useCallback(
    async (currentPage: number, filter: string) => {
      const booksListRequest = await BookAPI.getBooks({
        currentPage,
        filter,
        pageSize: 5,
      });

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

  const setFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    dispatch({
      type: 'SET_FILTER',
      data: e.target.value.toLocaleLowerCase(),
    });
  };

  useEffect(
    useCallback(() => {
      dispatch({
        type: 'SET_CURRENT_PAGE',
        data: 1,
      });

      getBooksList(currentPage, filter);
    }, [dispatch, getBooksList, currentPage, filter]),
    [filter],
  );

  useEffect(
    useCallback(() => {
      getBooksList(currentPage, filter);
    }, [getBooksList, currentPage, filter]),
    [currentPage],
  );

  // DOM
  return (
    <BooksListStyle>
      <BooksListTitle>Encontre seu livro favorito aqui!</BooksListTitle>

      <BooksListFilter>
        <Field
          placeholder="Você pode filtrar pelo título do livro"
          value={filter}
          name="filter"
          label={faSearch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e)}
        />
      </BooksListFilter>

      {results.length > 0 && (
        <>
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
