import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {Routes.map(route => (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
