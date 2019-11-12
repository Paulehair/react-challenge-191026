import React from "react";
import "./style.css"
import API from "../../utils/API";
import Navigation from "../Navigation/Navigation.js"

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
      </div>
    );
  }
}