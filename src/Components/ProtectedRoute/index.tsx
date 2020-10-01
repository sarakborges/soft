// Dependencies
import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

// Constants
import ROUTES from 'consts';

// Context
import { LoginContext } from 'Contexts/login';
import { BooksListProvider } from 'Contexts/booksList';

// Components
import Button from 'Components/Button';

// Styles
import { LogoutArea, WelcomeMessage } from './style';

const ProtectedRoute = ({
  component,
  path,
  exact,
  ...rest
}: {
  component: FC;
  path: string;
  exact: boolean;
}) => {
  const { state, dispatch } = useContext(LoginContext);
  const { isAuthed, user } = state;

  return isAuthed === true ? (
    <>
      <LogoutArea>
        <WelcomeMessage>Olá, {user?.name || 'usuário'}!</WelcomeMessage>

        <Button
          onClick={() => {
            dispatch({
              type: 'DO_LOGOUT',
              data: null,
            });
          }}
        >
          Logout
        </Button>
      </LogoutArea>

      <BooksListProvider>
        <Route path={path} component={component} exact={exact} {...rest} />
      </BooksListProvider>
    </>
  ) : (
    <Redirect to={ROUTES.LOGIN.url} />
  );
};

export default ProtectedRoute;
