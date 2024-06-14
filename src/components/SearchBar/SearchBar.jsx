/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./SearchBar.css"
const types = ["buy", "rent"]
function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: "",
        maxPrice: ""
    })
    const switchType = (val) => {
        // setQuery((prev) =>)

    }
    return (
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button key={type}
                        onClick={() => switchType(type)}
                        className={query.type === type ? "active" : ""}>{type}</button>
                ))}
            </div>
        </div>
    )
}

export default SearchBar