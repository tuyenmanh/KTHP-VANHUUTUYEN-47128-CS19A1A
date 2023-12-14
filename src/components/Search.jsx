import React, { useState } from 'react';

function Search({ onSearch, onAddToFavorites }) {
  const [location, setLocation] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(location);
      setLocation('');
    }
  };



  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default Search;
