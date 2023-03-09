import React, { useState } from 'react';
import '../styles/CharacterName.css'

function CharacterName (props) {

    const [isCharacterNameSubmitted, characterNameIsSubmitted] = useState(false); 
    
    function handleCharacterNameValidation(event) {
        event.preventDefault();
        props.onValidate();
        characterNameIsSubmitted(true);
    }

    const [characterNameForm, setcharacterNameForm] = useState({
        firstName: "",
        lastName: "",
        gender: ""
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setcharacterNameForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const isCharacterNameValid = characterNameForm.firstName !== "" && characterNameForm.lastName !== "" && characterNameForm.gender !== "";


    return (
        <div className='cc-name'>
            <p>First, choose your character's name and gender :</p>
            <form onSubmit={handleCharacterNameValidation} id='cc-form'>
                <label for='firstName'>
                    First Name 
                    <input type='text' name='firstName' value={characterNameForm.firstName} onChange={handleInputChange}></input>
                </label>

                <label for='lastName'>
                    Last Name 
                    <input type='text' name='lastName' value={characterNameForm.lastName} onChange={handleInputChange}></input>
                </label>

                <label for='gender-select'>
                    Select your character's gender
                    <select name='gender' value={characterNameForm.gender} onChange={handleInputChange}>
                        <option value=''>---</option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
                        <option value='non-binary'>Non binary</option>
                    </select>
                </label>
                {isCharacterNameSubmitted ? null : 
                    <button type='submit' disabled={!isCharacterNameValid} id='cc-character-name-button'>
                        Valider
                    </button>}
            </form>         
        </div>
    )
}

export default CharacterName