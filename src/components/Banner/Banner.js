import styles from "./_banner.module.scss";

const Banner = ({
                    title,
                    text,
                    image,
                    linkLabel,
                    linkUrl,
                }) => {
    return (
        <section
            className={styles.banner}
            style={image ? { backgroundImage: `url(${image})` } : undefined}
        >
            <div className={styles.center}>
                <div className={styles.content}>
                    {title && <h2 className={styles.title}>{title}</h2>}
                    {text && <p className={styles.text}>{text}</p>}

                    {linkLabel && linkUrl && (
                        <a
                            href={linkUrl}
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {linkLabel}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Banner;
