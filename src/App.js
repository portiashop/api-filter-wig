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



const App = () => {
    const [type, setType] = useState("all");
    // STATE
    const [search, setSearch] = useState("");

    const [tips, setTips] = useState([]);

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

// Filter by search text + type
    const filteredTips = useMemo(() => {
        const q = search.trim().toLowerCase();

        return tips.filter((t) => {
            const matchSearch =
                !q || (t.text || "").toLowerCase().includes(q);

            const matchType =
                type === "all" || t.type === type;

            return matchSearch && matchType;
        });
    }, [search, type, tips]);

    const types = useMemo(() => {
        const set = new Set(tips.map((t) => t.type));
        return ["all", ...Array.from(set)];
    }, [tips]);

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
        const list = filteredTips.length ? filteredTips : tips;
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

    useEffect(() => {
        fetch("http://localhost:1234/tips")
            .then(res => {
                console.log("Status:", res.status);
                console.log("Content-Type:", res.headers.get("content-type"));
                return res.json();
            })
            .then(data => {
                console.log("Pridobljeni nasveti:", data);
                setTips(data);               // tu pridejo podatki v state
            })
            .catch(err => console.error("Napaka:", err));
    }, []);



    // Save favorites to localStorage
    useEffect(() => {
        localStorage.setItem("wigTipsFavorites", JSON.stringify(favoriteIds));
    }, [favoriteIds]);

    // Reset pagination when search changes
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
        setShowAll(false);
    }, [search, type]);

    return (
        <div className="appShell">
            <Header
                title=" Tips"
                subtitle="Simple tips for everyday  "
            />
            <Banner
                title="Daily tips, made simple"
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
                        type={type}
                        setType={setType}
                        types={types}
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
                        careTips={tips}
                        favoriteIds={favoriteIds}
                        toggleFavorite={toggleFavorite}
                        clearAllFavorites={clearAllFavorites}
                    />
                </section>
                {/* Products can add (later) todo  */}
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
