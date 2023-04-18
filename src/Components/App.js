import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from './Header';
import CharacterName from './CharacterName';
import OriginSelection from './OriginSelection';
import SkillDistribution from './SkillDistribution';
import CharacterSheet from './CharacterSheet';

function App() {

  const [showCharacterSheet, setShowCharacterSheet] = useState(false);

  const handleCharacterSheet = () => {
    setShowCharacterSheet(!showCharacterSheet);
  }

  const characterSheetBackground = {
    backgroundColor: showCharacterSheet ? "#ccc" : "transparent",
  };

  //Vérifie que l'utilisateur a bien rempli les champs prénom, nom et genre avant de pouvoir cliquer sur Valider
  //et afficher la suite. Le boutton "valider" disparaitra.
  const [characterNameValidated, setCharacterNameValidated] = useState(false);
  const handleCharacterNameValidation = () => {
    setCharacterNameValidated(true);
    console.log()
  };

  const [baseSkills, setBaseSkills] = useState({
    Medecine: 0,
    Programming: 0,
    Marksmanship: 0
  });

  //Permet de stocker la valeur de originSelected afin de s'en servir plus tard
  const [originSelected, setOriginSelected] = useState('');

  function handleSelectedOrigin(originValue) {
    setOriginSelected(originValue);

    switch(originValue) {
      case 'Survivor':
        setBaseSkills({Medecine: 5, Programming: 2, Marksmanship: 4});
        break;
      case 'Martian':
        setBaseSkills({Medecine: 4, Programming: 5, Marksmanship: 2});
        break;
      case 'Partisan':
        setBaseSkills({Medecine: 2, Programming: 4, Marksmanship: 5});
        break;
      default:
        setBaseSkills({Medecine: 0, Programming: 0, Marksmanship: 0});
        break;
    }
  }

  useEffect(() => {
    console.log("Updating skills");
  }, [baseSkills]);

  return (
    <div>
      <div id="button-container">
        <button onClick={handleCharacterSheet}>
          {showCharacterSheet ? 'Hide Character Sheet' : 'Show Character Sheet'}
        </button>
      </div>
      <div id='container'>
        <Header />  
        <div id='sidebarSheet'>
          <div style={characterSheetBackground}>
            {showCharacterSheet && <CharacterSheet/>}
          </div>
        </div>
        <CharacterName onValidate={handleCharacterNameValidation}/>
        {characterNameValidated && <OriginSelection onSelectedOrigin={handleSelectedOrigin}/>}
        {originSelected !=='' && <SkillDistribution baseSkills={baseSkills}/>}
      </div>
    </div>
  );
}

export default App;
