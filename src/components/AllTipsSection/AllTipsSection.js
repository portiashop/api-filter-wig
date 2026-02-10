// src/components/AllTipsSection/AllTipsSection.jsx
import TipList from "../TipList/TipList";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./_allTipsSections.module.scss";

const AllTipsSection = ({
                            filteredTips,
                            visibleTips,
                            tipsToShow,
                            showAll,
                            setShowAll,
                            visibleCount,
                            setVisibleCount,
                            PAGE_SIZE,
                            favoriteIds,
                            toggleFavorite,
                        }) => {
    return (
        <>
            <SectionTitle>All tips</SectionTitle>

            {/* Empty states */}
            {filteredTips.length === 0 && (
                <p style={{ color: "#6B6B6B", fontStyle: "italic" }}>
                    No tips found. Try another keyword.
                </p>
            )}
            {filteredTips.length > 0 && visibleTips.length === 0 && (
                <p style={{ color: "#6B6B6B", fontStyle: "italic" }}>
                    All matching tips are already in Favorites.
                </p>
            )}

            {/* Seznam nasvetov */}
            {visibleTips.length > 0 && (
                <>
                    <div className={styles.grid}>
                        <TipList
                            tips={tipsToShow}
                            favoriteIds={favoriteIds}
                            onToggleFavorite={toggleFavorite}
                        />
                    </div>

                    {/* Pagination controls – prikaže se samo če je več kot PAGE_SIZE nasvetov */}
                    {visibleTips.length > PAGE_SIZE && (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                margin: "20px 0",
                                flexWrap: "wrap",
                                gap: "12px",
                                fontSize: "14px",
                                color: "#6B6B6B",
                            }}
                        >
              <span>
                Showing {tipsToShow.length} of {visibleTips.length}
              </span>

                            <div style={{ display: "flex", gap: "12px" }}>
                                {/* Show more – samo če ni prikazano vse */}
                                {!showAll && visibleTips.length > visibleCount && (
                                    <button
                                        className="btn btn--secondary"
                                        type="button"
                                        onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                                    >
                                        Show more
                                    </button>
                                )}

                                {/* Show all / Show less */}
                                <button
                                    className="btn btn--secondary"
                                    type="button"
                                    onClick={() => {
                                        if (showAll) {
                                            setShowAll(false);
                                            setVisibleCount(PAGE_SIZE);
                                        } else {
                                            setShowAll(true);
                                        }
                                    }}
                                >
                                    {showAll ? "Show less" : "Show all"}
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default AllTipsSection;