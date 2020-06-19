import React from "react";
import "./SearchBox.css";

const index = ({ placeholder, onSearchFieldChange, value }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onSearchFieldChange}
      />
    </div>
  );
};

export default index;
