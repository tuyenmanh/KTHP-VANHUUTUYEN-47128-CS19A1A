import React from 'react';

const CurrentWeather = ({ loading, apiData, addToFavorites }) => {
  if (loading) {
    return <p>Loading...</p>;
  } else if (apiData.length > 0) {
    const city = apiData[0];

    return (
      <div key={city.id} className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">
            <span role="img" aria-label="Location Pin">📍</span> {city.name}
          </h3>
          <p className="card-text">
            <span role="img" aria-label="Thermometer">🌡️</span> {city.temperature}°C
          </p>
          <p className="card-text">
            <span role="img" aria-label="Weather Condition">☁️</span> {city.condition}
          </p>
          <button className="btn btn-primary" onClick={() => addToFavorites(city)}>
            Add to Favorites
          </button>
        </div>
      </div>
    );
  } else {
    return <h1>No data found</h1>;
  }
};

export default CurrentWeather;