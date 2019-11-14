import React, { Component } from "react";
import Login from "./views/Login/Login";
import { Switch, Route } from "react-router"
import Dashboard from "./views/Dashboard/Dashboard";
import ResetPassword from "./views/ResetPassword/ResetPassword.js";
import { PrivateRoute } from "./components/PrivateRoute";
import './index.scss'
import { connect } from "react-redux";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            users: [],
            currentUser: {},
            skills: []
        }
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={(props) => <Login {...props} onLogin={this.onLogin} />} />
                    <Route exact path="/reset-password" component={ResetPassword} />
                    <PrivateRoute path="/dashboard" component={ Dashboard } />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isChecked: state.isChecked,
        users: state.users,
        currentUser: state.currentUser,
        skills: state.skills,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_checked: (isChecked) => {
            dispatch({
                type: 'SET_CHECKED',
                value: isChecked
            })
        },
        set_users: (value) => {
            dispatch({
                type: 'SET_USERS',
                value
            })
        },
        set_currentUser: (value) => {
            dispatch({
                type: 'SET_CURRENTUSER',
                value
            })
        },
        set_skills: (value) => {
            dispatch({
                type: 'SET_SKILLS',
                value
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
