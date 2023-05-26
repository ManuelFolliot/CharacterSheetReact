import '../styles/App.css';
import React, { useState, useEffect} from 'react';
import Header from './Header';
import CharacterName from './CharacterName';
import OriginSelection from './OriginSelection';
import SkillDistribution from './SkillDistribution';
import GearSelection from './GearSelection';
import CharacterSheet from './CharacterSheet';

function App() {

  /*************************************
   * *************************************
   * GESTION DU NOM ET GENRE DU PERSONNAGE
   * *************************************
  **************************************/

  const [characterInfo, setCharacterInfo] = useState({
    firstname: "",
    lastname: "",
    gender: ""
  })

  const handleCharacterInfoChange = (key, value) => {
    setCharacterInfo({
      ...characterInfo,
      [key]: value
    });
  };

  useEffect(() => {
    console.log(characterInfo);
  }, [characterInfo]);

  /********************************
   * *************************************
   * GESTION DES COMPETENCES
   * *************************************
  ********************************/

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

  const handleBaseSkillsChange = (updatedSkills) => {
    setBaseSkills(updatedSkills);
  };

    /********************************************
   * *************************************
   * GESTION DE L'EQUIPEMENT
   * *************************************
   ********************************************/
    
    const [selectedGear, setSelectedGear] = useState([]);

    const handleGearChange = (selectedGear) => {
      setSelectedGear(selectedGear);
    };

    useEffect(() => {
      console.log("Selected objects :", selectedGear);
    }, [selectedGear])

    /********************************************
   * *************************************
   * GESTION DE L'AFFICHAGE DES COMPOSANTS
   * *************************************
   ********************************************/

    /**
     * Affichage de la fiche perso
     **/

    const [showCharacterSheet, setShowCharacterSheet] = useState(false);

    const handleCharacterSheet = () => {
      setShowCharacterSheet(!showCharacterSheet);
    }
    
    /**
     * Navigation entre les composants; Boutons suivants et précédents
     **/

    const [currentStep, setCurrentStep] = useState(0);
  
    const handleNext = () => {
      if (currentStep === 0 && isCharacterInfoChecked){
        setCurrentStep(currentStep => currentStep + 1);
      }
      if (currentStep === 1 && isOriginSelected){
        setCurrentStep(currentStep => currentStep + 1)
      }
      if (currentStep === 2 && isSkillPointDisributed){
        setCurrentStep(currentStep => currentStep + 1)
      }
      console.log(currentStep)
    };
  
    const handlePrevious = () => {
      setCurrentStep(currentStep => currentStep - 1);
    }
  
    /**
     * Validation des informations de base du personnage
     **/

    const [isCharacterInfoChecked, setIsCharacterInfoChecked] = useState(false);

    useEffect(() => {
      setIsCharacterInfoChecked(
        characterInfo.firstname !== '',
        characterInfo.lastname !== '',
        characterInfo.gender !== ''
      );
    }, [characterInfo]);

    /**
     * Validation de la sélection d'origine du personnage
     **/

    const [isOriginSelected, setIsOriginSelected] = useState(false);

    useEffect(() => {
      setIsOriginSelected(
        originSelected !== ''
      );
    }, [originSelected]);

    useEffect(() => {
      setIsOriginSelected(originSelected !== '');
    }, [originSelected]);
  
    /**
     * Validation de l'attribution des points de compétence
     **/

    const [isSkillPointDisributed, setIsSkillPointDistributed] = useState(false);

    const [skillPointsPool, setSkillPointsPool] = useState(10);

    function handleSkillPointsChange(updateSkillPointsPool){
      setSkillPointsPool(updateSkillPointsPool);
    }

    useEffect(() => {
      setIsSkillPointDistributed(
        skillPointsPool === 0
      );
    }, [skillPointsPool])

    /**
     * 
     */

    /*************************************
     * *************************************
     * STYLE DE LA FICHE PERSONNAGE
     * *************************************
     *************************************/
  
    const characterSheetBackground = {
      backgroundColor: showCharacterSheet ? "#ccc" : "transparent",
      height: '100%'
    };
  
    const containerStyle = {
      width: showCharacterSheet ? '80%' : '100%'
    };

  /*************************
     * *************************************
     * COMPOSANTS
     * *************************************
     ************************/

  const components = [
    /**
     * Sélection du prénom, nom, genre
     **/
    <CharacterName characterInfo={characterInfo} 
    onCharacterInfoChange={handleCharacterInfoChange}
    isCharacterInfoChecked={isCharacterInfoChecked} setIsCharacterInfoChecked={setIsCharacterInfoChecked}/>,
    /**
     * Sélection de l'origine (initialisée à null)
     **/
    (originSelected === '' || currentStep >= 1) && (
      <OriginSelection onSelectedOrigin={handleSelectedOrigin}/>
    ),
    /**
     * Attribution des points de compétences
     **/
    baseSkills === {} ? null : (
      <SkillDistribution 
      baseSkills={baseSkills}
      originSelected={originSelected}
      skillPointsPool={skillPointsPool}
      onSkillPointsChange={handleSkillPointsChange}/>
    ),
    /**
     * Sélection de l'équipement
     **/
    currentStep > 1 && <GearSelection onGearSelect={handleGearChange}/>
  ];

  return (
    <div>
      <div id="charactersheet-button-container">
       <button onClick={handleCharacterSheet}>
        {showCharacterSheet ? 'Hide Character Sheet' : 'Show Character Sheet'}
      </button>
      </div>
      <div id="button-container">
        {currentStep > 0 && <button onClick={handlePrevious}>Précédent</button>}
        {currentStep < components.length - 1 && 
        <button onClick={handleNext} 
        disabled={!characterInfo.firstname || !characterInfo.lastname || !characterInfo.gender}>
          Suivant</button>}
      </div>
      
      <div id='container'>
        <Header />
        <div id='sidebarSheet'>
          <div style={characterSheetBackground}>
            {showCharacterSheet && <CharacterSheet 
            characterInfo={characterInfo} 
            originSelected={originSelected} 
            baseSkills={baseSkills}
            skillPointsPool={skillPointsPool}
            onSkillPointsChange={handleSkillPointsChange}
            onBaseSkillsChange={handleBaseSkillsChange}
            selectedGear={selectedGear}/>}
          </div>
        </div>
        <div id="characterNameContainer" style={containerStyle}>
          {components[currentStep]}
        </div>
      </div>
    </div>
  );
}

export default App;
