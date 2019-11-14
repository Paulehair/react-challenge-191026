import React from "react";
import StudentEntry from './StudentEntry/StudentEntry'
import MyProfile from "../../components/MyProfile/MyProfile"
import "./style.scss"

class StudentList extends React.Component {
    state = {
        displayList: true
    }
    onClick = (id) => {
        const user = this.props.users.find(user => user._id === id)
        this.setState({
            displayList: false,
            user
        })
    }

    backtrace = () => {
        this.setState({
            displayList: true,
            user: {}
        })
    }

    render() {
        const isEditable = (this.props.role === 'admin' || this.props.role === 'superadmin') ? true : false
        return(
            this.state.displayList ? (
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
                        {
                            this.props.users.map((user, i) => <StudentEntry key={i} user={user} onClick={this.onClick} />)
                        }
                    </div>
                </div>
            ) : <MyProfile user={this.state.user} role={this.props.role} updateUser={this.props.updateUser} editable={isEditable} backtrace={this.backtrace} />
        )
    }

}

export default StudentList
