import React from "react"
import CardProfile from "../CardProfile/CardProfile.js"
import CardSkill from "../CardSkill/CardSkill.js"
import "./style.scss"

const skills = [
    {
        skill: "Programmation côté client",
        note: "D"
    },
    {
        skill: "Programmation côté serveur",
        note: "E"
    },
    {
        skill: "Design UI",
        note: "A"
    },
    {
        skill: "Design UX",
        note: "B"
    },
    {
        skill: "Gestion de projet",
        note: "C"
    }
]

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
                <CardProfile />
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
                            skills.map(
                                (data, i) => <CardSkill key={i} data={data} />
                            )
                        }
                    </div>
                </div>
            </>
        );
    }
}
