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
                        
                    </div>
                </div>
            </>
        );
    }
}