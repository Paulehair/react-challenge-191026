import React from "react";
import "./style.scss"

export default class CardSkill extends React.Component {

    render() {
        return (
            <div className="CardSkill">
                <p>Programmation côté client</p>
                <span className="Note">C</span>
            </div>
        );
    }
}