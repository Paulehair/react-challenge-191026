import React from "react";
import "./style.scss"

export default ({data}) => {
    return <div className="CardSkill"><p>{data.skill}</p><span className="Note">{data.note}</span></div>
}