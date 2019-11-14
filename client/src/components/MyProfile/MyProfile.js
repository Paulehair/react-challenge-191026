import React from "react"
import ReactDOM from 'react-dom'
import API from "../../utils/API"
import CardProfile from "../CardProfile/CardProfile.js"
import CardSkill from "../CardSkill/CardSkill.js"
import "./style.scss"

export default class MyProfile extends React.Component {

    state = {
        editMode: false
    }

    editMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    onSubmit = async () => {
        const body = {}
        const userSkills = []
        const skills = Array.from(document.querySelectorAll('.editSkill'))
        const job = ReactDOM.findDOMNode(this).querySelector('#editJob')
        const company = ReactDOM.findDOMNode(this).querySelector('#editCompany')
        
        skills.forEach(skill => {
            userSkills.push({
                skill_id: skill.dataset.skillid,
                level: skill.value
            })
        })

        body.skills = userSkills
        
        if (job.value !== this.props.user.occupation) {
            body.occupation = job.value
        }

        if (company.value !== this.props.user.company) {
            body.company = company.value
        }
        this.editMode()
        this.props.updateUser(this.props.user._id, body)
    }

    render() {
        return (
            <>
                { (!this.props.editable || this.props.role !== 'user') && <div className="backtrace"><button onClick={this.props.backtrace}>Retour</button></div> }
                <CardProfile user={this.props.user} editMode={this.state.editMode} />
                <div className="SkillContainer">
                    <h2 className="Title">Compétences</h2>
                    {
                        this.props.editable &&
                        <div className="EditContainer">
                            {
                                !this.state.editMode ?
                                    <span className="Edit" onClick={this.editMode}>Éditer</span>
                                :
                                <>
                                    <span className="Cancel" onClick={this.editMode}>Annuler</span>
                                    <span className="Submit" onClick={this.onSubmit}>Valider</span>
                                </>
                            }
                        </div>
                    }
                    <div className="CardSkillContainer">
                        {
                            this.props.user.skills.map((skill, i) => <CardSkill role={this.props.role} key={i} skill={skill} editMode={this.state.editMode} /> )
                        }
                    </div>
                </div>
            </>
        );
    }
}
