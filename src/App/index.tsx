// Dependencies
import React from 'react';

// Context
import { LoginProvider } from 'Contexts/login';

// Components
import Container from 'Components/Container';

// Routes
import Routes from 'routes';

// Styles
import 'reset.css';
import { GlobalStyle } from './style';

// App
const App = () => {
  return (
    <LoginProvider>
      <GlobalStyle />

      <Container>
        <Routes />
      </Container>
    </LoginProvider>
  );
};

export default App;
