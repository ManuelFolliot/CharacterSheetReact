import React, {useState, useEffect}  from "react";

function GearSelection ({onGearSelect}) {

    const items = ["9mm Pistol", "MedPack", "BioLaptop", "Analgesics"];

    const [selectedItem, setSelectedItem] = useState([]);

    const handleItemSelected = (item) => {
        if(selectedItem.includes(item)) {
            setSelectedItem(selectedItem.filter((selectedItem) => selectedItem !== item));
        }else{
            setSelectedItem([...selectedItem, item]);
        }
    };

    useEffect(() => {
        onGearSelect(selectedItem);
    }, [selectedItem, onGearSelect]);

    return(
        <div>
            <h2>Choose two pieces of equipment :</h2>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedItem.includes(item)}
                                onChange={()=>handleItemSelected(item)}
                                disabled={selectedItem.length === 2 && !selectedItem.includes(item)}
                            />
                            {item}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default GearSelection