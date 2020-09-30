import { Books } from 'Interfaces/booksResults';
import { Action } from 'Types/action';

export const BooksReducer = (state: Books, action: Action) => {
  switch (action.type) {
    case 'GET_BOOKS': {
      return { ...state, ...action.data };
    }

    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.data };
    }

    default: {
      throw new Error(`Unknown type ${action.type} reducer on BooksReducer`);
    }
  }
};
