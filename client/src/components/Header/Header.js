import React from "react";
import { Link } from "react-router-dom"
import API from "../../utils/API";
import "./style.scss"

export default class Header extends React.Component {
    disconnect = () => {
        API.logout();
        window.location = "/";
    };
    render() {
        return (
            <div class="Header wrapper">
                <nav className="Navigation">
                    <ul className="NavigationItems">
                        <li className="NavigationItem Profile active">
                            <Link to="/myprofile">Mon profil</Link>
                        </li>
                        <li className="NavigationItem StudentList">
                            <Link to="/studentlist">Liste P2020</Link>
                        </li>
                    </ul>
                    <a href="#" className="Disconnect" onClick={this.disconnect}>
                        Se déconnecter
                    </a>
                </nav>
            </div>
        );
    }
}
