import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import CharacterName from './CharacterName';
import OriginSelection from './OriginSelection';
import SkillDistribution from './SkillDistribution';
import ComposantEnfant from './ComposantEnfant';

function App() {

  function handleSelectedValueChange(value) {
    console.log(`la valeur sélectionnée est ${value}`);
  }

  //Vérifie que l'utilisateur a bien rempli les champs prénom, nom et genre avant de pouvoir cliquer sur Valider
  //et afficher la suite. Le boutton "valider" disaparaitra.
  const [characterNameValidated, setCharacterNameValidated] = useState(false);
  const handleCharacterNameValidation = () => {
    setCharacterNameValidated(true);
    console.log()
  };

  //Permet de stocker la valeur de originSelected afin de s'en servir plus tard
  const [originSelected, setOriginSelected] = useState('');
  function handleSelectedOrigin(originValue) {
    setOriginSelected(originValue);
    console.log(`origin selected: ${originValue}`)
  }

  return (
    <div>
      <Header />
      <ComposantEnfant onSelectedValueChange={handleSelectedValueChange}/>
      <CharacterName onValidate={handleCharacterNameValidation}/>
      {characterNameValidated && <OriginSelection onSelectedOrigin={handleSelectedOrigin}/>}
      {originSelected !=='' && <SkillDistribution />}
    </div>
  );
}

export default App;
