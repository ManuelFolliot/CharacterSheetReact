import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import CharacterName from './CharacterName';
import OriginSelection from './OriginSelection'

function App() {
  const [characterNameValidated, setCharacterNameValidated] = useState(false);

  const handleCharacterNameValidation = () => {
    setCharacterNameValidated(true);
  };

  return (
    <div>
      <Header />
      <CharacterName onValidate={handleCharacterNameValidation}/>
      {characterNameValidated && <OriginSelection />}
    </div>
  );
}

export default App;
