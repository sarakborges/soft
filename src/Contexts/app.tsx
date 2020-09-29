// Dependencies
import React, { useReducer, createContext, useEffect } from 'react';

// Type
import { Action } from 'Types/action';

// Interface
import { App } from 'Interfaces/app';

// Reducer
import { AppReducer } from 'Reducers/app';

const initialState: App = {
  isAuthed: false,
  token: '',
  user: undefined,
};

const AppContext = createContext<{
  state: App;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
