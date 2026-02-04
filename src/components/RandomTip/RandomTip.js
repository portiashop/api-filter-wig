import React, { useState } from "react";
// Button to generate random tip
function RandomTip({ tips }) {
    const [randomTip, setRandomTip] = useState(null);

    const handleRandom = () => {
        const rand = tips[Math.floor(Math.random() * tips.length)];
        setRandomTip(rand);
    };

    return (
        <div className="random-tip">
            <button onClick={handleRandom}> Show Random Tip</button>
            {randomTip && <p>{randomTip.tip}</p>}
        </div>
    );
}

export default RandomTip;
