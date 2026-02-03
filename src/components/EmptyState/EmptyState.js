import styles from "./_emptyState.module.scss";

const EmptyState = ({ message }) => {
    return <p className={styles.text}>{message}</p>;
};

export default EmptyState;
