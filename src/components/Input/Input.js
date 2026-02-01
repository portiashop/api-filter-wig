import React from 'react';
import styles from "./_input.module.scss";

const Input = ({title, id, name}) => {
    return (
        <input id={id} name={name} className={styles.formControl} placeholder={title} />
    )
}
export default Input;