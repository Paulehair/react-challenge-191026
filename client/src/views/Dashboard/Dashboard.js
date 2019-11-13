import React from "react";
import Header from "../../components/Header/Header"
import MyProfile from "../../components/MyProfile/MyProfile"
import StudentList from "../../components/StudentList/StudentList"

export class Dashboard extends React.Component {
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
    return (
      <>
        <Header handleChange={this.handleChange} />
        <div className="Dashboard wrapper">
          {
            this.state.elToDisplay === 'profile' ? <MyProfile /> : <StudentList />
          }
        </div>
      </>
    );
  }
}