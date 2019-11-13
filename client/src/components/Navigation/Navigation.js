import React from "react";
import { Link } from "react-router-dom"
import API from "../../utils/API";
import "./style.scss"
import MyProfile from "../MyProfile/MyProfile";
import Studentlist from "../StudentList/StudentList";

class Tabs extends React.Component {
    state = {
        selected: this.props.selected
    }
    // Le router doit avoir une route
    disconnect = () => {
        API.logout();
        window.location = "/";
    };

    handleChange(index) {
        this.setState({ selected: index })
    }
    render() {
        return (
            <div>
                <div className="Navigation" style={{ display: "flex", justifyContent: "space-between" }}>
                    <ul className="inline">
                        {this.props.children.map((elem, index) => {
                            let style = index == this.state.selected ? 'selected' : '';
                            return <li className={style} key={index} onClick={this.handleChange.bind(this, index)}>{elem.props.title}</li>
                        })}
                    </ul>
                    <div className="Disconnect" onClick={this.disconnect}>Se déconnecter</div>
                </div>
                <div className="tab">{this.props.children[this.state.selected]}</div>
            </div>
        )
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <Tabs selected={0}>
                <MyProfile title="Mon profil">This is the first panel</MyProfile>
                <Studentlist title="Liste des étudiants">This is the second panel</Studentlist>
            </Tabs>
        )
    }
}
export default Navigation