import React from "react";
import { Link } from "react-router-dom"
import API from "../../utils/API";
import "./style.scss"

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
                    <li className="Student"><Link to="/studentlist">Liste P2020</Link></li>
                </ul>
                <div className="Disconnect" onClick={this.disconnect}>
                    Se déconnecter
                </div>
            </div>
        );
    }
}
