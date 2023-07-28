import React, { FC } from "react";
import "../styles/searchBox.scss";

const SearchBox: FC = () => {
  return (
    <>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </>
  );
};

export default SearchBox;
