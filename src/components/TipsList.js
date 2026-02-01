import React from "react";
import TipCard from "./TipCard/TipCard";
// Maps tips to TipCard components

function TipList({ tips, addFavorite }) {
    return (
        <div className="tip-list">
            {tips.map(tip => (
                <TipCard key={tip.id} tip={tip} addFavorite={addFavorite} />
            ))}
        </div>
    );
}

export default TipList;