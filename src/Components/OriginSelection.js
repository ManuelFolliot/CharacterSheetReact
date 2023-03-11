import React, {useState} from 'react';
import SurvivorOrigin from '../datas/OriginTexts/SurvivorOrigin';
import MartianOrigin from '../datas/OriginTexts/MartianOrigin';
import PartisanOrigin from '../datas/OriginTexts/PartisanOrigin';
import '../styles/OriginSelection.css'

function OriginSelection(props) {

    const [selectedOrigin, setSelectedOrigin] = useState('');

    function handleOriginSelection(value) {
        setSelectedOrigin(value);
        props.onSelectedOrigin(value)
    }

    const origins = [
        {label: 'Survivor', description: <SurvivorOrigin/>},
        {label: 'Martian', description: <MartianOrigin/>},
        {label: 'Partisan', description: <PartisanOrigin/>},
    ];

    const originList = origins.map((origin) => (
        <li key={origin.value} onClick={() => handleOriginSelection(origin.label)}>
            {origin.label}
        </li>
    ));

    const selectedOriginDescription = origins.find((origin) => origin.label === selectedOrigin)?.description;

    return (
        <div>
        <p>Choose your origin. It will determine your starting skills and situation.</p>
            <div id='cc-OriginSelection'>
                <ul id='originsList'>
                    {originList}                 
                </ul>
                {selectedOrigin && (
                    <div id='originDescription'>
                        {selectedOriginDescription}
                    </div>
                )}
            </div>
        </div>
    )
}

export default OriginSelection

