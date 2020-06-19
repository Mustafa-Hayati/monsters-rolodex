import React from "react";
import "./SearchBox.css";

const index = ({ placeholder, onSearchFieldChange, value }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onSearchFieldChange}
      />
    </div>
  );
};

export default index;
