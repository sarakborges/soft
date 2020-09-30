// Dependencies
import React, { useReducer, createContext } from 'react';

// Type
import { Action } from 'Types/action';

// Interface
import { Books } from 'Interfaces/booksResults';

// Reducer
import { BooksReducer } from 'Reducers/books';

const initialState: Books = {
  currentPage: 1,
  totalPages: 1,
  results: [],
};

const BooksContext = createContext<{
  state: Books;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => null,
});

const BooksProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, BooksProvider };
