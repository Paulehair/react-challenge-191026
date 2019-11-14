import React from "react";
import API from "../../utils/API";
import Header from "../../components/Header/Header"
import MyProfile from "../../components/MyProfile/MyProfile"
import StudentList from "../../components/StudentList/StudentList"
import { connect } from "react-redux"

class Dashboard extends React.Component {
  state = {
    elToDisplay: 'profile'
  }

  async componentDidMount() {
      const response = await API.getAllUsers()
      this.onLogin(response)
  }

  onLogin = (response) => {
      const { data } = response.data
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
          skills: data.skills,
          isLoggedIn: true,
          role: data.currentUser[0].role
      })
  }

  handleChange = (elToDisplay) => {
    if(this.state.elToDisplay !== elToDisplay) {
      this.setState({
        elToDisplay
      })
    }
  }

  render() {
    return (
        this.state.users ? (
            <>
                <Header role={this.state.role} handleChange={this.handleChange} />
                <div className="Dashboard wrapper">
                {
                    this.state.role !== 'user' ? <StudentList role={this.state.role} users={this.state.users} />
                    : this.state.elToDisplay === 'profile' ? <MyProfile editable={true} user={this.state.currentUser} /> : <StudentList role={this.state.role} users={this.state.users} />
                }
                </div>
            </>
        ) : <div></div>
      
    );
  }
}

export default Dashboard
