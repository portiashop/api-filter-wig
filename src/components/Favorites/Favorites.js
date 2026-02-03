import styles from "./_favorites.module.scss";
import TipCard from "../TipCard/TipCard";

const Favorites = ({ tips, favoriteIds, onToggleFavorite }) => {
    const favoriteTips = tips.filter((t) => favoriteIds.includes(t.id));

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Favorites</h2>

            {favoriteTips.length === 0 ? (
                <p className={styles.empty}>No favorites yet.</p>
            ) : (
                <div className={styles.list}>
                    {favoriteTips.map((t) => (
                        <TipCard
                            key={t.id}
                            tip={t.tip}
                            isFavorite={true}
                            onToggleFavorite={() => onToggleFavorite(t.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favorites;
