import React from "react";
import { Link } from "react-router-dom"
import "./style.css"
import API from "../../utils/API";

export default class Navigation extends React.Component {
    disconnect = () => {
        API.logout();
        window.location = "/";
    };
    render() {
        return (
            <div className="Navigation">
                <ul>
                    <li className="Profile"><Link to="/myprofile">Mon profile</Link></li>
                    <li className="Student"><Link to="/studentlist">Liste des étudiants</Link></li>
                    <li className="Teacher"><Link to="/teacherlist">Liste des intervenants</Link></li>
                </ul>
                <div className="Disconnect" onClick={this.disconnect}>
                    Se déconnecter
                </div>
            </div>
        );
    }
}