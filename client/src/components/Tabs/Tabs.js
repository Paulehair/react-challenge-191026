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
    
    handleChange = (id, elemId) => {
        if(this.state.selected !== id) {
            this.setState({
                selected: id
            })
        }
        this.props.handleChange(elemId)
    }

    render() {
        return (
            <ul className="NavigationItems">
            {
                this.props.role !== 'user' ? <li className='active StudentList NavigationItem'>Liste des étudiants</li>
                : this.state.tabs.map((elem, index) => {
                    return <li className={`${index === this.state.selected ? 'active ' : ''}NavigationItem ${elem.nameClass}`} key={index} onClick={() => this.handleChange(index, elem.id)}><span>{elem.text}</span></li>
                })
            }
                
            </ul>
        )
    }
}

export default Tabs
