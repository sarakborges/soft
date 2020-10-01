// Dependencies
import React, { useReducer, createContext } from 'react';

// Type
import { Action } from 'Types/action';

// Interface
import { BooksList } from 'Interfaces/booksList';

// Reducer
import { BooksListReducer } from 'Reducers/booksList';

const initialState: BooksList = {
  currentPage: 1,
  totalPages: 1,
  results: [],
  filter: '',
};

const BooksListContext = createContext<{
  state: BooksList;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => null,
});

const BooksListProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(BooksListReducer, initialState);

  return (
    <BooksListContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksListContext.Provider>
  );
};

export { BooksListContext, BooksListProvider };
