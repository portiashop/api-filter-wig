import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import TipList from "./components/TipList/TipList";
import SearchBar from "./components/SearchBar/SearchBar";
import Favorites from "./components/Favorites/Favorites";
import EmptyState from "./components/EmptyState/EmptyState";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import TipCard from "./components/TipCard/TipCard";
import { tips } from "./data/tips";

const App = () => {
    // STATE
    const [search, setSearch] = useState("");
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [randomTip, setRandomTip] = useState(null);

    // Show-more state (6 at first)
    const [visibleCount, setVisibleCount] = useState(6);

    // Reset show-more when search changes
    useEffect(() => {
        setVisibleCount(6);
    }, [search]);

    // Filter by search
    const filteredTips = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return tips;
        return tips.filter((t) => t.tip.toLowerCase().includes(q));
    }, [search]);

    // Hide favorites from All tips
    const visibleTips = useMemo(() => {
        return filteredTips.filter((t) => !favoriteIds.includes(t.id));
    }, [filteredTips, favoriteIds]);

    // Only show N tips
    const tipsToShow = useMemo(() => {
        return visibleTips.slice(0, visibleCount);
    }, [visibleTips, visibleCount]);

    // Handlers
    const toggleFavorite = (id) => {
        setFavoriteIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const pickRandomTip = () => {
        const list = filteredTips.length ? filteredTips : tips;
        if (!list.length) return;

        const index = Math.floor(Math.random() * list.length);
        setRandomTip(list[index]);
    };

    return (
        <div>
            <Header
                title="Wig Care Tips"
                subtitle="Simple care tips for everyday wig use"
            />

            <main className="container">
                <div className="row">
                    <SearchBar value={search} onChange={setSearch} />
                    <button
                        className="btn btn--primary"
                        type="button"
                        onClick={pickRandomTip}
                    >
                        Random tip
                    </button>
                </div>

                {/* RANDOM TIP */}
                {randomTip && (
                    <TipCard
                        tip={randomTip.tip}
                        variant="random"
                        isFavorite={favoriteIds.includes(randomTip.id)}
                        onToggleFavorite={() => toggleFavorite(randomTip.id)}
                    />
                )}

                {/* ALL TIPS */}
                <SectionTitle>All tips</SectionTitle>

                {filteredTips.length === 0 && (
                    <EmptyState message="No tips found. Try another keyword." />
                )}

                {filteredTips.length > 0 && visibleTips.length === 0 && (
                    <EmptyState message="All matching tips are already in Favorites." />
                )}

                <TipList
                    tips={tipsToShow}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={toggleFavorite}
                />

                {/* SHOW MORE */}
                {visibleTips.length > visibleCount && (
                    <button
                        className="btn btn--secondary"
                        type="button"
                        onClick={() => setVisibleCount((c) => c + 6)}
                    >
                        Show more
                    </button>
                )}

                {/* FAVORITES */}
                <SectionTitle>Favorites</SectionTitle>
                <Favorites
                    tips={tips}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={toggleFavorite}
                />
            </main>
        </div>
    );
};

export default App;
