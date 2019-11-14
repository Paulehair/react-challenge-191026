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
                        <p className="FirstName">{`${user.firstName} ${user.lastName}`}</p>
                    </div>
                    <div className="Promotion Item">
                        <span>Promotion</span>
                        <p><span>WEB</span> - <span>{user.promotion}</span></p>
                    </div>
                    <div className="Job Item">
                        <span>Poste</span>
                        { this.props.editMode ? 
                            <p className="edit">
                                <input type="text" id="editJob" placeholder="Poste" defaultValue={user.job} />
                                <input type="text" id="editCompany" placeholder="Entreprise" defaultValue={user.company} />
                            </p>
                            : 
                            <p>
                                <span><strong>{user.occupation !== '' ? user.occupation : 'Non renseigné'}</strong></span> 
                                &nbsp;chez <span><strong>{user.company ? user.company : 'Non renseigné'}</strong></span>
                            </p>

                        }
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
