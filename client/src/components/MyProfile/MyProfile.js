import React from "react"
import CardProfile from "../CardProfile/CardProfile.js"
import CardSkill from "../CardSkill/CardSkill.js"
import "./style.css"

export default class MyProfile extends React.Component {

    render() {
        return (
            <div className="DashboardContainer">
                <CardProfile />
                <div className="SkillContainer">
                    <h2 className="Title">Compétences</h2>
                    <div className="CardSkillContainer">
                        <CardSkill />
                        <CardSkill />
                        <CardSkill />
                        <CardSkill />
                        <CardSkill />
                    </div>
                </div>
            </div>
        );
    }
}