import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import { Container, Box, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../Common/components/NavBar";

const App = () => {
  const useStyles = makeStyles({
    appContainer: {
      height: "100vh",
      width: "100vw"
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.appContainer}>
      <Box my={2}>
        <NavBar />
        <React.Fragment>
          <Switch>
            {Routes.map(route => (
              <Route exact path={route.path} key={route.path}>
                <route.component classes={{}} />
              </Route>
            ))}
          </Switch>
        </React.Fragment>
      </Box>
    </Card>
  );
};

export default App;
