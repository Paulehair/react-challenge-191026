import React from "react";
import "./style.scss"

export default class CardSkill extends React.Component {

    render() {
        return (
            <div className="CardSkill" data-skillid={this.props.skill_id}>
                <p>{this.props.skill.name}</p>
                <span className="Note">{this.props.skill.level}</span>
            </div>
        );
    }
}
