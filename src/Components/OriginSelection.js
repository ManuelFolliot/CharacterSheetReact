import '../styles/OriginSelection.css'

function OriginSelection() {
    return (
        <div>
            <p>Choose your origin</p>
            <div id='cc-OriginSelection'>
                <ul id='originsList'>
                    <li>Day of Cinders Survivor</li>
                    <li>Martian Colonist</li>
                    <li>Federated Communes partisan</li>
                </ul>
                <div id='originDescription'>
                    <p>You were in North America when Yellowstone errupted. You survived the first year but you must now escape a dead continent.</p>
                    <p>Your ancestors were among the first people to permently live on Mars. 
                        As the Red Planet is experiencing enormous transformations, you must decide what you'll do.</p>
                    <p>Mother Anarchy loves her children. The time to rise against the Great Companies of Jupiter and their mercenaries has come.
                        The road ahead will be long and bloody, but such is the price of freedom.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OriginSelection