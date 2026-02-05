// src/components/Header/Header.jsx
import styles from "./_header.module.scss";

import logourl from "url:../../assets/logolasulje.svg";

const Header = ({ title, subtitle }) => {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.left}>

                    <img
                        src={logourl}
                        alt="Logo"
                        style={{ width: 120, height: 120, border: "1px solid red" }}
                    />


                    <div className={styles.titleGroup}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </div>
                </div>

                {/* navigacija */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a href="/" className={styles.navLink}>Domov</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#favoriti" className={styles.navLink}>Favoriti</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;