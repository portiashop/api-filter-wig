import React from 'react';
import styles from "./_foterCopy.module.scss";



const FoterCopy = ({title}) => {
    return (
        <footer className={styles.footer}>
            <p>{title} &copy; {new Date().getFullYear().toString()} </p>
        </footer>
    )
}
export default FoterCopy;