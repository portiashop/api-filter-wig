import React from 'react';
import styles from "./_footer.module.scss";


const Footer = ({title}) => {
    return (
        <footer className={styles.footer}>
            <p>{title} &copy; {new Date().getFullYear().toString()} </p>
        </footer>
    )
}
export default Footer;