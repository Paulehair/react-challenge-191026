import React from "react";
import "./style.scss"

export default class Studentlist extends React.Component {

    render() {
        return (
            <div className="StudentListComponent">
                <div className="StudentListTitle">
                    Liste 2020
                </div>
                <div className="SearchBar">
                    <input className="Input" type="text" name="name" placeholder="Rechercher un étudiant par nom" />
                    <div className="Loop"></div>
                </div>
                <div className="StudentList">
                    <div className="Table">
                        <div className="CellName">
                            Nom
                        </div>
                        <div className="CellGroup">
                            Groupe
                        </div>
                        <div className="CellJob">
                            Poste
                        </div>
                    </div>
                    <div className="TableCard">
                        <div className="CellCardName">
                            Paule Herman
                        </div>
                        <div className="CellCardGroup">
                            Groupe 2 - B
                        </div>
                        <div className="CellCardJob">
                            Développeur front
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
