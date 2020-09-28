// React
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Constants
import ROUTES from 'consts';

// Context
import { AppContext } from 'Contexts/app';

// APIS
import UserAPI from 'Apis/user';

// Components

// Styles
import {} from './style';

// Container Login
const Login = () => {
  // Attributes
  const { state, dispatch } = useContext(AppContext);
  const [loginData, setLoginData] = useState<{
    user: string;
    pass: string;
  }>({
    user: '',
    pass: '',
  });

  // Functions
  const doLogin = async (user: string, pass: string) => {
    if (!!user && !!pass) {
      const loginInfo = await UserAPI.getLogin(user, pass);

      if (!!loginInfo) {
        dispatch({
          type: 'DO_LOGIN',
          data: {
            isAuthed: true,
            token: loginInfo.token,
          },
        });
      }
    }
  };

  // DOM
  return (
    <>
      {state.isAuthed && <Redirect to={ROUTES.HOME.url} />}

      {!state.isAuthed && (
        <form
          onSubmit={e => {
            e.preventDefault();
            doLogin(loginData.user, loginData.pass);
          }}
        >
          <input
            type="text"
            name="user"
            onChange={e => {
              e.persist();

              setLoginData(prevState => {
                return {
                  ...prevState,
                  user: e.target.value,
                };
              });
            }}
          />

          <input
            type="password"
            name="pass"
            onChange={e => {
              e.persist();

              setLoginData(prevState => {
                return {
                  ...prevState,
                  pass: e.target.value,
                };
              });
            }}
          />

          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
};

export default Login;
