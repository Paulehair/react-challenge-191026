import React from "react";
import "./style.scss"

const options = ['A', 'B', 'C', 'D', 'E', 'F']

export default ({ skill, editMode, role }) => (
    <div className={`CardSkill ${role}`}>
        <p>{skill.name}</p>
        {
            editMode ? (
                <select name={skill.name} className="editSkill" data-skillid={skill.skill_id} defaultValue={options.find(option => option === skill.level)}>
                    {
                        options.map((option, i) => <option key={i} value={option}>{option}</option>)
                    }
                </select>
            )
            : <span className="Note">{skill.level}</span>
        }
    </div>
)
