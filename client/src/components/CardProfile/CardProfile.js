import React from "react";
import "./style.scss"

export default class CardProfile extends React.Component {

    render() {
        const { user } = this.props
        return (
            <div className="CardProfile">
                <div className="Banner"><span className="Image"></span></div>
                <div className="Content">
                    <div className="ImgProfile"><span className="Image"></span></div>
                    <div className="Name">
                        <p>
                            <span className="FirstName">{user.firstName}</span>&nbsp;
                            <span className="LastName">{user.lastName}</span>
                        </p>
                    </div>
                    <div className="Promotion Item">
                        <span>Promotion</span>
                        <p><span>WEB</span> - <span>{user.promotion}</span> <span>Groupe 2</span></p>
                    </div>
                    <div className="Job Item">
                        <span>Poste</span>
                        <p><span>Designer UI</span> chez <span>Havas</span></p>
                    </div>
                    <div className="Mail Item">
                        <span>Adresse mail</span>
                        <a href="/">{user.email}</a>
                    </div>
                </div>
            </div>
        );
    }
}
