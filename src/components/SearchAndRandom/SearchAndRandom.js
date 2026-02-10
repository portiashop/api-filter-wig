import styles from "./_searchAndRandom.module.scss";

const SearchAndRandom = ({
                             search,
                             setSearch,
                             pickRandomTip,
                             type,
                             setType,
                             types,
                         }) => {

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
                <select
                    className={styles.select}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    {types.map((t) => (
                        <option key={t} value={t}>
                            {t === "all"
                                ? "All types"
                                : t.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase())}
                        </option>
                    ))}
                </select>

                <button className="btn btn--primary" type="button" onClick={pickRandomTip}>
                    Random tip
                </button>
            </div>
        </section>
    );
};

export default SearchAndRandom;
