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
import BookDetails from 'Containers/BookDetails';
import BookCRUD from 'Containers/BookCRUD';

const Routes = () => (
  <Router>
    <Switch>
      <ProtectedRoute path={ROUTES.HOME.url} component={Books} exact />
      <ProtectedRoute path={ROUTES.DETAILS.url} component={BookDetails} exact />
      <ProtectedRoute path={ROUTES.CREATE.url} component={BookCRUD} exact />
      <ProtectedRoute path={ROUTES.EDIT.url} component={BookCRUD} exact />

      <Route path={ROUTES.LOGIN.url} component={Login} exact />
    </Switch>
  </Router>
);

export default Routes;
