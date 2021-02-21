import React from 'react'
import './search-box.styles.css'


export function SearchBox({ placeholder, handleChange}) {
    return (
      <div>
        <input
          className="searchBox"
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    );
}
