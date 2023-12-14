import React from 'react';
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherNight, TiWeatherPartlySunny, TiWeatherSunny } from 'react-icons/ti';
function WeatherDetails({ data }) {
  const sunrise = data.sys ? new Date(data.sys.sunrise * 1000).toLocaleTimeString() : '';
  const sunset = data.sys ? new Date(data.sys.sunset * 1000).toLocaleTimeString() : '';

  return (
    <div className="bottom">
      <div className="feels">
        {data.main ? (
          <div>
            <p className="bold">
              <TiWeatherPartlySunny size={30} color="#000" /> {data.main.feels_like.toFixed()}°C
            </p>
            <p></p>
          </div>
        ) : null}
      </div>
      <div className="humidity">
        {data.main ? (
          <div>
            <p className="bold">
              <TiWeatherDownpour size={30} color="#007bff" /> {data.main.humidity}%
            </p>
            <p></p>
          </div>
        ) : null}
      </div>
      <div className="wind">
        {data.wind ? (
          <div>
            <p className="bold">
              <TiWeatherCloudy size={30} color="#28a745" /> {data.wind.speed.toFixed()} m/s
            </p>
            <p></p>
          </div>
        ) : null}
      </div>
      <div className="sunrise-sunset">
        <div>
          <p>
            <TiWeatherSunny size={30} color="#ffc107" />
          </p>
          <p className="bold">{sunrise}</p>
        </div>
        <div>
          <p>
            <TiWeatherNight size={30} color="#dc3545" />
          </p>
          <p className="bold">{sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
