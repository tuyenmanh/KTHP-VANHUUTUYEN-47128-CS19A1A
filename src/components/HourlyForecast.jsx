import React from 'react';
import { FaClock, FaTemperatureHigh, FaCloud, FaTint } from 'react-icons/fa';

function HourlyForecast({ hourlyData }) {
  const visibleItems = 8;

  return (
    <div className="hourly-forecast">
      <h2>Hourly Forecast</h2>
      <div className="hourly-container">
        {hourlyData.slice(0, visibleItems).map((hour, index) => (
          <div key={index} className="hourly-item">
            <p className="time">
              <FaClock /> {formatTime(hour.time)}
            </p>
            <p className="temperature">
              <FaTemperatureHigh /> {Math.round(hour.temperature)}°C
            </p>
            <p className="weather-condition">
              <FaCloud /> {hour.weatherCondition}
            </p>
            <p className="humidity">
              <FaTint /> Humidity: {hour.humidity}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const hours = date.getHours();
  const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  return `${hours}:${minutes}`;
}

export default HourlyForecast;
