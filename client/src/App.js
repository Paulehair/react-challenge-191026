import React, { Component } from "react"
import API from "./utils/API"
import Login from "./views/Login/Login"
import Dashboard from "./views/Dashboard/Dashboard"
import './index.scss'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    onLogin = async() => {
        const { data: { data } } = await API.getAllUsers()
        data.users.forEach(user => {
            user.skills.forEach(userSkill => {
                let relevantSkill = data.skills.find(skill => skill._id === userSkill.skill_id)
                userSkill.name = relevantSkill.name
            })
        })

        data.currentUser[0].skills.forEach(userSkill => {
            let relevantSkill = data.skills.find(skill => skill._id === userSkill.skill_id)
            userSkill.name = relevantSkill.name
        })

        this.setState({
            users: data.users,
            currentUser: data.currentUser[0],
            isLoggedIn: true
        })
    }

    updateUser = async(id, body) => {
        await API.updateUser(id, body)
        this.onLogin()
    }

    render() {
        const { users, currentUser } = this.state
        return (
            <div className="App">
            {
                !this.state.isLoggedIn ? <Login onLogin={this.onLogin} />
                : <Dashboard users={users} currentUser={currentUser} role={currentUser.role} updateUser={this.updateUser} />
            }
            </div>
        );
    }
}

export default App
