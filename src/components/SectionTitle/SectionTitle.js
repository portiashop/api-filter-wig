import styles from "./_sectionTitle.module.scss";

const SectionTitle = ({ children }) => {
    return <h2 className={styles.title}>{children}</h2>;
};

export default SectionTitle;