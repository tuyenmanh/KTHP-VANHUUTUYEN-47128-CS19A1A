import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import WeatherDetails from './WeatherDetails';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherPlay from './WeatherPlay';


function Weather() {
  const [data, setData] = useState({});
  const [hourlyData, setHourlyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [showWeatherPlay] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (data.name) {
        try {
          const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&units=metric&appid=ac3cdfdde6c81475169298d998ad1af9`;
          const hourlyResponse = await axios.get(hourlyUrl);
          const hourlyForecastData = parseHourlyData(hourlyResponse.data);
          setHourlyData(hourlyForecastData);

          const weeklyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&units=metric&appid=9f28778d35f386e1fdbbdd7efce3de1a`;
          const weeklyResponse = await axios.get(weeklyUrl);
          const weeklyForecastData = parseWeeklyData(weeklyResponse.data);
          setWeeklyData(weeklyForecastData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
  }, [data.name]);

  const parseWeeklyData = (rawData) => {
    return rawData.list.map((day) => ({
      date: day.dt * 1000,
      temperature: {
        min: day.main.temp_min,
        max: day.main.temp_max,
      },
      weatherCondition: day.weather[0].main,
      humidity: day.main.humidity,
    }));
  };

  const parseHourlyData = (rawData) => {
    return rawData.list.map((hour) => ({
      time: hour.dt_txt,
      temperature: hour.main.temp,
      weatherCondition: hour.weather[0].main,
      humidity: hour.main.humidity,
    }));
  };

  const searchLocation = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ac3cdfdde6c81475169298d998ad1af9`;

    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="app">
      <Search onSearch={searchLocation} />
      <div className="container">
        <CurrentWeather data={data} />
        {data.name !== undefined && <WeatherDetails data={data} />}
        {hourlyData.length > 0 && <HourlyForecast hourlyData={hourlyData} />}
        {weeklyData.length > 0 && <WeeklyForecast weeklyData={weeklyData} />}
        {showWeatherPlay && <WeatherPlay />}
      </div>
    </div>
  );
}

export default Weather;