import React from "react"
import CardProfile from "../CardProfile/CardProfile.js"
import CardSkill from "../CardSkill/CardSkill.js"
import "./style.scss"

export default class MyProfile extends React.Component {

    state = {
        modEdit: false
    }

    onChange = () => {
        this.setState({
            modEdit: !this.state.modEdit
        })
    }

    render() {
        return (
            <>
                { !this.props.editable && <button onClick={this.props.backtrace}>Retour</button> }
                <CardProfile user={this.props.user} />
                <div className="SkillContainer">
                    <h2 className="Title">Compétences</h2>
                    <div className="EditContainer">
                        {
                            !this.state.modEdit ?
                                <span className="Edit" onClick={() => this.onChange()}>Éditer</span>
                            :
                            <>
                                <span className="Cancel" onClick={() => this.onChange()}>Annuler</span>
                                <span className="Submit" onClick={() => this.onChange()}>Valider</span>
                            </>
                        }
                    </div>
                    <div className="CardSkillContainer">
                        {
                            this.props.user.skills.map((skill, i) => <CardSkill key={i} skill={skill} /> )
                        }
                    </div>
                </div>
            </>
        );
    }
}
