import styles from "./_banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.inner}>
                <h2 className={styles.title}>Daily wig care, made simple</h2>
                <p className={styles.text}>
                    Search tips, save favorites, and feel confident every day.
                </p>
            </div>
        </section>
    );
};

export default Banner;
