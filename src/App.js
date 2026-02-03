import { useMemo, useState } from "react";
import Header from "./components/Header/Header";
import TipList from "./components/TipList/TipList";
import SearchBar from "./components/SearchBar/SearchBar";
import Favorites from "./components/Favorites/Favorites";
import EmptyState from "./components/EmptyState/EmptyState";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import TipCard from "./components/TipCard/TipCard";

import { tips } from "./data/tips";

const App = () => {
    const [search, setSearch] = useState("");
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [randomTip, setRandomTip] = useState(null);

    const filteredTips = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return tips;
        return tips.filter((t) => t.tip.toLowerCase().includes(q));
    }, [search]);

    const pickRandomTip = () => {
        const list = filteredTips.length ? filteredTips : tips;
        if (!list.length) return;

        const index = Math.floor(Math.random() * list.length);
        setRandomTip(list[index]);
    };

    const toggleFavorite = (id) => {
        setFavoriteIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
        <div>
            <Header
                title="Wig Care Tips"
                subtitle="Simple care tips for everyday wig use"
            />

            <main className="container">
                {/* Search + Random button */}
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
                        variant="random"   // 👈 HERE
                        isFavorite={favoriteIds.includes(randomTip.id)}
                        onToggleFavorite={() => toggleFavorite(randomTip.id)}
                    />
                )}

                {/* ALL TIPS */}
                <SectionTitle>All tips</SectionTitle>

                {/* EMPTY STATE */}
                {filteredTips.length === 0 && (
                    <EmptyState message="No tips found. Try another keyword." />
                )}

                <TipList
                    tips={filteredTips}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={toggleFavorite}
                />

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
