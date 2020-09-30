import { BooksList } from 'Interfaces/booksList';
import { Action } from 'Types/action';

export const BooksListReducer = (state: BooksList, action: Action) => {
  switch (action.type) {
    case 'GET_BOOKS': {
      return { ...state, ...action.data };
    }

    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.data };
    }

    default: {
      throw new Error(
        `Unknown type ${action.type} reducer on BooksListReducer`,
      );
    }
  }
};
