import styles from "./_header.module.scss";

const Header = ({ title, subtitle }) => {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </header>
    );
};

export default Header;
