import React from "react";
import 'tachyons';

const SearchBox = ({searchfield, onSearchChange}) => {
    return (
        <div className="pa2">
            <input
            className="tc pa3 ba b--green bg-lightest-blue"
            type='search'
            placeholder="Find A Minion"
            onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox;