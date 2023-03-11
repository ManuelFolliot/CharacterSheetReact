import React, { useState } from 'react';

function ComposantEnfant (props) {
    const [selectedValue, setSelectedValue] = useState('');

    function handleSelectChange(event) {
        setSelectedValue(event.target.value);
        props.onSelectedValueChange(event.target.value);
    }

    return (
        <select value={selectedValue} onChange={handleSelectChange}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </select>
    );
}

export default ComposantEnfant