import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  className = "",
  disabled = false,
}) => {
  return (
    <div className={`flex items-center border rounded-md px-3 py-2 ${className}`}>
      {/* Search Icon */}
      <span className="text-gray-500 mr-2">
        <SearchIcon />
      </span>

      {/* Input Field */}
      <input
        type="text"
        className="flex-grow outline-none bg-transparent text-gray-700"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />

      {/* Optional Search Button */}
      {onSearch && (
        <button
          className="ml-2 text-blue-500 hover:text-blue-600"
          onClick={onSearch}
          disabled={disabled}
        >
          Search
        </button>
      )}
    </div>
  );
};

export default SearchField;
