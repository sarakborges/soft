// Dependencies
import React, { useReducer, createContext, useEffect } from 'react';

// Type
import { Action } from 'Types/action';

// Interface
import { Login } from 'Interfaces/login';

// Reducer
import { LoginReducer } from 'Reducers/login';

const initialState: Login = {
  isAuthed: false,
  token: '',
  user: undefined,
};

const LoginContext = createContext<{
  state: Login;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => null,
});

const LoginProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  useEffect(() => {
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
    }
  }, []);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
