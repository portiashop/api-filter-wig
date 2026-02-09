import { useEffect, useMemo, useState } from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SearchAndRandom from "./components/SearchAndRandom/SearchAndRandom";
import RandomTipSection from "./components/RandomTipSection/RandomTipSection";
import AllTipsSection from "./components/AllTipsSection/AllTipsSection";
import FavoritesSection from "./components/FavoritesSection/FavoritesSection";

import Footer from "./components/Footer/Footer";
import topBannerImg from "url:./assets/banner-top.jpg";
import bottomBannerImg from "url:./assets/banner-bottom.jpg";


import careTips from "./data/careTips.json";

const App = () => {
    // STATE
    const [search, setSearch] = useState("");

    // Favorites from localStorage
    const [favoriteIds, setFavoriteIds] = useState(() => {
        const saved = localStorage.getItem("wigTipsFavorites");
        return saved ? JSON.parse(saved) : [];
    });

    const [randomTip, setRandomTip] = useState(null);

    // Show-more state
    const PAGE_SIZE = 6;
    const [showAll, setShowAll] = useState(false);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    // Save favorites to localStorage
    useEffect(() => {
        localStorage.setItem("wigTipsFavorites", JSON.stringify(favoriteIds));
    }, [favoriteIds]);

    // Reset pagination when search changes
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
        setShowAll(false);
    }, [search]);

    // Filter by search
    const filteredTips = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return careTips;

        return careTips.filter((t) => (t.nasvet || "").toLowerCase().includes(q));
    }, [search]);

    // Hide favorites from All tips
    const visibleTips = useMemo(() => {
        return filteredTips.filter((t) => !favoriteIds.includes(t.id));
    }, [filteredTips, favoriteIds]);

    // Only show N tips (or all)
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
        const list = filteredTips.length ? filteredTips : careTips;
        if (!list.length) return;

        const index = Math.floor(Math.random() * list.length);
        setRandomTip(list[index]);
    };

    const clearRandomTip = () => setRandomTip(null);

    const clearAllFavorites = () => {
        if (window.confirm("Do you really want to clear all favorites?")) {
            setFavoriteIds([]);
        }
    };

    return (
        <div className="appShell">
            <Header
                title="Wig Care Tips"
                subtitle="Simple care tips for everyday wig use"
            />

            {/* Banner - picture todo */}
            <Banner
                title="Daily wig care, made simple"
                text="Search tips, save favorites, and feel confident every day."
                image={topBannerImg}
            />


            <main className="container">
                {/* Search + Random */}
                <section id="top">
                    <SearchAndRandom
                        search={search}
                        setSearch={setSearch}
                        pickRandomTip={pickRandomTip}
                    />
                </section>

                {/* Random tip */}
                <section id="random">
                    <RandomTipSection
                        randomTip={randomTip}
                        favoriteIds={favoriteIds}
                        toggleFavorite={toggleFavorite}
                        clearRandomTip={clearRandomTip}
                    />
                </section>

                {/* All tips */}
                <section id="tips">
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
                </section>

                {/* Favorites */}
                <section id="favorites">
                    <FavoritesSection
                        careTips={careTips}
                        favoriteIds={favoriteIds}
                        toggleFavorite={toggleFavorite}
                        clearAllFavorites={clearAllFavorites}
                    />
                </section>

                {/* Products (later) todo  */}
                <section id="products">{/* later todo */}</section>
            </main>
            <Banner
                title="Need help choosing a wig?"
                text="Explore guides and products on LASULJE.SI"
                image={bottomBannerImg}
                linkLabel="Visit shop"
                linkUrl="https://lasulje.si"
            />

            <Footer />
        </div>
    );
};

export default App;
