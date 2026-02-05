import styles from "./_footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div>
                        <h4 className={styles.title}>About</h4>
                        <ul className={styles.list}>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.title}>Help</h4>
                        <ul className={styles.list}>
                            <li><a href="#">Wig care tips</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.title}>Legal</h4>
                        <ul className={styles.list}>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    © {new Date().getFullYear()} LASULJE.SI — All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
