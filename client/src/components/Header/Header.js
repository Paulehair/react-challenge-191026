import React from "react";
import Tabs from "../Tabs/Tabs"
import API from "../../utils/API";
import "./style.scss"

const Header = ({ role, handleChange }) => (
    <div className="Header wrapper">
        <nav className={`Navigation ${role}`}>
            <Tabs role={role} handleChange={handleChange} />
            <a href="/" className="Disconnect" onClick={API.logout}>Se déconnecter</a>
        </nav>
    </div>
)

export default Header
