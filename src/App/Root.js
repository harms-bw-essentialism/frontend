import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import App from "./App";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Route path="/:filter?" component={App} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
