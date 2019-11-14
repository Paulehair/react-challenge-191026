import React from "react"

class Tabs extends React.Component {
    state = {
        selected: 0,
        tabs: [
            {
                id: 'profile',
                nameClass: 'Profile',
                text: 'Mon profil'
            },
            {
                id: 'list',
                nameClass: 'StudentList',
                text: 'Liste des étudiants'
            }
        ]
    }
    
    render() {
        return (
            <ul className="NavigationItems">
                {this.state.tabs.map((elem, index) => {
                    return <li className={`${index === this.state.selected ? 'active ' : ''}NavigationItem ${elem.nameClass}`} key={index} onClick={() => this.props.handleChange(elem.id)}><span>{elem.text}</span></li>
                })}
            </ul>
        )
    }
}

export default Tabs
