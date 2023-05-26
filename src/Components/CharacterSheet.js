function CharacterSheet({characterInfo, originSelected, baseSkills, selectedGear}) {
    return(
        <div class="characterSheet">
            <p>Name: {characterInfo.firstname} {characterInfo.lastname}</p>
            <p>Gender: {characterInfo.gender}</p>
            <p>Origin: {originSelected}</p>
            <p>Skills:</p>
            <ul>
                <li>Medecine: {baseSkills.Medecine}</li>
                <li>Programming: {baseSkills.Programming}</li>
                <li>Marksmanship: {baseSkills.Marksmanship}</li>
            </ul> 
            <p>Gear: {selectedGear.item}</p>
        </div>
    )
}

export default CharacterSheet