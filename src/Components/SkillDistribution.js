import { useState } from 'react';
import '../styles/SkillDistribution.css';

function SkillDistribution() {

    const [skills, setSkills] = useState([
        {label: 'Medecine', value: 0},
        {label: 'Programming', value: 0},
        {label: 'Marksmanship', value: 0},
    ]);

    const [skillPointsPool, setSkillPointsPool] = useState(10);

    function addSkillPoint(index) {
        if (skillPointsPool > 0) {
            const updatedSkills = [...skills];
            updatedSkills[index].value++;
            setSkills(updatedSkills);
            setSkillPointsPool(skillPointsPool - 1)
        }
    }

    function removeSkillPoint(index) {
        if (skills[index].value > 0) {
            const updatedSkills = [...skills];
            updatedSkills[index].value--;
            setSkills(updatedSkills);
            setSkillPointsPool(skillPointsPool + 1)
        }
    }

    const skillPointDistribution = skills.map((skill, index) => (
        <div key={skill.label}>
            <p>{skill.label} : {skill.value}</p>
            <div>
                <button onClick={() => addSkillPoint(index)}>+</button>
                <button onClick={() => removeSkillPoint(index)}>-</button>
            </div>
        </div>
    ));

    return (
        <div>
            <p>Here are your skills. Assign your skill points and then click to confirm.</p>
            <div>Skill points left : <strong>{skillPointsPool}</strong></div>
            <div>
                {skillPointDistribution}
            </div>
        </div>
    )
}

export default SkillDistribution