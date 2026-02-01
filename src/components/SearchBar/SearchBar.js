import React from "react";
// Input for search functionality
function SearchBar({ search, setSearch }) {
    return (
        <input
            type="text"
            placeholder="Search tips..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchBar;