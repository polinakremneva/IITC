import React from "react";

export default function FilterByTitle(props) {
  return (
    <div id="search-title">
      <label htmlFor="">Filter by Title</label>
      <input
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        type="search"
        placeholder="Filter by title"
      />
    </div>
  );
}
