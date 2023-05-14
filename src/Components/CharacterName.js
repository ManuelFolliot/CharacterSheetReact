import React, {useState, useEffect} from 'react';
import '../styles/CharacterName.css'

function CharacterName ({characterInfo, onCharacterInfoChange}) {

    const [isCharacterInfoChecked, setIsCharacterInfoChecked] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        onCharacterInfoChange(name, value);
        const allCharacterFieldsFilled = characterInfo.firstname !== '' && characterInfo.lastname !== '' && characterInfo.gender !== '';
        setIsCharacterInfoChecked(allCharacterFieldsFilled)
    };

    useEffect(() => {
        console.log(isCharacterInfoChecked);
    }, [isCharacterInfoChecked]);

    useEffect(() => {
        const allCharacterFieldsFilled = characterInfo.firstname !== '' && characterInfo.lastname !== '' && characterInfo.gender !== '';
        setIsCharacterInfoChecked(allCharacterFieldsFilled);
    }, [characterInfo]);

    return (
        <div className='cc-name'>
            <p>First, choose your character's name and gender :</p>
            <form id='cc-form'>
                <label for='firstname'>
                    First Name 
                    <input type='text' name='firstname' value={characterInfo.firstname} onChange={handleInputChange}></input>
                </label>

                <label for='lastname'>
                    Last Name 
                    <input type='text' name='lastname' value={characterInfo.lastname} onChange={handleInputChange}></input>
                </label>

                <label for='gender-select'>
                    Select your character's gender
                    <select name='gender' value={characterInfo.gender} onChange={handleInputChange}>
                        <option value=''>---</option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
                        <option value='non-binary'>Non binary</option>
                    </select>
                </label>
            </form>         
        </div>
    )
}

export default CharacterName