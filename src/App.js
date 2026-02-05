import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import TipList from "./components/TipList/TipList";
import SearchBar from "./components/SearchBar/SearchBar";
import Favorites from "./components/Favorites/Favorites";
import EmptyState from "./components/EmptyState/EmptyState";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import TipCard from "./components/TipCard/TipCard";
import SearchAndRandom from "./components/SearchAndRandom/SearchAndRandom"; // ← dodan import
import RandomTipSection from "./components/RandomTipSection/RandomTipSection"; // ← dodan import za RandomTipSection
import AllTipsSection from "./components/AllTipsSection/AllTipsSection"; // ← dodan import
import FavoritesSection from "./components/FavoritesSection/FavoritesSection"; // ← dodan import
import testSlika from "./assets/test-slika.jpg"; // ← TO JE KLJUČNO!

import careTips from "./data/careTips.json";

const App = () => {
    // STATE
    const [search, setSearch] = useState("");

    // ← Tukaj dodamo inicializacijo iz localStorage
    const [favoriteIds, setFavoriteIds] = useState(() => {
        const saved = localStorage.getItem("wigTipsFavorites");
        return saved ? JSON.parse(saved) : [];
    });

    const [randomTip, setRandomTip] = useState(null);

    // Show-more state (6 at first)
    const PAGE_SIZE = 6;
    const [showAll, setShowAll] = useState(false);

    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    // ← Dodamo ta useEffect, ki shrani vsakič, ko se favorite spremenijo
    useEffect(() => {
        localStorage.setItem("wigTipsFavorites", JSON.stringify(favoriteIds));
    }, [favoriteIds]);

    // Reset show-more when search changes, Reset showAll when search changes
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
        setShowAll(false);
    }, [search]);

    // Filter by search
    const filteredTips = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return careTips;  // ← spremeni tips v careTips

        return careTips.filter((t) => t.nasvet.toLowerCase().includes(q));  // ← t.tip → t.nasvet
    }, [search]);

    // Hide favorites from All tips
    const visibleTips = useMemo(() => {
        return filteredTips.filter((t) => !favoriteIds.includes(t.id));
    }, [filteredTips, favoriteIds]);

    // Only show N tips
    const tipsToShow = useMemo(() => {
        return showAll ? visibleTips : visibleTips.slice(0, visibleCount);
    }, [visibleTips, visibleCount, showAll]);

    // Handlers
    const toggleFavorite = (id) => {
        setFavoriteIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const pickRandomTip = () => {
        // Use filtered tips if they exist, otherwise use all tips
        const list = filteredTips.length ? filteredTips : careTips; // ← tips → careTips
        // If there are no tips available, stop the function
        if (!list.length) return;
        // Pick a random index from the list
        const index = Math.floor(Math.random() * list.length);
        // Save the selected tip into state so it appears in the UI
        setRandomTip(list[index]);
    };

    const clearRandomTip = () => {
        setRandomTip(null);
    };
    const clearAllFavorites = () => {
        if (window.confirm("Res želiš izbrisati vse favorite?")) {
            setFavoriteIds([]);
        }
    };

    return (
        <div>
            <Header
                title="Wig Care Tips"
                subtitle="Simple care tips for everyday wig use"
            />
            {/* TEST: slika iz src/assets/ */}
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <h2>Test slike iz src/assets/</h2>

                {/* Prvi način – import kot URL */}
                <img
                    src={testSlika}  // ← uvozi spodaj
                    alt="Test slika"
                    style={{ maxWidth: '300px', border: '3px solid red' }}
                />

                {/* Drugi način – če import ne dela, uporabi relativno pot */}
                <img
                    src="assets/test-slika.jpg"  // ← relativna pot od App.js
                    alt="Test relativna pot"
                    style={{ maxWidth: '300px', border: '3px solid blue', marginTop: '20px' }}
                />
            </div>

            <main className="container">
                {/* Iskanje + sporočilo + random gumb – vse znotraj containerja, brez podvajanja */}
                <SearchAndRandom
                    search={search}
                    setSearch={setSearch}
                    pickRandomTip={pickRandomTip}
                />

                {/* RANDOM TIP */}
                <RandomTipSection
                    randomTip={randomTip}
                    favoriteIds={favoriteIds}
                    toggleFavorite={toggleFavorite}
                    clearRandomTip={clearRandomTip}
                />

                {/* ALL TIPS */}
                <AllTipsSection
                    filteredTips={filteredTips}
                    visibleTips={visibleTips}
                    tipsToShow={tipsToShow}
                    showAll={showAll}
                    setShowAll={setShowAll}
                    visibleCount={visibleCount}
                    setVisibleCount={setVisibleCount}
                    PAGE_SIZE={PAGE_SIZE}
                    favoriteIds={favoriteIds}
                    toggleFavorite={toggleFavorite}
                />

                {/* FAVORITES */}
                <FavoritesSection
                    careTips={careTips}
                    favoriteIds={favoriteIds}
                    toggleFavorite={toggleFavorite}
                    clearAllFavorites={clearAllFavorites}  // ← posreduj funkcijo
                />
            </main>
        </div>
    );
};

export default App;