import styles from "./_searchBar.module.scss";

const SearchBar = ({ value, onChange }) => {
    return (
        <div className={styles.wrap}>
            <input
                className={styles.input}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search tips (e.g. wash, store, brush)…"
            />
        </div>
    );
};

export default SearchBar;
