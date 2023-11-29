import React, { useState, useEffect } from 'react';
import FavoritesToolbar from './FavoritesToolbar';
import SearchInput from './SearchInput';
import CurrentWeather from './CurrentWeather';
import WeeklyWeather from './WeeklyWeather';
import axios from 'axios';

const Weather = () => {
  const [apiData, setApiData] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/weather?q=${search}`);
        const data = response.data;
        console.log(data);
        if (response.status === 200) {
          setApiData(data);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, [search]);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/weather?q=${search}`);
        const data = response.data;
        console.log('Weekly Weather Data:', data);
        if (response.status === 200 && data.length > 0 && data[0].data) {
          setWeeklyWeather(
            Object.entries(data[0].data).map(([day, weather]) => ({ day, ...weather }))
          );
        }
      } catch (error) {
        console.error('Error fetching weekly weather data:', error);
      }
    };

    fetchWeeklyData();
  }, [search]);

  const addToFavorites = (city) => {
    setFavorites([...favorites, city]);
  };

  const removeFromFavorites = (cityId) => {
    const updatedFavorites = favorites.filter((city) => city.id !== cityId);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      {/* Thêm thẻ yêu thích ở góc trái */}
      <div className='favorites-container'>
        <button
          className='toggle-favorites-button'
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? 'Hide Favorites' : 'Show Favorites'}
        </button>
        {showFavorites && (
          <FavoritesToolbar favorites={favorites} removeFromFavorites={removeFromFavorites} />
        )}
      </div>

      {/* Nội dung chính */}
      <div className='box'>
        <h1>
          Weather <span>Today</span>
        </h1>
          
        <SearchInput value={search} onChange={setSearch} />

        <CurrentWeather loading={loading} apiData={apiData} addToFavorites={addToFavorites} />

        <WeeklyWeather weeklyWeather={weeklyWeather} />

      </div>
    </div>
  );
};

export default Weather;
