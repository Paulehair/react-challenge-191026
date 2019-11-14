import React from 'react'

export default ({user, onClick}) => (
    <div onClick={() => onClick(user._id)} className="TableCard">
        <div className="CellCardName">
            {
                `${user.firstName} ${user.lastName}`
            }
        </div>
        <div className="CellCardGroup">
            Groupe 2
        </div>
        <div className="CellCardJob">
            {
                user.occupation ? user.occupation : 'Non renseigné'
            }
        </div>
    </div>
)
