// src/components/FavoritesSection/FavoritesSection.jsx
import Favorites from "../Favorites/Favorites";
import SectionTitle from "../SectionTitle/SectionTitle";

const FavoritesSection = ({
                              careTips,
                              favoriteIds,
                              toggleFavorite,
                          }) => {
    // Funkcija za brisanje vseh favoritov
    const clearAllFavorites = () => {
        if (window.confirm("Res želiš izbrisati vse favorite?")) {
            // Nastavi prazno polje → vse se izbriše
            setFavoriteIds([]);
        }
    };

    return (
        <>
            <SectionTitle>
                MY FAVORITES {favoriteIds.length > 0 && `(${favoriteIds.length})`}
            </SectionTitle>

            {/* Gumb "Izbriši vse" – prikaže se samo če imaš favorite */}
            {favoriteIds.length > 0 && (
                <div style={{
                    textAlign: 'right',
                    marginBottom: '16px',
                }}>
                    <button
                        className="btn btn--secondary"
                        type="button"
                        onClick={clearAllFavorites}
                        style={{
                            padding: '8px 16px',
                            fontSize: '14px',
                            color: '#C64444', // rdeča za "izbriši"
                            borderColor: '#C64444',
                        }}
                    >
                        Izbriši vse favorite
                    </button>
                </div>
            )}

            {/* Če ni favoritov – lep empty state */}
            {favoriteIds.length === 0 ? (
                <p style={{
                    textAlign: 'center',
                    color: '#6B6B6B',
                    fontSize: '16px',
                    marginTop: '20px',
                }}>
                    Še nimaš nobenega favorita. Dodaj kakšen nasvet s srčkom! ❤️
                </p>
            ) : (
                <Favorites
                    tips={careTips}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={toggleFavorite}
                />
            )}
        </>
    );
};

export default FavoritesSection;