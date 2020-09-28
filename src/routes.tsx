// React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Constants
import ROUTES from 'consts';

// AppContext
import { AppProvider } from 'Contexts/app';

// Components
import ProtectedRoute from 'Components/ProtectedRoute';

// Containers
import Login from 'Containers/Login';
import Home from 'Containers/Home';

const Routes = () => (
  <Router>
    <AppProvider>
      <Switch>
        <ProtectedRoute path={ROUTES.HOME.url} component={Home} exact />

        <Route path={ROUTES.LOGIN.url} component={Login} exact />
      </Switch>
    </AppProvider>
  </Router>
);

export default Routes;
