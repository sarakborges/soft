// Dependencies
import React, { useContext } from 'react';

// Contexts
import { BooksContext } from 'Contexts/books';

// Styles
import {} from './style';

// Component Pagination
const PageItem = ({ item, children }: { item: number; children: any }) => {
  // Attributes
  const { dispatch } = useContext(BooksContext);

  // DOM
  return (
    <li
      onClick={() => {
        dispatch({
          type: 'SET_CURRENT_PAGE',
          data: item,
        });
      }}
      className="page_item"
    >
      {children}
    </li>
  );
};

const Pagination = () => {
  // Attributes
  const { state } = useContext(BooksContext);
  const { currentPage, totalPages } = state;

  // DOM
  return (
    <ul className="pagination">
      {currentPage > 1 && <PageItem item={1}>1</PageItem>}

      {currentPage - 1 > 1 && (
        <PageItem item={currentPage - 1}>{currentPage - 1}</PageItem>
      )}

      <li className="page_item">{currentPage}</li>

      {currentPage + 1 < totalPages && (
        <PageItem item={currentPage + 1}>{currentPage + 1}</PageItem>
      )}

      {currentPage < totalPages && (
        <PageItem item={totalPages}>{totalPages}</PageItem>
      )}
    </ul>
  );
};

export default Pagination;
