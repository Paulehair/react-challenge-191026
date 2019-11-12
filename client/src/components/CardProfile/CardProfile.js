import React from "react";
import "./style.css"

export default class CardProfile extends React.Component {

    render() {
        return (
            <>
                <div className="CardProfile">
                    <div className="Banner"><span className="Image"></span></div>
                    <div className="Content">
                        <div className="ImgProfile"><span className="Image"></span></div>
                        <div className="Name">
                            <p>
                                <span className="FirstName">Jeanne</span>&nbsp;
                                <span className="LastName">Beaufort</span>
                            </p>
                        </div>
                        <div className="Promotion item">
                            <span>Promotion</span>
                            <p><span>WEB 3</span> - <span>P2020</span> <span>Groupe 2</span></p>
                        </div>
                        <div className="Job item">
                            <span>Poste</span>
                            <p><span>Designer UI</span> chez <span>Havas</span></p>
                        </div>
                        <div className="Mail item">
                            <span>Adresse mail</span>
                            <a href="#">JeanneBeaufort@hetic.net</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}