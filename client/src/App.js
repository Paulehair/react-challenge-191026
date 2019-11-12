import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./views/Login/Login";
import { Signup } from "./views/Signup/Signup";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
import './reset.css'
import './index.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </>
      </div>
    );
  }
}
