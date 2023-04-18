import { useState, useEffect } from 'react';
import '../styles/SkillDistribution.css';

function SkillDistribution({baseSkills, originSelected}) {

    const [skills, setSkills] = useState([
        {label: 'Medecine', value: baseSkills.Medecine},
        {label: 'Programming', value: baseSkills.Programming},
        {label: 'Marksmanship', value: baseSkills.Marksmanship},
    ]);

    const [skillPointsPool, setSkillPointsPool] = useState(10);

    useEffect(() => {
        const updatedSkills = [
            {label: 'Medecine', value: baseSkills.Medecine},
            {label: 'Programming', value: baseSkills.Programming},
            {label: 'Marksmanship', value: baseSkills.Marksmanship}
        ];
        setSkills(updatedSkills);
        setSkillPointsPool(10);
    }, [baseSkills, originSelected]);

    function addSkillPoint(index) {
        if (skillPointsPool > 0) {
            const updatedSkills = [...skills];
            updatedSkills[index].value++;
            setSkills(updatedSkills);
            setSkillPointsPool(skillPointsPool - 1)
        }
    }

    function removeSkillPoint(index) {
        if (skills[index].value > baseSkills[skills[index].label]) {
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