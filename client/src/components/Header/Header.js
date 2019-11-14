import React from "react";
import Tabs from "../Tabs/Tabs"
import API from "../../utils/API";
import "./style.scss"

const Header = (props) => (
    <div className="Header wrapper">
        <nav className="Navigation">
            <Tabs role={props.role} handleChange={props.handleChange} />
            <a href="/" className="Disconnect" onClick={API.logout}>Se déconnecter</a>
        </nav>
    </div>
)

export default Header
