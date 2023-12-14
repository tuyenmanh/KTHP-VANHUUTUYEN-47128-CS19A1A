import React from 'react';

function WeeklyForecast({ weeklyData }) {
  const groupedData = weeklyData.reduce((result, item) => {
    const date = new Date(item.date);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

    if (!result[dayOfWeek]) {
      result[dayOfWeek] = item; 
    }
    return result;
  }, {});

  return (
    <div className="weekly-forecast">
      <h4>Weekly Forecast</h4>
      <div className="weekly-container">
        {Object.entries(groupedData).map(([dayOfWeek, entry]) => (
          <div key={dayOfWeek} className="daily-forecast">
            <smail>
                <p>{dayOfWeek}</p>
            </smail>
            <div className="forecast-entry">
              <smail><p>
                {entry.temperature.min}°C - {entry.temperature.max}°C
              </p>
              <p>{entry.weatherCondition}</p>
              <p>Humidity: {entry.humidity}%</p>
              </smail>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyForecast;
