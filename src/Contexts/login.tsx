// Dependencies
import React, {
  useReducer,
  createContext,
  useEffect,
  useCallback,
} from 'react';

// Type
import { Action } from 'Types/action';

// Interface
import { Login } from 'Interfaces/login';

// Reducer
import { LoginReducer } from 'Reducers/login';

// InitialState
const initialState: Login = {
  isAuthed: undefined,
  token: '',
  user: undefined,
};

// Create Context
const LoginContext = createContext<{
  state: Login;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider
const LoginProvider = ({ children }: any) => {
  // Attributes
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  useEffect(
    useCallback(() => {
      const localLoginInfo = window.localStorage.getItem('loginInfo');

      if (!!localLoginInfo) {
        const loginInfo = JSON.parse(localLoginInfo);

        dispatch({
          type: 'DO_LOGIN',
          data: {
            isAuthed: true,
            token: loginInfo.token,
            user: loginInfo.user,
          },
        });
      } else {
        dispatch({
          type: 'DO_LOGIN',
          data: {
            ...state,
            isAuthed: false,
          },
        });
      }
    }, [state]),
    [],
  );

  // DOM
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
