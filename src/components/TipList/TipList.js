import TipCard from "../TipCard/TipCard";

const TipList = ({ tips, favoriteIds, onToggleFavorite }) => {
    return (
        <>
            {tips.map((t) => (
                <TipCard
                    key={t.id}
                    tip={t.text}// text from json file tips
                    isFavorite={favoriteIds.includes(t.id)}
                    onToggleFavorite={() => onToggleFavorite(t.id)}
                />
            ))}
        </>
    );
};

export default TipList;
