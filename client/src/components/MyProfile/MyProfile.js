import React from "react"
import CardProfile from "../CardProfile/CardProfile.js"
import CardSkill from "../CardSkill/CardSkill.js"
import "./style.scss"

export default class MyProfile extends React.Component {

    render() {
        return (
            <>
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
            </>
        );
    }
}
