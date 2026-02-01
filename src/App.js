import React, { useState, useEffect } from "react";
import "./styles/main.scss";import Header from "./components/Header/Header";
import TipCard from "./components/TipCard/TipCard";

const App = () => {
    return (
        <div>
            <Header title="Wig Care Tips" subtitle="Simple care tips for everyday wig use" />

            <main className="container">
                <TipCard tip="Store wigs on a stand to keep their shape." />
                <TipCard tip="Wash synthetic wigs every 6–8 wears." />
            </main>
        </div>
    );
};

export default App;