import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type='text'
      name='search'
      placeholder='Search city'
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default SearchInput;
