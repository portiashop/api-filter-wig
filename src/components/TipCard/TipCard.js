import React from "react";
/*Displays single tip card with favorite button */
function TipCard({ tip, addFavorite }) {
    return (
        <div className="tip-card">
            <p>{tip.tip}</p>
            <button onClick={() => addFavorite(tip)}>❤️ Favorite</button>
        </div>
    );
}

export default TipCard;
