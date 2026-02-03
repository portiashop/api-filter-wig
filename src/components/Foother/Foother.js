import React from 'react';
import styles from "./_foother.module.scss";


const Foother = ({title}) => {
    return (
        <footer className={styles.footer}>
            <p>{title} &copy; {new Date().getFullYear().toString()} </p>
        </footer>
    )
}
export default Foother;