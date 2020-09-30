// Dependencies
import React, { useContext } from 'react';

// Contexts
import { BooksListContext } from 'Contexts/booksList';

// Components
import Button from 'Components/Button';

// Styles
import { PaginationWrapper, PaginationItem } from './style';

// Component Pagination
const PageItem = ({ item, children }: { item: number; children: any }) => {
  // Attributes
  const { state, dispatch } = useContext(BooksListContext);
  const { currentPage } = state;

  const isCurrent = currentPage === item;

  // DOM
  return (
    <PaginationItem currentItem={!!isCurrent}>
      <Button
        square
        disabled={!!isCurrent}
        onClick={() => {
          dispatch({
            type: 'SET_CURRENT_PAGE',
            data: item,
          });
        }}
      >
        {children}
      </Button>
    </PaginationItem>
  );
};

const Pagination = () => {
  // Attributes
  const { state } = useContext(BooksListContext);
  const { currentPage, totalPages } = state;

  // DOM
  return (
    <PaginationWrapper className="pagination">
      {currentPage > 1 && <PageItem item={1}>1</PageItem>}

      {currentPage - 1 > 1 && (
        <PageItem item={currentPage - 1}>{currentPage - 1}</PageItem>
      )}

      <PageItem item={currentPage}>{currentPage}</PageItem>

      {currentPage + 1 < totalPages && (
        <PageItem item={currentPage + 1}>{currentPage + 1}</PageItem>
      )}

      {currentPage < totalPages && (
        <PageItem item={totalPages}>{totalPages}</PageItem>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
