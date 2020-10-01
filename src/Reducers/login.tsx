import { Login } from 'Interfaces/login';
import { Action } from 'Types/action';

export const LoginReducer = (state: Login, action: Action) => {
  switch (action.type) {
    case 'DO_LOGIN': {
      window.localStorage.setItem(
        'loginInfo',
        JSON.stringify({
          token: action.data.token,
          user: action.data.user,
        }),
      );

      return { ...state, ...action.data };
    }

    case 'DO_LOGOUT': {
      window.localStorage.removeItem('loginInfo');

      return { ...state, token: '', isAuthed: false };
    }

    default: {
      throw new Error(`Unknown type ${action.type} reducer on LoginReducer`);
    }
  }
};
