import { App } from 'Interfaces/app';
import { Action } from 'Types/action';

export const AppReducer = (state: App, action: Action) => {
  switch (action.type) {
    case 'DO_LOGIN': {
      window.localStorage.setItem(
        'loginInfo',
        JSON.stringify({
          token: action.data.token,
        }),
      );

      return { ...state, ...action.data };
    }

    case 'DO_LOGOUT': {
      window.localStorage.removeItem('loginInfo');

      return { ...state, token: '', isAuthed: false };
    }

    default: {
      throw new Error(`Unknown type ${action.type} reducer on AppReducer`);
    }
  }
};
