import React from 'react';

const WeeklyWeather = ({ weeklyWeather }) => {
  return (
    <div className="weekly-weather mt-3">
      <h2>Weekly Weather Forecast</h2>
      {weeklyWeather.length > 0 ? (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Day</th>
              <th>Temperature (°C)</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {weeklyWeather.map((day, index) => (
              <tr key={index}>
                <td>{day.day}</td>
                <td>{day.temperature}°C</td>
                <td>{day.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5>No weekly data found</h5>
      )}
    </div>
  );
};

export default WeeklyWeather;
