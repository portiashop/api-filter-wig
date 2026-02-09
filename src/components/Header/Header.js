import { useState } from "react";
import styles from "./_header.module.scss";
import logourl from "url:../../assets/logolasulje.svg";

const Header = ({ title, subtitle }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.top}>

                    <img
                        src={logourl}
                        alt="Logo"
                        className={styles.logo}
                    />


                    <button
                        type="button"
                        className={styles.burger}
                        aria-label="Toggle navigation"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
                        <a className={styles.link} href="#tips" onClick={() => setOpen(false)}>
                            Tips
                        </a>
                        <a className={styles.link} href="#favorites" onClick={() => setOpen(false)}>
                            Favorites
                        </a>
                        <a className={styles.link} href="#products" onClick={() => setOpen(false)}>
                            Products
                        </a>

                        <a className={`${styles.link} ${styles.cta}`} href="#contact" onClick={() => setOpen(false)}>
                            Contact
                        </a>
                    </nav>
                </div>

                <div className={styles.hero}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
