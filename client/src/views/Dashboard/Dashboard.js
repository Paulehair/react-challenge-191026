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


  handleChange = (elToDisplay) => {
    if(this.state.elToDisplay !== elToDisplay) {
      this.setState({
        elToDisplay
      })
    }
  }

  render() {
      const { users, currentUser, role } = this.props
    return (
        users ? (
            <>
                <Header role={role} handleChange={this.handleChange} />
                <div className="Dashboard wrapper">
                {
                    role !== 'user' ? <StudentList updateUser={this.props.updateUser} role={role} users={users} />
                    : this.state.elToDisplay === 'profile' ? <MyProfile role={role} editable={true} updateUser={this.props.updateUser} user={currentUser} /> : <StudentList role={role} users={users} />
                }
                </div>
            </>
        ) : <div></div>
      
    );
  }
}

export default Dashboard
