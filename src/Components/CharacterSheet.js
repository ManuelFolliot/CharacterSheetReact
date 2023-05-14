function CharacterSheet(props) {

    const {firstname, lastname, gender} = props.characterInfo || {}

    return(
        <div class="characterSheet">
            <p>Name: {firstname} {lastname}</p>
            <p>Gender : {gender}</p>
            <p>Skills:</p> 
        </div>
    )
}

export default CharacterSheet