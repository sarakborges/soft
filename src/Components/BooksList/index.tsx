// Dependencies
import React, { useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  faHandHolding,
  faPencilAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// Constants
import ROUTES, { pageSize } from 'consts';

// Context
import { BooksListContext } from 'Contexts/booksList';

// APIS
import BookAPI from 'Apis/book';

// Components
import PageTitle from 'Components/PageTitle';
import Pagination from 'Components/Pagination';
import IconButton from 'Components/IconButton';

// Styles
import {
  BooksListWrapper,
  BooksListItem,
  BookTitle,
  BookOptions,
} from './style';

// Component BooksList
const BooksList = () => {
  // Attributes
  const { state, dispatch } = useContext(BooksListContext);
  const { currentPage, totalPages, results, filter } = state;

  // Functions
  const getBooksList = useCallback(
    async (currentPage: number, filter: string, pageSize: number) => {
      const booksListRequest = await BookAPI.getBooks({
        currentPage,
        filter,
        pageSize,
      });

      if (!!booksListRequest) {
        dispatch({
          type: 'GET_BOOKS',
          data: {
            ...booksListRequest,
          },
        });
      }
    },
    [dispatch],
  );

  const deleteItem = (id: number | undefined) => {
    if (!!id) {
      BookAPI.deleteBook(id);

      getBooksList(1, filter, pageSize);

      dispatch({
        type: 'SET_CURRENT_PAGE',
        data: 1,
      });
    }
  };

  const toggleRentItem = (id: number | undefined) => {
    if (!!id) {
      BookAPI.toggleRentBook(id);

      getBooksList(currentPage, filter, pageSize);
    }
  };

  useEffect(
    useCallback(() => {
      dispatch({
        type: 'SET_CURRENT_PAGE',
        data: 1,
      });

      getBooksList(currentPage, filter, pageSize);
    }, [dispatch, getBooksList, currentPage, filter]),
    [filter],
  );

  useEffect(
    useCallback(() => {
      getBooksList(currentPage, filter, pageSize);
    }, [getBooksList, currentPage, filter]),
    [currentPage],
  );

  // DOM
  return results.length > 0 ? (
    <>
      <BooksListWrapper>
        {results.map(bookItem => {
          return (
            <BooksListItem key={`book-item-${bookItem?.id}`}>
              <BookTitle>{bookItem?.name}</BookTitle>

              <BookOptions>
                <IconButton
                  icon={faHandHolding}
                  onClick={() => {
                    toggleRentItem(bookItem?.id);
                  }}
                >
                  {bookItem?.isRented ? 'Devolver' : 'Alugar'}
                </IconButton>

                <IconButton icon={faPencilAlt} disabled={bookItem?.isRented}>
                  <Link to={ROUTES.EDIT.url.replace(':id', `${bookItem?.id}`)}>
                    Editar
                  </Link>
                </IconButton>

                <IconButton
                  icon={faTimes}
                  disabled={bookItem?.isRented}
                  onClick={() => {
                    deleteItem(bookItem?.id);
                  }}
                >
                  Excluir
                </IconButton>
              </BookOptions>
            </BooksListItem>
          );
        })}
      </BooksListWrapper>

      {totalPages > 1 && <Pagination />}
    </>
  ) : (
    <PageTitle>Nenhum livro encontrado.</PageTitle>
  );
};

export default BooksList;
