import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import Myprofile from "./components/MyProfile/MyProfile";
import { PrivateRoute } from "./components/PrivateRoute";
import './index.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}
