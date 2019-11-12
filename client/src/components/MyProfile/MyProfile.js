import React from "react";
import Navigation from "../Navigation/Navigation.js"
import CardProfile from "../CardProfile/CardProfile.js"
import "./style.css"

export default class MyProfile extends React.Component {

    render() {
        return (
            <>
                <Navigation />
                <div className="DashboardContainer">
                    <CardProfile />
                    <div className="SkillContainer">
                        <h2 className="Title">Compétences</h2>
                        <div className="CardSkillContainer">
                            <div className="CardSkill">
                                <p>Programmation côté client</p>
                                <span className="Note">C</span>
                            </div>
                            <div className="CardSkill">
                                <p>Programmation côté client</p>
                                <span className="Note">C</span>
                            </div>
                            <div className="CardSkill">
                                <p>Programmation côté client</p>
                                <span className="Note">C</span>
                            </div>
                            <div className="CardSkill">
                                <p>Programmation côté client</p>
                                <span className="Note">C</span>
                            </div>
                            <div className="CardSkill">
                                <p>Programmation côté client</p>
                                <span className="Note">C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}