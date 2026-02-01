import React from 'react';
import styles from "./_form.module.scss";

const Form = (props) => {
    return (
        <form className={styles.form}>
            {props.children}
        </form>
    )
}
export default Form;