import React, { useState } from 'react';

function Main() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
  ];

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      {steps[currentStep]}
      <button onClick={handleNextStep}>Suivant</button>
    </div>
  );
}

function Step1() {
  return <div>Étape 1</div>;
}

function Step2() {
  return <div>Étape 2</div>;
}

function Step3() {
  return <div>Étape 3</div>;
}

export default Main;