import React from "react";
import API from "../../utils/API";
import Navigation from "../../components/Navigation/Navigation.js"
import MyProfile from "../../components/MyProfile/MyProfile.js"

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <div className="Dashboard">
        <div className="Header">
          <Navigation />
        </div>

        { /* faire un tab qui appelle les composants "my profile" et "stundent list" */ }
          <MyProfile />
      </div>
    );
  }
}