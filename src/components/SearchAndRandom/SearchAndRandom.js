import styles from "./_searchAndRandom.module.scss";

const SearchAndRandom = ({ search, setSearch, pickRandomTip }) => {
    return (
        <section>
            <div className={styles.row}>
                <input
                    className={styles.input}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tips…"
                />

                <button className="btn btn--primary" type="button" onClick={pickRandomTip}>
                    Random tip
                </button>
            </div>
        </section>
    );
};

export default SearchAndRandom;
