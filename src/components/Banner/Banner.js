import styles from "./_banner.module.scss";

const Banner = ({
                    title,
                    text,
                    image,          // can be imported image OR "/img/..." from public
                    align = "center",
                    variant = "light", // "light" or "dark" overlay
                }) => {
    const bgStyle = image ? { backgroundImage: `url(${image})` } : undefined;

    return (
        <section className={styles.banner} style={bgStyle}>
            <div
                className={`${styles.overlay} ${
                    variant === "dark" ? styles.overlayDark : styles.overlayLight
                }`}
            >
                <div className={`${styles.inner} ${align === "left" ? styles.left : styles.center}`}>
                    {title && <h2 className={styles.title}>{title}</h2>}
                    {text && <p className={styles.text}>{text}</p>}
                </div>
            </div>
        </section>
    );
};

export default Banner;
