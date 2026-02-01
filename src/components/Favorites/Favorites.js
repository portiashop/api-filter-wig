import React from "react";
// Displays favorited tips
function Favorites({ favorites }) {
    return (
        <div className="favorites">
            <h2>Favorite Tips</h2>
            {favorites.length === 0 ? <p>No favorites yet.</p> :
                <ul>
                    {favorites.map(tip => <li key={tip.id}>{tip.tip}</li>)}
                </ul>
            }
        </div>
    );
}

export default Favorites;