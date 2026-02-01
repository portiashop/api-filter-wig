import styles from "./_tipCard.module.scss";

const TipCard = ({ tip }) => {
    return (
        <div className={styles.card}>
            <p className={styles.text}>{tip}</p>
        </div>
    );
};

export default TipCard;
