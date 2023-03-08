import '../styles/CharacterName.css'

function CharacterName () {
    return (
        <div className='cc-name'>
            <form>
                <label for='firstName'>Prénom :</label>
                <input type='text' id='firstName' name='firstName'></input>

                <label for='lastName'>Nom :</label>
                <input type='text' id='lastName' name='lastName'></input>

                <label for='gender-select'>Sélectionner le genre de votre personnage :</label>
                <select name='gender' id='gender-select'>
                    <option value=''>---</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                    <option value='non-binary'>Non binary</option>
                </select>
            </form>
            <button>Valider</button>
        </div>
    )
}

export default CharacterName