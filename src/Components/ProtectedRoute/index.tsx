// React
import React, { FC, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

// Constants
import ROUTES from 'consts';

// Context
import { AppContext } from 'Contexts/app';

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
  const { state, dispatch } = useContext(AppContext);
  const { isAuthed } = state;

  return isAuthed === true ? (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'DO_LOGOUT',
            data: null,
          });
        }}
      >
        Logout
      </button>

      <Route path={path} component={component} exact={exact} {...rest} />
    </>
  ) : (
    <Redirect to={ROUTES.LOGIN.url} />
  );
};

export default ProtectedRoute;
