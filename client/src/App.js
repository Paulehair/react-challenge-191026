import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import  Profile  from "./components/MyProfile/MyProfile.js";
import  Student  from "./components/StudentList/StudentList.js";
// import  Teacher  from "./components/teacherlist/TeacherList.js";
import { PrivateRoute } from "./components/PrivateRoute";
import './reset.css'
import './index.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/myprofile" component={Profile} />
            <Route exact path="/studentlist" component={Student} />
            {/* <Route exact path="/teacherlist" component={Teacher} /> */}
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}
