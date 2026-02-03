import { useMemo, useState } from "react";
import Header from "./components/Header/Header";
import TipList from "./components/TipList/TipList";
import SearchBar from "./components/SearchBar/SearchBar";
import { tips } from "./data/tips";

const App = () => {
    const [search, setSearch] = useState("");

    const filteredTips = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return tips;
        return tips.filter((t) => t.tip.toLowerCase().includes(q));
    }, [search]);

    return (
        <div>
            <Header
                title="Wig Care Tips"
                subtitle="Simple care tips for everyday wig use"
            />

            <main className="container">
                <div className="row">
                    <SearchBar value={search} onChange={setSearch} />
                    <button className="btn btn--primary" type="button">
                        Random tip
                    </button>
                </div>

                <TipList tips={filteredTips} />
            </main>
        </div>
    );
};

export default App;
