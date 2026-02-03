import styles from "./_tipCard.module.scss";

// isFavorite controls button text + style
// onToggleFavorite is a function passed from App
// The button only shows if onToggleFavorite exists

const TipCard = ({ tip, isFavorite = false, onToggleFavorite }) => {
    return (
        <div className={styles.card}>
            <p className={styles.text}>{tip}</p>

            {onToggleFavorite && (
                <div className={styles.actions}>
                    <button
                        type="button"
                        className={`btn ${isFavorite ? "btn--secondary" : "btn--primary"}`}
                        onClick={onToggleFavorite}
                    >
                        {isFavorite ? "Unfavorite" : "Favorite"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default TipCard;
