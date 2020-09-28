// React
import React from "react";

// Context
import { AppProvider } from "Contexts/app";

// Components
import Container from "Components/Container";

// Routes
import Routes from "routes";

// Styles
import "reset.css";
import { GlobalStyle } from "./style";

// App
const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />

      <Container>
        <Routes />
      </Container>
    </AppProvider>
  );
};

export default App;
