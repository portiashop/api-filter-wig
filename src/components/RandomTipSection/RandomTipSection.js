// src/components/RandomTipSection/RandomTipSection.jsx
import TipCard from "../TipCard/TipCard";
import SectionTitle from "../SectionTitle/SectionTitle";
// src/components/RandomTipSection/RandomTipSection.jsx


const RandomTipSection = ({
                              randomTip,
                              favoriteIds,
                              toggleFavorite,
                              clearRandomTip,
                          }) => {
    // Če ni randomTipa, ne prikažemo ničesar
    if (!randomTip) return null;

    return (
        <div style={{ marginBottom: '40px' }}>
            <SectionTitle>Featured Random Tip</SectionTitle>

            <div>
                <TipCard
                    tip={randomTip.nasvet}
                    variant="random"
                    isFavorite={favoriteIds.includes(randomTip.id)}
                    onToggleFavorite={() => toggleFavorite(randomTip.id)}
                />

                {/* × close gumb */}
                <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    <button
                        onClick={clearRandomTip}
                        className="btn-close-icon"
                        type="button"
                        title="Zapri random nasvet"
                        aria-label="Odstrani naključni nasvet"
                    >
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RandomTipSection;