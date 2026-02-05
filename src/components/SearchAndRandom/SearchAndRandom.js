// src/components/SearchAndRandom/SearchAndRandom.jsx
import SearchBar from "../SearchBar/SearchBar";

const SearchAndRandom = ({ search, setSearch, pickRandomTip }) => {
    return (
        <>
            {/* Iskalna vrstica */}
            <div className="row">
                <SearchBar value={search} onChange={setSearch} />
            </div>

            {/* Napis + gumb za naključni nasvet */}
            <div
                style={{
                    marginTop: '24px',
                    textAlign: 'center',
                    padding: '16px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                    border: '1px solid #eaeaea',
                }}
            >
                <p
                    style={{
                        marginBottom: '12px',
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#333',
                    }}
                >
                    Želiš naključni nasvet?
                </p>

                <p
                    style={{
                        marginBottom: '16px',
                        fontSize: '14px',
                        color: '#6B6B6B',
                    }}
                >
                    Iz trenutnih rezultatov iskanja (ali iz vseh nasvetov)
                </p>

                <button
                    className="btn btn--primary"
                    type="button"
                    onClick={pickRandomTip}
                    style={{
                        padding: '12px 24px',
                        fontSize: '16px',
                        minWidth: '220px',
                    }}
                >
                    Naključni nasvet
                </button>
            </div>
        </>
    );
};

export default SearchAndRandom;