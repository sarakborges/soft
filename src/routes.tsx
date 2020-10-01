// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Constants
import ROUTES from 'consts';

// Components
import ProtectedRoute from 'Components/ProtectedRoute';

// Containers
import Login from 'Containers/Login';
import Books from 'Containers/Books';

const Routes = () => (
  <Router>
    <Switch>
      <ProtectedRoute path={ROUTES.HOME.url} component={Books} exact />

      <Route path={ROUTES.LOGIN.url} component={Login} exact />
    </Switch>
  </Router>
);

export default Routes;
