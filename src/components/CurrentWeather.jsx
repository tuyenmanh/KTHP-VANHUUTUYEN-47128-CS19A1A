import React from 'react';

function CurrentWeather({ data }) {
   
  return (
    <div className="top">
      <div className="location">
        <h1>{data.name}</h1>
      </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
      </div>
      <div className="description">
        {data.weather ? <h1>{data.weather[0].main}</h1> : null}
      </div>
    </div>
  );
}
export default CurrentWeather;