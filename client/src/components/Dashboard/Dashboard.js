import React from "react";
import MyProfile from "../MyProfile/MyProfile.js"
import "./style.css"
import API from "../../utils/API";
import Studentlist from "../StudentList/StudentList.js";
import Teacherlist from "../TeacherList/TeacherList.js";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <div className="Dashboard">
        <MyProfile />
        <Studentlist />
        <Teacherlist />
        <button onClick={this.disconnect} block bssize="large" type="submit">
          Se déconnecter
        </button>
      </div>
    );
  }
}