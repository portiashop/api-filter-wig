import React, { useState, useEffect } from "react";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import TipList from "./components/TipList/TipList";

import { tips } from "./data/tips";

const App = () => {
    return (
        <div>
            <Header
                title="Wig Care Tips"
                subtitle="Simple care tips for everyday wig use"
            />

            <main className="container">
                <TipList tips={tips} />
            </main>
        </div>
    );
};

export default App;