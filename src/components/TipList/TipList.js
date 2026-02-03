import styles from "./_tipList.module.scss";
import TipCard from "../TipCard/TipCard";

const TipList = ({ tips, favoriteIds, onToggleFavorite }) => {
    return (
        <div className={styles.list}>
            {tips.map((t) => (
                <TipCard
                    key={t.id}
                    tip={t.tip}
                    isFavorite={favoriteIds.includes(t.id)}
                    onToggleFavorite={() => onToggleFavorite(t.id)}
                />
            ))}
        </div>
    );
};

export default TipList;
