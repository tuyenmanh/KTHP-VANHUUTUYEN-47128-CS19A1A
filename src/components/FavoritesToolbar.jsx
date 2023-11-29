import React from 'react';

const FavoritesToolbar = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="container mt-3">
      <h6>Favorites</h6>
      <div className="list-group">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{favorite.name}</h5>
              <small>{favorite.temperature}°C</small>
            </div>
            <button className="btn btn-danger" onClick={() => removeFromFavorites(favorite.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesToolbar;
