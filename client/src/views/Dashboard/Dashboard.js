import React from "react";
import API from "../../utils/API";
import Header from "../../components/Header/Header.js"
import MyProfile from "../../components/MyProfile/MyProfile.js"

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <>
        <Header />
        <div className="Dashboard wrapper">
          { /* faire un tab qui appelle les composants "my profile" et "stundent list" */ }
            <MyProfile />
            { /* Students-list */ }
        </div>
      </>
    );
  }
}