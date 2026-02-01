import React, { useState, useEffect } from "react";
import "./styles/main.scss";
import Heading from "./components/Header/Heading";
import Input from "./components/Input/Input";
import Button from "./components/Button";
import Form from "./components/Form/Form";
import Footer from "./components/Foother/Footer";
import TipList from "./components/TipsList";
import RandomTip from "./components/RandomTip/RandomTip";
import SearchBar from "./components/SearchBar/SearchBar";
import Favorites from "./components/Favorites/Favorites";

import Tips from "./components/Tips/Tips.js";
const App = () => {
    return (
        <div>
            <h1>Wig Care Tips</h1>
            <Tips />
        </div>
    );
};

export default App;